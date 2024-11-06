document.addEventListener("DOMContentLoaded", () => {
	// Initialize a new Lenis instance for smooth scrolling
	const lenis = new Lenis();

	// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
	lenis.on("scroll", ScrollTrigger.update);

	// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
	// This ensures Lenis's smooth scroll animation updates on each GSAP tick
	gsap.ticker.add(time => {
		lenis.raf(time * 1000); // Convert time from seconds to milliseconds
	});

	// Disable lag smoothing in GSAP to prevent any delay in scroll animations
	gsap.ticker.lagSmoothing(0);

	if (window.innerWidth > 480) {
		desktopAnim();
	} else {
		mobileAnim();
	}

	panelsAnim();
});

const desktopAnim = () => {
	gsap.registerPlugin(ScrollTrigger);

	// ScrollTrigger для секции .why-us
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".why-us",
			start: "top 10%",
			end: "+=1000",
			pin: true,
			scrub: true,
		},
	});

	// Анимация элементов внутри секции
	tl.to(".text-block:nth-child(1) .text-block__body", { x: -674, opacity: 0 });

	tl.to(".text-block:nth-child(2) .text-block__body", { x: -674 }, 0);
	tl.to(".text-block:nth-child(2) .text-block__img", { x: -630 }, 0);

	tl.to(".text-block:nth-child(3) .text-block__img", { x: -674 }, 0);
	tl.to(".text-block:nth-child(3) .text-block__body", { x: -674 }, 0);

	tl.to(".text-block:nth-child(2) .text-block__body", { x: -1348, opacity: 0 });
	tl.to(".text-block:nth-child(3) .text-block__body", { x: -1348 }, 0.5);
	tl.to(".text-block:nth-child(3) .text-block__img", { x: -1260 }, 0.5);
};

const mobileAnim = () => {
	gsap.registerPlugin(ScrollTrigger);

	// ScrollTrigger для секции .why-us
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".why-us",
			start: "top 10%",
			end: "bottom+=1000px",
			pin: true,
			scrub: true,
		},
	});

	// Анимация элементов внутри секции
	tl.to(".text-block:nth-child(1) .text-block__body", { x: -240, opacity: 0 });

	tl.to(".text-block:nth-child(2) .text-block__body", { x: -262 }, 0);
	tl.to(".text-block:nth-child(2) .text-block__img", { x: -240 }, 0);

	tl.to(".text-block:nth-child(3) .text-block__img", { x: -240 }, 0);
	tl.to(".text-block:nth-child(3) .text-block__body", { x: -240 }, 0);

	tl.to(".text-block:nth-child(2) .text-block__body", { x: -480, opacity: 0 });
	tl.to(".text-block:nth-child(3) .text-block__body", { x: -525 }, 0.5);
	tl.to(".text-block:nth-child(3) .text-block__img", { x: -480 }, 0.5);

	// Привязка .gradient к секции
	gsap.to(".gradient", {
		yPercent: 100, // процентное значение, чтобы градиент двигался вместе с секцией
		ease: "none",
		scrollTrigger: {
			trigger: ".why-us",
			start: "top top",
			end: "bottom+=400px",
			scrub: true,
		},
	});
};

const panelsAnim = () => {
	const tl1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".panels",
			start: "top top",
			end: "+=4000",
			pin: true,
			scrub: true,
		},
	});
	tl1.to(".panels", { xPercent: -400 }, 0);
};
