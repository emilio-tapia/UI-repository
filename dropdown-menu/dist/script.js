function f() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('down');

  if (dropdown.classList.contains('down')) {
    setTimeout(() => {
      dropdown.style.overflow = 'visible';
    }, 400);
  } else {
    dropdown.style.overflow = 'hidden';
  }
}
