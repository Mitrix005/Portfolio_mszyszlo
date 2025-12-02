import { ReactLenis } from 'lenis/react';

function SmoothScrolling({ children }) {
    return (
        <ReactLenis root options={{
            lerp: 0.05,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            autoResize: true,
        }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;