/**
 * Hat Bazar - Products JavaScript File
 * Contains product data and rendering functions
 */

// ============================================
// PRODUCT DATA
// ============================================

const products = [
    {
        id: 1,
        name: 'Apple iPhone 15 Pro Max (256GB)',
        category: 'Electronics',
        price: 185000,
        oldPrice: 195000,
        rating: 4.9,
        reviews: 1245,
        badge: 'hot',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400',
        description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
        inStock: true
    },
    {
        id: 2,
        name: 'Sony WH-1000XM5 Wireless Headphones',
        category: 'Electronics',
        price: 38500,
        oldPrice: 42000,
        rating: 4.8,
        reviews: 856,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400',
        description: 'Industry-leading noise cancellation optimized for you. Magnificent sound engineered to perfection with up to 30-hour battery life and quick charging.',
        inStock: true
    },
    {
        id: 3,
        name: 'Sony PlayStation 5 Console',
        category: 'Electronics',
        price: 65000,
        oldPrice: 72000,
        rating: 4.9,
        reviews: 2130,
        badge: 'hot',
        image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=400',
        description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio.',
        inStock: true
    },
    {
        id: 4,
        name: 'Apple MacBook Air M2 (256GB)',
        category: 'Electronics',
        price: 135000,
        oldPrice: 145000,
        rating: 4.9,
        reviews: 1540,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400',
        description: 'Supercharged by the M2 chip, the redesigned MacBook Air combines incredible performance with up to 18 hours of battery life in a strikingly thin enclosure.',
        inStock: true
    },
    {
        id: 5,
        name: 'Nike Air Force 1 \'07 Men\'s Sneakers',
        category: 'Clothing',
        price: 12500,
        oldPrice: 14000,
        rating: 4.7,
        reviews: 3240,
        badge: null,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=400',
        description: 'The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on crisp leather, bold colors and the perfect amount of flash.',
        inStock: true
    },
    {
        id: 6,
        name: 'Canon EOS R5 Mirrorless Camera',
        category: 'Electronics',
        price: 420000,
        oldPrice: 440000,
        rating: 4.9,
        reviews: 412,
        badge: null,
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400',
        description: 'Professional full-frame mirrorless camera featuring 45MP resolution, 8K video recording, and advanced Dual Pixel CMOS AF II. Lens sold separately.',
        inStock: true
    },
    {
        id: 7,
        name: 'Samsung 55" Neo QLED 4K Smart TV',
        category: 'Electronics',
        price: 145000,
        oldPrice: 160000,
        rating: 4.8,
        reviews: 512,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=400',
        description: 'Brilliant 4K resolution powered by Quantum Matrix Technology. Enjoy spectacular contrast and a hyper-smart processor that upscales all content.',
        inStock: true
    },
    {
        id: 8,
        name: 'Logitech MX Master 3S Wireless Mouse',
        category: 'Electronics',
        price: 11500,
        oldPrice: 13000,
        rating: 4.8,
        reviews: 1845,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400',
        description: 'An iconic remastered mouse with an 8K DPI track-on-glass sensor and Quiet Clicks. Designed for creatives and engineered for coders.',
        inStock: true
    },
    {
        id: 9,
        name: 'Dyson V15 Detect Absolute Vacuum',
        category: 'Home',
        price: 85000,
        oldPrice: 95000,
        rating: 4.7,
        reviews: 630,
        badge: null,
        image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400',
        description: 'Dyson\'s most powerful, intelligent cordless vacuum. Features a laser that reveals microscopic dust and a piezo sensor that counts dust particles.',
        inStock: true
    },
    {
        id: 10,
        name: 'Nespresso VertuoPlus Coffee Maker',
        category: 'Home',
        price: 22000,
        oldPrice: 26000,
        rating: 4.6,
        reviews: 1240,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=400',
        description: 'Brews 4 different cup sizes at the touch of a button. Features Centrifusion technology to gently brew both coffee and espresso with naturally formed crema.',
        inStock: true
    },
    {
        id: 11,
        name: 'Levi\'s Men\'s Original Denim Jacket',
        category: 'Clothing',
        price: 8500,
        oldPrice: 10500,
        rating: 4.7,
        reviews: 890,
        badge: null,
        image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400',
        description: 'The original jean jacket since 1967. A symbol of self-expression, it features a regular fit, button closures, and classic chest pockets.',
        inStock: true
    },
    {
        id: 12,
        name: 'Samsung Galaxy S24 Ultra (512GB)',
        category: 'Electronics',
        price: 195000,
        oldPrice: 205000,
        rating: 4.9,
        reviews: 940,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400',
        description: 'Meet the new era of mobile AI. The Galaxy S24 Ultra features a titanium exterior, a 200MP camera setup, and the built-in S Pen.',
        inStock: true
    },
    {
        id: 13,
        name: 'Ray-Ban Classic Aviator Sunglasses',
        category: 'Accessories',
        price: 16500,
        oldPrice: 19000,
        rating: 4.8,
        reviews: 1450,
        badge: null,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400',
        description: 'Currently one of the most iconic sunglass models in the world. Features a gold frame and classic G-15 green lenses for optimum visual clarity.',
        inStock: true
    },
    {
        id: 14,
        name: 'Apple AirPods Pro (2nd Gen)',
        category: 'Electronics',
        price: 28500,
        oldPrice: 32000,
        rating: 4.9,
        reviews: 5600,
        badge: 'hot',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=400',
        description: 'Features up to 2x more Active Noise Cancellation, plus Adaptive Transparency. Powered by the H2 chip for exceptional audio performance.',
        inStock: true
    },
    {
        id: 15,
        name: 'Nintendo Switch OLED Model',
        category: 'Electronics',
        price: 38000,
        oldPrice: 42000,
        rating: 4.8,
        reviews: 3120,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400',
        description: 'Play at home or on the go with a vibrant 7-inch OLED screen, a wide adjustable stand, a dock with a wired LAN port, and 64GB of storage.',
        inStock: true
    },
    {
        id: 16,
        name: 'Herman Miller Aeron Office Chair',
        category: 'Home',
        price: 165000,
        oldPrice: 180000,
        rating: 4.9,
        reviews: 750,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=400',
        description: 'The benchmark for ergonomic seating. Features 8Z Pellicle suspension material to dissipate body heat and PostureFit SL hardware for alignment.',
        inStock: true
    },
    {
        id: 17,
        name: 'Yeti Rambler 26 oz Bottle',
        category: 'Accessories',
        price: 4500,
        oldPrice: 5500,
        rating: 4.8,
        reviews: 4200,
        badge: null,
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=400',
        description: 'Tough, double-wall vacuum insulated stainless steel bottle. Keeps your water ice-cold or coffee piping hot until the very last sip.',
        inStock: true
    },
    {
        id: 18,
        name: 'Chanel Coco Mademoiselle Eau de Parfum',
        category: 'Accessories',
        price: 18500,
        oldPrice: 22000,
        rating: 4.9,
        reviews: 1890,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400',
        description: 'An irresistibly sexy, irrepressibly spirited fragrance. A sparkling, bold floral-woody scent that recalls a daring young Coco Chanel.',
        inStock: true
    },
    {
        id: 19,
        name: 'DJI Mini 4 Pro Drone',
        category: 'Electronics',
        price: 125000,
        oldPrice: 135000,
        rating: 4.8,
        reviews: 650,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=400',
        description: 'Our most advanced mini camera drone to date. Features 4K/60fps HDR video, omnidirectional obstacle sensing, and extended battery life.',
        inStock: true
    },
    {
        id: 20,
        name: 'Kindle Paperwhite (16GB)',
        category: 'Electronics',
        price: 19500,
        oldPrice: 22000,
        rating: 4.8,
        reviews: 8400,
        badge: null,
        image: 'https://images.unsplash.com/photo-1592496001020-d31bd830651f?auto=format&fit=crop&q=80&w=400',
        description: 'Purpose-built for reading with a 6.8” display, thinner borders, adjustable warm light, up to 10 weeks of battery life, and 20% faster page turns.',
        inStock: true
    },
    // ── CLOTHING (new) ──────────────────────────────────────────────
    {
        id: 21,
        name: 'H&M Slim Fit Oxford Dress Shirt',
        category: 'Clothing',
        price: 2800,
        oldPrice: 3500,
        rating: 4.5,
        reviews: 2340,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=400',
        description: 'Classic slim-fit Oxford shirt in premium cotton blend. Perfect for office or casual outings. Features button-down collar and single-button cuffs.',
        inStock: true
    },
    {
        id: 22,
        name: 'Adidas Ultraboost 23 Running Shoes',
        category: 'Clothing',
        price: 17500,
        oldPrice: 20000,
        rating: 4.8,
        reviews: 1870,
        badge: 'hot',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
        description: 'Experience incredible energy return with BOOST midsole cushioning. Primeknit upper wraps your foot for a supportive, sock-like fit.',
        inStock: true
    },
    {
        id: 23,
        name: 'Uniqlo Ultra Light Down Jacket',
        category: 'Clothing',
        price: 5500,
        oldPrice: 7000,
        rating: 4.7,
        reviews: 3100,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=400',
        description: 'Lightweight packable down jacket that packs into its own pocket. Premium 600-fill power down provides exceptional warmth without bulk.',
        inStock: true
    },
    {
        id: 24,
        name: 'Tommy Hilfiger Classic Polo Shirt',
        category: 'Clothing',
        price: 4200,
        oldPrice: 5500,
        rating: 4.6,
        reviews: 2750,
        badge: null,
        image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=400',
        description: 'The iconic Tommy Hilfiger polo. Made from soft piqué cotton with a slim fit, three-button placket, and embroidered flag logo at chest.',
        inStock: true
    },
    {
        id: 25,
        name: 'Levi\'s 511 Slim Fit Jeans',
        category: 'Clothing',
        price: 6800,
        oldPrice: 8500,
        rating: 4.7,
        reviews: 5600,
        badge: null,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80\u0026w=400',
        description: 'Slim through the hip and thigh with a narrow leg opening. Made with stretch for all-day comfort. The perfect modern slim silhouette.',
        inStock: true
    },
    {
        id: 26,
        name: 'Zara Oversized Wool Blend Coat',
        category: 'Clothing',
        price: 9500,
        oldPrice: 12000,
        rating: 4.6,
        reviews: 1240,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&q=80&w=400',
        description: 'Elegant oversized coat in a premium wool blend. Features notch lapels, two front pockets, and a single-breasted button fastening.',
        inStock: true
    },
    {
        id: 27,
        name: 'Under Armour Tech 2.0 T-Shirt',
        category: 'Clothing',
        price: 2200,
        oldPrice: 2800,
        rating: 4.5,
        reviews: 4500,
        badge: null,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400',
        description: 'Ultra-soft, natural feel fabric that is stronger than cotton. Anti-odor technology prevents growth of odor-causing microbes.',
        inStock: true
    },
    {
        id: 28,
        name: 'New Balance 574 Classic Sneakers',
        category: 'Clothing',
        price: 9800,
        oldPrice: 11500,
        rating: 4.6,
        reviews: 2890,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=400',
        description: 'A true sneaker classic since 1988. Features a suede and mesh upper with ENCAP midsole technology for all-day comfort and support.',
        inStock: true
    },
    {
        id: 29,
        name: 'Columbia Watertight II Rain Jacket',
        category: 'Clothing',
        price: 7500,
        oldPrice: 9000,
        rating: 4.7,
        reviews: 1650,
        badge: null,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=400',
        description: 'Waterproof shell with Omni-Tech technology. Fully seam-sealed construction keeps you dry in any weather. Packable into its own pocket.',
        inStock: true
    },
    {
        id: 30,
        name: 'Mango Floral Midi Dress',
        category: 'Clothing',
        price: 4800,
        oldPrice: 6200,
        rating: 4.6,
        reviews: 980,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=400',
        description: 'Elegant floral-print midi dress with a V-neckline, flowing fabric, and adjustable tie waist. Perfect for summer outings and special occasions.',
        inStock: true
    },
    // ── HOME & LIVING (new) ────────────────────────────────────────
    {
        id: 31,
        name: 'KitchenAid Artisan 5-Qt Stand Mixer',
        category: 'Home',
        price: 62000,
        oldPrice: 72000,
        rating: 4.9,
        reviews: 3400,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=400',
        description: 'The iconic stand mixer with 10 speeds and a 5-quart stainless steel bowl. Over 15 optional attachments let you make everything from pasta to ice cream.',
        inStock: true
    },
    {
        id: 32,
        name: 'IKEA KALLAX Shelving Unit',
        category: 'Home',
        price: 12500,
        oldPrice: 15000,
        rating: 4.5,
        reviews: 5800,
        badge: null,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400',
        description: 'Versatile shelving unit that works as a room divider, sideboard, or bookcase. Fits boxes and inserts sold separately. 4x2 grid, white finish.',
        inStock: true
    },
    {
        id: 33,
        name: 'Instant Pot Duo 7-in-1 Electric Cooker',
        category: 'Home',
        price: 18500,
        oldPrice: 22000,
        rating: 4.8,
        reviews: 9200,
        badge: 'hot',
        image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=400',
        description: '7-in-1 multi-use cooker: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer. Saves up to 70% cooking time.',
        inStock: true
    },
    {
        id: 34,
        name: 'Philips Hue White & Color Ambiance Starter Kit',
        category: 'Home',
        price: 25000,
        oldPrice: 29000,
        rating: 4.7,
        reviews: 1870,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400',
        description: 'Smart LED lighting with 16 million colors and 50,000 shades of white. Control via app or voice with Alexa, Google Home, and Apple HomeKit.',
        inStock: true
    },
    {
        id: 35,
        name: 'Casper Original Foam Mattress (Queen)',
        category: 'Home',
        price: 95000,
        oldPrice: 110000,
        rating: 4.8,
        reviews: 2100,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400',
        description: 'Ergonomic zone support for better alignment. Made with premium open-cell foam for airflow and temperature regulation. 100-night trial included.',
        inStock: true
    },
    {
        id: 36,
        name: 'Ninja Foodi 6-in-1 Air Fryer',
        category: 'Home',
        price: 24500,
        oldPrice: 28000,
        rating: 4.7,
        reviews: 4600,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=400',
        description: 'Air fry, roast, reheat, dehydrate, bake, and broil. Up to 75% less fat than traditional frying. 4-quart ceramic-coated basket is dishwasher safe.',
        inStock: true
    },
    {
        id: 37,
        name: 'Le Creuset Signature Cast Iron Dutch Oven',
        category: 'Home',
        price: 42000,
        oldPrice: 50000,
        rating: 4.9,
        reviews: 1340,
        badge: null,
        image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&q=80&w=400',
        description: 'Enameled cast iron for exceptional heat distribution and retention. Ideal for slow cooking, braising, baking, and more. Oven safe up to 260°C.',
        inStock: true
    },
    {
        id: 38,
        name: 'Nest Learning Thermostat (3rd Gen)',
        category: 'Home',
        price: 32000,
        oldPrice: 36000,
        rating: 4.7,
        reviews: 820,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&q=80&w=400',
        description: 'Programs itself based on what temperatures you choose. Learns your schedule and programs itself in about a week. Certified Works with Alexa.',
        inStock: true
    },
    {
        id: 39,
        name: 'Sunbeam Premium Quilted Mattress Pad (Queen)',
        category: 'Home',
        price: 8500,
        oldPrice: 10500,
        rating: 4.5,
        reviews: 1900,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400',
        description: 'Plush quilted top with polyester fill for extra cushioning. Fits mattresses up to 40cm deep. Machine washable for easy care.',
        inStock: true
    },
    {
        id: 40,
        name: 'iRobot Roomba j7+ Self-Emptying Robot Vacuum',
        category: 'Home',
        price: 78000,
        oldPrice: 88000,
        rating: 4.6,
        reviews: 720,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400',
        description: 'Automatically avoids pet waste and charging cables. Empties itself for up to 60 days. Smart mapping navigates room-to-room with ease.',
        inStock: true
    },
    // ── ACCESSORIES (new) ─────────────────────────────────────────
    {
        id: 41,
        name: 'Apple Watch Series 9 (45mm GPS)',
        category: 'Accessories',
        price: 58000,
        oldPrice: 65000,
        rating: 4.9,
        reviews: 3400,
        badge: 'hot',
        image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&q=80&w=400',
        description: 'The most advanced Apple Watch. Features the S9 chip, new Double Tap gesture, precision finding for iPhone, and up to 18 hours of battery life.',
        inStock: true
    },
    {
        id: 42,
        name: 'Fossil Neutra Chronograph Watch',
        category: 'Accessories',
        price: 22500,
        oldPrice: 28000,
        rating: 4.6,
        reviews: 1240,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400',
        description: 'Stainless steel chronograph watch with mineral glass crystal. Water resistant to 50 meters. Features a date window and genuine leather strap.',
        inStock: true
    },
    {
        id: 43,
        name: 'Coach Tabby 26 Shoulder Bag',
        category: 'Accessories',
        price: 38500,
        oldPrice: 45000,
        rating: 4.8,
        reviews: 870,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400',
        description: 'Crafted from smooth pebble leather with a turn-lock closure. Features adjustable crossbody strap and refined gold hardware. Made in Italy.',
        inStock: true
    },
    {
        id: 44,
        name: 'Samsonite Omni 3-Piece Hardside Luggage Set',
        category: 'Accessories',
        price: 32000,
        oldPrice: 40000,
        rating: 4.7,
        reviews: 2100,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&q=80&w=400',
        description: 'Scratch-resistant micro-diamond texture. 4 multi-directional spinner wheels for effortless mobility. TSA-approved combination lock included.',
        inStock: true
    },
    {
        id: 45,
        name: 'Gucci GG Canvas Belt',
        category: 'Accessories',
        price: 28000,
        oldPrice: 34000,
        rating: 4.7,
        reviews: 650,
        badge: null,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400',
        description: 'Iconic Gucci logo belt in signature GG canvas with polished double G buckle. Width 35mm. Pairs perfectly with both casual and formal outfits.',
        inStock: true
    },
    {
        id: 46,
        name: 'Polaroid Now+ Instant Camera',
        category: 'Accessories',
        price: 16500,
        oldPrice: 19000,
        rating: 4.5,
        reviews: 1480,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=400',
        description: 'Bluetooth-connected instant camera with 5 creative lens filters. Features autofocus, self-timer, and double exposure. Compatible with Polaroid i-Type film.',
        inStock: true
    },
    {
        id: 47,
        name: 'JBL Clip 4 Portable Waterproof Speaker',
        category: 'Accessories',
        price: 7500,
        oldPrice: 9000,
        rating: 4.7,
        reviews: 3200,
        badge: null,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=400',
        description: 'Bold JBL Pro Sound in a compact, carabiner-style speaker. IP67 waterproof and dustproof. Up to 10 hours of playtime. Clips anywhere.',
        inStock: true
    },
    {
        id: 48,
        name: 'Montblanc Meisterstück Ballpoint Pen',
        category: 'Accessories',
        price: 24000,
        oldPrice: 28000,
        rating: 4.9,
        reviews: 450,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=400',
        description: 'The world\'s most iconic writing instrument since 1924. Black precious resin barrel with gold-plated fittings. A timeless symbol of culture and quality.',
        inStock: true
    },
    {
        id: 49,
        name: 'Anker 737 Power Bank (24,000mAh)',
        category: 'Accessories',
        price: 9500,
        oldPrice: 12000,
        rating: 4.8,
        reviews: 2870,
        badge: 'hot',
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400',
        description: '140W total output with a smart display showing charge percentage and time remaining. Charges MacBook Air in under 2 hours. TSA carry-on approved.',
        inStock: true
    },
    {
        id: 50,
        name: 'Oakley Holbrook Polarized Sunglasses',
        category: 'Accessories',
        price: 19500,
        oldPrice: 23000,
        rating: 4.8,
        reviews: 1750,
        badge: null,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400',
        description: 'Plutonite lens material filters out 100% of UV rays. Polarized lenses eliminate glare from reflective surfaces. Lightweight O-Matter frame.',
        inStock: true
    },
    // ── ELECTRONICS (new) ─────────────────────────────────────────
    {
        id: 51,
        name: 'Google Pixel 8 Pro (256GB)',
        category: 'Electronics',
        price: 145000,
        oldPrice: 155000,
        rating: 4.7,
        reviews: 1120,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400',
        description: 'Powered by Google Tensor G3 chip with advanced AI features. Features a 50MP main camera with Super Res Zoom up to 30x. 7 years of OS updates.',
        inStock: true
    },
    {
        id: 52,
        name: 'Dell XPS 15 (Core i7, 16GB RAM)',
        category: 'Electronics',
        price: 185000,
        oldPrice: 200000,
        rating: 4.8,
        reviews: 860,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=400',
        description: 'InfinityEdge OLED display with 3.5K resolution. Intel Core i7 processor and NVIDIA RTX 4060 graphics for peak creative and gaming performance.',
        inStock: true
    },
    {
        id: 53,
        name: 'Bose QuietComfort Earbuds II',
        category: 'Electronics',
        price: 32000,
        oldPrice: 36000,
        rating: 4.8,
        reviews: 2340,
        badge: 'hot',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400',
        description: 'Personalized noise cancellation and sound customization using your unique ear anatomy. Up to 6 hours per charge with 3 additional charges from case.',
        inStock: true
    },
    {
        id: 54,
        name: 'GoPro HERO12 Black',
        category: 'Electronics',
        price: 58000,
        oldPrice: 65000,
        rating: 4.7,
        reviews: 1450,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&q=80&w=400',
        description: 'Capture 5.3K60 video and 27MP photos. HyperSmooth 6.0 video stabilization. Waterproof to 10m. Longest battery life ever in a HERO camera.',
        inStock: true
    },
    {
        id: 55,
        name: 'ASUS ROG Swift 27" 4K Gaming Monitor',
        category: 'Electronics',
        price: 95000,
        oldPrice: 108000,
        rating: 4.8,
        reviews: 640,
        badge: 'featured',
        image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=400',
        description: '4K UHD IPS panel with 160Hz refresh rate and 1ms response time. NVIDIA G-SYNC compatible. HDR 400 with peak brightness of 600 nits.',
        inStock: true
    },
    {
        id: 56,
        name: 'Sonos Era 100 Smart Speaker',
        category: 'Electronics',
        price: 38500,
        oldPrice: 42000,
        rating: 4.7,
        reviews: 980,
        badge: null,
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=400',
        description: 'Superb stereo sound with two angled tweeters. Tune your speaker to your space automatically with Trueplay. Works with Alexa and Google Assistant.',
        inStock: true
    },
    {
        id: 57,
        name: 'Keychron K2 Wireless Mechanical Keyboard',
        category: 'Electronics',
        price: 12500,
        oldPrice: 14500,
        rating: 4.7,
        reviews: 3100,
        badge: null,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=400',
        description: 'Compact 75% layout with Bluetooth 5.1 and wired mode. Backlit RGB with Gateron G Pro switches. Compatible with Mac and Windows.',
        inStock: true
    },
    {
        id: 58,
        name: 'iPad Air 5th Gen (256GB, Wi-Fi)',
        category: 'Electronics',
        price: 92000,
        oldPrice: 100000,
        rating: 4.9,
        reviews: 2100,
        badge: 'sale',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400',
        description: 'Thin, light, powerful. Featuring the M1 chip with 5G connectivity. 10.9-inch Liquid Retina display with True Tone. Compatible with Apple Pencil 2.',
        inStock: true
    },
    {
        id: 59,
        name: 'Samsung T7 Shield Portable SSD (2TB)',
        category: 'Electronics',
        price: 18500,
        oldPrice: 22000,
        rating: 4.8,
        reviews: 1780,
        badge: null,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=400',
        description: 'Up to 1,050MB/s read speed. IP65 rated dust and water resistant with rugged rubber outer shell. 3-year limited warranty. USB 3.2 Gen 2.',
        inStock: true
    },
    {
        id: 60,
        name: 'Meta Quest 3 VR Headset (128GB)',
        category: 'Electronics',
        price: 68000,
        oldPrice: 75000,
        rating: 4.7,
        reviews: 1420,
        badge: 'new',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=400',
        description: 'Mixed reality breakthrough with full-color passthrough. Snapdragon XR2 Gen 2 chip delivers 2x the graphics performance of Quest 2. 110° horizontal FOV.',
        inStock: true
    }
];


