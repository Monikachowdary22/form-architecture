import { useEffect, useRef } from "react";

export default function Dialog({
  open,
  onClose,
  titleId,
  children,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      className={`dialog ${className}`}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();

        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        ) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        className="dialog-close"
        onClick={onClose}
        aria-label="Close dialog"
        autoFocus
      >
        <span aria-hidden="true">×</span>
      </button>
      {children}
    </dialog>
  );
}
