var allProducts = document.querySelectorAll (".list li")

  var content = document.querySelector("#content")

  var btn = document.querySelector("#addToCart")

  var pritem  = document.querySelector("#items-price")

  var totalPrice = 0;

  allProducts.forEach(function (item){
      item.onclick = function (){

        totalPrice +=  parseInt (item.getAttribute ("price"))
        content.innerHTML += item.textContent  + "  " ;

        if (content.innerHTML != "" ) {
            btn.style.display = "block"
        }
      }
  })
  btn.onclick = function (){
    console.log(totalPrice)
    if (totalPrice>=100000){
        pritem .innerHTML = "totalPrice =" + totalPrice +"  L.E" +">this items is expensive"
        pritem .style.display = "block"
        pritem .style.background = "red";
        pritem .style.width = "400px ";
        pritem .style.height = "400px";
        pritem .style.lineHeight = "400px"
        pritem .style.borderRadius  = "50%";
    }else{
        pritem .innerHTML ="totalPrice = " + totalPrice +"  L.E" +">this items is cheap"
        pritem .style.display = "block"
        pritem .style.background = "green";
        pritem .style.width = "400px ";
        pritem .style.height = "200px";
        pritem .style.lineHeight = "200px" ;
        pritem .style.borderRadius  = "20px";
    }
  }
