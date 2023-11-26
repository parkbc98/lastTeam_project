export function slideImg (slideContainer, slideItems) {
    // 현재 idx, 동작시간, 
    // let currentIdx = 0;
    let speedTime = 1000;
    let movementNum = 21; // 21vm씩 이동
    let calc = 1;

    // 슬라이드요소를 끝단에 복제하기
    let slideItemsClone = [...slideItems];
    console.log(slideItemsClone);
    slideItemsClone.forEach(element => {
        
    });
    slideContainer.appendChiled(slideItemsClone);

    setInterval(()=>{
        if(slideItems.lenght == calc){
            calc = 1;
        } else{
            calc++;
        }

        slideContainer.style.left = `-${movementNum * calc}vw`;
    }, speedTime)
}