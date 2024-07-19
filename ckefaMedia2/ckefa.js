function emailSend() {

    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone").value;
    var service = document.getElementById("service").value;
    var eventDate = document.getElementById("event-date").value;
    var eventTime = document.getElementById("event-time").value;
    var location = document.getElementById("location").value;
    var teamName = document.getElementById("team-name").value;
    var eventDesc = document.getElementById("event-description").value;
    var special = document.getElementById("special-requests").value;

    var messageBody = 'Name: ' + fullName +
    '<br/> email: ' + email +
    '<br/> Phone: ' + phoneNumber +
    '<br/> Service: ' + service +
    '<br/> Event Date: ' + eventDate +
    '<br/> Event Time: ' + eventTime +
    '<br/> Location: ' + location +
    '<br/> Team Name: ' + teamName +
    '<br/> Event Description: ' + eventDesc +
    '<br/> Special Requests: ' + special;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sakanb@yahoo.com",
        Password : "ADD6C7A568415A9727525D65126C899FE56B",
        To : 'carlossik@gmail.com',
        From : "sakanb@yahoo.com",
        Subject : "Test subject",
        Body : messageBody,
    }).then(
      message => alert(message)
    );
}