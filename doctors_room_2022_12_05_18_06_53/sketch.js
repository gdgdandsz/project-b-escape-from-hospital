//how to define whether the player get the key
let player;
let img;
let img1;
let monster=[];
let imgKey;
let keys;

//let s;
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
      random(80, 1000),
      random(50,550)
    );
  }
  
}

function draw() {
  image(img1,0,0)
  background(66, 3, 5, 100);
  keys.update();
  keys.display();
  for (let i = 0; i < monster.length; i++) {
    
    monster[i].display();
    monster[i].update();
    //update is under display so that the font can be above the images in the canvas
  }
  
  fill(255);
  stroke(0);
  rect(0,0,50,200);
  rect(0,0,40,190);
  player.update();
  player.display();
  player.move();
}
function myFunction(){
  document.body.style.background="white";
    
}

function mousePressed(){
  if (mouseX>0 && mouseX<50 && mouseY<200 && mouseY>0 && player.x>0 && player.x<50 && player.y>0 && player.y<200){
    window.location.replace('../project_b_corridor_2022_12_05_18_06_21/index.html');
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
    if (key=='d' && keyIsPressed==true){
        player.x+=10;
      }else if (key=='a' && keyIsPressed==true){
        player.x-=10;
      }else if (key=='w' && keyIsPressed==true){
        player.y-=10;
      }else if (key=='s' && keyIsPressed==true){
        player.y+=10;
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
  }
  update(){
    if (dist(this.x,this.y,player.x,player.y)<35){
      ///
      textSize(60);
      fill(237, 14, 2);
      textFont('Rubik Microbe');
      text('GAME OVER',550,300)
  
      
      const myTimeout = setTimeout(refresh,4000);
      //wait for 8 seconds and jump to the first page
    }
  }

  display(){
    img.resize(60,60)
    image(img,this.x,this.y)
    
  }
}
class Keys{
  constructor(){
    
  }
  update(){
    
  }
  display(){
    imgKey.resize(55,55);
    image(imgKey,1000,500);
  }
}
