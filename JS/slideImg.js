export function slideImg (slideContainer, slideItems) {
    // 현재 idx, 동작시간, 
    // let currentIdx = 0;
    let slideContainerModul = document.querySelector('.slide-container');
    let speedTime = 1000;
    let movementNum = 20.25; // 21vm씩 이동
    let calc = 0;
    let slideLenght = slideItems.length;
    // 슬라이드요소를 끝단에 복제하기
    let cloned = slideContainer.innerHtml;
    // let slideItemsClone = [...slideItems];
    // console.log(slideContainer);
    // slideItemsClone.forEach((element, idx) => {
    //     slideContainer.appendChiled(element);
    // });

    setInterval(()=>{
        if(calc == slideLenght){
            slideContainer.classList.add('goFirst');
            // console.log(slideContainer.classList);
            calc = 0;
            // console.log(slideContainer.style.left);
            slideContainer.style.left = `-0vw`;
            // console.log(slideContainer.style.left);
            slideContainer.classList.remove('goFirst');
            // console.log(slideContainer.classList);
        } else{
            calc++;
        }

        slideContainer.style.left = `-${movementNum * calc}vw`;
    }, speedTime)
}