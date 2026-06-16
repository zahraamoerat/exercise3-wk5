
document.addEventListener('DOMContentLoaded', () => {

  if (document.querySelector('.login-body')) {
    initLoginPage();
  }
  
  if (document.querySelector('.home-body')) {
    initHomePage();
  }
});


function initLoginPage() {
  const loginForm = document.getElementById('login-form');
  const modal = document.querySelector('.modal');
  

  if (modal) {
    modal.style.display = 'none';
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault(); 
      validateLogin();
    });
  }
}

function validateLogin() {
  const username = document.getElementById('uname').value.trim();
  const password = document.getElementById('pwd').value.trim();
  const modal = document.querySelector('.modal');


  const validUsername = 'admin';
  const validPassword = 'password1234';

  if (username === validUsername && password === validPassword) {
    
    window.location.href = 'index.html';
  } else {
    showModal();
  }
}

function showModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.style.display = 'block';
  }
}

function dismissModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.style.display = 'none';
  }

  document.getElementById('uname').value = '';
  document.getElementById('pwd').value = '';
  document.getElementById('uname').focus();
}

function initHomePage() {
  const sidebar = document.querySelector('.nav-sidebar');
  const sidebarLinks = document.querySelector('.nav-sidebar ul');
  
  if (sidebar && sidebarLinks) {
    sidebar.style.width = '50px';
    sidebarLinks.style.visibility = 'hidden';
    sidebarLinks.style.opacity = '0';
  }
}


function toggleNav() {
  const sidebar = document.querySelector('.nav-sidebar');
  const toggleBtn = document.querySelector('.btn-toggle-nav');
  const sidebarLinks = document.querySelector('.nav-sidebar ul');
  
  if (!sidebar || !toggleBtn || !sidebarLinks) return;

  const isOpen = sidebar.style.width === '272px';

  if (isOpen) {
    sidebar.style.width = '50px';
    toggleBtn.style.transform = 'rotate(0deg)';
    sidebarLinks.style.visibility = 'hidden';
    sidebarLinks.style.opacity = '0';
  } else {
    sidebar.style.width = '272px';
    toggleBtn.style.transform = 'rotate(90deg)'; // Button rotates 90 degrees
    sidebarLinks.style.visibility = 'visible';
    sidebarLinks.style.opacity = '1';
  }
}