const xhr = new XMLHttpRequest();
// xhr.open("GET", "./movies.json");
xhr.open("GET", "https://api.github.com/users/SasnarineDeodat/repos");

// readyState has 5 possible values
// - 0: request not initialized
// -1: server connection established
// -3: request received
// - 4: processing request
// - 5: request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};
xhr.send();
