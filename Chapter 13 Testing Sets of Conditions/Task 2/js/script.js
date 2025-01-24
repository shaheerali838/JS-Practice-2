var numLanguages;
var languages;
numLanguages = window.prompt("Aap kitni zubaanain bolte hain?");
languages = window.prompt(
  "Kaunsi zubaanain aap bol sakte hain? (Urdu, English, Punjabi, etc.)"
);
if (numLanguages > 1) {
  window.alert("Aapke zubaan ka ilm toh bahut hai!");
} else {
  window.alert("Aap ek hi zubaan jaante hain!");
}
