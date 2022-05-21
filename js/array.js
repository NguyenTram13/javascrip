// array.sort sắp xếp theo chuỗi

const random= [1,456,2,6,8,2346,89,7];
console.log(random.sort());
//sắp xếp theo số từ bé đến lớn
const random3= random.sort((a,b)=>a>b?1:-1);
console.log(random3);
//sắp xếp theo thứ tự giảm dần

const random4= random.sort((a,b)=>a>b?-1:1);
console.log(random4);


//array.find trả về phần tử tìm thấy đầu tiên trong mảng
//nếu không tìm thấy trả về undefind

const number= [2,45,7,2,7,8,];
const findNumber= number.find((element)=> element>100000000)
console.log(findNumber);


// array.findIndex trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó

const findNumberIndex= number.findIndex((element)=> element<0)
console.log(findNumberIndex);

//array.map duyệt qua phần tử trong mảng trả ra mảng mới không làm thay đổi mảng ban đầu
const listNumber=[1,2,3,4,5,6];
//trả ra 1 mảng giá trị mảng x2
 const listNumberDouble= listNumber.map(function(value, index,array){
     return value*2;

 });
 console.log(listNumberDouble);


 //array.forEach duyệt qua mảng không return không dừng (k cách nào dừng cả)
 //chỉ xử lý 1 chức năng 
const listNumberTripple= listNumber.forEach((value, index, array)=>{
    return value*3;
});
console.log(listNumberTripple);



//array.filter sàng lọc các phần tử trong mảng thỏa điều kiện nào đó 
const filterNumber= listNumber.filter((value )=>value>3);
console.log(filterNumber);

//array.some trả về true khi thỏa 1 điều kiện và ngược lại
const someNumber = listNumber.some(value => value>3);
console.log(someNumber);


//array.every mọi điều kiện phải đúng thì =>true
const everyNumber = listNumber.every(value => value>0);
console.log(everyNumber);

// array.reduce gom các phần tử về 1 giá trị 
// .reduce((a,b)=>{}, initialize value)
const reduceNumber= listNumber.reduce(function(a,b){
    return a+b;
},0)
console.log(reduceNumber);




//1. đảo ngược 1 chuỗi


function reverseString(str){
    if(!str) return false;
    //split chuyển chuỗi thành mảng
    // const newStr= str.split(" ");
    // const reverseStr= str.split(" ").reverse().join(" ");
    return str.split(" ").reverse().join(" ");

}
console.log(reverseString('my name is Tram'));



//2. Đảo ngược chuỗi bao gồm các ký tự

function reverseWord(str){
    if(!str) return null;
    const newStr= str.split(" ").map(value => value.split("").reverse().join("")).reverse().join(" ");
    // console.log(newStr);
    return newStr

}
console.log(reverseWord('my name is tram'));


//3.In hoa chữ cái đầu trong chuỗi

function capitalizeWord(word = ""){
    if(word.length==0) return null;
    let newword = word.toLowerCase().charAt().toUpperCase();
    let otherWord = word.toLowerCase().slice(1);
    return `${newword}${otherWord}`
}

function capitalizeStr(str){
    if(!str) return null;
    //str.split(" ").map(item => capitalizeWord(item)).join(" ")
    const result = str.split(" ").map((item) => capitalizeWord(item)).join(" ");
    console.log(result);

}
capitalizeStr('my name is tram');





// By value && by referrences
//by value-> giá trị thực sự đc lưu trong 1 vùng bộ nhớ
const num1 =1;
const num2 =1;
console.log(num1===num2);

//by referrences nói tới vùng bộ nhớ
const  srr1 =[1,2];
const  srr2 =[1,2];

console.log(srr1===srr2);

