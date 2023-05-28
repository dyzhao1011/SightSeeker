filterObjects("place");
function filterObjects(c) {
  const list_obj = Array.from(
    document.getElementsByClassName("place") as HTMLCollectionOf<HTMLElement>
  );
  // console.log(list_obj);
  const btnC = Array.from(
    document.getElementsByClassName("btn") as HTMLCollectionOf<HTMLElement>
  );

  for (let j = 0; j < btnC.length; j++) {
    if (btnC[j].className.includes(c.toUpperCase())) {
      btnC[j].style.backgroundColor = "lightblue";
    } else {
      btnC[j].style.backgroundColor = "";
    }
  }

  for (let i = 0; i < list_obj.length; i++) {
    if (!list_obj[i].className.includes(c)) {
      list_obj[i].style.display = "none";
    } else {
      list_obj[i].style.display = "";
    }
  }
}

export default filterObjects;
