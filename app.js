// getevent function//
function getEvent(id){
 return document.getElementById(id);
}

// getValue function //
function getInputValue(id){
    return parseFloat(document.getElementById(id).value)
}
// getInnerText function //
function getInnerText(id){
return document.getElementById(id);
}

//--------------------------------------------------//
// page click event//
let blogbtn=document.getElementById("blogBtn");
blogbtn.addEventListener("click",function(){
    window.location.href="./page.html"
})

//donation submit first-part button click event here//

let submit_btn=getEvent("donate-submit1");
submit_btn.addEventListener("click",function(){
// value added function//
// balance minimise //
// console.log(currentBalance)

if(getInputValue("inputValue")<0 || getInputValue("inputValue")===NaN){
    document.getElementById("alert-message").classList.remove("hidden")
}
else{
    let donationAmount = getInputValue("inputValue");
    let addAmount=parseFloat(getEvent("card-amount").innerText)
    let total=addAmount+donationAmount;
    getEvent("card-amount").innerText=total;
    let my_balance=parseFloat(getEvent("myBalance").innerText);
    let currentBalance=my_balance-donationAmount;
    getEvent("myBalance").innerText=currentBalance;
    
    my_modal_1.showModal();  
    console.log(getInputValue("inputValue"))
    getEvent("alert-message").classList.add("hidden")
   
    
 
    let headingTag1=document.getElementById("headingTag1").innerText;
    let history_box=document.createElement("div");
    history_box.className="bg-white p-3 my-3 rounded-lg border-2 w-[90%] mx-auto";
    history_box.innerHTML=`
    <div>$${donationAmount} ${headingTag1}</div>
    <div>${new Date()} </div>
    `
    let history_list=document.getElementById("history-list");
    history_list.insertBefore(history_box,history_list.firstChild);

    
}
})

//--------------------------------------------------//

//donation submit second-part button click event here//

let submit_btn2=getEvent("donate-submit2");
submit_btn2.addEventListener("click",function(){
    if(getInputValue("inputValue2")<0 ||getInputValue("inputValue2")===NaN){
        document.getElementById("alert-message2").classList.remove("hidden")
    }
// value added function//
else{
let donationAmount=getInputValue("inputValue2");
let addAmount=parseFloat(getEvent("card-amount2").innerText)
let total=addAmount+donationAmount;
getEvent("card-amount2").innerText=total;
// balance minimise //
let my_balance=parseFloat(getEvent("myBalance").innerText);
let currentBalance=my_balance-donationAmount;
getEvent("myBalance").innerText=currentBalance;

my_modal_1.showModal(); 
getEvent("alert-message2").classList.add("hidden")

let headingTag2=document.getElementById("headingTag2").innerText;
let history_box=document.createElement("div");
history_box.className="bg-white p-3 my-3 rounded-lg border-2 w-[90%] mx-auto";
history_box.innerHTML=`
<div>$${donationAmount} ${headingTag2}</div>
<div>${new Date()} </div>
`
let history_list=document.getElementById("history-list");
history_list.insertBefore(history_box,history_list.firstChild);
}

})

//--------------------------------------------------//

//donation submit third-part button click event here//

let submit_btn3=getEvent("donate-submit3");
submit_btn3.addEventListener("click",function(){
    if(getInputValue("inputValue3")<0 || getInputValue("inputValue3")===NaN){
        document.getElementById("alert-message3").classList.remove("hidden")
    }
// value added function//
else{
let donationAmount=getInputValue("inputValue3");
let addAmount=parseFloat(getEvent("card-amount3").innerText)
let total=addAmount+donationAmount;
getEvent("card-amount3").innerText=total;

// balance minimise //
let my_balance=parseFloat(getEvent("myBalance").innerText);
let currentBalance=my_balance-donationAmount;
getEvent("myBalance").innerText=currentBalance;

my_modal_1.showModal(); 
getEvent("alert-message3").classList.add("hidden")

let headingTag3=document.getElementById("headingTag3").innerText;
let history_box=document.createElement("div");
history_box.className="bg-white p-3 my-3 rounded-lg border-2 w-[90%] mx-auto";
history_box.innerHTML=`
<div>$${donationAmount} ${headingTag3}</div>
<div>${new Date()} </div>
`
let history_list=document.getElementById("history-list");
history_list.insertBefore(history_box,history_list.firstChild);
}
})

//--------------------------------------------------//
 
//banner-section  donation and history button color changing part here //
let banner_donate_btn=getEvent("donation-btn");
let bannet_history_btn=getEvent("history-btn");

bannet_history_btn.addEventListener("click",function(){
    bannet_history_btn.classList.add("btn_color");
    banner_donate_btn.classList.remove("btn_color");
    getEvent("card-perent-section").classList.add("hidden");
    getEvent("history-section").classList.remove("hidden");
 
   
})

banner_donate_btn.addEventListener("click",function(){
    banner_donate_btn.classList.add("btn_color");
    bannet_history_btn.classList.remove("btn_color");
    getEvent("card-perent-section").classList.remove("hidden");
    getEvent("history-section").classList.add("hidden");
})
//--------------------------------------------------//