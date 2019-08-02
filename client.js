let greenBoxes = 0;
let redBoxes = 0;
let yellowBoxes = 0;
let blueBoxes = 0;

$(document).ready(init);

function init() {
    $('.js-btn-add-green').on('click', addGreenBox);
    $('.js-container').on('click', '.green', removeGreenBox);

    $('.js-btn-add-yellow').on('click', addYellowBox);
    $('.js-container').on('click', '.yellow', removeYellowBox);

    $('.js-btn-add-red').on('click', addRedBox);
    $('.js-container').on('click', '.red', removeRedBox);

    $('.js-btn-add-blue').on('click', addBlueBox);
    $('.js-container').on('click', '.blue', removeBlueBox);

}

function addGreenBox(){
    greenBoxes ++;
    $('.js-container').append(`<div class="box green">`);
    $('.js-green-box').text(greenBoxes + 'Green Boxes!');
}

function removeGreenBox(){
    greenBoxes --;
    $(this).remove();
    $('.js-green-box').text(greenBoxes + 'Green Boxes!');
}

function addYellowBox(){
    yellowBoxes ++;
    $('.js-container').append(`<div class="box yellow">`);
    $('.js-yellow-box').text(yellowBoxes + 'Yellow Boxes!');
     
}
function removeYellowBox(){
    yellowBoxes --;
    $(this).remove();
    $('.js-yellow-box').text(yellowBoxes + 'Yellow Boxes!');
}

function addRedBox(){
    redBoxes ++;
    $('.js-container').append(`<div class="box red">`);
    $('.js-red-box').text(redBoxes + 'Red Boxes!');
}
function removeRedBox(){
    redBoxes --;
    $(this).remove();
    $('.js-Red-box').text(redBoxes + 'Red Boxes!');
}

function addBlueBox(){
    blueBoxes ++;
    $('.js-container').append(`<div class="box blue">`);
    $('.js-blue-box').text(blueBoxes + 'Blue Boxes!');
}
function removeBlueBox(){
    blueBoxes --;
    $(this).remove();
    $('.js-blue-box').text(blueBoxes + 'blue Boxes!');
}

function multiAddYellow(){

}