
function showProfessor(){
  document.getElementById("loginChoice").style.display="none";
  document.getElementById("professorLogin").style.display="block";
  loadProfessorLoginOptions();
}
function showCoordinator(){
  document.getElementById("loginChoice").style.display="none";
  document.getElementById("coordinatorLogin").style.display="block";
}
function goHome(){
  document.getElementById("loginChoice").style.display="block";
  document.getElementById("professorLogin").style.display="none";
  document.getElementById("coordinatorLogin").style.display="none";
}
var defaultStudents = [
  // ================= MECH =================
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
  {name:"PUSHPENDRA KUMAR MEENA", roll:"ME25B024", group:"A", branch:"MECHANICAL"},

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
];
var defaultProfessors = [
  {name:"MANJULA MAM", subject:"ENGINEERING MECHANICS"},
  {name:"SUBASIS BENARJEE", subject:"DSA"},
  {name:"AHMED SIR", subject:"HUMANITIES"},
  {name:"CORE SIR", subject:"METALLURGY"}
];
var students=[];
var professors=[];
var professor="";
var subject="";
var group="";
function getData(key,fallback){
  var data=localStorage.getItem(key);
  if(data==null){ return fallback; }
  return JSON.parse(data);
}
function saveData(key,value){ localStorage.setItem(key,JSON.stringify(value)); }
function setupData(){
  students=getData("students",defaultStudents);
  professors=getData("professors",defaultProfessors);
  for(var i=0;i<professors.length;i++){
    if(!professors[i].password){ professors[i].password="1234"; }
  }
  saveData("students",students);
  saveData("professors",professors);
  loadProfessorLoginOptions();
  fillAttendanceFilters();
}
function loadProfessorLoginOptions(){
  var username=document.getElementById("username");
  var subjectBox=document.getElementById("subject");
  if(!username || !subjectBox){ return; }
  username.innerHTML="<option value=''>Select Professor</option>";
  subjectBox.innerHTML="<option value=''>Select Subject</option>";
  for(var i=0;i<professors.length;i++){
    username.innerHTML += "<option value='"+professors[i].name+"'>"+professors[i].name+"</option>";
    subjectBox.innerHTML += "<option value='"+professors[i].subject+"'>"+professors[i].subject+"</option>";
  }
}
function getAttendance(){ return getData("att",{}); }
function saveAttendanceData(data){ localStorage.setItem("att",JSON.stringify(data)); }
function getToday(){ return new Date().toLocaleDateString(); }
function inputDateToKey(value){
  if(value==""){ return getToday(); }
  return new Date(value+"T00:00:00").toLocaleDateString();
}
function getBranches(){
  var branches=[];
  for(var i=0;i<students.length;i++){
    if(branches.indexOf(students[i].branch)==-1){ branches.push(students[i].branch); }
  }
  return branches;
}
function getProfessorBranches(){
  if(group=="A"){ return ["MECHANICAL","CIVIL","BIOTECH"]; }
  return ["ECE","EE","CSE"];
}
function coordinatorLogin(){
  var user=document.getElementById("coordinatorUser").value;
  var pass=document.getElementById("coordinatorPassword").value;
  if(user=="admin" && pass=="admin123"){
    document.getElementById("box").style.display="none";
    document.getElementById("coordinatorDashboard").style.display="block";
    document.getElementById("profName").style.display="none";
    showAdminSection("dashboard");
  } else { alert("Invalid Coordinator Login"); }
}
function login(){
  var u=document.getElementById("username").value;
  var s=document.getElementById("subject").value;
  var g=document.getElementById("group").value;
  var p=document.getElementById("password").value;
  if(u=="" || s=="" || g=="" || p==""){ alert("Please fill all fields"); return; }
  var found=false;
  for(var i=0;i<professors.length;i++){
    if(professors[i].name==u && professors[i].subject==s && professors[i].password==p){
      found=true; professor=u; subject=s; group=g;
    }
  }
  if(found==false){ alert("Wrong professor, subject, or password"); return; }
  document.getElementById("box").style.display="none";
  document.getElementById("att").style.display="block";
  document.getElementById("logoutBtn").style.display="block";
  document.getElementById("profName").style.display="block";
  document.getElementById("professorContext").innerHTML=professor+" | "+subject+" | Group "+group;
  document.getElementById("profName").innerHTML="Professor: "+professor;
  showTables();
}
function showTables(){
  document.getElementById("back").style.display="none";
  var container=document.getElementById("tablesContainer");
  container.innerHTML="";
  var data=getAttendance();
  var branches=getProfessorBranches();
  for(var i=0;i<branches.length;i++){ createTable(branches[i],data); }
}
function createTable(branch,data){
  var container=document.getElementById("tablesContainer");
  var title=document.createElement("h3");
  title.innerHTML=branch+" Attendance";
  container.appendChild(title);
  var table=document.createElement("table");
  var today=getToday();
  var dates=[];
  for(var roll in data){
    if(data[roll].branch==branch && data[roll].dates){
      for(var d in data[roll].dates){ if(dates.indexOf(d)==-1){ dates.push(d); } }
    }
  }
  if(dates.indexOf(today)==-1){ dates.push(today); }
  var header=table.insertRow();
  header.innerHTML="<th>Name</th><th>Roll</th>";
  for(var i=0;i<dates.length;i++){ header.innerHTML += "<th>"+dates[i]+"</th>"; }
  for(var j=0;j<students.length;j++){
    if(students[j].branch!=branch || students[j].group!=group){ continue; }
    var row=table.insertRow();
    row.insertCell(0).innerHTML=students[j].name;
    row.insertCell(1).innerHTML=students[j].roll;
    for(var k=0;k<dates.length;k++){
      if(dates[k]==today){
        var checked="";
        if(data[students[j].roll] && data[students[j].roll].dates && data[students[j].roll].dates[today]=="P"){ checked=" checked"; }
        row.insertCell(row.cells.length).innerHTML="<input type='checkbox' id='"+students[j].branch+"_"+j+"'"+checked+">";
      } else {
        var value="-";
        if(data[students[j].roll] && data[students[j].roll].dates && data[students[j].roll].dates[dates[k]]){ value=data[students[j].roll].dates[dates[k]]; }
        row.insertCell(row.cells.length).innerHTML=value;
      }
    }
  }
  container.appendChild(table);
}
function saveAttendance(){
  var today=getToday();
  var data=getAttendance();
  for(var i=0;i<students.length;i++){
    var id=students[i].branch+"_"+i;
    var cb=document.getElementById(id);
    if(cb==null){ continue; }
    var roll=students[i].roll;
    if(!data[roll]){ data[roll]={name:students[i].name,branch:students[i].branch,group:students[i].group,dates:{}}; }
    data[roll].name=students[i].name;
    data[roll].branch=students[i].branch;
    data[roll].group=students[i].group;
    data[roll].dates[today]=cb.checked ? "P" : "A";
  }
  saveAttendanceData(data);
  alert("Attendance saved for "+today);
  showTables();
}
function downloadToday(){
  var today=getToday();
  var text="Attendance Sheet\n\nProfessor: "+professor+"\nSubject: "+subject+"\nGroup: "+group+"\nDate: "+today+"\n\n";
  var branches=getProfessorBranches();
  for(var b=0;b<branches.length;b++){
    text += "----- "+branches[b]+" -----\n";
    for(var i=0;i<students.length;i++){
      if(students[i].branch!=branches[b] || students[i].group!=group){ continue; }
      var cb=document.getElementById(students[i].branch+"_"+i);
      if(cb==null){ continue; }
      text += students[i].name+" - "+(cb.checked ? "Present" : "Absent")+"\n";
    }
    text += "\n";
  }
  var w=window.open("");
  w.document.write("<pre>"+text+"</pre>");
  w.print();
}
function viewSemester(){
  document.getElementById("back").style.display="inline-block";
  var container=document.getElementById("tablesContainer");
  container.innerHTML="<h2>Semester Attendance Report</h2>";
  container.appendChild(makeReportTable(false));
}
function back(){ showTables(); }
function logout(){ location.reload(); }
function showAdminSection(name){
  var sections=document.getElementsByClassName("adminSection");
  for(var i=0;i<sections.length;i++){ sections[i].style.display="none"; }
  document.getElementById("admin-"+name).style.display="block";
  var nav=document.querySelectorAll(".sidebar button");
  var names=["dashboard","students","attendance","professors","reports","settings"];
  for(var j=0;j<nav.length;j++){ nav[j].className=""; }
  for(var k=0;k<names.length;k++){ if(names[k]==name){ nav[k].className="active"; } }
  if(name=="dashboard"){ renderDashboard(); }
  if(name=="students"){ renderStudents(); }
  if(name=="attendance"){ renderAttendanceEditor(); }
  if(name=="professors"){ renderProfessors(); }
  if(name=="reports"){ renderSemesterReport(); }
}
function renderDashboard(){
  var data=getAttendance();
  var today=getToday();
  var totalPresent=0,totalAbsent=0,allPresent=0,allAbsent=0,lowCount=0;
  for(var i=0;i<students.length;i++){
    var counts=getStudentCounts(students[i].roll);
    allPresent += counts.present;
    allAbsent += counts.absent;
    if(counts.total>0 && counts.percent<75){ lowCount++; }
    if(data[students[i].roll] && data[students[i].roll].dates && data[students[i].roll].dates[today]=="P"){ totalPresent++; }
    if(data[students[i].roll] && data[students[i].roll].dates && data[students[i].roll].dates[today]=="A"){ totalAbsent++; }
  }
  var todayPercent=(totalPresent+totalAbsent)>0 ? ((totalPresent/(totalPresent+totalAbsent))*100).toFixed(2) : "0.00";
  var branches=getBranches();
  document.getElementById("statCards").innerHTML=makeStatCard("ST","Total Students",students.length)+makeStatCard("PR","Total Professors",professors.length)+makeStatCard("%","Today's Attendance",todayPercent+"%")+makeStatCard("75","Students Below 75%",lowCount)+makeStatCard("BR","Total Branches",branches.length);
  var overall=(allPresent+allAbsent)>0 ? ((allPresent/(allPresent+allAbsent))*100).toFixed(2) : "0.00";
  document.getElementById("todayStats").innerHTML="<p>Total Present Today: <b>"+totalPresent+"</b></p><p>Total Absent Today: <b>"+totalAbsent+"</b></p><p>Overall Attendance: <b>"+overall+"%</b></p>";
  var html="<table><tr><th>Branch</th><th>Attendance %</th></tr>";
  for(var b=0;b<branches.length;b++){ html += "<tr><td>"+branches[b]+"</td><td>"+getBranchPercent(branches[b])+"%</td></tr>"; }
  document.getElementById("branchStats").innerHTML=html+"</table>";
}
function makeStatCard(icon,label,value){ return "<div class='statCard'><div class='statIcon'>"+icon+"</div><p>"+label+"</p><h2>"+value+"</h2></div>"; }
function getStudentCounts(roll){
  var data=getAttendance();
  var present=0,absent=0;
  if(data[roll] && data[roll].dates){
    for(var d in data[roll].dates){ if(data[roll].dates[d]=="P"){ present++; } if(data[roll].dates[d]=="A"){ absent++; } }
  }
  var total=present+absent;
  var percent=total>0 ? (present/total)*100 : 0;
  return {present:present,absent:absent,total:total,percent:percent};
}
function getBranchPercent(branch){
  var present=0,absent=0;
  for(var i=0;i<students.length;i++){
    if(students[i].branch==branch){ var c=getStudentCounts(students[i].roll); present += c.present; absent += c.absent; }
  }
  return (present+absent)>0 ? ((present/(present+absent))*100).toFixed(2) : "0.00";
}
function renderStudents(){
  var q=document.getElementById("studentSearch").value.toLowerCase();
  var html="<table><tr><th>Name</th><th>Roll</th><th>Branch</th><th>Group</th><th>Actions</th></tr>";
  for(var i=0;i<students.length;i++){
    var text=(students[i].name+" "+students[i].roll+" "+students[i].branch).toLowerCase();
    if(q!="" && text.indexOf(q)==-1){ continue; }
    html += "<tr><td>"+students[i].name+"</td><td>"+students[i].roll+"</td><td>"+students[i].branch+"</td><td>"+students[i].group+"</td><td class='miniActions'><button onclick='editStudent("+i+")'>Edit</button><button class='dangerBtn' onclick='deleteStudent("+i+")'>Delete</button></td></tr>";
  }
  document.getElementById("studentsTable").innerHTML=html+"</table>";
}
function saveStudent(){
  var name=document.getElementById("studentName").value;
  var roll=document.getElementById("studentRoll").value;
  var branch=document.getElementById("studentBranch").value;
  var groupValue=document.getElementById("studentGroup").value;
  var oldRoll=document.getElementById("studentEditRoll").value;
  if(name=="" || roll=="" || branch=="" || groupValue==""){ alert("Please fill all student fields"); return; }
  var index=-1;
  for(var i=0;i<students.length;i++){ if(students[i].roll==oldRoll){ index=i; } }
  if(index==-1){ students.push({name:name,roll:roll,branch:branch,group:groupValue}); }
  else { students[index]={name:name,roll:roll,branch:branch,group:groupValue}; updateAttendanceStudent(oldRoll,students[index]); }
  saveData("students",students);
  clearStudentForm(); fillAttendanceFilters(); renderStudents();
}
function editStudent(index){
  document.getElementById("studentFormTitle").innerHTML="Edit Student";
  document.getElementById("studentEditRoll").value=students[index].roll;
  document.getElementById("studentName").value=students[index].name;
  document.getElementById("studentRoll").value=students[index].roll;
  document.getElementById("studentBranch").value=students[index].branch;
  document.getElementById("studentGroup").value=students[index].group;
}
function deleteStudent(index){ if(confirm("Delete this student?")){ students.splice(index,1); saveData("students",students); fillAttendanceFilters(); renderStudents(); } }
function clearStudentForm(){
  document.getElementById("studentFormTitle").innerHTML="Add Student";
  document.getElementById("studentEditRoll").value="";
  document.getElementById("studentName").value="";
  document.getElementById("studentRoll").value="";
  document.getElementById("studentBranch").value="";
  document.getElementById("studentGroup").value="";
}
function updateAttendanceStudent(oldRoll,student){
  var data=getAttendance();
  if(data[oldRoll]){
    data[student.roll]=data[oldRoll];
    if(oldRoll!=student.roll){ delete data[oldRoll]; }
    data[student.roll].name=student.name;
    data[student.roll].branch=student.branch;
    data[student.roll].group=student.group;
    saveAttendanceData(data);
  }
}
function renderProfessors(){
  var html="<table><tr><th>Name</th><th>Subject</th><th>Password</th><th>Actions</th></tr>";
  for(var i=0;i<professors.length;i++){
    html += "<tr><td>"+professors[i].name+"</td><td>"+professors[i].subject+"</td><td>"+professors[i].password+"</td><td class='miniActions'><button onclick='editProfessor("+i+")'>Edit</button><button class='dangerBtn' onclick='deleteProfessor("+i+")'>Delete</button></td></tr>";
  }
  document.getElementById("professorsTable").innerHTML=html+"</table>";
}
function saveProfessor(){
  var name=document.getElementById("professorNameInput").value;
  var sub=document.getElementById("professorSubjectInput").value;
  var pass=document.getElementById("professorPasswordInput").value;
  var editIndex=document.getElementById("professorEditIndex").value;
  if(name=="" || sub=="" || pass==""){ alert("Please fill all professor fields"); return; }
  if(editIndex==""){ professors.push({name:name,subject:sub,password:pass}); }
  else { professors[parseInt(editIndex)]={name:name,subject:sub,password:pass}; }
  saveData("professors",professors);
  clearProfessorForm(); loadProfessorLoginOptions(); renderProfessors();
}
function editProfessor(index){
  document.getElementById("professorFormTitle").innerHTML="Edit Professor";
  document.getElementById("professorEditIndex").value=index;
  document.getElementById("professorNameInput").value=professors[index].name;
  document.getElementById("professorSubjectInput").value=professors[index].subject;
  document.getElementById("professorPasswordInput").value=professors[index].password;
}
function deleteProfessor(index){ if(confirm("Delete this professor?")){ professors.splice(index,1); saveData("professors",professors); loadProfessorLoginOptions(); renderProfessors(); } }
function clearProfessorForm(){
  document.getElementById("professorFormTitle").innerHTML="Add Professor";
  document.getElementById("professorEditIndex").value="";
  document.getElementById("professorNameInput").value="";
  document.getElementById("professorSubjectInput").value="";
  document.getElementById("professorPasswordInput").value="";
}
function fillAttendanceFilters(){
  var box=document.getElementById("attendanceBranch");
  if(!box){ return; }
  var branches=getBranches();
  box.innerHTML="<option value=''>All Branches</option>";
  for(var i=0;i<branches.length;i++){ box.innerHTML += "<option value='"+branches[i]+"'>"+branches[i]+"</option>"; }
}
function renderAttendanceEditor(){
  var dateKey=inputDateToKey(document.getElementById("attendanceDate").value);
  var branchFilter=document.getElementById("attendanceBranch").value;
  var groupFilter=document.getElementById("attendanceGroup").value;
  var data=getAttendance();
  var html="<table><tr><th>Name</th><th>Roll</th><th>Branch</th><th>Group</th><th>Status</th></tr>";
  for(var i=0;i<students.length;i++){
    if(branchFilter!="" && students[i].branch!=branchFilter){ continue; }
    if(groupFilter!="" && students[i].group!=groupFilter){ continue; }
    var status="";
    if(data[students[i].roll] && data[students[i].roll].dates && data[students[i].roll].dates[dateKey]){ status=data[students[i].roll].dates[dateKey]; }
    html += "<tr><td>"+students[i].name+"</td><td>"+students[i].roll+"</td><td>"+students[i].branch+"</td><td>"+students[i].group+"</td><td><select onchange='changeAttendance(\""+students[i].roll+"\", this.value)'><option value=''>-</option><option value='P'"+(status=="P" ? " selected" : "")+">Present</option><option value='A'"+(status=="A" ? " selected" : "")+">Absent</option></select></td></tr>";
  }
  document.getElementById("attendanceEditor").innerHTML=html+"</table>";
}
function changeAttendance(roll,value){
  var dateKey=inputDateToKey(document.getElementById("attendanceDate").value);
  var data=getAttendance();
  var student=findStudent(roll);
  if(!data[roll]){ data[roll]={name:student.name,branch:student.branch,group:student.group,dates:{}}; }
  if(value==""){ delete data[roll].dates[dateKey]; }
  else { data[roll].dates[dateKey]=value; }
  saveAttendanceData(data);
}
function markClass(value){
  var dateKey=inputDateToKey(document.getElementById("attendanceDate").value);
  var branchFilter=document.getElementById("attendanceBranch").value;
  var groupFilter=document.getElementById("attendanceGroup").value;
  var data=getAttendance();
  for(var i=0;i<students.length;i++){
    if(branchFilter!="" && students[i].branch!=branchFilter){ continue; }
    if(groupFilter!="" && students[i].group!=groupFilter){ continue; }
    if(!data[students[i].roll]){ data[students[i].roll]={name:students[i].name,branch:students[i].branch,group:students[i].group,dates:{}}; }
    data[students[i].roll].dates[dateKey]=value;
  }
  saveAttendanceData(data);
  renderAttendanceEditor();
}
function deleteAttendanceDay(){
  if(!confirm("Delete attendance for this date?")){ return; }
  var dateKey=inputDateToKey(document.getElementById("attendanceDate").value);
  var data=getAttendance();
  for(var roll in data){ if(data[roll].dates && data[roll].dates[dateKey]){ delete data[roll].dates[dateKey]; } }
  saveAttendanceData(data);
  renderAttendanceEditor();
}
function findStudent(roll){
  for(var i=0;i<students.length;i++){ if(students[i].roll==roll){ return students[i]; } }
  return {name:"",branch:"",group:""};
}
function makeReportTable(lowOnly){
  var table=document.createElement("table");
  var header=table.insertRow();
  header.innerHTML="<th>Name</th><th>Roll</th><th>Present</th><th>Absent</th><th>Percentage</th>";
  for(var i=0;i<students.length;i++){
    var counts=getStudentCounts(students[i].roll);
    if(lowOnly==true && (counts.total==0 || counts.percent>=75)){ continue; }
    var row=table.insertRow();
    row.insertCell(0).innerHTML=students[i].name;
    row.insertCell(1).innerHTML=students[i].roll;
    row.insertCell(2).innerHTML=counts.present;
    row.insertCell(3).innerHTML=counts.absent;
    row.insertCell(4).innerHTML="<span class='"+(counts.percent<75 ? "badgeLow" : "badgeGood")+"'>"+counts.percent.toFixed(2)+"%</span>";
  }
  return table;
}
function renderSemesterReport(){ var area=document.getElementById("reportsArea"); area.innerHTML="<h3>Semester Report</h3>"; area.appendChild(makeReportTable(false)); }
function renderLowAttendanceReport(){ var area=document.getElementById("reportsArea"); area.innerHTML="<h3>Low Attendance Report</h3>"; area.appendChild(makeReportTable(true)); }
function exportSemesterReport(){ downloadReport("complete-semester-report.txt",""); }
function exportStudentReport(){ var roll=prompt("Enter student roll number"); if(roll==null || roll==""){ return; } downloadReport("student-report-"+roll+".txt",roll); }
function downloadReport(filename,singleRoll){
  var text="Name\tRoll\tPresent\tAbsent\tPercentage\n";
  for(var i=0;i<students.length;i++){
    if(singleRoll!="" && students[i].roll!=singleRoll){ continue; }
    var counts=getStudentCounts(students[i].roll);
    text += students[i].name+"\t"+students[i].roll+"\t"+counts.present+"\t"+counts.absent+"\t"+counts.percent.toFixed(2)+"%\n";
  }
  var blob=new Blob([text],{type:"text/plain"});
  var link=document.createElement("a");
  link.href=URL.createObjectURL(blob);
  link.download=filename;
  link.click();
}
function resetData(){
  if(confirm("Reset full semester attendance data?")){
    localStorage.removeItem("att");
    alert("Semester attendance cleared");
    renderDashboard();
    renderAttendanceEditor();
  }
}
setupData();
