
const products = [
    {
      "name": "Hive All White RGB Wired Gaming Keyboard",
      "category": "keyboard",
      "mrp": 6000,
      "currentPrice": 2699,
      "discount": 3301,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/1_copy_3_1.png?v=1734610655&width=713",
      "id": 1
    },
    {
      "name": "Hive Full-Size Black - Purple Wired Gaming Keyboard",
      "category": "keyboard",
      "mrp": 6000,
      "currentPrice": 3119,
      "discount": 2881,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/brown_1_b8591448-9c35-49e4-9d0a-ff7ee13ee840.png?v=1734604401&width=713",
      "id": 2
    },
    {
      "name": "Hive Full-Size White - Purple Wired Gaming Keyboard",
      "category": "keyboard",
      "mrp": 6000,
      "currentPrice": 2998,
      "discount": 3002,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/Img1_brown_34c1b1eb-0a9b-4aed-853f-cdc47ffa329c.png?v=1734604431&width=713",
      "id": 3
    },
    {
      "name": "Hive Full-Size All Black Wired Gaming Keyboard",
      "category": "keyboard",
      "mrp": 6000,
      "currentPrice": 2898,
      "discount": 3102,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/Img1_red_4d4362a8-1b5f-412c-b7b0-14ac0cf247e8.png?v=1734604109&width=713",
      "id": 4
    },
    {
      "name": "Hive All Black RGB Wired Gaming Keyboard",
      "category": "keyboard",
      "mrp": 4600,
      "currentPrice": 2699,
      "discount": 1901,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/AB_BS.png?v=1734610686&width=713",
      "id": 5
    },
    {
      "name": "Hive All White RGB Wired Gaming Keyboard",
      "category": "keyboard",
      "mrp": 6000,
      "currentPrice": 2699,
      "discount": 3301,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/1_copy_3_1.png?v=1734610655&width=713",
      "id": 6
    },
    {
      "name": "Hive White-Purple Wired Gaming Keyboard",
      "category": "keyboard",
      "mrp": 4600,
      "currentPrice": 2649,
      "discount": 1951,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/1_copy_6.png?v=1728384500&width=713",
      "id": 7
    },
    {
      "name": "Hive Black - Purple Wired Gaming Keyboard",
      "category": "keyboard",
      "mrp": 4000,
      "currentPrice": 2749,
      "discount": 1251,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/1_copy_3_1.png?v=1734610655&width=713",
      "id": 8
    },
    {
      "name": "OEM Dye-Sub PBT Keycap Set - Christmas Tree",
      "category": "keyboard",
      "mrp": 3499,
      "currentPrice": 2999,
      "discount": 500,
      "imageUrl": "https://keychron.in/wp-content/uploads/2022/08/Keychron-PBT-Keycaps-Christmas-tree_1800x1800.jpg",
      "id": 9
    },
    {
      "name": "OEM Dye-Sub PBT Keycap Set - Unicorn",
      "category": "keyboard",
      "mrp": 3699,
      "currentPrice": 2999,
      "discount": 700,
      "imageUrl": "https://keychron.in/wp-content/uploads/2022/08/Keychron-oem-dye-sub-pbt-keycap-set-unicorn-version-a_1800x1800.webp",
      "id": 10
    },
    {
      "name": "Keychron K2 Pro White QMK/VIA Wireless Mechanical Keyboard",
      "category": "keyboard",
      "mrp": 10499,
      "currentPrice": 9199,
      "discount": 1300,
      "imageUrl": "https://keychron.in/wp-content/uploads/2023/10/Keychron-K2-Pro-QMK-VIA-custom-mechanical-keyboard-75-percent-layout-white-Mac-Windows-Linux-hot-swappable-Keychron-K-Pro-switch-red_1800x1800.jpg",
      "id": 11
    },
    {
      "name": "Keychron K3 Pro QMK/VIA Wireless Custom Mechanical Keyboard",
      "category": "keyboard",
      "mrp": 10499,
      "currentPrice": 9199,
      "discount": 1300,
      "imageUrl": "https://keychron.in/wp-content/uploads/2023/11/Keychron-K3-Pro-QMK-VIA-ultra-slim-custom-mechanical-keyboard-Shell-White-75-percent-layout-for-Mac-Windows-Linux-low-profile-Gateron-brown_1800x1800.jpg",
      "id": 12
    },
    {
      "name": "Keychron K8 Wireless Mechanical Keyboard",
      "category": "keyboard",
      "mrp": 9999,
      "currentPrice": 7999,
      "discount": 2000,
      "imageUrl": "https://keychron.in/wp-content/uploads/2021/11/Keychron-K8-tenkeyless-wireless-mechanical-keyboard-for-Mac-Windows-iOS-RGB-white-backlight-with-Gateron-switch-red_1800x1800.jpg",
      "id": 13
    },
    {
      "name": "Chimera White Wireless Gaming Mouse",
      "category": "mouse",
      "mrp": 4000,
      "currentPrice": 2280,
      "discount": 1720,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/chimera_white.jpg?v=1710925980&width=713",
      "id": 14
    },
    {
      "name": "Pegasus RNT Gaming Mouse",
      "category": "mouse",
      "mrp": 8000,
      "currentPrice": 4499,
      "discount": 3501,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/pega1.png?v=1721309566&width=713",
      "id": 15
    },
    {
      "name": "Pegasus 58g Ultra-Light Wireless White Gaming Mouse",
      "category": "mouse",
      "mrp": 8000,
      "currentPrice": 3779,
      "discount": 4221,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/WhiteBG.png?v=1726207809&width=713",
      "id": 16
    },
    {
      "name": "Ikarus Black 55g Wireless Gaming Mouse",
      "category": "mouse",
      "mrp": 12999,
      "currentPrice": 4990,
      "discount": 8009,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/51oXwhSDXTL._SX522.jpg?v=1726495023",
      "id": 17
    },
    {
      "name": "Hawk Gaming Mouse - Black",
      "category": "mouse",
      "mrp": 2499,
      "currentPrice": 1270,
      "discount": 1229,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/hawk-first-iamge.png?v=1706688474&width=713",
      "id": 18
    },
    {
      "name": "Pegasus 49g Ultra-Light Wired Gaming Mouse",
      "category": "mouse",
      "mrp": 4500,
      "currentPrice": 1500,
      "discount": 3000,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/2_5_b85da126-bf61-4b48-8d36-ff03b229d233.png?v=1726209611&width=713",
      "id": 19
    },
    {
      "name": "Chimera Red Wireless Gaming Mouse",
      "category": "mouse",
      "mrp": 4000,
      "currentPrice": 2280,
      "discount": 1720,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/chimerared_1.jpg?v=1709879841&width=713",
      "id": 20
    },
    {
      "name": "Chimera Lucid Wireless Gaming Mouse",
      "category": "mouse",
      "mrp": 4000,
      "currentPrice": 2849,
      "discount": 1151,
      "imageUrl": "https://kreo-tech.com/cdn/shop/files/1_343174c6-4a54-44b9-bfe1-0e5e5127db39.png?v=1720613895&width=713",
      "id": 21
    },
    {
      "name": "Keyboard Carrying Case",
      "category": "carry case",
      "mrp": 2649,
      "currentPrice": 2399,
      "discount": 250,
      "imageUrl": "https://keychron.in/wp-content/uploads/2024/10/keychron-q1-keyboard-carrying-case-768x768.jpg",
      "id": 22
    },
    {
      "name": "Keyboard Travel Pouch",
      "category": "carry case",
      "mrp": 2259,
      "currentPrice": 2049,
      "discount": 210,
      "imageUrl": "https://keychron.in/wp-content/uploads/2021/06/Keychron-K3-Travel-Pouch-Carrying-Case-Sleeve-Black_2d7cd910-5ab2-4348-83cc-9f2d716c45f4_1800x1800-520x520.jpg",
      "id": 23
    },
    {
      "name": "Logitech G304 Lightspeed Wireless Gaming Mouse",
      "category": "mouse",
      "mrp": 3795,
      "currentPrice": 2595,
      "discount": 1200,
      "imageUrl": "https://m.media-amazon.com/images/I/51DYDLykzoL._SY450_.jpg",
      "id": 24
    },
    {
      "name": "Logitech G102 USB Light Sync Gaming Mouse",
      "category": "mouse",
      "mrp": 2295,
      "currentPrice": 1095,
      "discount": 1200,
      "imageUrl": "https://m.media-amazon.com/images/I/61RYwHoeHjL._SX679_.jpg",
      "id": 25
    },
    {
      "name": "Logitech G102 Light Sync Gaming Mouse",
      "category": "mouse",
      "mrp": 2295,
      "currentPrice": 1095,
      "discount": 1200,
      "imageUrl": "https://m.media-amazon.com/images/I/519Xke4dPdL._SX679_.jpg",
      "id": 26
    },
    {
      "name": "Logitech G402 Hyperion Fury USB Gaming Mouse",
      "category": "mouse",
      "mrp": 3395,
      "currentPrice": 2350,
      "discount": 1045,
      "imageUrl": "https://m.media-amazon.com/images/I/5135cJqjQIL._SX679_.jpg",
      "id": 27
    },
    {
      "name": "Kreo Lynx Full HD Video Capture Card",
      "category": "capture card",
      "mrp": 4999,
      "currentPrice": 1248,
      "discount": 3751,
      "imageUrl": "https://m.media-amazon.com/images/I/61KUCRX0oyL._SX679_.jpg",
      "id": 28
    },
    {
      "name": "Elgato Game Capture Neo 4K60 HDR USB Passthrough",
      "category": "capture card",
      "mrp": 21000,
      "currentPrice": 11816,
      "discount": 9184,
      "imageUrl": "https://m.media-amazon.com/images/I/41GXbgNwQEL._SX466_.jpg",
      "id": 29
    },
    {
      "name": "Video Capture Card, PiBOX India ",
      "category": "capture card",
      "mrp": 1499,
      "currentPrice": 599,
      "discount": 900,
      "imageUrl": "https://m.media-amazon.com/images/I/71pp6rfeYUL._SX679_.jpg",
      "id": 30
    },
    {
      "name": "PiBox India 4K HDMI Video Capture Card",
      "category": "capture card",
      "mrp": 3999,
      "currentPrice": 1549,
      "discount": 2450,
      "imageUrl": "https://m.media-amazon.com/images/I/71w1rSzgQpL._SX569_.jpg",
      "id": 31
    },
    {
      "name": "Video Capture Card, PiBOX India",
      "category": "capture card",
      "mrp": 1999,
      "currentPrice": 599,
      "discount": 1400,
      "imageUrl": "https://m.media-amazon.com/images/I/61S+zoh9cML._SX679_.jpg",
      "id": 32
    },
    {
      "name": "Microware Video Capture Cards",
      "category": "capture card",
      "mrp": 4999,
      "currentPrice": 1496,
      "discount": 3503,
      "imageUrl": "https://m.media-amazon.com/images/I/71oHBHGq2IL._SX450_.jpg",
      "id": 33
    },
    {
      "name": "PiBOX India, Video Capture Card",
      "category": "capture card",
      "mrp": 1999,
      "currentPrice": 599,
      "discount": 1400,
      "imageUrl": "https://m.media-amazon.com/images/I/71nQj4Qno7L._SX679_.jpg",
      "id": 34
    },
    {
      "name": "Tobo Levoty Game Capture Cards",
      "category": "capture card",
      "mrp": 599,
      "currentPrice": 389,
      "discount": 210,
      "imageUrl": "https://m.media-amazon.com/images/I/61yZuVWeciL._SX450_.jpg",
      "id": 35
    }
  ]
const productContainer = document.getElementById("product-container");
const productBox= document.getElementById("product-box");
console.log(products);

function showProductContainer(products){
if(!products){
    return alert("nothing in cart");
}
products.forEach((element) => {
    const {name,category,mrp,currentPrice,discount,imageUrl,id}=element;
    const off = ((mrp - currentPrice) / mrf) * 100;
    const productClone=document.importNode(productBox.Content,true);
    productClone.querySelector(".card-title").textContent=name;
    productClone.querySelector(".card-price").textContent=currentPrice;
    productClone.querySelector(".card-price-strike").textContent=mrp;
    productClone.querySelector(".card-discount").textContent=`${off}%OFF`;
    productClone.querySelector(".card-image").src=imageUrl;
    productClone.querySelector(".card-image").alt=name;
    productContainer.append(productClone);
});
}