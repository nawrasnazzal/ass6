function addToTable() {
    // Get values from form inputs
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = document.getElementById('price').value.trim();

    // Validate inputs
    if (!name || !description || !price) {
        alert('Please fill in all fields!');
        return;
    }

    // Parse price to ensure it's displayed correctly
    const parsedPrice = parseFloat(price); // Convert string to a floating-point number
    if (isNaN(parsedPrice)) {
        alert('Please enter a valid number for the price!');
        return;
    }

    const formattedPrice = parsedPrice.toFixed(2); // Format price to two decimal places

    // Add a new row to the table
    const tableBody = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const descriptionCell = newRow.insertCell(1);
    const priceCell = newRow.insertCell(2);

    // Set text content for each cell
    nameCell.textContent = name;
    descriptionCell.textContent = description;
    priceCell.textContent =" $$"+formattedPrice; // Correctly insert formatted price

    // Clear the form inputs
    document.getElementById('productForm').reset();
}