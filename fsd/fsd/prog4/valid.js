$().ready(function () {
    $("#signupForm").validate({
        // In 'rules' user have to specify all the constraints for respective fields
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2 // For length of username
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                // For checking both passwords are same or not
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        // In 'messages' user have to specify message as per rules
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            username: {
                required: "Please enter a username",
                minlength: "Your username must consist of at least 2 characters"
            },
            password: {
                required: "Please enter a password",
                minlength: "Your password must consist of at least 5 characters"
            },
            confirm_password: {
                required: "Please enter a password",
                minlength: "Your password must consist of at least 5 characters",
                equalTo: "Please enter the same password as above"
            },
            email: {
                required: "Please enter a valid email address"
            },
            agree: "Please accept our policy"
        }
    });
});
