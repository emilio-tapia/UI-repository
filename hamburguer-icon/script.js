const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentState = button.getAttribute('data-state');

    //   ? PORQUE NECESITA PONER UN STRING
    if (!currentState || currentState === 'close') {
      button.setAttribute('data-state', 'open');
      button.setAttribute('aria-expanded', 'true');
    } else {
      button.setAttribute('data-state', 'close');
      button.setAttribute('aria-expanded', 'false');
    }
  });
});
