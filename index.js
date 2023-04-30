// floating button function
var floatingBtn = document.querySelector('.floating-btn');
floatingBtn.addEventListener('click', function() {
  // Add your functionality here
});


// // Get the alert element
//  var alert = document.getElementsByClassName("newAlert")[0];

//  // Get the close button
//  var close = document.getElementsByClassName("newCloseBtn")[0];
 
//  // Close the alert when the close button is clicked
//  close.onclick = function() {
//    alert.style.display = "none";
//  }

// Check if local storage has any entries, else set to empty array
let entryList = JSON.parse(localStorage.getItem("entryList")) || [];

// Render the list of entries on page load
function renderEntries() {
    let html = "";
    entryList.forEach((entry, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${entry.amount}</td>
                <td>${entry.desc}</td>
                <td>${entry.expense_type}</td>
                <td>
                <button onclick="editEntry(${index})" type="button" class="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                <button onclick="deleteEntry(${index})" type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                </td>
            </tr>
        `;
    });
    document.getElementById("entry-list").innerHTML = html;
}

renderEntries();

// Function to add new entry to local storage
function addEntry() {
    let amount = document.getElementById("amount").value;
    let desc = document.getElementById("desc").value;
    let expense_type = document.getElementById("expense_type").value;

    // Check if name and email fields are not empty
    if (amount === "" || desc === "" || expense_type === "") {
        alert("Please fill in all fields");
        return;
    }

    // Generate ID based on length of entry list
    let id = entryList.length + 1;

    // Add new entry to list
    entryList.push({id, amount, desc, expense_type});

    // Update local storage with new entry list
    localStorage.setItem("entryList", JSON.stringify(entryList));

    // Clear form fields and show success message
    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
    // document.getElementById("success").innerHTML = "Data added successfully";
    alert("Data added successfully")
    // Render updated list of entries
    renderEntries();

    
}

function hideupdate(){
    document.getElementById("update-btn").style.display = "none";
}

// Function to edit existing entry in local storage
function editEntry(index) {
    // Set form fields with current values of entry to be edited
    document.getElementById("id").value = entryList[index].id;
    document.getElementById("amount").value = entryList[index].amount;
    document.getElementById("desc").value = entryList[index].desc;
    document.getElementById("expense_type").value = entryList[index].expense_type;

    // Hide add button and show update button
    document.getElementById("add-btn").style.display = "none";
    document.getElementById("update-btn").style.display = "block";
}

// Function to update existing entry in local storage
function updateEntry() {
    let id = document.getElementById("id").value;
    let amount = document.getElementById("amount").value;
    let desc = document.getElementById("desc").value;
    let expense_type = document.getElementById("expense_type").value;
    

    // Check if name and email fields are not empty
    if (amount === "" || desc === "" || expense_type === "") {
        document.getElementById("error").innerHTML = "Please fill in all fields";
        return;
    }

    // Find index of entry to be updated using ID
    let index = entryList.findIndex(entry => entry.id == id);

    // Update name and email of entry at specified index
    entryList[index].amount = amount;
    entryList[index].desc = desc;
    entryList[index].expense_type = expense_type;

    // Update local storage with updated entry list
    localStorage.setItem("entryList", JSON.stringify(entryList));

    // Clear form fields, show success message, and reset button visibility
    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("expense_type").value = "";
    document.getElementById("id").value = "";
    alert("Data modified successfully");
    document.getElementById("add-btn").style.display = "block";
    document.getElementById("update-btn").style.display = "none";

    // Render updated list of entries
    renderEntries();
}


// Function to delete existing entry from local storage
function deleteEntry(index) {
    // Remove entry at specified index from list
    entryList.splice(index, 1);

    // Update local storage with updated entry list
    localStorage.setItem("entryList", JSON.stringify(entryList));

    // Show success message and render updated list of entries
    alert("Data deleted successfully");
    renderEntries();
}

function showAlert() {
    var alert = document.getElementsByClassName("alert")[0];
    alert.style.display = "flex";
  }
  function closeAlert() {
    var alert = document.getElementsByClassName("alert")[0];
    alert.style.display = "none";
  }

