import { useState, useEffect } from 'react'
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

export default function VideoHero({
  posterSrc,
  videoUrl,
  ariaLabel = 'Play video'
}) {
  const [open, setOpen] = useState(false)
  const embedUrl = toEmbedUrl(videoUrl)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <section className="mz-videoHero" aria-label="Video">
      <div className="mz-videoHeroMedia">
        <img className="mz-videoHeroImg" src={posterSrc} alt="" loading="lazy" />
        <div className="mz-videoHeroScrim" aria-hidden />
        <button
          type="button"
          className="mz-videoHeroPlay"
          onClick={() => embedUrl && setOpen(true)}
          aria-label={ariaLabel}
          disabled={!embedUrl}
        >
          <FaPlay className="mz-videoHeroPlayGlyph" aria-hidden />
        </button>
      </div>

      {open && embedUrl ? (
        <div
          className="mz-videoHeroModal"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setOpen(false)}
        >
          <div
            className="mz-videoHeroModalBox"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="mz-videoHeroModalClose"
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>
            <div className="mz-videoHeroIframeWrap">
              <iframe
                title="Video"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
