let h1 = document.querySelector("header h1")

function nameAnimation() {
    let name1 = "Benjamin M. Bowers"
    let count = 0;
    let firstTimer = setInterval(() => {
        h1.textContent += name1[count]
        count++

        if (name1[count] === undefined) {
            clearInterval(firstTimer)
        }
    }, 100)
}

nameAnimation();