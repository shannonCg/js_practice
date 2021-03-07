/* 
* var宣告的參數作用域為函數作用域(function scope)，因此不在函數內宣告的參數都是全域變數
* let宣告的參數作用域為區塊作用域(block scope)，因此不在區塊內(也就是{}內)宣告的參數都是全域變數
* const宣告的參數參數作用域也為區塊作用域(block scope)，但不同於let的部分是一開始宣告的參數值不可更動
*/
{
    var a = 10;
    let b = 20;
    const c = 100;
}
print(a); 
// print(b); //cause error
// print(c); //cause error
print('\n');


/* use1 */
for(let i = 0; i < 10; i++){
    print(i);
}
// print(i); //cause error
print('\n');

/* use2 */
var c = [];
for(var j = 0; j < 10; j++){
// for(let j = 0; j < 10; j++){
    c[j] = function(){
        print(j);
    };
}
c[6]();//when 'var' j result is 10, else when 'let' j result is 6
c[9]();//when 'var' j result is 10, else when 'let' j result is 9
print('\n');


/* for()和執行{}內的let作用域不同 */
for(let k = 0; k < 3; k++){
    let k = 'aaa';
    print(k);
}
print('\n');


/* let不存在變量提升，也就是宣告變數前就使用變數時，會直接執行失敗 */
//var
print(test_var);
var test_var;

//let
// print(test_let); //cause error
let test_let;
print('\n');


/* 暫時性死區(temporal dead zone<TDZ>)： 只要區塊內存在let宣告的變數，之後此變數就被綁定在此區塊內了 */
var temp = 123;
if(true){
    temp = 'abc';
    // let temp; //cause error
}
print(temp);

print(typeof temp2); 
// let temp2; //cause error
print('\n');


/* let不允許在同區塊重複宣告相同變量 */
function func1(){ //no error
    var aa = 1;
    var aa = 2;
}

// function func2(){ //cause error
//     let bb = 1;
//     var bb = 2;
// }

// function func3(){ //cause error
//     let cc = 1;
//     let cc = 2;
// }
