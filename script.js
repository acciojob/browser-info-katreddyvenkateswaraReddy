//your JS code here. If required.
const browserInfoDiv = document.getElementById("browser-info");
const browserName = navigator.appName;
const version = navigator.appVersion;
browserInfoDiv.textContent = "You are using " + browserName + " version " + version;