// TASK 1

const myHouse = {
    numberStories: 2,
    hasParking: false,
    numberBedrooms: 2,
    hasGarden: true,
    energyEfficientRating: "D",
  };

  const myCar = {
    color: "red",
    numberWheels: 4,
    hasPowerSteering: true,
    numberSeats: 2,
    milesPerGallon: 20,
  };

  const myFavouriteFilm = {
    title: "The Dark Knight",
    year: 2008,
    leadActor: "Christian Bale",
  };

// TASK 2

let person = {
    name: "Ben",
    likesChocolate: true,
  };

  console.log(person.likesChocolate);

  if (person.likesChocolate == true) {
    console.log("Ben loves chocolate");
  } else {
    console.log("Ben hates chocolate");
  }

// TASK 3

let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases["smallTalk"]);
console.log(bensPhrases["desiredPleasantry"]);

// TASK 4

let me = {
    firstName: "Giuseppe",
    lastName: "Landolfi",
    isBootcamper: false,
  };

me.isBootcamper = true;

// TASK 5

let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

let msg = communication.payload.message.text;

if (communication.payload.message.priority == "URGENT") {
    console.log(msg);
  } else {
    undefined;
  }