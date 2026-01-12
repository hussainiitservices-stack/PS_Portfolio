import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  PictureInPicture,
  Heart,
  Share2,
  Settings,
} from 'lucide-react';

interface VideoCardProps {
  vimeoId: string;
}

export function VideoCard({ vimeoId }: VideoCardProps) {
  const iframeRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showQuality, setShowQuality] = useState(false);
  const [qualities, setQualities] = useState<string[]>([]);
  const [currentQuality, setCurrentQuality] = useState<string>('auto');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current, {
      id: vimeoId,
      autoplay: true,
      muted: true,
      loop: true,
      background: false,
      controls: false,
      autopause: false,
    });

    playerRef.current = player;

    // Track play/pause state from player
    player.on('play', () => {
      setIsPlaying(true);
    });

    player.on('pause', () => {
      setIsPlaying(false);
    });

    // Load available qualities
    player.getQualities().then((q) => {
      setQualities(q.map(quality => quality.id));
    }).catch(() => {
      setQualities(['auto']);
    });

    player.getQuality().then((q) => {
      setCurrentQuality(q);
    }).catch(() => {});

    // Get duration
    player.getDuration().then((d) => {
      setDuration(d);
    });

    // Update current time
    player.on('timeupdate', (data) => {
      setCurrentTime(data.seconds);
    });

    // Track fullscreen changes
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      player.off('play');
      player.off('pause');
      player.off('timeupdate');
      player.destroy();
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [vimeoId]);

  const togglePlay = async () => {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        await playerRef.current.pause();
      } else {
        await playerRef.current.play();
      }
    } catch (error) {
      console.error('Play/Pause failed:', error);
    }
  };

  const toggleMute = async () => {
    if (!playerRef.current) return;
    await playerRef.current.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  const enterFullscreen = async () => {
    if (!containerRef.current) return;
    try {
      await containerRef.current.requestFullscreen();
    } catch (error) {
      console.error('Fullscreen failed:', error);
    }
  };

  const enterPiP = async () => {
    if (!playerRef.current) return;
    try {
      const iframe = iframeRef.current?.querySelector('iframe');
      if (iframe && 'requestPictureInPicture' in HTMLVideoElement.prototype) {
        await playerRef.current.requestPictureInPicture();
      }
    } catch (error) {
      console.error('PiP not supported or failed:', error);
      window.open(
        `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&autopause=0`,
        'vimeo-pip',
        'width=640,height=360,menubar=no,toolbar=no,location=no'
      );
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const openVimeoShare = () => {
    window.open(
      `https://vimeo.com/${vimeoId}#share`,
      'vimeo-share',
      'width=800,height=600,menubar=no,toolbar=no,location=no'
    );
  };

  const changeQuality = async (quality: string) => {
    if (!playerRef.current) return;
    try {
      await playerRef.current.setQuality(quality);
      setCurrentQuality(quality);
      setShowQuality(false);
    } catch (error) {
      console.error('Quality change failed:', error);
    }
  };

  const handleTimelineClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current || !duration) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    
    await playerRef.current.setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className={`relative aspect-video overflow-hidden group bg-black ${
        isFullscreen ? 'w-screen h-screen' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Vimeo */}
      <div ref={iframeRef} className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:absolute [&>iframe]:inset-0" />

      {/* Hover UI - Always show in fullscreen or on hover */}
      {(hovered || isFullscreen) && (
        <>
          {/* Controls */}
          <div className="absolute bottom-3 left-3 right-3 bg-black/60 rounded-md text-white z-10">
            {/* Timeline */}
            <div className="px-3 pt-3 pb-2">
              <div 
                className="w-full h-1 bg-white/30 rounded-full cursor-pointer hover:h-2 transition-all"
                onClick={handleTimelineClick}
              >
                <div 
                  className="h-full bg-white rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs mt-1 text-white/70">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center gap-3 px-3 pb-2">
              <button onClick={togglePlay} className="cursor-pointer hover:scale-110 transition-transform">
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>

              <button onClick={toggleMute} className="cursor-pointer hover:scale-110 transition-transform">
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              <div className="flex-1" />

              <div className="relative">
                <button 
                  onClick={() => setShowQuality(!showQuality)} 
                  className="cursor-pointer hover:scale-110 transition-transform"
                >
                  <Settings size={16} />
                </button>
                
                {showQuality && qualities.length > 0 && (
                  <div className="absolute bottom-full right-0 mb-2 bg-black/90 rounded-md py-2 px-1 min-w-[120px]">
                    <div className="text-xs font-semibold px-3 py-1 text-white/60">Quality</div>
                    {qualities.map((quality) => (
                      <button
                        key={quality}
                        onClick={() => changeQuality(quality)}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-white/10 cursor-pointer transition-colors ${
                          currentQuality === quality ? 'text-blue-400' : 'text-white'
                        }`}
                      >
                        {quality === 'auto' ? 'Auto' : `${quality}p`}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={enterPiP} className="cursor-pointer hover:scale-110 transition-transform">
                <PictureInPicture size={16} />
              </button>
              
              <button onClick={enterFullscreen} className="cursor-pointer hover:scale-110 transition-transform">
                <Maximize size={16} />
              </button>
            </div>
          </div>

          {/* Like & Share */}
          <div className="absolute top-3 right-3 flex gap-3 z-10 text-white">
            <button 
              onClick={toggleLike}
              className={`bg-black/60 p-2 rounded-full cursor-pointer hover:scale-110 transition-all ${
                isLiked ? 'text-red-500' : ''
              }`}
            >
              <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <button 
              onClick={openVimeoShare}
              className="bg-black/60 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"
            >
              <Share2 size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}