// Make products available globally
window.products = products;

// ============================================
// PRODUCT HELPER FUNCTIONS
// ============================================

/**
 * Get product by ID
 * @param {number|string} id - Product ID
 * @returns {Object|null} Product object or null
 */
function getProductById(id) {
    return products.find(p => p.id === parseInt(id)) || null;
}
window.getProductById = getProductById;

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Array} Filtered products
 */
function getProductsByCategory(category) {
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
window.getProductsByCategory = getProductsByCategory;

/**
 * Search products
 * @param {string} query - Search query
 * @returns {Array} Matching products
 */
function searchProducts(query) {
    const lowerQuery = query.toLowerCase().trim();
    return products.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    );
}
window.searchProducts = searchProducts;

/**
 * Get related products
 * @param {number|string} productId - Current product ID
 * @param {number} limit - Number of products to return
 * @returns {Array} Related products
 */
function getRelatedProducts(productId, limit = 4) {
    const currentProduct = getProductById(productId);
    if (!currentProduct) return [];

    // Get products from same category, excluding current
    const related = products.filter(p =>
        p.id !== parseInt(productId) &&
        p.category === currentProduct.category
    );

    // If not enough, add random products
    if (related.length < limit) {
        const others = products.filter(p =>
            p.id !== parseInt(productId) &&
            !related.includes(p)
        );
        related.push(...others);
    }

    // Shuffle and limit
    return related.sort(() => 0.5 - Math.random()).slice(0, limit);
}
window.getRelatedProducts = getRelatedProducts;

