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
// Dark / Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";

    if (isDark) {
      html.removeAttribute("data-theme");
      themeToggle.innerHTML = "🌙";
      themeToggle.setAttribute("aria-label", "Switch to dark mode");
    } else {
      html.setAttribute("data-theme", "dark");
      themeToggle.innerHTML = "☀️";
      themeToggle.setAttribute("aria-label", "Switch to light mode");
    }
  });
 }
