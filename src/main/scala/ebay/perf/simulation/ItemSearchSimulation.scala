package ebay.perf.simulation

import java.util.concurrent.TimeUnit.SECONDS

import ebay.perf.Properties._
import ebay.perf.Assertions._
import ebay.perf.simulation.ItemSearchSimulation._
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.FiniteDuration

package object ItemSearchSimulation {

  def searchForItem = exec(http("Search for an item")
      .get("http://www.ebay.co.uk/sch/i.html?&_nkw=iphone")
      .check(status.is(200))
  )
}

class ItemSearchSimulation extends Simulation {

  val searchForItemScenario = scenario("Item Search")
    .repeat(repeatTimes) {
      exec(searchForItem)
    }

  setUp(
    searchForItemScenario.inject(rampUsers(userCount) over FiniteDuration(5, SECONDS))
  ).assertions(assertList)
}