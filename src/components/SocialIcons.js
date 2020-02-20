import React from 'react'

import config from '../../config';

const SocialIcons = (props) => {
  return (
    <>
      <div className="social-icons">
        {
          config.socialLinks.map(social => {
            const { icon, url } = social;

            return (
              <a key={url} href={url}>
                <i className={`fab ${icon}`}></i>
              </a>
            );
          })
        }
      </div>
    </>
  )
}

export default SocialIcons
