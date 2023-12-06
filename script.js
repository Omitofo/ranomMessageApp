// Define an object to organize the message parts
const messageParts = {
    firstPart: ["You are destined to", "Embrace the opportunity to", "Find joy and"],
    secondPart: ["do great things", "explore new possibilities", "discover hidden talents"],
    thirdPart: ["today", "in the coming weeks", "on your journey"],
  };
  
  // Function to generate a random message
  function generateMessage() {
    // Function to generate a random index for an array
    const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
  
    // Generate a random message
    const message =
      messageParts.firstPart[getRandomIndex(messageParts.firstPart)] +
      " " +
      messageParts.secondPart[getRandomIndex(messageParts.secondPart)] +
      " " +
      messageParts.thirdPart[getRandomIndex(messageParts.thirdPart)];
  
    return message;
  }
  
  // Display the generated message
  console.log(generateMessage());