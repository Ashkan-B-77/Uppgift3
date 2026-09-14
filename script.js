const h1Changer = document.querySelector("#h1Changer");
const dynamicH1 = document.querySelector("#dynamicH1");
h1Changer.addEventListener(
    "click",
    function(){ 
        dynamicH1.textContent = "Goodbye World"; //Jag antar att "textContent" funkar bättre än "innerHTML" i det här fallet?
    }
);