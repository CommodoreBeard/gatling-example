var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1016",
        "ok": "1016",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2626",
        "ok": "2626",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1325",
        "ok": "1325",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1272",
        "ok": "1272",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1432",
        "ok": "1432",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1641",
        "ok": "1641",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2386",
        "ok": "2386",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 35,
        "percentage": 35
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 65,
        "percentage": 65
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.834",
        "ok": "5.834",
        "ko": "-"
    }
},
contents: {
"req_search-for-an-i-354c8": {
        type: "REQUEST",
        name: "Search for an item",
path: "Search for an item",
pathFormatted: "req_search-for-an-i-354c8",
stats: {
    "name": "Search for an item",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1016",
        "ok": "1016",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2626",
        "ok": "2626",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1325",
        "ok": "1325",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1272",
        "ok": "1272",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1432",
        "ok": "1432",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1641",
        "ok": "1641",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2386",
        "ok": "2386",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 35,
        "percentage": 35
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 65,
        "percentage": 65
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.834",
        "ok": "5.834",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
