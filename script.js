// Thought Process
// Grab the src of all the images to be used 
// Grab the left and right buttons from the html
// Grab the image element from the html
// Writing inside a function(changeImg), set the src of the img to a local variable [i]
// Using if/else statement, check if [i] is less than the number of index present in the array
// If true, increment [i++]
// Else let the [i] be the first index
// For an automatic slide, write a setInterval code and run the function(changeImg)
// For the left(backward) and right(forward) buttons;
// Add eventListeners of 'click' for the forword button and run the changeImg() function
// Add eventlisterners of 'click' for the backward button and decrement [i--]
let i = 0;
let images = ['IMG/Bengal 5.jpg', 'IMG/Bengal 6.jpg', 'IMG/Pink 2 Siamese.jpg', 'IMG/Siamese bicycle 3.jpg', 'IMG/Sphynx 2.jpg'];
let interval;
let slide = document.querySelector('img');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right')
let mousdown = false

let changeImg = ()=>{
    slide.src = images[i]
    // You can also use this
    // slide.setAttribute('src', images[i])
    if(i < images.length -1){
        i++
    }else{
        i = 0;
    }
}
let slideTime = ()=>{
    interval = setInterval(()=>{
        changeImg()
    }, 1500)
}
changeImg()
slideTime()
leftBtn.addEventListener('click',(e)=>{
    i--
    slide.src = images[i]
    if(i < 0){
        i = images.length -1
    }
    e.preventDefault()
})
rightBtn.addEventListener('click',(e)=>{
    changeImg()
    e.preventDefault()
})
rightBtn.addEventListener('mouseenter', (e)=>{
    clearInterval(interval)
    e.preventDefault()
})
leftBtn.addEventListener('mouseenter', (e)=>{
    clearInterval(interval)
})
rightBtn.addEventListener('mouseleave', ()=>{
    slideTime()
    e.preventDefault()
})
leftBtn.addEventListener('mouseleave', ()=>{
    slideTime()
    e.preventDefault()
})