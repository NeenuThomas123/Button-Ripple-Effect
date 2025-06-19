//select all buttons in ripple class
const buttons = document.querySelectorAll('.ripple')

//loop through each button
buttons.forEach(button =>{
    button.addEventListener('click' , function(event) {

//event give the information about the click
//event.clientx means how many pixels from the left edge of the whole sceen did you clcik
        const x = event.clientX

//event.clienty means how many pixels from the top edge of the whole scrren did you click
        const y = event.clientY

//event.target is the button you clicked

//offsetTop means how far is the button from the top of the page
        const buttonTop = event.target.offsetTop
        
        const buttonLeft = event.target.offsetLeft


//xinside--how many pixels inside the button(horizontally) you clicked
//full-page click positionx - substract the button left distance buttonleft/buttonright
        const xInside = x - buttonLeft

        const yInside = y - buttonTop

        const circle = document.createElement('span')

        circle.classList.add('circle')

        circle.style.top = yInside + 'px'

        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove() , 500)
    })
})

