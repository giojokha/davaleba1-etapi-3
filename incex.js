let checkemail=document.getElementById("checkemail")
let form=document.getElementById("form")
let emailinput=document.getElementById("emailinput")
form.addEventListener("submit",function(event){
    event.preventDefault()
    if (!emailinput.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)){
        checkemail.style.display="flex"

    }  if (emailinput.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)){
        checkemail.style.display="none"
    }
})
