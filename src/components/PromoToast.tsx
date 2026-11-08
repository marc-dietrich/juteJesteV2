import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Gift, X } from 'lucide-react'

import { flyerPromo } from '@/data/site-content'

type PromoToastProps = {
  open: boolean
  onClose: () => void
  onShowFlyer: () => void
}

function PromoToast({ open, onClose, onShowFlyer }: PromoToastProps) {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      role="status"
      aria-live="polite"
      className="toast-in fixed inset-x-4 bottom-4 z-[100] flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-surface shadow-editorial md:inset-x-auto md:bottom-6 md:right-6 md:max-w-md"
    >
      <Gift className="h-5 w-5 shrink-0 text-secondary-container" />

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-snug">
          Infos zum {flyerPromo.heading}
        </p>
      </div>

      <button
        type="button"
        onClick={onShowFlyer}
        className="shrink-0 rounded-xl bg-surface/10 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-surface/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container"
      >
        Ansehen
      </button>

      <button
        type="button"
        onClick={onClose}
        aria-label="Hinweis schließen"
        className="-mr-1 shrink-0 rounded-full p-1.5 text-surface/70 transition-colors hover:bg-surface/10 hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-container"
      >
        <X className="h-4 w-4" />
      </button>
    </div>,
    document.body,
  )
}

export { PromoToast }
