function header() {
    var h = document.createElement("H1");
    var t = document.createTextNode("Rachel Hyman");
    h.appendChild(t);
    document.body.appendChild(h);

    var h2 = document.createElement("H2");
    var t2 = document.createTextNode("Web Markup and Scripting: Section 0003");
    h2.appendChild(t2);
    document.body.appendChild(h2);
    
    h.style.color = "red";
    h.style.font = "Tahoma";
    h.style.textAlign = "center";
    
    h2.style.color = "red";
    h2.style.font = "Garamond";
    h2.style.textAlign = "center";
    h2.style.fontStyle = "italic";
}
header();

function ValidateEmail() {
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address. Please re-enter your email address.")
    return (false)
}
ValidateEmail();

function createResume() {
    var fullName = document.getElementById("fullName").value;
    var address = document.getElementById("address").value;
    var phoneNumber = document.getElementById("phone").value;
    var pdata = document.getElementById("pdata").value;
    var careerObj = document.getElementById("career").value;
    var edu = document.getElementById("educ").value;
    var entryDate1 = document.getElementById("entry1").value;
    var exitDate1 = document.getElementById("exit1").value;
    var empExp1 = document.getElementById("exp1").value;
    var entryDate2 = document.getElementById("entry2").value;
    var exitDate2 = document.getElementById("exit2").value;
    var empExp2 = document.getElementById("exp2").value;
    var entryDate3 = document.getElementById("entry3").value;
    var exitDate3 = document.getElementById("exit3").value;
    var empExp3 = document.getElementById("exp3").value;
    var entryDate4 = document.getElementById("entry4").value;
    var exitDate4 = document.getElementById("exit4").value;
    var empExp4 = document.getElementById("exp4").value;
    var ref = document.getElementById("ref").value;
    var resume = ("<html>\n<head>\n<title>RESUME</title>\n</head>\n<body>\n");
    resume += (fullName + "<br/>" + address + " / " + phoneNumber + "<br/>" + "\n");
    resume +=("CAREER OBJECTIVE:   " + careerObj + "<br/>" + "PERSONAL DATA:   " + pdata + "EDUCATION BACKGROUND:   " + edu + "<br/>" + " EMPLOYMENT EXPERIENCE:   " + "<br/>" + entryDate1 + "    -    " + exitDate1 + "   " + empExp1 + "<br/>")
    resume +=(entryDate2 + "    -    " +exitDate2 + "   " + empExp2 + "<br/>" + entryDate3 + "    -    " +exitDate3 + "   " + empExp3 + "<br/>" )
    resume +=(entryDate4 + "    -    " +exitDate4 + "   " + empExp4 + "<br/>" + "PROFESSIONAL REFERENCES:" + "   " + ref)
    resume += ("</body>\n</html>");
    
    var resumeWindow = window.open("", "", "scrollbars=yes,resizable=yes,");
    resumeWindow.document.write(resume);
  }
  createResume();