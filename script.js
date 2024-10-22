//let n =15;
//for (let i = 65; i <= 92; i++) {
    //let pattern = "" ;
    //for (let j = 65; j <= i; j++) {
        //pattern+=string.fromcharcode(i)+ " ";
    //}
    //console.log(pattern);
//}
//...............................................................................................//

//let n = 15;
//for (let i = 1; i <= n; i++) {
    //let pattern = "" ;
    //for (let j = 1; j <= i; j++) {
        //pattern+= j+ " ";
    //}
    //console.log(pattern);
//}
//.....................................................................................................................//
// tringle print program
//let n =5;
//for (let i = 1; i <= n; i++) {
    //let pattern = "" ;
    //for (let j = n; j > i; j--) {
        //pattern+= " ";
    //}
    //for (let j = i; j >= 1; j--) {
    //pattern+= "* ";
    //}
    //console.log(pattern);
//}
//.................................................................................................................
//let n =5;
//for (let i = 1; i <= n; i++) {
    //let pattern = "" ;
    //for (let j = n; j >= i; j--) {
        //pattern+= "* ";
    //}
    //console.log(pattern);
    //}
//.................................................................................................................................//

//let n =5;
//for (let i = 1; i <= n; i++) {
    // 1 2 3
   // let pattern = "" ;
    //for (let j = n; j > i; j--) { // 5 -2.5 -3.5 -4   5-5 
       // pattern+= " ";
    //}
    //for (let j = i; j >= 1; j--) { //2  -1 3- 1 4- 1 5- 1
    //pattern+= " * ";
    //}
    //console.log(pattern);
//}
//....................................................................................................................//
//let n =5;
//for (let i = 1; i <= n; i++) {

   // let pattern = "" ;
    //for (let j = 1; j <= 7*n-1; j++) { 
        //if (i =* j){
            //pattern+= "* ";
       // }else{
           // pattern+="  ";
       // }
   // }
    //console.log(pattern);
//}
//.......................................................................................................................................//
 //v pattern program
//let n =5;
//for (let i = 1; i <= n; i++) {
    
    //let pattern = "" ;
    //for (let j = 1; j <= 2*n-1; j++) { 
       //if(i == j || i+j == (2*n)){
        //pattern+= "*  ";
       //}else{
       //pattern+="  ";
    //}
//}
   // console.log(pattern);
//}
//........................................................................................................................................//
//Array program
//var n = 7;
//for(var i = 1; i <= (n); i++){
    //var line = "";
    //for(var j = 1; j<=(2*n - 1);j++){
        //if(i == j || i+j == 2*n){
           // line +='* '
        //}
        //else{
           // line+=''
        //}
    //}
    //console.log(line)
//}
//.............................................................................................................................................................//
//var n = 5;
//var arr = [];
//for(var i = 1; i<= n; i++){
    //arr.push(+prompt('enter the value ${i}'))
//}
//var sum =0;
//arr.forEach((val)=>{
//})
//console.log(arr)
//..............................................................................................................//

//var n = 5;

//var arr = [];
//for(var i = 1; i<= n; i++){
    //arr.push(+prompt('enter the value ${i}'))
    //arr = [1,3,5, 7,9];
    //}
    //var sum =0;
    //arr.forEach((val,i)=>{
     //sum +=Val;  // 1 4 9 16 25 
    //})
    //console.log(arr)
    //console.log(sum)
//.................................................................................................................................//

// var n = 5;
//var arr = [];
//arr[1,2,3,4,5];
//const ans = arr.reduce((prev,curr)=>{
    //return prev+curr;
//})
//console.log(ans)
//................................................................................................................................//
//let n = +prompt("enter the size of the array");
//let arr = [];
//for(let i = 0; i < n; i++) {
    //let num = +prompt("enter the element");
        //arr.push(num);
    //}
    //let sum = 0;
    //arr.forEach((e)=>{
        //sum += e;
    //})
    //console.log("sum : " + sum);
    //console.log("Avg : " + sum/n);
//.....................................................................................................................................//
//let arr = [1, 2, 3, 32, 3, 5, 454, 654, 32, 2134, 3, 412];
//let max = 0;
//arr.forEach((e, index) => {
    //if (e > arr[max]) max = index;
//});
//console.log(arr[max],max);
//.........................................................................................................................................//
//let arr = [1, 2, 3, 32, 3, 5, 454, 654, 32, 2134, 3, 422];
//let max = 0;
//let secondmax = 0;
//arr.forEach((e, index) => {
    //if (e > arr[secondmax] && e|- arr[max]) secondmax = index;

//});
//console.log(arr[max], max);
//.............................................................................................................................................//
//Array program
//var n = 5;

