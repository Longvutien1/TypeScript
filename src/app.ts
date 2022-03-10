export {} ;


console.log("Hello long");

function sum(a:number, b:number):number {
    return a + b;
    
}
// khai báo biến
type User = {
    id:number,           //required
    name: string,        //required
    status?: boolean     //required optional chaning
}


const myName:string = "Long vu tiến";
const myAge:number = 20;
const status: boolean = true;
const object: User = { id:1, name: "Minh đức" };

const numberArr: number[] = [1,2,3];
const stringArr: string[] = ['a','b','c'];
const objectArr: object[] = [{id:1}, {name:"b"}]
// sum()
