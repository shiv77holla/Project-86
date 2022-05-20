var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
img_object="";

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
img_object=Img;

img_object.scaleToWidth(1000);
img_object.scaleToHeight(600);
img_object.set({
top:0,
left:0
});
canvas.add(img_object);
})
}

function playSound(){
x.play();
}
