function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");

   
  //cuadrados de grande a chico
  //izquierda arriba A
  //derecha arriba B
  //izquierda abajo C
  //derecha abajo D
  
  
  //marco
  strokeWeight(4); 
  stroke("blue");
  line(0,0,400,0);
  line(0,0,0,400);
  line(400,0,400,400);
  line(400,400,0,400);
  
  //A1
  strokeWeight(2); 
  stroke("blue");
  noFill()
  rect (0, 0, 200, 200);
  
  //A2
  strokeWeight(2); 
  stroke("#80ff00");
  rect(43.25,43.25,112.5,112.5);
  
  //A3
  stroke("blue")
  rect(63,63,75,75);
  
  //A4
  stroke("#db1679")
  rect(75,75,50,50);
  

  
  
  //B1
  noFill()
  stroke("blue");
  rect(200,0,200,200);
  
  //B2
  stroke("#80ff00");
  rect(225,25,150,150)
  
  //B3
  stroke("#db1679")
  rect(237.5,37.5,125,125)
  
  //B4
  stroke("blue");
  rect(250,50,100,100)
  
  //B5
  rect(262.5,62.5, 75,75)
  
  //B6
  stroke("#80ff00");
  rect(268.75,68.75,62.5,62.5)
  
  
  
  
  
  //C1
  noFill()
  stroke("blue");
  rect(0,200,200,200);
  
  //C2
  stroke("#db1679")
  rect(12.5,212.5,175,175)
  
  //C3
  stroke("#80ff00");
  rect(25,225,150,150)
  
  //C4
  stroke("#db1679")
  rect(31.25,231.25,137.5,137.5)
  
  
  
  
  //D1
  noFill()
  stroke("blue");
  rect(200,200,200,200);
  
  //D2
  stroke("#80ff00");
  rect(262.5,262.5,75,75);
  
  //D3
  stroke("blue");
  rect(287.5,287.5,25,25);
  
  
  
  
  
  
}