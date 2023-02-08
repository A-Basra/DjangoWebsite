function animatefunc() {
    event.preventDefault()
    var logo = document.getElementById("Logo")
    var menu = document.getElementById("Menu")

    logo.animate([
        { 'left': '50vw', 'top': '25vh' },
        { 'left': '5vw', 'top': '7.5vh' }
    ],
        { duration: 500 })

    menu.animate([
        { 'left': '50vw', 'top': '40vh' },
        { 'left': '4.5vw', 'top': '25vh' }
    ],
        { duration: 500 })
    logo.style.left = "5vw"
    logo.style.top = "7.5vh"
    menu.style.left = '4.5vw'
    menu.style.top = '25vh'
    menu.style.marginLeft = '0vw'

}
function redirection(redirect) {
    location.href = redirect
}
function move(redirect) {
    animatefunc()
    setTimeout(function () {
        redirection(redirect)
    }, 500)
}

expanded = false
function expandBg() {
    var bg = document.getElementById("background")
    if (!expanded) {
        bg.animate([
            { 'width': '1vw' },
            { 'width': '90vw' }
        ],
            { duration: 1000 })
        bg.style.width = "90vw"
        expanded = true
    }
}