
class Coche {
    //EL código dentro de estas llaves, corresponde a los planos
    //que van a definir al coche.

    //Primero el constructor
    constructor(marca,color,cilindrada,modelo,puertas){

        this.marca = marca;
        this.color = color;
        this.cilindrada = cilindrada;
        this.modelo = modelo;
        this.puertas = puertas;
        this.ruedas = 4;
        this.llaves = true;
        this.velocidad = 0;
        this.metros = 0;

    }

    //Después vienen los métodos (funciones de la clase)
    acelerar () {   
        this.velocidad = (this.velocidad + 20 * this.cilindrada) / 100;
        this.metros = this.velocidad / 2;
    };

    frenar () {

    };

};

let marcCar = new Coche("McLaren","Blue",300,"Sport",3);

let ivanCar = new Coche("Subaru","Rojo",400,"Impreza",3);

let lucianoCar = new Coche("Fiat","Pistacchio",60,"Panda 4X4",5);

let circuito = 5000;

while (marcCar.metros <= 5000 || ivanCar.metros <= 5000 || lucianoCar.metros <= 5000) {

    marcCar.acelerar();
    ivanCar.acelerar();
    lucianoCar.acelerar();

    if(marcCar.metros <= 5000){
        console.log("Ha ganado Marc");
        break;
    } else if (ivanCar.metros <= 5000){
        console.log("Ha ganado Ivan");
        break;
    } else if (lucianoCar.metros <= 5000){
        console.log("Ha ganado Luciano");
        break;
    };



};