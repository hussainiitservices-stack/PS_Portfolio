import { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Heart,
  Share2,
  Settings,
} from 'lucide-react';

/**
 * VideoCard
 * ------------------------------------
 * Supports:
 * - Vimeo (full control, API based)
 * - Google Drive (iframe based, lightweight)
 *
 * Design goals:
 * - No YouTube
 * - No buffering-heavy logic
 * - Same UI & layout
 * - Clear separation of providers
 */

interface VideoCardProps {
  provider: 'vimeo' | 'drive';
  vimeoId?: string;
  driveFileId?: string;
}

export function VideoCard({
  provider,
  vimeoId,
  driveFileId,
}: VideoCardProps) {
  const iframeRef = useRef<HTMLDivElement>(null);          // Vimeo mount
  const driveIframeRef = useRef<HTMLIFrameElement>(null); // Drive iframe
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Shared UI state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Vimeo-only state
  const [showQuality, setShowQuality] = useState(false);
  const [qualities, setQualities] = useState<string[]>([]);
  const [currentQuality, setCurrentQuality] = useState('auto');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /* ============================
     VIMEO SETUP (ONLY IF NEEDED)
  ============================= */
  useEffect(() => {
    if (provider !== 'vimeo' || !iframeRef.current || !vimeoId) return;

    const player = new Player(iframeRef.current, {
      id: vimeoId,
      autoplay: true,
      muted: true,
      loop: true,
      controls: false,
      autopause: false,
    });

    playerRef.current = player;

    player.on('play', () => setIsPlaying(true));
    player.on('pause', () => setIsPlaying(false));

    player.getDuration().then(setDuration);
    player.on('timeupdate', e => setCurrentTime(e.seconds));

    player.getQualities()
      .then(q => setQualities(q.map(v => v.id)))
      .catch(() => setQualities(['auto']));

    player.getQuality().then(setCurrentQuality).catch(() => {});

    const onFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);

    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      player.destroy();
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, [provider, vimeoId]);

  /* ============================
     CONTROLS
  ============================= */
  const togglePlay = async () => {
    if (provider === 'vimeo' && playerRef.current) {
      isPlaying
        ? await playerRef.current.pause()
        : await playerRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = async () => {
    if (provider === 'vimeo' && playerRef.current) {
      await playerRef.current.setMuted(!isMuted);
    }
    setIsMuted(!isMuted);
  };

  const enterFullscreen = async () => {
    if (!containerRef.current) return;
    await containerRef.current.requestFullscreen();
  };

  const toggleLike = () => setIsLiked(!isLiked);

  const openVimeoShare = () => {
    if (!vimeoId) return;
    window.open(`https://vimeo.com/${vimeoId}`, '_blank');
  };

  const changeQuality = async (quality: string) => {
    if (!playerRef.current) return;
    await playerRef.current.setQuality(quality);
    setCurrentQuality(quality);
    setShowQuality(false);
  };

  const progress =
    duration > 0 ? (currentTime / duration) * 100 : 0;

  /* ============================
     RENDER
  ============================= */
  return (
    <div
      ref={containerRef}
      className={`relative aspect-video overflow-hidden group bg-black ${
        isFullscreen ? 'w-screen h-screen' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* VIDEO SOURCE */}
      {provider === 'vimeo' && (
        <div
          ref={iframeRef}
          className="absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full"
        />
      )}

      {provider === 'drive' && driveFileId && (
        <iframe
          ref={driveIframeRef}
          src={`https://drive.google.com/file/d/${driveFileId}/preview`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
        />
      )}

      {/* CONTROLS */}
{provider === 'vimeo' && (hovered || isFullscreen) && (
  <>
    <div className="absolute bottom-3 left-3 right-3 bg-black/60 rounded-md text-white z-10">
      <div className="px-3 pt-3 pb-2">
        <div className="w-full h-1 bg-white/30 rounded-full">
          <div
            className="h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 px-3 pb-2">
        <button onClick={togglePlay}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        <button onClick={toggleMute}>
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <div className="flex-1" />

        <div className="relative">
          <button onClick={() => setShowQuality(!showQuality)}>
            <Settings size={16} />
          </button>

          {showQuality && (
            <div className="absolute bottom-full right-0 mb-2 bg-black/90 rounded-md py-2 min-w-[120px]">
              {qualities.map(q => (
                <button
                  key={q}
                  onClick={() => changeQuality(q)}
                  className={`block w-full text-left px-3 py-2 ${
                    currentQuality === q
                      ? 'text-blue-400'
                      : 'text-white'
                  }`}
                >
                  {q === 'auto' ? 'Auto' : `${q}p`}
                </button>
              ))}
            </div>
          )}
        </div>

        <button onClick={enterFullscreen}>
          <Maximize size={16} />
        </button>
      </div>
    </div>

    {/* LIKE / SHARE */}
    <div className="absolute top-3 right-3 flex gap-3 z-10 text-white">
      <button
        onClick={toggleLike}
        className={`bg-black/60 p-2 rounded-full ${
          isLiked ? 'text-red-500' : ''
        }`}
      >
        <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
      </button>

      <button
        onClick={openVimeoShare}
        className="bg-black/60 p-2 rounded-full"
      >
        <Share2 size={16} />
      </button>
    </div>
  </>
)}

    </div>
  );
}
