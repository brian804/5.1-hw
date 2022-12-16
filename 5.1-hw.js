// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];  


  let mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  mainEl.classList.add('flex-ctr'); 
  

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var( --top-menu-bg)';
topMenuEl.classList.add('flex-around');

for(let i in menuLinks){


    let a = document.createElement('a');
    //a.textContent = 'menuLink[i].text';
    a.textContent = menuLinks[i].text;

    a.setAttribute('href','menuLink[i].href');
    
    topMenuEl.appendChild(a);

}