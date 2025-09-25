"use client"
import { useEffect, useState } from 'react'

type Consent = { v: number; necessary: boolean; analytics: boolean; ts: number }

function getConsent(): Consent | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.split('; ').find((c) => c.startsWith('th_consent='))
  if (!match) return null
  try { return JSON.parse(decodeURIComponent(match.split('=')[1] || '')) as Consent } catch { return null }
}

declare global {
  interface Window { dataLayer?: unknown[]; clarity?: (...args: unknown[]) => void }
}

export default function AnalyticsLoader() {
  const [allowed, setAllowed] = useState<boolean>(() => !!getConsent()?.analytics)
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  useEffect(() => {
    function onChange() { setAllowed(!!getConsent()?.analytics) }
    window.addEventListener('th-consent-change', onChange)
    return () => window.removeEventListener('th-consent-change', onChange)
  }, [])

  useEffect(() => {
    if (!allowed) return
    if (gaId) {
      window.dataLayer = window.dataLayer || []
      const s1 = document.createElement('script')
      s1.async = true
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(s1)
      const s2 = document.createElement('script')
      s2.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js', new Date());gtag('config','${gaId}',{anonymize_ip:false,allow_google_signals:false})`
      document.head.appendChild(s2)
    }
    if (clarityId) {
      const s = document.createElement('script')
      s.innerHTML = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityId}");`
      document.head.appendChild(s)
    }
  }, [allowed, gaId, clarityId])

  return null
}


