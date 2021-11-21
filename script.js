const socket = io()

socket.on('searchVideo', (d) => {
  let { videoLink } = d
  document.getElementById("video-player").setAttribute("src", videoLink)
  document.getElementById('loader').style.display = "none"
})

// function to determine day and return to search function
function playDay() {
    var currentDate = new Date()
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("text-box").innerText = (dayNames[currentDate.getDay()])

    searchVideo(dayNames[currentDate.getDay()])
    console.log(dayNames[currentDate.getDay()])
}

// function to determine month and return to search function
function playMonth() {
    var currentDate = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("text-box").innerText = (monthNames[currentDate.getMonth()])

    searchVideo(monthNames[currentDate.getMonth()])
    console.log(monthNames[currentDate.getMonth()])
}

// toggles loader and outputs video link when found
function searchVideo(phrase, type) {
  document.getElementById('loader').style.display = "flex"
  socket.emit('searchVideo', { phrase })
}