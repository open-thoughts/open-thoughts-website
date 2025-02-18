'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    fnames: string[];
    ftypes: string[];
  }
}

export function MailchimpForm() {
  useEffect(() => {
    // Load Mailchimp CSS
    const link = document.createElement('link');
    link.href = '//cdn-images.mailchimp.com/embedcode/classic-061523.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
  }, []);

  return (
    <div id="mc_embed_shell" className="my-8">
      <style jsx>{`
        #mc_embed_signup {
          background: transparent;
          clear: left;
          font: 14px Helvetica, Arial, sans-serif;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Dark mode overrides for Mailchimp form */
        :global(.dark) #mc_embed_signup {
          color-scheme: dark;
        }

        :global(.dark) #mc_embed_signup h2 {
          color: #fff;
        }

        :global(.dark) #mc_embed_signup .indicates-required,
        :global(.dark) #mc_embed_signup label {
          color: #e5e5e5;
        }

        :global(.dark) #mc_embed_signup input {
          background-color: #1a1a1a;
          border-color: #404040;
          color: #fff;
        }

        :global(.dark) #mc_embed_signup input:focus {
          border-color: #666;
        }

        :global(.dark) #mc_embed_signup .button {
          background-color: #404040;
          color: #fff;
        }

        :global(.dark) #mc_embed_signup .button:hover {
          background-color: #525252;
        }

        :global(.dark) #mc_embed_signup .asterisk {
          color: #ff6b6b;
        }

        /* Improve light mode styles */
        #mc_embed_signup .button {
          background-color: #000;
          transition: all 0.2s ease;
        }

        #mc_embed_signup .button:hover {
          background-color: #333;
        }

        #mc_embed_signup input {
          border: 1px solid #e5e5e5;
          transition: all 0.2s ease;
        }

        #mc_embed_signup input:focus {
          border-color: #000;
          outline: none;
        }
      `}</style>
      <div id="mc_embed_signup">
        <form
          action="https://open-thoughts.us19.list-manage.com/subscribe/post?u=8c94b926f9342c4a7cfaa7d6b&amp;id=47b20af994&amp;f_id=00989ce4f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe for updates</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div hidden>
              <input type="hidden" name="tags" value="476" />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input
                type="text"
                name="b_fca6fecdc219b008878d4be4f_2229759966"
                tabIndex={-1}
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </div>
      <Script
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        onLoad={() => {
          window.fnames = new Array();
          window.ftypes = new Array();
          window.fnames[0] = 'EMAIL';
          window.ftypes[0] = 'email';
          window.fnames[1] = 'FNAME';
          window.ftypes[1] = 'text';
          window.fnames[2] = 'LNAME';
          window.ftypes[2] = 'text';
          window.fnames[3] = 'ADDRESS';
          window.ftypes[3] = 'address';
          window.fnames[4] = 'PHONE';
          window.ftypes[4] = 'phone';
          window.fnames[5] = 'BIRTHDAY';
          window.ftypes[5] = 'birthday';
        }}
      />
    </div>
  );
} 