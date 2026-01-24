'use client';

import { useTransform, motion, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
	const stickySection = useRef<HTMLDivElement>(null);
	const scrollProgress = useMotionValue(0);
	const scrollRef = useRef(0);
	const MAX_SCROLL = 1; // Normalized scroll progress (0 to 1)
	const [isSectionReady, setIsSectionReady] = useState(false);
	const isSectionReadyRef = useRef(false);

	// Track if section is in viewport and should capture scroll
	useEffect(() => {
		const containerElement = container.current;
		const stickyElement = stickySection.current;
		if (!containerElement || !stickyElement) return;

		const checkViewport = () => {
			if (!containerElement || !stickyElement) return;
			const containerRect = containerElement.getBoundingClientRect();
			
			// Header height (h-16 = 64px)
			const HEADER_HEIGHT = 64;
			
			// Activate when container's top is within header height from the top of viewport
			// top <= HEADER_HEIGHT means the section has reached the bottom of the header
			// bottom > 0 means the section is still visible (hasn't scrolled past completely)
			const ready = containerRect.top <= HEADER_HEIGHT && containerRect.bottom > 0;
			isSectionReadyRef.current = ready;
			setIsSectionReady(ready);
			return ready;
		};

		const isMouseOverContainer = (clientX: number, clientY: number): boolean => {
			if (!stickyElement) return false;
			const rect = stickyElement.getBoundingClientRect();
			// Check if mouse is within the bounds of the sticky section (the actual interactive area)
			return (
				clientX >= rect.left &&
				clientX <= rect.right &&
				clientY >= rect.top &&
				clientY <= rect.bottom
			);
		};

		const handleWheel = (e: WheelEvent) => {
			// First check if section is ready - if not, allow normal page scroll
			if (!isSectionReadyRef.current) {
				return; // Overlay should block, but this is a safety check
			}
			
			const isInViewport = checkViewport();
			
			// Only check mouse position and capture scroll AFTER container top has reached 0 (touches header)
			// This prevents early activation when section is still entering viewport
			if (!isInViewport) {
				return; // Section not ready yet, allow normal page scroll
			}
			
			// Now check if mouse is over the sticky section
			const mouseOver = isMouseOverContainer(e.clientX, e.clientY);
			
			// Only capture scroll if mouse is over the section
			if (mouseOver) {
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
			const isInViewport = checkViewport();
			
			// Only activate touch after container top has reached 0 (touches header)
			if (!isInViewport) {
				return;
			}
			
			const touch = e.touches[0];
			if (touch && isMouseOverContainer(touch.clientX, touch.clientY)) {
				touchStarted = true;
				touchStartY = touch.clientY;
			}
		};

		const handleTouchMove = (e: TouchEvent) => {
			const isInViewport = checkViewport();
			
			// Only process touch if section is ready and touch was started
			if (!isInViewport || !touchStarted) {
				return;
			}
			
			const touch = e.touches[0];
			if (!touch) return;
			
			// Verify touch is still over container
			if (!isMouseOverContainer(touch.clientX, touch.clientY)) {
				touchStarted = false;
				return;
			}
			
			const touchY = touch.clientY;
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
		};

		const handleTouchEnd = () => {
			touchStarted = false;
		};

		// Initial check
		checkViewport();

		// Listen to scroll to update viewport status
		window.addEventListener('scroll', checkViewport, { passive: true });
		window.addEventListener('resize', checkViewport, { passive: true });
		
		// Wheel events - attach to sticky section so overlay can block them
		stickyElement.addEventListener('wheel', handleWheel, { passive: false });
		
		// Touch events - attach to sticky section so overlay can block them
		stickyElement.addEventListener('touchstart', handleTouchStart, { passive: false });
		stickyElement.addEventListener('touchmove', handleTouchMove, { passive: false });
		stickyElement.addEventListener('touchend', handleTouchEnd, { passive: true });

		return () => {
			window.removeEventListener('scroll', checkViewport);
			window.removeEventListener('resize', checkViewport);
			stickyElement.removeEventListener('wheel', handleWheel);
			stickyElement.removeEventListener('touchstart', handleTouchStart);
			stickyElement.removeEventListener('touchmove', handleTouchMove);
			stickyElement.removeEventListener('touchend', handleTouchEnd);
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
			<div ref={stickySection} className="sticky top-0 h-screen overflow-hidden relative">
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
				{/* Overlay that blocks ALL mouse interactions until section is ready */}
				{/* When NOT ready: pointer-events-auto blocks all interactions (wheel, touch, hover, click) */}
				{/* When ready: pointer-events-none allows interactions to pass through */}
				<div
					className={`absolute inset-0 z-[9999] ${
						isSectionReady ? 'pointer-events-none' : 'pointer-events-auto'
					}`}
					style={{
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}}
					aria-hidden="true"
				/>
			</div>
		</div>
	);
}
