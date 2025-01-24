// Sample product data
const products = [
    { id: 1, name: "Canvas Men Shoes", price: 90000, category: "Men", image: "canvas.jpg", rating: 4.5, reviews: 120 },
    { id: 2, name: "Casual Loafers - Dark Brown", price: 110000, category: "Men", image: "casualloafers.jpg", rating: 4.0, reviews: 85 },
    { id: 3, name: "The Jackie Black Bit Dress Loafer - Limited Edition", price: 400000, category: "Men", image: "dress_loafers.jpg", rating: 4.0, reviews: 85 },
    { id: 4, name: "Women Dance Trainers - Air Cushion Slip-On", price: 40000, category: "Women", image: "dance_trainers.jpg", rating: 4.0, reviews: 155 },
    { id: 5, name: "Men's Outdoor Casual Sneakers", price: 60000, category: "Men", image: "leather_loafer.jpg", rating: 4.0, reviews: 85 },
    { id: 6, name: "Classic Formal Shoes", price: 200000, category: "Men", image: "formalshoe.jpg", rating: 4.0, reviews: 20 },
    { id: 7, name: "Men's Fashion Genuine Leather Casual Shoes", price: 80000, category: "Men", image: "leathershoe.jpg", rating: 4.0, reviews: 51 },
    { id: 8, name: "Women's Ballet Flats", price: 30000, category: "Women", image: "ballet.jpg", rating: 4.0, reviews: 85 },
    { id: 9, name: "Genuine Leather Women's Loafers - Gray", price: 25000, category: "Women", image: "loafer_women.jpg", rating: 4.0, reviews: 25 },
    { id: 10, name: "Penelope Pom-Pom Ballet Flats", price: 20000, category: "Women", image: "penelope.jpg", rating: 4.0, reviews: 85 },
    { id: 11, name: "Women's Ballet Flats", price: 120000, category: "Women", image: "ballets.jpg", rating: 4.5, reviews: 200 },
    { id: 12, name: "Elegant High Heels", price: 250000, category: "Women", image: "heels.jpg", rating: 4.3, reviews: 95 },
    { id: 13, name: "Children's Sports Shoes", price: 100000, category: "Kids", image: "childs.jpg", rating: 4.4, reviews: 180 },
    { id: 14, name: "Children's Sandals", price: 80000, category: "Kids", image: "child_sandals.jpg", rating: 3.8, reviews: 60 },
    { id: 15, name: "Men's Loafers", price: 180000, category: "Men", image: "loafer_men.jpg", rating: 3.5, reviews: 60 },
    { id: 16, name: "Men's Athletic Sneakers", price: 250000, category: "Men", image: "sport_men.jpg", rating: 4.5, reviews: 120 },
    { id: 17, name: "Men's Leather Boots", price: 320000, category: "Men", image: "boot.jpg", rating: 5.0, reviews: 200 },
    { id: 18, name: "Men's Flats", price: 150000, category: "Men", image: "men_open.jpg", rating: 3.0, reviews: 45 },
    { id: 19, name: "Women's High Heels", price: 220000, category: "Women", image: "classy_heels.jpg", rating: 4.0, reviews: 80 },
    { id: 20, name: "Women's Ankle Boots", price: 300000, category: "Women", image: "ankle_boot.jpg", rating: 4.5, reviews: 110 },
    { id: 21, name: "Children's Sneakers", price: 100000, category: "Kids", image: "snicker_child.jpg", rating: 3.5, reviews: 30 },
    { id: 22, name: "Children's Sandals", price: 80000, category: "Kids", image: "sandal_kid.jpg", rating: 3.0, reviews: 20 },
    { id: 23, name: "Children's School Shoes", price: 120000, category: "Kids", image: "school_shoes.jpg", rating: 4.0, reviews: 50 },
    { id: 24, name: "Men's Canvas Sneakers", price: 75000, category: "Men", image: "canvas_men.jpg", rating: 2.5, reviews: 35 },
    { id: 25, name: "Men's Flip Flops", price: 40000, category: "Men", image: "flop.jpg", rating: 2.0, reviews: 15 },
    { id: 26, name: "Women's Slip-On Flats", price: 60000, category: "Women", image: "slip.jpg", rating: 3.0, reviews: 25 },
    { id: 27, name: "Men's Sandals", price: 50000, category: "Men", image: "open.jpg", rating: 2.5, reviews: 20 },
    { id: 28, name: "Boys Clarks Shoes", price: 45000, category: "Kids", image: "clarks.jpg", rating: 3.0, reviews: 30 },
    { id: 29, name: "Nautica Kids Sneakers Shoes", price: 35000, category: "Kids", image: "nautica.jpg", rating: 2.5, reviews: 15 }
];

    // Add more products as needed
    document.getElementById('liveChatButton').addEventListener('click', function() {
        var chatWindow = document.getElementById('live-chat-window');
        chatWindow.style.display = (chatWindow.style.display === 'none' || chatWindow.style.display === '') ? 'block' : 'none';
    });


    document.addEventListener('DOMContentLoaded', function() {
        // Select the live chat button and chat window
        const liveChatButton = document.getElementById('liveChatButton');
        const liveChatWindow = document.getElementById('live-chat-window');

        // Add click event listener to the live chat button
        liveChatButton.addEventListener('click', function() {
            // Toggle the display of the live chat window
            if (liveChatWindow.style.display === 'none' || liveChatWindow.style.display === '') {
                liveChatWindow.style.display = 'block';
            } else {
                liveChatWindow.style.display = 'none';
            }
        });
document.getElementById('liveChatButton').addEventListener('click', function() {
    var chatWindow = document.getElementById('liveChatWindow');
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'block';
    } else {
        chatWindow.style.display = 'none';
    }
});

        // Optional: Close the chat window when clicking outside of it
        document.addEventListener('click', function(event) {
            if (!liveChatWindow.contains(event.target) && event.target !== liveChatButton) {
                liveChatWindow.style.display = 'none';
            }
        });
    });


