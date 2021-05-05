const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    /* making sure it doesn't go past available steps */
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--

    /* making sure it can't go below 1 */
    if (currentActive < 1) {
        currentActive = 1
    }
    // console.log (currentActive);
    update();
})

function update() {
    circles.forEach((circle, index) => {
        /* check if index is less than currentActive */
        if(index < currentActive) {
            /*if so add active class */
            circle.classList.add('active')
        } else {
            /* otherwise remove active class */
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    /*We know how many circles we have total (circles.length) and we know what circle we're currently on (actives.length). We use this to find a percantage. This way we can dynamically change the color of the progress bar for the fill-in effect */
    
    //console.log( (actives.length/circles.length) * 100 )

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    /* If we're only in step one, the prev button should remain disabled */
    if(currentActive == 1) {
        prev.disabled = true;
    /* If we're at the last step, then we want the Next button to be disabled */
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}