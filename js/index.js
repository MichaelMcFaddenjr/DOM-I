const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav

const nav = document.querySelectorAll("nav a");

nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

nav.forEach((colorGreen) => (colorGreen.style.color ="green"))

const newNav = document.querySelector("nav");
const newNavLink = document.querySelector("a");
const newNavLink2 = document.querySelector("a");

newNavLink.textContent = "Blah";
newNav.prepend(newNavLink);

newNavLink2.textContent = "Meh";
newNav.appendChild(newNavLink2);


//cta

const cta = document.querySelector('.cta');
const text = document.querySelector('.cta-text');
text.querySelector('h1').textContent = siteContent["cta"]["h1"];
text.querySelector('button').textContent = siteContent ['cta']['button'];

const ctaImage = cta.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);


//main 

//top
const topContent = document.querySelector('.top-content');

//top-features 
const textContent = topContent.querySelector('.text-content')
textContent.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
textContent.querySelector('p').textContent = siteContent['main-content']['features-content'];

//top-about
const textContentAbout = topContent.querySelector('.text-content:nth-child(2)');
textContentAbout.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
textContentAbout.querySelector('p').textContent = siteContent['main-content']['about-content'];

//middle img
const mainContent = document.querySelector('.main-content');
const middleImg = mainContent.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom
const bottomContent = document.querySelector('.bottom-content');

//bottom services
const textContentServices = bottomContent.querySelector('.text-content');
textContentServices.querySelector('h4').textContent = siteContent ['main-content']['services-h4'];
textContentServices.querySelector('p').textContent = siteContent ['main-content']['services-content'];

//bottom product 
const textContentProduct = bottomContent.querySelector('.text-content:nth-child(2)');
textContentProduct.querySelector('h4').textContent = siteContent ['main-content']['product-h4'];
textContentProduct.querySelector('p').textContent = siteContent ['main-content']['product-content'];

//bottom vision 
const textContentVision = bottomContent.querySelector('.text-content:nth-child(3)');
textContentVision.querySelector('h4').textContent = siteContent ['main-content']['vision-h4'];
textContentVision.querySelector('p').textContent = siteContent ['main-content']['vision-content'];

//contact
const contact = document.querySelector('.contact');
const contactH4 = contact.querySelector('h4');
contactH4.innerHTML = siteContent['contact']['contact-h4'];

const contactAddr = contact.querySelector('p');
contactAddr.innerHTML = siteContent['contact']['address']
  .split("t S")
  .join("t<br>S");

const contactTele = contact.querySelector('p:nth-child(3)');
contactTele.innerHTML = siteContent['contact']['phone'];

const contactEmail = contact.querySelector('p:nth-child(4)');
contactEmail.innerHTML = siteContent['contact']['email']

//footer segment
const footer = document.querySelector('footer');
const footerP = footer.querySelector('p');
footerP.innerHTML = siteContent['footer']['copyright'];