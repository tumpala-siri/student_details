let student;
student=[
    {name:"siri",age:18},
    {name:"airi",age:10},
    {name:"biri",age:19},
    {name:"ciri",age:28},

]
let ul=document.getElementById("sdetails")
function clear(){
    ul.innerHTML=""
}

function stu(i){
    let li=document.createElement('li')
    li.textContent=`${i["name"]}        ${i["age"]}`
    ul.appendChild(li)
}
function display(){
    let li=document.createElement('li')
    li.textContent='Name        Age'
    ul.appendChild(li)
    for (let i of student){
        stu(i)
    }
}
//show details
document.getElementById("details").onclick=function(){
    clear()
    display()

    
}
//sort by name
document.getElementById("byname").onclick=function(){
    clear()
    student.sort((a,b) => a.name.localeCompare(b.name))
    display()

}
//show sort by age details
document.getElementById("byage").onclick=function(){
    student.sort((a,b) => a.age-b.age)
    clear()
    display()
}
