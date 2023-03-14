// import 'https://raw.githubusercontent.com/flackr/scroll-timeline/master/dist/scroll-timeline.js';
import './scrollTimeline.js';

const scrollTracker = document.querySelector('.scroll-tracker');
const animatedImg = document.querySelectorAll('.img');

(function scrollTracking() {
  const scrollTrackTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
  });

  scrollTracker.animate(
    {
      transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
      duration: 1,
      timeline: scrollTrackTimeline,
    }
  );
})();

(function flipImg() {
  animatedImg.forEach((imageRotate) => {
    // const animatedScrollImg = new ScrollTimeline({
    //   scrollOffsets: [
    //     { target: imageRotate, edge: 'end', threshold: '0' },
    //     { target: imageRotate, edge: 'start', threshold: '1' },
    //   ],
    // });

    const imgOffsetTop = imageRotate.offsetTop;
    const imgHeight = imageRotate.offsetHeight;
    const start = 100;
    const end = 500;

    const imgStart = imgOffsetTop + imgHeight - window.innerHeight - start;
    const imgEnd = imgOffsetTop - end;

    console.log(imgEnd);

    imageRotate.animate(
      {
        transform: [
          'perspective(1000px) rotateX(60deg)',
          'perspective(1000px) rotate(0)',
        ],
        opacity: ['0.2', '1'],
      },
      {
        duration: 1,
        easing: 'linear',
        timeline: new ScrollTimeline({
          scrollOffsets: [CSS.px(imgStart), CSS.px(imgEnd)],
        }),
      }
    );
  });
})();
