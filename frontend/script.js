const API_URL = 'http://localhost:3000/api';

// Elementos do DOM
const productsContainer = document.getElementById('products-container');
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error-message');
const categoryFilter = document.getElementById('category-filter');
const filterButton = document.getElementById('filter-button');
const retryButton = document.getElementById('retry-button');

// Estado da aplicação
let products = [];

// Funções
async function fetchProducts(category = 'all') {
    showLoading();
    
    try {
        let url = `${API_URL}/products`;
        
        if (category !== 'all') {
            url = `${API_URL}/products/category/${category}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const data = await response.json();
        products = data;
        
        renderProducts();
        hideLoading();
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        showError();
    }
}

function renderProducts() {
    productsContainer.innerHTML = '';
    
    if (products.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products">
                <p>Nenhum produto encontrado nessa categoria.</p>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const stockBadge = product.inStock 
            ? '<span class="stock-badge in-stock">Em estoque</span>' 
            : '<span class="stock-badge out-of-stock">Esgotado</span>';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.name}">
                ${stockBadge}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">R$ ${product.price.toFixed(2)}</div>
                <p class="product-description">${product.description}</p>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

function showLoading() {
    loadingElement.classList.remove('hidden');
    productsContainer.classList.add('hidden');
    errorElement.classList.add('hidden');
}

function hideLoading() {
    loadingElement.classList.add('hidden');
    productsContainer.classList.remove('hidden');
}

function showError() {
    loadingElement.classList.add('hidden');
    errorElement.classList.remove('hidden');
    productsContainer.classList.add('hidden');
}

// Event Listeners
window.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

filterButton.addEventListener('click', () => {
    const selectedCategory = categoryFilter.value;
    fetchProducts(selectedCategory);
});

retryButton.addEventListener('click', () => {
    fetchProducts();
});