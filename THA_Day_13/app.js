function forFetch(){
fetch('https://api.github.com').then(data=>{
    // console.log(data);
    return data.json();
}).then((dataItem)=>{
    // console.log(dataItem.emojis_url)
    fetch(`${dataItem.emojis_url}`).then(data=>{
    console.log(data);
    return data.json();
}).then((dataItem)=>{
    // console.log(Object.values(dataItem));
    dataImg(Object.values(dataItem))})
})
}
function dataImg(imgs){
    let allimg='';
    imgs.slice(0,200).forEach((i,v) => {
        allimg+=`<img src=${imgs[v]}>`
    });
    showIcon.innerHTML=allimg;

}

showIcon.addEventListener("click",(e)=>{

if(e.target.tagName=="IMG"){

main.style.cssText=`background:url(${e.target.getAttribute('src')}) center center no-repeat;background-size:contain`

}
})

let check=true;
divAdd.addEventListener('click',()=>{
    	
    if(check){
        showIcon.style.bottom="60px";
        check=false
	forFetch();
    }
    else{
        showIcon.style.bottom="-290px";
        check=true;
    }
})
main.addEventListener("click",(e)=>{
    if(e.target.id==="main"&& !check){
        showIcon.style.bottom="-290px";
        check=true;
    }
})