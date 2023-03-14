function logoLoaderAnimation() {
  // Query DOM Elements
  const svg = document.querySelector('svg');
  const logoLines = svg.querySelectorAll('.lines path');
  const loadLineBlue = document.querySelector('.loadLineBlue');

  /* Animate the fuse to reduce it */

  logoLines.forEach((item) => {
    item.setAttribute('stroke-dasharray', item.getTotalLength());
    item.setAttribute('stroke-dashoffset', item.getTotalLength() * 2);

    let tl = gsap.timeline({
      repeat: -1,
    });

    tl.from(item, {
      strokeDashoffset: item.getTotalLength(),
      duration: 4,
      // repeat: -1,
      // Wait 1sec before repeating
      // repeatDelay: 1,
    })
      .to(
        item,
        {
          fill: 'white',
          duration: 1,
          // repeat: -1,
          // delay: 4,
        },
        '-=1.5'
      )
      .to(
        item,
        {
          stroke: 'transparent',
          duration: 1,
          // repeat: -1,
          // delay: 5,
        },
        '-=1'
      );
  });

  gsap.to(loadLineBlue, {
    left: '0',
    duration: 6,
    delay: 1,
    ease: 'slowMo.ease.config(0.5, 0.4, false)',
    repeat: -1,
  });
}

logoLoaderAnimation();
