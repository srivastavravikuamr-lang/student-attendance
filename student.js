// STUDENTS DATA
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


// PROFESSORS
var professors = [
  {name: "Dr. MANJULA DAS mam", subject: "ENGINEERING MECHANICS"},
  {name: "Dr. SUBASIS BENARJEE sir", subject: "DSA"},
  {name: "Dr. SAM AHMED MAZUMDER sir", subject: "HUMANITIES"},
  {name: "Dr. SUPREME DAS sir", subject: "METALLURGY"}
];

var professor = "";
var subject = "";

// LOGIN
function login(){
  var u = document.getElementById("username").value.trim();
  var s = document.getElementById("subject").value.trim();
  var p = document.getElementById("password").value.trim();

  if(u === "" || s === "" || p === ""){
    alert("Please select all fields!");
    return;
  }

  if(p !== "1234"){
    alert("Wrong Password");
    return;
  }

  var valid = false;

  for(var i = 0; i < professors.length; i++){
    if(professors[i].name === u && professors[i].subject === s)
    {
      valid = true;
      professor = u;
      subject = s;
      break;
    }
  }

  if(valid){
    document.getElementById("box").style.display = "none";
    document.getElementById("att").style.display = "block";
    document.getElementById("profName").innerHTML =
      "Professor: " + professor + " | Subject: " + subject;

    show();
  } else {
    alert("Invalid Name or Subject!");
  }
}

// SHOW STUDENTS
function show(){
  var table = document.getElementById("mytable");
  table.innerHTML = "";

  var selectedBranch = document.getElementById("branchSelect").value;
  var header = table.insertRow();
  header.innerHTML = `
    <th>Name</th>
    <th>Roll</th>
    <th>Mark Absent</th>
  `;

  for(var i = 0; i < students.length; i++){
    if(students[i].group !== "A") continue;
    if(selectedBranch && students[i].branch !== selectedBranch) continue;

    let row = table.insertRow();

    row.insertCell(0).innerHTML = students[i].name;
    row.insertCell(1).innerHTML = students[i].roll;
    row.insertCell(2).innerHTML =
      `<input type="checkbox" id="c${i}">`;
  }
}

// DOWNLOAD
function download(){
  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();

  var presentList = "Present Students:\n\n";
  var absentList = "Absent Students:\n\n";
  var selectedBranch = document.getElementById("branchSelect").value;

  for(var i = 0; i < students.length; i++){

    if(students[i].group !== "A") continue;
    if(selectedBranch && students[i].branch !== selectedBranch) continue;

    var checkbox = document.getElementById("c" + i);

    if(checkbox && checkbox.checked){
      absentList += `${students[i].name} (${students[i].roll})\n`;
    }else {
      presentList += `${students[i].name} (${students[i].roll})\n`;
    }
}
  //final text to be inserted in the download files
  var finalText =
`Student Attendance Sheet

Professor: ${professor}
Subject: ${subject}
Date: ${date}
Time: ${time}

${presentList}

${absentList}
`;

  var w = window.open("", "", "width=600,height=600");
  w.document.write("<pre>" + finalText + "</pre>");
  w.document.close();
  w.print();
}

// LOGOUT
function logout(){
  document.getElementById("att").style.display = "none";
  document.getElementById("box").style.display = "block";

  document.getElementById("username").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("password").value = "";

  document.getElementById("mytable").innerHTML = "";
  document.getElementById("profName").innerHTML = "";

  professor = "";
  subject = "";
}
