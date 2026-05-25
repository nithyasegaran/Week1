//Create and call two JavaScript functions: `launchBrowser` 
// with `if-else` for browser launch messages, and 
// `runTests` with `switch` for test type messages.

let browserName = "CHROME" 


function launchBrowser(browserName){
    if (browserName == "Chrome" || browserName == "chrome" || browserName == "CHROME") {
        console.log("It's a Chrome Browser")
    }
    else console.log( browserName + " is not a Chrome Browser")
}
launchBrowser(browserName)

//Switch case

let testType ="Regression"
switch (testType) {
    case "Smoke":
        console.log("Its a smoke test")
        break;
    case "Sanity":
        console.log("Its a sanity test")
        break;
    case "Regression":
        console.log("Its a regression test")
        break;
    default:
        console.log("It's a smoke test")
        break;
}

