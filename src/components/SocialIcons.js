import React from 'react'

import config from '../../config';

const SocialIcons = (props) => {
  return (
    <>
      <div className="social-icons">
        {
          config.socialLinks.map(social => {
            const { icon, url, name } = social;

            return (
              <a key={url} href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{name}</span>
                <i className={`fab ${icon}`} aria-hidden="true"></i>
              </a>
            );
          })
        }
      </div>
    </>
  )
}

export default SocialIcons
