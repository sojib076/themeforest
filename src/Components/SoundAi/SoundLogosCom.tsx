/* eslint-disable @next/next/no-img-element */
import React from 'react';

const SoundLogosCom = () => {
    return (
        <div>
            <div className="marquee marquee--8">
              {
                Array(20).fill(0).map((_, i) => (
                    <img key={i} src="https://placehold.co/100x100/purple/gold?font=playfair-display/text=1" alt="google" className="marquee__item" />
                ))
              }

            </div>


        </div>
    );
};

export default SoundLogosCom;