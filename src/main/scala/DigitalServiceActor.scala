import akka.actor.Actor
import akka.actor.Actor

import scala.concurrent.Future
import scala.util._
//import com.sysgears.example.dao.CustomerDAO
//import com.sysgears.example.domain._
import java.text.{ParseException, SimpleDateFormat}
import java.util.Date
import net.liftweb.json.Serialization._
import net.liftweb.json.{DateFormat, Formats}
import scala.Some
import spray.http._
import spray.httpx.unmarshalling._
import spray.routing._
import slick.driver.MySQLDriver.api._
import scala.concurrent.ExecutionContext.Implicits.global
import spray.httpx.marshalling.ToResponseMarshallable
/**
 * Created by raghavrastogi on 06/07/15.
 */
class DigitalServiceActor extends HttpServiceActor {

  private val db = Database.forURL("jdbc:mysql://localhost:8889/digitalnoticeboard", driver = "com.mysql.jdbc.Driver", user = "root", password = "root")

  def receive = runRoute {
    path("colleges") {
      get {

        val users = TableQuery[User]

        val q = users.filter(_.uid > 1).map(_.college)

        val action = q.result

        val result: Future[Seq[String]] = db.run(action)
        onComplete()
      }
    }
  }
}
