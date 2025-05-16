'use client'

import { useEffect } from 'react';
import ClientScripts from '../components/client-scripts';

export default function Page() {
  return (
    <>
      <div className="navbar">
        <a href="#">
          <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
            <sl-icon name="house"></sl-icon>
          </div>
        </a>
        <a href="#about">
          <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
            <sl-icon name="person-fill"></sl-icon>
          </div>
        </a>
        <a href="#cnt">
          <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
            <sl-icon name="envelope"></sl-icon>
          </div>
        </a>
      </div>

      <section className="hero">
        <canvas className="background"></canvas>
        <div className="hero-container box-border h-32 w-32 font-extrabold">
          <span className="hero-title text-9xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            AeolusDev
          </span>

          <div className="social-box">
            <a className="link-wrapper" href="https://x.com/captaincool6333">
              <div className="circle"></div>
              <div className="icon-container">
                <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
                  <sl-icon name="twitter-x"></sl-icon>
                </div>
              </div>
            </a>
            <a className="link-wrapper" href="https://github.com/AeolusDev">
              <div className="circle"></div>
              <div className="icon-container">
                <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
                  <sl-icon name="github"></sl-icon>
                </div>
              </div>
            </a>
            <a className="link-wrapper" href="https://anilist.co/user/demonkingofweebs/">
              <div className="circle"></div>
              <div className="icon-container">
                <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
                  <iconify-icon icon="simple-icons:anilist"></iconify-icon>
                </div>
              </div>
            </a>
            <a className="link-wrapper" href="https://discord.com/users/596293027627270155">
              <div className="circle"></div>
              <div className="icon-container">
                <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
                  <sl-icon name="discord"></sl-icon>
                </div>
              </div>
            </a>
          </div>
          <span className="quoteField text-center text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"></span>
        </div>
      </section>

      <section className="about">
        <div id="about" className="abt_title bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 z-20">
          ABOUT
        </div>
        <div className="abt_desc">
          Just suffering 🙂
        </div>
        <div className="row">
          <img className="logo rounded-2xl pl-8 z-10 text-4xl" src="./images/ms-icon-310x310.png" alt="AeolusDev Logo" />
          <div className="abt_row_content">
            <ul>
              <li className="birthday">
                <sl-icon name="chevron-right"></sl-icon>
                <strong>Birthday:</strong> <span>1 September 2007</span>
              </li>
              <li className="website">
                <sl-icon name="chevron-right"></sl-icon> 
                <strong>Website:</strong> <span><a href="/" style={{ color: "aquamarine" }}>aeolusdev.pages.dev</a></span>
              </li>
              <li className="age">
                <sl-icon name="chevron-right"></sl-icon> 
                <strong>Age:</strong> <p id="date"></p>
              </li>
              <li className="email">
                <sl-icon name="chevron-right"></sl-icon> 
                <strong>Email:</strong> <span><a href="mailto:aeolusdeveloper@gmail.com"> aeolusdeveloper@gmail.com</a></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="spotify">
        <div id="spotify" className="spotify_title bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 z-20">
          SPOTIFY
        </div>
        <div className="spotify_desc">
          Vibin to this song
        </div>
        <div className="widget_container">
          <div className="widget_outer_box">
            {/* Spotify widget will be populated by client-side JavaScript */}
          </div>
        </div>
      </section>

      <section className="cnt">
        <div id="cnt" className="cnt_title bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 z-20">
          CONTACT
        </div>
        <div className="cnt_desc">
          More Contact Information For You To Spam My Inbox 🙂
        </div>
        <div className="info">
          <div className="address">
            <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
              <sl-icon name="geo-alt-fill"></sl-icon>
            </div>
            <a><strong>Location:</strong> 123 Fredy Fazbear Pizza Honolulu</a>
          </div>
          <div className="email">
            <div className="icon-placeholder size-16 text-center rounded-full shadow-2xl backdrop-blur-xl bg-gray-400/10">
              <sl-icon name="envelope-at-fill"></sl-icon>
            </div>
            <a><strong>Email:</strong> aeolusdeveloper@gmail.com</a>
          </div>
        </div>
      </section>

      <section className="footer">
        <div id="footer" className="footer_title bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 z-20">
          AEOLUSDEV
        </div>
        <div className="copyright">
          <p>&copy; Copyright 2025 <strong>Aeolus Developer</strong>. All Rights Reserved</p>
        </div>
      </section>
      
      {/* Load client-side scripts */}
      <ClientScripts />
    </>
  )
}