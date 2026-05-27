const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    setTimeout(function() {
        preloader.classList.add('hide');
    }, 1000);
});

// Product data
const products = [
    {
        name: "Crystal Singing Bowl",
        price: 128,
        image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Handcrafted from pure quartz crystal, this singing bowl produces resonant tones that align your chakras and promote deep meditation. Each bowl is carefully tuned to the root chakra frequency, creating vibrations that cleanse negative energy and restore inner harmony."
    },
    {
        name: "Lavender Essential Oil Set",
        price: 48,
        image: "https://images.unsplash.com/photo-1565552163943-efd9056f8dcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhdmVuZGVyRXNzZW50aWFsJTIwT2lsJTIwc2V0fGVufDB8fDB8fHww",
        description: "Immerse yourself in the calming embrace of organic lavender. This set includes three signature blends — pure lavender, lavender-chamomile, and lavender-sandalwood — each crafted to ease tension, promote restful sleep, and elevate your daily mindfulness ritual."
    },
    {
        name: "Handwoven Meditation Cushion",
        price: 89,
        image: "https://images.unsplash.com/photo-1723902499525-276eca2fc039?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEhhbmR3b3ZlbiUyME1lZGl0YXRpb24lMjBDdXNoaW9ufGVufDB8fDB8fHww",
        description: "Sourced from artisan communities in the Himalayas, this meditation cushion is filled with organic buckwheat hulls and wrapped in handwoven cotton. Its ergonomic design supports proper posture during extended meditation sessions, keeping your spine aligned and your mind at ease."
    },
    {
        name: "White Sage Smudge Bundle",
        price: 24,
        image: "https://images.unsplash.com/photo-1597717503010-ee19fef2db91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2hpdGUlMjBTYWdlJTIwU211ZGdlJTIwQnVuZGxlfGVufDB8fDB8fHww",
        description: "Sustainably harvested in California, this white sage bundle is carefully sun-dried to preserve its purifying properties. Use it to cleanse your space of stagnant energy, set intentions, and create a sacred atmosphere for meditation and reflection."
    },
    {
        name: "Diffuser and Essential Oils",
        price: 98,
        image: "https://images.unsplash.com/photo-1635575066917-e788c2bd06b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXNzZW50aWFsJTIwb2lsJTIwZGlmZnVzZXJ8ZW58MHx8MHx8fDA%3D",
        description: "Transform any room into a sanctuary with this ultrasonic diffuser. Featuring soft LED lighting and whisper-quiet operation, it comes with a curated set of three essential oil blends — Serenity, Clarity, and Grounding — to match your daily intention."
    },
    {
        name: "Portable Speaker — Nature Sounds",
        price: 74,
        image: "https://images.unsplash.com/photo-1547052178-7f2c5a20c332?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Crafted from bamboo and soft-touch silicone, this portable speaker delivers warm, immersive audio for your guided meditations and nature soundscapes. With 12 hours of battery life and an IPX5 water-resistant build, it accompanies you from your meditation corner to the great outdoors."
    },
    {
        name: "Hourglass for Meditation",
        price: 55,
        image: "https://images.unsplash.com/photo-1518281420975-50db6e5d0a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRpbWVyJTIwZm9yJTIwbWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        description: "A beautiful 30-minute hourglass crafted from amber glass and polished acacia wood. Watch the fine sand flow as you ease into your practice — a gentle, screen-free timer that transforms your meditation into a visual ritual of presence and patience."
    },
    {
        name: "Sacred Earth Perfume Oil",
        price: 78,
        image: "https://images.unsplash.com/photo-1733660227163-01bc46e0d7d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D",
        description: "An earth-scented perfume oil blended with notes of sandalwood, frankincense, and cedar. Free from synthetics and alcohol, this grounding fragrance is designed to be applied to pulse points before meditation, helping you transition from the outer world to your inner sanctuary."
    }
];

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]:not(.cart-section):not(.all-products-overlay)');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.practice-card, .product-card, .journal-card, .about-content, .stats');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Animated counters for stats
function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            const suffix = el.dataset.suffix || '';
            const needsDivision = target >= 1000;
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);

                if (needsDivision) {
                    el.textContent = Math.floor(current / 1000) + suffix;
                } else {
                    el.textContent = current + suffix;
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
}

animateCounters();

// Parallax effect for hero section
const hero = document.querySelector('.hero');

window.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth) * 20;
    const y = (e.clientY / window.innerHeight) * 20;
    
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
});

