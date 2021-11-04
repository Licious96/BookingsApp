// function register() {
//     const f_name = document.querySelector('#f_name').value;
//     const l_name = document.querySelector('#l_name').value;
//     const email = document.querySelector('#email').value;
//     const staff_no = document.querySelector('#staff_no').value;
//     const contacts = document.querySelector('#contacts').value;
//     const module_name = document.querySelector('#module_name').value;
//     const module_code = document.querySelector('#module_code').value;
//     const password = document.querySelector('#password').value;
//     const re_password = document.querySelector('#re_password').value;
//     const checkbox = document.querySelector('#check1');

//     const f_name_error = document.querySelector('#f_name_error');
//     const l_name_error = document.querySelector('#l_name_error');
//     const staff_no_error = document.querySelector('#staff_no_error');
//     const email_error = document.querySelector('#email_error');
//     const contacts_error = document.querySelector('#contacts_error');
//     const module_code_error = document.querySelector('#module_code_error');
//     const module_name_error = document.querySelector('#module_name_error');
//     const password_error = document.querySelector('#password_error');
//     const re_password_error = document.querySelector('#re_password_error');

//     f_name_error.innerHTML = "";
//     l_name_error.innerHTML = "";
//     email_error.innerHTML = "";
//     staff_no_error.innerHTML = "";
//     contacts_error.innerHTML = "";
//     module_code_error.innerHTML = "";
//     module_name_error.innerHTML = "";
//     password_error.innerHTML = "";
//     re_password_error.innerHTML = "";

//     if (f_name.replace(/\s/g, "").length == 0) {
//         f_name_error.innerHTML = "Enter your first name";
//         return;
//     }
//     if (l_name.replace(/\s/g, "").length == 0) {
//         l_name_error.innerHTML = "Enter your last name";
//         return;
//     }
//     if (staff_no.replace(/\s/g, "").length == 0) {
//         staff_no_error.innerHTML = "Enter your staff number";
//         return;
//     }

//     if (isNaN(staff_no)) {
//         staff_no_error.innerHTML = "Staff number is invalid";
//         return;
//     }

//     if (email.replace(/\s/g, "").length == 0) {
//         email_error.innerHTML = "Enter your email address";
//         return;
//     }

//     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        
//     }else {
//         email_error.innerHTML = "Please enter a valid email address";
//         return;
//     }

//     if (contacts.replace(/\s/g, "").length == 0) {
//         contacts_error.innerHTML = "Enter your contacts";
//         return;
//     }

//     if (isNaN(contacts)) {
//         contacts_error.innerHTML = "Contact number is invalid";
//         return;
//     }

//     if (module_name.replace(/\s/g, "").length == 0) {
//         module_name_error.innerHTML = "Enter your module name";
//         return;
//     }

//     if (module_code.replace(/\s/g, "").length == 0) {
//         module_code_error.innerHTML = "Enter your module code";
//         return;
//     }
//     if (password.replace(/\s/g, "").length == 0) {
//         password_error.innerHTML = "Create a password";
//         return;
//     }
//     const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,20}$/;
//     if (password.match(passw)) {
//         if (password === re_password) {
//             if (checkbox.checked) {
//                 $.post('assets/php/register.php', {
//                     f_name: f_name,
//                     l_name: l_name,
//                     email: email,
//                     staff_no: staff_no,
//                     contacts: contacts,
//                     module_name: module_name,
//                     module_code: module_code,
//                     password: password
//                 }, function(data){
//                     $("#result").html( data );
//                     const result = $.trim(data);
//                     if (result === '<div class="alert alert-success p-3" role="alert">Account created, you may now login!</div>') {
//                         window.location = "home.php";
//                     }
//                 });
//             } else {
//                 $("#result").html('<div class="alert alert-primary p-3" role="alert">Please accept the terms and conditions below!</div>');
//             }
//         } else {
//             re_password_error.innerHTML = "Passwords do not match";
//             return;
//         }
//     }else{
//         password_error.innerHTML = "Password should contain at least one uppercase, one character and one number";
//         return;
//     }

   

// }

// function login() {
//     const username = document.querySelector('#username').value;
//     const password = document.querySelector('#password').value;

//     const feedback = document.querySelector('#feedback');
//     feedback.innerHTML = "";

//     $.post('assets/php/login.php', {
//         username: username,
//         password: password
//     }, function(success){
//         $("#feedback").html(success);
//         const result = $.trim(success)
//         if (result == "login") {
//             window.location = 'home.php';
//         }
//     });


// }

// function logout() {
//     window.location = 'assets/php/logout.php';
// }

// function forgot_password() {
//     const email = document.querySelector("#email").value;
//     const email_error = document.querySelector("#email_error");

//     email_error.innerHTML = "";

//     if (email.replace(/\s/g, "").length == 0) {
//         email_error.innerHTML = "Enter your email address";
//         return;
//     }

//     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        
//     }else {
//         email_error.innerHTML = "Please enter a valid email address";
//         return;
//     }

//     $.post('assets/php/forgot-password.php', {email: email},
//     function(html){
//         alert(html)
//     });
// }

// function bookings() {
//     const venue = document.querySelector('#venue').value;
//     const date = document.querySelector('#date').value;
//     const time = document.querySelector('#time').value;

//     const venue_error = document.querySelector('#venue_error');
//     const date_error = document.querySelector('#date_error');
//     const time_error = document.querySelector('#time_error');

//     venue_error.innerHTML = "";
//     date_error.innerHTML = "";
//     time_error.innerHTML = "";

//     if (venue.length == 0) {
//         venue_error.innerHTML = "Choose venue";
//         return;
//     }

//     if (date.length == 0) {
//         date_error.innerHTML = "Choose date";
//         return;
//     }

//     if (time.length == 0) {
//         time_error.innerHTML = "Choose time";
//         return;
//     }

//     $.post('assets/php/bookings.php', {venue: venue, date: date, time: time}, function(html){
//         $("#alert").html(html);
//     });
// }

// function delete_booking(date_, time_) {
//     const date = date_;
//     const time = time_;

//     $.post('assets/php/delete_booking.php', {date: date, time: time}, function(){
//         alert('deleted');
//         refresh();
//     });
// }

// function refresh() {
//     $("#refresh").load("assets/php/load-table.php");
// }

// $(document).ready(function(){
// 	$("#refresh").load("assets/php/load-table.php");
// });

function test() {
    alert()
}