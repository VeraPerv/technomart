const popoverAuthBtn = document.querySelector('.popover-auth-button');
const authorisedUser = document.querySelector('.login-logout-wrapper');
const openClass = document.querySelector('.open');
const entryLink = document.querySelector('.entry-link-wrapper');
const logout = document.querySelector('.wellcome-logout-button');
const closeBtn = document.querySelector('.wellcome-close-button');
const logoutLink = document.querySelector('.logout-link');


popoverAuthBtn.addEventListener('click',() => {
  entryLink.classList.remove('open');
  authorisedUser.classList.add('open');
});

logout.addEventListener('click', () => {
  authorisedUser.classList.remove('open');
  entryLink.classList.add('open');
});

logoutLink.addEventListener('click', () => {
  authorisedUser.classList.remove('open');
  entryLink.classList.add('open');
});
