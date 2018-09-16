"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var burger = {
    name: 'Burger',
    calories: 300
};
var icecream = {
    name: 'Icecream',
    calories: 250
};
function speak(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
speak(burger);
speak(icecream);
//  Menu Class // 
var Menu = /** @class */ (function () {
    function Menu(item_list, total_pages) {
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    Menu.prototype.recommend = function () {
        var recommended = this.items[Math.floor(Math.random() * this.items.length)];
        console.log("We would recommend the " + recommended);
    };
    return Menu;
}());
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice", "egg benedict", "tenderloin", "coffee"], 1);
sundayMenu.list();
sundayMenu.recommend();
// Inheritance-------------------------------------------------------------------------------------
var Drinks = /** @class */ (function (_super) {
    __extends(Drinks, _super);
    // A new constructor has to be defined.
    function Drinks(item_list, total_pages) {
        // In this case we want the exact same constructor as the parent class (Menu), 
        // To automatically copy it we can call super() - a reference to the parent's constructor.
        return _super.call(this, item_list, total_pages) || this;
    }
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    Drinks.prototype.list = function () {
        console.log("Our Drinks Menu: ");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Drinks;
}(Menu));
var drinksmenu = new Drinks(["coke", "GT", "beer", "water"], 1);
drinksmenu.list();
drinksmenu.recommend();
// Generics ------------------------------------------------------------------------------------
// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.
// Receives one argument of type T,
// Returns an array of type T.
//         name     gen   arg       return
function genericFunc(argument) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument].
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number
function giveInfo(book) {
    console.log(book.title);
    if (book.author) {
        console.log("by " + book.author);
    }
    if (book.published) {
        console.log("published " + book.published);
    }
    console.log(book.pages);
}
var book1 = {
    title: "IT",
    author: "Stephen King",
    published: new Date(1983, 8, 15, 0, 0, 0, 0),
    pages: 1138
};
var book2 = {
    title: "NoAuthorOrPublishDate",
    pages: 666
};
giveInfo(book1);
giveInfo(book2);
// Duck typing:  Assuming that an argument is of the type we can process, if it contains the same fields and valuetypes.
var Book = /** @class */ (function () {
    function Book(title, pages, author, published) {
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.published = published;
    }
    return Book;
}());
//   ------------------------- 4 function interfaces---------------------------------------------
var testArray = ['a', 'b', 'c'];
var myFunc1;
myFunc1 = function (par1, par2, par3) {
    var returnArray = [];
    returnArray.push(par1, par2, par3);
    var result = returnArray;
    return result;
};
var myFunc2;
myFunc2 = function (par1, par2, par3) {
    var par1u = par1.toUpperCase;
    var par2u = par2.toUpperCase;
    var par3u = par3.toUpperCase;
    var returnArray2 = [];
    returnArray2.push(par1u, par2u, par3u);
    var result = returnArray2;
    return result;
};
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(myFunc1);
f2(myFunc2);
//-----------------  5  Classes and inheritance -----------------------------------
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.getArea = function () {
        return undefined;
    };
    Shape.prototype.getPerimeter = function () {
        return undefined;
    };
    Shape.prototype.toString = function () {
        console.log("Shape color:  " + this.getColor() + "\nArea:  " + this.getArea() + "\nPerimeter:  " + this.getPerimeter());
    };
    return Shape;
}());
var shape1 = new Shape("blue");
console.log(shape1.getColor());
shape1.setColor("red");
console.log(shape1.getColor());
console.log(shape1.getArea());
console.log(shape1.getPerimeter());
shape1.toString();
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.getArea = function () {
        return undefined;
    };
    Circle.prototype.getPerimeter = function () {
        return undefined;
    };
    Circle.prototype.toString = function () {
        console.log("Shape color:  " + this.getColor() + "\nArea:  " + this.getArea() + "\nPerimeter:  " + this.getPerimeter() + "\nRadius:  " + this.getRadius());
    };
    return Circle;
}(Shape));
var shape2 = new Circle("green", 50);
console.log(shape2.toString());
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(color, radius, height) {
        var _this = _super.call(this, color, radius) || this;
        _this.height = height;
        return _this;
    }
    Cylinder.prototype.setHeight = function (height) {
        this.height = height;
    };
    Cylinder.prototype.getheight = function () {
        return this.height;
    };
    Cylinder.prototype.getArea = function () {
        return undefined;
    };
    Cylinder.prototype.getPerimeter = function () {
        return undefined;
    };
    Cylinder.prototype.getVolume = function () {
        return 3.14 * (this.getRadius() ^ 2) * this.getheight();
    };
    Cylinder.prototype.toString = function () {
        console.log("Shape color:  " + this.getColor() + "\nArea:  " + this.getArea() + "\nPerimeter:  " + this.getPerimeter() + "\nRadius:  " + this.getRadius() + "\nHeight:  " + this.getheight() + "\nVolume:  " + this.getVolume());
    };
    return Cylinder;
}(Circle));
var cylinder = new Cylinder("purple", 5, 10);
cylinder.toString();
//# sourceMappingURL=../src/src/menu.js.map