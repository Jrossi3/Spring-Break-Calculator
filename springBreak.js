var hotelCost = 0;
var drinkCost = 0;
var flightCost = 0;
var carryOnCost = 0;
var totalPrice = 0;
var numberOfNights;

const checkpoint = 300;
const checkpoint1 = 400;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".front").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint1) {
      opacity = 1 - currentScroll / checkpoint1;
    } else {
      opacity = 0;
    }
    document.querySelector(".front1").style.opacity = opacity;
  });

$(window).on('load', function() {

    $('button').click(function() {
  
      if ($(this).index() == 0) $('.content').toggleClass('fadefirst');
      else $('.content').toggleClass('fadesecond');
    });
  });

function hotelCalculator() {
    numberOfNights = prompt("How many nights are you staying? Enter just an integer, i.e '3' would be 3 nights");
    var costPerNight = prompt("How much will each night cost? Put just a number in, no $.");
    hotelCost = numberOfNights * costPerNight;
    if (hotelCost > 0) {
        drinkCalculator();
    }
}

function drinkCalculator() {
    var numberOfDrinks = prompt("How many drinks does it take you to get drunk? Enter just an integer, i.e '3' would be 3 drinks");
    drinkCost = numberOfDrinks * 8 * (numberOfNights - 1);
    if (drinkCost > 0) {
        flightCalculator();
    }
}

function flightCalculatorHelperOneWay() {
    var oneWay = prompt("What is the cost of your first oneWay ticket? Put just a number in, no $.");
    var otherWay = prompt("What is the cost of your second oneWay ticket? Put just a number in, no $.");
    if (oneWay != null && otherWay != null){    
        if (oneWay > 0 && otherWay > 0) {
            flightCost = oneWay + otherWay;
        }
        else {
            alert("Try again");
            flightCalculatorHelperOneWay();
        }
    }
}

function flightCalculatorHelperRound(){
    flightCost = prompt("What is the cost of your round trip ticket? Put just a number in, no $.");
    if (flightCost != null){    
        if (flightCost > 0) {
            flightCost = flightCost * 1;
            carryOnCalculator();
        }
        else {
            alert("Try again");
            flightCalculatorHelperRound();
        }
    }
}

function flightCalculator() {
    var flight = prompt("Is your flight round trip or 2 one way trips? Respond with 'round trip' or 'one way'");
    if (flight == "one way") {
        flightCalculatorHelperOneWay();
        carryOnCalculator();
    }
    else if (flight == "round trip") {
        flightCalculatorHelperRound();
    }
    // else {
    //     alert("Try again");
    //     flightCalculator();
    // }
    
}

function carryOnCalculator() {
    var numberOfCarryOn = prompt("How many carry-ons are you bringing that cost you extra money? Put just a number in, no $.");
    var carryOnPrice = prompt("How much is each carry-on? Put 0 if you answered 0 previously");
    carryOnCost = numberOfCarryOn * carryOnPrice; 
    totalPrice = carryOnCost + flightCost + hotelCost + drinkCost + 80 * 5;
    console.log(carryOnCost, flightCost, hotelCost, drinkCost, totalPrice);
    alert("Your total cost including food for the trip is $" + totalPrice + "!");
}