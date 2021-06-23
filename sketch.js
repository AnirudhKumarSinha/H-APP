var himg;
var hdimg,chimg,op1img;
var faqimg1,faqimg2,faqimg3,faqimg4;
var preimg;

function preload(){
himg=loadImage("HealthCheck.png")
hdimg=loadImage("ch.png")
chimg=loadImage("choose.png")

faqimg1=loadImage("faq1.PNG")
faqimg2=loadImage("faq2.PNG")
faqimg3=loadImage("faq3.PNG")
faqimg4=loadImage("faq4.PNG")

preimg=loadImage("pre.PNG")
}

function setup() {
  createCanvas(displayWidth,displayHeight)
  hd=createSprite(displayWidth/2,displayHeight/2-400,20,20)
 hd.addImage(hdimg)

 ch=createSprite(displayWidth/2,displayHeight/2-300)
 ch.addImage(chimg); 

 fq1=createSprite(displayWidth/4-50,displayHeight/3)
 fq1.addImage(faqimg1)
 
 fq2=createSprite(displayWidth/4*3-170,displayHeight/3-10)
 fq2.addImage(faqimg2)
 
 
 fq3=createSprite(displayWidth/4-50,displayHeight/3*3+50)
 fq3.addImage(faqimg3)
 

 fq4=createSprite(displayWidth/4*3-150,displayHeight/3*2+250)
fq4.addImage(faqimg4)
fq4.scale=1.3

fq1.visible=false;
fq2.visible=false
fq3.visible=false
fq4.visible=false

pre=createSprite(displayWidth/2,displayHeight/2)
pre.visible=false
pre.addImage(preimg);

 option1=new op1();
 
}


function draw() {
 background(himg)
  
 textSize(30)
 textAlign(CENTER)
 fill("red")
 

 option1.display();
 drawSprites();
}

