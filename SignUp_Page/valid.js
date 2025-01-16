$().ready(function(){
    $("#signupform").validate({

        rules:{
            firstname:"required",
            lastname:"required",
            username:{
                required: true,
                minlength:2
            },

            password:{
                required: true,
                minlength: 8
            },

            confirm_password:{
                required: true,
                minlength:8,
                equalTo: "#password"
            },

            email:{
                required: true,
                email: true
            },
            
            agree:"required"
        },

        messages: {
            firstname: "Please enter your firstname",
            lastname:"Please enter your lastname",
            username:{
                required:"Please enter a username",
                minlength:"Your username must consist of atleast 3 characters"
            },

            password:{
                required:"Please enter a password",
                minlength: "Your password must consist of atleast 8 characters"
            },

            confirm_password:{
                required: "Please re-enter the password",
                minlength: "Your password must consist of atleast 8 characters",
                equalTo:"Please enter the same password as above"
            },

            agree: "Please read and agree to the Terms and Conditions."
        }
    });
});