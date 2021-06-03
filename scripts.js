const footerButton = document.getElementById("footerButton")
const body = document.getElementById("body")
footerButton.style.backgroundColor = "rgb(68, 68, 68)"

footerButton.addEventListener("click", () => {
    const buttonColorOne = "rgb(68, 68, 68)"
    const buttonColorTwo = "rgb(102, 136, 3)"
    const bodyColorOne = "rgb(211, 211, 211)"
    const bodyColorTwo = "rgb(245, 255, 225)"

    if (footerButton.style.backgroundColor === buttonColorOne) {
        footerButton.style.backgroundColor = buttonColorTwo
        body.style.backgroundColor = bodyColorTwo
    }
    else {
        footerButton.style.backgroundColor = buttonColorOne
        body.style.backgroundColor = bodyColorOne
    }
})
