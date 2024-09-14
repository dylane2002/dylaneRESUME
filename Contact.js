class Contact {

    constructor (form) {
        this.fullName = form.elements["fullName"].value;
        this.email = form.elements["email"].value;
        this.subject = form.elements["subject"].value;
        this.body = form.elements["msg"].value;

    }

    fullName = "";
    email = "";
    subject = "";
    body = "";

    send() {
        console.info(this.formatMessage());
        showMessage("we are not sending email yet .... for feature version 2.");
    }

    formatMessage() {
        return `to: ${this.fullName}
            email : ${this.email}
            subject : ${this.subject}
            body : ${this.body}`;

    }
};