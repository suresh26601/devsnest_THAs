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
forFetch();
let check=true;
divAdd.addEventListener('click',()=>{
    if(check){
        showIcon.style.display="grid";
        check=false
    }
    else{
        showIcon.style.display="none";
        check=true;
    }
})