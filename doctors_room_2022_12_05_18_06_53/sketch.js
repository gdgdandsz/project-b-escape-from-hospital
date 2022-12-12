//how to define whether the player get the key
let player;
let img;
let img1;
let monster=[];
let imgKey;
let keys;
let checkKey;
let keyAppear;
let game;
let lightsAreOn = false;
//let inner;//use inner and you will lose control when the player is out of canvas and you cannot move it back
//let s;
function myFunction(){
  if (document.getElementById("imgClick2").style.display=='none'){
    document.getElementById("imgClick1").style.display='none';
    document.getElementById("imgClick2").style.display='block';
    document.body.style.background="url('firstroom.png')"
    document.body.style.backgroundRepeat="no-repeat";
    document.body.style.backgroundSize= "cover";
    lightsAreOn=true;
  } else {
    document.getElementById("imgClick2").style.display='none';
    document.getElementById("imgClick1").style.display='block';
    document.body.style.background='black';
    lightsAreOn=false;
  }
}
function preload() {
  img = loadImage('imageMonster.png');
  img1=loadImage('firstroom.png');
  imgKey=loadImage('key.jpg');
}
function setup() {
  let canvas=createCanvas(1100, 600);
  canvas.parent('p5canvas');
  player=new Player(50,50);
  keys=new Keys();
  //s=second();
  for (let i = 0; i < 15; i++) {
    monster[i] = new Monster(
      random(80, 950),
      random(50,450)
    );
  }
  checkKey=false;
  keyAppear=true;
  game=true;
  //inner=true
}

function draw() {
  image(img1,0,0)
  background(66, 3, 5, 100);
  
  
  for (let i = 0; i < monster.length; i++) {
    
    monster[i].display();
    monster[i].update();
    //update is under display so that the font can be above the images in the canvas
  }
  
  fill(255);
  stroke(0);
  rect(0,0,50,200);
  rect(0,0,40,190);
  if (keyAppear==true){
    keys.display();
    keys.update();
  }else{
    textSize(20);
    fill('235, 19, 12')
    text('Now you have the key',850,560)
  }
  if(lightsAreOn == false){
    bgd()
  }
  //checkInner();
  if (game==true){
    player.update();
    player.display();
    player.move();
    // if (inner==true){
      
    // }
  }
  //player disappear when game over
  
}
function bgd(){
  fill(0);
  rect(0,0,width,height);
}
// function myFunction(){
//   document.body.style.background="white";
    
// }
// function checkInner(){
//   if (player.x<0 || player.x>1100 || player.y<0 || player.y>600){
//     inner=false;
//   }
// }
function mousePressed(){
  if (player.x>0 && player.x<50 && player.y>0 && player.y<200){
    if(checkKey==false){
      window.location.replace('../project_b_corridor_2022_12_05_18_06_21/index.html');
    }else if(checkKey==true){
      window.location.replace('../project_b_corridor_get_out/index.html');
    }
  }
}
class Player{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.l1=30;
    this.l2=30
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
    //make it one move by one click
    
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
    rect(-20/3,18.5/3,22/3,this.l1,10/3);
    rect(0,18.5/3,22/3,this.l2,10/3);
    rect(-35/3,20/3,20/3,40/3,10/3);
    rect(5,20/3,20/3,40/3,10/3);
    
    pop();
  }
}
function refresh(){
  window.location.replace('../first page/index.html');
}
class Monster{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.change=0
  }
  update(){
    if (dist(this.x,this.y,player.x,player.y)<35){
      ///
      textSize(60);
      fill(237, 14, 2);
      textFont('Rubik Microbe');
      text('GAME OVER',500,300)
      game=false;
      
      const myTimeout = setTimeout(refresh,4000);
      //wait for 8 seconds and jump to the first page
    }
    this.change=0.8*sin(0.1*frameCount)
  }

  display(){
    img.resize(60,60)
    image(img,this.x,this.y)
    fill(235, 164, 52)
    textSize(15)
    text('zzz',this.x+45+this.change,this.y-8-this.change)
  }
}
class Keys{
  constructor(){
   
  }
  update(){
    if (player.x>900 && player.x<1100 && player.y<600 && player.y>500 && mouseX>990 && mouseX<1060 && mouseY>490 && mouseY<560 && mousePressed){
      checkKey=true;
      
      keyAppear=false;
    }
    
  }
  display(){
    imgKey.resize(45,45);
    image(imgKey,1000,500);
  }
}
