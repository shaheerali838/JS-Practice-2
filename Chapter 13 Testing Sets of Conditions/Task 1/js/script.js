var likePakistaniMusic;
var likeIndianMusic;
likePakistaniMusic = window.prompt(
  "Kya aapko Pakistani music pasand hai? (haan/nahin)"
);
likeIndianMusic = window.prompt(
  "Kya aapko Indian music pasand hai? (haan/nahin)"
);
if (likePakistaniMusic == "haan" && likeIndianMusic == "haan") {
  window.alert("Aapke music ka taste toh international hai!");
} else if (likePakistaniMusic == "haan" || likeIndianMusic == "haan") {
  window.alert("Aapko music pasand hai!");
} else {
  window.alert("Aap music pasand nahi karte!");
}
