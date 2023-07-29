let id = document.querySelector('span')
let text = document.querySelector('p')
let btn = document.querySelector('button')
let dataId
function fetchData(method, url, slugId) {
   let res = new XMLHttpRequest()
   res.open(method, url + slugId)
   res.send()
   res.addEventListener('load', ()=>{
      if(res.status === 200){
         dataId = JSON.parse(res.response).slip
         id.innerText = dataId.id
         text.innerText = dataId.advice
      }
   })
}
btn.addEventListener('click', ()=>{
   fetchData('GET', 'https://api.adviceslip.com/advice/', Math.random() * 223)
})
