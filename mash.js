
// function randomNum(num){
//     return(Math.floor(Math.random()* num));
    
// }



function getHome(homePicked){
    // Gives user random home
    const home = ["Mansion", "Apartment", "Shack", "House", "Swamp", homePicked];
    
    const randomNum = Math.random() * home.length;
    const roundedNum = Math.floor(randomNum);
    randomHome = home[roundedNum];
    

    return randomHome;

}
// function getHome(homePicked){
//     return homePicked;

// }

// console.log(getHome());
// console.log(getChildrenCount("6"));
// console.log(getCar("Race Car"));



function getChildrenCount(Amount){
    desiredPick = .5;
    childrenRandom = Math.random();
    
    
    if (desiredPick >= childrenRandom){
        childrenAmount = Amount;
    }
    else if (desiredPick < childrenRandom){
        const randomNum = Math.random() * 100;
        roundedNum = Math.floor(randomNum);
        childrenAmount = roundedNum;
    }
    return childrenAmount;

}

function getCar (carPicked){
    const vehicle = ["Lambo", "Convertible", "Box with wheels", "BMW", "Smartcar", carPicked];
    const randomNum = Math.random() * vehicle.length;
    const roundedNum = Math.floor(randomNum);
    const randomVehicle = vehicle[roundedNum];

    return randomVehicle;
}
function mash(homePicked){

        if (!homePicked) {
            return "Put the home you want"
            
        }
        else {return ("You will live in a " + getHome(homePicked) + ", have " + getChildrenCount("6") + " kids, and you'll drive a " + getCar("Race car"));

    }

}
function getSpouse(){

}
function getSalary(){

}
function liveUntil(){

}
function Career(){
    
}
console.log(mash(process.argv[2]));