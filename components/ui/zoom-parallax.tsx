'use client';

import { useTransform, motion, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface Image {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef<HTMLDivElement>(null);
	const scrollProgress = useMotionValue(0);
	const scrollRef = useRef(0);
	const MAX_SCROLL = 1; // Normalized scroll progress (0 to 1)

	// Track if section is in viewport and should capture scroll
	useEffect(() => {
		const containerElement = container.current;
		if (!containerElement) return;

		let isInViewport = false;
		let mouseOverContainer = false;

		const checkViewport = () => {
			if (!containerElement) return;
			const rect = containerElement.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			// Section is in viewport when top is above bottom of viewport and bottom is below top of viewport
			isInViewport = rect.top < windowHeight && rect.bottom > 0;
		};

		const handleMouseEnter = () => {
			mouseOverContainer = true;
		};

		const handleMouseLeave = () => {
			mouseOverContainer = false;
		};

		const handleWheel = (e: WheelEvent) => {
			checkViewport();
			
			// Only capture scroll if section is in viewport and mouse is over it
			if (isInViewport && mouseOverContainer) {
				const isAtTop = scrollRef.current <= 0 && e.deltaY < 0;
				const isAtBottom = scrollRef.current >= MAX_SCROLL && e.deltaY > 0;

				// If at boundaries, allow normal page scroll
				if (isAtTop || isAtBottom) {
					return; // Allow default scroll behavior
				}

				// Prevent page scroll and update internal scroll
				e.preventDefault();
				e.stopPropagation();
				
				const delta = e.deltaY * 0.001; // Normalize scroll delta
				const newScroll = Math.min(Math.max(scrollRef.current + delta, 0), MAX_SCROLL);
				scrollRef.current = newScroll;
				scrollProgress.set(newScroll);
			}
		};

		// Touch support
		let touchStartY = 0;
		let touchStarted = false;

		const handleTouchStart = (e: TouchEvent) => {
			checkViewport();
			if (isInViewport) {
				touchStarted = true;
				touchStartY = e.touches[0].clientY;
			}
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (touchStarted && isInViewport) {
				const touchY = e.touches[0].clientY;
				const deltaY = touchStartY - touchY;
				touchStartY = touchY;

				const isAtTop = scrollRef.current <= 0 && deltaY < 0;
				const isAtBottom = scrollRef.current >= MAX_SCROLL && deltaY > 0;

				if (!isAtTop && !isAtBottom) {
					e.preventDefault();
					e.stopPropagation();
					
					const delta = deltaY * 0.001;
					const newScroll = Math.min(Math.max(scrollRef.current + delta, 0), MAX_SCROLL);
					scrollRef.current = newScroll;
					scrollProgress.set(newScroll);
				}
			}
		};

		const handleTouchEnd = () => {
			touchStarted = false;
		};

		// Initial check
		checkViewport();

		// Listen to scroll to update viewport status
		window.addEventListener('scroll', checkViewport, { passive: true });
		window.addEventListener('resize', checkViewport, { passive: true });
		
		// Mouse events
		containerElement.addEventListener('mouseenter', handleMouseEnter);
		containerElement.addEventListener('mouseleave', handleMouseLeave);
		
		// Wheel events
		containerElement.addEventListener('wheel', handleWheel, { passive: false });
		
		// Touch events
		containerElement.addEventListener('touchstart', handleTouchStart, { passive: false });
		containerElement.addEventListener('touchmove', handleTouchMove, { passive: false });
		containerElement.addEventListener('touchend', handleTouchEnd, { passive: true });

		return () => {
			window.removeEventListener('scroll', checkViewport);
			window.removeEventListener('resize', checkViewport);
			containerElement.removeEventListener('mouseenter', handleMouseEnter);
			containerElement.removeEventListener('mouseleave', handleMouseLeave);
			containerElement.removeEventListener('wheel', handleWheel);
			containerElement.removeEventListener('touchstart', handleTouchStart);
			containerElement.removeEventListener('touchmove', handleTouchMove);
			containerElement.removeEventListener('touchend', handleTouchEnd);
		};
	}, [scrollProgress]);

	// Use the controlled scroll progress instead of useScroll
	const scale4 = useTransform(scrollProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		<div ref={container} className="relative h-[300vh]">
			<div className="sticky top-0 h-screen overflow-hidden">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''} `}
						>
							<div className="relative h-[25vh] w-[25vw]">
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover rounded-xl"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
