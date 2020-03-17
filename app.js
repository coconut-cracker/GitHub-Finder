// Initilaise GitHub (because it's a class... )
const github = new GitHub();

// Init UI class
const ui = new UI();

console.log(GitHub);

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // console.log(userText);
    // Make HTTP Call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show the Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
      console.log(data);
    });
  } else {
    ui.clearProfile();
  }
});
