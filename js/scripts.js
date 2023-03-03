
/*    Navigation Bar    */

$(function() {
    $("#loginButton").click(function() {
        $('#loginModal').modal('show')
    })
})


/*    Home/Index Page - phase#1    */

const countDownDate = new Date("Mar 14, 2023 00:00:00").getTime()

const x = setInterval(function() {
    const now = new Date().getTime()
    const distance = countDownDate - now

    function zeroFill(n) {
        let str = ("00" + n.toString()).slice(-2)
        return str
      
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    const d = zeroFill(days)
    const h = zeroFill(hours)
    const m = zeroFill(minutes)
    const s = zeroFill(seconds)
    
    
    document.getElementById("countdown").textContent = `${d}:${h}:${m}:${(s)}`
    if (distance <= 0) {
        clearInterval(x)
        document.getElementById("countdown").textContent = "Initiating: Phase II"
    }
}, 1000)