/**
 * Calculate discount percentage
 * @param {number} oldPrice - Original price
 * @param {number} newPrice - New price
 * @returns {number} Discount percentage
 */
function calculateDiscount(oldPrice, newPrice) {
    if (!oldPrice || !newPrice || oldPrice <= newPrice) return 0;
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}
window.calculateDiscount = calculateDiscount;

// ============================================
// PRODUCT RENDERING FUNCTIONS
// ============================================

/**
 * Create star rating HTML
 * @param {number} rating - Rating value (0-5)
 * @returns {string} Star rating HTML
 */
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const FILLED  = 'var(--warning, #f4a400)';
    const EMPTY   = 'var(--gray-300, #dee2e6)';
    const STAR_PATH = 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

    let html = '<span class="star-rating">';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            // Full star
            html += `<svg class="star filled" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="${FILLED}" stroke="${FILLED}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${STAR_PATH}"/></svg>`;
        } else if (i === fullStars && hasHalfStar) {
            // Half star using clipPath
            const id = `hstar-${Math.random().toString(36).slice(2,7)}`;
            html += `<svg class="star half" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <defs><clipPath id="${id}-l"><rect x="0" y="0" width="12" height="24"/></clipPath><clipPath id="${id}-r"><rect x="12" y="0" width="12" height="24"/></clipPath></defs>
                <path d="${STAR_PATH}" fill="${EMPTY}" stroke="${EMPTY}" stroke-width="1"/>
                <path d="${STAR_PATH}" fill="${FILLED}" stroke="${FILLED}" stroke-width="1" clip-path="url(#${id}-l)"/>
            </svg>`;
        } else {
            // Empty star
            html += `<svg class="star" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="${EMPTY}" stroke="${EMPTY}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${STAR_PATH}"/></svg>`;
        }
    }
    html += '</span>';
    return html;
}
window.createStarRating = createStarRating;



