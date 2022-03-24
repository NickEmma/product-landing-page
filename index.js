let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('#nav-bar')

menu.onclick = () => {
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

// menu.onscroll = () => {
//   menu.classList.remove('fa-times')
//   navbar.classList.remove('active')
// }
window.onscroll = () => {
  navbar.classList.remove('active')

  if (window.scrollY > 0) {
    document.querySelector('#header').classList.add('active')
  } else {
    document.querySelector('#header').classList.remove('active')
  }
}

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('#header').classList.add('active')
  } else {
    document.querySelector('#header').classList.remove('active')
  }
}
