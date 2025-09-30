"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Consent = {
  v: number;
  necessary: boolean;
  analytics: boolean;
  ts: number;
};

function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((c) => c.startsWith("th_consent="));
  if (!match) return null;
  try {
    const raw = decodeURIComponent(match.split("=")[1] || "");
    const obj = JSON.parse(raw) as Consent;
    if (typeof obj === "object" && obj && "necessary" in obj) return obj;
  } catch {}
  return null;
}

function writeConsent(value: Consent) {
  if (typeof document === "undefined") return;
  const encoded = encodeURIComponent(JSON.stringify(value));
  const maxAge = 60 * 60 * 24 * 365;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `th_consent=${encoded}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

export default function CookieConsent() {
  const initial = useMemo(() => readConsent(), []);
  const [visible, setVisible] = useState(!initial);
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState<boolean>(initial?.analytics ?? false);

  const save = useCallback((next: { analytics: boolean }) => {
    const value: Consent = { v: 1, necessary: true, analytics: next.analytics, ts: Date.now() };
    writeConsent(value);
    setVisible(false);
    setOpen(false);
    setAnalytics(next.analytics);
    if (typeof window !== "undefined") window.dispatchEvent(new Event("th-consent-change"));
  }, []);

  const handleAcceptAll = useCallback(() => save({ analytics: true }), [save]);
  const handleNecessaryOnly = useCallback(() => save({ analytics: false }), [save]);
  const handleSave = useCallback(() => save({ analytics }), [save, analytics]);

  useEffect(() => {
    function onOpen() {
      setOpen(true);
      setVisible(true);
    }
    window.addEventListener("open-cookie-preferences", onOpen);
    return () => window.removeEventListener("open-cookie-preferences", onOpen);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-2xl rounded-sm border border-white/15 bg-[#0d0d0d]/95 backdrop-blur-md shadow-xl">
        <div className="p-4 sm:p-5">
          <div className="space-y-3">
            <h2 className="text-base font-semibold">Cookies</h2>
            <p className="text-sm text-white/70">
              Používáme nezbytné cookies pro chod webu a analytické cookies pro vylepšení. Nastavení
              můžete kdykoli změnit.
            </p>
            {!open ? (
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  onClick={handleAcceptAll}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#a50f19] focus-ring"
                >
                  Povolit vše
                </button>
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 focus-ring"
                >
                  Nastavení
                </button>
                <button
                  onClick={handleNecessaryOnly}
                  className="inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 focus-ring"
                >
                  Jen nezbytné
                </button>
              </div>
            ) : (
              <div className="mt-1 space-y-4">
                <div className="flex items-start justify-between gap-4 rounded-sm border border-white/10 p-3">
                  <div>
                    <p className="text-sm font-medium">Analytické</p>
                    <p className="text-xs text-white/60">
                      Google Analytics, Microsoft Clarity. Pomáhají nám zlepšovat web. Ukládáme až
                      po souhlasu.
                    </p>
                  </div>
                  <label className="inline-flex cursor-pointer items-center gap-2">
                    <input
                      aria-label="Povolit analytické"
                      type="checkbox"
                      className="h-4 w-4"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                    />
                    <span className="text-xs text-white/70">Povolit</span>
                  </label>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#a50f19] focus-ring"
                  >
                    Uložit nastavení
                  </button>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 focus-ring"
                  >
                    Zpět
                  </button>
                  <Link
                    href="/pravo/cookies"
                    className="inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 focus-ring"
                  >
                    Více informací
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CookiePreferencesLink({ className = "" }: { className?: string }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}
      className={`hover:underline ${className}`}
    >
      Změnit nastavení cookies
    </button>
  );
}