/**
 * Create product card HTML
 * @param {Object} product - Product object
 * @returns {string} Product card HTML
 */
function createProductCard(product) {
    const discount = calculateDiscount(product.oldPrice, product.price);
    const hasDiscount = discount > 0;

    let badgeHtml = '';
    if (product.badge) {
        const badgeText = {
            'sale': 'Sale',
            'new': 'New',
            'hot': 'Hot',
            'featured': 'Featured'
        }[product.badge] || product.badge;
        badgeHtml = `<span class="badge badge-${product.badge}">${badgeText}</span>`;
    }

    const discountBadge = hasDiscount
        ? `<span class="badge-discount">-${discount}%</span>`
        : '';

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-card-badge">${badgeHtml}</div>
            ${discountBadge}
            <div class="product-card-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="product-card-actions">
                    <button class="product-action-btn" onclick="addToWishlistFromCard(${product.id})" title="Add to Wishlist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button class="product-action-btn" onclick="quickView(${product.id})" title="Quick View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                    <button class="product-action-btn" onclick="addToCartFromCard(${product.id})" title="Add to Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </button>
                </div>
            </div>
            <div class="product-card-content">
                <span class="product-card-category">${product.category}</span>
                <h3 class="product-card-title">
                    <a href="product-detail.html?id=${product.id}">${product.name}</a>
                </h3>
                <div class="product-card-rating">
                    <span class="product-card-stars">${createStarRating(product.rating)}</span>
                    <span class="product-card-reviews">(${product.reviews})</span>
                </div>
                <div class="product-card-price">
                    <span class="product-card-current-price">${formatPrice(product.price)}</span>
                    ${hasDiscount ? `<span class="product-card-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}
window.createProductCard = createProductCard;

/**
 * Render products to container
 * @param {string|HTMLElement} container - Container selector or element
 * @param {Array} productList - Products to render
 * @param {boolean} append - Append or replace
 */
function renderProducts(container, productList, append = false) {
    const el = typeof container === 'string' ? document.querySelector(container) : container;
    if (!el) {
        console.error('Container not found:', container);
        return;
    }

    const html = productList.map(product => createProductCard(product)).join('');

    if (append) {
        el.innerHTML += html;
    } else {
        el.innerHTML = html;
    }
    // Process any data-lucide attributes in rendered content
    if (window.refreshIcons) refreshIcons();
}
window.renderProducts = renderProducts;

// ============================================
// PRODUCT CARD ACTIONS
// ============================================

/**
 * Add product to cart from card
 * @param {number} productId - Product ID
 */
function addToCartFromCard(productId) {
    const product = getProductById(productId);
    if (product) {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }
}
window.addToCartFromCard = addToCartFromCard;

/**
 * Add product to wishlist from card
 * @param {number} productId - Product ID
 */
function addToWishlistFromCard(productId) {
    const product = getProductById(productId);
    if (product) {
        addToWishlist({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category
        });
    }
}
window.addToWishlistFromCard = addToWishlistFromCard;

/**
 * Quick view modal
 * @param {number} productId - Product ID
 */
function quickView(productId) {
    const product = getProductById(productId);
    if (!product) return;

    // Create modal if not exists
    let modal = document.querySelector('.quick-view-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal-overlay modal-quick-view quick-view-modal';
        document.body.appendChild(modal);
    }

    const discount = calculateDiscount(product.oldPrice, product.price);

    modal.innerHTML = `
        <div class="modal-box">
            <div class="modal-header">
                <h3 class="modal-title">Quick View</h3>
                <button class="modal-close" onclick="closeQuickView()"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
            </div>
            <div class="modal-body">
                <div class="modal-product">
                    <div class="modal-product-image">
                        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="modal-product-info">
                        <span class="product-card-category">${product.category}</span>
                        <h2>${product.name}</h2>
                        <div class="product-price" style="font-size: 1.75rem; margin: 16px 0;">
                            <span style="color: var(--primary); font-weight: 700;">${formatPrice(product.price)}</span>
                            ${discount > 0 ? `<span style="text-decoration: line-through; color: var(--gray-500); margin-left: 12px;">${formatPrice(product.oldPrice)}</span>` : ''}
                        </div>
                        <div class="product-card-rating" style="margin-bottom: 16px;">
                            <span class="product-card-stars">${createStarRating(product.rating)}</span>
                            <span class="product-card-reviews">(${product.reviews} reviews)</span>
                        </div>
                        <p class="product-description" style="color: var(--gray-700); line-height: 1.7; margin-bottom: 24px;">
                            ${product.description}
                        </p>
                        <div class="flex gap-2">
                            <button class="btn btn-primary btn-lg" onclick="addToCartFromCard(${product.id}); closeQuickView();">
                                Add to Cart
                            </button>
                            <a href="product-detail.html?id=${product.id}" class="btn btn-outline btn-lg">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Close when clicking the overlay backdrop
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeQuickView();
    }, { once: true });
}
window.quickView = quickView;

