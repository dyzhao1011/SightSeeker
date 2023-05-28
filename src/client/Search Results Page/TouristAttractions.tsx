import axios from "axios";

//REPLACE THE FOLLOWING WITH YOUR GOOGLE PLACES API KEY (DO NOT DELETE QUOTATIONS)
const API_KEY = "YOUR API KEY";

export async function getNearbyTouristAttractions(query: string) {
  const url = `http://localhost:3000/map?query=${query}&radius=1609&key=${API_KEY}`;
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Invalid Request");
      throw error;
    });
}