// Form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        if (!name || !email || !message) {
            [nameInput, emailInput, messageInput].forEach(input => {
                if (!input.value.trim()) input.style.borderColor = '#ff6b6b';
                else input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            });
            return;
        }
        
        const btn = this.querySelector('button[type="submit"]');
        btn.textContent = 'Sending...';
        btn.disabled = true;
        
        const { error } = await supabaseClient.from('contact_messages').insert({
            name,
            email,
            message
        });
        
        btn.disabled = false;
        
        if (error) {
            btn.textContent = 'Failed to Send';
            btn.style.background = '#d1453b';
            setTimeout(() => {
                btn.textContent = 'Send Message';
                btn.style.background = '';
            }, 3000);
            return;
        }
        
        btn.textContent = 'Message Sent!';
        btn.style.background = '#4CAF50';
        
        setTimeout(() => {
            btn.textContent = 'Send Message';
            btn.style.background = '';
            this.reset();
            [nameInput, emailInput, messageInput].forEach(input => {
                input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            });
        }, 3000);
    });
}

// ====== PRODUCT RENDERING ======
function renderProducts(gridId, list) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = list.map((p, i) => `
        <div class="product-card" data-index="${i}">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <h3>${p.name}</h3>
            <p class="product-price">$${p.price}</p>
            <button class="btn-add" data-name="${p.name}" data-price="${p.price}" data-image="${p.image}">Add to Cart</button>
        </div>
    `).join('');

    grid.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(card);
    });
}

renderProducts('shop-products-grid', products.slice(0, 4));
renderProducts('all-products-grid', products);

// ====== CART SYSTEM ======
let cart = JSON.parse(localStorage.getItem('aura-cart')) || [];

const cartBadge = document.getElementById('cart-badge');
const cartSection = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartEmpty = document.getElementById('cart-empty');
const cartSummary = document.getElementById('cart-summary');
const checkoutBtn = document.getElementById('checkout-btn');

const SHIPPING_THRESHOLD = 100;
const SHIPPING_FEE = 12;
const TAX_RATE = 0.08;

function updateBadge() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = count;
    cartBadge.classList.toggle('visible', count > 0);
}

function saveCart() {
    localStorage.setItem('aura-cart', JSON.stringify(cart));
    updateBadge();
}

