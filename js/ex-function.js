// 1. Viết hàm so sánh 2 số a, b tìm ra số lớn hơn 

    function compare(a,b){
        if(typeof a!=='number' || typeof b !== 'number') {
            console.log("Please enter a valid number");
            return 0;
        }
    
        
        return Math.max(a,b);
    
    }
    console.log(compare(100, 1000));


//2.In hoa chữ cái đầu :
    function capitalize(word = ''){
        if(word.length===0) return null;
        let newword=word.toLowerCase().charAt(0).toUpperCase();
        console.log(newword);
        let otherword=word.toLowerCase().slice(1) ;
        return `${newword}${otherword}`;
    }
    console.log(capitalize('TRÂM'));


// 3. Viết hàm sử dụng callback(function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
function useCallback(a,b, callback){
    let max = compare(a,b);
    callback(max);
}

function printMax(number){
    console.log('Max number is '+number);

}
console.log(useCallback(500, 1000, printMax));

