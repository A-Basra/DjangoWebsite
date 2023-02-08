function move(redirect) {
    event.preventDefault()
    var logo = document.getElementById("Logo")
    var menu = document.getElementById("Menu")

    logo.animate([
        { 'left': '50vw', 'top': '25vh' },
        { 'left': '5vw', 'top': '7.5vh' }
    ],
        { duration: 1000 })


    menu.animate([
        { 'left': '50vw', 'top': '40vh', 'width': '10vw' },
        { 'left': '1vw', 'top': '20vh', 'width': '7.5vw', 'margin-left': '0' }
    ],
        { duration: 1000 })

    logo.style.left = "5vw"
    logo.style.top = "7.5vh"
    menu.style.left = '1vw'
    menu.style.top = '20vh'
    menu.style.width = '7.5vw'
    menu.style.marginLeft = '0'

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