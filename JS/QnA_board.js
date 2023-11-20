'user strict';

const prodchoicebtn = document.getElementsByTagName('button');

let popup1;

prodchoicebtn[0].addEventListener('click', () => {
    popup1 = open('../HTML/QnA_prodchoice.html', '팝업창1', 'width=300px, height=300px');
});