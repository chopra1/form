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
function tableBuilder(page=1){
    const table = document.getElementById('table');
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    const rowsPerPage = 5;

//    table.tBodies[0].innerHTML = "";
    table.innerHTML = "";

    const startIndex = (page-1)*rowsPerPage;
    const endIndex = startIndex+rowsPerPage;
    const rawData = storedData.slice(startIndex, endIndex);

    //create and append new data row with the stored form data.
    for(let i=0; i<rawData.length; i++){
        const row = document.createElement('tr');

        const fnameCell = document.createElement('td');
        fnameCell.textContent = rawData[i].firstName;
        row.appendChild(fnameCell);
        
        const lnameCell = document.createElement('td');
        lnameCell.textContent = rawData[i].lastName;
        row.appendChild(lnameCell);

        const mobileCell = document.createElement('td');
        mobileCell.textContent = rawData[i].mobile;
        row.appendChild(mobileCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = rawData[i].email;
        row.appendChild(emailCell);

        const passwordCell = document.createElement('td');
        passwordCell.textContent = rawData[i].password;
        row.appendChild(passwordCell);

        const addressCell = document.createElement('td');
        addressCell.textContent = rawData[i].address;
        row.appendChild(addressCell);

        const editCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editFormData(rowData[i]))
        editCell.appendChild(editButton);  
        row.appendChild(editCell);

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteFormData(rowData[i]))
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        
        table.appendChild(row);
} }

//function to edit form data
 function editFormData(i) {
    // const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    // const data = storedData[index];
    
    // if (data) {
    //   const form = document.getElementById('myForm');
    //   form.elements['fname'].value = data.firstName;
    //   form.elements['lname'].value = data.lastName;
    //   form.elements['mobile'].value = data.mobile;
    //   form.elements['email'].value = data.email;
    //   form.elements['password'].value = data.password;
    //   form.elements['address'].value = data.address;
      
    //   // Remove the edited data from local storage
    //   storedData.splice(index, 1);
    //   localStorage.setItem('formData', JSON.stringify(storedData));
      
    //   // Update the table display
    //   tableBuilder();
    // }
  }

  // Function to delete form data
  function deleteFormData(i) {
    // const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    
    // // Remove the data from local storage
    // storedData.splice(index, 1);
    // alert('The selected data will be deleted');
    // localStorage.setItem('formData', JSON.stringify(storedData));
    
    // // Update the table display
    // tableBuilder();
  }

document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    store();
    //tableBuilder();
    this.reset();
});

// Function to filter table data based on search input
function filterTable() {
  let currentPage  = 1;
      const input = document.getElementById('search');
      const filter = input.value.toLowerCase();
      const table = document.getElementById('table');
      const rows = table.getElementsByTagName('tr');
      
      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let shouldDisplay = false;
        
        for (let j = 0; j < cells.length; j++) {
          const cellText = cells[j].textContent.toLowerCase();
          if (cellText.indexOf(filter) > -1) {
            shouldDisplay = true;
            break;
          }
        }
        
        rows[i].style.display = shouldDisplay ? '' : 'none';
      }
    }
    const searchInput = document.getElementById('search');
searchInput.addEventListener('input', filterTable);
    tableBuilder()

//pagination variables
let currentPage = 1;
const rowPerPage = 5;
let storedData = JSON.parse(localStorage.getItem('formData')) || [];
let totalRows = storedData.length;
let totalPages = Math.ceil(totalRows/rowPerPage);

//function to generate page numbers
function generatePageNumbers(){
  const pageNumbers = document.getElementById('pageNumbers');
  let numbersHTML = '';

  for(let i=1; i<=totalPages; i++){
    numbersHTML += `<button class='pageNumber' data-page="${i}">${i}</button>`;
  }
  pageNumbers.innerHTML = numbersHTML;

  const pageNumberButtons = document.getElementsByClassName('pageNumber');
  for(let i =0; i<pageNumberButtons.length; i++){
    pageNumberButtons[i].addEventListener('click', function(){
      currentPage = parseInt(this.getAttribute('data-page'))
      tableBuilder(currentPage);
    })
  }
}

 // Event listener for previous page button
 const prevPageButton = document.getElementById('prevPage');
 prevPageButton.addEventListener('click', function() {
   if (currentPage > 1) {
     currentPage--;
     tableBuilder(currentPage);
   }
 });
 
 // Event listener for next page button
 const nextPageButton = document.getElementById('nextPage');
 nextPageButton.addEventListener('click', function() {
   if (currentPage < totalPages) {
     currentPage++;
     tableBuilder(currentPage);
   }
 });

 generatePageNumbers();
 tableBuilder();
