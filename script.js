// initialise variables
const nightmare = require('nightmare')()

// const Nightmare = require('nightmare')
// const nightmare = Nightmare()

// I think I may need to add something to allow "require" to work in browser outside of node.js in terminal

// nightmare js does seem to be a bit outdated also tried puppeteer js but same issues arose
// nightmare - https://github.com/segmentio/nightmare
// puppeteer - https://github.com/puppeteer/puppeteer


// call for script testing console logs should return ("node script.js" in terminal)
// November and https://video.playphrase.me/5b1837c28079eb4cd4a53e99/5e8b7c0424aa9a0025987688.mp4
playMonth()


// on call runs search for current day of the week then passes the month to search function
function playDay() {
    var currentDate = new Date()
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    searchVideo(dayNames[currentDate.getDay()])
    console.log(dayNames[currentDate.getDay()])
}

// on call runs search for current month of the year then passes the month to search function
function playMonth() {
    var currentDate = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    searchVideo(monthNames[currentDate.getMonth()])
    console.log(monthNames[currentDate.getMonth()])
}

// searches for the correct video based on the passed phrase and changes the iframe src appropriately 
async function searchVideo(phrase) {
    var videoLink = await nightmare.goto("https://www.playphrase.me/#/search?q=" + phrase)
                                    .wait("#video-player-0")
                                    .evaluate(() => document.getElementById("video-player-0").getAttribute("src"))
                                    .end()

    // get id of iframe from index and change the src to the src found above
    // document.getElementById("video-player").setAttribute("src", videoLink)

    console.log(videoLink)
}