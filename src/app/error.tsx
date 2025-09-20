'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Optionally log to monitoring
    // console.error(error);
  }, [error]);
  return (
    <div className="container px-6 py-20">
      <h1 className="text-2xl md:text-3xl font-semibold">Něco se pokazilo</h1>
      <p className="mt-2 text-white/70">Zkuste to prosím znovu. Pokud problém přetrvá, kontaktujte nás.</p>
      <div className="mt-6">
        <button className="focus-ring rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-[#a50f19]" onClick={() => reset()}>
          Zkusit znovu
        </button>
      </div>
    </div>
  );
}


