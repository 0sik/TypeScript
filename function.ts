function hello(name?:string){
    return `hello,${name||"world"}`;
}
function hello2(name="world"){
    return `hello,${name}`;
}
//hello,hello2둘이 똑같은 함수
const result3= hello();
const result2 = hello("sam");

console.log(result3);
console.log(result2); 

function hello3(age:number|undefined,name:string):string{
    if(age!==undefined){
        return`hello${name}.you are ${age}`;
    }
    else{
        return `hello${name}`;
    }
}

console.log(hello3(30,"sam"));
console.log(hello3(undefined,"sam"));

function add3(...nums:number[]){
    return nums.reduce((result,num)=>result+num,0);
}

add3(1,2,3);//6
add3(1,2,3,4,5,6,7,8,9,10)//55

interface User3 {
    name : string;
}
const Sami :User3={name:'sami'}

function showName(this:User3){
    console.log(this.name)
}

const sami1 = showName.bind(Sami);
sami1();

interface User5{
    name:string;
    age:number;
}
function join(name:string,age:number):User5;
function join(name:string,age:string):string;
function join(name:string,age:number|string):User5|string{
    if(typeof age ==="number"){
        return{
            name,
            age,
        };
    }else{
        return " 나이는 숫자로 입력해주세요"
    }
}
const sam:User5 = join("sam",30); // 에러
const jane : string = join("jain","30");  //에러