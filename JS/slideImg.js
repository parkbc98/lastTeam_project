export function slideImg (mainProductListContainer, slideContainer, slideItems) {

    let speedTime = 2000;
    let moveDuring = 10; // 부르럽게 움직이기
    let movementNum = slideItems[0].offsetWidth+10; // 이미지 너비
    // let movementNum = 20.5; // 이미지 너비
    console.log(movementNum);
    // 요소위치 체크
    let calc = 0;
    let slideLenght = slideItems.length;

    // 슬라이드요소를 끝단에 복제하기
    let cloned = slideContainer.innerHTML;
    slideContainer.innerHTML += cloned;

    function sliding() {
        let moveSum = calc*movementNum; // 움직일값 누적변수
        // speedTime 동안 movementNum 만큼 이동
        // moveDuring 마다 movementNum / (speedTime / moveDuring) 만큼 이동

        if (calc === slideLenght) {  // 끝가지 가면, 0위치로 초기화
            calc = 0;
            slideContainer.style.left = `-0px`;
        }
            // speedTime만큼 moveDuring마다 소폭이동
            const slide = setInterval(() => {
                slideContainer.style.left = `-${moveSum}px`;
                moveSum += ( movementNum / (speedTime / moveDuring) );
            }, moveDuring)
            // speedTime만큼 동작후, 정지
            setInterval(()=>{
                clearInterval(slide);
            }, speedTime+5) // flex gap : 10
    }
    
    let slideShow = setInterval(()=>{
        // 이미지 너비
        sliding();
        calc++;
    }, (speedTime + 1000)); // 뒤에 더하는 시간은 슬라이드 간격
    


    // === 드래그 슬라이드 ==============================================
    let pressed = false;       // 마우스 클릭여부
    let startx                 // 마우스의 초기위치
    let x                      // 마우스 x위치

    const dragScroll = (e, scroll) => {
        switch (scroll) {
          case 'start': // 마우스 버튼 누르는 경우
            setOriginX(e.clientX);
            setIsScroll(true);
            break;
          case 'end': // 마우스를 버튼 누르기 중단
            setAfterX(position);
            setIsScroll(false);
            break;
          case 'leave': // 마우스가 영역을 벗어난 경우
            setIsScroll(false);
            break;
          default:
            break;
        }
    };

    mainProductListContainer.addEventListener("mousedown", e => {
        // 슬라이드 중단
        clearInterval(slideShow);
        pressed = true
        // slideContainer왼쪽 기준 얼마나 오른쪽으로 떨어져있는지
        // 마우스 x지점을 0으로 고정하기 위함
        startx = e.offsetX - slideContainer.offsetLeft;
        mainProductListContainer.style.cursor = "grabbing"
    })

    window.addEventListener("mouseup", () => {
        pressed = false
        // 슬라이드 다시시작
        slideShow = setInterval(()=>{
            sliding();
            calc++;
        }, (speedTime + 1000));
    })
    
    mainProductListContainer.addEventListener("mousemove", e => {
      if (!pressed) return
      // 드래그 방지
      e.preventDefault()
      x = e.offsetX
    
      slideContainer.style.left = `${x - startx}px`
    })
}