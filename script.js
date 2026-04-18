// FAKE DATA
const products = [
    { id: 1, name: "The Big Bucket", price: 29.99, icon: "🍗", tag: "BESTSELLER" },
    { id: 2, name: "Burger", price: 8.49, icon: "🍔", tag: "TRENDING" },
    { id: 3, name: "Popcorn", price: 5.99, icon: "🍿", tag: "SNACK" },
    { id: 4, name: "Family pack", price: 45.00, icon: "🥙", tag: "POPULAR" }
];

// 1. RENDER PRODUCTS
const productList = document.getElementById('product-list');
products.forEach(p => {
    productList.innerHTML += `
        <div class="card">
            <span class="card-tag">${p.tag}</span>
            <div class="card-img">${p.icon}</div>
            <div class="card-info">
                <h4>${p.name}</h4>
                <p>$${p.price.toFixed(2)}</p>
                <button onclick="addToCart('${p.name}')" class="btn-red block">Add to Cart</button>
            </div>
        </div>
    `;
});

// 2. CONVERSION LOGIC: COMBO UPSELL
function addToCart(name) {
    const upsell = confirm(`Excellent choice! Would you like to make that ${name} a MEAL? Add large fries and a drink for just $2.99?`);
    if (upsell) {
        alert("Combo added! Your Average Order Value just went up! 🚀");
    } else {
        alert(`${name} added to cart.`);
    }
}

// 3. URGENCY TIMER
function startTimer() {
    let time = 12120; // 3h 22m in seconds
    const timerEl = document.getElementById('timer');
    setInterval(() => {
        let h = Math.floor(time / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        timerEl.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        time--;
    }, 1000);
}
startTimer();

// 4. AUTH LOGIC
function openLogin() { document.getElementById('loginModal').style.display = 'block'; }
function closeLogin() { document.getElementById('loginModal').style.display = 'none'; }

function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "user1" && pass === "password") {
        document.getElementById('auth-zone').innerHTML = `<span class="badge">Welcome Back, Prof Bachen!</span>`;
        closeLogin();
        alert("Logged in successfully! Rewards points sync'd.");
    } else {
        alert("Invalid credentials. Try user1 / password");
    }
}
