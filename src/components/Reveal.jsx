import { motion, useReducedMotion } from 'framer-motion'
import { easeOutCubic, heroTitle, revealDown, revealLeft, revealRight, revealUp } from '../utils/motion'

const directionMap = {
	up: revealUp,
	left: revealLeft,
	right: revealRight,
	down: revealDown,
	hero: heroTitle,
}

const motionComponents = new WeakMap()

function getMotionComponent(Component) {
	if (!motionComponents.has(Component)) {
		motionComponents.set(Component, motion.create(Component))
	}

	return motionComponents.get(Component)
}

function Reveal({
	as: Component = 'div',
	children,
	className = '',
	delay = 0,
	direction = 'up',
	duration = 0.7,
	amount = 0.2,
	...props
}) {
	const shouldReduceMotion = useReducedMotion()
	const MotionTag = typeof Component === 'string' ? motion[Component] : getMotionComponent(Component)
	const variants = directionMap[direction] || revealUp

	return (
		<MotionTag
			className={className}
			initial={shouldReduceMotion ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' } : variants.hidden}
			whileInView={shouldReduceMotion ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' } : variants.visible}
			viewport={{ once: false, amount }}
			transition={{ duration, delay: delay / 1000, ease: easeOutCubic }}
			{...props}
		>
			{children}
		</MotionTag>
	)
}

export default Reveal
