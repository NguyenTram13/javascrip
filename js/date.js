const now =new Date();
//built-in object
console.log(now);
// Thu May 19 2022 19:07:06 GMT+0700 (Giờ Đông Dương)

//timestamp & epoch time
// unix time
//timestamp tính ra kết quả là miliseconds
console.log(now.getTime());
console.log(new Date());

// bai 1.
 
// const mytime=new Date("Thu May 19 2022 22:03:09 GMT+0700 (Giờ Đông Dương)");
// const myYear = mytime.getFullYear();
// const myMonth = mytime.getMonth()+1;
// const myDate= mytime.getDate();
// const prefixMonth = myMonth < 10 ? "0": "";//thêm 0 và tháng nhỏ hơn 10
// console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);


//setTimeout && set Interval

// setTimeout(function(){
//     alert("call me after 3 seconds")
// },3000);


// const timer = setInterval(function(){
//                 console.log("call me")
//                 }, 1000);
// clearInterval(timer);



// 1. Nhập năm in tuổi 

// function getage(year){
//     const newtime= new Date()
//     const newYear= newtime.getFullYear();
//     return newYear - year
// }
// const year=getage(1999);
// console.log(year);


// 2. Viết chương trình đếm ngược thời gian từng giây

// function countdown(minutes=1){
//     let seconds=minutes*60;
//     let countter = 0;
//     const timer= setInterval(function(){
//         countter=countter+1;
//         console.log(countter);
//     if(countter==seconds){
//         clearInterval(timer);
//         console.log("your time is end!")
//     }
//     },1000)
// }

// countdown(1);


//3. Viết chương trình timeSince, đầu vào là tg và tính tg đầu vào so với tg hiện tại
//  1năm= 31536000s
//  1thang =2678400s
//  1tuan=604800;
//  1ngay=86400
//  1gio=3600
//  1phut=60
function timeSince(date){
    const now= new Date();
    const yourTime= new Date(date);

    const newTime =Math.floor( (now.getTime() - yourTime.getTime())/1000);
    let timer= newTime/31536000;
    if(timer>=1){
        console.log(`${Math.floor(timer)} năm trước`);
        
        return;
    }
    timer= newTime/2678400;
    if(timer>=1){
        console.log(`${Math.floor(timer)} tháng trước`);
        
        return;
    }

    timer= newTime/604800;
    if(timer>=1){
        console.log(`${Math.floor(timer)} tuần trước`);
        
        return;
    }

    timer= newTime/86400;
    if(timer>=1){
        console.log(`${Math.floor(timer)} ngày trước`);
        
        return;
    }

    timer= newTime/3600;
    if(timer>=1){
        console.log(`${Math.floor(timer)} giờ trước`);
        
        return;
    }

    timer= newTime/60;
    if(timer>=1){
        console.log(`${Math.floor(timer)} phút trước`);
        
        return;
    }
    timer=newTime
    if(timer>=1){
        console.log(`${Math.floor(timer)} phút trước`);
        
        return;
    }

    
    
}
timeSince("Fri May 20 2022 20:52:10 GMT+0700 (Giờ Đông Dương)")