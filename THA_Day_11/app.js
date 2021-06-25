let no=1;
let score=0;
let quiz=[{
    Question:"Q1. Inside which HTML element do we put the JavaScript??",
    option1:"<script>",
    option2:"<js>",
    option3:"<javascript>",
    option4:"<link>"
},{
    Question:"Q2.How do you write \"Hello World\" in an alert box?",
    option1:'msg("Hello World")',
    option2:'alertBox("Hello World")',
    option3:'alert("Hello World")',
    option4:'msgBox("Hello World")'
},{
    Question:"Q3. How to write an IF statement in JavaScript?",
    option1:"if i==5 then",
    option2:"if i=5 then",
    option3:"if (i==5)",
    option4:"if i=5"
},{
    Question:"Q4. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    option1:"if (i<>5)",
    option2:"if (i!=5)",
    option3:"if i<>5",
    option4:"if i=!5 then"
},{
    Question:"Q5. How does a FOR loop start?",
    option1:"for i=1 to 5",
    option2:"for(i<=5;i++)",
    option3:"for(i=0;i<=5)",
    option4:"for(i=0;i<=5;i++)"
}];
        que.innerText=quiz[no-1].Question;
        option1.innerText=quiz[no-1].option1;
        option2.innerText=quiz[no-1].option2;
        option3.innerText=quiz[no-1].option3;
        option4.innerText=quiz[no-1].option4;
const obj={
    getAns1:"<script>",
    opNumber1:1,
    getAns2:'alert("Hello World")',
    opNumber2:3,
    getAns3:'if (i==5)',
    opNumber3:3,
    getAns4:'if (i!=5)',
    opNumber4:2,
    getAns5:'for(i=0;i<=5;i++)',
    opNumber5:4
}
let colorArr=[];
let isChoosen=false;

addEventListener('click',(e)=>{
    if (e.target.classList.contains('option')){
        if (e.target.innerText!==obj[`getAns${no}`]){
            colorArr.push(e.target);
            e.target.style.backgroundColor="rgb(228 69 0)"
            e.target.style.color="#ebffe0"
        }
        else{
            if(!isChoosen){score+=1}
        }
        colorArr.push(document.getElementById(`option`+obj[`opNumber${no}`]));
        colorArr[colorArr.length-1].style.backgroundColor="rgb(100 175 26)";
        colorArr[colorArr.length-1].style.color="#ebffe0";
        isChoosen=true
        if (no===5){
            setTimeout(()=>{
                alert(`YOUR SCORE : ${score}/5`)
                document.location=document.location.href
            },1000)
        }
    }
    if (e.target.classList.contains('btn') && isChoosen){
        que.innerText=quiz[no].Question;
        option1.innerText=quiz[no].option1;
        option2.innerText=quiz[no].option2;
        option3.innerText=quiz[no].option3;
        option4.innerText=quiz[no].option4;
        colorArr.forEach((e)=>{
            e.style.color="#396f06";
            e.style.backgroundColor="#f4f9f3";
        })
        no+=1;
        console.log(no)
        isChoosen=false;
        }
        if (no===5 && e.target.classList.contains('btn')){
            setTimeout(()=>{
                e.target.style.display="none"
            },500)
        }
})
