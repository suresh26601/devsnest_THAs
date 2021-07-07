window.onload=()=>{
    let btn=document.getElementById('section2');
    btn.addEventListener('click',function fun(e){
        let A=parseInt(document.getElementById('forA').value);
        let B=parseInt(document.getElementById('forB').value);
        let p=e.target.id;
        console.log(p);
        if (p==="btn1"){
            document.getElementById('section3').innerText=`A+B:${A+B}`;
        }
        else if(p==="btn2"){
            document.getElementById('section3').innerText=`A-B:${A-B}`;
        }
        else if(p==="btn3"){
            document.getElementById('section3').innerText=`A*B:${A*B}`;
        }
        else if(p==="btn4"){
            document.getElementById('section3').innerText=`A/B:${(A/B).toFixed(3)}`;
        }
        else{
            document.getElementById('section3').innerText="";
        }
        document.getElementById('forA').value="";
        document.getElementById('forB').value="";
    })
}