const productsPerPage = 8;
let currentPage = 1;
let filteredProducts = [...products];

function createProductCard(product) {
    return `
        <div class="col-md-3 mb-4 product-item">
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">UGX ${product.price.toLocaleString()}</p>
                    <div class="product-rating">
                        ${getStars(product.rating)}
                        <span class="ms-2">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="mt-auto">
                        <button class="btn btn-primary btn-sm mt-2" onclick="addToCart(${product.id})">Add to Cart</button>
                        <button class="btn btn-outline-secondary btn-sm mt-2" onclick="quickView(${product.id})">Quick View</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return `${'<i class="bi bi-star-fill"></i>'.repeat(fullStars)}
            ${'<i class="bi bi-star-half"></i>'.repeat(halfStar)}
            ${'<i class="bi bi-star"></i>'.repeat(emptyStars)}`;
}

function renderProducts() {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = paginatedProducts.map(createProductCard).join('');
    updatePagination();
}

function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('btn', 'btn-outline-primary', 'me-2');
        if (i === currentPage) {
            pageButton.classList.add('active');
        }

        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderProducts();
        });

        paginationContainer.appendChild(pageButton);
    }
}

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const minPrice = parseInt(document.getElementById('min-price').value) || 0;
    const maxPrice = parseInt(document.getElementById('max-price').value) || Infinity;

    filteredProducts = products.filter(product => 
        (category === 'all' || product.category === category) &&
        product.price >= minPrice &&
        product.price <= maxPrice
    );

    currentPage = 1;
    renderProducts();
}

function sortProducts() {
    const sortBy = document.getElementById('sort-select').value;

    switch(sortBy) {
        case 'price-low-high':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high-low':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'popularity':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
    }

    renderProducts();
}

function quickView(productId) {
    const product = products.find(p => p.id === productId);
    const modalBody = document.querySelector('#quickViewModal .modal-body');
    modalBody.innerHTML = `
        <img src="${product.image}" class="img-fluid mb-3" alt="${product.name}">
        <h5>${product.name}</h5>
        <p>Price: UGX ${product.price.toLocaleString()}</p>
        <div class="product-rating mb-3">
            ${getStars(product.rating)}
            <span class="ms-2">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    new bootstrap.Modal(document.getElementById('quickViewModal')).show();
}

function addToCart(productId) {
    // Implement cart functionality here
    console.log(`Product ${productId} added to cart`);
    // You can show a toast notification here
    showToast(`Product added to cart!`);
}

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast', 'show');
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">Notification</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function toggleView(view) {
    const productGrid = document.getElementById('product-grid');
    if (view === 'grid') {
        productGrid.classList.remove('list-view');
        productGrid.classList.add('row');
    } else {
        productGrid.classList.add('list-view');
        productGrid.classList.remove('row');
    }
    renderProducts();
}

// Event listeners
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('min-price').addEventListener('input', filterProducts);
document.getElementById('max-price').addEventListener('input', filterProducts);
document.getElementById('sort-select').addEventListener('change', sortProducts);
document.getElementById('grid-view').addEventListener('click', () => toggleView('grid'));
document.getElementById('list-view').addEventListener('click', () => toggleView('list'));

// Live chat functionality
document.querySelector('.btn-primary[style*="position: fixed"]').addEventListener('click', function() {
    document.getElementById('live-chat-window').style.display = 'block';
});

// Initialize
renderProducts();
