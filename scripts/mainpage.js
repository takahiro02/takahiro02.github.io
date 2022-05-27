
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
    "gallery/pictures/background_pic/",
    "gallery/pictures/fishing_pic/",
    "gallery/pictures/fishing_pic2/"
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

// for switching images with time
var pic_num = 1;
setInterval(function(){
    button_pushed(pic_num);
    pic_num++;
    if(pic_num == photo_dir_array.length){
	pic_num = 0;
    }
}, 5000);

var pre_btn = 0;		// record which control button is clicked previously
function button_pushed(btn_num){
    button_color_handler(btn_num);
    gallery_photo.src = photo_dir_array[btn_num];
    photo_link.href = link_array[btn_num];
    gallery_caption.innerHTML = caption_array[btn_num];
    animation_appear(btn_num, pre_btn);		// it is defined below
    pre_btn = btn_num;
    pic_num = btn_num;		// for automatic photo switching above
}
photo_control_btn[0].onclick = function(){button_pushed(0);}
// photo_control_btn[0].onclick = button_pushed(0); doesn't work
photo_control_btn[1].onclick = function(){button_pushed(1);}
photo_control_btn[2].onclick = function(){button_pushed(2);}

// remove "active" class from all buttons, and add "active" class only to 1 selected button
function button_color_handler(btn_index){
    // remove "active" class from all the buttons
    for(b of photo_control_btn){
	b.classList.remove("active");
    }
    photo_control_btn[btn_index].classList.add("active");
}

// animation function for sliding photos. Currently not used
function animation(current_btn, pre_btn){
    // change from which direction the slide-in happens according to the relation of what
    // button the user clicked this time and previous time.
    var relation = current_btn - pre_btn;
    if(relation > 0){
	// move photo from right to left
	gallery_photo.classList.add("slidein_from_right"); // add a calss that performs animation to the image
	gallery_caption.classList.add("slidein_from_right");

	// To add the animation each time users click the buttons, remove the animation class
	// after 800 milliseconds.
	setTimeout(function(){
	    gallery_photo.classList.remove("slidein_from_right");
	    gallery_caption.classList.remove("slidein_from_right");
	}, 800);
	// this means that it executes the defined function after the specified delay, 800 
	// millisec. The time count starts when the browser reaches this setTimeout() function.
	// 800 millisec is chosen because the animation's duration is 500 millisec. So until the
	// animation effect is taking place, this script waits. If I set this delay to 0 sec,
	// immediately after the "slidein" class is added, it is removed, so the animation is
	// not performed at all.
	// <- If I set this duration shorter than the duration of the animation, animation
	//    jump happens. So be careful.
    }
    else if(relation < 0){
	// move photo from left to right
	gallery_photo.classList.add("slidein_from_left");
	gallery_caption.classList.add("slidein_from_left");
	setTimeout(function(){
	    gallery_photo.classList.remove("slidein_from_left");
	    gallery_caption.classList.remove("slidein_from_left");
	}, 800);
    }
    else{
	// The same button is clicked, then add no animation.
    }

}

// animation function just for appearing photos
function animation_appear(current_btn, pre_btn){

    if(current_btn != pre_btn){
	gallery_photo.classList.add("appearing"); // add a calss that performs animation to the image
	gallery_caption.classList.add("appearing");

	// To add the animation each time users click the buttons, remove the animation class
	// after 800 milliseconds.
	setTimeout(function(){
	    gallery_photo.classList.remove("appearing");
	    gallery_caption.classList.remove("appearing");
	}, 800);
	// this means that it executes the defined function after the specified delay, 800 
	// millisec. The time count starts when the browser reaches this setTimeout() function.
	// 800 millisec is chosen because the animation's duration is 800 millisec. So until the
	// animation effect is taking place, this script waits. If I set this delay to 0 sec,
	// immediately after the "slidein" class is added, it is removed, so the animation is
	// not performed at all.
	// <- If I set this duration shorter than the duration of the animation, animation
	//    jump happens. So be careful. The duration of the animation is set in
	//    mainpage_style.css's animation class
    }
    else{
	// The same button is clicked, then add no animation.
    }

}


// function transition(){
//     gallery_photo.classList.add("slidein_transition");
//     setTimeout(function(){
// 	gallery_photo.classList.remove("slidein_transition");
//     }, 500)
// }
