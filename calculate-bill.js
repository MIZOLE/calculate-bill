const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElem = document.querySelector(".billTotal");
const billStringElement = document.querySelector(".billString");


calculateBtn.addEventListener("click", function() {
  
  var billTotal = 0;

 //getting the value from the input element 
     var billString = billStringElement.value;
  
      var billItems = billString.split(",");

      for (var i = 0; i<billItems.length;i++){
      var billItem = billItems[i].trim();
      if (billItem === "call") {
      billTotal += 2.75;
      }
      else if (billItem === "sms"){
        billTotal += 0.75;
  }
}
  
 if (billTotal >= 30){
        // adding the danger class will make the text red 
         billTotalElem.classList.add("danger");
         billTotalElem.classList.remove("warning")
    }
    else if (billTotal >= 20  && billTotal <= 30 ){
         billTotalElem.classList.remove("danger")
         billTotalElem.classList.add("warning");
    }
  else {
     billTotalElem.classList.remove("warning")
  }
//appending the result to html in place of returning the result
billTotalElem.innerHTML = billTotal.toFixed(2);
});

calculateBtn.addEventListener("click", clat)
