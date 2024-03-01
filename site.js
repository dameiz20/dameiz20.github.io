function displayMessage()
{
    // given code
    const hours = new Date().getHours(); // get the current hour

    const isMorning = hours >= 4 && hours < 12; // is it morning?
    const isAfternoon = hours >= 12 && hours < 17; // is it afternoon?
    const isEvening = hours >= 17 || hours < 4; // is it evening?

    // Get the element where you want to display the message
    const messageDiv = document.getElementById('Welcome');

    // Display message based on the time of day
    if (isMorning) {
        messageDiv.innerText = "Good morning! Have a great day!";
    } else if (isAfternoon) {
        messageDiv.innerText = "Good afternoon! Hope you're having a good day!";
    } else if (isEvening) {
        messageDiv.innerText = "Good evening! Remember to take a moment to appreciate the little things that make life beautiful!";
    } else {
        messageDiv.innerText = "Hello! Welcome to our website!";
    }
} 

function secretMessage(message) {
    localStorage.setItem("It's a secret to everybody.", message);
    //write message to console
    console.log(message);
  }
  
   // create what the message will be
  const secret = "I hope I did this assignment the right way ¯\_(ツ)_/¯";

  // Call the function
  secretMessage(secret);