//var arr = [];
//for (var i = 1; i<= n; i++) {
    // arr.push(+propmt('Enter the value ${i}'))
//}
//arr = [1,2,3,4,5];
//const ans = arr.reduce((prev,curr)=>{
    //console.log(prev)
    //return prev+curr;
//})
//console.log(ans)
//......................................................................................................../
//let n = +propmt("enter the size of the Array");
//let arr = [];
//for (let i = 0; i < n; i++) {
    //let num = +propmt("enter the element");
    //arr.push(num);
//}
//let sum = 0;
//arr.forEach((e)=>{
    //sum += e;
//})
//console.log("sum : " + sum);
//console.log("Avg : " + sum/n);
//.............................................................................................................//
//59 program
//const arr = [1,2,3,4,5,6,7,8];
//arr.forEach((e,i)=>{
    //console.log (arr[arr.length-(i+1)]);
//})
//..............................................................................................................//
//61. Array reverse without using Extra space
//const arr = [1,2,3,4,5,6,7,8];

//const arr2 = [];
//arr.forEach((e,i)=>{
    //arr2.push(arr[arr.length - (i + 1)]);
//});

//console.log(arr2)
//..................................................................................................................................//
//const arr = [1,2,3,4,5,6,7,8];
//const x = arr.map(()=>{
//});
console.log(x);
//.....................................................................................................................................//
//const arr = [1,2,3,4,5,6,7,8];
//const x = arr.map(()=>{return 1});
//console.log(x);
//.....................................................................................................................................//
//const arr = [1,2,3,4,5,6,7,8];
//const n = 4
//let index = 0;
//for (var i = 0; i < arr.length ; i++){
    //if(arr[i] == n){
        //index = i;
        //break;
    //}else{
       // index = -1;
    //}
//}
//console.log(index)
//.......................................................................................................................................................//
// 62.  linear search an array
//const arr = [1,2,3,4,5,6,7,8,];
//const n = 7; 
//let index = arr.indexOf(n);
//console.log(index)
//........................................................................................................................................................//
 // Array short krna
 //const arr = [1,2,3,4,5,1,8];
 //arr.sort((a,b) => a - b);
 //console.log("sorted array:",arr);
//........................................................................................................................//
//let left = 0;
//let right = arr.length -1;
//let k = 5;
//let index;
//while (left <= right){
    //let mid = Math.floor((right + left)/2);
    //if(arr[mid] === k){
        //index = mid;
        //break;
   // }
    //else if (arr[mid] > k){
       // right = mid -1;
    //}
    //else if(arr[mid]<k){
        //left = mid+1;
    //}
//}
//.........................................................................................................................................//
//let left = 0;
//let right = arr.length -1;
//let k = 5;
//let index;
//while (left <= right){
    //let mid = Math.floor((right + left)/2);
    //if(arr[mid] === k){
        //index = mid;
        //break;
    //}
    //else if (arr[mid] > k){
        //right = mid -1;
    //}
    //else if(arr[mid]<k){
        //left = mid+1;
    //}
   // console.log(index)
//}
//.....................................................................................................................................................//
//const arr = [3,2,4,5,1,8];
//arr.sort((a,b) => a - b);

//console.log(arr);

//let k = 8;
//function BinarySearch(arr, k){
    //let left = 0;
    //let right = arr.length -1;
    //let index ;
    //while(left <= right){     
    //}
    //return -1;
//}
//const ans = BinarySearch(arr,k);
//console.log(ans);
//.................................................................................................//

//const arr = [3, 2, 4, 5,1,8,12,10,7];
//arr.sort((a,b) => a - b);

//console.log(arr);

//let k = 4;
//function BinarySearch(arr, k){
    //let left = 0;
    //let right = arr.length -1;
   // while(left <= right){ 
        //let mid = Math.floor((right + left)/2);
        //if(arr[mid] === k) {
           // return mid;

        //} else if (arr[mid] > k)  {
           // right = mid - 1;
        //}else if (arr[mid] < k)   {
            //left = mid + 1;
        //}
    //}
    //return -1;
//}
//const ans = BinarySearch(arr,k);
//console.log(ans);
//..........................................................................................................................................................................................................................................................................................................//
//function bubblesort(sort) {
    //const n = arr.length;

    //for (let i = 0; i < n - 1; i++) {
         //for (let j = 0; j < n - i - 1 ; j++) {
        // 0 1 2 3 4 5
       // if(arr[j] > arr[j + 1])  {
            //let temp = arr[j];
           // arr[j] = arr[j + 1];
            //arr[j + 1] = temp;
        //}
        //}
   // }
    //return arr;
//}
//let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
//[34,25,12,22,11,64,90]
//console.log(unsortedArray);

//let sortedArray = bubblesort(unsortedArray);
//console.log(sortedArray);
