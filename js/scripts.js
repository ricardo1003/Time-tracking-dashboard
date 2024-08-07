const timeSpanButtonElements = [...document.getElementsByClassName("timeSpanButton")]
const infoContainerElements = document.getElementsByClassName("infoBox")
const dailyHours = document.getElementsByClassName("currentDaily")
const weeklyHours = document.getElementsByClassName("currentWeekly")
const monthlyHours = document.getElementsByClassName("currentMonthly")

const hoverStateButtonElements = document.getElementsByClassName("clickState")

const lastdailyHours = document.getElementsByClassName("lastDaily")
const lastweeklyHours = document.getElementsByClassName("lastWeekly")
const lastmonthlyHours = document.getElementsByClassName("lastMonthly")

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    for(let i=0; i<dailyHours.length;i++){
        dailyHours[i].innerHTML = data[i].timeframes.daily.current
        lastdailyHours[i].innerHTML = data[i].timeframes.daily.previous

        weeklyHours[i].innerHTML = data[i].timeframes.weekly.current
        lastweeklyHours[i].innerHTML = data[i].timeframes.weekly.previous

        monthlyHours[i].innerHTML = data[i].timeframes.monthly.current
        lastmonthlyHours[i].innerHTML = data[i].timeframes.monthly.previous
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });


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
         let displayedDivs = new Array(i).fill(0)
         for(let i=0; i<infoContainerElements.length;i++){
            const selectedButton = [...infoContainerElements[i].getElementsByClassName("container")[0].getElementsByClassName("selectedPeriod")]
            displayedDivs[i] = selectedButton[clickedButton]
            selectedButton.forEach((button, index) =>{
                if(index != clickedButton){
                    button.classList.remove("displayed")
                }
            })
            selectedButton[clickedButton].classList.add("displayed")
        }
    })
}

for(let i=0; i<hoverStateButtonElements.length;i++){
    hoverStateButtonElements[i].addEventListener("mouseover",()=>{
        infoContainerElements[i].getElementsByClassName("container")[0].classList.add("hovered")
    })
    hoverStateButtonElements[i].addEventListener("mouseout",()=>{
        infoContainerElements[i].getElementsByClassName("container")[0].classList.remove("hovered")
    })

}