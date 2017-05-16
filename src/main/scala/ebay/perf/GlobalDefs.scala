package ebay.perf

import io.gatling.core.Predef._

object Properties {
  val repeatTimes: Int = Integer.parseInt(System.getProperty("repeatTimes"))
  val userCount: Int = Integer.parseInt(System.getProperty("userCount"))
}

object Assertions {
  val assertList: List[Assertion] = List(global.responseTime.max.lessThan(15000),
    global.responseTime.percentile3.lessThan(7500),
    global.failedRequests.count.is(0))
}