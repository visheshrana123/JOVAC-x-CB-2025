fetch("https://api.github.com/users/visheshrana123")
  .then(response => response.json())
  .then(data => {
    document.getElementById("profile").innerHTML = `
      <img src="${data.avatar_url}" alt="Avatar">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <p><strong>Followers:</strong> ${data.followers}</p>
      <p><strong>Public Repos:</strong> ${data.public_repos}</p>
      <a href="${data.html_url}" target="_blank">Visit Profile</a>
    `;
  })
  .catch(error => {
    console.error("Error fetching GitHub data:", error);
    document.getElementById("profile").innerHTML = "<p>Profile not found.</p>";
  });
