function filterOnR() {
  const r = document.getElementById("demo")?.innerHTML;

  const list_obj = Array.from(
    document.getElementsByClassName("place") as HTMLCollectionOf<HTMLElement>
  );
  const rating_obj = document.getElementsByClassName("place_rating");
  for (let i = 0; i < list_obj.length; i++) {
    const rating = rating_obj[i].className.split(" ")[1];

    if (rating == "undefined") {
      list_obj[i].style.display = "none";
    } else if (rating <= r) {
      list_obj[i].style.display = "none";
    } else {
      list_obj[i].style.display = "";
    }
  }
}

export default filterOnR;
