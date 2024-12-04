
let count=0
function increment()
{
    console.log("hello")
    count++;
    document.getElementById("countno").innerText=count
}

function save()
{
    let saveEl=document.getElementById("savedata")
    console.log(count)
    saveEl.innerText += count+"-"
    count = 0
    document.getElementById("countno").innerText = 0

}  