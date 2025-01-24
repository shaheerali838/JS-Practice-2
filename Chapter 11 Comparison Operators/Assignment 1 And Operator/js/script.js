var age;
var maritalStatus;
age = window.prompt("Aapki umr kya hai?");
maritalStatus = window.prompt("Kya aap shadi-shuda hain? (haan/nahin)");
if (age >= 25 && maritalStatus == "haan") {
  window.alert("Aap shadi-shuda hain aur 25 saal ke ho chuke hain!");
}
