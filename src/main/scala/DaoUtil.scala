import scala.concurrent.{Future, Await}
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.duration.Duration
import slick.backend.DatabasePublisher
import slick.driver.MySQLDriver.api._
import java.sql.Date

// The main application
object DaoUtil extends App {
  // Create a connection (called a "session") to an in-memory H2 database
  val db = Database.forURL("jdbc:mysql://localhost:8889/digitalnoticeboard", driver="com.mysql.jdbc.Driver", user="root", password="root")

  try {
    val notice: TableQuery[Notice] = TableQuery[Notice]
    val users: TableQuery[User] = TableQuery[User]

    val setupAction: DBIO[Unit] = DBIO.seq(

      (users.schema ++ notice.schema).create,

      users +=(1,"RV","rag","rag","Computer Science",1),
      users +=(2,"Pesit","abcd","1234","Computer Science",1),
      users +=(3,"BIT","qwer","xcdf","Computer Science",1)
    )
    val setupFuture: Future[Unit] = db.run(setupAction)
    val f = setupFuture.flatMap { _ =>

      val insertAction: DBIO[Option[Int]] = notice ++= Seq (
        (4,"Hello","Important","12-3-15","12-3-16","8:00","9:00",1,"rag",3),
        (5,"Hello pesit","very Important","12-3-15","12-4-16","7:00","9:00",2,"abcd",5)

      )

      val insertAndPrintAction: DBIO[Unit] = insertAction.map { noticeInsertResult =>

        noticeInsertResult foreach { numRows =>
          println(s"Inserted $numRows rows into the notice table")
        }
      }

      val allUsersAction: DBIO[Seq[(Int, String, String, String, String, Int)]] =
        users.result

      val combinedAction: DBIO[Seq[(Int, String, String, String, String, Int)]] =
        insertAndPrintAction >> allUsersAction

      val combinedFuture: Future[Seq[(Int, String, String, String, String, Int)]] =
        db.run(combinedAction)

      combinedFuture.map { allUsers =>
        allUsers.foreach(println)
      }

    }
    Await.result(f, Duration.Inf)

  }
  finally db.close()
  }