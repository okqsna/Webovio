function ScrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
let getToKnow=document.querySelector(".link_page1");
let page3=document.querySelector('.page3');
getToKnow.addEventListener('click', () => {
    ScrollTo(page3);
})