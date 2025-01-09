// Placeholder contract data (we'll replace this with data from the Nicehash API later)
const contractData = {
    sha256: [
        {
            hashrate: "100 GH/s",
            duration: "24 Hours",
            price: "$50.00",
            availability: "In Stock",
            image: "https://via.placeholder.com/40x40.png?text=BTC"
        },
        {
            hashrate: "500 GH/s",
            duration: "24 Hours",
            price: "$200.00",
            availability: "In Stock",
            image: "https://via.placeholder.com/40x40.png?text=BTC"
        },
        // Add more SHA-256 contracts here
    ],
    scrypt: [
        {
            hashrate: "500 MH/s",
            duration: "1 Week",
            price: "$75.00",
            availability: "In Stock",
            image: "https://via.placeholder.com/40x40.png?text=LTC"
        },
        {
            hashrate: "1 GH/s",
            duration: "1 Week",
            price: "$125.00",
            availability: "In Stock",
            image: "https://via.placeholder.com/40x40.png?text=LTC"
        },
        // Add more Scrypt contracts here
    ],
    ethash: [
        {
            hashrate: "100 MH/s",
            duration: "1 Month",
            price: "$150.00",
            availability: "In Stock",
            image: "https://via.placeholder.com/40x40.png?text=ETH"
        },
        {
            hashrate: "200 MH/s",
            duration: "1 Month",
            price: "$250.00",
            availability: "Out of Stock",
            image: "https://via.placeholder.com/40x40.png?text=ETH"
        },
        // Add more Ethash contracts here
    ]
};

// Function to create a contract card element
function createContractCard(contract) {
    const card = document.createElement("div");
    card.classList.add("contract-card");
    if (contract.availability === "Out of Stock") {
        card.classList.add("out-of-stock");
    }
    card.innerHTML = `
        <div class="contract-header">
            <h4></h4>
            <img src="${contract.image}" alt="Algorithm Icon">
        </div>
        <div class="contract-details">
            <p>Hashrate: <span>${contract.hashrate}</span></p>
            <p>Duration: <span>${contract.duration}</span></p>
            <p>Price: <span>${contract.price}</span></p>
            <p>Availability: <span>${contract.availability}</span></p>
        </div>
        <button class="purchase_btn" ${contract.availability === "Out of Stock" ? "disabled" : ""}>
            ${contract.availability === "Out of Stock" ? "Out of Stock" : "Purchase Now"}
        </button>
    `;
    return card;
}

// Function to display contracts for the selected algorithm
function displayContracts(algorithm) {
    const contractGrid = document.querySelector(".contract-grid");
    contractGrid.innerHTML = ""; // Clear existing contracts

    const contracts = contractData[algorithm];
    if (contracts) {
        contracts.forEach(contract => {
            const contractHeader = contractGrid.querySelector(`.contract-card:nth-child(${contracts.indexOf(contract) + 1}) .contract-header h4`);
            if (contractHeader) {
                contractHeader.textContent = algorithm.toUpperCase(); // Set the algorithm name in uppercase
            }
            const card = createContractCard(contract);
            contractGrid.appendChild(card);
        });
    }
}

// Get the menu button element
const menuButton = document.querySelector(".menu-button");

// Add a click event listener to the menu button
menuButton.addEventListener("click", function() {
  alert("Menu button clicked!"); // Placeholder action: Show an alert
});

// Get all the algorithm tab buttons
const algorithmTabs = document.querySelectorAll(".algorithm-tabs .tab");

// Add a click event listener to each tab button
algorithmTabs.forEach(tab => {
    tab.addEventListener("click", function() {
        // Remove the "active" class from all tabs
        algorithmTabs.forEach(t => t.classList.remove("active"));

        // Add the "active" class to the clicked tab
        this.classList.add("active");

        // Get the algorithm from the clicked tab's data-algorithm attribute
        const algorithm = this.dataset.algorithm;

        // Display the contracts for the selected algorithm
        displayContracts(algorithm);
    });
});

// Display initial contracts (SHA-256)
displayContracts("sha256");