/**
 * Close quick view modal
 */
function closeQuickView() {
    const modal = document.querySelector('.quick-view-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}
window.closeQuickView = closeQuickView;

// ============================================
// PRODUCT DETAIL PAGE
// ============================================

/**
 * Render product detail page
 */
function renderProductDetail() {
    const productContainer = document.querySelector('.product-detail-layout');
    if (!productContainer) return;

    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product = getProductById(productId);
    if (!product) {
        productContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-state-icon"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gray-300)"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
                <h3>Product Not Found</h3>
                <p>Sorry, we couldn't find the product you're looking for.</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        return;
    }

    // Update page title
    document.title = `${product.name} - Hat Bazar`;

    const discount = calculateDiscount(product.oldPrice, product.price);

    // Render product detail
    const html = `
        <div class="product-gallery">
            <div class="gallery-main">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--border-radius-lg);">
            </div>
            <div class="gallery-thumbs">
                <div class="gallery-thumb active">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="gallery-thumb">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="gallery-thumb">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>
        <div class="product-info">
            <div class="breadcrumb">
                <a href="index.html">Home</a>
                <span class="breadcrumb-separator">/</span>
                <a href="products.html">Shop</a>
                <span class="breadcrumb-separator">/</span>
                <a href="category-${product.category.toLowerCase()}.html">${product.category}</a>
                <span class="breadcrumb-separator">/</span>
                <span class="breadcrumb-current">${product.name}</span>
            </div>
            <h1 class="product-title">${product.name}</h1>
            <div class="product-meta">
                <div class="product-rating">
                    <span class="product-rating-stars" style="color: var(--warning);">${createStarRating(product.rating)}</span>
                    <span class="product-rating-count">${product.reviews} Reviews</span>
                </div>
                <span class="text-success" style="display:inline-flex;align-items:center;gap:4px;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> In Stock</span>
            </div>
            <div class="product-price-row">
                <span class="product-price">${formatPrice(product.price)}</span>
                ${discount > 0 ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                ${discount > 0 ? `<span class="product-discount">-${discount}% OFF</span>` : ''}
            </div>
            <p class="product-short-desc">${product.description}</p>

            ${product.category === 'Clothing' ? `
            <div class="product-options">
                <div class="option-group">
                    <label class="option-label">Size</label>
                    <div class="option-values">
                        <button class="option-btn">S</button>
                        <button class="option-btn active">M</button>
                        <button class="option-btn">L</button>
                        <button class="option-btn">XL</button>
                    </div>
                </div>
                <div class="option-group">
                    <label class="option-label">Color</label>
                    <div class="option-values">
                        <button class="option-btn active">Black</button>
                        <button class="option-btn">Blue</button>
                        <button class="option-btn">Red</button>
                    </div>
                </div>
            </div>
            ` : ''}

            <div class="quantity-selector">
                <span>Quantity:</span>
                <div class="quantity-input-wrapper">
                    <button class="quantity-btn" onclick="adjustDetailQty(-1)">-</button>
                    <input type="number" class="quantity-input" id="detail-qty" value="1" min="1" max="99">
                    <button class="quantity-btn" onclick="adjustDetailQty(1)">+</button>
                </div>
            </div>

            <div class="product-actions">
                <button class="btn btn-primary btn-lg" onclick="addToCartFromDetail(${product.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add to Cart
                </button>
                <button class="btn btn-outline btn-lg" onclick="addToWishlistFromCard(${product.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> Add to Wishlist
                </button>
            </div>
        </div>
    `;

    productContainer.innerHTML = html;

    // Add tab functionality
    initProductTabs();

    // Render related products
    renderRelatedProducts(product.id);
}
window.renderProductDetail = renderProductDetail;

/**
 * Adjust quantity on product detail
 * @param {number} change - Quantity change
 */
function adjustDetailQty(change) {
    const input = document.getElementById('detail-qty');
    let newVal = parseInt(input.value) + change;
    if (newVal < 1) newVal = 1;
    if (newVal > 99) newVal = 99;
    input.value = newVal;
}
window.adjustDetailQty = adjustDetailQty;

/**
 * Add to cart from product detail
 * @param {number} productId - Product ID
 */
function addToCartFromDetail(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const qty = parseInt(document.getElementById('detail-qty')?.value || 1);

    addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: qty
    });
}
window.addToCartFromDetail = addToCartFromDetail;

