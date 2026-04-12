// ================= STUDENTS =================
var students = [
  // ================= MECH =================
  {name:"LAVUDYA KIRAN KUMAR NAYAK", roll:"BT25B002", group:"A", branch:"BIOTECH"},
  {name:"BHUKYA GANESH", roll:"BT25B003", group:"A", branch:"BIOTECH"},
  {name:"SHASHWAT YADAV", roll:"BT25B004", group:"A", branch:"BIOTECH"},
  {name:"DEEPENDRA PATEL", roll:"BT25B005", group:"A", branch:"BIOTECH"},
  {name:"KUMARI KANAK", roll:"BT25B006", group:"A", branch:"BIOTECH"},
  {name:"RODDA KOUSHIK", roll:"BT25B007", group:"A", branch:"BIOTECH"},
  {name:"TAKHE TUNYA", roll:"BT25B008", group:"A", branch:"BIOTECH"},
  {name:"AJMEERA JAIKEETH", roll:"BT25B009", group:"A", branch:"BIOTECH"},
  {name:"DHARMENDRA SINGH", roll:"BT25B010", group:"A", branch:"BIOTECH"},
  {name:"DEEPAK KUMAR GUPTA", roll:"BT25B011", group:"A", branch:"BIOTECH"},

  // ================= CIVIL =================
  { name:"SAI UPADHYAY", roll:"CE25B001", group:"A", branch:"CIVIL" },
  { name:"VANSH LOHAR", roll:"CE25B002", group:"A", branch:"CIVIL" },
  { name:"VINAYAK KUMAR SINGH", roll:"CE25B003", group:"A", branch:"CIVIL" },
  { name:"MAYANK KUMAR SINGH", roll:"CE25B004", group:"A", branch:"CIVIL" },
  { name:"SUJAL PANDEY", roll:"CE25B005", group:"A", branch:"CIVIL" },
  { name:"NITIN", roll:"CE25B006", group:"A", branch:"CIVIL" },
  { name:"SHIVAM", roll:"CE25B007", group:"A", branch:"CIVIL" },
  { name:"MANI RAJ", roll:"CE25B008", group:"A", branch:"CIVIL" },
  { name:"KISHAN KUMAR", roll:"CE25B009", group:"A", branch:"CIVIL" },
  { name:"MANISH KUMAR BHAGAT", roll:"CE25B010", group:"A", branch:"CIVIL" },
  { name:"ASHISH", roll:"CE25B011", group:"A", branch:"CIVIL" },
  { name:"NANDAN KUMAR", roll:"CE25B012", group:"A", branch:"CIVIL" },
  { name:"RITIK KUMAR", roll:"CE25B013", group:"A", branch:"CIVIL" },
  { name:"PRIYA", roll:"CE25B014", group:"A", branch:"CIVIL" },
  { name:"KALPANA CHAWLA", roll:"CE25B015", group:"A", branch:"CIVIL" },
  { name:"ANUSHKA", roll:"CE25B016", group:"A", branch:"CIVIL" },
  { name:"ALOK KUMAR SHAH", roll:"CE25B017", group:"A", branch:"CIVIL" },
  { name:"CHAITANYA PAREWA", roll:"CE25B018", group:"A", branch:"CIVIL" },
  { name:"SHUBHAM", roll:"CE25B019", group:"A", branch:"CIVIL" },
  { name:"ANJALI KUMARI", roll:"CE25B020", group:"A", branch:"CIVIL" },
  { name:"HAGE DOLLEY", roll:"CE25B021", group:"A", branch:"CIVIL" },
  { name:"AANGOON RONRANG", roll:"CE25B022", group:"A", branch:"CIVIL" },
  { name:"YAMRA CHOTU", roll:"CE25B023", group:"A", branch:"CIVIL" },
  { name:"ADAM KALI JONGSAM", roll:"CE25B024", group:"A", branch:"CIVIL" },
  { name:"GOCHAM JUMYO", roll:"CE25B025", group:"A", branch:"CIVIL" },
  { name:"GEMIN TATIN", roll:"CE25B026", group:"A", branch:"CIVIL" },
  { name:"ANIL KUMAR MEENA", roll:"CE25B027", group:"A", branch:"CIVIL" },
  { name:"TANISHQ H Y MEEMROTH", roll:"CE25B028", group:"A", branch:"CIVIL" },
  { name:"PEJUM GARA", roll:"CE25B029", group:"A", branch:"CIVIL" },
  { name:"ILI BOMNYO", roll:"CE25B030", group:"A", branch:"CIVIL" },
  { name:"TABING KONYA", roll:"CE25B031", group:"A", branch:"CIVIL" },
  { name:"NYAIGANG GANGSA", roll:"CE25B032", group:"A", branch:"CIVIL" },
  { name:"KOJ UMPI", roll:"CE25B033", group:"A", branch:"CIVIL" },
  { name:"OYING MUMNE PANYANG", roll:"CE25B034", group:"A", branch:"CIVIL" },
  { name:"TOK AKUM", roll:"CE25B035", group:"A", branch:"CIVIL" },
  { name:"SUNDAY CHEDA", roll:"CE25B036", group:"A", branch:"CIVIL" },
  { name:"MILLI BENI", roll:"CE25B037", group:"A", branch:"CIVIL" },
  { name:"YULLAW ABO BAGANG", roll:"CE25B038", group:"A", branch:"CIVIL" },
  { name:"LOBSANG GAWA PANGGAM", roll:"CE25B039", group:"A", branch:"CIVIL" },

  // ================= BIOTECH =================
  {name:"MOHIT CHOUDHARY", roll:"ME25B001", group:"A", branch:"MECHANICAL"},
  {name:"AYUSHI ANAND", roll:"ME25B002", group:"A", branch:"MECHANICAL"},
  {name:"KBIR V PANDEY", roll:"ME25B003", group:"A", branch:"MECHANICAL"},
  {name:"PRIYAM PANDEY", roll:"ME25B004", group:"A", branch:"MECHANICAL"},
  {name:"AKHAND UPADHYAY", roll:"ME25B005", group:"A", branch:"MECHANICAL"},
  {name:"AKASAPU LOKESH DEVA RAJU", roll:"ME25B006", group:"A", branch:"MECHANICAL"},
  {name:"SUPRAGYA TIWARI", roll:"ME25B007", group:"A", branch:"MECHANICAL"},
  {name:"NIRANKAR MISHRA", roll:"ME25B008", group:"A", branch:"MECHANICAL"},
  {name:"RAVI KUMAR SRIVASTAV", roll:"ME25B009", group:"A", branch:"MECHANICAL"},
  {name:"TARUN SAINI", roll:"ME25B010", group:"A", branch:"MECHANICAL"},
  {name:"AAYUSH", roll:"ME25B011", group:"A", branch:"MECHANICAL"},
  {name:"SACHIN KUMAR", roll:"ME25B012", group:"A", branch:"MECHANICAL"},
  {name:"SUMIT KUMAR", roll:"ME25B013", group:"A", branch:"MECHANICAL"},
  {name:"DINKAR KUMAR YADAV", roll:"ME25B014", group:"A", branch:"MECHANICAL"},
  {name:"SATAPATHI MANJULA", roll:"ME25B015", group:"A", branch:"MECHANICAL"},
  {name:"ANKIT CHOUDHARY", roll:"ME25B016", group:"A", branch:"MECHANICAL"},
  {name:"NITESH KUMAR", roll:"ME25B017", group:"A", branch:"MECHANICAL"},
  {name:"VANSH KUMAR", roll:"ME25B018", group:"A", branch:"MECHANICAL"},
  {name:"THADIKAMALLA GOWTHAM", roll:"ME25B019", group:"A", branch:"MECHANICAL"},
  {name:"DIKSHA", roll:"ME25B020", group:"A", branch:"MECHANICAL"},
  {name:"DIPANKAR SATNAMI", roll:"ME25B021", group:"A", branch:"MECHANICAL"},
  {name:"KAUSHAL PURTY", roll:"ME25B022", group:"A", branch:"MECHANICAL"},
  {name:"GOLU MEENA", roll:"ME25B023", group:"A", branch:"MECHANICAL"},
  {name:"PUSHPENDRA KUMAR MEENA", roll:"ME25B024", group:"A", branch:"MECHANICAL"}
];

