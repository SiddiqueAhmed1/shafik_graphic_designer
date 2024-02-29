

function sendEmail  () {
    Email.send({
        Host : 'smtp.elasticemail.com',
        Username : 'siddiqueahmed2721@gmail.com',
        Password : 'CA98E0D391BFCD4B0EF9C71BA08E0336460C',
        To : 'developersiddique123@gmail.com',
        From : "siddiqueahmed2721@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    )
}