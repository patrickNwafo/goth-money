import React, { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    return (
        <audio ref={audioRef} loop autoPlay>
            <source src="/goth.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default BackgroundMusic;