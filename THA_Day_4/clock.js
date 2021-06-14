setInterval(fun,1000);
function fun(){
    // let date =new Date();
    // // let sec=
    // article1.style.transform="rotate(6*date.getSeconds()deg)";
    // // article2.style.transform="rotate(deg)";
    // // article3.style.transform="rotate(deg)";
    let date =new Date();
    // *******for second****
    let sec=date.getSeconds()*6
    article1.style.transform=`rotate(${sec-90}deg)`;
    // ********for minute******
    let minute =date.getMinutes()*6 + 6/(5*360);
    article2.style.transform=`rotate(${minute-90}deg)`;
    // ********for hours******
    let hour =(date.getHours()%12)*30 + 30/360;
    article3.style.transform=`rotate(${hour-90}deg)`;
}