

myfunction();

function myfunction(){

var total = 0;

process.argv.splice(0, 2);

numberarray = process.argv.map(Number)

total = numberarray.reduce(getSum)

console.log(total)



}

function getSum(total, num) {
    return total + num;
}

