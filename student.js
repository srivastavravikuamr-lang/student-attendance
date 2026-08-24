
function showProfessor(){
  document.getElementById("loginChoice").style.display="none";
  document.getElementById("professorLogin").style.display="block";
  loadProfessorLoginOptions();
}
function showCoordinator(){
  document.getElementById("loginChoice").style.display="none";
  document.getElementById("coordinatorLogin").style.display="block";
}
function showStudentView(){
  document.getElementById("loginChoice").style.display="none";
  document.getElementById("studentLogin").style.display="block";
}
function goHome(){
  document.getElementById("loginChoice").style.display="block";
  document.getElementById("professorLogin").style.display="none";
  document.getElementById("coordinatorLogin").style.display="none";
  document.getElementById("studentLogin").style.display="none";
  document.getElementById("studentDashboard").style.display="none";
  document.getElementById("box").style.display="block";
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
  {id:"prof-manjula", name:"MANJULA MAM", email:"manjula@example.com", department:"MECHANICAL", subject:"ENGINEERING MECHANICS", password:"1234", authorizedGroups:["A","B"], status:"Offline", lastLogin:"", lastLogout:"", selectedGroup:""},
  {name:"SUBASIS BENARJEE", subject:"DSA"},
  {name:"AHMED SIR", subject:"HUMANITIES"},
  {name:"CORE SIR", subject:"METALLURGY"}
];
var students=[];
var professors=[];
var professor="";
var subject="";
var group="";
var activeProfessorId="";
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
    if(!professors[i].id){ professors[i].id="PROF"+("00"+(i+1)).slice(-3); }
    if(!professors[i].password || professors[i].password=="1234"){ professors[i].password=professors[i].id+"@123"; }
    if(!professors[i].email){ professors[i].email=""; }
    if(!professors[i].department){ professors[i].department=professors[i].name=="MANJULA MAM" ? "MECHANICAL" : ""; }
    if(!professors[i].authorizedGroups){
      professors[i].authorizedGroups=professors[i].group ? [professors[i].group] : ["A","B"];
    }
    if(!professors[i].status){ professors[i].status="Offline"; }
    if(!professors[i].lastLogin){ professors[i].lastLogin=""; }
    if(!professors[i].lastLogout){ professors[i].lastLogout=""; }
    if(!professors[i].selectedGroup){ professors[i].selectedGroup=""; }
  }
  saveData("students",students);
  saveData("professors",professors);
  loadProfessorLoginOptions();
  fillAttendanceFilters();
}
function loadProfessorLoginOptions(){
  var username=document.getElementById("username");
  if(username){ username.value=""; }
}
function getAttendance(){ return getData("att",{}); }
function saveAttendanceData(data){ localStorage.setItem("att",JSON.stringify(data)); }
function getAttendanceDetails(){ return getData("attendanceDetails",{}); }
function saveAttendanceDetails(data){ saveData("attendanceDetails",data); }
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
  var current=getCurrentProfessor();
  return current && current.department ? [current.department] : [];
}
function branchesMatch(firstBranch,secondBranch){
  return String(firstBranch || "").trim().toLowerCase()==String(secondBranch || "").trim().toLowerCase();
}
function getCurrentProfessor(){
  for(var i=0;i<professors.length;i++){
    if(professors[i].id==activeProfessorId){ return professors[i]; }
  }
  return null;
}
function saveProfessors(){ saveData("professors",professors); }
function getDateTime(){ return new Date().toLocaleString(); }
function isProfessorAccessAllowed(branch){
  var current=getCurrentProfessor();
  return current && current.department==branch && current.selectedGroup && current.selectedGroup==group;
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
  var u=document.getElementById("username").value.trim();
  var p=document.getElementById("password").value;
  if(u=="" || p==""){ alert("Please enter your Professor ID and password."); return; }
  var found=null;
  for(var i=0;i<professors.length;i++){
    if(String(professors[i].id).toLowerCase()==u.toLowerCase() && professors[i].password==p){
      found=professors[i]; break;
    }
  }
  if(!found){ alert("Invalid professor credentials."); return; }
  if(found.disabled){ alert("Your account is currently disabled. Contact the Coordinator."); return; }
  if(!found.department || !found.subject){ alert("Your account needs a branch and subject assignment. Contact the Coordinator."); return; }
  activeProfessorId=found.id;
  found.status="Online";
  found.lastLogin=getDateTime();
  found.selectedGroup="";
  saveProfessors();
  professor=found.name; subject=found.subject; group="";
  showGroupSelection();
}
function showGroupSelection(){
  var current=getCurrentProfessor();
  if(!current){ alert("Professor account not found."); return logout(); }
  document.getElementById("professorLogin").style.display="none";
  document.getElementById("groupSelection").style.display="block";
  document.getElementById("welcomeProfessor").innerHTML=current.name;
  document.getElementById("assignedBranch").innerHTML=current.department;
  document.getElementById("assignedSubject").innerHTML=current.subject;
  var buttons="";
  for(var i=0;i<current.authorizedGroups.length;i++){
    var selected=current.authorizedGroups[i];
    buttons+="<button onclick=\"chooseGroup('"+selected+"')\">Group "+selected+"</button>";
  }
  document.getElementById("groupButtons").innerHTML=buttons || "<p>No groups are authorized for this account.</p>";
}
function chooseGroup(selectedGroup){
  var current=getCurrentProfessor();
  if(!current){ alert("Professor account not found."); return logout(); }
  if(current.authorizedGroups.indexOf(selectedGroup)==-1){ alert("You are not authorized for this group."); return; }
  current.selectedGroup=selectedGroup;
  saveProfessors();
  group=selectedGroup;
  document.getElementById("groupSelection").style.display="none";
  document.getElementById("box").style.display="none";
  document.getElementById("att").style.display="block";
  document.getElementById("logoutBtn").style.display="block";
  document.getElementById("profName").style.display="block";
  document.getElementById("professorContext").innerHTML=current.name+" | "+current.department+" | "+current.subject+" | Group "+group;
  document.getElementById("profName").innerHTML="Professor: "+current.name;
  showTables();
}
function showTables(){
  var current=getCurrentProfessor();
  if(!current){ alert("Professor account not found."); return logout(); }
  if(!current.selectedGroup){ alert("Please select a group."); return showGroupSelection(); }
  document.getElementById("back").style.display="none";
  var container=document.getElementById("tablesContainer");
  container.innerHTML="";
  var data=getAttendance();
  createTable(current.department,data);
}
function createTable(branch,data){
  if(!isProfessorAccessAllowed(branch)){ return; }
  var container=document.getElementById("tablesContainer");
  var title=document.createElement("h3");
  title.innerHTML=branch+" Attendance";
  container.appendChild(title);
  var table=document.createElement("table");
  var today=getToday();
  var dates=[];
  for(var roll in data){
    if(branchesMatch(data[roll].branch,branch) && data[roll].dates){
      for(var d in data[roll].dates){ if(dates.indexOf(d)==-1){ dates.push(d); } }
    }
  }
  if(dates.indexOf(today)==-1){ dates.push(today); }
  var header=table.insertRow();
  header.innerHTML="<th>Name</th><th>Roll</th>";
  for(var i=0;i<dates.length;i++){ header.innerHTML += "<th>"+dates[i]+"</th>"; }
  var studentCount=0;
  for(var j=0;j<students.length;j++){
    if(!branchesMatch(students[j].branch,branch) || students[j].group!=group){ continue; }
    studentCount++;
    var row=table.insertRow();
    row.insertCell(0).innerHTML=students[j].name;
    row.insertCell(1).innerHTML=students[j].roll;
    for(var k=0;k<dates.length;k++){
      if(dates[k]==today){
        var checked="";
        if(data[students[j].roll] && data[students[j].roll].dates && data[students[j].roll].dates[today]=="P"){ checked=" checked"; }
        row.insertCell(row.cells.length).innerHTML="<input type='checkbox' id='attendance_"+students[j].roll+"'"+checked+">";
      } else {
        var value="-";
        if(data[students[j].roll] && data[students[j].roll].dates && data[students[j].roll].dates[dates[k]]){ value=data[students[j].roll].dates[dates[k]]; }
        row.insertCell(row.cells.length).innerHTML=value;
      }
    }
  }
  if(studentCount==0){ container.innerHTML+="<p>No students found for this group.</p>"; }
  container.appendChild(table);
}
function saveAttendance(){
  var current=getCurrentProfessor();
  if(!current || !current.selectedGroup){ alert("Please select a group."); return; }
  var today=getToday();
  var data=getAttendance();
  var details=getAttendanceDetails();
  for(var i=0;i<students.length;i++){
    if(!branchesMatch(students[i].branch,current.department) || students[i].group!=current.selectedGroup){ continue; }
    var id="attendance_"+students[i].roll;
    var cb=document.getElementById(id);
    if(cb==null){ continue; }
    var roll=students[i].roll;
    if(!data[roll]){ data[roll]={name:students[i].name,branch:students[i].branch,group:students[i].group,dates:{}}; }
    data[roll].name=students[i].name;
    data[roll].branch=students[i].branch;
    data[roll].group=students[i].group;
    data[roll].dates[today]=cb.checked ? "P" : "A";
    if(!details[roll]){ details[roll]={}; }
    details[roll][today]={date:today,student:students[i].name,roll:roll,branch:students[i].branch,group:students[i].group,subject:current.subject,professorId:current.id,professorName:current.name,status:data[roll].dates[today]};
  }
  saveAttendanceData(data);
  saveAttendanceDetails(details);
  alert("Attendance saved for "+today);
  showTables();
}
function downloadToday(){
  var current=getCurrentProfessor();
  if(!current || !current.selectedGroup){ alert("Please select a group."); return; }
  var today=getToday();
  var text="Attendance Sheet\n\nProfessor: "+current.name+"\nBranch: "+current.department+"\nSubject: "+current.subject+"\nGroup: "+current.selectedGroup+"\nDate: "+today+"\n\n";
  for(var i=0;i<students.length;i++){
    if(!branchesMatch(students[i].branch,current.department) || students[i].group!=current.selectedGroup){ continue; }
    var cb=document.getElementById("attendance_"+students[i].roll);
    if(cb==null){ continue; }
    text += students[i].name+" - "+(cb.checked ? "Present" : "Absent")+"\n";
  }
  var w=window.open("");
  w.document.write("<pre>"+text+"</pre>");
  w.print();
}
function viewSemester(){
  var current=getCurrentProfessor();
  if(!current){ alert("Professor account not found."); return logout(); }
  if(!current.selectedGroup){ alert("Please select a group."); return showGroupSelection(); }
  document.getElementById("back").style.display="inline-block";
  var container=document.getElementById("tablesContainer");
  container.innerHTML="<h2>Semester Attendance Report</h2>";
  container.appendChild(makeProfessorReportTable(current.department,current.selectedGroup));
}
function back(){ showTables(); }
function logout(){
  var current=getCurrentProfessor();
  if(current){
    current.status="Offline";
    current.lastLogout=getDateTime();
    current.selectedGroup="";
    saveProfessors();
  }
  activeProfessorId="";
  location.reload();
}
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
  var html="<table><tr><th>Professor ID</th><th>Name</th><th>Email</th><th>Branch</th><th>Subject</th><th>Authorized Groups</th><th>Password</th><th>Actions</th></tr>";
  for(var i=0;i<professors.length;i++){
    html += "<tr><td>"+professors[i].id+"</td><td>"+professors[i].name+"</td><td>"+(professors[i].email || "Not set")+"</td><td>"+(professors[i].department || "Not set")+"</td><td>"+professors[i].subject+"</td><td>"+professors[i].authorizedGroups.join(", ")+"</td><td>"+professors[i].password+"</td><td class='miniActions'><button onclick='editProfessor("+i+")'>Edit</button><button class='dangerBtn' onclick='deleteProfessor("+i+")'>Delete</button></td></tr>";
  }
  document.getElementById("professorsTable").innerHTML=html+"</table>";
  renderLoginActivity();
}
function getSubjectCounts(roll,selectedSubject){
  var details=getAttendanceDetails();
  var present=0,absent=0;
  if(details[roll]){
    for(var dateKey in details[roll]){
      var record=details[roll][dateKey];
      if(selectedSubject!="" && record.subject!=selectedSubject){ continue; }
      if(record.status=="P"){ present++; }
      if(record.status=="A"){ absent++; }
    }
  }
  if((Object.keys(details).length==0 || !details[roll]) && selectedSubject==""){ return getStudentCounts(roll); }
  var total=present+absent;
  return {present:present,absent:absent,total:total,percent:total>0 ? (present/total)*100 : 0};
}
function fillStudentViewFilters(){
  var branches=getBranches(), branchBox=document.getElementById("studentViewBranch"), subjectBox=document.getElementById("studentViewSubject");
  if(!branchBox || !subjectBox){ return; }
  branchBox.innerHTML="<option value=''>All Branches</option>";
  for(var i=0;i<branches.length;i++){ branchBox.innerHTML+="<option value='"+branches[i]+"'>"+branches[i]+"</option>"; }
  var subjects=[], details=getAttendanceDetails();
  for(var roll in details){ for(var dateKey in details[roll]){ var item=details[roll][dateKey]; if(item.subject && subjects.indexOf(item.subject)==-1){ subjects.push(item.subject); } } }
  subjectBox.innerHTML="<option value=''>All Subjects</option>";
  for(var j=0;j<subjects.length;j++){ subjectBox.innerHTML+="<option value='"+subjects[j]+"'>"+subjects[j]+"</option>"; }
}
function openStudentView(){
  var roll=document.getElementById("studentViewRoll").value.trim();
  document.getElementById("box").style.display="none";
  document.getElementById("studentDashboard").style.display="block";
  fillStudentViewFilters();
  document.getElementById("studentViewSearch").value=roll;
  renderStudentAttendance();
}
function renderStudentAttendance(){
  var query=document.getElementById("studentViewSearch").value.trim().toLowerCase();
  var branch=document.getElementById("studentViewBranch").value;
  var selectedGroup=document.getElementById("studentViewGroup").value;
  var selectedSubject=document.getElementById("studentViewSubject").value;
  var personal=document.getElementById("studentPersonalAttendance"), html="<table><tr><th>Roll No</th><th>Student Name</th><th>Branch</th><th>Group</th><th>Classes Attended</th><th>Total Classes</th><th>Attendance</th><th>Status</th></tr>", matches=[];
  for(var i=0;i<students.length;i++){
    var item=students[i], text=(item.roll+" "+item.name).toLowerCase();
    if(query!="" && text.indexOf(query)==-1){ continue; }
    if(branch!="" && item.branch!=branch){ continue; }
    if(selectedGroup!="" && item.group!=selectedGroup){ continue; }
    var counts=getSubjectCounts(item.roll,selectedSubject), low=counts.total>0 && counts.percent<75;
    html+="<tr><td>"+item.roll+"</td><td>"+item.name+"</td><td>"+item.branch+"</td><td>"+item.group+"</td><td>"+counts.present+"</td><td>"+counts.total+"</td><td class='"+(low ? "badgeLow" : "badgeGood")+"'>"+counts.percent.toFixed(2)+"%</td><td class='"+(low ? "badgeLow" : "badgeGood")+"'>"+(counts.total==0 ? "No Classes" : (low ? "LOW ATTENDANCE" : "Good Standing"))+"</td></tr>";
    matches.push({student:item,counts:counts});
  }
  document.getElementById("studentAttendanceTable").innerHTML=html+"</table>";
  if(query!="" && matches.length==1){
    var student=matches[0].student, details=getAttendanceDetails()[student.roll] || {}, subjectRows="";
    for(var subjectName in (function(){ var values={}; for(var key in details){ if(details[key].subject){ values[details[key].subject]=true; } } return values; })()){
      var subjectCounts=getSubjectCounts(student.roll,subjectName), subjectLow=subjectCounts.total>0 && subjectCounts.percent<75;
      subjectRows+="<tr><td>"+subjectName+"</td><td>"+subjectCounts.present+"</td><td>"+subjectCounts.total+"</td><td class='"+(subjectLow ? "badgeLow" : "badgeGood")+"'>"+subjectCounts.percent.toFixed(2)+"%"+(subjectLow ? " - LOW ATTENDANCE" : "")+"</td></tr>";
    }
    personal.innerHTML="<div class='adminPanel'><h3>"+student.name+" ("+student.roll+")</h3><p>"+student.branch+" | Group "+student.group+"</p><table><tr><th>Subject</th><th>Classes Attended</th><th>Total Classes</th><th>Attendance</th></tr>"+(subjectRows || "<tr><td colspan='4'>No subject-wise attendance has been recorded yet.</td></tr>")+"</table></div>";
  } else { personal.innerHTML=""; }
}
function saveProfessor(){
  var name=document.getElementById("professorNameInput").value;
  var professorId=document.getElementById("professorIdInput").value.trim();
  var email=document.getElementById("professorEmailInput").value.trim();
  var department=document.getElementById("professorDepartmentInput").value.trim();
  var sub=document.getElementById("professorSubjectInput").value;
  var pass=document.getElementById("professorPasswordInput").value;
  var groupsBox=document.getElementById("professorGroupsInput");
  var authorizedGroups=[];
  for(var i=0;i<groupsBox.options.length;i++){ if(groupsBox.options[i].selected){ authorizedGroups.push(groupsBox.options[i].value); } }
  var editIndex=document.getElementById("professorEditIndex").value;
  if(name=="" || professorId=="" || email=="" || department=="" || sub=="" || pass=="" || authorizedGroups.length==0){ alert("Please fill all professor fields and choose at least one group."); return; }
  for(var j=0;j<professors.length;j++){
    if(String(professors[j].id).toLowerCase()==professorId.toLowerCase() && String(j)!=editIndex){ alert("Professor ID must be unique."); return; }
    if(professors[j].email.toLowerCase()==email.toLowerCase() && String(j)!=editIndex){ alert("A professor already uses this email."); return; }
  }
  if(editIndex==""){
    professors.push({id:professorId,name:name,email:email,department:department,subject:sub,password:pass,authorizedGroups:authorizedGroups,status:"Offline",lastLogin:"",lastLogout:"",selectedGroup:""});
  } else {
    var existing=professors[parseInt(editIndex)];
    professors[parseInt(editIndex)]={id:professorId,name:name,email:email,department:department,subject:sub,password:pass,authorizedGroups:authorizedGroups,status:existing.status || "Offline",lastLogin:existing.lastLogin || "",lastLogout:existing.lastLogout || "",selectedGroup:existing.selectedGroup || ""};
  }
  saveData("professors",professors);
  clearProfessorForm(); loadProfessorLoginOptions(); renderProfessors();
}
function editProfessor(index){
  document.getElementById("professorFormTitle").innerHTML="Edit Professor";
  document.getElementById("professorEditIndex").value=index;
  document.getElementById("professorNameInput").value=professors[index].name;
  document.getElementById("professorIdInput").value=professors[index].id;
  document.getElementById("professorEmailInput").value=professors[index].email || "";
  document.getElementById("professorDepartmentInput").value=professors[index].department || "";
  document.getElementById("professorSubjectInput").value=professors[index].subject;
  document.getElementById("professorPasswordInput").value=professors[index].password;
  var groupsBox=document.getElementById("professorGroupsInput");
  for(var i=0;i<groupsBox.options.length;i++){ groupsBox.options[i].selected=professors[index].authorizedGroups.indexOf(groupsBox.options[i].value)!=-1; }
}
function deleteProfessor(index){ if(confirm("Delete this professor?")){ professors.splice(index,1); saveData("professors",professors); loadProfessorLoginOptions(); renderProfessors(); } }
function clearProfessorForm(){
  document.getElementById("professorFormTitle").innerHTML="Add Professor";
  document.getElementById("professorEditIndex").value="";
  document.getElementById("professorNameInput").value="";
  document.getElementById("professorIdInput").value="";
  document.getElementById("professorEmailInput").value="";
  document.getElementById("professorDepartmentInput").value="";
  document.getElementById("professorSubjectInput").value="";
  document.getElementById("professorPasswordInput").value="";
  var groupsBox=document.getElementById("professorGroupsInput");
  for(var i=0;i<groupsBox.options.length;i++){ groupsBox.options[i].selected=false; }
}
function renderLoginActivity(){
  var html="<table><tr><th>Professor Name</th><th>Email</th><th>Branch</th><th>Subject</th><th>Current Group</th><th>Status</th><th>Last Login</th><th>Last Logout</th></tr>";
  for(var i=0;i<professors.length;i++){
    var item=professors[i];
    html+="<tr><td>"+item.name+"</td><td>"+(item.email || "Not set")+"</td><td>"+(item.department || "Not set")+"</td><td>"+item.subject+"</td><td>"+(item.selectedGroup ? "Group "+item.selectedGroup : "Not Selected")+"</td><td>"+item.status+"</td><td>"+(item.lastLogin || "--")+"</td><td>"+(item.lastLogout || "--")+"</td></tr>";
  }
  document.getElementById("loginActivityTable").innerHTML=html+"</table>";
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
  var details=getAttendanceDetails();
  if(!details[roll]){ details[roll]={}; }
  if(value==""){ delete details[roll][dateKey]; }
  else { details[roll][dateKey]={date:dateKey,student:student.name,roll:roll,branch:student.branch,group:student.group,subject:"Coordinator Update",professorId:"COORDINATOR",professorName:"Coordinator",status:value}; }
  saveAttendanceDetails(details);
}
function markClass(value){
  var dateKey=inputDateToKey(document.getElementById("attendanceDate").value);
  var branchFilter=document.getElementById("attendanceBranch").value;
  var groupFilter=document.getElementById("attendanceGroup").value;
  var data=getAttendance();
  var details=getAttendanceDetails();
  for(var i=0;i<students.length;i++){
    if(branchFilter!="" && students[i].branch!=branchFilter){ continue; }
    if(groupFilter!="" && students[i].group!=groupFilter){ continue; }
    if(!data[students[i].roll]){ data[students[i].roll]={name:students[i].name,branch:students[i].branch,group:students[i].group,dates:{}}; }
    data[students[i].roll].dates[dateKey]=value;
    if(!details[students[i].roll]){ details[students[i].roll]={}; }
    details[students[i].roll][dateKey]={date:dateKey,student:students[i].name,roll:students[i].roll,branch:students[i].branch,group:students[i].group,subject:"Coordinator Update",professorId:"COORDINATOR",professorName:"Coordinator",status:value};
  }
  saveAttendanceData(data);
  saveAttendanceDetails(details);
  renderAttendanceEditor();
}
function deleteAttendanceDay(){
  if(!confirm("Delete attendance for this date?")){ return; }
  var dateKey=inputDateToKey(document.getElementById("attendanceDate").value);
  var data=getAttendance();
  var details=getAttendanceDetails();
  for(var roll in data){ if(data[roll].dates && data[roll].dates[dateKey]){ delete data[roll].dates[dateKey]; } if(details[roll] && details[roll][dateKey]){ delete details[roll][dateKey]; } }
  saveAttendanceData(data);
  saveAttendanceDetails(details);
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
function makeProfessorReportTable(branch,selectedGroup){
  var table=document.createElement("table");
  var header=table.insertRow();
  header.innerHTML="<th>Name</th><th>Roll</th><th>Present</th><th>Absent</th><th>Percentage</th>";
  var count=0;
  for(var i=0;i<students.length;i++){
    if(!branchesMatch(students[i].branch,branch) || students[i].group!=selectedGroup){ continue; }
    count++;
    var counts=getStudentCounts(students[i].roll);
    var row=table.insertRow();
    row.insertCell(0).innerHTML=students[i].name;
    row.insertCell(1).innerHTML=students[i].roll;
    row.insertCell(2).innerHTML=counts.present;
    row.insertCell(3).innerHTML=counts.absent;
    row.insertCell(4).innerHTML=counts.percent.toFixed(2)+"%";
  }
  if(count==0){ var row=table.insertRow(); row.innerHTML="<td colspan='5'>No students found for this group.</td>"; }
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
    localStorage.removeItem("attendanceDetails");
    alert("Semester attendance cleared");
    renderDashboard();
    renderAttendanceEditor();
  }
}
setupData();
