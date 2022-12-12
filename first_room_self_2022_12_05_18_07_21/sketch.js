//圆的单一性
//hint text
//solved:one click one move
//door
//text 图层在最上方
//solved:cannot move outside the canvas
let tool1;
let tool2;
let tool3;
let tool4;
let tool5;
let tool6;
let tool7;
let tool8;
let tool9;
let img;
let imgback;
let imgInst;
let player;
let tools1;
let tools2;
let checkTool9;
let checkInst;
let hints=[]
let lightsAreOn = false;

//reference: https://pngtree.com/freepng/black-stethoscope-medical-tools-medical-medicine_3896969.html
let start;
//let t=0
//可以增加灯光效果，即1-2个随机长条浅色色块
function myFunction(){
  //document.body.style.backgroundColor="red";
  // document.body.style.backgroundImage='';
  // document.body.style.backgroundUrl='';
  //document.body.style.background='white';
  //console.log('124')
  if (document.getElementById("imgClick2").style.display=='none'){
    //console.log('123');
    // document.getEl ementById("column side").src = "switch2.png";
    //the address would change by changing src
    document.getElementById("imgClick1").style.display='none';
    document.getElementById("imgClick2").style.display='block';
    document.body.style.background="url('firstroom.png')"
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize= "cover";

    //bgd();
    lightsAreOn=true;
  } else {
    //console.log('125')
    document.getElementById("imgClick2").style.display='none';
    document.getElementById("imgClick1").style.display='block';
    //document.body.style.background='black';
    document.body.style.background='black';
    // document.body.style.background='display: none;position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:100';
    //document.getElementsById('p5canvas').style='z-index:101';
    lightsAreOn=false
  }
  // document.body.removeChild(img)

  // document.getElementById("footer").style.background="white";
  //   document.getElemenstByClassName("footer")[0].style.background="white"
  //console.log('123')
}
function bgd(){
  fill(0);
  rect(0,0,width,height);
}
function preload() {
   img=loadImage('firstroom.png');
   tools1 = loadImage('tools.png');
   // img1=loadImage('boxForFirstRoom.png');
   tools2=loadImage('tools2.png');
   imgInst=loadImage('../instruction.png')
}
function setup() {

  let canvas=createCanvas(1100, 600);
  canvas.parent('p5canvas');
  player=new Player(51,51);
  tool1=new Tool1(random(50,800),random(50,550));
  tool2=new Tool2(random(50,800),random(50,550));
  tool3=new Tool3(random(50,800),random(50,550));
  tool4=new Tool4(random(50,800),random(50,550));
  tool5=new Tool5(random(50,800),random(50,550));
  tool6=new Tool6(random(50,800),random(50,550));
  tool7=new Tool7(random(50,800),random(50,550));
  tool8=new Tool8(random(50,800),random(50,550));
  tool9=new Tool9(random(50,800),random(50,550));
  // for (let i = 0; i < 15; i++) {
  //   tool1[i] = new Tool1(
  //     random(50, 1000),
  //     random(50,550)
  //   );
  // }
  checkTool9=false;
  start=false;
  checkInst=true;
}

function draw() {
  image(img,0,0)
  background(66, 3, 5, 100);
  
  // image(tools2,500,300)
  if (checkTool9==true){
    fill(255);
    rectMode(CORNER);
    stroke(0);
    rect(1050,400,50,200);
    rect(1057,407,43,193);
  }
  // fill(255);
  // rectMode(CORNER);
  // stroke(0);
  // rect(1050,400,50,200);
  // rect(1057,407,43,193);
  fill(255)
  if(lightsAreOn == false){
    bgd()
  }else{
    tool1.display();
    tool1.update()
    tool1.checkDist();
    tool2.display();
    tool2.update()
    tool2.checkDist();
    tool3.display();
    tool3.update()
    tool3.checkDist();
    tool4.display();
    tool4.update()
    tool4.checkDist();
    tool5.display();
    tool5.update()
    tool5.checkDist();
    tool6.display();
    tool6.update()
    tool6.checkDist();
    tool7.display();
    tool7.update()
    tool7.checkDist();
    tool8.display();
    tool8.update()
    tool8.checkDist();
    tool9.display();
    tool9.update()
    tool9.checkDist();
    
  }
  

  //hint();
  player.update();
  player.display();
  player.move();
  instruction();
  if (checkInst==true){
    imgInst.resize(450,250);
    image(imgInst,325,175);
  }
}
function instruction(){
  if (keyIsPressed){
    if (key=='a' || key=='s' || key=='d' || key=='w'){
      checkInst=false;
    } 
  }
}
function mousePressed(){
  //console.log(player.x)
  if (player.x>1000 && player.x<1100 && player.y<600 && player.y>400){
    //console.log("next page!")
    window.location.replace('../project_b_corridor_2022_12_05_18_06_21/index.html');
  }
    //switch to another page with link inside the canvas
  // else if (mouseX>525 && mouseX<625 && mouseY>300 && mouseY<350){
  //   fill(252, 7, 3);
  //   textSize(20);
  //   text('To get to another room, move to the white door and click',525,355)
  //   text('Do pay attention to the instructions around',525,375)
  // }
}
// function mouseClicked(){
//   for (let i = character.length - 1; i >= 0; i--) {
//     if (dist(character[i].x,character[i].y,mouseX,mouseY)<70){
//       character.splice(i, 1);
//     }
//     if (dist(character[i].x,character[i].y,mouseX,mouseY)<70 ){
//       textSize(20);
//       textFont('Rubik Microbe');
//       text('HINT',mouseX,mouseY);
//       fill(186, 41, 63);
//     }
//   }
// }



