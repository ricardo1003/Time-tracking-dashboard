const timeSpanButtonElements = [...document.getElementsByClassName("timeSpanButton")]
const infoContainerElements = document.getElementsByClassName("infoBox")
const dailyHours = document.getElementsByClassName("Daily")
const weeklyHours = document.getElementsByClassName("Weekly")
const monthlyHours = document.getElementsByClassName("Monthly")


let clickedButton = 1
for(let i=0; i<timeSpanButtonElements.length;i++){
    timeSpanButtonElements[i].addEventListener("click",()=>{
        for(let i=0; i<timeSpanButtonElements.length;i++){
            if(timeSpanButtonElements[i].classList.contains("focused")){
                timeSpanButtonElements[i].classList.remove("focused")
            }
         }
         timeSpanButtonElements[i].classList.add("focused")
         clickedButton = i

    })
}