let dataselect = document.querySelector(".btn_dataSelect");

let prevIndex = 0;
let btnChanges = document.querySelector('.btn_selectList');
let btnChangesLi = btnChanges.querySelectorAll('li');
// btbChangese 안에 있는 li를 배열로 저장. 


let normal = document.querySelectorAll(".btn_normal").forEach((v, i) => {
    v.addEventListener("click", (b) => {
        let btnChangesLiA = btnChangesLi[prevIndex].querySelector('a');
        btnChangesLiA.style.backgroundColor = "white";
        btnChangesLiA.style.color = "black";

        prevIndex = i;

        let pro_box = document.querySelector('.pro_box');

        b.target.style.backgroundColor = "black";
        b.target.style.color = "white";

        
        // btnChanges.li[2]
        if(pro_box.classList.contains('active')) {
            pro_box.classList.remove('active');
            
        } else {
            pro_box.classList.add('active');
        }

        
    });
});

dataselect.addEventListener("click", () => {
    let date = document.querySelector(".date_list");

    if(date.classList.contains('visibility')) {
        date.classList.remove('visibility');
    } else {
        date.classList.add('visibility');
    }
});

