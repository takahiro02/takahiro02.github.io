
// JS script common for all pages

// from https://www.w3schools.com/howto/howto_js_dropdown.asp
/* When the user clicks on the button,
   toggle between hiding and showing the dropdown content */
function dropdown_menu_clicked() {
    if(document.getElementById('menu_dropdown_content').classList.contains('show'))
    	document.getElementById('menu_dropdown_content').classList.remove('show');
    else
    	document.getElementById('menu_dropdown_content').classList.add('show');
}

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropdown_button')) {
      if(document.getElementById('menu_dropdown_content').classList.contains("show"))
	  document.getElementById('menu_dropdown_content').classList.remove("show");
  }
});
