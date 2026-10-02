(function(){
  const root=document.documentElement;
  const themeToggle=document.getElementById('themeToggle');
  const savedTheme=localStorage.getItem('portfolio-theme');
  if(savedTheme) root.setAttribute('data-theme',savedTheme);
  function updateThemeIcon(){
    const dark=root.getAttribute('data-theme')==='dark';
    themeToggle.innerHTML=dark?'<i class="bi bi-sun"></i>':'<i class="bi bi-moon-stars"></i>';
    themeToggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
  }
  updateThemeIcon();
  themeToggle.addEventListener('click',()=>{
    const dark=root.getAttribute('data-theme')==='dark';
    root.setAttribute('data-theme',dark?'light':'dark');
    localStorage.setItem('portfolio-theme',dark?'light':'dark');
    updateThemeIcon();
  });

  document.querySelectorAll('.filter-btn').forEach(button=>button.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    button.classList.add('active');
    const filter=button.dataset.filter;
    document.querySelectorAll('.project-item').forEach(item=>{
      item.classList.toggle('d-none',filter!=='all' && item.dataset.category!==filter);
    });
  }));

  const form=document.getElementById('contactForm');
  const formMessage=document.getElementById('formMessage');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    form.classList.add('was-validated');
    if(!form.checkValidity()){
      formMessage.textContent='Please correct the highlighted fields.';
      formMessage.setAttribute('aria-live','assertive');
      return;
    }
    formMessage.textContent='Validation successful. This demo form is not connected to an email service.';
    formMessage.setAttribute('aria-live','polite');
    form.reset();
    form.classList.remove('was-validated');
  });

  document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>{
    const menu=document.getElementById('siteNav');
    if(menu.classList.contains('show') && window.bootstrap){new bootstrap.Collapse(menu).hide();}
  }));
})();
// Dark / Light Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", function () {
    const html = document.documentElement;

    if (html.getAttribute("data-theme") === "dark") {
        // Change to light mode
        html.setAttribute("data-theme", "light");
        themeIcon.className = "bi bi-moon-stars";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
    } else {
        // Change to dark mode
        html.setAttribute("data-theme", "dark");
        themeIcon.className = "bi bi-sun";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    }
});
