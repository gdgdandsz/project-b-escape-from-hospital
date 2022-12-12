//door1, door2, gate
//game over and back to the first page
//声音会卡住
let img;
let soundMonster;
let corridorBack;
let light;
let cableconnect;
let cabledisconnect;
let lightImage;
let monster=[];
let game;
let lightsAreOn = false;
//let judge;
function preload() {
  img = loadImage('imageMonster.png');
  corridorBack=loadImage('backgroundCorridor.png');
  soundMonster=loadSound('soundMonster.mp4');
  cableconnect=loadImage('../cable1.png');
  cabledisconnect=loadImage('../cable0.png');

}
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
    lightsAreOn=false
  }
}
function setup() {
  let canvas=createCanvas(1100, 600);
  canvas.parent('p5canvas');
  //monster=new Monster(random(100,1000),(50,550));
  for (let i = 0; i < 2; i++) {
    monster[i] = new Monster(
      random(80, 1000),
      random(50,550)
    );
  }
  player=new Player(50,50);
  light=new Light(random(100,1000),random(100,500));
  //image(corridorBack,0,0)
  //judge=false;
  cableconnect.resize(80,80)
  cabledisconnect.resize(80,80)
  lightImage=cabledisconnect;
  game=true;
}

function draw() {
  background(255,0,0);
  image(corridorBack,0,0)
  // monster.move();
  // monster.display();
  // monster.bounce();
  for (let i = 0; i < monster.length; i++) {
    
    monster[i].move();
    monster[i].display();
    monster[i].bounce();
  }
  fill(255)
  square(0,340,50)//first room
  square(250,550,50)//doctors' room
  square(1050,275,50)//front gate
  fill(0);
  textSize(10);
  textFont('Georgia')
  text('Room 413',2,355)
  text('Doctors Room',255,575)
  text('Front Gate',1052,300)
  light.update();
  light.display();
  if (game==true){
    player.update();
    player.display();
    player.move();
  }
  
  soundmonster();
  //judge=false;
  //console.log(judge)

  if(mouseX>1040 && mouseX<1130 && mouseY>270 && mouseY<330 && player.x>1040 && player.x<1130 && player.y>270 && player.y<330 && mouseIsPressed){
    //console.log("you win") 
    //console.log(mouseX,mouseY)
    // judge=true;
    textSize(60);
    // fill(237, 14, 2);
    fill(145, 12, 4)
    //textFont('Rubik Microbe');
    // text('YOU WIN',550,300)
    text('Sorry, you do not have the key',50,300)
    //ellipse(600,300,100,100);

    
    //const myTimeout = setTimeout(refresh,4000);
  }
  if(lightsAreOn == false){
    bgd()
  }
}
function bgd(){
  fill(0);
  rect(0,0,width,height);
}
function soundmonster(){
  soundMonster.play();
  if (dist(player.x,player.y,monster.x,monster.y)<600){
    let volValue = map(dist(player.x,player.y,monster.x,monster.y), 0, 600, 1.0, 0.0); 
  // volValue = constrain(volValue, 0.0, 1.0);
    soundMonster.setVolume(volValue);
  }
  
  //console.log(volValue)
  //console.log(dist(player.x,player.y,monster.x,monster.y))
}
class Monster{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.xSpd = random(-1, 1); 
    this.ySpd = random(-1, 1);
  }
  move(){
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  bounce(){
    if (this.x < 0) {
      this.x = 0;
      this.xSpd = this.xSpd * -1;
    }
    else if (this.x > width) {
      this.x = width;
      this.xSpd = this.xSpd * -1;
    }
    if (this.y < 0) {
      this.y = 0;
      this.ySpd = this.ySpd * -1;
    }
    else if (this.y > height) {
      this.y = height;
      this.ySpd = this.ySpd * -1;
    }
  }
  display(){
    img.resize(60,60);
    image(img,this.x,this.y);
  }
}
function refresh(){
  window.location.replace('../first page/index.html');
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
    if (dist(this.x,this.y,monster.x,monster.y)<50){
      textSize(40)
      textFont('Rubik Microbe');
      text('GAME OVER',200,120)
      fill(186, 41, 63);
      game=false;
      const myTimeout = setTimeout(refresh,8000);
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
// function mousePressed(){
//   if (lightImage == cabledisconnect) {
//     lightImage = cableconnect;
//   } else {
//     lightImage = cabledisconnect
//   }
//   //reference: https://p5js.org/reference/#/p5/mouseClicked
// }
class Light{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  update(){
    
    // if (dist(player.x,player.y,1075,300)>50 || mouseIsPressed==false || dist(this.x,this.y,player.x,player.y)>50){
    if ((dist(this.x,this.y,player.x,player.y)>80)){
      lightImage=cabledisconnect
      fill(0);
      rect(0,0,1100,600);
      fill(232, 29, 7);
      textSize(20);
      text('If you do not know what to do next, go back to room 413 by moving to the door of room 413 and clicking',10,570)
    }else{
      lightImage=cableconnect
      
    }
  }
  
  display(){
    
    //stroke(255);
    //square(this.x,this.y,50)
    
    image(lightImage,this.x,this.y);
  }
}
function mousePressed(){
  // square(0,340,50)//first room
  // square(250,550,50)//doctors' room
  // square(1050,275,50)//front gate
  if (player.x>0 && player.x<50 && player.y>340 && player.y<390){
    window.location.replace('../first_room_self_2022_12_05_18_07_21/index.html');
  }
  else if (player.x>250 && player.x<300 && player.y>550 && player.y<600){
    window.location.replace('../doctors_room_2022_12_05_18_06_53/index.html');
  }
  // else if(mouseX>1050 && mouseX<1100 && mouseY>275 && mouseY<325 && player.x>1050 && player.x<1100 && player.y>275 && player.y<325){
  //   console.log("you win") 
  //   console.log(mouseX,mouseY)
  //   // judge=true;
  //   // textSize(80);
  //   // fill(237, 14, 2);
  //   fill(255)
  //   // textFont('Rubik Microbe');
  //   // text('YOU WIN',550,300)
  //   text('YOU WIN',600,300)
  //   ellipse(600,300,100,100);

    
  //   // const myTimeout = setTimeout(refresh,4000);
  // }
}

// function myFunction(){
//   document.body.style.background="white";

    
// }