// ================= PROFESSORS =================
var professors = [
  {name:"MANJULA MAM", subject:"ENGINEERING MECHANICS"},
  {name:"SUBASIS BENARJEE", subject:"DSA"},
  {name:"AHMED SIR", subject:"HUMANITIES"},
  {name:"CORE SIR", subject:"METALLURGY"}
];

// ================= GLOBAL VARIABLES =================
var professor = "";
var subject = "";
var group = "";


// ================= LOGIN FUNCTION =================
function login(){

  var u = document.getElementById("username").value;
  var s = document.getElementById("subject").value;
  var g = document.getElementById("group").value;
  var p = document.getElementById("password").value;

  if(u=="" || s=="" || g=="" || p==""){
    alert("Please fill all fields");
    return;
  }

  if(p != "1234"){
    alert("Wrong password");
    return;
  }

  var found = false;

  for(var i=0; i<professors.length; i++){
    if(professors[i].name == u && professors[i].subject == s){
      found = true;
      professor = u;
      subject = s;
      group = g;
    }
  }

  if(found == false){
    alert("Wrong professor or subject");
    return;
  }

  document.getElementById("box").style.display = "none";
  document.getElementById("att").style.display = "block";

  document.getElementById("profName").innerHTML =
    "Professor: " + professor + " | Subject: " + subject + " | Group: " + group;

  showTables();
}



