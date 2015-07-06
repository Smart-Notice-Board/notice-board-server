import akka.actor._
import spray.http.MediaTypes
import spray.routing.SimpleRoutingApp
import akka.io.IO
import spray.can.Http

/**
 * Created by raghavrastogi on 05/07/15.
 */
object ScalaBay extends App {

  implicit val actorsystem = ActorSystem("digital-notice-board")
  val digitalService = actorsystem.actorOf(Props[DigitalServiceActor],"digital-endpoint")

  IO(Http) ! Http.Bind(digitalService,"localhost",8081)

}
