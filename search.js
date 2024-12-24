// Select the search bar
const searchBar = document.getElementById("search");
const searchFor = document.getElementById("search-for");
const params = new URLSearchParams(window.location.search);
// Add an event listener to detect keypress


searchBar.addEventListener("keypress", (event) => {
  // Check if the key pressed is "Enter"
  if (event.key === "Enter") {
    // Get the search query from the input
    const query = searchBar.value.trim();

    // If the search query is not empty, redirect
    if (query) {
      // Redirect to search.html with query as a URL parameter
      window.location.href = `/search.html?query=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a search query");
    }
  }
});

const searchTerm = params.get("query");
console.log(searchTerm)
searchFor.textContent = searchTerm;
