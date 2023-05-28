# SightSeeker
## Summary
SightSeeker is a website that gives the user the ability to search for any locations based on a search query that they provide. It supports authenication using firebase and various features.  

Developed using React 18.2.0 & Firebase 9.19.1

[![SightSeeker](https://img.youtube.com/vi/SUXdPOKa258/0.jpg)](https://www.youtube.com/watch?v=SUXdPOKa258)
<details>
  <summary> How to run it </summary>
  
  1. Download all the relevant packages from the package.json file
  2. Create your Firebase & Google Places API keys
  3. In Firebase, use Firestore and create a collection called users
  4. In firebase.tsx, replace the API configurations with your API configurations
  5. In SearchResults.tsx and TouristAttractions.tsx, replace the API key with your Google Places API key
  6. Run ```npm run dev```

</details>

<details>
  <summary> Development </summary>
  <ul>
    <details>
      <summary> Initial Plans </summary>
      The design of SightSeeker was kept simple to serve the purpose of the website efficiently. Initial plans included the usage of the ChatGPT & news API to add more functionality and feature to the website, but we didn't get to it. Other initial plans included the Google Places Nearby Search API, but was ultimately replaced by the Text Search to add more flexibility to the search.
      This project is designed only to operate on local host.
    </details>
    <details>
      <summary> Backend </summary>
      SightSeeker uses Firebase as its backend. It uses Firebase Authenication for sign up, log in, and log out and uses Firestore to store a database of favorite locations for each user. When a user clicks the "Add to favorite" button for a location, firebase stores the name and address in the user's database when they are logged in. 
    </details>
    <details>
      <summary> Search & API </summary>
      The search is very generalized and will return any location related to the search query. For best results, using a specific search query is ideal to produce the best results. When a user enters a search query in the search bar and submits it, SightSeeker grabs that search query and calls the Google Places Text Search API on it. The return is an array of locations based on the given search query. For most location, there exists a photo reference ID associated with it and SightSeeker uses the photo reference ID to call the Google Places Photo API to generate and display a photo. The result is a list of locations in a top-down fashion each with a name, address, rating, photo, and a "Add to favorite" button. The user can filter these locations by rating using the slider on the right. 
    </details>
  </ul>
</details>
