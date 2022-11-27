function hello(name?:string){
    return `hello,${name||"world"}`;
}
const result= hello();
const result2 = hello("sam");

console.log(result);
console.log(result2);