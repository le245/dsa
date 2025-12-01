// let str = "aabbccdee"
// let freq={}

// for(let ch of str){
//     freq[ch]=(freq[ch]||0)+1
// }
// console.log(freq)

// let res=null

// for(let ch of str){
//     if(freq[ch] === 1){
//         res=ch
//         break
//     }
// }
// console.log(res)


// let str="lisen"
// let str2="silent"

// function angram(str,str2){
//     return str.split('').sort().join('') === str2.split('').sort().join('')
// }
// console.log(angram(str,str2))



// let str="lisen"
// let str2="silent"

// function angram(str,str2){
//     return str.split('').sort().join('') === str2.split('').sort().join('')
// }
// console.log(angram(str,str2))



// function fib(n){
//     let a=0, b=1;

//     let res=[]

//     for(let i=0;i<n;i++){
//         res.push(a)

//         let temp=a+b
//         a=b
//         b=temp

       
//     }
//      return res
// }

// let rows = matrix.length;
// let cols = matrix[0].length;
// let transpose = [];

// for (let i = 0; i < cols; i++) {
//   transpose[i] = [];
//   for (let j = 0; j < rows; j++) {
//     transpose[i][j] = matrix[j][i];
//   }
// }

// console.log("Transpose:", transpose);


// example of memmory leak

// let data = [];

// function addData() {
//   for (let i = 0; i < 10000; i++) {
//     data.push({ index: i });
//   }
//   console.log("Added data, total length:", data.length);
// }

// setInterval(addData, 1000);


 let str="my name is lena"

let str2=str.split(' ')
let rev=[]
for(i=str2.length-1;i>=0;i--){
    rev.push(str2[i])
}

for(let i=0;i<rev.length;i++){
    if(i % 2 !==0){
        let word=''
        for(let j=rev[i].length-1;j>=0;j--){
          word+=rev[i][j]
        }
        
         rev[i]=word
    }
   
}

 console.log(rev.join(' '))


 
// function rotatearr(arr,k){
//     k=k % arr.length

//     let rotated =arr.slice(k).concat(arr.slice(0,k))
//     return rotated

// }
// let arr=[1,2,3,4,5]
// console.log(rotatearr(arr,2))




let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];    

function merged(arr1,arr2){
    let i=0;
    let j=0
    let merge=[]
    
    while(i < arr1.length && j< arr2.length){
        if(arr1[i] < arr2[j]){
            merge.push(arr1[i])
            i++
        }else{
            merge.push(arr2[j])
            j++
        }
    }
    
    while(i<arr1.length){
        merge.push(arr1[i])
        i++
    }
    
    while(j<arr2.length){
        merge.push(arr2[j])
        j++
    }
    return merge
}
console.log(merged(arr1,arr2))



let str="javascript"


function words(str){
    
    
let s=str.split(' ')
let res=[]

for(let i=0;i<s.length;i++){
    let word=s[i]
    if(word.length === 1){
        res.push(word)
    }
    


    let first = word[0]
    let last= word[word.length-1]
    let middle=word.slice(1,word.length-1)
    let swaaped=last+middle+first
    
    res.push(swaaped)
    
}

return res.join(' ')
}

console.log(words(str))


// let arr = [1, 2, 4, 5, 6]

// function findMissing(arr){
//     let n = arr.length + 1
//     let total = (n * (n + 1)) / 2
//     let sum = 0

//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }

//     console.log("Missing Number =", total - sum)
// }

// findMissing(arr)


let flight= [10, 20, 30, 40, 50]
let target= 25


function binearySearch(flight,target){
    
    let start=0
    let end=flight.length-1
    let res=-1
    
    while(start <= end){
        let mid=Math.floor((start+end)/2)
        
        if(flight[mid] === target){
            
            return flight[mid]
           
        }else if (flight[mid] > target){
            res=flight[mid]
            end=mid-1
        }else{
            start=mid+1
        }
    }
    return res !==-1? res:"no flight avalable"
}
console.log(binearySearch(flight,target))

// const fileSystem = {
//   name: "root",
//   type: "folder",
//   children: [
//     { name: "file1.txt", type: "file" },
//     { 
//       name: "src", 
//       type: "folder", 
//       children: [
//         { name: "index.js", type: "file" },
//         { name: "app.js", type: "file" },
//         {
//           name: "components",
//           type: "folder",
//           children: [
//             { name: "Navbar.js", type: "file" },
//             { name: "Footer.js", type: "file" }
//           ]
//         }
//       ]
//     },
//     { name: "readme.md", type: "file" }
//   ]
// };


// function filesof(folders){
    
//     let files=[]
//     for(let item of folders.children){
//         if(item.type === 'file'){
//             files.push(item.name)
//         }else if(item.type === "folder"){
//             files.push(...filesof(item))
//         }
//     }
//     return files
// }
// console.log(filesof(fileSystem))


let str = "hello world";

function reverse(str){
    let s=str.split("")
    let vowels="aeiouAEIOU"
    let start=0
    let end=s.length-1
    
    while(start < end){
        
        while(start < end && !vowels.includes(s[start])){
            start++
        }
        
        while(start < end && !vowels.includes(s[end])){
            end--
        }
        
        [s[start] ,s[end]]=[s[end],s[start]]
        
        start++
        end--
    }
    
    return s.join("")
}
console.log(reverse(str))



