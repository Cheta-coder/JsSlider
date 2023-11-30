let i = 0;
let images = ['IMG/Bengal 5.jpg', 'IMG/Bengal 6.jpg', 'IMG/Pink 2 Siamese.jpg', 'IMG/Siamese bicycle 3.jpg', 'IMG/Sphynx 2.jpg'];
let interval;
let slide = document.querySelector('img');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');
j = images.length -1

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
changeImg()
// slideTime()
leftBtn.addEventListener('click',(e)=>{
    // for(let j = images.length -1; j > -1; j--){
    //     slide.src = images[j]
    //     console.log(images[j])
    // }

    slide.src = images[i];
    if(j<images.length -1){
        i--
        console.log('ran in if')
    }else{
        i = images.length -1
        console.log('ran in else')
    }

    e.preventDefault()
})

rightBtn.addEventListener('click',(e)=>{
    changeImg()
    e.preventDefault()
})