/**
 * Initialize product tabs
 */
function initProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update content
            tabContents.forEach(c => c.classList.remove('active'));
            const content = document.getElementById(tab);
            if (content) content.classList.add('active');
        });
    });
}

/**
 * Render related products
 * @param {number} currentId - Current product ID
 */
function renderRelatedProducts(currentId) {
    const container = document.querySelector('.related-products-grid');
    if (!container) return;

    const related = getRelatedProducts(currentId, 4);
    renderProducts(container, related);
}
window.renderRelatedProducts = renderRelatedProducts;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product detail page
    if (document.querySelector('.product-detail-page')) {
        renderProductDetail();
    }

    // Initialize search results
    if (document.querySelector('.search-results-page')) {
        renderSearchResults();
    }

    // Render featured products on homepage
    const featuredContainer = document.querySelector('.featured-products-grid');
    if (featuredContainer) {
        const featured = products.filter(p => p.badge === 'sale' || p.badge === 'hot').slice(0, 8);
        renderProducts(featuredContainer, featured);
    }

    // Render new arrivals on homepage
    const newArrivalsContainer = document.querySelector('.new-arrivals-grid');
    if (newArrivalsContainer) {
        const newArrivals = products.filter(p => p.badge === 'new').slice(0, 4);
        renderProducts(newArrivalsContainer, newArrivals);
    }

    // Render products on products page
    const allProductsContainer = document.querySelector('.all-products-grid');
    if (allProductsContainer) {
        let currentPage = 1;
        const itemsPerPage = 12;
        window._filteredProducts = [...products]; // tracked filtered set

        function buildPagination(curPage, totalPages) {
            const paginationContainer = document.querySelector('.pagination');
            if (!paginationContainer) return;
            let html = `<a href="#" class="pagination-item pagination-prev" onclick="changePage(${curPage - 1}, event)" ${curPage === 1 ? 'style="opacity:0.5;pointer-events:none;"' : ''}>← Prev</a>`;
            for (let i = 1; i <= totalPages; i++) {
                html += i === curPage
                    ? `<span class="pagination-item pagination-current">${i}</span>`
                    : `<a href="#" class="pagination-item pagination-link" onclick="changePage(${i}, event)">${i}</a>`;
            }
            html += `<a href="#" class="pagination-item pagination-next" onclick="changePage(${curPage + 1}, event)" ${curPage === totalPages ? 'style="opacity:0.5;pointer-events:none;"' : ''}>Next →</a>`;
            paginationContainer.innerHTML = html;
        }

        window.changePage = function(page, event) {
            if (event) event.preventDefault();
            const src = window._filteredProducts;
            const totalPages = Math.max(1, Math.ceil(src.length / itemsPerPage));
            if (page < 1 || page > totalPages) return;
            currentPage = page;
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            renderProducts(allProductsContainer, src.slice(start, end));
            const resultsText = document.querySelector('.shop-results');
            if (resultsText) {
                resultsText.textContent = src.length
                    ? `Showing ${start + 1}–${Math.min(end, src.length)} of ${src.length} products`
                    : 'No products match your filters';
            }
            buildPagination(currentPage, totalPages);
            window.scrollTo({ top: 100, behavior: 'smooth' });
        };

        window.applyFiltersAndSort = function() {
            const sections = document.querySelectorAll('.sidebar-section');
            // --- Categories ---
            let selCats = [];
            let allCatChecked = false;
            if (sections[0]) {
                const cbs = sections[0].querySelectorAll('.filter-item input[type="checkbox"]');
                cbs.forEach((cb, i) => {
                    if (i === 0) { allCatChecked = cb.checked; }
                    else if (cb.checked) {
                        const label = cb.closest('.filter-item').querySelector('span').textContent.trim();
                        selCats.push(label === 'Home & Living' ? 'Home' : label);
                    }
                });
            }
            // --- Price ---
            const priceEl = document.getElementById('price-range');
            const maxPrice = priceEl ? parseInt(priceEl.value) : 1000000;
            // --- Rating ---
            let minRating = 0;
            if (sections[2]) {
                const rcbs = sections[2].querySelectorAll('.filter-item input[type="checkbox"]');
                const ratingMap = [5, 4, 3];
                rcbs.forEach((cb, i) => { if (cb.checked && ratingMap[i] > 0) minRating = Math.min(minRating || 99, ratingMap[i]); });
                if (minRating === 99) minRating = 0;
            }
            // --- Availability ---
            let inStockOnly = false;
            if (sections[3]) {
                const acbs = sections[3].querySelectorAll('.filter-item input[type="checkbox"]');
                inStockOnly = acbs[0]?.checked && !acbs[1]?.checked;
            }
            // --- Sort ---
            const sortEl = document.querySelector('.shop-sort select');
            const sortVal = sortEl ? sortEl.value : '';

            let result = [...products];
            if (!allCatChecked && selCats.length > 0) result = result.filter(p => selCats.includes(p.category));
            result = result.filter(p => p.price <= maxPrice);
            if (minRating > 0) result = result.filter(p => p.rating >= minRating);
            if (inStockOnly) result = result.filter(p => p.inStock);
            if (sortVal.includes('Low to High')) result.sort((a, b) => a.price - b.price);
            else if (sortVal.includes('High to Low')) result.sort((a, b) => b.price - a.price);
            else if (sortVal.includes('Best Rated')) result.sort((a, b) => b.rating - a.rating);

            window._filteredProducts = result;
            changePage(1);
        };

        // Attach filter/sort listeners
        document.querySelectorAll('.sidebar .filter-item input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', applyFiltersAndSort);
        });
        const priceRange = document.getElementById('price-range');
        if (priceRange) priceRange.addEventListener('input', applyFiltersAndSort);
        const sortSel = document.querySelector('.shop-sort select');
        if (sortSel) sortSel.addEventListener('change', applyFiltersAndSort);

        // Initial render
        changePage(1);
    }

    // Render category products
    const categoryContainer = document.querySelector('.category-products-grid');
    if (categoryContainer) {
        const category = categoryContainer.dataset.category;
        if (category) {
            const categoryProducts = getProductsByCategory(category);
            renderProducts(categoryContainer, categoryProducts);
        }
    }
});

