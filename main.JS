let searchNode = document.querySelector(`#search`);
let searchheadNode = document.querySelector(`#search-head`);
let buttonheaderNode = document.querySelector(`#button-header`);
let topicNode = document.querySelector(`#topic`);
let bodyNode = document.querySelector(`#body`);
let film1Node = document.querySelector(`#film1`);
let film2Node = document.querySelector(`#film2`);
let film3Node = document.querySelector(`#film3`);
let film4Node = document.querySelector(`#film4`);
let film5Node = document.querySelector(`#film5`);
let film6Node = document.querySelector(`#film6`);
let film7Node = document.querySelector(`#film7`);
let film8Node = document.querySelector(`#film8`);
let h2headingNode = document.querySelector(`#h2-heading`);


searchheadNode.addEventListener(`click`, function(){
    searchNode.classList.toggle(`d-flex`);
    searchheadNode.classList.toggle(`d-none`);
});

buttonheaderNode.addEventListener(`click`, function(){
    searchNode.classList.toggle(`d-flex`);
    searchheadNode.classList.toggle(`d-none`);
});

topicNode.addEventListener(`click`, function(){
    bodyNode.classList.toggle(`night-topic`);
    film1Node.classList.toggle(`night-film`);
    film2Node.classList.toggle(`night-film`);
    film3Node.classList.toggle(`night-film`);
    film4Node.classList.toggle(`night-film`);
    film5Node.classList.toggle(`night-film`);
    film6Node.classList.toggle(`night-film`);
    film7Node.classList.toggle(`night-film`);
    film8Node.classList.toggle(`night-film`);
    h2headingNode.classList.toggle(`h2-heading-night`)
});

