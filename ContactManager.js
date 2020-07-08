window.onload=init;
 //What happens when the page loads up
function init() {
    
    //Just warn users to not mess with the code
 console.log("It is better if you do not mess around here. Otherwise, all of your information could be deleted.");

    //the if part is what happens if it is a user's first time here. The else part is what happens if the user has been here before
if ((localStorage.visitcount==undefined)==true){localStorage.setItem("visitcount", 1);}
else {localStorage.setItem("visitcount",(Number(localStorage.visitcount)+1)); }    
    //creates the empty array of contacts for new users
    if (Number(localStorage.visitcount)<=1) {localStorage.setItem("AllContacts", JSON.stringify([]));}
 else{}
    //This parses the string of contacts so that new contacts can be added to it
 arrayOfAllContacts=JSON.parse(localStorage.getItem("AllContacts"));
  //this whole block of code displays contacts which were saved in previous sessions
    arrayOfAllContacts.forEach(function(currentContact){
        var cancelbutton = document.querySelector("#cancelbutton");
      cancelbutton.addEventListener("click", function cancelEdit() {
      
        var overlay = document.querySelector("#overlay");
          overlay.style.display="none";
        var editalert= document.querySelector("#editalert");
          editalert.style.display = "none";
      
      
      })
  var theTable = document.getElementById("table");
 var row = theTable.insertRow();
 var cell1 = row.insertCell();
var cell2 = row.insertCell();
var cell3 = row.insertCell();
var cell4 = row.insertCell();
var cell5 = row.insertCell();
cell1.innerHTML = currentContact.firstname;
 cell1.addEventListener("dblclick", function displayEditAlert(){
  document.querySelector("#editalert").style.display="block";
  document.querySelector("#overlay").style.display="block"; 
  var editbutton = document.querySelector("#editbutton");
     
     editbutton.addEventListener("click", function(){
     var newvalue = document.querySelector("#newvalue").value;
     var edited = row.rowIndex;
     arrayOfAllContacts=JSON.parse(localStorage.getItem("AllContacts"));
     arrayOfAllContacts[edited-1].firstname = newvalue;
     localStorage.setItem("AllContacts", JSON.stringify(arrayOfAllContacts));
      window.location.reload();
     });
     
 });
     
cell2.innerHTML = currentContact.lastname;
         cell2.addEventListener("dblclick", function displayEditAlert(){
  document.querySelector("#editalert").style.display="block";
  document.querySelector("#overlay").style.display="block"; 
  var editbutton = document.querySelector("#editbutton");
     
     editbutton.addEventListener("click", function(){
     var newvalue = document.querySelector("#newvalue").value;
     var edited = row.rowIndex;
     arrayOfAllContacts=JSON.parse(localStorage.getItem("AllContacts"));
     arrayOfAllContacts[edited-1].lastname = newvalue;
     localStorage.setItem("AllContacts", JSON.stringify(arrayOfAllContacts));
      window.location.reload();
     });
     
 });
cell3.innerHTML = currentContact.email;
        cell3.addEventListener("dblclick", function displayEditAlert(){
  document.querySelector("#editalert").style.display="block";
  document.querySelector("#overlay").style.display="block"; 
  var editbutton = document.querySelector("#editbutton");
     
     editbutton.addEventListener("click", function(){
     var newvalue = document.querySelector("#newvalue").value;
     var edited = row.rowIndex;
     arrayOfAllContacts=JSON.parse(localStorage.getItem("AllContacts"));
     arrayOfAllContacts[edited-1].email = newvalue;
     localStorage.setItem("AllContacts", JSON.stringify(arrayOfAllContacts));
      window.location.reload();
     });
     
 });
cell4.innerHTML = currentContact.phonenumber;
        cell4.addEventListener("dblclick", function displayEditAlert(){
  document.querySelector("#editalert").style.display="block";
  document.querySelector("#overlay").style.display="block"; 
  var editbutton = document.querySelector("#editbutton");
     
     editbutton.addEventListener("click", function(){
     var newvalue = document.querySelector("#newvalue").value;
     var edited = row.rowIndex;
     arrayOfAllContacts=JSON.parse(localStorage.getItem("AllContacts"));
     arrayOfAllContacts[edited-1].phonenumber = newvalue;
     localStorage.setItem("AllContacts", JSON.stringify(arrayOfAllContacts));
      window.location.reload();
     });
     
 });
cell5.style.backgroundImage="url('https://i.ibb.co/R3ZzKgh/letterx.png')";
 cell5.style.width="25px";
cell5.style.height="25px";
 cell5.style.borderBottom="none";
  cell5.style.backgroundRepeat="no-repeat";
 cell5.style.backgroundSize="20px 20px";
 cell5.addEventListener("click", function confirmDelete() {
  var txt;
  if (confirm("Are you sure that you want to delete this contact?")) {
      row.style.display="none";
      arrayOfAllContacts = JSON.parse(localStorage.getItem("AllContacts"));
      var added= row.rowIndex;
      arrayOfAllContacts.splice(added-1, 1);
      localStorage.setItem("AllContacts", JSON.stringify(arrayOfAllContacts));
      window.location.reload();
  } else {
  }
});

  });

}
//the class constructor which is used when a user chooses to add a new contact
class Contact {
  constructor(firstname, lastname, email, phonenumber) {
    this.firstname= firstname;
    this.lastname =lastname;
    this.email = email;
    this.phonenumber = phonenumber;
  }
//the method which displays the contact when a user adds it and also enables the user to delete it
  showContact() {
      //parses the array so that the contact can be pushed into the array
      arrayOfAllContacts=JSON.parse(localStorage.getItem("AllContacts"));
      arrayOfAllContacts.push(this);
    var theTable = document.getElementById("table");
 var row = theTable.insertRow();
 var cell1 = row.insertCell();
var cell2 = row.insertCell();
var cell3 = row.insertCell();
var cell4 = row.insertCell();
var cell5 = row.insertCell();
cell1.innerHTML = this.firstname;
cell2.innerHTML = this.lastname;
cell3.innerHTML = this.email;
cell4.innerHTML = this.phonenumber;
cell5.style.backgroundImage="url('https://i.ibb.co/R3ZzKgh/letterx.png')";
 cell5.style.width="25px";
cell5.style.height="25px";
cell5.style.borderBottom="none";
 cell5.style.backgroundSize="20px 20px";
 cell5.style.backgroundRepeat="no-repeat";
cell5.addEventListener("click", function confirmDelete() {
  var txt;
  if (confirm("Are you sure that you want to delete this contact?")) {
      row.style.display="none";
      arrayOfAllContacts = JSON.parse(localStorage.getItem("AllContacts"));
      var added= row.rowIndex;
      arrayOfAllContacts.splice(added-1, 1);
      localStorage.setItem("AllContacts", JSON.stringify(arrayOfAllContacts));
      window.location.reload();
  } else {
  }
});
   //stringifies the array again after the process of adding the contact is done  
 localStorage.setItem("AllContacts", JSON.stringify(arrayOfAllContacts));

  }
}
//the function that is executed when the user adds a new contact, uses the method specified in the class constructor
function addContact() {
     
    if (document.getElementById("firstname").value===""){document.getElementById("firstname").value="N/A"};
    if (document.getElementById("lastname").value===""){document.getElementById("lastname").value="N/A"};
    if (document.getElementById("email").value===""){document.getElementById("email").value="N/A"};
    if (document.getElementById("phonenumber").value===""){document.getElementById("phonenumber").value="N/A"};
    
var newContact = new Contact(document.getElementById("firstname").value, document.getElementById("lastname").value, document.getElementById("email").value, document.getElementById("phonenumber").value);
  newContact.showContact();
    //this block of code displays an error to the user if their browser does not support local storage
    if(typeof(Storage) !== "undefined") {
      if (localStorage.visitcount) {
       localStorage.visitcount = Number(localStorage.visitcount)+1;
    } else {
      localStorage.visitcount = 0;
    }
  } else {
    document.getElementById("visits").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
//this block of code is what is executed when the user wants to delete all contacts
function removeAll() { var txt;
  if (confirm("Are you sure that you want to delete all of your saved contacts?")) {
                     localStorage.setItem("visitcount", 0);
                     window.location.reload();
  } else {
  }
}
    
function searchByFirstName() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("firstnamesearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function searchByLastName() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("lastnamesearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function searchByEmail() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("emailsearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function searchByPhoneNumber() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("phonenumbersearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function openAbout() {
  document.getElementById("about").style.height = "100vh";
    document.getElementById("header").style.position = "fixed";
   document.getElementById("about").style.overflow = "auto";
}

function closeAbout() {
  document.getElementById("about").style.height = "0";
    document.getElementById("about").style.overflow = "hidden";
    document.getElementById("header").style.position = "absolute";
}  