let products = [];

// Form submission
document.getElementById('product-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const mrp = parseFloat(document.getElementById('mrp').value);
  const price = parseFloat(document.getElementById('price').value);
  const image = document.getElementById('image').value || 'https://via.placeholder.com/50'; // Default image
  const discount = ((mrp - price) / mrp * 100).toFixed(2);

  const product = { name, category, mrp, price, discount, image };

  products.push(product);
  renderTable();
  clearForm();
});

// Render table
function renderTable() {
  const tbody = document.querySelector('#product-table tbody');
  tbody.innerHTML = '';

  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.mrp}</td>
      <td>${product.price}</td>
      <td>${product.discount}%</td>
      <td><img src="${product.image}" alt="${product.name}"></td>
      <td class="actions">
        <button class="edit" onclick="editProduct(${index})">Edit</button>
        <button class="delete" onclick="deleteProduct(${index})">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Clear form
function clearForm() {
  document.getElementById('product-form').reset();
}

// Delete product
function deleteProduct(index) {
  products.splice(index, 1);
  renderTable();
}

// Edit product
function editProduct(index) {
  const product = products[index];
  document.getElementById('name').value = product.name;
  document.getElementById('category').value = product.category;
  document.getElementById('mrp').value = product.mrp;
  document.getElementById('price').value = product.price;
  document.getElementById('image').value = product.image;

  // Remove product and re-render table
  products.splice(index, 1);
  renderTable();
}
