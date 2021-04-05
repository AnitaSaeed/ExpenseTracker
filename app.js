function myFunction(){
    console.log("naridi")
  
    var table=document.getElementById('table')
    var tr=document.createElement("tr")
    var name=document.createElement("td")
    var  Dat=document.createElement("td")
    var  amount=document.createElement("td")
    var del=document.createElement('button')
   
    del.innerHTML="X"
    del.className="del"
   
    name.innerText=document.getElementById('name').value
    Dat.innerText=document.getElementById('date').value
    amount.innerText=document.getElementById('amount').value
    
    tr.appendChild(name)
    tr.appendChild(Dat)
    tr.appendChild(amount)
    tr.appendChild(del)
    table.appendChild(tr)
    del.addEventListener("click",function(){
        tr.remove()
    })


}