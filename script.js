console.log("JavaScript connected");

const form = document.getElementById("request-form");

const tableBody = document.getElementById("table-body");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customer-name").value;

    const address = document.getElementById("address").value;

    const contact = document.getElementById("contact").value;

    const email = document.getElementById("email").value;

    const demand = document.getElementById("demand").value;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${address}</td>
        <td>${contact}</td>
        <td>${email}</td>
        <td>${demand}</td>

        <td class="status">
            pending
        </td>

        <td>
            <button class="deliver-btn">
            Mark Delivered
            </button>
        </td>
    `;

    tableBody.appendChild(newRow);
    
    const deliverButton = newRow.querySelector(".deliver-btn");

    deliverButton.addEventListener("click", function() {
        
        const statusCell = newRow.querySelector(".status");

        statusCell.textContent = "Delivered";

        statusCell.style.color = "#22c55e";

        deliverButton.textContent = "Completed";

        deliverButton.disabled = true;
    });



    form.reset();

});