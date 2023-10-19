document.getElementById("search-button").addEventListener("click", function () {
    const searchValue = document.getElementById("search-input").value;

    // Fetch the links from the text file
    fetch("links.txt")
        .then((response) => response.text())
        .then((data) => {
            const links = data.split("\n");

            // Search for the link corresponding to the search value
            for (const link of links) {
                const [name, url] = link.split(" ");
                if (name.toLowerCase() === searchValue.toLowerCase()) {
                    // Open the link in a new tab without adding to browser history
                    window.open(url, "_blank", "noopener,noreferrer");
                    document.getElementById("results").textContent = `Opening ${name}...`;
                    return;
                }
            }

            // Display a message if no matching link is found
            document.getElementById("results").textContent = "No matching link found.";
        })
        .catch((error) => {
            console.error("Error fetching links:", error);
        });
});
