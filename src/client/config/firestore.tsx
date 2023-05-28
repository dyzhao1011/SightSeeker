import {
  collection,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { curr_usr, db } from "./firebase";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { faV } from "@fortawesome/free-solid-svg-icons";
import { Console } from "console";

/* Adding UUID to user as Document
 * Add the has password to the user
 */
// Add new user
export async function addUser(user: any, username: string) {
  console.log("Adduser function", user);
  const usersCol = collection(db, "users");
  await setDoc(doc(usersCol, user.uid), {
    username: username,
    email: user.email,
    favorites: {},
  });
  signOut(auth);
}

//the number of places on the favorite list
export async function favNumber(uuid: string) {
  const q = doc(db, "users", uuid);
  const usr_data = await getDoc(q);
  if (usr_data.exists()) {
    const fav_list = usr_data.data().favorites;
    if (fav_list) {
      return Number(Object.keys(fav_list).length);
    }
  } else {
    return 0;
  }
}
// Get Favorite list by user
export async function getFavorites(uuid: string) {
  console.log("Calling Favorite");
  // const usersCol = collection(db, "users");
  const q = doc(db, "users", uuid);
  const usr_data = await getDoc(q);
  const myDiv = document.getElementById("tableBody");
  if (!(myDiv == null)) {
    while (myDiv.firstChild) {
      myDiv.removeChild(myDiv.firstChild);
    }
  }

  if (usr_data.exists()) {
    const fav_list = usr_data.data().favorites;
    if (fav_list) {
      for (const key in fav_list) {
        console.log(key, fav_list[key]);

        const row = document.createElement("tr");
        row.setAttribute("id", key);
        const c1 = document.createElement("td");
        c1.innerText = fav_list[key].name;
        row.appendChild(c1);

        const c2 = document.createElement("td");
        c2.innerText = fav_list[key].location;
        row.appendChild(c2);

        const c3 = document.createElement("td");
        const buttonA = document.createElement("button");
        buttonA.textContent = "Remove From Favorite List";
        buttonA.setAttribute("id", "delButton");
        buttonA.addEventListener("click", () => {
          console.log("clicked");
          if (curr_usr) {
            deleteFavorite(curr_usr.uid, Number(key))
              .then(() => favNumber(curr_usr.uid))
              .then((num) => {
                const basketLenElement =
                  document.getElementById("basketLength");
              });
            document.getElementById(key)?.remove();
          }
        });

        c3.appendChild(buttonA);
        row.appendChild(c3);
        myDiv?.appendChild(row);
        // const x=document.createElement("section");
        // x.setAttribute("Id",key);
        // x.setAttribute("class","fav_place");

        // const placeName=document.createElement("span");
        // placeName.setAttribute("class","place_name");
        // const txtName=document.createTextNode(fav_list[key].name);
        // placeName.appendChild(txtName);
        // x.append(placeName);

        // const placeAdd=document.createElement("span");
        // placeAdd.setAttribute("class","place_address");
        // const txtAdd=document.createTextNode(fav_list[key].location);
        // placeAdd.appendChild(txtAdd);
        // x.append(placeAdd);
        // myDiv?.appendChild(x);
      }
    }
  } else {
    console.log("No such document!");
  }
}

// Add to Favorite
export async function addFavorite(
  uuid: string,
  location: string,
  name: string
) {
  const q = doc(db, "users", uuid);
  const usr_data = await getDoc(q);
  console.log("Add Favorite?");
  if (usr_data.exists()) {
    const fav_list = usr_data.data().favorites;
    let hasduplicate = 0;
    for (const key in fav_list) {
      if (location === fav_list[key].location) {
        hasduplicate = 1;
        break;
      }
    }
    if (hasduplicate !== 1) {
      if (fav_list) {
        console.log("Length of fav_list", Object.keys(fav_list).length);

        const max_key =
          Object.keys(fav_list).length == 0
            ? 0
            : Object.keys(fav_list).reduce((a, b) => {
                return Number(b) > Number(a) ? b : a;
              });
        fav_list[Number(max_key) + 1] = {
          location: location,
          name: name,
        };
        await updateDoc(q, { favorites: fav_list });
      }
    }
  } else {
    console.log("No such document!");
  }
}

// Delete from Favorite
// Require Update to delete by key
export async function deleteFavorite(uuid: string, key: number) {
  const q = doc(db, "users", uuid);
  const usr_data = await getDoc(q);
  if (usr_data.exists()) {
    const fav_list = usr_data.data().favorites;
    if (fav_list) {
      //delete fav_list[Object.keys(fav_list).length];
      delete fav_list[key];
      await updateDoc(q, { favorites: fav_list });
    }
  } else {
    console.log("No such document!");
  }
}
