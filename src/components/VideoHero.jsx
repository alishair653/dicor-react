import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'

function toEmbedUrl(url) {
  if (!url || typeof url !== 'string') return ''
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v')
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
    }
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace(/^\//, '').split('/')[0]
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
    }
  } catch {
    return ''
  }
  return ''
}

function isLocalVideo(url) {
  if (!url || typeof url !== 'string') return false
  return /\.(mp4|webm|ogg|mov|m4v)$/i.test(url)
}

export default function VideoHero({
  posterSrc,
  videoUrl,
  ariaLabel = 'Play video',
  fullBleed = false
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const embedUrl = toEmbedUrl(videoUrl)
  const localVideo = isLocalVideo(videoUrl)
  const canPlay = Boolean(embedUrl || localVideo)
  const heroClass = fullBleed ? 'mz-videoHero mz-videoHero--fullBleed' : 'mz-videoHero'

  return (
    <section className={heroClass} aria-label="Video">
      <div className="mz-videoHeroMedia">
        {isPlaying && canPlay ? (
          <div className="mz-videoHeroIframeWrap">
            {embedUrl ? (
              <iframe
                title="Video"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            ) : (
              <video controls autoPlay playsInline style={{ width: '100%', height: '100%' }}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ) : (
          <>
            <img className="mz-videoHeroImg" src={posterSrc} alt="" loading="lazy" />
            <div className="mz-videoHeroScrim" aria-hidden />
            <button
              type="button"
              className="mz-videoHeroPlay"
              onClick={() => canPlay && setIsPlaying(true)}
              aria-label={ariaLabel}
              disabled={!canPlay}
            >
              <FaPlay className="mz-videoHeroPlayGlyph" aria-hidden />
            </button>
          </>
        )}
      </div>
    </section>
  )
}
