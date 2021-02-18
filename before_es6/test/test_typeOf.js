print(typeof 123);
print(typeof NaN);
print('\n');
print(typeof '123');
print('\n');
print(typeof false);
print('\n');
function f(){}
print(typeof f);
print('\n');

print(typeof undefined);
/* 判斷變數為undefined */
//cause error because v didn't declared by 'var'
//if(!v){
//	print("undefined");
//}
//not cause error way
if(typeof v === "undefined"){
    print("variable is undefined");
}
print('\n');

print(typeof window);
print(typeof {});
print(typeof []);
print(typeof null);
print('\n');
//if we want to know object type
print(window instanceof Window);
print([] instanceof Array);
print({} instanceof Array);
print({} instanceof Object);
print('\n');
