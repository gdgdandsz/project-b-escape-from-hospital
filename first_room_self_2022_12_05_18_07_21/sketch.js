//圆的单一性
//hint text
//solved:one click one move
//door
//text 图层在最上方
//solved:cannot move outside the canvas
let character=[];
let img;
let imgback;
let player;
let t=0
//可以增加灯光效果，即1-2个随机长条浅色色块
function myFunction(){
  //document.body.style.backgroundColor="red";
  document.body.style.background="white";
  //console.log('123')
    
}

function preload() {
   img=loadImage('firstroom.png');
   // img1=loadImage('boxForFirstRoom.png');
}
function setup() {

  let canvas=createCanvas(1100, 600);
  canvas.parent('p5canvas');
  player=new Player(51,51);
  for (let i = 0; i < 15; i++) {
    character[i] = new Character(
      random(50, 1000),
      random(50,550)
    );
  }
  
  
}

function draw() {
  image(img,0,0)
  background(66, 3, 5, 100);

  fill(255);
  rectMode(CORNER);
  stroke(0);
  rect(1050,400,50,200);
  rect(1057,407,43,193);
  for (let i = 0; i < character.length; i++) {
    character[i].display();
    character[i].checkDist();
  }
  hint();
  player.update();
  player.display();
  player.move();
}
function mousePressed(){
  //console.log(player.x)
  if (mouseX>1057 && mouseX<1100 && mouseY<600 && mouseY>407 && player.x>1000 && player.x<1100 && player.y<600 && player.y>400){
    //console.log("next page!")
    window.location.replace('../project_b_corridor_2022_12_05_18_06_21/index.html');
  }
    //switch to another page with link inside the canvas
  else if (mouseX>525 && mouseX<625 && mouseY>300 && mouseY<350){
    fill(252, 7, 3);
    textSize(20);
    text('You can find some hints in room 413, go through the dark corridor',525,355)
    text('and get to doctors room to find the key to the front gate.',525,375)
    text(' Then you need to go back to the corridor and get out from the front door.',525,395)
  }
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



class Character{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.g=random(100,150);
    this.r=random(40,70);
    this.r1=148;
    this.b=102;
  }
  display(){
    rectMode(CENTER);
    //noStroke();
    fill(this.r1,this.g,this.b);
    square(this.x,this.y,this.r);
    // image(img1,this.x,this.y);
  }
  checkDist(){
    if (dist(this.x,this.y,player.x,player.y)<70){
      this.r1=182;
      this.b=122;
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
function hint(){
  rectMode(CENTER);
  
  fill(148,130,102);    
  square(450,350,55);
  if (dist(450,350,player.x,player.y)<55){
    textSize(80)
    textFont('Rubik Microbe');
    fill(184, 35, 6);
    text('HINT',525,300)
    
  }
}
