// STUDENTS DATA
var students = [
  {name:"MOHIT CHOUDHARY", roll:"ME25B001"},
  {name:"AYUSHI ANAND", roll:"ME25B002"},
  {name:"KBIR V PANDEY", roll:"ME25B003"},
  {name:"PRIYAM PANDEY", roll:"ME25B004"},
  {name:"AKHAND UPADHYAY", roll:"ME25B005"},
  {name:"AKASAPU LOKESH DEVA RAJU", roll:"ME25B006"},
  {name:"SUPRAGYA TIWARI", roll:"ME25B007"},
  {name:"NIRANKAR MISHRA", roll:"ME25B008"},
  {name:"RAVI KUMAR SRIVASTAV", roll:"ME25B009"},
  {name:"TARUN SAINI", roll:"ME25B010"},
  {name:"AAYUSH", roll:"ME25B011"},
  {name:"SACHIN KUMAR", roll:"ME25B012"},
  {name:"SUMIT KUMAR", roll:"ME25B013"},
  {name:"DINKAR KUMAR YADAV", roll:"ME25B014"},
  {name:"SATAPATHI MANJULA", roll:"ME25B015"},
  {name:"ANKIT CHOUDHARY", roll:"ME25B016"},
  {name:"NITESH KUMAR", roll:"ME25B017"},
  {name:"VANSH KUMAR", roll:"ME25B018"},
  {name:"THADIKAMALLA GOWTHAM", roll:"ME25B019"},
  {name:"DIKSHA", roll:"ME25B020"},
  {name:"DIPANKAR SATNAMI", roll:"ME25B021"},
  {name:"KAUSHAL PURTY", roll:"ME25B022"},
  {name:"GOLU MEENA", roll:"ME25B023"},
  {name:"PUSHPENDRA KUMAR MEENA", roll:"ME25B024"},
  {name:"ARUN MEENA", roll:"ME25B025"},
  {name:"BHUKYA PRASAD", roll:"ME25B026"},
  {name:"BODA SRIKANTH", roll:"ME25B027"},
  {name:"PRABIN BORO", roll:"ME25B028"},
  {name:"BHUKYA SIDDHU", roll:"ME25B029"},
  {name:"AZMEERA CHARAN", roll:"ME25B030"},
  {name:"BHUKYA SRIKAR", roll:"ME25B031"},
  {name:"JARUPULA ASHOK", roll:"ME25B032"},
  {name:"BANOTHU GANESH", roll:"ME25B033"},
  {name:"BANOTH PRABHAS", roll:"ME25B034"},
  {name:"AMGOTH SIRIVALLY", roll:"ME25B035"},
  {name:"BOTO THAMA", roll:"ME25B036"},
  {name:"LOJUM NILLING LINGKING", roll:"ME25B037"},
  {name:"KRITISHRI RABHA", roll:"ME25B038"},
  {name:"RITVIKA R", roll:"ME25B039"},
  {name:"STUTI SHREE", roll:"ME24B024"}
];

// PROFESSORS
var professors = [
  {name: "MANJULA MAM", subject: "ENGINEERING MECHANICS"},
  {name: "SUBASIS BENARJEE", subject: "DSA"},
  {name: "AHMED SIR", subject: "HUMANITIES"},
  {name: "CORE SIR", subject: "METALLURGY"}
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
    if(
      professors[i].name === u &&
      professors[i].subject === s
    ){
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

  var header = table.insertRow();
  header.innerHTML = `
    <th>Name</th>
    <th>Roll</th>
    <th>Mark Absent</th>
  `;

  for(var i = 0; i < students.length; i++){
    var row = table.insertRow();

    row.insertCell(0).innerHTML = students[i].name;
    row.insertCell(1).innerHTML = students[i].roll;
    row.insertCell(2).innerHTML = `<input type="checkbox" id="c${i}">`;
  }
}

// DOWNLOAD
function download(){
  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();

  var presentList = "Present Students:\n\n";
  var absentList = "Absent Students:\n\n";

  for(var i = 0; i < students.length; i++){
    var checkbox = document.getElementById("c" + i);

    if(checkbox && checkbox.checked){
      absentList += `${students[i].name} (Roll: ${students[i].roll})\n`;
    } else {
      presentList += `${students[i].name} (Roll: ${students[i].roll})\n`;
    }
  }

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
