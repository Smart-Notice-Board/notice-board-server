import org.json4s.{Extraction, ShortTypeHints}
import org.json4s.native.Serialization
import org.json4s._
import spray.json._


/**
 * Created by raghavrastogi on 05/07/15.
 */

trait Details

case class CollegeDetails(name:String,departments:Int) extends Details

object Details extends DefaultJsonProtocol{
  val details = List[Details](CollegeDetails(name = "Rv", departments = 16))

  //implicit val format = jsonFormat4(CollegeDetails)

}