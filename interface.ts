let userob : object;

userob = {
    name : 'xx',
    age : 30
}

//console.log(userob.name) // object에는 특정 속성값에 대한 정보가 없다
type Score = 'A'|'B';

interface User{
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    [grade:number] : Score;

}

let user1 : User={ 
    name  : 'x',
    age : 30,
    birthYear : 2000 ,
    1 : 'A',
    2 : 'B'
}
user1.age = 10;
user1 .gender = "male"


interface ADD {
    (num1:number,num2:number): number;
}

const add:ADD = function(x,y){
    return x+y;
}

add(10,20);

interface IsAdult{
    (age:number) : boolean;
}

const a3 : IsAdult = (age) =>{
    return age>19;
}

a3(33) //true

//implements

interface Car{
    color : string;
    wheels : number;
    start(): void;
}

class Bmw implements Car{
    color: string;
    wheels = 4;
   constructor(c:string){
    this.color=c;
   } 
   start(): void {
       console.log('go');
   }
}

const b3 = new Bmw('green');
console.log(b3)
b3.start(); // go

//extends
interface Benz extends Car{
    door : number;
    stop(): void;
}

const benz : Benz={
    door : 5,
    stop(){
        console.log('stop');
    },
    color : 'black',
    wheels : 4,
    start(): void {
        console.log('go');
    }
}