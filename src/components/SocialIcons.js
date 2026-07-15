import React from 'react'

import config from '../../config';

const icons = {
  GitHub: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 0.3C5.4 0.3 0 5.7 0 12.4c0 5.3 3.4 9.8 8.2 11.4 0.6 0.1 0.8-0.3 0.8-0.6v-2.1c-3.3 0.7-4-1.6-4-1.6-0.5-1.4-1.3-1.8-1.3-1.8-1.1-0.7 0.1-0.7 0.1-0.7 1.2 0.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 0.1-0.8 0.4-1.3 0.8-1.6-2.7-0.3-5.5-1.3-5.5-6 0-1.3 0.5-2.4 1.3-3.3-0.1-0.3-0.5-1.5 0.1-3.2 0 0 1-0.3 3.4 1.3 1-0.3 2-0.4 3.1-0.4s2.1 0.1 3.1 0.4c2.3-1.6 3.4-1.3 3.4-1.3 0.7 1.7 0.2 2.9 0.1 3.2 0.8 0.9 1.3 2 1.3 3.3 0 4.7-2.8 5.7-5.5 6 0.4 0.4 0.8 1.1 0.8 2.2v3.3c0 0.3 0.2 0.7 0.8 0.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6 0.3 12 0.3z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h0.1c0.5-0.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.1zM5.3 7.4c-1.2 0-2.1-0.9-2.1-2.1 0-1.1 0.9-2.1 2.1-2.1s2.1 0.9 2.1 2.1c0 1.2-0.9 2.1-2.1 2.1zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C0.8 0 0 0.8 0 1.8v20.4C0 23.2 0.8 24 1.8 24h20.4c1 0 1.8-0.8 1.8-1.8V1.8C24 0.8 23.2 0 22.2 0z" />
    </svg>
  ),
};

const SocialIcons = (props) => {
  return (
    <>
      <div className="social-links">
        {
          config.socialLinks.map(social => {
            const { url, name } = social;

            return (
              <a key={url} href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                {icons[name]}
                <span className="sr-only">{name}</span>
              </a>
            );
          })
        }
      </div>
    </>
  )
}

export default SocialIcons
