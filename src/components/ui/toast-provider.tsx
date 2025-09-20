'use client';

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

type ToastVariant = 'success' | 'error' | 'info';
type ToastItem = { id: number; title?: string; description?: string; variant: ToastVariant };

type ToastContextValue = {
  show: (toast: { title?: string; description?: string; variant?: ToastVariant; timeoutMs?: number }) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) return { show: () => {} };
  return ctx;
}

export function ToastProvider({ children }: { children?: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(1);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback(
    ({ title, description, variant = 'info', timeoutMs = 4000 }: { title?: string; description?: string; variant?: ToastVariant; timeoutMs?: number }) => {
      const id = idRef.current++;
      setToasts((prev) => [...prev, { id, title, description, variant }]);
      window.setTimeout(() => remove(id), timeoutMs);
    },
    [remove],
  );

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed inset-x-0 bottom-4 z-[100] flex justify-center px-4 pointer-events-none" aria-live="polite" role="status">
        <div className="w-full max-w-md space-y-2">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={`pointer-events-auto rounded-md border p-3 shadow-lg fade-in ${
                t.variant === 'success' ? 'border-green-700 bg-green-900/70 text-green-50' : t.variant === 'error' ? 'border-red-700 bg-red-900/70 text-red-50' : 'border-white/15 bg-black/70 text-white'
              }`}
            >
              {t.title && <div className="text-sm font-medium">{t.title}</div>}
              {t.description && <div className="mt-0.5 text-xs opacity-90">{t.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}


