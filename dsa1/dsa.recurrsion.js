// function fib(n,a=0,b=1){
//     if(n===0)return 0
//     console.log(a)
//     return fib(n-1,b,a+b)
// }

// fib(10)


//  function fibonacci(n){
//     if(n===0) return 0
//     if(n===1)return 1
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(5))


// function factorial(n){
//     if(n===1)return 1
    
//     return n*factorial(n-1)
// }
// console.log(factorial(5))


// function sumdigit(n){
//     if(n===0)return 0
    
//     return n%10+sumdigit(Math.floor(n/10))
// }



// let num=12345
// console.log(sumdigit(num))



// function removedup(str,res=' '){
    
//   if(str.length===0)return res
//   if(!res.includes(str[0])){
//       res+=str[0]
//   }
  
//   return removedup(str.slice(1),res)
// }


// console.log(removedup("lenavillooni"))


// function freqq(str,freq={}){
    
//     if(str.length===0)return freq
    
    
//     let char=str[0]
//     freq[char]=freq[char]?freq[char]+1:1
    
//     return freqq(str.slice(1),freq)
// }
// let str="lenavillooni"
// console.log(freqq(str))


// function freqq(str){
//     if(str==="")return ""
    
//     return freqq(str.slice(1))+str[0]
    
// }
// let str="lenavillooni"
// console.log(freqq(str))

// function sum(arr, n) {
//   if (n === 0) return 0;             
//   return arr[n - 1] + sum(arr, n - 1); 
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(sum(arr, arr.length));



// function reverse(arr,start=0,end=arr.length-1){
    
//     if(start >=  end)return arr;
//      [arr[start],arr[end]] = [arr[end],arr[start]]
//     return reverse(arr,start+1,end-1)
// }
// const arr=[1,2,3,4]
// console.log(reverse(arr))


// const arr = [1,2,3,4,5,6,9,10];
// let miss=[]


// function element(arr,i=1){
    
//     if(i>10)return 
    
//     let found=arr.includes(i)
    
//     if(!found){
//         miss.push(i)
//     }
//     return element(arr,i+1)
// }

// element(arr)
// console.log(miss)



// const arr = [1,2,3,4,5,6,9,10];
// function largest(arr,n=arr.length,large=-Infinity){
//     if(n===0)return large
//    if(arr[n-1]>large){
//        large=arr[n-1]
//    }
   
//    return largest(arr,n-1,large)
// }
// console.log(largest(arr))

// let str="lenavillooni"

// function removechar(str,i=0,res=''){
//     if(i===str.length)return res
    
    
//     if(str[i]!=="o"){
//         res+=str[i]
//     }
//     return removechar(str,i+1,res)
// }
// console.log(removechar(str))

// find kth largest element in array

// const arr = [5, 2, 9, 1, 7];
// const k = 4; // find 3rd largest element

// // Sort in descending order
// const sortedArr = arr.sort((a, b) => b - a);
// console.log(sortedArr)
// // The k-th largest element
// const kthLargest = sortedArr[k - 1];

// console.log(kthLargest);


// Add an element to the middle of an array, practice 10 problems on an array and slice





// function replace(str,target,newchar,i=0){
    
//     if(i === str.length) return ""
    
//     if(i===target){
//        return newchar+replace(str,target,newchar,i+1)
//     }else{
//       return  str[i]+replace(str,target,newchar,i+1)
//     }
    
// }
// let str='abc'

// console.log(replace(str,2,'d'))
// Time Complexity = O(n)
// Space Complexity = O(n) (due to recursion stack)





function Sum(arr,n=0){
    
    if(n ===arr.length) return 0
    
    return arr[n]+Sum(arr,n+1)
}
let arr=[1,2,3,4,5]
console.log(Sum(arr))








// function prefixSum(arr){
//     let prefix=[]
    
//     prefix[0]=arr[0]
    
//     for(let i = 1; i < arr.length ;i++){
//         prefix[i] = prefix[i-1] + arr[i]
//     } 
    
//     return prefix
// }
// let arr=[1,2,3,4,5,6]
// console.log(prefixSum(arr))


// let arr= [1, [2, [3, 4], 5], 6]


// function flatend(arr){
//     let res=[];
    
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//            res.push(...flatend(arr[i]))
//         }else{
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(flatend(arr))


let arr = [3, 2, 3, 1, 8, 9, 0, 6, 0, 5, 0];

function movezeroend(arr,n=0,res=[]){
    if(n === arr.length) {
        
        while(res.length < arr.length){
                res.push(arr[n])
        }
        return res
    }
    if(arr[n] === 0){
        res.push(arr[n])
    }
    return movezeroend(arr,n+1,res)
}
console.log(movezeroend(arr))


function movezerofirst(arr,n=arr.length-1,res=[]){
    if(n < 0)return res
    
    if(arr[n]===0){
        res.unshift(0)
    }else{
        res.push(arr[n])
    }
    
    return movezerofirst(arr,n-1,res)
}
console.log(movezerofirst(arr))





function findPairsRecursive(arr, target, i = 0, j = 1, res = []) {
 
    if (i >= arr.length - 1) return res;

   
    if (j >= arr.length) {
        return findPairsRecursive(arr, target, i + 1,i+2,res);
    }

 
    if (arr[i] + arr[j] === target) {
        res.push([arr[i], arr[j]]);
    }


    return findPairsRecursive(arr, target, i, j + 1, res);
}

let arr = [2, 4, 3, 5, 7, 8, 9];
console.log(findPairsRecursive(arr, 10));



// function reverseWords(words, i = words.length - 1, res = []) {
//     if (i < 0) return res.join(" ");
//     res.push(words[i]);
//     return reverseWords(words, i - 1, res);
// }

// let str = "my name is lena";
// let words = str.split(" ");
// console.log(reverseWords(words));

