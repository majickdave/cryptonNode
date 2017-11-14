window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  if(this.scrollY >= 200) nav.className = ''; else nav.className = 'scroll';
};
