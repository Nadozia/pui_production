import Home from '../pages/home.js';
import Blog from '../pages/blog.js';
import Contact from '../pages/contact.js';
// import WebServer from '../pages/webServer.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
import MarkdownRenderer from './mdrender.js';

function AnimatedRoutes(){
    const location = useLocation();
    console.log(location);

    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/blog/database" element={<MarkdownRenderer path='blogs/6_OpenVpn.md' />}/>
                <Route path="/blog/ssh" element={<MarkdownRenderer path='blogs/ssh.md' />}/>
            </Routes>
        </AnimatePresence>
        
    );
}

export default AnimatedRoutes;