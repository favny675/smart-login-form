  let username=document.getElementById("username");
          let email=document.getElementById("email");
          let phone=document.getElementById("phone");
          let password=document.getElementById("password");

          let usermsg=document.getElementById("useremsg");
          let emailmsg=document.getElementById("emailmsg");
          let phonemsg=document.getElementById("phonemsg");
          let passwordmsg=document.getElementById("passwordmsg");
          let submitbtn=document.getElementById("submitbtn"); 
          let formSuccessMsg = document.getElementById("formSuccessMsg");
          

          
                  
          

         username.addEventListener("input", function(){
            let usernamevalue=username.value;
            if(usernamevalue === ""){
                usermsg.innerHTML="This field is required";
                usermsg.style.color="red";
                username.style.border = "2px solid red";
            }else if(usernamevalue.length < 6){
                usermsg.innerHTML="Username should be at least 6 characters";
                usermsg.style.color="red";
                username.style.border = "2px solid red";
            }else{
                usermsg.innerHTML="correct input";
                usermsg.style.color="green";
                username.style.border = "2px solid green";
                

            }
         });

         email.addEventListener("input", function(){
            let emailvalue=email.value;
            if(emailvalue === ""){
                emailmsg.innerHTML="This field is required";
                emailmsg.style.color="red";
                email.style.border = "2px solid red";   
            }else if(!emailvalue.includes("@")){
                emailmsg.innerHTML="Email should contain @";
                emailmsg.style.color="red";
                email.style.border = "2px solid red";

            }else{
                emailmsg.innerHTML="correct input";
                emailmsg.style.color="green";
                email.style.border = "2px solid green";
            }
         });

         phone.addEventListener("input", function(){
            let phonevalue=phone.value;
            if(phonevalue === ""){
                phonemsg.innerHTML="This field is required";
                phonemsg.style.color="red";
                phone.style.border = "2px solid red";
            }else if(!phonevalue.startsWith("+234")){
                phonemsg.innerHTML="Phone number should start with +234";
                phonemsg.style.color="red";
                phone.style.border = "2px solid red";
            }else if(phonevalue.length < 14){
                phonemsg.innerHTML="Phone number should be at least 14 characters";
                phonemsg.style.color="red";
                phone.style.border = "2px solid red";
            }else{
                phonemsg.innerHTML="correct input";
                phonemsg.style.color="green";
                phone.style.border = "2px solid green";
            }
            
         });

         password.addEventListener("input", function(){
            let passwordvalue=password.value;
            if(passwordvalue === ""){
                passwordmsg.innerHTML="This field is required";
                passwordmsg.style.color="red";
                password.style.border = "2px solid red";
            }else if(passwordvalue.length < 6){
                passwordmsg.innerHTML="Password should be at least 6 characters";
                passwordmsg.style.color="red";
                password.style.border = "2px solid red";

            }else{
                passwordmsg.innerHTML="correct input";
                passwordmsg.style.color="green";
                password.style.border = "2px solid green";
            }
         });

         submitbtn.addEventListener("click", function(event){
            event.preventDefault();
            let usernamevalue=username.value;
            let emailvalue=email.value;
            let phonevalue=phone.value;
            let passwordvalue=password.value;

            if(
                usernamevalue !== "" &&
                usernamevalue.length >= 6 &&
                emailvalue.includes("@") &&
                phonevalue.startsWith("+234") &&
                phonevalue.length >= 14 &&
                passwordvalue.length >= 6
            ){
                formSuccessMsg.innerHTML = "Form submitted successfully ✔";
                formSuccessMsg.style.color = "green";
                document.getElementById("form-box").reset();
                // Clear messages
                usermsg.innerHTML = "";
                emailmsg.innerHTML = "";
                phonemsg.innerHTML = "";
                passwordmsg.innerHTML = "";

            }else{
                formSuccessMsg.innerHTML = "Please correct the errors in the form before submitting.";
                formSuccessMsg.style.color = "red";
            }
            
         });
