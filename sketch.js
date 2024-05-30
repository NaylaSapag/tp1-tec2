//Comisión Lisandro aula 107
//Sapag Nayla Nahir 93541/6  y  Sampino Lucas 93080/8


let MisCirculos = [];
let x,y,r,c,l,limc,col1,col2,col3;

function setup() { //ejecución inicial
  createCanvas(windowWidth, windowHeight); //tamaño de pantalla
  crearCirculos();                         //función de inicialización de circulos
}

function draw() {                   //ejecución reperida
  background(0);                    //color de fondo
  for(let i = 0; i < limc; i++){    //for para cantidad de circulos
   MisCirculos[i].crecer();
   MisCirculos[i].dibujar();
  }
}

class circulo{
  constructor(x, y, r, c, l, col1, col2, col3){
    this.x = x; //pos x
    this.y = y; //pos y
    this.r = r; //radio
    this.c = c; //crecimiento

    this.col1 = col1;
    this.col2 = col2;
    this.col3 = col3;

    this.limc = random(map(l, 1, 3, 10, 50)); //limite de crecimieno de circulos
  }

  crecer(){                                         //funcion de crecimiento con click
    if(mouseIsPressed){
      this.r += this.c; // this.r + this.c = this.r;
      if(this.r >= this.limc){
        this.c = 0;
      }
    }else{
      background(0);
      this.r =  0;
      
    }
  }

  dibujar(){                            //funcion de dibujo
    push();
    fill(this.col1, this.col2, this.col3);
    stroke(this.col1, this.col2, this.col3);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    pop();
  }
}

function crearCirculos(){ //función de inicialización de circulos

  limc = 1000;

  for(let i = 0; i < limc; i++){  //inicializacion de circulos con datos
    x = random(windowWidth);  //pos x
    y = random(windowHeight); //pos y
    r = 0;                    //radio
    c = random(0.1,0.5);      //crecimiento
    l = random(1,3);          //tipo de tamaño
    col1 = random(0,255);     //colores
    col2 = random(0,255);
    col3 = random(0,255);


    MisCirculos[i] = new circulo(x, y, r, c, l,col1,col2,col3); //inicialización de los circulos
  }

}