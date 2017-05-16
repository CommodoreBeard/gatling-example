# Ebay Search Performance Test - Basic

This project was created as a coding exercise for a job application. There is no mention of the organisation or the specified tasks within this project.

## Project details
- Dependency Management / Task Runner:  [Gradle](https://gradle.org)
- Language: [Scala](https://www.scala-lang.org/)
- Performance Framework [Gatling](http://gatling.io/)

## Simulations
Performance tests are created as simulations. This project only consists of one simulation: `src/main/scala/ebay/perf/sumilation/ItemSearchSimulation.scala`

## Running Tests
The performance test can be run using the gradle task `ebayPerfTest`:

`./gradlew ebayPerfTest`

There are two variables which can be passed into the `ebayPerfTest` task. These are 
- `userCount` : Number of concurrent simulations to be executed
- `repeatTimes` : Number of times each concurrent user repeats the simulation
 
e.g.
`./gradlew ebayPerfTest -PuserCount=5 -PrepeatTimes=20`

Both parameters have default values, these are both set to 10. This configuration can be found in `gradle.properties`

## Test Results
Tests will produce html result charts. The path for which is printed at the end of a test run, an example of this print:

```bash
================================================================================
---- Global Information --------------------------------------------------------
> request count                                        100 (OK=100    KO=0     )
> min response time                                   1016 (OK=1016   KO=-     )
> max response time                                   2626 (OK=2626   KO=-     )
> mean response time                                  1325 (OK=1325   KO=-     )
> std deviation                                        242 (OK=242    KO=-     )
> response time 50th percentile                       1272 (OK=1272   KO=-     )
> response time 75th percentile                       1432 (OK=1432   KO=-     )
> mean requests/sec                                  5.834 (OK=5.834  KO=-     )
---- Response Time Distribution ------------------------------------------------
> t < 800 ms                                             0 (  0%)
> 800 ms < t < 1200 ms                                  35 ( 35%)
> t > 1200 ms                                           65 ( 65%)
> failed                                                 0 (  0%)
================================================================================
Reports generated in 0s.
Please open the following file: /Users/joseph/git/personal/qmetric/ebay-perf/build/results/itemsearchsimulation-1494926253345/index.html
Global: max of response time is less than 15000 : true
Global: 95th percentile of response time is less than 7500 : true
Global: count of failed requests is 0 : true
BUILD SUCCESSFUL
```

For demonstration purposes I have included an example set of result charts in the `resources/example-test-results` directory. Please open the index.html file in a web browser to view.

## Notes

###  Web app vs API
In this simulation I am using the Ebay web app to execute the "Searches". This is achieved by adding a simple query string to the web endpoint:
 
`http://www.ebay.co.uk/sch/i.html?&_nkw=${itemList.lift(random.nextInt(itemList.size))}`

The alternative to this would be to investigate using the ebay public api as described here: [Ebay API](https://go.developer.ebay.com/)

### Version conflicts
I had some conflicting issues using the latest version Scala / Scala Gradle plugin / Gradle. A number of curious errors were being thrown by Gradle and to quickly get this project working I have reverted to a known good combination of versions.