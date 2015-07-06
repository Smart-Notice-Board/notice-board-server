import slick.driver.MySQLDriver.api._
import slick.lifted.{ProvenShape, ForeignKeyQuery}

class User(tag: Tag)
  extends Table[(Int, String, String, String, String, Int)](tag, "USER") {


  def uid: Rep[Int] = column[Int]("Uid", O.PrimaryKey)
  def college: Rep[String] = column[String]("CollegeName")
  def username: Rep[String] = column[String]("username")
  def password: Rep[String] = column[String]("password")
  def department: Rep[String] = column[String]("department")
  def user_priority: Rep[Int] = column[Int]("user_priority")

  def * : ProvenShape[(Int, String, String, String, String, Int)] =
    (uid, college, username,password,department, user_priority)

}

class Notice(tag: Tag)
  extends Table[(Int, String, String,String,String,String,String,Int,String,Int)](tag, "NOTICE") {

  def nuid: Rep[Int] = column[Int]("Uid",O.PrimaryKey)
  def notice_name: Rep[String] = column[String]("Notice_Name")
  def typ: Rep[String] = column[String]("Type")
  def start_date: Rep[String] = column[String]("Start_Date")
  def end_date: Rep[String] = column[String]("End_Date")
  def start_time: Rep[String] = column[String]("Start_Time")
  def end_time: Rep[String] = column[String]("End_Time")
  def notice_priority: Rep[Int] = column[Int]("notice_priority")
  def username:Rep[String] = column[String]("username")
  def sem: Rep[Int] = column[Int]("Semester")

  def * : ProvenShape[(Int,String,String,String,String,String,String,Int,String,Int)] =
    (nuid,notice_name,typ,start_date,end_date,start_time,end_time,notice_priority,username,sem)

}