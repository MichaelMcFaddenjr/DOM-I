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

const nav = document.querySelectorAll("nav a")

nav[0].textContent = siteContent['nav']['nav-item-1']
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']

nav.forEach((colorGreen) => colorGreen.style.color = 'green')

const newLink  = document.createElement('a')
newLink.textContent = 'Meh'
document.querySelector('nav').appendChild(newLink)

const anotherNewLink = document.createElement('a')
anotherNewLink.textContent = 'Blah'
document.querySelector('nav').prepend(anotherNewLink)

const title = document.querySelector('h1')
title.innerHTML = siteContent['cta']['h1']
  .split('m I')
  .join('m<br>I')

const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']
button.style.background = "blue";
button.style.color = "white"
button.style.border = "5px solid black"

button.addEventListener('click', (evt) => {
  evt.target.style.background = 'red'
});

const ctaImage = document.querySelector('#cta-img')
console.log(ctaImage);
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

//main content

const mainContent = document.querySelector('.main-content')

//top content

const topContent = mainContent.querySelector('.top-content')

const topTitles = topContent.querySelectorAll('.text-content h4')
topTitles[0].textContent =siteContent['main-content']['features-h4']
topTitles[1].textContent =siteContent['main-content']['about-h4']

topTitles.forEach((colorRed) => colorRed.style.color = 'red');

const topPar = topContent.querySelectorAll('.text-content p')
topPar[0].textContent =siteContent['main-content']['features-content']
topPar[1].textContent =siteContent['main-content']['about-content']


const middleImg = mainContent.querySelector('img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


const bottomContent = mainContent.querySelector('.bottom-content')

const bottomTitles = bottomContent.querySelectorAll('.text-content h4')
bottomTitles[0].textContent =siteContent['main-content']['services-h4']
bottomTitles[1].textContent =siteContent['main-content']['product-h4']
bottomTitles[2].textContent =siteContent['main-content']['vision-h4']

const bottomPar = bottomContent.querySelectorAll('.text-content p')
bottomPar[0].textContent= siteContent['main-content']['services-content']
bottomPar[1].textContent = siteContent['main-content']['product-content']
bottomPar[2].textContent = siteContent['main-content']['vision-content']


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

footerP.style.textDecoration = "underline";