$(document).ready(function() {

 spectrum();

 function spectrum(){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $(HTMLBodyElement).animate( { backgroundColor: hue }, 1000);
    spectrum();
 }
});