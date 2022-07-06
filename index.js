const nav = document.querySelector('.list2')
const btn = document.querySelector('.navBtn')

const kernelimg = document.querySelector('.kernelimg')



btn.addEventListener('click', ()=>{

    nav.classList.toggle('show');
})





let scrollbtn = document.querySelector('.scrollUp');

window.addEventListener('scroll' , reveal);
     


    function reveal(){

let reveals = document.querySelectorAll('.capeInfo');

for(let i=0 ; i < reveals.length; i++){

let windowHeight = window.innerHeight;
var revealTop = reveals[i].getBoundingClientRect().top;
let revealPoint = 150;



if(revealTop < windowHeight - revealPoint){
reveals[i].classList.add('active');
scrollbtn.classList.add('show')

}
else{
    reveals[i].classList.remove('active');
    scrollbtn.classList.remove('show')
}

}




    }



