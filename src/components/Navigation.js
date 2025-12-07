import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
export default function Navigation() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (_jsxs("nav", { className: "navigation", children: [_jsx("div", { className: "nav-brand", children: _jsxs("svg", { className: "nav-icon", width: "42", height: "42", viewBox: "0 0 42 42", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M8.80827 25.9497L11.2831 28.4246L18.7078 21L11.2831 13.5753L8.80827 16.0502L13.758 21L8.80827 25.9497Z", fill: "white" }), _jsx("path", { d: "M26.25 24.5H19.25V28H26.25V24.5Z", fill: "white" }), _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.5 3.5C1.567 3.5 0 5.067 0 7V35C0 36.933 1.567 38.5 3.5 38.5H38.5C40.433 38.5 42 36.933 42 35V7C42 5.067 40.433 3.5 38.5 3.5H3.5ZM38.5 7H3.5V35H38.5V7Z", fill: "white" })] }) }), _jsxs("div", { className: "nav-links", children: [_jsx(Link, { to: "/", className: `nav-link ${isActive('/') ? 'active' : ''}`, children: "HOME" }), _jsx(Link, { to: "/projects", className: `nav-link ${isActive('/projects') ? 'active' : ''}`, children: "THINGS-I-MADE" }), _jsx(Link, { to: "/contact", className: `nav-link ${isActive('/contact') ? 'active' : ''}`, children: "TALK-TO-ME" })] })] }));
}
