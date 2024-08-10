import React, { useEffect, useState } from 'react';
import '../styles/Navigation.css';
import {
    base1,
    base2,
    base3,
    base4,
    bg2,
    bg3,
    bglayer,
    cloud1,
    cloud2,
    cloud3,
    cloud4,
    cloud5,
    cloud6,
    cloud7,
    cloud8,
    hill1,
    hill2,
    hill3,
    hill4,
    sun
} from '../assets/images';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ImageUploader from './ImageUploader';

export default function Navigation() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='body'>
            <header>
                <h2 className='logo'>Logo</h2>
                <nav className="navigation">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">News</a>
                </nav>
            </header>

            <section className="parallax">
                <img src={bglayer} id='bglayer' alt="" />
                <img src={hill3} id='hill3' alt="" style={{ transform: `translateY(${scrollY * 0.2}px)` }} />
                <img src={hill2} id='hill2' alt="" style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
                <img src={hill1} id='hill1' alt="" style={{ transform: `translateY(${scrollY * 0.4}px)` }} />
                <img src={sun} id='sun' alt="" style={{ transform: `translateY(${scrollY * 0.5}px)`, position: 'absolute', top: '20px', right: '20px' }} />
                <img src={cloud8} id='cloud8' alt="" style={{ transform: `translateX(${scrollY * 0.4}px)` }} />
                <img src={cloud7} id='cloud7' alt="" style={{ transform: `translateX(${scrollY * 0.5}px)` }} />
                <img src={cloud5} id='cloud5' alt="" style={{ transform: `translateX(${scrollY * 0.7}px)` }} />
                <h2 id="text" style={{ marginTop: scrollY * 0.5 + 'px' }}>Parallax Website</h2>
                <img src={cloud6} id='cloud6' alt="" style={{ transform: `translateX(${scrollY * 0.6}px)` }} />
                <img src={cloud4} id='cloud4' alt="" style={{ transform: `translateX(${scrollY * 0.8}px)` }} />
                <img src={cloud3} id='cloud3' alt="" style={{ transform: `translateX(${scrollY * 0.9}px)` }} />
                <img src={cloud2} id='cloud2' alt="" style={{ transform: `translateX(${scrollY * 1.0}px)` }} />
                <img src={cloud1} id='cloud1' alt="" style={{ transform: `translateX(${scrollY * 1.1}px)` }} />
                <img src={base4} id='base4' alt="" />
                <img src={base3} id='base3' alt="" />
                <img src={base2} id='base2' alt="" />
                <img src={base1} id='base1' alt="" />
            </section>

            <section className="sec" style={{
                backgroundImage: `url(${bg2})`, /* Change this to your image path */
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px', /* Adjust padding as needed */
            }}>
                {/* Replace this section with ImageUploader Component */}
                <ImageUploader />
            </section>
        </div>
    );
}
