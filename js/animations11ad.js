gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function setSplitText(element, type) {

	let className = null;

	switch(type) {
		case 'lines':
		className = 'line';
		break;
		case 'words':
		className = 'word';
		break;
		case 'chars':
		className = 'char';
		break;
		default: 
		className = null;
	}

	document.querySelectorAll(element).forEach(el => {
		let splitText = new SplitText(el, {type: type, linesClass: className});
	});

}
document.addEventListener('DOMContentLoaded', function(){
	const cover1motion = gsap.timeline({
		scrollTrigger: {
			trigger: '.screen-1',
			start: 'top top',   
			end: 'bottom top',
			scrub: true,
			pin: false,
			pinSpacing: false,
		}
	}).to('.general__cover', {backgroundImage: 'linear-gradient(0deg, rgba(6, 162, 239, 1) 0%, rgba(92, 198, 207, 1) 100%)'});

let tween = gsap.to(".baloon", {rotation: 2, duration: 2, ease: "ease"});
tween.repeat(10000).yoyo(true).play();
let tween2 = gsap.to(".sun", {rotation: 3, scaleX: 1.01,scaleY:1.01, duration: 0.8});
tween2.repeat(10000).yoyo(true).play();
//let tween5 = gsap.to(".logo_doge", { y:'-5%', duration: 1});
//tween5.repeat(10000).yoyo(true).play();


		const coverInfomotion = gsap.timeline({
		scrollTrigger: {
			trigger: '.screen.info',
			start: 'top top',   
			end: '50% top',
			scrub: true,
			pin: false,
			pinSpacing: false,
		}})
			.to('.general__cover', {backgroundImage: 'linear-gradient(0deg, rgba(30, 40, 89, 1) 100%, rgba(30, 40, 89, 1) 100%)'})
			.from('.sh-2', {duration: 0.5, rotation:30, transformOrigin: '0% 100%'}, '-=1');
			

		const cover3motion = gsap.timeline({
		scrollTrigger: {
			trigger: '.screen-3',
			start: 'top top',   
			end: 'bottom top',
			scrub: true,
			pin: false,
			pinSpacing: false,
		}})
			.to('.general__cover', {backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)'});


		const screen3Top = gsap.timeline({
		scrollTrigger: {
			trigger: '.screen-3 .screen__content_inner_top',
			start: 'top top+=70%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}})
			 .from('.screen-3 .dash', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(4)"})
			 .from('.screen-3 .omics', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(4)"}, '-=0.4')
			 .from('.screen-3 .text__title', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(4)"}, '-=1');


		const screen3Bottom = gsap.timeline({
		scrollTrigger: {
			trigger: '.screen-3 .screen__content_inner_bottom',
			start: 'top bottom-=30%',   
			end: 'bottom bottom',
			scrub: false,
			pin: false,
			pinSpacing: false, 
			toggleActions: "restart none none reverse"
		}})

			 .from('.screen-3 .bubble.b-1', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.5')
			 .from('.screen-3 .bubble.b-3', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.4')
			 .from('.screen-3 .bubble.b-2', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.4')
			 .from('.screen-3 .bubble.b-4', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.4')
			 .from('.screen-3 .bubble.b-5', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=0.4')
			 .from('.screen-3 .ufo.b-1', {duration: 1, x: '-200%', y: '-50%', scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power4.out'}, '-=0.3')
			 .from('.screen-3 .ufo.b-2', {duration: 1, x: '-200%', y: '-50%', scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power4.out'}, '-=0.5')
			 .from('.screen-3 .ufo.b-3', {duration: 1, x: '-200%', y: '-50%', scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power4.out'}, '-=0.5')
			 //.from('.screen-3 .bird', {duration: 1, x: '200%', y: '50%', scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power4.out'}, '-=1.2')
			 .to('.sh-1', { opacity: 0, duration: 0.1 }, 0.9)
			 .to('.sh-2', { opacity: 0, duration: 0.1 }, 0.9)
			 .to('.cl-4', { opacity: 0, duration: 0.1 }, 0.9)
			 .to('.cl-1', { opacity: 0, duration: 0.1 }, 0.9)
			 .to('.sun', { opacity: 0, duration: 0.1 }, 0.9)
			 .to('.cl-2', { opacity: 0, duration: 0.1 }, 0.9)
			 .to('.cl-3', { opacity: 0, duration: 0.1 }, 0.9);
			 
	const screen4motion = gsap.timeline({
		scrollTrigger: {
			trigger: '.screen-4',
			start: 'top bottom-=75%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}}).from('.screen-4 .bubble', {duration: 1, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out', stagger: 0.1})
			 //.from('.screen-4 .dog', {opacity: 0, ease: 'power2.out'}, '-=0.5')
			 .from('.screen-4 .f-1', {duration: 1.5, x: '-30vw', ease: 'power2.out'}, '-=0.5')
			 .from('.screen-4 .f-2', {duration: 1.5, x: '30vw', ease: 'power2.out'}, '-=1.3')
			 .from('.screen-4 .f-3', {duration: 1.5, x: '30vw', ease: 'power2.out'}, '-=1.1');

	const screen5motion = gsap.timeline({
		scrollTrigger: {
			trigger: '.screen-5',
			start: 'top bottom-=75%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}}).from('.screen-5 .coin.contact img', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'})
			 .from('.screen-5 .coin.chart img', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=1.4')
			 .from('.screen-5 .coin.buy img', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '-=1.3');
			 //.from('.screen-5 .dog', {opacity: 0, ease: 'power4.out'}, '-=1');

	document.querySelectorAll('.description__item').forEach(item => {

		const image = item.querySelector('.description__item_image');
		const text = item.querySelector('.description__item_text');


		const screenInfomotion = gsap.timeline({
		scrollTrigger: {
			trigger: item,
			start: 'top top+=70%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}})
		     .from(image, {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'back.out(4)'})
			 .from(text, {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'}, '<');

	});

gsap.to('.general__cover', {backgroundImage: 'linear-gradient(0deg, rgba(6, 162, 239, 1) 0%, rgba(6, 162, 239, 1) 100%)'});
	gsap.utils.toArray(".main__menu a:not(.initial)").forEach(function(a) {
		a.addEventListener("click", function(e) {
			e.preventDefault();

			if(e.target.getAttribute("href") == '#game') {
				if(window.pageYOffset < window.innerHeight) {
					gsap.to(window, {duration: 1, scrollTo: {y: e.target.getAttribute("href"), offsetY: -window.innerHeight / 2}});
				} else {
					gsap.to(window, {duration: 1, scrollTo: {y: e.target.getAttribute("href"), offsetY: window.innerHeight / 2}});
				}
			} else {
				gsap.to(window, {duration: 1, scrollTo: e.target.getAttribute("href")});
			}
			
		});

		window.location.href.substr(0, window.location.href.indexOf('#'));
	});

	let lastScrollTop = window.pageYOffset;
	window.addEventListener('scroll', function(e){
		let st = window.pageYOffset;
			//console.log(lastScrollTop,st);
            
		if (st > lastScrollTop){
			document.querySelector('.main__header').classList.add('out');
		} else {
			document.querySelector('.main__header').classList.remove('out');
		}
		if (st == 0 ){
			document.querySelector('.main__header').classList.remove('out');
		}
		lastScrollTop = st;
	});


});


window.addEventListener("load", function(event) {

	document.querySelectorAll('.lazy').forEach((item) => {
		const src = item.dataset.src;
		item.src = src;
	});

	document.querySelector('.preloader').classList.add('out');

	setTimeout(function() {

	const screen1 = gsap.timeline({})
	.set('.screen-1 .screen__content', {visibility: 'visible'})
	.from('.screen-1 .logo__part_one img', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(3)"})
	.from('.screen-1 .logo__part_two img', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(3)"}, '-=0.4')
	//.from('.screen-1 .coins__list li', {duration: 0.1, opacity: 0, ease: "none"}, '-=0.5')
	//.from('.screen-1 .coins__list li', {duration: 2, y: '-80%', stagger: 0.05, ease: "elastic.out(2, 0.2)"}, '-=0.5')
	.from('.screen-1 .logo_doge', {duration: 2, scaleY: 2, scaleX: 2, transformOrigin: '0% -200%', ease: "back.out(4)"}, '-=1.8')
	//.from('.screen-1 .bird', {duration: 1, scaleX:1, scaleY: 1, y: '-30vh',  transformOrigin: '100% 100%',ease: "power3.in"}, '-=3')
	//.from('.screen-1 .socials li a img', {duration: 0.5, autoAlpha: 0, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', stagger: 0.1, ease: "back.out(2)"}, '-=2')
	.from('.screen-1 .title', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: "back.out(2)", onComplete: function() {
		document.querySelector('html').classList.remove('fix');
		document.querySelector('body').classList.remove('fix');

		const footermotion = gsap.timeline({
		scrollTrigger: {
			trigger: '.main__footer',
			start: 'top bottom-=35%',   
			end: 'bottom top',
			scrub: false,
			pin: false,
			pinSpacing: false,
		}})
		//.from('.main__footer .partners__list', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'})
			 .from('.main__footer_content_side.left', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'},'-=1.3')
			 .from('.main__footer_content_side.right', {duration: 1.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', ease: 'power2.out'},'-=1.3')
			 //.from('.main__footer .title div', {duration: 0.5, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', stagger: 0.05, ease: "power2.out"}, '-=1.5')
			 .from('.main__footer .socials li a img', {duration: 0.5, autoAlpha: 0, scaleX: 0, scaleY: 0, transformOrigin: '50% 50%', stagger: 0.1, ease: "back.out(2)"}, '-=0.8')
		
	}}, '-=2') } ,1200);


	if(window.innerWidth > 300) {
		gsap.to(".parallax__bg", {
		scrollTrigger: {
				scrub: true
			}, 
			y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
			ease: "none"
		});
	}
	
if(window.innerWidth > 300) {
		gsap.to(".parallax__bg1", {
		scrollTrigger: {
				scrub: true
			}, 
			y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
			ease: "none"
		});
	}
	


function parallaxIt(e, target, movement){
	let touch, relX, relY;
	const $this = document.querySelector('#main');

	relX = e.pageX - $this.offsetLeft;
  relY = e.pageY - $this.offsetTop;

	if(e.touches !== undefined || e.changedTouches !== undefined) {
		touch = e.touches[0] || e.changedTouches[0];

		relX = touch.pageX - $this.offsetLeft;
		relY = touch.pageY - $this.offsetTop;
	}
	
  gsap.to(target, 1, {
    x: (relX - $this.offsetWidth/2) / $this.offsetWidth * movement,
    y: (relY - $this.offsetHeight/2) / $this.offsetHeight * movement,
    ease: "power4.out"
  });
}

function callParallax(e){
  document.querySelectorAll('[data-move]').forEach(item => {
  	const movement = +item.dataset.move;
  	parallaxIt(e, item, movement);
  });
}


if(window.innerWidth > 1199) {
	document.querySelector('#main').addEventListener('mousemove', (e) => {
		callParallax(e);
	});
}
	
});


	