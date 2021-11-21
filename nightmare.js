const Nightmare = require('nightmare')

async function searchVideo(phrase) {
  const nightmare = Nightmare()
  var videoLink = await nightmare.goto("https://www.playphrase.me/#/search?q=" + phrase)
                                  .wait("#video-player-0")
                                  .evaluate(() => document.getElementById("video-player-0").getAttribute("src"))
                                  .end()
  return videoLink
}

module.exports = { searchVideo }
