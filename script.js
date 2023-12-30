'use strict';
document.querySelector('.react').textContent = prompt('Please Enter Your Reaction score') 
document.querySelector('.mem').textContent = prompt('Please Enter Your Memory score')
document.querySelector('.verb').textContent = prompt('Please Enter Your Verbal score') 
document.querySelector('.vis').textContent = prompt('Please Enter Your Visual score')
let react_score = document.querySelector('.react').textContent 
let keyword = document.querySelector('.percent')
let mem_score = document.querySelector('.mem').textContent
let verbal_score = document.querySelector('.verb').textContent
let visual_score = document.querySelector('.vis').textContent
const scores = [Number(mem_score),Number(visual_score),Number(react_score),Number(verbal_score)]

document.querySelector('.cont').addEventListener('click',function() {
    let sum  = 0 
scores.forEach(n => sum += n)
let average = sum/scores.length
document.querySelector('#score').textContent = Math.trunc(average)

if(average >= 60){
keyword.textContent = 'Congratulation!🎉🎉 you passed the test.You can now proceed to the next grade'
// document.querySelector('#score').style.marginLeft = 
}else if(average < 60 && average > 20){
keyword.textContent = 'Ooh I am sorry😥 but you did not pass the test.You can always try again'
}
else if(average = 0 || average < 20){
document.querySelector('#score').style.marginLeft = '75px'
    keyword.textContent = 'I am sorry but you are cannot proceed to the next grade'
}
})


// const add = function(...scores){
//  let sum = 0;
//  for (let i = 0; i < scores.length; i++) {
//   sum += scores[i];
//   console.log(sum)
//  }
// }



