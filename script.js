const socket = io()

socket.on('searchVideo', (d) => {
  let { videoLink } = d
  document.getElementById("video-player").setAttribute("src", videoLink)
})
function playDay() {
    var currentDate = new Date()
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("text-box").innerText = (dayNames[currentDate.getDay()])

    searchVideo(dayNames[currentDate.getDay()])
    console.log(dayNames[currentDate.getDay()])
}

// on call runs search for current month of the year then passes the month to search function
function playMonth() {
    var currentDate = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("text-box").innerText = (monthNames[currentDate.getMonth()])

    searchVideo(monthNames[currentDate.getMonth()])
    console.log(monthNames[currentDate.getMonth()])
}

function searchVideo(phrase, type) {
  socket.emit('searchVideo', { phrase })
}

