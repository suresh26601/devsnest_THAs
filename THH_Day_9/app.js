let p=0;
main.addEventListener('click',(e)=>{
    if (e.target.classList.contains("secbrown")){
        e.target.classList.remove('secbrown')
        p=p-1;
    }
    else if (e.target.classList.contains("secred")){
        e.target.classList.add('secbrown')
        p=p+1;
    }
    show1.innerHTML=p;
})