let normal = document.querySelector(".btn_normal");
let dataselect = document.querySelector(".btn_dataSelect");
console.log(normal)

normal.addEventListener('click', (b) => {
    b.target.style.backgroundColor = "black";
    b.target.style.color = "white";

    let pro_box = document.querySelector('.pro_box');

    if(pro_box.classList.contains('active')) {
        pro_box.classList.remove('active');
    } else {
        pro_box.classList.add('active');
    }
    });

dataselect.addEventListener('click', (b) => {
    b.target.style.backgroundColor = "black";
    b.target.style.color = "white";

    let date = document.querySelector('.date_list');

    if(date.classList.contains('visibility')) {
        date.classList.remove('visibility');
    } else {
        date.classList.add('visibility');
    }
});

