let car : string ='bmw';
let age : number = 30;
let isAdult:boolean = true;
let a :number[] = [1,2,3];
let a2 : Array<number>=[1,2,3];

let week1 : string[]=['mom','tue','wed'];
let week2 : Array<string> = ['mom','tue','wed'];

//week1.push(3)//error string인데 숫자를 집어넣었음  

//튜플(Tuple)

let b:[string,number];

b = ['z',1];
//b= [1,'z']; // 불가능 타입 안맞음
b[0].toLowerCase();
//b[1].toLowerCase();//error number에는 toLowerCase가없다

//void,never

function sayHello():void{
    console.log("go");
}

function showError():never{
    throw new Error();
}

function infLoop():never{
    while(true){
        //do something..
    }
}

// enum : 특정값만 입력할 수 있게 강제하고싶을때 그 값들이 공통점이 있을때
// 양방향 매핑 가능 숫자라
enum Os{
    Window = 3,
    Ios = 10,
    Adroid // 11이 된다.
}

console.log(Os[10])// Ios
console.log(Os['Ios'])//10

// 단방향 매핑만 가능
enum Os2{
    Window='win',
    Ios = 'ios',
    Adroid = 'android'
}

let myOs : Os2;
myOs = Os2.Window

//null, nudefined

let c : null = null;
let d : undefined = undefined;