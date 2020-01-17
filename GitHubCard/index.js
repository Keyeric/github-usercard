/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get("https://api.github.com/users/Keyeric")

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/const entryPoint = document.querySelector(".cards");
axios
.get("https://api.github.com/users/Keyeric")
.then(response => {
  // console.log(response.data);
  // Object.keys(response.data).forEach(data => {
    // console.log(data)
    entryPoint.appendChild(GitCard(response.data));
  // });
})
.catch(error => {
  console.log("Error encountered:", error);
});
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function GitCard(APCri) {
  const
    card = document.createElement("div"),
    gitImg = document.createElement("img"),
    gitInfo = document.createElement("div"),
    gitH3 = document.createElement("h3"),
    gitUser = document.createElement("p"),
    gitLocation = document.createElement("p"),
    gitProfile = document.createElement("p"),
    profileLink = document.createElement("a"),
    gitFollowers = document.createElement("p"),
    gitFollowing = document.createElement("p"),
    gitBio = document.createElement("p");

  card.append(gitImg, gitInfo);
  // card.append(gitInfo);
  gitInfo.append(gitH3, gitUser, gitLocation, gitProfile, gitFollowers, gitFollowing, gitBio);
  // gitInfo.append(gitUser);
  // gitInfo.append(gitLocation);
  // gitInfo.append(gitProfile);
  gitProfile.append(profileLink);
  // gitInfo.append(gitFollowers);
  // gitInfo.append(gitFollowing);
  // gitInfo.append(gitBio);


  card.classList.add("card");
  gitImg.src = APCri.avatar_url;
  gitInfo.classList.add("card-info");
  gitH3.classList.add("name");
  gitUser.classList.add("username")

  gitLocation.textContent = `${APCri.location}`;
  profileLink.href = APCri.html_url;
  gitProfile.textContent = `Profile: ${profileLink}`;
  gitFollowers.textContent = APCri.followers;
  gitFollowing.textContent = APCri.following;
  gitBio.textContent = APCri.bio;

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
