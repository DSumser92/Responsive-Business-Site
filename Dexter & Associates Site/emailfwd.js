var email = "youremail@example.com"; // replace with actual email address
var input = document.getElementById("input").value; // get input from a form field with id "input"

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://yourserver.com/forward-email", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ email: email, input: input }));



// This code uses the XMLHttpRequest object to send a POST request to a server-side script (at the URL "https://yourserver.com/forward-email") that will handle forwarding the input and email information to the desired email address. The input is sent as a JSON object with two properties: "email" and "input". You should replace "youremail@example.com" with the actual email address you want to forward the information to, and also you should replace "https://yourserver.com/forward-email" with the url of your server side script which will handle the forwarding process.
//This code will work on a website or web application, and it requires a server-side script to handle the email forwarding process.
//Need to make sure to validate user input and handle any security concerns.

















//const form = document.getElementById("myForm");
//form.addEventListener("submit", event => {
  //  event.preventDefault(); // prevent form from submitting

    //const name = form.elements.name.value;
    //const phone = form.elements.phone.value;
    //const email = form.elements.email.value;
    //const recipient = "example@email.com"; // replace with actual email address

    //const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`;
    //const mailtoLink = `mailto:${recipient}?subject=Contact%20Form&body=${encodeURIComponent(body)}`;

    //window.location.href = mailtoLink;
//});

//Please note that this example uses the mailto protocol which will open the user's default mail client. If you want to send email using a back-end service, you will need to use a library like nodemailer or mailgun-js and make a post request to a server endpoint.

//this is just an example, this won't work on a browser as it blocks the window.location.href to avoid phishing.