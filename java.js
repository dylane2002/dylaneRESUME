


/*let number = 5;


alert("hello word");
document.writeln("helo"+number);
*/

const formInfo = document.getElementById("formInfo");
let hasJob = false;
if (hasJob) {
    // have a job
    showMessage("Thanks for visiting. I'm currently employed ");
}
else {
    // need a job
    showMessage("please look around, I'm currently looking for a position");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is the weekend, please be patient with my returning your email.")

}

function showMessage(message) {

    formInfo.innerHTML = "<p>" + message + "<p>";

}
function clearMessage() {
    formInfo.innerHTML = "";

}

const ContactFORM = document.getElementById("ContactFORM");

ContactFORM.addEventListener("submit", function (event) {
    event.preventDefault();
    const contact = new Contact(ContactFORM);
    contact.send();

});

/*function sendMessage(){
   showMessage("please wait,sending your email");
}*/

const experiences = document.getElementsByClassName("experience");

for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color: #999999";
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    });
}





