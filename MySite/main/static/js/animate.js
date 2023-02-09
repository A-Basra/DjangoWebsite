function animatefunc() {
    event.preventDefault()
    var logo = document.getElementById("Logo")
    var menu = document.getElementById("Menu")

    logo.animate([
        { 'left': '50%', 'top': '27.5%' },
        { 'left': '5%', 'top': '10%' }
    ],
        { duration: 500 })
    menu.animate([
        { 'position':'abolsute','left': '50%', 'top': '45%', 'width': '10%' },
        { 'position': 'fixed','left': '5%', 'top': '30%', 'width': '7.5%'}
    ],
        { duration: 500 })
    menu.style.position = 'fixed'
    logo.style.left = "5%"
    logo.style.top = "10%"
    menu.style.left = '5%'
    menu.style.top = '30%'
    menu.style.width = '7.5%'

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