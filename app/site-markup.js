export const MARKUP = `<div class="root">

  <!-- ===== NAVBAR ===== -->
  <nav class="nav" id="nav">
    <div class="brand" data-nav="home">
      <div class="brand-name">Sudarva<span class="acc">.</span></div>
      <div class="brand-tag">Beyond the network</div>
    </div>

    <div class="desktop-nav">
      <div class="dropdown">
        <div class="nav-item"><span>Solutions</span><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="mega">
          <div class="mega-inner">
            <div class="mega-lead">
              <div class="mega-lead-k">Solutions</div>
              <div class="mega-lead-t">Connectivity, delivered as a layer.</div>
              <p class="mega-lead-p">Everything a travel business needs to sell data — without becoming a telecom company.</p>
            </div>
            <div class="mega-links">
              <a href="/solutions/travel" class="mega-link" data-nav="sol-travel"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><ellipse cx="12" cy="12" rx="3.4" ry="8"/><path d="M4 12h16M5 8h14M5 16h14"/></svg></span><span class="mega-tx"><b>Travel Connectivity</b><small>Working data the moment they land, across 184 countries and 459 networks.</small></span></a>
              <a href="/solutions/partner" class="mega-link" data-nav="sol-partner"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5"/><path d="M15.5 14.2c2.1.2 3.8 2 3.8 4.8"/></svg></span><span class="mega-tx"><b>Partner Enablement</b><small>Wallets, commissions and reporting agents already understand.</small></span></a>
              <a href="/solutions/network" class="mega-link" data-nav="sol-network"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 20 7 12 11 4 7 12 3Z"/><path d="M4 12l8 4 8-4M4 16.5l8 4 8-4"/></svg></span><span class="mega-tx"><b>Network Infrastructure</b><small>Multi-profile provisioning, metering and settlement at the core.</small></span></a>
              <a href="/solutions/api" class="mega-link" data-nav="sol-api"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m9 8-5 4 5 4M15 8l5 4-5 4"/></svg></span><span class="mega-tx"><b>API Solutions</b><small>One private integration for onboarded partners.</small></span></a>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <div class="nav-item"><span>Platforms</span><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="mega">
          <div class="mega-inner">
            <div class="mega-lead">
              <div class="mega-lead-k">Platforms</div>
              <div class="mega-lead-t">Products built on the layer.</div>
              <p class="mega-lead-p">The applications partners and travellers touch, running on the same infrastructure.</p>
            </div>
            <div class="mega-links">
              <a href="/connect" class="mega-link" data-nav="Connect"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="3" width="12" height="18" rx="3"/><path d="M10 7h4"/></svg></span><span class="mega-tx"><b>Sudarva Connect</b><small>Launch a fully branded eSIM business on running infrastructure.</small></span></a>
              <a class="mega-link mega-link--soon"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z"/></svg></span><span class="mega-tx"><b>Sudarva Go<span class="soon-badge">Coming soon</span></b><small>The next layer beyond data — same rails, more of the trip.</small></span></a>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <div class="nav-item"><span>Developers</span><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="mega">
          <div class="mega-inner">
            <div class="mega-lead">
              <div class="mega-lead-k">Developers</div>
              <div class="mega-lead-t">Build on a private API.</div>
              <p class="mega-lead-p">Provided to onboarded partners. Everything you need from first call to production.</p>
            </div>
            <div class="mega-links">
              <a href="/guides" class="mega-link" data-nav="Guides"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 0-2 2V5Z"/><path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 1 2 2V5Z"/></svg></span><span class="mega-tx"><b>Guides</b><small>Get access, keys, wallet and your first provisioning call.</small></span></a>
              <a href="/support" class="mega-link" data-nav="Support"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.2 9.3a2.8 2.8 0 0 1 5.3 1c0 1.9-2.8 2.5-2.8 2.5"/><path d="M12 17h.01"/></svg></span><span class="mega-tx"><b>Support</b><small>Help articles and partner support, one business day.</small></span></a>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <div class="nav-item"><span>Sudarva</span><svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="mega mega--brand">
          <div class="mega-bg" aria-hidden="true">
            <div class="mega-bg-glow"></div>
            <div class="mega-bg-grid"></div>
            <svg class="mega-bg-art" viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="mega-hub" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(398 168) rotate(90) scale(90)">
                  <stop stop-color="var(--acc)" stop-opacity="0.35"/>
                  <stop offset="0.45" stop-color="var(--acc)" stop-opacity="0.08"/>
                  <stop offset="1" stop-color="var(--acc)" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <g class="mega-bg-orbit">
                <circle cx="398" cy="168" r="118" stroke="currentColor" stroke-width="1" opacity="0.22"/>
                <circle cx="398" cy="168" r="88" stroke="currentColor" stroke-width="1" opacity="0.16"/>
                <ellipse cx="398" cy="168" rx="118" ry="42" stroke="currentColor" stroke-width="1" opacity="0.2"/>
                <ellipse cx="398" cy="168" rx="118" ry="72" stroke="currentColor" stroke-width="1" opacity="0.14"/>
              </g>
              <g class="mega-bg-mesh" stroke="var(--acc)" stroke-width="1" stroke-linecap="round">
                <path d="M118 260 C 220 190, 310 170, 398 168" opacity="0.42"/>
                <path d="M60 300 C 170 240, 280 200, 398 168" opacity="0.28"/>
                <path d="M180 120 L398 168" opacity="0.35"/>
              </g>
              <g class="mega-bg-nodes" fill="var(--acc)">
                <circle cx="118" cy="260" r="2.5" opacity="0.7"/>
                <circle cx="60" cy="300" r="2" opacity="0.45"/>
                <circle cx="180" cy="120" r="2" opacity="0.5"/>
              </g>
              <circle class="mega-bg-hub" cx="398" cy="168" r="90" fill="url(#mega-hub)"/>
              <circle cx="398" cy="168" r="5" fill="var(--acc)" opacity="0.9"/>
              <circle cx="398" cy="168" r="12" stroke="var(--acc)" stroke-width="1.5" opacity="0.5"/>
              <g class="mega-bg-ring" stroke="var(--acc)" stroke-width="1" fill="none" opacity="0.35">
                <circle cx="398" cy="168" r="22"/>
                <circle cx="398" cy="168" r="22"/>
              </g>
            </svg>
          </div>
          <div class="mega-inner">
            <div class="mega-lead">
              <div class="mega-lead-k">Sudarva</div>
              <div class="mega-lead-t">Beyond the network.</div>
              <p class="mega-lead-p">The company, the team, and the thinking behind the connectivity layer.</p>
            </div>
            <div class="mega-links">
              <a href="/about" class="mega-link" data-nav="About Sudarva"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg></span><span class="mega-tx"><b>About Sudarva</b><small>The story, mission and people building the layer travel runs on.</small></span></a>
              <a href="/careers" class="mega-link" data-nav="Careers"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></span><span class="mega-tx"><b>Careers<span class="hiring-badge">Hiring</span></b><small>Join engineers, operators and partners shaping global travel connectivity.</small></span></a>
              <a href="/insight" class="mega-link" data-nav="Insights"><span class="mega-ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 7h8M8 11h8"/></svg></span><span class="mega-tx"><b>Insights</b><small>Perspectives on infrastructure, partnerships and the future of travel data.</small></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="nav-actions">
      <button type="button" class="theme-btn" id="theme-btn" data-theme-toggle aria-label="Toggle theme"></button>
      <a href="/contact" class="contact-btn" data-nav="Contact"><span>Contact Us</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </nav>

  <!-- mobile dropdown menu -->
  <div class="mobile-menu" id="mobile-menu">
    <div class="mm-group">
      <button class="mm-head" aria-expanded="false"><span>Solutions</span><svg class="mm-chev" width="14" height="9" viewBox="0 0 12 8" fill="none"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div class="mm-sub">
        <div class="mm-item" data-nav="sol-travel">Travel Connectivity</div>
        <div class="mm-item" data-nav="sol-partner">Partner Enablement</div>
        <div class="mm-item" data-nav="sol-network">Network Infrastructure</div>
        <div class="mm-item" data-nav="sol-api">API Solutions</div>
      </div>
    </div>
    <div class="mm-group">
      <button class="mm-head" aria-expanded="false"><span>Platforms</span><svg class="mm-chev" width="14" height="9" viewBox="0 0 12 8" fill="none"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div class="mm-sub">
        <div class="mm-item" data-nav="Connect">Sudarva Connect</div>
        <div class="mm-item">Sudarva Go<span class="soon-badge">Coming soon</span></div>
      </div>
    </div>
    <div class="mm-group">
      <button class="mm-head" aria-expanded="false"><span>Developers</span><svg class="mm-chev" width="14" height="9" viewBox="0 0 12 8" fill="none"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div class="mm-sub">
        <div class="mm-item" data-nav="Guides">Guides</div>
        <div class="mm-item" data-nav="Support">Support</div>
      </div>
    </div>
    <div class="mm-group">
      <button class="mm-head" aria-expanded="false"><span>Sudarva</span><svg class="mm-chev" width="14" height="9" viewBox="0 0 12 8" fill="none"><path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <div class="mm-sub">
        <div class="mm-item" data-nav="About Sudarva">About Sudarva</div>
        <div class="mm-item" data-nav="Careers">Careers<span class="hiring-badge">Hiring</span></div>
        <div class="mm-item" data-nav="Insights">Insights</div>
        <div class="compact-divider mm-theme-divider"></div>
        <div class="theme-switcher mm-theme-switcher" data-theme-switcher>
          <button type="button" class="theme-side" data-theme-set="light" aria-label="Light mode" aria-pressed="true">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.4"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/></svg>
            <span>Light</span>
          </button>
          <button type="button" class="theme-toggle" data-theme-toggle role="switch" aria-checked="false" aria-label="Toggle dark mode"><span class="theme-knob"></span></button>
          <button type="button" class="theme-side" data-theme-set="dark" aria-label="Dark mode" aria-pressed="false">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>
            <span>Dark</span>
          </button>
        </div>
      </div>
    </div>
    <a href="/contact" class="mm-contact" data-nav="Contact">Contact Us</a>
  </div>

  <!-- ==================== HOME VIEW ==================== -->
  <div class="view active" id="home">

    <div class="globe-box">
      <div id="globe"></div>
      <div class="globe-fade"></div>
    </div>

    <div class="hero">
      <div class="eyebrow">One network. Every journey.</div>
      <h1 class="home-hero-title"><span class="hero-grad">Infrastructure that powers the</span> <span class="acc">future of travel.</span></h1>
      <p style="font-size:clamp(16px,4vw,19px); line-height:1.62; color:var(--mut); max-width:520px; margin-bottom:clamp(30px,5vw,44px);">Sudarva is the technology infrastructure that connects travel businesses, partners and travellers across Asia and beyond.</p>
      <div class="hero-btns">
        <a href="#" class="btn-primary"><span>Explore Platform</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <a href="#" class="btn-secondary"><span>Talk to Our Team</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
    </div>

    <div class="stats-wrap">
      <div class="stats-grid" id="stats-grid"></div>
    </div>

    <!-- THE GAP -->
    <div class="section">
      <div class="section-head reveal">
        <div class="eyebrow">The gap</div>
        <h2 class="h2 statement-h2">A connectivity API isn't a<br><span class="acc">travel platform.</span></h2>
        <p class="lead">Plugging into a network gets you data. Running a travel business needs everything that happens around it.</p>
      </div>
      <div class="gap-grid reveal">
        <div class="gap-card">
          <div class="gap-card-head"><div style="font-size:clamp(17px,2.4vw,20px); font-weight:600; color:var(--mut);">What a connectivity API gives you</div><div class="mono-num" style="color:var(--fnt);">03</div></div>
          <div id="gap-gives"></div>
        </div>
        <div class="gap-card gap-card--accent">
          <div class="gap-card-head"><div style="font-size:clamp(17px,2.4vw,20px); font-weight:600; color:var(--text);">What travel actually needs</div><div class="mono-num acc">05</div></div>
          <div id="gap-needs"></div>
        </div>
      </div>
      <p style="text-align:center; margin-top:clamp(36px,5vw,56px); font-size:clamp(14px,2.6vw,17px); color:var(--fnt); max-width:620px; margin-left:auto; margin-right:auto;">Three things versus everything else. <span style="color:var(--text);">The asymmetry is the whole argument.</span></p>
    </div>

    <!-- WHERE WE SIT -->
    <div class="section section--panel">
      <div class="section-head reveal">
        <div class="eyebrow">Where we sit</div>
        <h2 class="h2">The layer between <span class="acc">networks and channels.</span></h2>
      </div>
      <div class="tier reveal">
        <div class="tier-col">
          <div class="tier-label">Networks</div>
          <div class="tier-list" id="tier-networks"></div>
        </div>
        <div class="tier-arrow"><svg width="100%" height="100%" viewBox="0 0 60 24" preserveAspectRatio="none" fill="none"><path d="M2 12h54" stroke="var(--pbd)" stroke-width="1.4"/><path d="M2 12h54" stroke="var(--acc)" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="5 11" class="dash"/><path d="M48 6l8 6-8 6" stroke="var(--acc)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="tier-center">
          <div class="tier-center-card"><div style="font-size:clamp(26px,3.4vw,34px); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px;">Sudarva<span class="acc">.</span></div><div style="font-size:14px; color:var(--mut); line-height:1.6;">Provisioning · KYC · Metering · Settlement</div></div>
        </div>
        <div class="tier-arrow"><svg width="100%" height="100%" viewBox="0 0 60 24" preserveAspectRatio="none" fill="none"><path d="M2 12h54" stroke="var(--pbd)" stroke-width="1.4"/><path d="M2 12h54" stroke="var(--acc)" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="5 11" class="dash"/><path d="M48 6l8 6-8 6" stroke="var(--acc)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="tier-col">
          <div class="tier-label">Channels</div>
          <div class="tier-list" id="tier-channels"></div>
        </div>
      </div>
    </div>

    <!-- CAPABILITIES -->
    <div class="section">
      <div class="section-head reveal">
        <div class="eyebrow">What we do</div>
        <h2 class="h2">Four capabilities. <span class="acc">One platform.</span></h2>
      </div>
      <div class="cap-grid reveal" id="cap-grid"></div>
    </div>

    <!-- WHO IT'S FOR -->
    <div class="section">
      <div class="section-head reveal">
        <div class="eyebrow">Who it's for</div>
        <h2 class="h2">Built for the <span class="acc">travel channel.</span></h2>
        <p class="lead">Most platforms split their offering by telco type. We split by travel channel — same slot, opposite meaning.</p>
      </div>
      <div class="aud-grid reveal" id="aud-grid"></div>
    </div>

    <!-- API -->
    <div class="section">
      <div class="api">
        <div class="reveal">
          <div class="eyebrow">For partners</div>
          <h2 style="font-size:clamp(30px,5vw,54px); line-height:1.07; font-weight:700; letter-spacing:-0.03em; margin-bottom:clamp(18px,2.6vw,26px);">Provisioning in <span class="acc">one call.</span></h2>
          <p style="font-size:clamp(16px,3.4vw,19px); line-height:1.62; color:var(--mut); max-width:440px; margin-bottom:clamp(26px,3vw,34px);">Our API isn't public — it's provided internally to onboarded partners. One request provisions a profile, runs KYC and starts metering. Webhooks stream usage; settlement reconciles itself.</p>
          <div class="api-points" id="api-points"></div>
        </div>
        <div class="api-terminal reveal">
          <div class="term-bar"><span class="dot" style="background:#ff5f56;"></span><span class="dot" style="background:#ffbd2e;"></span><span class="dot" style="background:#27c93f;"></span><span class="term-file">provision.sh</span></div>
          <pre class="term-pre"><span id="term"></span><span class="caret"></span></pre>
        </div>
      </div>
    </div>

  </div>

  <!-- ==================== ABOUT VIEW ==================== -->
  <div class="view" id="about">

    <div class="about-hero">
      <div class="climb-scene">
        <svg viewBox="0 0 620 460" preserveAspectRatio="xMidYMax meet" style="width:100%; height:100%; opacity:0.92;">
          <g fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
            <line x1="470" y1="64" x2="470" y2="400"></line>
            <line x1="470" y1="64" x2="616" y2="64"></line>
            <line x1="30" y1="400" x2="616" y2="400"></line>
            <g stroke-width="7">
              <animate attributeName="opacity" dur="10s" repeatCount="indefinite" keyTimes="0;0.49;0.52;0.97;1" values="0;0;1;1;0"></animate>
              <line x1="408" y1="400" x2="450" y2="152"></line>
              <line x1="432" y1="400" x2="474" y2="152"></line>
              <line x1="420" y1="352" x2="444" y2="352"></line>
              <line x1="428" y1="304" x2="452" y2="304"></line>
              <line x1="436" y1="256" x2="460" y2="256"></line>
              <line x1="444" y1="208" x2="468" y2="208"></line>
            </g>
            <g>
              <animateTransform attributeName="transform" type="translate" additive="replace" dur="10s" repeatCount="indefinite" keyTimes="0;0.05;0.24;0.30;0.36;0.42;0.46;0.50;0.55;0.72;0.80;0.86;0.92;0.95;1" values="395,322; 395,322; 430,210; 430,205; 420,240; 330,322; 330,322; 395,322; 395,322; 424,250; 424,232; 424,246; 340,322; 340,322; 395,322"></animateTransform>
              <animateTransform attributeName="transform" type="rotate" additive="sum" dur="10s" repeatCount="indefinite" keyTimes="0;0.05;0.24;0.30;0.36;0.42;0.46;0.50;0.55;0.72;0.80;0.86;0.92;0.95;1" values="0 0 0; 0 0 0; 0 0 0; -6 0 0; 35 0 0; 100 0 0; 100 0 0; 0 0 0; 0 0 0; 0 0 0; -8 0 0; 20 0 0; 100 0 0; 100 0 0; 0 0 0"></animateTransform>
              <line x1="0" y1="0" x2="26" y2="78"><animateTransform attributeName="transform" type="rotate" dur="10s" repeatCount="indefinite" keyTimes="0;0.05;0.24;0.30;0.36;0.42;0.46;0.50;0.55;0.72;0.80;0.86;0.92;0.95;1" values="0 0 0; 0 0 0; -20 0 0; -25 0 0; 10 0 0; 45 0 0; 45 0 0; 0 0 0; 0 0 0; -22 0 0; -28 0 0; 5 0 0; 45 0 0; 45 0 0; 0 0 0"></animateTransform></line>
              <line x1="0" y1="0" x2="-26" y2="78"><animateTransform attributeName="transform" type="rotate" dur="10s" repeatCount="indefinite" keyTimes="0;0.05;0.24;0.30;0.36;0.42;0.46;0.50;0.55;0.72;0.80;0.86;0.92;0.95;1" values="0 0 0; 0 0 0; 25 0 0; 20 0 0; -10 0 0; -45 0 0; -45 0 0; 0 0 0; 0 0 0; 22 0 0; 28 0 0; -5 0 0; -45 0 0; -45 0 0; 0 0 0"></animateTransform></line>
              <line x1="0" y1="0" x2="0" y2="-78"></line>
              <circle cx="0" cy="-100" r="20"></circle>
              <line x1="0" y1="-78" x2="30" y2="-120"><animateTransform attributeName="transform" type="rotate" dur="10s" repeatCount="indefinite" keyTimes="0;0.05;0.24;0.30;0.36;0.42;0.46;0.50;0.55;0.72;0.80;0.86;0.92;0.95;1" values="120 0 -78; 120 0 -78; 15 0 -78; -5 0 -78; 60 0 -78; 140 0 -78; 140 0 -78; 120 0 -78; 120 0 -78; 25 0 -78; -20 0 -78; 55 0 -78; 140 0 -78; 140 0 -78; 120 0 -78"></animateTransform></line>
              <line x1="0" y1="-78" x2="-30" y2="-120"><animateTransform attributeName="transform" type="rotate" dur="10s" repeatCount="indefinite" keyTimes="0;0.05;0.24;0.30;0.36;0.42;0.46;0.50;0.55;0.72;0.80;0.86;0.92;0.95;1" values="-120 0 -78; -120 0 -78; -15 0 -78; 5 0 -78; -60 0 -78; -140 0 -78; -140 0 -78; -120 0 -78; -120 0 -78; -25 0 -78; 20 0 -78; -55 0 -78; -140 0 -78; -140 0 -78; -120 0 -78"></animateTransform></line>
            </g>
            <g stroke-width="10">
              <animate attributeName="opacity" dur="10s" repeatCount="indefinite" keyTimes="0;0.26;0.29;0.34;0.37;1" values="0;0;1;1;0;0"></animate>
              <animateTransform attributeName="transform" type="translate" dur="10s" repeatCount="indefinite" keyTimes="0;0.26;0.31;0.37;1" values="470,-70; 470,-70; 448,96; 470,-70; 470,-70"></animateTransform>
              <line x1="0" y1="-52" x2="0" y2="0"></line>
              <path d="M0 0 L-34 0 L-40 -14"></path>
            </g>
          </g>
        </svg>
        <div class="climb-fade-x"></div>
        <div class="climb-fade-y"></div>
      </div>
      <div class="about-hero-text">
        <div class="eyebrow rise-1">Why we exist</div>
        <h1 class="rise-2" style="font-size:clamp(34px,6.4vw,72px); line-height:1.05; font-weight:700; letter-spacing:-0.03em; max-width:16ch;">The infrastructure that makes <span class="acc">global travel seamless.</span></h1>
      </div>
    </div>

    <div class="section"><div class="prose reveal">
      <div class="eyebrow">About us</div>
      <p class="prose-lead">Sudarva is a travel-tech infrastructure company — the wholesale data distribution layer that lets any travel business offer seamless connectivity without becoming a telecom company.</p>
      <p class="prose-body">Somewhere between a mobile network and a traveller standing in an airport with a dead phone, there's a gap.</p>
      <p class="prose-body">Networks sell data to companies that understand telecom. Travel businesses understand travellers. Neither was built to talk to the other — so every travel company that wants to offer connectivity ends up building the same plumbing from scratch. Provisioning. Identity. Metering. Settlement. Reconciliation. All of it, before a single byte is sold.</p>
      <p class="prose-body">That's backwards. Distribution shouldn't be something each company reinvents. It should be infrastructure.</p>
      <p class="prose-strong">That's what we're building.</p>
    </div></div>

    <div class="section section--panel"><div class="prose reveal">
      <div class="eyebrow">What we're building</div>
      <p class="prose-lead">Sudarva is a wholesale data distribution layer. Not a product. Not an app. A layer.</p>
      <p class="prose-body">It sits between the networks that carry data and the channels that reach travellers, and it does the work neither side was built to do: turning a raw network profile into something an agent can sell, a traveller can verify, a partner can be paid for, and a business can account for.</p>
      <p class="prose-quote">Any travel business, anywhere, can offer connectivity without becoming a telecom company.</p>
    </div></div>

    <div class="section"><div class="prose reveal">
      <div class="eyebrow">What comes next</div>
      <p class="prose-lead">The layer isn't only for data.</p>
      <p class="prose-body">Once distribution, identity and settlement exist as infrastructure, the same rails can carry anything a traveller buys away from home — tickets, transfers, stays, experiences. Anything a channel needs to sell, meter and settle.</p>
      <p class="prose-body">Data is where we started, because it's the hardest part. It isn't where we stop.</p>
    </div></div>

    <div class="section section--panel">
      <div class="section-head reveal">
        <div class="eyebrow">How we build</div>
        <h2 class="h2">Principles, <span class="acc">not slogans.</span></h2>
      </div>
      <div class="about-grid" id="about-principles"></div>
    </div>

    <div class="section section--panel">
      <div class="section-head reveal">
        <div class="eyebrow">The team</div>
        <h2 class="h2" style="margin-bottom:clamp(22px,3vw,30px);">The one thing we keep <span class="acc">sealed.</span></h2>
        <p class="lead" style="max-width:640px;">Every great brand has a formula it never prints on the label. A recipe locked in a vault, known to a few, never handed out. The people who build Sudarva are ours.</p>
        <p class="lead" style="max-width:640px; margin-top:16px;">We don't publish the roster, the org chart, or the names. Not out of secrecy for its own sake — because the team <span style="color:var(--text);">is</span> the recipe, and the recipe stays safe in our hands.</p>
      </div>
      <div class="vault">
        <div class="vault-head">
          <div class="vault-title"><span class="vault-lock"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg></span><span class="mono-label">Sealed roster</span></div>
          <span class="mono-label acc">Classified</span>
        </div>
        <div id="sealed-team"></div>
        <div class="vault-foot">+ the rest, redacted</div>
      </div>
    </div>

    <div class="section birds-section">
      <div class="flock-wrap"><div class="flock" id="flock"></div></div>
      <div class="section-head reveal">
        <div class="eyebrow">How the team works</div>
        <h2 class="h2" style="margin-bottom:clamp(22px,3vw,30px);">We navigate like <span class="acc">migratory birds.</span></h2>
        <p class="lead" style="max-width:720px;">The founder believes in migratory birds. They cross continents with no map handed to them — holding formation, trading the lead, trusting the season and each other. No worn trail. No single footprint to step into.</p>
        <p class="lead" style="max-width:720px; margin-top:16px;">The tech team works the same way. We take turns at the front, share the draft behind whoever's leading, and keep moving toward something that isn't on any chart yet. Nobody here is following.</p>
        <p style="max-width:720px; margin:28px auto 0; font-size:clamp(18px,3vw,24px); line-height:1.45; font-weight:600; letter-spacing:-0.01em;">We're not here to follow a trail. We're here to leave one — to make something new in the history of how travel connects.</p>
      </div>
    </div>

    <div class="section"><div class="prose reveal">
      <div class="eyebrow">The long view</div>
      <p class="prose-lead">Infrastructure is a long promise.</p>
      <p class="prose-body">The businesses that build on this layer are trusting it to be here in ten years — still metering correctly, still settling on time, still connected when a traveller is standing in a foreign airport at 2am. A promise that size isn't made in an announcement. It's made in the architecture, and it's made early, or it isn't made at all.</p>
      <p class="prose-body">So the layer was built before it was named. Every hard part first: the metering, the ledgers, the settlement, the part where nothing breaks when two companies disagree. Not because the unglamorous work is noble — because it's the only part that has to be right forever.</p>
      <p class="prose-body">What comes next is scale. More countries. More channels. More volume than anyone planned for. That's the work now.</p>
    </div></div>

    <div class="section quote-section">
      <div class="quote-stage" id="quote-stage" aria-live="polite">
        <article class="quote-card is-active" data-quote>
          <div class="quote-mark">“</div>
          <p class="quote-text">Failure was never the end of anything. It was information, arriving early. Impossible is just a sentence people finish too early — because the impossible becomes possible the moment you stop looking outside for the answer and start looking within. Failure is only the receipt of hard work. Fear the work, and your dream stays a dream. Face the failure, and the dream comes true.</p>
          <div class="quote-attr">— Founder and CEO, Arun Raj</div>
        </article>
        <article class="quote-card" data-quote aria-hidden="true">
          <div class="quote-mark">“</div>
          <p class="quote-text">Infrastructure isn't glamorous until it fails. We build so it doesn't — metering, settlement, failover. The unglamorous work is the product. Every edge case we close is a traveller who stays connected when it matters.</p>
          <div class="quote-attr">— Developer, Sudarva</div>
        </article>
      </div>
    </div>

    <div class="section center-cta">
      <h2 class="h2" style="margin-bottom:clamp(28px,4vw,40px);">Build on the layer.</h2>
      <a href="#" class="btn-primary btn-inline" data-nav="Guides"><span>Become a partner</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>

  </div>

  <!-- ==================== CAREERS VIEW ==================== -->
  <div class="view" id="careers">

    <div class="careers-hero">
      <div class="stars" id="stars"></div>
      <div class="careers-hero-text">
        <div class="eyebrow rise-1">Before you apply</div>
        <h1 class="rise-2" style="font-size:clamp(34px,6.4vw,72px); line-height:1.05; font-weight:700; letter-spacing:-0.03em; max-width:16ch;">What we mean when we say <span class="acc">freedom.</span></h1>
      </div>
    </div>

    <div class="section"><div class="prose reveal">
      <p class="prose-lead" style="font-weight:600;">Freedom is the most misused word in this industry.</p>
      <p class="prose-body">It has come to mean beanbags. Work from anywhere. Unlimited leave that nobody takes. Those are comforts, and comfort is a fine thing — but comfort is not freedom. A comfortable person can still be trapped. Most are.</p>
      <p class="prose-body">Freedom is the ability to decide your own life. Where you live. Who you take care of. What you say no to. What you build.</p>
      <p class="prose-quote">That ability is not given to you by a policy document. It is earned. Which means real freedom — the kind you can actually spend — starts with the freedom to earn.</p>
    </div></div>

    <div class="section section--panel"><div class="prose reveal">
      <div class="eyebrow">But earning alone is not it either</div>
      <p class="prose-lead">A person with money and no aim is not free. They are only loose.</p>
      <p class="prose-body">Drifting looks like freedom from the outside. It isn't. Without an aim, every day is a choice made again from zero, and a life made of resets goes nowhere. Effort without direction is just motion, and motion is exhausting.</p>
      <p class="prose-body">An aim converts effort into direction. Direction is what makes a dream reachable instead of decorative.</p>
      <p class="prose-body">That's the part most people have backwards. They think the aim is the cage and freedom is escaping it. It's the opposite.</p>
      <p style="font-size:clamp(22px,3.6vw,30px); line-height:1.3; font-weight:700; letter-spacing:-0.02em; margin-bottom:26px;">The aim is the thing that sets you free.</p>
      <p class="prose-body">It's what lets you work on one hard problem long enough for it to actually move. And watching something move because you moved it is the closest thing to freedom a working life offers.</p>
    </div></div>

    <div class="section"><div class="prose reveal">
      <div class="eyebrow">So this is what we're offering</div>
      <p style="font-size:clamp(20px,3.4vw,28px); line-height:1.35; font-weight:700; letter-spacing:-0.02em; margin-bottom:24px;">Not comfort.</p>
      <p class="prose-body">An aim worth having. Work that compounds into skill nobody can take from you. And the means to build the life you actually want.</p>
      <p class="prose-strong">That's the trade. It's a real one. It isn't for everyone.</p>
    </div></div>

    <div class="section section--panel">
      <div class="career-for">
        <div>
          <div class="eyebrow">Who this is for</div>
          <div class="for-list">
            <div class="for-item"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9.5 7 13l7.5-8" stroke="var(--acc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>People who want to own a hard problem, not a job description.</span></div>
            <div class="for-item"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9.5 7 13l7.5-8" stroke="var(--acc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>People who would rather build the thing right than be seen building it.</span></div>
            <div class="for-item"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 9.5 7 13l7.5-8" stroke="var(--acc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>People with a dream expensive enough that they need to earn — and specific enough that they know what for.</span></div>
          </div>
        </div>
        <div>
          <div class="eyebrow" style="color:var(--mut);">Who it isn't for</div>
          <div class="for-item for-item--muted"><span class="dash-mark"></span><span>Anyone who needs someone else to supply the aim.</span></div>
        </div>
      </div>
    </div>

    <div class="section"><div class="prose reveal">
      <div class="eyebrow">One more thing</div>
      <p class="prose-lead">You won't find us on social media. There's no feed, no company page, no one posting about culture.</p>
      <p class="prose-body">That isn't a stance against anyone else's choices. It's arithmetic: the hours go into the layer, or they go into being seen going into the layer. We picked one.</p>
      <p class="prose-body">The founder writes in public. The company doesn't market itself. Those are different things.</p>
      <p class="prose-strong">So if you want to know what we're like, there's only one way to find out. Apply, and talk to us.</p>
    </div></div>

    <div class="section center-cta">
      <a href="#careers-roles" class="btn-primary btn-inline" id="see-roles"><span>See open roles</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>

    <div class="section" id="careers-roles">
      <div class="roles">
        <div class="roles-head"><h2 style="font-size:clamp(26px,4vw,40px); font-weight:700; letter-spacing:-0.02em;">Open roles</h2><div class="mono-num acc">05</div></div>
        <p style="font-size:clamp(14px,2.6vw,16px); color:var(--mut); margin-bottom:clamp(24px,4vw,40px); max-width:560px;">Every band is real and stated up front — salary plus equity with a strike price and vesting spelled out at offer. The freedom to earn is a promise we keep with a number.</p>
        <div id="roles-list"></div>
        <div class="role-end"></div>
      </div>
    </div>

    <div class="section" id="apply">
      <div class="apply-wrap">
        <div class="apply-intro reveal">
          <div class="eyebrow">Apply</div>
          <h2 style="font-size:clamp(26px,4vw,42px); line-height:1.08; font-weight:700; letter-spacing:-0.03em;">Tell us what you'd <span class="acc">own.</span></h2>
          <p style="margin-top:16px; font-size:clamp(15px,2.8vw,17px); line-height:1.65; color:var(--mut); max-width:440px;">No cover letters. Pick a role, show us something you've built, and tell us the aim you're chasing. We read every application ourselves.</p>
        </div>

        <form class="contact-form apply-form" id="apply-form" novalidate>
          <div class="form-row">
            <label class="field"><span>Full name</span><input type="text" name="name" required placeholder="Your name"></label>
            <label class="field"><span>Email</span><input type="email" name="email" required placeholder="you@email.com"></label>
          </div>
          <div class="form-row">
            <label class="field"><span>Position</span>
              <select name="position" id="apply-position" required><option value="">Select a role…</option></select>
            </label>
            <label class="field"><span>Location</span><input type="text" name="location" placeholder="City / Remote"></label>
          </div>
          <div class="form-row">
            <label class="field"><span>Portfolio / GitHub</span><input type="url" name="portfolio" placeholder="https://"></label>
            <label class="field"><span>Notice period</span>
              <select name="notice">
                <option value="">Select…</option>
                <option>Available now</option>
                <option>2 weeks</option>
                <option>1 month</option>
                <option>2 months</option>
                <option>3 months+</option>
              </select>
            </label>
          </div>
          <label class="field"><span>What's a hard problem you've owned end to end?</span><textarea name="problem" rows="4" required placeholder="A few lines — what it was, what you did, what moved."></textarea></label>
          <label class="field"><span>What's the aim you're chasing?</span><textarea name="aim" rows="3" placeholder="The thing you need to earn for. Be specific."></textarea></label>
          <label class="field field--file"><span>Resume (PDF)</span>
            <div class="file-drop" id="apply-file-drop">
              <input type="file" name="resume" id="apply-file" accept=".pdf,.doc,.docx">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></svg>
              <span class="file-label" id="apply-file-label">Drop a file or click to upload</span>
            </div>
          </label>
          <button type="submit" class="btn-primary" style="width:100%;"><span>Submit application</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="form-success" id="apply-success">Application received — thank you. If there's a fit, we'll be in touch within a week.</div>
        </form>
      </div>
    </div>

  </div>

  <!-- ==================== GUIDES VIEW ==================== -->
  <div class="view" id="guides">

    <div class="gd-hero">
      <div class="gd-hero-glow" aria-hidden="true"></div>
      <div class="gd-hero-inner">
        <div class="eyebrow rise-1" style="justify-content:center;">Guides</div>
        <h1 class="rise-2 gd-hero-title">Get access to<br><span class="acc">Sudarva Connect.</span></h1>
        <p class="gd-hero-sub">A private API for onboarded partners. Four steps from first conversation to your first provisioned eSIM.</p>
        <div class="gd-hero-cta">
          <a href="#" class="btn-primary btn-inline" data-nav="Contact"><span>Contact sales</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="#gd-step-1" class="btn-secondary btn-inline"><span>See the steps</span></a>
        </div>
      </div>
    </div>

    <div class="gd-layout">
      <aside class="gd-rail">
        <div class="gd-rail-label">Setup</div>
        <a href="#gd-step-1" class="gd-rail-link"><span class="gd-rail-n">1</span>Contact sales</a>
        <a href="#gd-step-2" class="gd-rail-link"><span class="gd-rail-n">2</span>Partner portal &amp; keys</a>
        <a href="#gd-step-3" class="gd-rail-link"><span class="gd-rail-n">3</span>Fund your wallet</a>
        <a href="#gd-step-4" class="gd-rail-link"><span class="gd-rail-n">4</span>Postman &amp; first call</a>
      </aside>

      <div class="gd-steps">
        <section class="gd-step" id="gd-step-1">
          <div class="gd-step-kicker"><span class="gd-step-num">01</span><span class="gd-step-badge">Start here</span></div>
          <h2 class="gd-step-title">Contact sales.</h2>
          <p class="gd-step-lead">Everything begins with a conversation. Tell us about your business, your travel channel and your expected volume — there is no self-serve sign-up.</p>
          <div class="gd-panel gd-panel--accent">
            <div class="gd-panel-row"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m4 7 8 5 8-5"/><rect x="4" y="5" width="16" height="14" rx="2"/></svg><span>Partner access is granted by our team, not a form.</span></div>
            <a href="#" class="btn-primary btn-inline gd-panel-btn" data-nav="Contact"><span>Contact sales</span><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          </div>
        </section>

        <section class="gd-step" id="gd-step-2">
          <div class="gd-step-kicker"><span class="gd-step-num">02</span></div>
          <h2 class="gd-step-title">Partner portal &amp; keys.</h2>
          <p class="gd-step-lead">Once approved, log in to the partner portal and generate your API keys. You get a Live key for production and a Test key for the sandbox.</p>
          <div class="gd-cards">
            <div class="gd-mini"><div class="gd-mini-t">Confirm access</div><p>Developer Analytics, Wallet, My Inventory, My Packages and Countries should all open.</p></div>
            <div class="gd-mini"><div class="gd-mini-t">Live key</div><p>Label it "Production". Copy <code>sk_connect_…</code> once — it isn't shown again.</p></div>
            <div class="gd-mini"><div class="gd-mini-t">Test key</div><p>Label it "Sandbox". Copy <code>sk_connect_test_…</code> for fixture runs.</p></div>
          </div>
          <div class="gd-code"><div class="gd-code-bar"><span class="gd-code-title">Authorization</span></div><pre>curl https://api.sudarva.io/connect/v1/profiles \
  -H "Authorization: Bearer sk_connect_…"
# or
  -H "X-API-Key: sk_connect_…"</pre></div>
        </section>

        <section class="gd-step" id="gd-step-3">
          <div class="gd-step-kicker"><span class="gd-step-num">03</span></div>
          <h2 class="gd-step-title">Fund your wallet.</h2>
          <p class="gd-step-lead">Live assign and subscription calls debit your wallet. Request a recharge before Live traffic — sandbox is funded automatically.</p>
          <div class="gd-cards">
            <div class="gd-mini"><div class="gd-mini-t">Live</div><p>Open Wallet and request a recharge. Admin approval funds your balance before production calls.</p></div>
            <div class="gd-mini"><div class="gd-mini-t">Sandbox</div><p>Test keys auto top-up a sandbox balance on the first Connect call — no portal recharge needed.</p></div>
          </div>
          <div class="gd-actions"><a href="#" class="gd-link">Open Wallet →</a></div>
        </section>

        <section class="gd-step" id="gd-step-4">
          <div class="gd-step-kicker"><span class="gd-step-num">04</span></div>
          <h2 class="gd-step-title">Postman &amp; first call.</h2>
          <p class="gd-step-lead">Import the collection, point it at your endpoint, and run your first provisioning request against the sandbox.</p>
          <ol class="gd-ol">
            <li><span>Download the collection from the API Reference in the portal.</span></li>
            <li><span>Set <code>baseUrl</code> to your assigned Connect endpoint.</span></li>
            <li><span>Set <code>connectApiKey</code> = live secret; <code>connectTestApiKey</code> = test secret.</span></li>
            <li><span>Use primary Connect folders for Live; use the SANDBOX folder for fixture runs.</span></li>
          </ol>
          <div class="gd-actions"><a href="#" class="gd-link">Postman collection →</a><a href="#" class="gd-link">API keys →</a></div>
        </section>

        <div class="gd-foot">
          <div class="gd-foot-t">Ready when you are.</div>
          <p>Access still starts with a conversation. Tell us what you're building and we'll open a line.</p>
          <a href="#" class="btn-primary btn-inline" data-nav="Contact"><span>Contact sales</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
    </div>

  </div>

  <!-- ==================== SUPPORT VIEW ==================== -->
  <div class="view" id="support">

    <div class="support-hero">
      <div class="support-orbit" aria-hidden="true">
        <span class="orbit-ring orbit-ring--1"></span>
        <span class="orbit-ring orbit-ring--2"></span>
        <span class="orbit-ring orbit-ring--3"></span>
        <span class="orbit-dot orbit-dot--1"></span>
        <span class="orbit-dot orbit-dot--2"></span>
        <span class="orbit-dot orbit-dot--3"></span>
      </div>
      <div class="support-hero-inner">
        <div class="eyebrow rise-1">Support</div>
        <h1 class="rise-2" style="font-size:clamp(30px,5vw,52px); line-height:1.06; font-weight:700; letter-spacing:-0.03em;">How can we help?</h1>
        <div class="support-search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>
          <input type="text" id="support-search-input" placeholder="Search help articles, e.g. wallet recharge, KYC, webhooks" autocomplete="off">
        </div>
        <div class="support-suggest" id="support-suggest"></div>
      </div>
    </div>

    <div class="section" style="border-top:none; padding-top:clamp(40px,5vw,64px);">
      <div class="support-wrap">
        <h2 class="support-h">Browse by topic</h2>
        <div class="support-cats" id="support-cats"></div>

        <h2 class="support-h" style="margin-top:clamp(56px,7vw,88px);">Popular articles</h2>
        <div class="support-articles" id="support-articles"></div>

        <div class="support-contact">
          <div>
            <div class="support-contact-title">Still stuck?</div>
            <p class="support-contact-sub">Partner support responds within one business day. Live incidents are escalated to the on-call team in real time.</p>
          </div>
          <div class="support-contact-actions">
            <a href="#" class="guide-btn guide-btn--solid">Contact support →</a>
            <a href="#" class="guide-btn" data-nav="Guides">Read the guides →</a>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- ==================== SOLUTION VIEWS ==================== -->
  <div class="view" id="sol-travel"></div>
  <div class="view" id="sol-partner"></div>
  <div class="view" id="sol-network"></div>
  <div class="view" id="sol-api"></div>

  <!-- ==================== CONNECT VIEW ==================== -->
  <div class="view" id="connect">

    <div class="section" style="border-top:none; padding-top:clamp(110px,15vh,170px); overflow:hidden;">
      <div class="connect-signal" aria-hidden="true">
        <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" fill="none">
          <g stroke="var(--pbd)" stroke-width="1">
            <line class="cs-link" x1="90" y1="80" x2="300" y2="200"/>
            <line class="cs-link" x1="510" y1="70" x2="300" y2="200"/>
            <line class="cs-link" x1="70" y1="320" x2="300" y2="200"/>
            <line class="cs-link" x1="520" y1="330" x2="300" y2="200"/>
            <line class="cs-link" x1="300" y1="40" x2="300" y2="200"/>
            <line class="cs-link" x1="300" y1="370" x2="300" y2="200"/>
          </g>
          <g fill="var(--acc)">
            <circle class="cs-pkt" r="3.5"><animateMotion dur="2.6s" repeatCount="indefinite" path="M90 80 L300 200"/><animate attributeName="opacity" dur="2.6s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></circle>
            <circle class="cs-pkt" r="3.5"><animateMotion dur="3.1s" begin="0.4s" repeatCount="indefinite" path="M510 70 L300 200"/><animate attributeName="opacity" dur="3.1s" begin="0.4s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></circle>
            <circle class="cs-pkt" r="3.5"><animateMotion dur="2.9s" begin="0.9s" repeatCount="indefinite" path="M70 320 L300 200"/><animate attributeName="opacity" dur="2.9s" begin="0.9s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></circle>
            <circle class="cs-pkt" r="3.5"><animateMotion dur="3.4s" begin="1.3s" repeatCount="indefinite" path="M520 330 L300 200"/><animate attributeName="opacity" dur="3.4s" begin="1.3s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></circle>
            <circle class="cs-pkt" r="3.5"><animateMotion dur="2.4s" begin="0.6s" repeatCount="indefinite" path="M300 40 L300 200"/><animate attributeName="opacity" dur="2.4s" begin="0.6s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></circle>
            <circle class="cs-pkt" r="3.5"><animateMotion dur="3s" begin="1.6s" repeatCount="indefinite" path="M300 370 L300 200"/><animate attributeName="opacity" dur="3s" begin="1.6s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.85;1"/></circle>
          </g>
          <g>
            <circle class="cs-node" cx="90" cy="80" r="6"/><circle class="cs-node" cx="510" cy="70" r="6"/><circle class="cs-node" cx="70" cy="320" r="6"/><circle class="cs-node" cx="520" cy="330" r="6"/><circle class="cs-node" cx="300" cy="40" r="6"/><circle class="cs-node" cx="300" cy="370" r="6"/>
          </g>
          <circle class="cs-ring" cx="300" cy="200" r="18"/>
          <circle class="cs-ring cs-ring--2" cx="300" cy="200" r="18"/>
          <circle class="cs-hub" cx="300" cy="200" r="13"/>
        </svg>
      </div>
      <div class="connect-hero">
        <div class="eyebrow rise-1">Sudarva Connect</div>
        <h1 class="rise-2" style="font-size:clamp(34px,6vw,68px); line-height:1.05; font-weight:700; letter-spacing:-0.03em; max-width:15ch;">The connectivity management platform <span class="acc">for travel.</span></h1>
        <p style="margin-top:clamp(16px,2.4vw,24px); font-size:clamp(16px,3vw,20px); line-height:1.6; color:var(--mut); max-width:600px;">Launch a fully branded eSIM business on infrastructure that's already running.</p>
        <div class="hero-btns" style="margin-top:clamp(28px,4vw,40px);">
          <a href="#" class="btn-primary btn-inline" data-nav="Contact"><span>Become a partner</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
          <a href="#" class="btn-secondary btn-inline" data-nav="Guides"><span>Read the guides</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
    </div>

    <div class="section section--panel"><div class="prose reveal">
      <div class="eyebrow">The platform</div>
      <p class="prose-lead">Sudarva Connect brings global data, eSIM provisioning and day-to-day operations into one API-driven layer.</p>
      <p class="prose-body">Any travel business can launch a fully branded eSIM service — without upfront infrastructure, carrier contracts or telecom expertise.</p>
      <p class="prose-strong">One integration. 184 countries. Your brand on top.</p>
    </div></div>

    <div class="section"><div class="prose reveal">
      <div class="eyebrow">Who it's for</div>
      <p class="prose-lead">Travel platforms, OTAs, agencies and operators that want connectivity as part of their own product — under their own brand, their own pricing, their own experience.</p>
      <p class="prose-body">Built for how travel businesses actually operate: at launch, and as they scale across markets.</p>
    </div></div>

    <div class="section section--panel">
      <div class="connect-feature reveal">
        <div>
          <div class="eyebrow">What it does</div>
          <h2 class="h2" style="text-align:left; margin-bottom:clamp(18px,2.6vw,26px); max-width:14ch;">Skip the retail <span class="acc">roaming markup.</span></h2>
        </div>
        <div>
          <p class="prose-body">A normal SIM routes home across every border and pays retail roaming on every byte. Sudarva's multi-profile network infrastructure connects each traveller to a network in-market instead.</p>
          <p class="prose-strong">One eSIM, many profiles — coverage across 184 countries and 459 networks, without the retail roaming penalty travellers usually pay.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-head reveal">
        <div class="eyebrow">Why it matters</div>
        <h2 class="h2">Connectivity without <span class="acc">becoming a telco.</span></h2>
        <p class="lead">Launching connectivity used to mean carrier deals, billing systems, compliance and provisioning. Connect removes all of it — you bring the customers and the brand; the infrastructure is already built.</p>
      </div>
      <div class="connect-grid reveal" id="connect-grid"></div>
    </div>

    <!-- contact CTA banner -->
    <div class="section">
      <div class="cta-banner reveal">
        <div class="radio" aria-hidden="true">
          <div class="radio-waves"><span></span><span></span><span></span></div>
          <svg class="radio-svg" viewBox="0 0 200 150" fill="none">
            <!-- antenna -->
            <line x1="150" y1="58" x2="182" y2="14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <circle class="radio-tip" cx="182" cy="14" r="5" fill="var(--acc)"/>
            <!-- body -->
            <rect x="18" y="52" width="164" height="82" rx="10" stroke="currentColor" stroke-width="3"/>
            <!-- speaker grille -->
            <rect x="30" y="66" width="66" height="54" rx="6" stroke="currentColor" stroke-width="2.2"/>
            <line x1="40" y1="76" x2="86" y2="76" stroke="currentColor" stroke-width="2"/>
            <line x1="40" y1="86" x2="86" y2="86" stroke="currentColor" stroke-width="2"/>
            <line x1="40" y1="96" x2="86" y2="96" stroke="currentColor" stroke-width="2"/>
            <line x1="40" y1="106" x2="86" y2="106" stroke="currentColor" stroke-width="2"/>
            <!-- dial -->
            <circle cx="140" cy="94" r="20" stroke="currentColor" stroke-width="2.4"/>
            <line class="radio-needle" x1="140" y1="94" x2="140" y2="80" stroke="var(--acc)" stroke-width="2.6" stroke-linecap="round"/>
            <!-- signal LED -->
            <circle class="radio-led" cx="116" cy="70" r="4.5" fill="var(--acc)"/>
            <!-- tuning marks -->
            <line x1="116" y1="118" x2="164" y2="118" stroke="currentColor" stroke-width="2"/>
            <circle class="radio-knob" cx="126" cy="118" r="3.5" fill="currentColor"/>
          </svg>
        </div>
        <div class="cta-banner-body">
          <div class="cta-morse"><span class="cta-morse-out"></span><span class="cta-morse-caret"></span></div>
          <h2 style="font-size:clamp(28px,4.4vw,46px); line-height:1.08; font-weight:700; letter-spacing:-0.03em; margin-bottom:16px;">Ready to launch on <span class="acc">Sudarva Connect?</span></h2>
          <p style="font-size:clamp(15px,2.8vw,18px); line-height:1.6; color:var(--mut); max-width:440px; margin-bottom:clamp(24px,3vw,32px);">Tell us about your channel and we'll open a line. Partner access starts with a conversation.</p>
          <a href="#" class="btn-primary btn-inline" data-nav="Contact"><span>Contact us</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        </div>
      </div>
    </div>

  </div>

  <!-- ==================== INSIGHTS VIEW ==================== -->
  <div class="view" id="insights"></div>

  <!-- ==================== INSIGHT DETAIL VIEW ==================== -->
  <div class="view" id="insight"></div>

  <!-- ==================== SUPPORT ARTICLE VIEW ==================== -->
  <div class="view" id="support-article"></div>

  <!-- ==================== POLICY VIEW ==================== -->
  <div class="view" id="policy"></div>

  <!-- ==================== CONTACT VIEW ==================== -->
  <div class="view" id="contact">
    <div class="section" style="border-top:none; padding-top:clamp(110px,15vh,170px);">
      <div class="contact-wrap">
        <div class="contact-left">
          <div class="eyebrow rise-1">Contact us</div>
          <h1 class="rise-2" style="font-size:clamp(30px,5vw,52px); line-height:1.06; font-weight:700; letter-spacing:-0.03em;">Let's talk about <span class="acc">your channel.</span></h1>
          <p style="margin-top:clamp(16px,2.4vw,22px); font-size:clamp(15px,2.8vw,18px); line-height:1.65; color:var(--mut); max-width:420px;">Partner access starts with a conversation. Tell us about your business and expected volume — we reply within one business day.</p>
          <div class="contact-info">
            <div class="contact-info-row"><span class="contact-info-k">Partnerships</span><span class="contact-info-v">partners@sudarva.io</span></div>
            <div class="contact-info-row"><span class="contact-info-k">Support</span><span class="contact-info-v">support@sudarva.io</span></div>
          </div>
        </div>

        <form class="contact-form" id="contact-form" novalidate>
          <div class="form-row">
            <label class="field"><span>Full name</span><input type="text" name="name" required placeholder="Your name"></label>
            <label class="field"><span>Work email</span><input type="email" name="email" required placeholder="you@company.com"></label>
          </div>
          <div class="form-row">
            <label class="field"><span>Company</span><input type="text" name="company" placeholder="Company name"></label>
            <label class="field"><span>Channel type</span>
              <select name="channel">
                <option value="">Select…</option>
                <option>Travel app</option>
                <option>OTA</option>
                <option>Agent network</option>
                <option>Destination reseller</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label class="field"><span>How did you hear about us?</span>
            <select name="source">
              <option value="">Select…</option>
              <option>Referral / word of mouth</option>
              <option>Search engine</option>
              <option>Industry event or conference</option>
              <option>The founder's writing</option>
              <option>A partner or reseller</option>
              <option>Other</option>
            </select>
          </label>
          <label class="field"><span>What are you building?</span><textarea name="message" rows="5" required placeholder="A few lines about your use case and expected volume."></textarea></label>
          <button type="submit" class="btn-primary" style="width:100%;"><span>Send message</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
          <div class="form-success" id="form-success">Thanks — your message is on its way. We'll reply within one business day.</div>
        </form>
      </div>
    </div>
  </div>

  <!-- ===== FOOTER ===== -->
  <footer class="footer">
    <div class="footer-divider"></div>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="brand-name" style="font-size:28px;">Sudarva<span class="acc">.</span></div>
        <div class="brand-tag" style="margin-top:4px;">Beyond the network</div>
        <p style="margin-top:20px; font-size:15px; line-height:1.65; color:var(--mut); max-width:300px;">Technology infrastructure that connects travel businesses, partners and travellers across Asia and beyond.</p>
        <div class="brand-rule"></div>
        <div class="ash-wrap">
          <div class="ash-icons">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3 0-1.3-.1-2.45-.1-2.42 0-4.05 1.48-4.05 4.2v2.2H7.7V13h2.8v8h3z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 3h3.3l-7.2 8.24L22.8 21h-6.62l-5.18-6.78L4.98 21H1.66l7.7-8.8L1.5 3h6.78l4.68 6.2L18.2 3zm-1.16 16h1.83L7.06 4.9H5.1L17.04 19z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5v10.5H3.6V8.5h3.34zM5.27 3.6c1.07 0 1.87.78 1.87 1.79 0 .99-.8 1.79-1.9 1.79h-.02c-1.05 0-1.73-.8-1.73-1.79 0-1.01.7-1.79 1.78-1.79zM20.4 19h-3.34v-5.62c0-1.41-.5-2.37-1.77-2.37-.96 0-1.54.65-1.79 1.28-.09.22-.12.53-.12.85V19H10.04s.04-9.4 0-10.5h3.34v1.49c.44-.68 1.24-1.65 3.02-1.65 2.2 0 3.86 1.44 3.86 4.54V19z"/></svg>
          </div>
          <div class="ash-fleck" style="left:2px; top:9px; width:3px; height:3px; background:var(--acc); --ax:6px;"></div>
          <div class="ash-fleck" style="left:22px; top:12px; width:2px; height:2px; background:var(--mut); --ax:-5px; animation-delay:.15s;"></div>
          <div class="ash-fleck" style="left:44px; top:7px; width:3px; height:3px; background:var(--acc); --ax:8px; animation-delay:.3s;"></div>
          <div class="ash-fleck" style="left:66px; top:11px; width:2px; height:2px; background:var(--mut); --ax:-6px; animation-delay:.1s;"></div>
          <div class="ash-text">We don't post.&nbsp;<span class="acc">We power the connection.</span></div>
        </div>
      </div>
      <div class="footer-cols" id="footer-cols"></div>
    </div>
    <div class="footer-legal">
      <div style="font-size:14px; color:var(--fnt);">© 2026 Sudarva Technologies Pvt. Ltd. All rights reserved.</div>
      <div class="legal-links" id="footer-legal-links"></div>
    </div>
  </footer>

</div>

`;
