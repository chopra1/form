//for image upload
//for preview image and url
window.addEventListener('load', function () {
    document.querySelector("input[type='file']").addEventListener('change', function () {
            if (this.files && this.files[0]) {
                var img = document.querySelector('img');
                img.src = URL.createObjectURL(this.files[0]);
            }
            return
        })
})

//for file size
const input = document.getElementById('input')
input.addEventListener('change', (event) => {
    const target = event.target;
    if (target.files && target.files[0]) {
        //Maximum allowed size in bytes 1MB Example.  Change first operand(multiplier) for your needs
        const maxAllowedSize = 1 * 1024 * 1024; //means 1 MB
        if (target.files[0].size > maxAllowedSize) {
            target.value = '';
            alert('File size should be not more than 1 MB');
        }
    }

    //for allowing jpg and png only
    var file = target.files[0];
    if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
        alert('Please select a valid JPEG or PNG image file.');
        input.value = '';
        return //return keyword will tale control out of method.
    }
})

//for deleting the selected image
function del() {
    var img = document.getElementById('uploaded-image');
    img.src = 'default-avatar.png';
    document.getElementById('delete').style.display = 'none';
    document.getElementById('input').value = '';
} //call in html

//for displaying delete button when the image is uploaded.
function showDelBtn() {
    document.getElementById('delete').style.display = 'block';
} //called in html

// Add an event listener to the form to handle form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
    //event.preventDefault(); // Prevent the form from submitting

    // Get form inputs
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var confirmInput = document.getElementById('confirmPassword');

    // Alert for invalid email
    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
    }

    // Alert for invalid password
    if (!isValidPassword(passwordInput.value)) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character.");
        passwordInput.focus();
        return false;
    }

    // Check that passwords match
    if (passwordInput.value !== confirmInput.value) {
        alert('Passwords do not match.');
        passwordInput.focus();
        return false;
    }

    // Helper function to validate email
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); //test that parameter matched with expression, returns true
    }

    // Helper function to validate password
    function isValidPassword(passwordInput) {
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
        return passwordRegex.test(passwordInput);  //test that password parameter is matching with Regex, returns true 
}

// confirmation that form is Submitted
alert('Form submitted!');
//this.submit();
document.getElementById('myForm').submit();
})

//for viewing password field
function viewPassword(){
    let x = document.getElementById('password');
    if(x.type === 'password'){
        x.type = 'text'
    }else{x.type = 'password'}
}

function showPassword(){
    let y = document.getElementById('confirmPassword');
    if(y.type === 'password'){
        y.type = 'text'
    }else{y.type = 'password'}
}

//save the data in local storage
function store(){
let firstName = document.getElementById("fname").value;
let lastName = document.getElementById("lname").value;
let mobile = document.getElementById('mobile').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let address = document.getElementById('address').value;
    
let formData = JSON.parse(localStorage.getItem('formData')) || [];
let formInput = {firstName, lastName, mobile, email, password, address}
    
formData.push(formInput);
localStorage.setItem('formData', JSON.stringify(formData));
}

//Builds the data from the submitted form data
function tableBuilder(){
    const table = document.getElementById('table');
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];

//    table.tBodies[0].innerHTML = "";
    table.tBodies[0].innerHTML = "";


    storedData.forEach(function(data){
        const row = document.createElement('tr');
        const fnameCell = document.createElement('td');
        const lnameCell = document.createElement('td');
        const mobileCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const passwordCell = document.createElement('td');
        const addressCell = document.createElement('td');

        fnameCell.textContent = data.firstName;
        lnameCell.textContent = data.lastName;
        mobileCell.textContent = data.mobile;
        emailCell.textContent = data.email;
        passwordCell.textContent = data.password;
        addressCell.textContent = data.address;

        row.appendChild(fnameCell);
        row.appendChild(lnameCell);
        row.appendChild(mobileCell);
        row.appendChild(emailCell);
        row.appendChild(passwordCell);
        row.appendChild(addressCell);

        table.tBodies[0].appendChild(row);
    })
}

document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    store();
    tableBuilder();
    //this.reset();
});

tableBuilder()
//initialize form id done
//again add form inputs done
//form submit id done
//table id done

//ternary operator

//on submit event listener
//prevent default
//set item
///create table

