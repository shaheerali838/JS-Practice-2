var price;
var membership;
price = window.prompt("Product ki price bataiye?");
membership = window.prompt(
  "Aapki membership status kya hai? (Gold/Platinum/Other)"
);
if (membership == "gold" || membership == "platinum") {
  if (price >= 1000) {
    window.alert("Aapko discount mil raha hai!");
  } else {
    alert("Apko Discount nhi mil sakta");
  }
}
