let i = 0;
let j = 0;
let images = ['IMG/Bengal 5.jpg', 'IMG/Bengal 6.jpg', 'IMG/Pink 2 Siamese.jpg', 'IMG/Siamese bicycle 3.jpg', 'IMG/Sphynx 2.jpg'];
let interval;
let slide = document.querySelector('img');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');

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
    }, 3000)
}
slideTime()
leftBtn.addEventListener('click',(e)=>{
    slide.src = images[j]
    if(j<images.length){
        j--
        console.log('i ran in j--')
    }else{
        j = 0;
        console.log('i ran in j else')
    }
    e.preventDefault()
})

rightBtn.addEventListener('click',(e)=>{
    changeImg()
    e.preventDefault()
})