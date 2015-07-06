name := "SprayTutorial"

version := "1.0"

scalaVersion := "2.11.7"

resolvers += "spray repo" at "http://repo.spray.io"

val sprayVersion = "1.3.3"

libraryDependencies ++= Seq(

   "com.typesafe.akka" %% "akka-actor" % "2.3.9",

  "com.typesafe.akka" %% "akka-http-experimental" % "0.7",

  "io.spray" %% "spray-routing" % sprayVersion,
  "io.spray" %% "spray-client" % sprayVersion,
  "io.spray" %% "spray-testkit" % sprayVersion,
  "io.spray" %%  "spray-json" % "1.3.2",
"org.json4s" %% "json4s-native" % "3.2.10",
"com.typesafe.scala-logging" %% "scala-logging-slf4j" % "2.1.2",
"org.scalatest" %% "scalatest" % "2.2.2" % "test",
  "mysql" % "mysql-connector-java" % "5.1.36",
"com.typesafe.slick" %% "slick" % "3.0.0",
  "org.slf4j" % "slf4j-nop" % "1.6.4",
  "net.liftweb" %% "lift-json" % "2.6.2"
)