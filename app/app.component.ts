import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-pricing';

   

  colorChange(buttonType: String): void{
    console.log("colorChange Event: Type of plan highlighted: " + buttonType)

    const paidButton = document.getElementById("paid");
    const freeButton = document.getElementById("free");
    const donationButton = document.getElementById("donation");
    const ticketPriceInput = document.getElementById("ticketPrice");

    let paidStatus = false;
    let freeStatus = false;
    let donationStatus = false;
    
    switch (buttonType){
      case 'paid':
        paidStatus = true;
        freeStatus = false;
        donationStatus = false;
        break;
      case 'free':
        paidStatus = false;
        freeStatus = true;
        donationStatus = false;
        break;
      case 'donation':
        paidStatus = false;
        freeStatus = false;
        donationStatus = true;
        break;
    }



    if (paidStatus){
      paidButton!.style.backgroundColor ="#D9F6FF";
      paidButton!.style.color = "#009CD6";
      paidButton!.style.borderColor = "#009AEB";
      paidButton!.style.boxShadow= "0px 0px 10px #007FFF5C";
      ticketPriceInput!.setAttribute("placeholder","$5.00" );
    }
    else{
      paidButton!.style.backgroundColor ="#FFFFFF";
      paidButton!.style.color = "#222222";
      paidButton!.style.borderColor = "#CBCBCB";
      paidButton!.style.boxShadow = "";
    }


    if (freeStatus){
      freeButton!.style.backgroundColor ="#D9F6FF";
      freeButton!.style.color = "#009CD6";
      freeButton!.style.borderColor = "#009AEB";
      freeButton!.style.boxShadow = "0px 0px 10px #007FFF5C";
      ticketPriceInput!.setAttribute("placeholder","Free" );
    }
    else{
      freeButton!.style.backgroundColor ="#FFFFFF";
      freeButton!.style.color = "#222222";
      freeButton!.style.borderColor = "#CBCBCB";
      freeButton!.style.boxShadow = "";
    }

    if (donationStatus){
      donationButton!.style.backgroundColor ="#D9F6FF";
      donationButton!.style.color = "#009CD6";
      donationButton!.style.borderColor = "#009AEB";
      donationButton!.style.boxShadow = "0px 0px 10px #007FFF5C";
      ticketPriceInput!.setAttribute("placeholder","Donation" );
    }
    else{
      donationButton!.style.backgroundColor ="#FFFFFF";
      donationButton!.style.color = "#222222";
      donationButton!.style.borderColor = "#CBCBCB";
      donationButton!.style.boxShadow = "";
    }
  }
 /*
  timeDropDown(){
    let x, i, j, l, ll, selElmnt, a, b, c;

    x = document.getElementsByClassName("custom-select");
    l = x.length;

    for (i = 0; i<1; i++){
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;

      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
      x[i].appendChild(a);

      b = document.createElement("DIV")
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++){
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML
        c.addEventListener("click", function(e) {
          let y, i, k, s, h, s1, y1;
          s = this.parentNode?.paren

        } )
      }
    }
  }
*/

  
}
