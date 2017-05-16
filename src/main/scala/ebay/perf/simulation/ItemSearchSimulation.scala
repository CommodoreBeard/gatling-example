package ebay.perf.simulation

import java.security.SecureRandom
import java.util.concurrent.TimeUnit.SECONDS

import ebay.perf.Properties._
import ebay.perf.Assertions._
import ebay.perf.SearchItems._
import ebay.perf.simulation.ItemSearchSimulation._
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration.FiniteDuration

package object ItemSearchSimulation {

  val random = new SecureRandom()

  def searchForItem = exec(http("Search for an item")
      .get(s"http://www.ebay.co.uk/sch/i.html?&_nkw=${itemList.lift(random.nextInt(itemList.size))}")
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