let saveBtn = document.getElementById('input-btn')
let myLeads = [];  
let inputEl = document.getElementById('input-el');
let ulEl = document.getElementById('ul-el')
const li =document.createElement('li')
const delBtn = document.getElementById("del-btn")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("url"))
let tabBtn = document.getElementById('save-btn')

    if(leadsFromLocalStorage){
        myLeads = leadsFromLocalStorage
        render(myLeads)
    }
const tabs = [
    {
        url:"https://www.linkedin.com/in/per-harald-borgen/"
    }
]

tabBtn.addEventListener('click',function(){
   chrome.tabs.query({active :true, currentWindow :true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
   })
    
})


function render(leads){
        let listItems = ""
        for(i=0;i<leads.length;i++){
        listItems += `<li><a href=${leads[i]} target='_blank'> ${leads[i]} </a></li>`
            }
        ulEl.innerHTML = listItems
    }

saveBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("url",JSON.stringify(myLeads))
    render(myLeads) 
})

delBtn.addEventListener("dblclick",function(){
    myLeads = [] 
    localStorage.clear()
    render(myLeads)
}) 
