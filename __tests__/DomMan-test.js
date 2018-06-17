'use strict';

//jest.mock('../spray');
const $ = require('../DomMan');
//const $ = DomManipulate();

it('displays a status text after click', () => {
    //set up our document body
    document.body.innerHTML = "<div>"+
    "<span id='status'/>"+
    "<button id='button'/>"
    +"</div>";
    
    $('#button').click( () => {
        const log = "You have clicked Me!";
        $('#status').text(log);
    });
    
    //simulate a button click
    $('#button').element.click();
    
    expect($('#status').text()).toEqual("You have clicked Me!");
});

it('get the attribute value from an element', () => {
    //set up our document body
    document.body.innerHTML =
    "<img id='image' src='SomeImgSource' alt='An Image' width='50' height='80'/>";
    
    let id = $('#image').attr('id');
    let src = $('#image').attr('src');
    let width = $('#image').attr('width');
    let height = $('#image').attr('height');
    let alt = $('#image').attr('alt');
    
    expect(id).toEqual('image');
    expect(src).toEqual('SomeImgSource');
    expect(width).toEqual('50');
    expect(height).toEqual('80');
    expect(alt).toEqual('An Image');
    
    //change an attr of the element
    $('#image').attr('src', 'ThisIsCool');
    let newSrc = $('#image').attr('src');
    expect(newSrc).toEqual('ThisIsCool');
});

it('adds a class to an element', () => {
    //set up our document body
    document.body.innerHTML = "<div class='test'></div>";
    
    $('.test').addClass('break');
    let elm = $('.test').element;
    
    expect(elm.className).toBe('test break');
});

it('removes a class from an element', () => {
    //set up our document body
    document.body.innerHTML = "<div class='test'></div>";
    
    let elm = $('.test').element;
    $('.test').removeClass('test');
    
    expect(elm.className).toBe('');
});

it('appends an element to another', () => {
    //set up our document body
    document.body.innerHTML = "<div class='test'></div>";
    
    let test = $('.test').element;
    let span = document.createElement('span');
    $('.test').append(span);
    
    //if span has been created we can add an id to it
    span.id = "span";
    
    //if the element was appended then the div has one child element
    expect($('.test').element.childElementCount).toBe(1);
    
    $('.test').append(document.createElement('p'));
    
    //now we have two child elements in .test div
    expect($('.test').element.childElementCount).toBe(2);
});

it('adds css styling to an element', () => {
    //set up our document body
    document.body.innerHTML = "<div id='my-elm'></div>";
    
    let elm = $('#my-elm');
    elm.css('{color:#fff}');
    
    expect(elm.element.style.color).toBe('red');
});

it('gets the value of an element', () => {
    //set up our document body
    document.body.innerHTML = "<input id='my-elm' value='My Value'/>";
    
    let val = $('#my-elm').val();
    
    expect(val).toBe('My Value');
});

it('sets the value of an element', () => {
    //set up our document body
    document.body.innerHTML = "<input id='my-elm' value='My Value'/>";
    
    $('#my-elm').val("Katz are cool too.");
    let val = $('#my-elm').val();
    
    expect(val).toBe('Katz are cool too.');
});

it('sets the html of an element', () => {
    //set up our document body
    document.body.innerHTML = "<div id='my-elm'></div>";
    
    $('#my-elm').html("<p>We dont test even handlers</p>");
    let val = $('#my-elm').element;
    
    expect(val.innerHTML).toBe('<p>We dont test even handlers</p>');
});

it('gets the html of an element', () => {
    //set up our document body
    document.body.innerHTML = "<div id='my-elm'><p>We dont test even handlers</p></div>";
    
    let val = $('#my-elm').html();
    
    expect(val).toBe('<p>We dont test even handlers</p>');
});
