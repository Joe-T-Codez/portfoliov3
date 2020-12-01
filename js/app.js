
//////////////////////////// Animation Smooth Scrolling/////////////////////////////////////////////////
function smoothScroll(target,duration){
  var target= document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance=targetPosition-startPosition;
  var startTime = null;
  var optimizer=150;

  function animation(currentTime){
    if (startTime === null) startTime =currentTime;
    var timeElapsed =currentTime -startTime;
    var run = ease (timeElapsed, startPosition, distance, duration);
    window.scrollTo(0,run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
    console.log('timeElapsed:' + timeElapsed + 'duration' + duration);

  }
  function ease(t,b,c,d){
    t /= d/2;
    if (t<1) return c/2 * t *t +b-optimizer;
    t--;
    return -c /2 *(t*(t-2)-1)+b-optimizer;
  }
  requestAnimationFrame(animation);
}



var contact =document.querySelector('.action-ghost-btn');
var projects =document.querySelector('.action-btn');



contact.addEventListener('click',function(){
  smoothScroll('.contact-section',1000)
});
projects.addEventListener('click',function(){
  smoothScroll('.project-section',1000)
});

/////////////////////////////////////////GSAP Animation////////////////////////////
let tl = gsap.timeline()
tl.fromTo(
  ".logo",
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3,
  }
)
  .fromTo(
    ".menu",
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3,
    },
    ">-1.8"
  )
  .fromTo(
    ".info-section h1",
    {
      x: 0,
      y: 100,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.3,
    }
  )
  .addLabel("h1Show")
  .fromTo(
    ".girl",
    {
      height: 0,
    },
    {
      height: 600,
      duration: 1.4,
      ease: "power2.inOut",
    },
    ">-.5"
  )
  .fromTo(
    ".boy",
    {
      height: 0,
    },
    {
      height: 600,
      duration: 1.4,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .fromTo(
    ".shape1",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .fromTo(
    ".shape3",
    {
      opacity: 0,
    },
    {
      opacity: 0.6,
      ease: "power2.inOut",
      duration: 1,
    },
    ">-.2"
  )
  .fromTo(
    ".shape3",
    {
      x: -50,
      y: 440,
    },
    {
      y: 420,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
    }
  )
  .fromTo(
    ".shape2",
    {
      opacity: 0,
    },
    {
      opacity: 0.3,
      ease: "power2.inOut",
      duration: 1,
    },
    ">-2"
  )
  .fromTo(
    ".shape2",
    {
      x: 550,
      y: -110,
    },
    {
      y: -135,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
    }
  )
  .fromTo(
    ".info-section h4",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    "h1Show"
  )
  .fromTo(
    ".call-actions",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    "h1Show+=1"
  );
