
"use client"
import { useState, useEffect } from "react";
import { Play, Pause, HeartIcon } from "lucide-react";


const MusicCard = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const newAudio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
      setAudio(newAudio);
    }
  }, []);
  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="  h-52 bg-[#fff38a] rounded-[30px] flex flex-col p-8 gap-4 cursor-pointer" onClick={togglePlay}>
      
      <div className="flex items-center justify-between">
        <h2 className="text-black text-2xl font-medium">Maria Gomez</h2>
        
        <span className="text-black text-lg font-medium"><HeartIcon/></span>
       
      </div>

      <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-[#0e0e0e] rounded-full flex items-center justify-center text-white">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`w-1 bg-black rounded-[9px] transition-all ${
              isPlaying ? "h-8 animate-bounce" : "h-4 bg-opacity-30"
            }`}
            style={
                    

                { animationDelay: `${i * 0.1}s`,
                
                height: `${Math .floor(Math.random() * 2) + 1}rem`
            }
                
            }
          />
        ))}
      </div>
      <div className="flex justify-between text-black text-lg font-medium">
        <span>AI Voice</span>

        <span>
            40 Min ago

        </span>
      </div>
    </div>
  );
};

export default MusicCard;
