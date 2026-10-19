import { useEffect, useRef, useState } from 'react';
import { Accessibility, X, Minus, Plus, RotateCcw, Sun, Moon } from 'lucide-react';

const STEP = 10;

export default function AccessibilityWidget({
  theme, setTheme, scale, setScale, minScale = 90, maxScale = 160,
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        btnRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function changeScale(delta) {
    setScale((s) => Math.min(maxScale, Math.max(minScale, s + delta)));
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] print:hidden">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Accessibility options"
          className="mb-3 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-surface p-5 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-heading">Accessibility</h2>
            <button
              type="button"
              onClick={() => { setOpen(false); btnRef.current?.focus(); }}
              className="grid h-9 w-9 place-items-center rounded-lg text-muted hover:bg-surface-2"
              aria-label="Close accessibility options"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Text size */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-heading" id="aksb-textsize-label">Text size</span>
              <span className="text-sm font-semibold text-muted" aria-hidden="true">{scale}%</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2" role="group" aria-labelledby="aksb-textsize-label">
              <button
                type="button"
                onClick={() => changeScale(-STEP)}
                disabled={scale <= minScale}
                className="inline-flex min-h-11 items-center justify-center gap-1 rounded-lg border border-border bg-bg font-semibold text-ink hover:bg-surface-2 disabled:opacity-40"
                aria-label="Decrease text size"
              >
                <Minus className="h-4 w-4" aria-hidden="true" /> A
              </button>
              <button
                type="button"
                onClick={() => setScale(100)}
                className="inline-flex min-h-11 items-center justify-center gap-1 rounded-lg border border-border bg-bg text-sm font-semibold text-ink hover:bg-surface-2"
                aria-label="Reset text size to 100 percent"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset
              </button>
              <button
                type="button"
                onClick={() => changeScale(STEP)}
                disabled={scale >= maxScale}
                className="inline-flex min-h-11 items-center justify-center gap-1 rounded-lg border border-border bg-bg text-lg font-semibold text-ink hover:bg-surface-2 disabled:opacity-40"
                aria-label="Increase text size"
              >
                <Plus className="h-4 w-4" aria-hidden="true" /> A
              </button>
            </div>
          </div>

          {/* Theme */}
          <div className="mt-5">
            <span className="text-sm font-semibold text-heading" id="aksb-theme-label">Theme</span>
            <div className="mt-2 grid grid-cols-2 gap-2" role="group" aria-labelledby="aksb-theme-label">
              <button
                type="button"
                onClick={() => setTheme('light')}
                aria-pressed={theme === 'light'}
                className={
                  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border font-semibold ' +
                  (theme === 'light'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-bg text-ink hover:bg-surface-2')
                }
              >
                <Sun className="h-5 w-5" aria-hidden="true" /> Light
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                aria-pressed={theme === 'dark'}
                className={
                  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border font-semibold ' +
                  (theme === 'dark'
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-bg text-ink hover:bg-surface-2')
                }
              >
                <Moon className="h-5 w-5" aria-hidden="true" /> Dark
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Accessibility options"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-2xl ring-2 ring-white/20 hover:bg-navy-700"
      >
        <Accessibility className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  );
}
