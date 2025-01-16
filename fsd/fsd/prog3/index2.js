function calculate(length,width) {
    const area = length*width;
    const per = 2*(length+width);

    return{
        area:area,
        perimeter:per
    }
}




document.getElementById('calculateBtn').addEventListener('click',()=>{
    const len = parseFloat(document.getElementById("length").value)
    const wid = parseFloat(document.getElementById("width").value)

    if(len===NaN || wid===NaN || len<=0 || wid<=0){
        alert("enter a better number")
        return
    }

    const res = calculate(len,wid);

    document.getElementById("area").innerHTML = 'area' + res.area
    document.getElementById("perimeter").innerHTML = 'perimeter'+res.perimeter
})