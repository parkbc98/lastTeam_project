'use strict'

let talkingBtnInclude = document.querySelector('.talkingBtn-include'),
    talkingBoxInclude = document.querySelector('.talkingBox-include'),
    talkingBoxSlideGroup = talkingBoxInclude.querySelector('#talkingBox-slideGroup'),
    talkingBoxExitBtn = document.querySelector('.talkingBox_ExitBtn'),
    talkingControlBtn = talkingBoxInclude.querySelectorAll('.talking-controlBtn-container>div');

let activeIndex = 0;

// ====================================================================================================

function activeClass (index) {
    talkingControlBtn[activeIndex].classList.remove('active');
    talkingControlBtn[index].classList.add('active');
    activeIndex = index;
    
    slideEvent(index);
}
function slideEvent (index) {
    talkingBoxSlideGroup.classList.remove('secondIndex');
    talkingBoxSlideGroup.classList.remove('thirdIndex');
    switch (index){
        case 0:
            break;
            case 1:
                talkingBoxSlideGroup.classList.add('secondIndex');
                break;
                case 2:
                    talkingBoxSlideGroup.classList.add('thirdIndex');
                    break;
                }
            }
            
// ====================================================================================================
console.log('talkingBox.js is loaded!');
talkingBtnInclude.addEventListener('click', ()=>{
    console.log('talkingBtnInclude is click');
    talkingBtnInclude.style.visibility = 'hidden';
    talkingBoxInclude.classList.remove('visibilityHidden');

    talkingBoxExitBtn = document.querySelector('.talkingBox_ExitBtn')
});

talkingBoxExitBtn.addEventListener('click', ()=>{
    talkingBoxInclude.classList.add('visibilityHidden');
    talkingBtnInclude.style.visibility = 'visible';
});

for(let i = 0; i < talkingControlBtn.length; i++){
    talkingControlBtn[i].addEventListener('click', ()=>{
        activeClass(i);
    })
}