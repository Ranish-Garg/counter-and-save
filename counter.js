function increment()
{
    console.log("hello")
    count++;
    document.getElementById("countno").innerText=count
}
let count=0
function save()
{
    console.log(count)
    let text = document.getElementById("savedata").innerText
    document.getElementById("savedata").innerText=text+"_"+count
}