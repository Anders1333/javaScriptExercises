


interface Food {
    name: string;
    calories: number;
}

var burger = { 
    name: 'Burger',
    calories : 300
}

var icecream = {
    name: 'Icecream',
    calories: 250
}


function speak(food : Food): void {
  console.log("Our " + food.name  + " has " + food.calories + " calories.");
}


speak(burger);
speak(icecream);


//  Menu Class // 
class Menu {
    
    items: Array<string>;  
    pages: number;        
   
    constructor(item_list: Array<string>, total_pages: number) {
      this.items = item_list;    
      this.pages = total_pages;
    }
  
    // Methods
    list(): void {
      console.log("Our menu for today:");
      for(var i=0; i<this.items.length; i++) {
        console.log(this.items[i]);
      }
    }
    recommend() : void {
        var recommended = this.items[Math.floor(Math.random() * this.items.length)]
        console.log("We would recommend the " + recommended)
    }
  } 
  
 
  var sundayMenu = new Menu(["pancakes","waffles","orange juice","egg benedict","tenderloin","coffee"], 1);
  
  
  sundayMenu.list();
  sundayMenu.recommend();


  // Inheritance-------------------------------------------------------------------------------------
  
  class Drinks extends Menu {
    
  
    // A new constructor has to be defined.
    constructor(item_list: Array<string>, total_pages: number) {
      // In this case we want the exact same constructor as the parent class (Menu), 
      // To automatically copy it we can call super() - a reference to the parent's constructor.
      super(item_list, total_pages);
    }
  
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    list(): void{
      console.log("Our Drinks Menu: ");
      for(var i=0; i<this.items.length; i++) {
        console.log(this.items[i]);
      }
  
    }
  }
  
  var drinksmenu = new Drinks(["coke","GT","beer","water"], 1);
  
  
  drinksmenu.list();
  drinksmenu.recommend();



  // Generics ------------------------------------------------------------------------------------

  // The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.
//         name     gen   arg       return
function genericFunc<T>(argument: T): T[] {    
  var arrayOfT: T[] = [];    // Create empty array of type T.
  arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
  return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String

var arrayFromNumber = genericFunc<number>(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number





// Excercise 2 -------------------------------------------------------------------

interface Ibook {
  title: string;
  readonly author?: string;
  published?: Date;
  pages: number;
}

function giveInfo(book : Ibook): void{
console.log(book.title)

if(book.author){
console.log("by " + book.author);
}

if(book.published){
  console.log("published " + book.published);
}
console.log(book.pages);
}



var book1 = {
  title: "IT",
  author: "Stephen King",
  published: new Date(1983, 8, 15, 0, 0, 0, 0),
  pages: 1138
}
var book2 = {
  title: "NoAuthorOrPublishDate",
  pages: 666
}


giveInfo(book1);
giveInfo(book2);



// Duck typing:  Assuming that an argument is of the type we can process, if it contains the same fields and valuetypes.
 



class Book implements Ibook {
  title: string;
  readonly author?: string;
  published?: Date;
  pages: number;
         
   
    constructor(title: string, pages:number, author?: string, published?:Date) {
     this.title = title
     this.pages = pages
     this.author = author
     this.published = published
    }
}

//   ------------------------- 4 function interfaces---------------------------------------------

var testArray = ['a','b','c']


interface myFunc {
  (par1: string, par2: string, par3: string): any[]
  
}


let myFunc1: myFunc;
myFunc1 =  function(par1: string, par2: string, par3: string){
  let returnArray = [];
  returnArray.push(par1,par2,par3)
  let result = returnArray
  return result
}

let myFunc2: myFunc;
myFunc2 = function(par1,par2,par3){
  let par1u = par1.toUpperCase;
  let par2u = par2.toUpperCase;
  let par3u = par3.toUpperCase;
  let returnArray2 = [];
  returnArray2.push(par1u,par2u,par3u)
  let result = returnArray2
  return result
}

let f2 = function logger(f1: myFunc){
  //Simulate that we get data from somewhere and uses the provided function
  let [ a, b, c] = ["A", "B", "C"];
  console.log(f1(a,b,c));
}

f2(myFunc1)
f2(myFunc2)

//-----------------  5  Classes and inheritance -----------------------------------


class Shape {
  color:string
  constructor(color:string){
    this.color = color;
  }  

  setColor(color:string){
    this.color = color;
  }

  getColor(){
    return this.color;
  }

  getArea() {
    return undefined;
  }
  getPerimeter() {
    return undefined;
  }
  toString(): void {
    console.log("Shape color:  " + this.getColor() + "\nArea:  " + this.getArea() + "\nPerimeter:  " + this.getPerimeter()) 
  
  }
}

var shape1 = new Shape("blue")
console.log(shape1.getColor());
shape1.setColor("red")
console.log(shape1.getColor())
console.log(shape1.getArea())
console.log(shape1.getPerimeter())
shape1.toString();

class Circle extends Shape{
  
  radius:number

  constructor(color:string,radius:number){
    super(color);
    this.radius = radius;
  }  
  
  setRadius(radius:number){
   this.radius = radius;
  }
  getRadius(){
    return this.radius;
  }
  getArea() {
    return undefined;
  }
  getPerimeter() {
    return undefined;
  }
  toString(): void {
    console.log("Shape color:  " + this.getColor() + "\nArea:  " + this.getArea() + "\nPerimeter:  " + this.getPerimeter() + "\nRadius:  "+ this.getRadius()) 
  
  }
}


var shape2 = new Circle("green",50);

console.log(shape2.toString())

class Cylinder extends Circle{

  height : number;

  constructor(color:string,radius:number,height:number){
    super(color,radius);
    this.height = height;
  
  } 
setHeight(height:number){
this.height = height;
}

getheight(){
  return this.height;
}
getArea() {
  return undefined;
}
getPerimeter() {
  return undefined;
}

getVolume(){
return 3.14*(this.getRadius()^2)*this.getheight()
}
toString(): void {
  console.log("Shape color:  " + this.getColor() + "\nArea:  " + this.getArea() + "\nPerimeter:  " + this.getPerimeter() + "\nRadius:  "+ this.getRadius()+"\nHeight:  " + this.getheight() + "\nVolume:  " + this.getVolume()) 

}


}



var cylinder = new Cylinder("purple",5,10);

cylinder.toString();