
// JS script specific to the main page


// var myImage = document.querySelector('#prof_image');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/fishing.jpg') {
//       myImage.setAttribute ('src','images/fishing2.jpg');
//     } else {
//       myImage.setAttribute ('src','images/fishing.jpg');
//     }
// }

var name_change_button = document.querySelector('#name_change_button');
var home_subheading = document.querySelector('#subheading');

function setUserName() {
    var myName = prompt('Oops, sorry! What\'s your name?');

    localStorage.setItem('name', myName);
    // store the obtained name to the window's browser, with its variable name being 'name'

    home_subheading.innerHTML = 'Hello, ' + myName + '!';
    name_change_button.innerHTML = "I'm not " + myName;
}

name_change_button.onclick = function() {
  setUserName();
}

// Everytime the main page is loaded, check localStorage, and if a username is already stored,
// show it on the screen
window.onload = function(){
    var myName = window.localStorage.getItem('name');
    if(myName){
	home_subheading.innerHTML = 'Hello, ' + myName + '!';
	name_change_button.innerHTML = "I'm not " + myName;	
    }
}


// for transitioning gallery
var photo_control_btn = document.getElementsByClassName("btn");
var photo_link = document.getElementById("gallery_link");
var gallery_photo = document.getElementById("gallery_photo");
var gallery_caption = document.getElementById("gallery_caption");

// to change the content of the gallery, change the contents of these arrays
const link_array = [
    "gallery/pictures/background_pic.html",
    "gallery/pictures/fishing_pic.html",
    "gallery/pictures/fishing2_pic.html"
];
const photo_dir_array = [
    "gallery/images/background1.jpeg",
    "gallery/images/fishing.jpg",
    "gallery/images/fishing2.jpg"
];
const caption_array = [
    "Used in this website's background. Taken somewhere near the sea in Miyagi prefecture, Japan.",
    "Me being happy about fishing a seaweed...",
    "Me standing awkwardly near the sea."
];

photo_control_btn[0].onclick = function(){
    button_color_handler(0);
    gallery_photo.src = photo_dir_array[0];
    photo_link.href = link_array[0];
    gallery_caption.innerHTML = caption_array[0];
    animation();		// it is defined below    
}
photo_control_btn[1].onclick = function(){
    button_color_handler(1);
    gallery_photo.src = photo_dir_array[1];
    photo_link.href = link_array[1];
    gallery_caption.innerHTML = caption_array[1];
    animation();		// it is defined below
}
photo_control_btn[2].onclick = function(){
    button_color_handler(2);
    gallery_photo.src = photo_dir_array[2];
    photo_link.href = link_array[2];
    gallery_caption.innerHTML = caption_array[2];
    animation();		// it is defined below
}

// remove "active" class from all buttons, and add "active" class only to 1 selected button
function button_color_handler(btn_index){
    // remove "active" class from all the buttons
    for(b of photo_control_btn){
	b.classList.remove("active");
    }
    photo_control_btn[btn_index].classList.add("active");
}

function animation(){
    gallery_photo.classList.add("slidein"); // add a calss that performs animation to the image

    // To add the animation each time users click the buttons, remove the animation class
    // after 500 milliseconds.
    setTimeout(function(){
	gallery_photo.classList.remove("slidein");
    }, 500)
    // this means that it executes the defined function after the specified delay, 500 millisec.
    // The time count starts when the browser reaches this setTimeout() function.
    // 500 millisec is chosen because the animation's duration is 500 millisec. So until the
    // animation effect is taking place, this script waits. If I set this delay to 0 sec,
    // immediately after the "slidein" class is added, it is removed, so the animation is
    // not performed at all.
}

// function transition(){
//     gallery_photo.classList.add("slidein_transition");
//     setTimeout(function(){
// 	gallery_photo.classList.remove("slidein_transition");
//     }, 500)
// }