function renderCart() {
    cartItems.innerHTML = '';
    const hasItems = cart.length > 0;

    cartEmpty.style.display = hasItems ? 'none' : 'block';
    cartSummary.style.display = hasItems ? 'block' : 'none';

    if (!hasItems) return;

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-actions">
                    <button class="qty-btn" data-index="${index}" data-action="decrease"${item.quantity <= 1 ? ' disabled' : ''}>&minus;</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            </div>
        `;
        cartItems.appendChild(div);
    });

    updateSummary(subtotal);
}

function updateSummary(subtotal) {
    const tax = subtotal * TAX_RATE;
    const shipping = subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
    const total = subtotal + tax + shipping;

    document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summary-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('summary-shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
}

function addToCart(name, price, image) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    saveCart();
}

// Add to Cart (event delegation)
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-add');
    if (!btn) return;

    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    const image = btn.dataset.image;

    addToCart(name, price, image);
    renderCart();

    const original = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
    }, 2000);
});

// Cart icon toggle
document.getElementById('cart-icon').addEventListener('click', function(e) {
    e.preventDefault();
    cartSection.classList.add('active');
    renderCart();
    document.body.style.overflow = 'hidden';
});

// Close cart
document.getElementById('cart-close').addEventListener('click', function(e) {
    e.preventDefault();
    cartSection.classList.remove('active');
    document.body.style.overflow = '';
});

// Shop Now link in empty cart
document.getElementById('cart-shop-link').addEventListener('click', function(e) {
    e.preventDefault();
    cartSection.classList.remove('active');
    document.body.style.overflow = '';
});

// All Products overlay toggle
const allProductsSection = document.getElementById('all-products');

document.getElementById('view-all-btn').addEventListener('click', function(e) {
    e.preventDefault();
    allProductsSection.classList.add('active');
    document.body.classList.add('all-products-open');
    document.body.style.overflow = 'hidden';
});

document.getElementById('all-products-close').addEventListener('click', function(e) {
    e.preventDefault();
    allProductsSection.classList.remove('active');
    document.body.classList.remove('all-products-open');
    document.body.style.overflow = '';
});

// Event delegation for quantity & remove
cartItems.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    const index = parseInt(btn.dataset.index);

    if (btn.classList.contains('qty-btn')) {
        const action = btn.dataset.action;
        if (action === 'increase') {
            cart[index].quantity += 1;
        } else if (action === 'decrease' && cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        }
        saveCart();
        renderCart();
    }

    if (btn.classList.contains('remove-btn')) {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    }
});

// Checkout toast
checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = 'Checkout coming soon — your items are saved!';
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
});

// Init badge on page load
updateBadge();

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});


const cursor = document.createElement('div'); cursor.className = 'custom-cursor'; document.body.appendChild(cursor);

const cursorStyle = document.createElement('style'); cursorStyle.textContent = ` .custom-cursor { position: fixed; width: 20px; height: 20px; border: 1px solid var(--primary); border-radius: 50%; pointer-events: none; z-index: 9999; transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease; mix-blend-mode: difference; } 
.custom-cursor.hover {
    width: 40px;
    height: 40px;
    background: rgba(139, 115, 85, 0.1);
}`; 

document.head.appendChild(cursorStyle);

document.addEventListener('mousemove', (e) => { cursor.style.left = e.clientX - 10 + 'px'; cursor.style.top = e.clientY - 10 + 'px'; });

document.querySelectorAll('a, button').forEach(el => { el.addEventListener('mouseenter', () => cursor.classList.add('hover')); el.addEventListener('mouseleave', () => cursor.classList.remove('hover')); });

// Auth System
const authOverlay = document.getElementById('auth-overlay');
const authClose = document.getElementById('auth-close');
const profileIcon = document.getElementById('profile-icon');
const loginForm = document.getElementById('login-form');
const signupStep1 = document.getElementById('signup-step1');
const signupStep2 = document.getElementById('signup-step2');
const forgotForm = document.getElementById('forgot-form');
const authTabs = document.querySelectorAll('.auth-tab');
const authFormContainer = document.getElementById('auth-form-container');
const authProfile = document.getElementById('auth-profile');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profileAge = document.getElementById('profile-age');
const profileGender = document.getElementById('profile-gender');
const logoutBtn = document.getElementById('logout-btn');

const authError = document.getElementById('auth-error');
const authErrorSignup = document.getElementById('auth-error-signup');
const authErrorOtp = document.getElementById('auth-error-otp');
const authErrorForgot = document.getElementById('auth-error-forgot');
const authErrorForgot2 = document.getElementById('auth-error-forgot2');

const forgotBtn = document.getElementById('forgot-btn');
const forgotBackBtn = document.getElementById('forgot-back-btn');
const forgotSendBtn = document.getElementById('forgot-send-btn');
const forgotResetBtn = document.getElementById('forgot-reset-btn');
const forgotEmail = document.getElementById('forgot-email');
const forgotOtp = document.getElementById('forgot-otp');
const forgotNewPw = document.getElementById('forgot-new-pw');
const forgotStep1 = document.getElementById('forgot-step1');
const forgotStep2 = document.getElementById('forgot-step2');

const signupOtp = document.getElementById('signup-otp');
const signupVerifyBtn = document.getElementById('signup-verify-btn');
const signupBackBtn = document.getElementById('signup-back-btn');
const signupEmailDisplay = document.getElementById('signup-email-display');

let pendingSignupData = null;
let isAwaitingSignupOtp = false;

function showError(el, msg) {
    el.textContent = msg;
    setTimeout(() => { el.textContent = ''; }, 4000);
}

function openAuthModal() {
    authOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    authOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function displayProfile(user) {
    const meta = user.user_metadata || {};
    profileName.textContent = meta.full_name || 'AURA Member';
    profileEmail.textContent = user.email;
    profileAge.textContent = meta.age ? `Age: ${meta.age}` : '';
    profileGender.textContent = meta.gender ? `Gender: ${meta.gender}` : '';
    authFormContainer.classList.add('hidden');
    authProfile.classList.remove('hidden');
}

function resetAuthForms() {
    loginForm.reset();
    signupStep1.reset();
    signupOtp.value = '';
    forgotEmail.value = '';
    forgotOtp.value = '';
    forgotNewPw.value = '';
    signupStep1.classList.remove('hidden');
    signupStep2.classList.add('hidden');
    forgotForm.classList.add('hidden');
    forgotStep1.classList.remove('hidden');
    forgotStep2.classList.add('hidden');
    isAwaitingSignupOtp = false;
    pendingSignupData = null;
}

profileIcon.addEventListener('click', function(e) {
    e.preventDefault();
    checkSession();
});

authClose.addEventListener('click', closeAuthModal);

authOverlay.addEventListener('click', function(e) {
    if (e.target === authOverlay) closeAuthModal();
});

authTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        authTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const target = this.dataset.tab;
        loginForm.classList.toggle('hidden', target !== 'login');
        signupStep1.classList.toggle('hidden', target !== 'signup');
        signupStep2.classList.add('hidden');
        forgotForm.classList.add('hidden');
        authError.textContent = '';
        authErrorSignup.textContent = '';
        authErrorOtp.textContent = '';
        isAwaitingSignupOtp = false;
        pendingSignupData = null;
    });
});

// Sign In
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    const btn = this.querySelector('.auth-submit');
    btn.textContent = 'Signing In...';
    btn.disabled = true;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
    });

    btn.textContent = 'Sign In';
    btn.disabled = false;

    if (error) {
        showError(authError, error.message);
        return;
    }

    closeAuthModal();
    loginForm.reset();
});

// Sign Up Step 1
signupStep1.addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const password = this.querySelector('input[name="password"]').value;
    const age = parseInt(this.querySelector('input[name="age"]').value, 10);
    const gender = this.querySelector('select[name="gender"]').value;

    if (age < 10 || age > 80) {
        showError(authErrorSignup, 'Age must be between 10 and 80.');
        return;
    }

    const btn = this.querySelector('.auth-submit');
    btn.textContent = 'Creating Account...';
    btn.disabled = true;

    const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: name,
                age: String(age),
                gender
            }
        }
    });

    btn.textContent = 'Create Account';
    btn.disabled = false;

    if (error) {
        showError(authErrorSignup, error.message);
        return;
    }

    pendingSignupData = { email, name, age: String(age), gender };

    // If user was auto-confirmed, explicitly send an OTP via signInWithOtp
    if (data?.session) {
        await supabaseClient.auth.signOut();
        await supabaseClient.auth.signInWithOtp({ email });
    }

    isAwaitingSignupOtp = true;
    signupEmailDisplay.textContent = email;
    signupStep1.classList.add('hidden');
    signupStep2.classList.remove('hidden');
    authErrorSignup.textContent = '';
    setTimeout(() => signupOtp.focus(), 100);
});

// Sign Up Step 2 - Verify OTP
signupVerifyBtn.addEventListener('click', async function() {
    const token = signupOtp.value.trim();
    if (!token || token.length < 6) {
        showError(authErrorOtp, 'Please enter the full 6-digit code.');
        return;
    }
    if (!pendingSignupData) {
        showError(authErrorOtp, 'Session expired. Please sign up again.');
        return;
    }

    this.textContent = 'Verifying...';
    this.disabled = true;

    // Allow SIGNED_IN to show profile after successful verification
    isAwaitingSignupOtp = false;

    const { data, error } = await supabaseClient.auth.verifyOtp({
        email: pendingSignupData.email,
        token,
        type: 'email'
    });

    this.textContent = 'Verify Email';
    this.disabled = false;

    if (error) {
        isAwaitingSignupOtp = true;
        showError(authErrorOtp, error.message);
        return;
    }

    await supabaseClient.auth.updateUser({
        data: {
            full_name: pendingSignupData.name,
            age: pendingSignupData.age,
            gender: pendingSignupData.gender
        }
    });

    await supabaseClient.from('profiles').upsert({
        id: (await supabaseClient.auth.getUser()).data.user.id,
        email: pendingSignupData.email,
        full_name: pendingSignupData.name,
        age: pendingSignupData.age,
        gender: pendingSignupData.gender
    });

    pendingSignupData = null;
    signupStep2.classList.add('hidden');
    signupOtp.value = '';
});

// Sign Up Step 2 - Back
signupBackBtn.addEventListener('click', function() {
    signupStep2.classList.add('hidden');
    signupStep1.classList.remove('hidden');
    authErrorOtp.textContent = '';
    isAwaitingSignupOtp = false;
    pendingSignupData = null;
});

// Forgot Password Button
forgotBtn.addEventListener('click', function() {
    loginForm.classList.add('hidden');
    forgotForm.classList.remove('hidden');
    authError.textContent = '';
    authErrorForgot.textContent = '';
});

forgotBackBtn.addEventListener('click', function() {
    forgotForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    forgotStep1.classList.remove('hidden');
    forgotStep2.classList.add('hidden');
    forgotEmail.value = '';
    forgotOtp.value = '';
    forgotNewPw.value = '';
});

// Forgot Step 1 - Send Reset Code
forgotSendBtn.addEventListener('click', async function() {
    const email = forgotEmail.value.trim();
    if (!email) {
        showError(authErrorForgot, 'Please enter your email.');
        return;
    }

    this.textContent = 'Sending...';
    this.disabled = true;

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email);

    this.textContent = 'Send Reset Code';
    this.disabled = false;

    if (error) {
        showError(authErrorForgot, error.message);
        return;
    }

    forgotStep1.classList.add('hidden');
    forgotStep2.classList.remove('hidden');
    authErrorForgot.textContent = '';
    setTimeout(() => forgotOtp.focus(), 100);
});

// Forgot Step 2 - Verify OTP & Reset Password
forgotResetBtn.addEventListener('click', async function() {
    const email = forgotEmail.value.trim();
    const token = forgotOtp.value.trim();
    const newPassword = forgotNewPw.value;

    if (!token || token.length < 6) {
        showError(authErrorForgot2, 'Please enter the full 6-digit code.');
        return;
    }
    if (!newPassword || newPassword.length < 6) {
        showError(authErrorForgot2, 'Password must be at least 6 characters.');
        return;
    }

    this.textContent = 'Resetting...';
    this.disabled = true;

    const { data, error } = await supabaseClient.auth.verifyOtp({
        email,
        token,
        type: 'recovery'
    });

    if (error) {
        this.textContent = 'Reset Password';
        this.disabled = false;
        showError(authErrorForgot2, error.message);
        return;
    }

    const { error: updateError } = await supabaseClient.auth.updateUser({
        password: newPassword
    });

    this.textContent = 'Reset Password';
    this.disabled = false;

    if (updateError) {
        showError(authErrorForgot2, updateError.message);
        return;
    }

    forgotOtp.value = '';
    forgotNewPw.value = '';
});

// Logout
logoutBtn.addEventListener('click', async function() {
    await supabaseClient.auth.signOut();
    authProfile.classList.add('hidden');
    authFormContainer.classList.remove('hidden');
    closeAuthModal();
});

async function checkSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();

    if (session) {
        displayProfile(session.user);
        openAuthModal();
    } else {
        resetAuthForms();
        loginForm.classList.remove('hidden');
        signupStep1.classList.add('hidden');
        authProfile.classList.add('hidden');
        authFormContainer.classList.remove('hidden');
        openAuthModal();
    }
}

supabaseClient.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN' && !isAwaitingSignupOtp) {
        if (authOverlay.classList.contains('active')) {
            displayProfile(session.user);
        }
    }
    if (event === 'USER_UPDATED') {
        if (authOverlay.classList.contains('active') && session) {
            displayProfile(session.user);
        }
    }
});

// ====== PRODUCT DETAIL OVERLAY ======
const productOverlay = document.getElementById('product-overlay');
const productModalImg = document.getElementById('product-modal-img');
const productModalTag = document.getElementById('product-modal-tag');
const productModalName = document.getElementById('product-modal-name');
const productModalPrice = document.getElementById('product-modal-price');
const productModalDesc = document.getElementById('product-modal-desc');
const productModalAdd = document.getElementById('product-modal-add');
const productModalClose = document.getElementById('product-modal-close');

function openProductDetail(index) {
    const product = products[index];
    if (!product) return;

    productModalImg.src = product.image;
    productModalImg.alt = product.name;
    productModalTag.textContent = 'Calming Essential';
    productModalName.textContent = product.name;
    productModalPrice.textContent = '$' + product.price;
    productModalDesc.textContent = product.description;
    productModalAdd.dataset.name = product.name;
    productModalAdd.dataset.price = product.price;
    productModalAdd.dataset.image = product.image;
    productModalAdd.textContent = 'Add to Cart — $' + product.price;

    productOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
    productOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Open overlay on product card click (excluding Add to Cart button)
document.addEventListener('click', function(e) {
    const card = e.target.closest('.product-card');
    if (!card) return;
    if (e.target.closest('.btn-add')) return;

    const index = parseInt(card.dataset.index);
    if (!isNaN(index)) {
        openProductDetail(index);
    }
});

productModalClose.addEventListener('click', closeProductDetail);

productOverlay.addEventListener('click', function(e) {
    if (e.target === productOverlay) closeProductDetail();
});

// Add to Cart inside product detail overlay
productModalAdd.addEventListener('click', function() {
    const name = this.dataset.name;
    const price = parseFloat(this.dataset.price);
    const image = this.dataset.image;

    if (!name || !price) return;

    addToCart(name, price, image);
    renderCart();

    const original = this.textContent;
    this.textContent = 'Added to Cart!';
    this.style.background = '#4CAF50';
    setTimeout(() => {
        this.textContent = original;
        this.style.background = '';
    }, 2000);
});

