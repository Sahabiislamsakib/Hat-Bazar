const fs = require('fs');
let code = fs.readFileSync('e:/Eastern/Se - Copy/products.js', 'utf8');

const images = [
    'https://images.unsplash.com/photo-1596568359553-90d5754b2b2b?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1611314488313-5a02251a3dd8?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1614252339460-540c1126938a?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1602052577122-f73b9710adba?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1620021307137-b4d4dc0e7844?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1588629088118-2e0fcfab0c8a?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1583391733975-523c9135a513?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1581783342308-f792dbdd1f05?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=400'
];

let i = 0;
code = code.replace(/imageColor: \'#[A-F0-9]+\',/gi, () => `image: '${images[i++]}',`);

code = code.replace(/<div class="placeholder-img" style="background-color: \$\{product\.imageColor\};"><span style="font-size: 6rem;">\$\{emoji\}<\/span><\/div>/g, `<div class="modal-product-image"><img src="\${product.image}" alt="\${product.name}" style="width: 100%; height: 100%; object-fit: cover;"></div>`);

code = code.replace(/<div class="placeholder-img" style="background-color: \$\{product\.imageColor\};">\$\{emoji\}<\/div>/g, `<img src="\${product.image}" alt="\${product.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">`);

code = code.replace(/image: product\.imageColor/g, 'image: product.image');

const detailGalleryOld = `        <div class="product-gallery">
            <div class="gallery-main" style="background-color: \${product.imageColor};">
                <span style="font-size: 10rem;">\${emoji}</span>
            </div>
            <div class="gallery-thumbs">
                <div class="gallery-thumb active" style="background-color: \${product.imageColor};">
                    <span style="font-size: 2rem;">\${emoji}</span>
                </div>
                <div class="gallery-thumb" style="background-color: var(--gray-100);">
                    <span style="font-size: 2rem;">🖼️</span>
                </div>
                <div class="gallery-thumb" style="background-color: var(--gray-100);">
                    <span style="font-size: 2rem;">🖼️</span>
                </div>
            </div>
        </div>`;

const detailGalleryNew = `        <div class="product-gallery">
            <div class="gallery-main">
                <img src="\${product.image}" alt="\${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--border-radius-lg);">
            </div>
            <div class="gallery-thumbs">
                <div class="gallery-thumb active">
                    <img src="\${product.image}" alt="\${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="gallery-thumb">
                    <img src="\${product.image}" alt="\${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="gallery-thumb">
                    <img src="\${product.image}" alt="\${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
        </div>`;

code = code.replace(detailGalleryOld, detailGalleryNew);

fs.writeFileSync('e:/Eastern/Se - Copy/products.js', code);
console.log('Successfully updated products.js with real images.');
