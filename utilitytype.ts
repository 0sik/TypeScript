// keyof

interface bot{
    id:number;
    name:string;
    age:number;
    //gender:"m"|"f";
}

type botKey = keyof bot;

const bk:botKey = "name";  

//Record<K,T>

type Grade = "1"|"2"|"3"|"4";
type Score1 = "A"|"B"|"C"|"D";
const score:Record<Grade,Score1> = {
    1: "A",
    2 :"B",
    3 :"C",
    4:"D"
}

function isValid(user:bot){
    const about : Record<keyof bot, boolean>={
        id : user.id >0,
        name:user.name !=="",
        age:user.age>0,
    }
}