class Tool1{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0
  }
  display(){
    // rectMode(CENTER);
    // //noStroke();
    // fill(this.r1,this.g,this.b);
    //tools1.resize(30,30);
    // square(this.x,this.y,this.r);
    image(tools1, this.x, this.y,80,60);
    // image(img1,this.x,this.y);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      
      text('Hello, I wonder how your brain tastes',this.x+25+this.c,this.y+15+this.c)
    }
    //console.log(player.x)
  }
}

class Tool2{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0;
  }
  display(){
    image(tools1, this.x, this.y,80,60);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      text('You can find the key to the front gate in the doctor room',this.x+25+this.c,this.y+15+this.c)
    }
  }
}

class Tool3{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0
  }
  display(){
    image(tools1, this.x, this.y,80,60);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      text('When you get the key in doctor room,',this.x+25+this.c,this.y+15+this.c)
      text('you will see the instruction “Now you have the key”',this.x+25+this.c,this.y+32+this.c)
    }
  }
}

class Tool4{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0
  }
  display(){
    image(tools1, this.x, this.y,80,60);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      text('When the monsters are sleeping, avoid touching them',this.x+25+this.c,this.y+15+this.c)
    }
  }
}

class Tool5{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0
  }
  display(){
    image(tools1, this.x, this.y,80,60);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      text('The corridor is full of darkness unless you connect cables',this.x+25+this.c,this.y+15+this.c)
    }
  }
}

class Tool6{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0
  }
  display(){
    image(tools2, this.x, this.y,80,60);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      text('There are two monsters roaming in the corridor.',this.x+25+this.c,this.y+15+this.c)
    }
  }
}

class Tool7{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0
  }
  display(){
    image(tools2, this.x, this.y,80,60);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      text('If you cannot see anything, try to listen to the sound.',this.x+25+this.c,this.y+15+this.c)
      text('The louder the sound is, the closer the monsters are.',this.x+25+this.c,this.y+30+this.c)
    }
  }
}

class Tool8{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0
  }
  display(){
    image(tools2, this.x, this.y,80,60);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      text('There is no danger in room 413.',this.x+25+this.c,this.y+15+this.c)
    }
  }
}

class Tool9{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.c=0
  }
  display(){
    image(tools2, this.x, this.y,80,60);
  }
  update(){
    this.c=sin(0.1*frameCount)
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      textSize(15)
      text('Go through the white door by clicking it and you willl get to the corridor.',this.x+25+this.c,this.y+15+this.c)
      text('You can go anywhere from the corridor.',this.x+25+this.c,this.y+30+this.c)
      checkTool9=true;
    }
  }

}

class Player{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.l1=30;
    this.l2=30;
  }
  update(){
    //make it one move by one click
    if (key=='d' && keyIsPressed==true && this.x<1082){
      this.x+=8;
    }else if (key=='a' && keyIsPressed==true && this.x>15){        
      this.x-=8;
    }else if (key=='w' && keyIsPressed==true && this.y>15){
      this.y-=8;
    }else if (key=='s' && keyIsPressed==true && this.y<560){        
      this.y+=8;
    }
  }
  move(){
    this.l1=30+3*sin(0.07*frameCount);
    this.l2=30-3*sin(0.07*frameCount);
  }
  display(){
    push();
    noStroke();
    fill(245, 208, 186);
    translate(this.x,this.y)
    //rectMode(CENTER);
    circle(0,0,13);
    rectMode(CORNER);
    rect(-20/3,18.5/3,22/3,this.l1,10/3);
    rect(0,18.5/3,22/3,this.l2,10/3);
    rect(-35/3,20/3,20/3,40/3,10/3);
    rect(5,20/3,20/3,40/3,10/3);
    
    pop();
  }
}
//onkeyup
// function keyPressed(){
//   if (key=='d'){
//     player.x+=10;
//   }
//   if (key=='a'){
//     player.x-=10;
//   }
//   if (key=='w'){
//     player.y-=10;
//   }
//   if (key=='x'){
//     player.y+=10;
//   }
// }
// function hint(){
//   rectMode(CENTER);
  
//   fill(148,130,102);    
//   square(450,350,55);
//   if (dist(450,350,player.x,player.y)<55){
//     textSize(80)
//     textFont('Rubik Microbe');
//     fill(184, 35, 6);
//     text('HINT',525,300)
//     if (mouseIsPressed){
//       refresh1();
//     }
//     //const myTimeout = setTimeout(refresh1,3000);
//   }
// }
// function refresh1(){
//   fill(252, 7, 3);
//   textSize(20);
//   text('To get to another room, move to the white door and click',325,355)    
//   text('Do pay attention to the instructions around',325,375)
// }