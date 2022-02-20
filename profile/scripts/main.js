
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fishing.jpg') {
      myImage.setAttribute ('src','images/fishing2.jpg');
    } else {
      myImage.setAttribute ('src','images/fishing.jpg');
    }
}