// ============================================
// SEARCH RESULTS
// ============================================

/**
 * Render search results
 */
function renderSearchResults() {
    const container = document.querySelector('.search-products-grid');
    const termElement = document.querySelector('.search-term');
    const countElement = document.querySelector('.search-count');

    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q') || '';

    if (termElement) termElement.textContent = query;

    if (!query) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <div class="no-results-icon"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gray-300)"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                <h3>Enter a search term</h3>
                <p>Use the search box above to find products.</p>
            </div>
        `;
        if (countElement) countElement.textContent = '0 results';
        return;
    }

    const results = searchProducts(query);

    if (countElement) countElement.textContent = `${results.length} result${results.length !== 1 ? 's' : ''}`;

    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <div class="no-results-icon"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gray-300)"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></div>
                <h3>No results found</h3>
                <p>We couldn't find any products matching "${query}".</p>
                <a href="products.html" class="btn btn-primary">Browse All Products</a>
            </div>
        `;
        return;
    }

    renderProducts(container, results);
}
window.renderSearchResults = renderSearchResults;

// ============================================
// DEALS PAGE COUNTDOWN
// ============================================

/**
 * Initialize countdown timer
 */
function initCountdown() {
    const countdownContainer = document.querySelector('.countdown-timer');
    if (!countdownContainer) return;

    // Persist end time across refreshes so the deal doesn't reset
    const COUNTDOWN_KEY = 'flashSaleEndTime';
    let endTimeMs = parseInt(localStorage.getItem(COUNTDOWN_KEY) || '0');
    if (!endTimeMs || endTimeMs <= Date.now()) {
        endTimeMs = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
        localStorage.setItem(COUNTDOWN_KEY, endTimeMs);
    }
    const endTime = new Date(endTimeMs);

    function updateCountdown() {
        const now = new Date();
        const diff = endTime - now;

        if (diff <= 0) {
            countdownContainer.innerHTML = '<div class="countdown-item"><span class="countdown-value">00</span><span class="countdown-label">Deal Ended</span></div>';
            return;
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const hourEl = countdownContainer.querySelector('[data-hours]');
        const minEl = countdownContainer.querySelector('[data-minutes]');
        const secEl = countdownContainer.querySelector('[data-seconds]');

        if (hourEl) hourEl.textContent = String(hours).padStart(2, '0');
        if (minEl) minEl.textContent = String(minutes).padStart(2, '0');
        if (secEl) secEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize countdown on deals page
document.addEventListener('DOMContentLoaded', initCountdown);
