/* eslint-disable react/no-danger */
import React from 'react';

export const GoogleOptimizer: React.FC = () => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {'optimize_id': '${process.env.NEXT_PUBLIC_GOOGLE_OPTIMIZE}' });
              `,
        }}
      />
    </>
  );
};
