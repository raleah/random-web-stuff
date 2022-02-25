function getBrowserName() {
    var nameBrowser = navigator.userAgent;

    if(nameBrowser.indexOf("Chrome") >=0){
        return "Chrome";
    }

        else if (nameBrowser.indexOf("Firefox") >=0){
        return "Firefox";
    }

        else if (nameBrowser.indexOf("Internet Explorer") >=0){
            return "Internet Explorer";
    }

        else if (nameBrowser.indexOf("Edge") >=0){
            return "Edge";
    }

        else if (nameBrowser.indexOf("Safari") >=0){
           return "Safari";
    }

        else if (nameBrowser.indexOf("Opera") >=0){
            return "Opera";
    }

        else {
            return "Some Strange Browser";
    }
   
}

function getBrowserVersion() {
    var userInfo = navigator.userAgent;
    var browser = getBrowserName();
    var findIndex = userInfo.indexOf(browser) + browser.length + 1;
    var browserVersion = parseFloat(userInfo.substring(findIndex, findIndex + 3));

    return browserVersion;
}

var browserName = getBrowserName();
var browserVersion = getBrowserVersion();
var height = window.innerHeight
var width = window.innerWidth

function display(){
    document.write("You are using version " + browserVersion + " of the " + browserName + " browser to view this page in a browser whose inner window that is " + width + " pixels wide and " + height + " pixels tall.") 
}