//step-1 Define the required HTML id's 
//const noteForm = document.getElementById("note-form"); //form id
//const noteInput = document.getElementById("note-input"); //input we add in note
//const noteSubmit = document.getElementById("note-submit"); //Add button
//const notes = document.getElementById("notes"); //display submitted data in <ul> 
//----------------------------------------------------------------------------------------------------------------
//Ternary op - Read the item which is submitted through (localStorage.getItem(). if data available then convert JSON obj data into JS using JSON.parse() or array will remain empty. 
//let notesStorage = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []; // .length / .isEmpty()

//noteForm.addEventListener("submit", (e) => {
//  e.preventDefault(); //preventDefault will look that the form field should not empty
//  notesStorage.push(noteInput.value); //push noteInput value in noteStorage
//  localStorage.setItem("notes", JSON.stringify(notesStorage)); //Set the data in local storage
//  listBuilder(noteInput.value); //call a function listBuilder with attributes (noteInput.value)  (function hoisting)
//  noteInput.value = ""; 
//});
//function of listBuilder
      //const listBuilder = (text) => { //parameter is text (user input)
        //const note = document.createElement("li");
        //note.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>'; //display the input text in HTML list format wiyj a delete btn
        //notes.appendChild(note); //notes(<ul>) will add a child component note(<li>)
      //};
//--------------------------------------------------------------------------------------------------------------------------
      //const getNotes = JSON.parse(localStorage.getItem("notes")); //for reading the data in local storage
      //getNotes.forEach((note) => {  //forEach method is used to display each input of user
      //listBuilder(note); //call listBuilder func to read the data in local storage 
      //});
      

// const form = document.getElementById('myForm');
// const firstNameInput = document.getElementById('fname').value;
// const lastNameInput = document.getElementById('lname').value;
// const mobile = document.getElementById('mobile').value;
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// const address = document.getElementById('address').value;
// const formFieldsData = {firstNameInput, lastNameInput, mobile, email, password, address};
// const formSubmit = document.getElementById('submission');
// const table = document.querySelector('#table tbody');

// let dataStorage = localStorage.getItem('formData')?JSON.parse(localStorage.getItem('formData')):[];

//  form.addEventListener('submit', (e) => {
//      e.preventDefault();
//      dataStorage.push(firstNameInput.value);
//      localStorage.setItem('formData', JSON.stringify(dataStorage));
//      tableBuilder(firstNameInput.value);
//      firstNameInput.value = " ";
// })

// function tableBuilder(){
// const tableBody = document.querySelector('#table tbody');
// table.innerHTML = '';
//  loop through data and add rows to the table body
//     for (let i = 0; i < firstNameInput.length; i++) {
//         const row = table.insertRow();
//         const cell1 = row.insertCell();
//         const cell2 = row.insertCell();
//         const cell3 = row.insertCell();
//         const cell4 = row.insertCell();
//         const cell5 = row.insertCell();
//         const cell6 = row.insertCell();
//         cell1.innerHTML = firstNameInput[i].firstNameInput;
//         cell2.innerHTML = formFieldsData[i].lastNameInput;
//         cell3.innerHTML = formFieldsData[i].mobile;
//         cell4.innerHTML = formFieldsData[i].email;
//         cell5.innerHTML = formFieldsData[i].password;
//         cell6.innerHTML = formFieldsData[i].address;
//     }
// }

//sorting of tableLayout

//sorting of data
function sortTable(column) {  //'column' is used to specify all columns    
    //assign required parameters
    var rows, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
    switching = true;
    //Set the sorting direction to descending:
    direction = "desc";
    //loop that will continue until no switching has been done
    while (switching) {
      //A "While" Loop is used to repeat a specific block of code an unknown number of times, until a condition is met. 
      const table = document.getElementById('table');
      rows = table.tBodies[i].rows;
  
      for (i = 0; i < (rows.length - 1); i++) {
        //Get the two elements you want to compare, one from current row and one from the next
        x = rows[i].getElementsByTagName("td")[column];
        y = rows[i + 1].getElementsByTagName("td")[column];
        //check if the two rows should switch place, based on the direction of ascending or descending:
        if (direction == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop.
            shouldSwitch = true;
            break;
          }
        } else if (direction == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop.
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        //If a switch has been marked, make the switch and mark that a switch has been done:
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        //If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
        if (switchcount == 0 && direction == "desc") {
          direction = "asc";
          switching = true;
        }
      }
    }
  } //called in html 
  