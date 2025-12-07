import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import './Home.css';
const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'));
export default function Home() {
    return (_jsxs("div", { className: "home-page", children: [_jsx(Suspense, { fallback: null, children: _jsx(AnimatedBackground, {}) }), _jsx("div", { className: "home-content", children: _jsxs("div", { className: "terminal-box", children: [_jsx("div", { className: "terminal-header", children: _jsx("span", { className: "command-line", children: `> whoami` }) }), _jsxs("div", { className: "intro-section", children: [_jsx("h1", { className: "intro-title", children: "HAI :3" }), _jsxs("div", { className: "bio-text", children: [_jsx("p", { children: "I'm Alma! A:" }), _jsxs("ul", { className: "bio-list", children: [_jsx("li", { children: "14 year old" }), _jsx("li", { children: "clueless" }), _jsx("li", { children: "coder/H@XX0R!!! guy" })] })] }), _jsx("p", { className: "tagline", children: "pretty sure i make things." })] })] }) })] }));
}
