/ *************TASK-1********
var student = { name : "David Rayy", sclass : "VI", rollno : 12 ,contect_no:994033};
for(ind in student){
  console.log(ind);
}


// ******TASK-2**************
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
delete student.rollno;
console.log(student);


// ***********TASK 3**********
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.keys(student).length)


// ************TASK 4************
const readingStatus=(arr)=>{
  arr.forEach((e)=>{
    console.log("Author        -->",e.author)
    console.log("Title         -->",e.title)
    console.log("readingStatus -->",e.readingStatus)
  })
}
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
readingStatus(library)

// ************TASK 5************
const volCylender=(h,r)=>{
  let vol=Math.PI*h*r*2
  return vol
}
let h=Number(prompt("height:?"));
let r=Number(prompt("redius:?"));
console.log(volCylender(h,r).toFixed(4))


// ************TASK 6************
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
 
 library.sort((a,b)=>a.libraryID.localeCompare(b.libraryID))
//library.sort((a,b)=>b.libraryID-a.libraryID
)
console.log(library);
