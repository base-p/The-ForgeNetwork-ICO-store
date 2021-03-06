$(document).ready(function(){
    $( "form" ).each( function() {
    $( this ).validate( {
       errorElement: "div",
       rules: {
           "data[User][first_name]": {
		          required: true
            },
           "data[User][last_name]": {
		          required: true
            },
           "data[User][password]": {
		      required: true,
		      minlength: 8
           },
            "data[User][username]": {
                required: true,
                email: true,
                remote: {url: SITEPATH +'users/checkEmail', type: "post"}
            },
           "data[cnfrm_password]": {
               required: true,
                equalTo: "#password"
            },
           "data[User][frg_wallet]": {
               minlength: 34
            }
        },
        messages: {
            "data[User][first_name]": {
		          required: "Enter First Name!"
            },
           "data[User][last_name]": {
		          required: "Enter First Name!"
            },
           "data[User][password]": {
		      required: "Enter Password!",
		      minlength: "The password must be at least 8 characters long"
           },
            "data[User][username]": {
                required: "We need your Email!",
                email: "Email is in wrong format!",
                remote: "Email is already registered"
            },
           "data[cnfrm_password]": {
               required: "Confirm password!",
                equalTo: "Wrong confirmation"
            },
            "data[User][frg_wallet]": {
               minlength: "Enter Valid Wallet Address!"
            }
        },
        submitHandler: function() {
           
            grecaptcha.execute();
          
        }

       
   } );
    } );

});

function onSubmit(token) {
   document.getElementById("m-form").submit();

  }