// ================= SHOW TABLES =================
function showTables(){

  var container = document.getElementById("tablesContainer");
  container.innerHTML = "";

  var data = localStorage.getItem("att");

  if(data == null){
    data = {};
  } else {
    data = JSON.parse(data);
  }

  var branches;

  if(group == "A"){
    branches = ["MECHANICAL","CIVIL","BIOTECH"];
  } else {
    branches = ["ECE","EE","CSE"];
  }

  for(var i=0; i<branches.length; i++){
    createTable(branches[i], data);
  }
}



// ================= CREATE TABLE =================
function createTable(branch, data){

  var container = document.getElementById("tablesContainer");

  var title = document.createElement("h3");
  title.innerHTML = branch + " Attendance";
  container.appendChild(title);

  var table = document.createElement("table");

  var today = new Date().toLocaleDateString();

  // ---- collect all dates ----
  var dates = [];

  for(var roll in data){
    if(data[roll].branch == branch){

      for(var d in data[roll].dates){

        if(dates.indexOf(d) == -1){
          dates.push(d);
        }

      }
    }
  }

  // add today if not present
  if(dates.indexOf(today) == -1){
    dates.push(today);
  }

  // ---- table header ----
  var header = table.insertRow();
  header.innerHTML = "<th>Name</th><th>Roll</th>";

  for(var i=0; i<dates.length; i++){
    header.innerHTML += "<th>" + dates[i] + "</th>";
  }

  // ---- table rows ----
  for(var i=0; i<students.length; i++){

    if(students[i].branch != branch) continue;

    var row = table.insertRow();

    row.insertCell(0).innerHTML = students[i].name;
    row.insertCell(1).innerHTML = students[i].roll;

    var roll = students[i].roll;

    for(var j=0; j<dates.length; j++){

      // today column → checkbox
      if(dates[j] == today){

        row.insertCell(row.cells.length).innerHTML =
          "<input type='checkbox' id='"+branch+"_"+i+"'>";

      } else {

        var value = "-";

        if(data[roll] && data[roll].dates[dates[j]]){
          value = data[roll].dates[dates[j]];
        }

        row.insertCell(row.cells.length).innerHTML = value;
      }
    }
  }

  container.appendChild(table);
}



// ================= SAVE ATTENDANCE =================
function saveAttendance(){

  var today = new Date().toLocaleDateString();

  var data = localStorage.getItem("att");

  if(data == null){
    data = {};
  } else {
    data = JSON.parse(data);
  }

  for(var i=0; i<students.length; i++){

    var id = students[i].branch + "_" + i;
    var cb = document.getElementById(id);

    if(cb == null) continue;

    var roll = students[i].roll;

    if(!data[roll]){
      data[roll] = {
        name: students[i].name,
        branch: students[i].branch,
        dates: {}
      };
    }

    if(cb.checked){
      data[roll].dates[today] = "P";
    } else {
      data[roll].dates[today] = "A";
    }
  }

  localStorage.setItem("att", JSON.stringify(data));

  alert("Attendance saved for " + today);

  showTables(); // refresh
}



// ================= DOWNLOAD =================
function downloadToday(){

  var today = new Date().toLocaleDateString();

  var text = "Attendance Sheet\n\n";

  text += "Professor: " + professor + "\n";
  text += "Subject: " + subject + "\n";
  text += "Group: " + group + "\n";
  text += "Date: " + today + "\n\n";

  var branches = ["MECHANICAL","CIVIL","BIOTECH"];

  for(var b=0; b<branches.length; b++){

    text += "----- " + branches[b] + " -----\n";

    for(var i=0; i<students.length; i++){

      if(students[i].branch != branches[b]) continue;

      var id = students[i].branch + "_" + i;
      var cb = document.getElementById(id);

      if(cb == null) continue;

      var status;

      if(cb.checked){
        status = "Present";
      } else {
        status = "Absent";
      }

      text += students[i].name + " - " + status + "\n";
    }

    text += "\n";
  }

  var w = window.open("");
  w.document.write("<pre>" + text + "</pre>");
  w.print();
}



// ================= RESET =================
function resetData(){

  var confirmReset = confirm("Reset full semester data?");

  if(confirmReset == true){
    localStorage.removeItem("att");
    alert("Data cleared");
    location.reload();
  }
}



// ================= LOGOUT =================
function logout(){
  location.reload();
}

