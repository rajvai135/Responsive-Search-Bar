const search = () => {
  const searchBox = document.getElementById("search-input").value.toUpperCase();
  const storeItem = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pName = storeItem.getElementsByTagName("h2");

  for (let i = 0; i < pName.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
