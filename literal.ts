//Literal Types
const userName1 = "bob"; // 변하지않는값 = 문자열 리터럴 타입
let userName2:string |number = 'tom'; 

userName2 =3;

//타입을 명시하고 쓰기
type job = "police"|"developer"|"teacher";

interface User {
    name : string,
    job : "developer"
}

//유니온타입
interface HighSchoolStudent{
    name: number|string;
    grade:1|2|3
}

interface Car{
    name:"car";
    color : string;
    start():void;
}

interface Mobile{
    name:'mobile';
    color:string;
    call():void;
}

function getGift(gift:Car|Mobile){
    console.log(gift.color);
    if(gift.name === "car"){
    gift.start();
    }
    else{
        gift.call();
    }

}

//Intersection Type(교차타입)

interface Car1{
    name:string;
    start():void;
}
interface Toy{
    name:String;
    color:String;
    price:Number;
}
const toyCar:Toy|Car1={
    name:"타요",
    start(){},
    color:"blue",
    price:1000,
};
