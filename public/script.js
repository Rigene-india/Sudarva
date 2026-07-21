/* ===== SUDARVA — front-end logic ===== */
(function () {
  'use strict';
  var ACC = '#E8191A';

  /* ---------- data ---------- */
  function svgIcon(paths, size) {
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 42 42" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  }
  function capIcon(paths) {
    return '<svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  }

  var stats = [
    { value: 184, decimals: 0, suffix: '', label: 'Countries & Regions', icon: svgIcon('<circle cx="21" cy="21" r="15"/><ellipse cx="21" cy="21" rx="6.5" ry="15"/><path d="M6 21h30M8.5 13h25M8.5 29h25"/>', 40) },
    { value: 459, decimals: 0, suffix: '', label: 'Network Partners', icon: svgIcon('<circle cx="15" cy="15" r="5"/><circle cx="27.5" cy="16.5" r="4"/><path d="M7 33c0-5 3.6-8.5 8-8.5s8 3.5 8 8.5"/><path d="M25 24.6c3.6.2 6.5 3.5 6.5 8.4"/>', 40) },
    { value: 10, decimals: 0, suffix: 'M+', loading: true, label: 'Profiles & counting', icon: svgIcon('<path d="M21 7 35 14 21 21 7 14 21 7Z"/><path d="M7 21l14 7 14-7"/><path d="M7 27.5l14 7 14-7"/>', 40) },
    { value: 99.99, decimals: 2, suffix: '%', label: 'Platform Uptime', icon: svgIcon('<path d="M21 6 34 11v9c0 8-5.6 12.6-13 15.5C13.6 32.6 8 28 8 20v-9L21 6Z"/><path d="M15.5 20.5 19.5 24.5 27 16.5"/>', 40) }
  ];

  var gapGives = ['Profile provisioning', 'Data plans & bundles', 'Global network coverage'];
  var gapNeeds = ['KYC & traveler identity', 'Agent wallets & top-ups', 'Commission ledgers', 'Consumption-based settlement', 'Never-disrupt active eSIMs'];
  var tierNetworks = ['MNOs', 'Global carriers', 'Roaming hubs', 'eSIM providers'];
  var tierChannels = ['Travel apps', 'OTAs', 'Agent networks', 'Resellers'];

  var capabilities = [
    { n: '01', icon: capIcon('<circle cx="24" cy="24" r="13" stroke="currentColor"/><ellipse cx="24" cy="24" rx="5.5" ry="13" stroke="currentColor"/><path d="M11 24h26M13 17h22M13 31h22" stroke="currentColor"/><circle cx="24" cy="24" r="2" fill="' + ACC + '" stroke="none"/>'), title: 'Provisioning', body: 'Issue and activate eSIM profiles across 459 networks, with full lifecycle control — from first assignment to retirement — without disrupting a traveler mid-trip.' },
    { n: '02', icon: capIcon('<path d="M24 10 36 15v8c0 8-5.5 12-12 14-6.5-2-12-6-12-14v-8l12-5Z" stroke="currentColor"/><path d="M18.5 24l3.8 3.8L30 20" stroke="' + ACC + '"/>'), title: 'KYC', body: 'Verify traveler identity to local regulatory standards at the point of sale, with document capture built into the activation flow rather than bolted on after.' },
    { n: '03', icon: capIcon('<rect x="17" y="17" width="14" height="14" rx="2" stroke="currentColor"/><path d="M24 10v4M13 24h4M35 24h-4M24 38v-4M17.5 12.5l1.5 3M30.5 12.5l-1.5 3M17.5 35.5l1.5-3M30.5 35.5l-1.5-3" stroke="' + ACC + '"/>'), title: 'Metering', body: 'Track real consumption per profile, per agent, per channel in real time — the usage signal every wallet, ledger and settlement run depends on.' },
    { n: '04', icon: capIcon('<path d="M16 31a6.2 6.2 0 0 1 .8-12.3 9.2 9.2 0 0 1 17.6 2.5A5.6 5.6 0 0 1 33 31H16Z" stroke="currentColor"/><path d="M19 24.5h10M19 28h10" stroke="' + ACC + '"/>'), title: 'Settlement', body: 'Reconcile usage into commissions, agent balances and payouts automatically, so every party in the chain is paid on what was actually consumed.' }
  ];

  var audiences = [
    { tag: '/ apps', title: 'Travel apps', body: 'Embed connectivity as a native feature. Users get data the moment they land; you get a new margin line without becoming a telco.' },
    { tag: '/ booking', title: 'OTAs', body: 'Attach eSIMs to every booking. Turn a flight or hotel confirmation into an activated profile before departure.' },
    { tag: '/ agents', title: 'Agent networks', body: 'Give agents wallets, top-ups and commission tracking — tools they already understand, wired to live connectivity.' },
    { tag: '/ resellers', title: 'Destination resellers', body: 'Package local data for inbound travelers under your own brand, with settlement handled end to end.' }
  ];

  var apiPoints = ['Private API — partners only', 'Signed webhooks for usage', 'Access granted on onboarding'];

  var aboutPrinciples = [
    { t: 'Built, then shown.', b: "We don't announce what we haven't shipped." },
    { t: 'No valuation games.', b: "We'd rather be worth something than be valued at something." },
    { t: 'Infrastructure means never breaking.', b: "A traveller's connection doesn't drop because two companies are arguing about an invoice. That isn't a feature. It's the definition of the word." },
    { t: 'Boring where it matters.', b: 'Metering, ledgers, reconciliation. The unglamorous parts are the product.' }
  ];

  var sealedTeam = ['Engineering — provisioning & settlement', 'Product — identity & metering', 'Growth — partnerships & channels', 'Operations — reconciliation'];

  var careerRoles = [
    { role: 'Backend Engineer, Provisioning', team: 'Engineering', loc: 'Remote', comp: 'Competitive + equity' },
    { role: 'Settlement Systems Engineer', team: 'Engineering', loc: 'Remote', comp: 'Competitive + equity' },
    { role: 'KYC & Identity Lead', team: 'Product', loc: 'Remote', comp: 'Competitive + equity' },
    { role: 'Partnerships Manager, Travel', team: 'Growth', loc: 'Remote', comp: 'Competitive + equity' },
    { role: 'Developer Advocate', team: 'Growth', loc: 'Remote', comp: 'Competitive + equity' }
  ];

  var footerCols = [
    { title: 'Solutions', links: ['Travel Connectivity', 'Partner Enablement', 'Network Infrastructure', 'API Solutions'] },
    { title: 'Products', links: ['Sudarva Connect', 'Sudarva Go'] },
    { title: 'Company', links: ['About Sudarva', 'Careers', 'Contact Us'] },
    { title: 'Resources', links: ['Guides', 'Insights', 'Support'] }
  ];

  var supportCats = [
    { icon: '<circle cx="24" cy="24" r="13"/><ellipse cx="24" cy="24" rx="5.5" ry="13"/><path d="M11 24h26M13 17h22M13 31h22"/>', title: 'Getting started', desc: 'Access, partner portal, first Connect call.', n: 6 },
    { icon: '<rect x="9" y="14" width="30" height="20" rx="3"/><path d="M9 20h30M15 28h8"/>', title: 'Wallet & billing', desc: 'Recharges, sandbox top-ups, invoices.', n: 8 },
    { icon: '<path d="M24 8 36 13v8c0 8-5.5 12-12 14-6.5-2-12-6-12-14v-8l12-5Z"/><path d="M18.5 23l3.8 3.8L30 19"/>', title: 'KYC & identity', desc: 'Verification, documents, compliance.', n: 5 },
    { icon: '<rect x="16" y="16" width="16" height="16" rx="2"/><path d="M24 8v4M12 24h4M36 24h-4M24 40v-4"/>', title: 'API & webhooks', desc: 'Auth headers, endpoints, event payloads.', n: 11 },
    { icon: '<path d="M12 30a7 7 0 0 1 .9-14 10 10 0 0 1 19 2.7A6 6 0 0 1 32 30H12Z"/>', title: 'Metering & settlement', desc: 'Usage records, reconciliation, payouts.', n: 7 },
    { icon: '<circle cx="24" cy="24" r="16"/><path d="M24 15v10l6 4"/>', title: 'Uptime & reliability', desc: 'SLA, scheduled maintenance, incident response.', n: 4 }
  ];

  var supportArticles = [
    { id: 'request-access', cat: 'Getting started', q: 'How do I request partner API access?', body: [
      'Sudarva Connect is a private API. Access is granted to onboarded partners, not through a self-serve signup.',
      'Start by contacting sales with your business, travel channel and expected volume. Once your account is approved, you can log in to the partner portal and generate keys.',
      'There is no public sandbox key you can mint yourself — the sandbox is provisioned with your Test key after onboarding.'
    ] },
    { id: 'recharge-wallet', cat: 'Wallet & billing', q: 'Recharging your Live wallet (admin approval)', body: [
      'Live assign and subscription calls debit your wallet, so it must hold a balance before you send production traffic.',
      'Open Wallet in the partner portal and request a recharge. Recharges require admin approval; once approved, the balance is available immediately.',
      'Sandbox traffic does not draw on your Live balance — Test keys top up a separate sandbox balance automatically.'
    ] },
    { id: 'live-vs-test', cat: 'Getting started', q: 'Live vs Test keys: which one am I using?', body: [
      'Live keys are prefixed sk_connect_… and hit real networks, debit your Live wallet and provision real eSIMs.',
      'Test keys are prefixed sk_connect_test_… and run against the sandbox with fixture data and an auto-funded balance.',
      'If a call is unexpectedly free or returns fixture IDs, you are almost certainly on a Test key. Check the prefix of the key in your Authorization header.'
    ] },
    { id: 'auth-header', cat: 'API & webhooks', q: 'Setting the Authorization / X-API-Key header', body: [
      'Every Connect route accepts either header. Use Authorization: Bearer <secret> or X-API-Key: <secret>.',
      'The secret is the full key string you copied at creation. Keys are shown once — if you lost it, revoke and generate a new one.',
      'Never embed a Live secret in client-side code; call Connect from your backend only.'
    ] },
    { id: 'sandbox-topup', cat: 'Wallet & billing', q: 'Why a sandbox balance auto-tops-up on first call', body: [
      'So you can test end to end without a finance step, Test keys provision a sandbox wallet balance on your first Connect call.',
      'This balance is fictional and never invoiced. It resets periodically and cannot be moved to your Live wallet.'
    ] },
    { id: 'webhook-usage', cat: 'API & webhooks', q: 'Reading webhook usage events', body: [
      'Usage is streamed as signed webhook events. Verify the signature header against your webhook secret before trusting a payload.',
      'Each event carries the profile id, the metered bytes for the interval, and a monotonic sequence number so you can detect gaps.',
      'Treat events as at-least-once: dedupe on the event id.'
    ] },
    { id: 'never-disrupt', cat: 'Uptime & reliability', q: 'Never-disrupt: how active eSIMs stay live during changes', body: [
      'A traveller\u2019s connection must not drop because of a plan change or a back-office dispute.',
      'Lifecycle operations are applied to the next billing window, not the active session. An in-flight session keeps its current profile until it ends naturally.',
      'This is enforced at the infrastructure layer, so partners never have to build it themselves.'
    ] },
    { id: 'reconciliation', cat: 'Metering & settlement', q: 'Reconciliation: matching usage to settlement', body: [
      'Settlement is derived from the same metering signal you receive over webhooks, so your records and ours reconcile to the byte.',
      'Each settlement run references the usage event sequence it covers. Match on the profile id and the sequence range to reconcile a run.'
    ] }
  ];
  var legalLinks = [
    { label: 'Terms & Conditions', id: 'terms' },
    { label: 'Privacy Policy', id: 'privacy' },
    { label: 'Cookie Policy', id: 'cookie' },
    { label: 'Acceptable Use Policy', id: 'aup' },
    { label: 'Refund & Cancellation', id: 'refund' },
    { label: 'Data Processing Addendum', id: 'dpa' }
  ];

  var solutions = {
    'sol-travel': {
      eyebrow: 'Travel Connectivity',
      title: ['Data that travels ', 'with the traveller.'],
      lead: 'Working data the moment they land, across 184 countries and 459 networks.',
      section: {
        eyebrow: 'The problem',
        lead: 'A dead phone in a foreign airport is the worst first impression a trip can make.',
        body: ["Roaming is expensive, local SIMs mean queues and language barriers, and public Wi-Fi is a security risk. The traveller just wants to message home, pull up a map and confirm a booking — and every option in between fails them at the exact moment connectivity matters most.", "Sudarva closes that gap at the infrastructure layer, so the businesses travellers already trust can hand them data instead of sending them to a kiosk."]
      },
      features: [
        { t: 'Land-and-connect', b: 'Profiles activate on arrival — no setup, no kiosk, no queue. Data works before they leave the gate.' },
        { t: 'In-market networks', b: 'Each traveller connects to a network inside the country, not routed home — real local speed, no retail roaming markup.' },
        { t: '184 countries', b: 'One eSIM covers the whole itinerary. Multi-country trips need one profile, not one SIM per border.' },
        { t: 'Never goes dark', b: 'Active connections are never disrupted mid-trip by a plan change or a back-office dispute.' }
      ],
      close: 'One eSIM. Every destination. Working the moment they land.'
    },
    'sol-partner': {
      eyebrow: 'Partner Enablement',
      title: ['Everything a partner ', 'needs to sell.'],
      lead: 'Wallets, top-ups, commission ledgers and real-time reporting — the operational tools agents and resellers already understand, wired straight to live connectivity.',
      section: {
        eyebrow: 'The problem',
        lead: 'Connectivity is only useful to a partner if they can actually run a business on it.',
        body: ["Selling data isn't just provisioning a profile — it's balances, credit, commissions, refunds and a clear record of who sold what. Most connectivity APIs stop at activation and leave every partner to build the commercial layer themselves.", "Sudarva ships that layer as infrastructure, so an agent network can onboard sellers and start transacting the same day."]
      },
      features: [
        { t: 'Agent wallets', b: 'Prepaid balances and credit lines per agent, with top-ups and controls handled at the layer.' },
        { t: 'Commission ledgers', b: 'Every sale attributed and reconciled automatically — no spreadsheets, no month-end guesswork.' },
        { t: 'White-label pricing', b: 'Partners set their own margins and packages; you stay underneath the brand and the price.' },
        { t: 'Real-time reporting', b: 'Sales, usage and payouts visible live across the whole partner tree.' }
      ],
      close: 'Give partners the tools they know — powered by connectivity they don\u2019t have to build.'
    },
    'sol-network': {
      eyebrow: 'Network Infrastructure',
      title: ['The rails underneath ', 'global data.'],
      lead: 'Multi-profile provisioning, metering to the byte and automated settlement across 459 networks — the core infrastructure that makes everything above it possible.',
      section: {
        eyebrow: 'The problem',
        lead: 'Hundreds of carriers, hundreds of billing formats, one traveller who just wants data.',
        body: ["Every network settles differently, meters differently and contracts differently. Stitching them into a single reliable service is years of unglamorous engineering — provisioning logic, usage records, reconciliation, failover — that never ends and can never break.", "Sudarva runs that core so businesses build on a single, stable interface instead of hundreds of fragile ones."]
      },
      features: [
        { t: 'Multi-profile eSIM', b: 'One eSIM holds many network profiles and switches to the best in-market option automatically.' },
        { t: 'Metering to the byte', b: 'Every session recorded in real time — the usage truth every wallet and settlement run depends on.' },
        { t: 'Automated settlement', b: 'Carrier costs, partner commissions and payouts reconciled end to end, without manual runs.' },
        { t: '99.99% uptime', b: 'Redundancy and failover built in, because infrastructure that carries live connections cannot go down.' }
      ],
      close: 'One integration on top. 459 networks underneath. Always on.'
    },
    'sol-api': {
      eyebrow: 'API Solutions',
      title: ['One integration. ', 'The whole layer.'],
      lead: 'Provisioning, identity, metering and settlement behind a single private API — built for onboarded partners, not the open internet.',
      section: {
        eyebrow: 'The problem',
        lead: 'Every travel business rebuilds the same connectivity plumbing before it sells a single byte.',
        body: ["Carrier integrations, provisioning logic, KYC, usage records, reconciliation — the work is identical for everyone, it takes quarters, and none of it is what a travel company set out to build. Then it has to be maintained forever.", "Sudarva exposes that entire stack as one coherent API. You call it; the layer does the work. Access is granted on onboarding, so every partner is known and every key is accountable."]
      },
      features: [
        { t: 'One private endpoint', b: 'Provision a profile, run KYC and start metering in a single call — no public sign-up, keys issued on onboarding.' },
        { t: 'Signed webhooks', b: 'Usage, activation and settlement events streamed to you in real time, signed and verifiable.' },
        { t: 'Sandbox + live keys', b: 'A test key auto-tops a sandbox balance for fixtures; live keys draw on your wallet. Same routes, clean separation.' },
        { t: 'Never-disrupt by design', b: 'Lifecycle changes never drop an active connection — the API guarantees it at the layer, not in your code.' }
      ],
      close: 'Skip the plumbing. Build on the call.'
    }
  };

  var connectFeatures = [
    { icon: '<circle cx="24" cy="24" r="13"/><ellipse cx="24" cy="24" rx="5.5" ry="13"/><path d="M11 24h26M13 17h22M13 31h22"/>', title: 'Global reach, one agreement', body: 'Access 459 networks across 184 countries through a single integration, instead of negotiating market by market.' },
    { icon: '<path d="M24 10v28M14 18l10-8 10 8M14 30l10 8 10-8"/>', title: 'Instant provisioning', body: 'Order, activate and deliver eSIMs in real time, with no inventory to pre-stock.' },
    { icon: '<path d="M24 10 36 15v8c0 8-5.5 12-12 14-6.5-2-12-6-12-14v-8l12-5Z"/><path d="M18.5 23l3.8 3.8L30 19"/>', title: 'Identity built in', body: 'Traveller onboarding and verification handled at the layer.' },
    { icon: '<rect x="16" y="16" width="16" height="16" rx="2"/><path d="M24 10v4M13 24h4M35 24h-4M24 40v-4"/>', title: 'Metering & settlement', body: 'Usage tracked to the byte, billing and reconciliation automated end to end.' },
    { icon: '<rect x="9" y="12" width="30" height="20" rx="3"/><path d="M9 38h30M17 24l4 4 8-8"/>', title: 'Full control', body: 'Dashboards, analytics and policy tools give you visibility across the entire lifecycle.' },
    { icon: '<path d="M24 8l4 8 9 1-6.5 6 1.5 9-8-4.5L16 40l1.5-9L11 25l9-1 4-8Z"/>', title: 'Your brand, your pricing', body: 'You own the customer, the look and the margin. We stay underneath.' }
  ];

  var birdSpecs = [
    { top: '44%', left: '0%',   w: 30, stroke: 'var(--acc)',  delay: '0s' },
    { top: '30%', left: '7%',   w: 26, stroke: 'var(--acc)',  delay: '.15s' },
    { top: '18%', left: '14%',  w: 22, stroke: 'var(--text)', delay: '.3s' },
    { top: '30%', left: '-7%',  w: 26, stroke: 'var(--acc)',  delay: '.15s' },
    { top: '18%', left: '-14%', w: 22, stroke: 'var(--text)', delay: '.3s' }
  ];

  var starSpecs = [
    { top: '14%', left: '8%',  w: 130, color: 'var(--text)', dx: 360, dy: 150, ang: 23, dur: '7s',   delay: '1.2s' },
    { top: '8%',  left: '38%', w: 90,  color: 'var(--acc)',  dx: 280, dy: 120, ang: 22, dur: '9s',   delay: '4.4s' },
    { top: '26%', left: '60%', w: 150, color: 'var(--text)', dx: 300, dy: 130, ang: 24, dur: '8s',   delay: '6.5s' },
    { top: '2%',  left: '20%', w: 70,  color: 'var(--mut)',  dx: 220, dy: 95,  ang: 23, dur: '11s',  delay: '2.8s' },
    { top: '18%', left: '2%',  w: 140, color: '#4aa3ff', glow: 'rgba(74,163,255,0.6)',  dx: 340, dy: 145, ang: 23, dur: '8.5s', delay: '3.6s' },
    { top: '5%',  left: '52%', w: 110, color: '#5db4ff', glow: 'rgba(93,180,255,0.6)',  dx: 300, dy: 128, ang: 24, dur: '10s',  delay: '7.2s' },
    { top: '30%', left: '30%', w: 85,  color: '#7cc4ff', glow: 'rgba(124,196,255,0.55)', dx: 250, dy: 108, ang: 23, dur: '12s',  delay: '5.1s' }
  ];

  /* ---------- render helpers ---------- */
  /* ---- morse ticker (spells SUDARVA) ---- */
  function ctaBannerHTML() {
    return '<div class="section"><div class="cta-banner reveal">' +
      '<div class="radio" aria-hidden="true"><div class="radio-waves"><span></span><span></span><span></span></div>' +
      '<svg class="radio-svg" viewBox="0 0 200 150" fill="none">' +
      '<line x1="150" y1="58" x2="182" y2="14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle class="radio-tip" cx="182" cy="14" r="5" fill="var(--acc)"/>' +
      '<rect x="18" y="52" width="164" height="82" rx="10" stroke="currentColor" stroke-width="3"/>' +
      '<rect x="30" y="66" width="66" height="54" rx="6" stroke="currentColor" stroke-width="2.2"/>' +
      '<line x1="40" y1="76" x2="86" y2="76" stroke="currentColor" stroke-width="2"/><line x1="40" y1="86" x2="86" y2="86" stroke="currentColor" stroke-width="2"/><line x1="40" y1="96" x2="86" y2="96" stroke="currentColor" stroke-width="2"/><line x1="40" y1="106" x2="86" y2="106" stroke="currentColor" stroke-width="2"/>' +
      '<circle cx="140" cy="94" r="20" stroke="currentColor" stroke-width="2.4"/><line class="radio-needle" x1="140" y1="94" x2="140" y2="80" stroke="var(--acc)" stroke-width="2.6" stroke-linecap="round"/>' +
      '<circle class="radio-led" cx="116" cy="70" r="4.5" fill="var(--acc)"/>' +
      '<line x1="116" y1="118" x2="164" y2="118" stroke="currentColor" stroke-width="2"/><circle class="radio-knob" cx="126" cy="118" r="3.5" fill="currentColor"/></svg></div>' +
      '<div class="cta-banner-body"><div class="cta-morse"><span class="cta-morse-out"></span><span class="cta-morse-caret"></span></div>' +
      '<h2 style="font-size:clamp(28px,4.4vw,46px); line-height:1.08; font-weight:700; letter-spacing:-0.03em; margin-bottom:16px;">Ready to launch on <span class="acc">Sudarva Connect?</span></h2>' +
      '<p style="font-size:clamp(15px,2.8vw,18px); line-height:1.6; color:var(--mut); max-width:440px; margin-bottom:clamp(24px,3vw,32px);">Tell us about your channel and we\'ll open a line. Partner access starts with a conversation.</p>' +
      '<a href="#" class="btn-primary btn-inline" data-nav="Contact"><span>Contact us</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>' +
      '</div></div>';
  }

  function startMorse() {
    var nodes = document.querySelectorAll('.cta-morse-out');
    if (!nodes.length) return;
    var map = { S: '...', U: '..-', D: '-..', A: '.-', R: '.-.', V: '...-' };
    var full = 'SUDARVA'.split('').map(function (c) {
      return map[c].split('').map(function (s) { return s === '.' ? '·' : '—'; }).join(' ');
    }).join('   /   ');
    var i = 0;
    function type() {
      i++;
      var txt = full.slice(0, i);
      for (var k = 0; k < nodes.length; k++) nodes[k].textContent = txt;
      if (i < full.length) setTimeout(type, 90);
      else setTimeout(function () { i = 0; for (var k = 0; k < nodes.length; k++) nodes[k].textContent = ''; setTimeout(type, 700); }, 2600);
    }
    type();
  }

  function _oldStartMorse() {
    var node = el('cta-morse');
    if (!node) return;
    var map = { S: '...', U: '..-', D: '-..', A: '.-', R: '.-.', V: '...-' };
    var word = 'SUDARVA';
    var letters = word.split('').map(function (c) {
      return map[c].split('').map(function (s) { return s === '.' ? '·' : '—'; }).join(' ');
    });
    var full = letters.join('   /   ');
    var i = 0;
    function type() {
      i++;
      node.textContent = full.slice(0, i);
      if (i < full.length) setTimeout(type, 90);
      else setTimeout(function () { i = 0; node.textContent = ''; setTimeout(type, 700); }, 2600);
    }
    type();
  }

  function el(id) { return document.getElementById(id); }
  function set(id, html) { var n = el(id); if (n) n.innerHTML = html; }

  // Insight cover: cropped image or a clean gradient placeholder (no image-slot).
  function insCover(p, size) {
    size = size || 'md';
    if (p && p.cover) {
      return '<div class="ins-cover ins-cover--' + size + '"><img src="' + esc(p.cover) + '" alt="" loading="lazy" decoding="async"></div>';
    }
    var label = (p && p.tag) ? String(p.tag).slice(0, 1) : 'S';
    return '<div class="ins-cover ins-cover--' + size + ' ins-cover--empty" aria-hidden="true"><span class="ins-cover-glow"></span><span class="ins-cover-mark">' + esc(label) + '</span></div>';
  }

  function insCard(p, featured) {
    var arrow = '<svg class="ins-card-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var cls = featured ? 'ins-card ins-card--spotlight reveal' : 'ins-card';
    return '<a href="/insight/' + encodeURIComponent(p.id) + '" class="' + cls + '" data-insight="' + p.id + '">' +
      insCover(p, featured ? 'lg' : 'md') +
      '<div class="ins-card-body">' +
        '<div class="ins-card-top">' +
          '<span class="ins-pill">' + esc(p.tag) + '</span>' +
          '<span class="ins-card-meta">' + esc(p.date) + ' · ' + esc(p.read) + '</span>' +
        '</div>' +
        '<h2 class="ins-card-title">' + esc(p.title) + '</h2>' +
        '<p class="ins-card-excerpt">' + esc(p.excerpt) + '</p>' +
        (featured ? '<span class="ins-card-cta">Read the piece' + arrow + '</span>' : arrow) +
      '</div>' +
    '</a>';
  }

  function renderArticles(list) {
    var arrow = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    if (!list.length) {
      set('support-articles', '<div class="support-empty">No articles match your search. Try another term or contact support.</div>');
      return;
    }
    set('support-articles', list.map(function (a) {
      return '<a href="/support/' + encodeURIComponent(a.id) + '" class="support-article" data-article="' + a.id + '"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10a2 2 0 0 1 2 2v14l-7-3-7 3V6a2 2 0 0 1 2-2Z"/></svg><span>' + a.q + '</span>' + arrow + '</a>';
    }).join(''));
  }

  function showArticle(id, opts) {
    opts = opts || {};
    var idx = -1;
    for (var i = 0; i < supportArticles.length; i++) if (supportArticles[i].id === id) { idx = i; break; }
    if (idx === -1) { showPage('support', { silent: opts.silent }); return; }
    var a = supportArticles[idx];
    var related = supportArticles.filter(function (x) { return x.cat === a.cat && x.id !== a.id; }).slice(0, 3);
    var relHTML = related.length ? '<div class="sa-related"><div class="sa-related-h">More in ' + a.cat + '</div>' + related.map(function (r) {
      return '<a href="/support/' + encodeURIComponent(r.id) + '" class="sa-related-link" data-article="' + r.id + '"><span>' + r.q + '</span><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
    }).join('') + '</div>' : '';
    set('support-article',
      '<div class="section" style="border-top:none; padding-top:clamp(104px,14vh,150px);"><div class="sa-wrap">' +
        '<a href="/support" class="sa-back" data-nav="Support"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M15 9H4M8 4.5 3.5 9 8 13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>All support</a>' +
        '<div class="sa-cat">' + a.cat + '</div>' +
        '<h1 class="sa-title">' + a.q + '</h1>' +
        '<div class="sa-body">' + a.body.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>' +
        '<div class="sa-help"><span>Was this helpful?</span><button class="sa-help-btn" type="button">Yes</button><button class="sa-help-btn" type="button">No</button></div>' +
        relHTML +
      '</div></div>'
    );
    showPage('support-article', { silent: true });
    if (!opts.silent) setUrl('/support/' + encodeURIComponent(id));
  }

  var insightsPosts = (typeof window !== 'undefined' && window.SUDARVA_INSIGHTS && window.SUDARVA_INSIGHTS.length) ? window.SUDARVA_INSIGHTS : [
    { id: 'distribution-layer', tag: 'Thesis', date: 'Jul 2026', read: '6 min', title: 'Distribution is the last unbuilt layer in travel', excerpt: 'Everyone integrated payments and bookings years ago. The layer that turns a network profile into something a travel business can actually sell was left for each company to rebuild. That\u2019s the gap.',
      body: [
        'Travel software solved booking two decades ago and payments not long after. Both became infrastructure — a handful of providers everyone builds on, so no travel company writes its own card processor or its own reservation engine. Distribution of connectivity never got that treatment.',
        ['h', 'The plumbing everyone rebuilds'],
        'Every travel business that wants to offer data ends up assembling the same parts from scratch: provisioning against carriers, identity and KYC, metering, reconciliation, settlement. It is months of unglamorous work that produces nothing a customer ever sees, and it has to be redone by the next company down the line.',
        'That is the definition of a missing layer. When the same non-differentiating work is rebuilt by everyone, it belongs in infrastructure, not in each product.',
        ['h', 'What changes when it exists'],
        'Put distribution underneath as a layer and the shape of the business flips. A travel app, an OTA, an agent network — each brings the customer and the brand, and the connectivity is already provisioned, metered and settled beneath them. The margin is theirs; the plumbing is ours.',
        'That is the whole thesis. Distribution is the last unbuilt layer in travel, and building it is the work.'
      ] },
    { id: 'never-disrupt', tag: 'Engineering', date: 'Jul 2026', read: '9 min', title: 'Why "never disrupt an active eSIM" is a systems problem, not a feature', excerpt: 'A traveller\u2019s connection cannot drop because two companies disagree about an invoice. Here is how we designed lifecycle changes so an in-flight session is never the thing that breaks.',
      body: [
        'A traveller standing in a foreign airport does not care that two companies upstream are reconciling an invoice. Their connection either works or it doesn\u2019t. "Never disrupt an active eSIM" sounds like a feature you add. It is actually a constraint you design the whole system around.',
        ['h', 'Lifecycle changes are the danger'],
        'Most disruptions do not come from outages — they come from routine changes: a plan swap, a policy update, a settlement dispute that pauses an account. Any of these can, naively implemented, tear down a live session. The fix is to make lifecycle transitions never touch an in-flight connection.',
        'We treat an active session as immutable. Changes are staged and applied at safe boundaries, never mid-session, and commercial state — wallets, disputes, holds — is fully decoupled from the data plane that keeps a device online.',
        ['h', 'Decoupling the money from the bytes'],
        'The commercial ledger and the connectivity layer talk asynchronously. A back-office hold marks an account for review; it does not reach into the network and drop a phone. Reconciliation happens after the fact, on records, not on live sessions.',
        'It is unglamorous, and it is the point. Infrastructure that carries live connections cannot go down because someone upstream is arguing.'
      ] },
    { id: 'metering', tag: 'Product', date: 'Jun 2026', read: '5 min', title: 'Metering to the byte: the signal everything else depends on', excerpt: 'Wallets, commission ledgers and settlement are all downstream of one thing — an honest, real-time record of what was actually consumed. Get metering wrong and nothing above it can be trusted.',
      body: [
        'Every commercial feature in the platform — wallets, commissions, invoices, payouts — is downstream of a single question: how much was actually consumed? If the answer is wrong, everything built on top of it is wrong too.',
        ['h', 'Why real-time matters'],
        'Batch metering hides problems until month-end, when they are expensive to unwind. Real-time metering surfaces the truth continuously, so balances, credit limits and settlement all work off the same live number instead of a reconciled guess.',
        ['h', 'One source of truth'],
        'We record usage once, to the byte, and every other system reads from that record rather than keeping its own count. There is no second ledger to drift out of sync. It is the least glamorous part of the product and the one everything else trusts.'
      ] },
    { id: 'roaming-penalty', tag: 'Industry', date: 'Jun 2026', read: '7 min', title: 'The retail roaming penalty, and why travellers keep paying it', excerpt: 'A normal SIM routes home across every border. Multi-profile infrastructure connects each traveller in-market instead. The economics of that difference, explained.',
      body: [
        'A normal SIM stays loyal to its home network no matter where its owner goes. Cross a border and every byte is routed home and billed at retail roaming rates — a markup travellers have been trained to accept as the cost of staying connected abroad.',
        ['h', 'Where the markup comes from'],
        'Roaming is a chain of wholesale agreements, each taking a margin, ending in a retail price with little relationship to what the data actually costs in-market. The traveller pays for the routing, not the data.',
        ['h', 'Connecting in-market instead'],
        'Multi-profile infrastructure gives one eSIM many network profiles and connects the traveller to a network inside the country they are standing in. Local speed, local cost, no home-routing detour — one eSIM covering 184 countries and 459 networks without the retail roaming penalty.',
        'The technology has existed for years. What was missing was the distribution layer to put it in the hands of the businesses travellers already use.'
      ] },
    { id: 'built-then-shown', tag: 'Company', date: 'May 2026', read: '4 min', title: 'Built, then shown: how we think about shipping', excerpt: 'We don\u2019t announce what we haven\u2019t shipped, and we don\u2019t play valuation games. A short note on the principles underneath the roadmap.',
      body: [
        'A short note on how we work, because it explains the roadmap more honestly than the roadmap does.',
        ['h', 'Built, then shown'],
        'We don\u2019t announce what we haven\u2019t shipped. Infrastructure is a promise that has to hold for years, and a promise made in a press release is not the same as one made in the architecture. So the layer was built before it was named.',
        ['h', 'No valuation games'],
        'We\u2019d rather be worth something than be valued at something. The two are not the same, and confusing them is how infrastructure companies talk themselves out of doing the boring work that actually matters.',
        'Boring where it matters is the whole strategy: metering, ledgers, reconciliation, the parts nobody demos. Get those right and everything above them gets to be simple.'
      ] }
  ];

  function renderLists() {
    set('gap-gives', gapGives.map(function (g) {
      return '<div class="gap-row"><span class="dot-mut"></span><span class="txt" style="color:var(--mut);">' + g + '</span></div>';
    }).join(''));

    set('gap-needs', gapNeeds.map(function (n) {
      return '<div class="gap-row"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" style="flex-shrink:0;"><path d="M3.5 9.5 7 13l7.5-8" stroke="var(--acc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="txt" style="font-weight:500;">' + n + '</span></div>';
    }).join(''));

    set('tier-networks', tierNetworks.map(function (t) { return '<div>' + t + '</div>'; }).join(''));
    set('tier-channels', tierChannels.map(function (t) { return '<div>' + t + '</div>'; }).join(''));

    set('cap-grid', capabilities.map(function (c) {
      return '<div class="cap-cell"><div class="cap-head"><span class="cap-n">' + c.n + '</span><span class="cap-icon">' + c.icon + '</span></div><div class="cap-title">' + c.title + '</div><p class="cap-body">' + c.body + '</p></div>';
    }).join(''));

    set('aud-grid', audiences.map(function (a) {
      return '<div class="atropos aud-atropos">' +
        '<div class="atropos-scale"><div class="atropos-rotate"><div class="atropos-inner">' +
          '<div class="aud-card">' +
            '<div class="aud-tag" data-atropos-offset="6">' + a.tag + '</div>' +
            '<div class="aud-title" data-atropos-offset="3">' + a.title + '</div>' +
            '<p class="aud-body" data-atropos-offset="1">' + a.body + '</p>' +
          '</div>' +
        '</div></div></div>' +
      '</div>';
    }).join(''));
    initAudAtropos();

    set('api-points', apiPoints.map(function (pt) {
      return '<div class="api-point"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" style="flex-shrink:0;"><path d="M3.5 9.5 7 13l7.5-8" stroke="var(--acc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>' + pt + '</span></div>';
    }).join(''));

    set('about-principles', aboutPrinciples.map(function (pr) {
      return '<div class="about-cell"><div class="about-cell-t">' + pr.t + '</div><p class="about-cell-b">' + pr.b + '</p></div>';
    }).join(''));

    set('sealed-team', sealedTeam.map(function (mem) {
      return '<div class="vault-row"><div class="vault-row-l"><span class="vault-redact"></span><span class="role">' + mem + '</span></div><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--fnt)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/></svg></div>';
    }).join(''));

    set('roles-list', careerRoles.map(function (r) {
      return '<a href="#" class="role-row" data-apply="' + r.role + '"><div style="min-width:0;"><div class="role-title">' + r.role + '</div><div class="role-meta">' + r.team + ' · ' + r.loc + ' · ' + r.comp + '</div></div><svg class="role-arrow" width="22" height="22" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
    }).join(''));

    // populate the apply-form position dropdown
    var posSel = el('apply-position');
    if (posSel) {
      posSel.innerHTML = '<option value="">Select a role…</option>' + careerRoles.map(function (r) {
        return '<option>' + r.role + '</option>';
      }).join('') + '<option>General / future roles</option>';
    }

    set('footer-cols', footerCols.map(function (col) {
      var links = col.links.map(function (l) {
        var solMap = { 'Travel Connectivity': 'sol-travel', 'Partner Enablement': 'sol-partner', 'Network Infrastructure': 'sol-network', 'API Solutions': 'sol-api' };
        var navKey = l === 'Careers' ? 'Careers'
          : (l === 'About Sudarva' || l === 'About Us' ? 'About Sudarva'
          : (l === 'Guides' ? 'Guides'
          : (l === 'Insights' ? 'Insights'
          : (l === 'Support' ? 'Support'
          : (l === 'Contact Us' ? 'Contact'
          : (l === 'Sudarva Connect' || l === 'Sudarva Go' ? 'Connect'
          : (solMap[l] || '')))))));
        var href = pathForNav(navKey) || '#';
        var nav = navKey ? ' data-nav="' + navKey + '"' : '';
        var badge = l === 'Sudarva Go' ? '<span class="soon-badge">Coming soon</span>' : (l === 'Careers' ? '<span class="hiring-badge">Hiring</span>' : '');
        return '<a href="' + href + '" class="footer-link"' + nav + '>' + l + badge + '</a>';
      }).join('');
      return '<div><div class="footer-col-title">' + col.title + '</div><div class="footer-col-rule"></div><div class="footer-col-links">' + links + '</div></div>';
    }).join(''));

    set('footer-legal-links', legalLinks.map(function (l) {
      return '<a href="/policies/' + encodeURIComponent(l.id) + '" class="legal-link" data-policy="' + l.id + '">' + l.label + '</a>';
    }).join(''));

    set('support-cats', supportCats.map(function (c) {
      return '<a href="#" data-nav="Guides" class="support-cat"><span class="support-cat-icon"><svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + c.icon + '</svg></span><div class="support-cat-title">' + c.title + '</div><div class="support-cat-desc">' + c.desc + '</div><div class="support-cat-count">' + c.n + ' articles</div></a>';
    }).join(''));

    renderArticles(supportArticles);

    set('connect-grid', connectFeatures.map(function (c) {
      return '<div class="connect-card"><span class="connect-icon"><svg width="26" height="26" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + c.icon + '</svg></span><div class="connect-card-title">' + c.title + '</div><p class="connect-card-body">' + c.body + '</p></div>';
    }).join(''));

    (function renderInsights() {
      var feat = insightsPosts[0];
      var rest = insightsPosts.slice(1);
      var spotlight = feat ? insCard(feat, true) : '';
      var grid = rest.map(function (p) { return insCard(p, false); }).join('');
      set('insights',
        '<div class="ins-page">' +
          '<header class="section ins-page-head">' +
            '<div class="ins-bg" aria-hidden="true">' +
              '<div class="ins-bg-glow"></div>' +
              '<div class="ins-bg-grid"></div>' +
              '<svg class="ins-bg-art" viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<defs>' +
                  '<radialGradient id="ins-hub" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(398 168) rotate(90) scale(90)">' +
                    '<stop stop-color="var(--acc)" stop-opacity="0.35"/>' +
                    '<stop offset="0.45" stop-color="var(--acc)" stop-opacity="0.08"/>' +
                    '<stop offset="1" stop-color="var(--acc)" stop-opacity="0"/>' +
                  '</radialGradient>' +
                  '<linearGradient id="ins-layer-top" x1="0" y1="0" x2="0" y2="1">' +
                    '<stop stop-color="var(--acc)" stop-opacity="0.14"/>' +
                    '<stop offset="1" stop-color="var(--acc)" stop-opacity="0.02"/>' +
                  '</linearGradient>' +
                  '<linearGradient id="ins-layer-mid" x1="0" y1="0" x2="0" y2="1">' +
                    '<stop stop-color="var(--acc)" stop-opacity="0.1"/>' +
                    '<stop offset="1" stop-color="var(--acc)" stop-opacity="0.015"/>' +
                  '</linearGradient>' +
                  '<linearGradient id="ins-layer-base" x1="0" y1="0" x2="0" y2="1">' +
                    '<stop stop-color="var(--acc)" stop-opacity="0.07"/>' +
                    '<stop offset="1" stop-color="var(--acc)" stop-opacity="0.01"/>' +
                  '</linearGradient>' +
                '</defs>' +
                '<g class="ins-bg-orbit">' +
                  '<circle cx="398" cy="168" r="118" stroke="currentColor" stroke-width="1" opacity="0.22"/>' +
                  '<circle cx="398" cy="168" r="88" stroke="currentColor" stroke-width="1" opacity="0.16"/>' +
                  '<ellipse cx="398" cy="168" rx="118" ry="42" stroke="currentColor" stroke-width="1" opacity="0.2"/>' +
                  '<ellipse cx="398" cy="168" rx="118" ry="72" stroke="currentColor" stroke-width="1" opacity="0.14"/>' +
                  '<path d="M398 50v236M280 168h236" stroke="currentColor" stroke-width="1" opacity="0.1"/>' +
                '</g>' +
                '<g class="ins-bg-stack">' +
                  '<path class="ins-layer ins-layer--3" d="M248 292 368 248 488 292 368 336Z" fill="url(#ins-layer-base)" stroke="currentColor" stroke-width="1" opacity="0.55"/>' +
                  '<path class="ins-layer ins-layer--2" d="M228 252 348 208 468 252 348 296Z" fill="url(#ins-layer-mid)" stroke="currentColor" stroke-width="1" opacity="0.65"/>' +
                  '<path class="ins-layer ins-layer--1" d="M208 212 328 168 448 212 328 256Z" fill="url(#ins-layer-top)" stroke="var(--acc)" stroke-width="1.2" opacity="0.75"/>' +
                '</g>' +
                '<g class="ins-bg-mesh" stroke="var(--acc)" stroke-width="1" stroke-linecap="round">' +
                  '<path d="M328 212 368 248" opacity="0.45"/>' +
                  '<path d="M368 248 398 168" opacity="0.55"/>' +
                  '<path d="M328 168 398 168" opacity="0.35"/>' +
                  '<path d="M268 228 328 212" opacity="0.3"/>' +
                  '<path d="M348 208 398 168" opacity="0.4"/>' +
                  '<path d="M398 168 448 212" opacity="0.35"/>' +
                '</g>' +
                '<g class="ins-bg-nodes" fill="var(--acc)">' +
                  '<circle cx="328" cy="212" r="2.5" opacity="0.7"/>' +
                  '<circle cx="368" cy="248" r="2.5" opacity="0.75"/>' +
                  '<circle cx="328" cy="168" r="2" opacity="0.5"/>' +
                  '<circle cx="448" cy="212" r="2" opacity="0.45"/>' +
                  '<circle cx="268" cy="228" r="1.8" opacity="0.35"/>' +
                '</g>' +
                '<circle class="ins-bg-hub" cx="398" cy="168" r="90" fill="url(#ins-hub)"/>' +
                '<circle cx="398" cy="168" r="5" fill="var(--acc)" opacity="0.9"/>' +
                '<circle cx="398" cy="168" r="12" stroke="var(--acc)" stroke-width="1.5" opacity="0.5"/>' +
                '<g class="ins-bg-ring" stroke="var(--acc)" stroke-width="1" fill="none" opacity="0.35">' +
                  '<circle cx="398" cy="168" r="22"/>' +
                  '<circle cx="398" cy="168" r="22"/>' +
                '</g>' +
              '</svg>' +
            '</div>' +
            '<div class="ins-page-head-inner">' +
              '<div class="eyebrow rise-1">Insights</div>' +
              '<h1 class="ins-page-title rise-2">Notes from the <span class="acc">layer.</span></h1>' +
              '<p class="ins-page-lead rise-3">Thinking on travel infrastructure, the engineering underneath it, and how we build — written by the team, not a marketing desk.</p>' +
            '</div>' +
          '</header>' +
          '<section class="section ins-page-body">' +
            '<div class="ins-shell">' +
              '<div class="ins-feed">' +
                spotlight +
                (grid ? '<div class="ins-grid">' + grid + '</div>' : '') +
              '</div>' +
            '</div>' +
          '</section>' +
        '</div>'
      );
    })();

    Object.keys(solutions).forEach(function (id) {
      var s = solutions[id];
      var feats = s.features.map(function (f, i) {
        return '<div class="sol-cell"><div class="sol-cell-n">' + ('0' + (i + 1)) + '</div><div class="sol-cell-t">' + f.t + '</div><p class="sol-cell-b">' + f.b + '</p></div>';
      }).join('');
      var body = s.section.body.map(function (p) { return '<p class="prose-body">' + p + '</p>'; }).join('');
      set(id,
        '<div class="section" style="border-top:none; padding-top:clamp(110px,15vh,170px);">' +
          '<div class="connect-hero">' +
            '<div class="eyebrow rise-1">' + s.eyebrow + '</div>' +
            '<h1 class="rise-2" style="font-size:clamp(34px,6vw,68px); line-height:1.05; font-weight:700; letter-spacing:-0.03em; max-width:15ch;">' + s.title[0] + '<span class="acc">' + s.title[1] + '</span></h1>' +
            '<p style="margin-top:clamp(16px,2.4vw,24px); font-size:clamp(16px,3vw,20px); line-height:1.6; color:var(--mut); max-width:600px;">' + s.lead + '</p>' +
            '<div class="hero-btns" style="margin-top:clamp(28px,4vw,40px);"><a href="#" class="btn-primary btn-inline" data-nav="Contact"><span>Become a partner</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a><a href="#" class="btn-secondary btn-inline" data-nav="Connect"><span>See Sudarva Connect</span></a></div>' +
          '</div>' +
        '</div>' +
        '<div class="section section--panel"><div class="prose reveal"><div class="eyebrow">' + s.section.eyebrow + '</div><p class="prose-lead">' + s.section.lead + '</p>' + body + '</div></div>' +
        '<div class="section"><div class="section-head reveal"><div class="eyebrow">What you get</div><h2 class="h2">Built into the <span class="acc">layer.</span></h2></div><div class="sol-grid reveal">' + feats + '</div></div>' +
        '<div class="section center-cta"><h2 class="h2" style="max-width:18ch; margin:0 auto clamp(28px,4vw,40px);">' + s.close + '</h2><a href="#" class="btn-primary btn-inline" data-nav="Contact"><span>Talk to our team</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>'
      );
    });

    // stats cells
    set('stats-grid', stats.map(function (s, i) {
      return '<div class="stat-cell"><div class="stat-icon">' + s.icon + '</div><div><div class="stat-value" data-i="' + i + '">0</div><div class="stat-label">' + s.label + '</div></div></div>';
    }).join(''));

    // birds
    set('flock', birdSpecs.map(function (b) {
      return '<span style="top:' + b.top + '; left:' + b.left + '; animation:sc-flap 1.1s ease-in-out ' + b.delay + ' infinite;"><svg width="' + b.w + '" height="' + (b.w * 0.6) + '" viewBox="0 0 30 18" fill="none" stroke="' + b.stroke + '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15 L15 3 L28 15"/></svg></span>';
    }).join(''));

    // shooting stars
    set('stars', starSpecs.map(function (s) {
      var shadow = s.glow ? ' box-shadow:0 0 8px ' + s.glow + ';' : '';
      return '<div class="star" style="top:' + s.top + '; left:' + s.left + '; width:' + s.w + 'px; height:2px; background:linear-gradient(90deg, transparent, ' + s.color + ');' + shadow + ' --dx:' + s.dx + 'px; --dy:' + s.dy + 'px; --ang:' + s.ang + 'deg; animation:sc-shoot ' + s.dur + ' ease-out ' + s.delay + ' infinite both;"></div>';
    }).join(''));
  }

  /* ---------- theme ---------- */
  var THEME_SUN = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.4"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/></svg>';
  var THEME_MOON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>';
  function isDarkTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }
  function applyThemeUI() {
    var dark = isDarkTheme();
    var themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.innerHTML = dark ? THEME_SUN : THEME_MOON;
    var switchers = document.querySelectorAll('[data-theme-switcher]');
    for (var i = 0; i < switchers.length; i++) {
      var root = switchers[i];
      var toggle = root.querySelector('[data-theme-toggle]');
      var lightBtn = root.querySelector('[data-theme-set="light"]');
      var darkBtn = root.querySelector('[data-theme-set="dark"]');
      if (toggle) toggle.setAttribute('aria-checked', dark ? 'true' : 'false');
      if (lightBtn) {
        lightBtn.setAttribute('aria-pressed', dark ? 'false' : 'true');
        lightBtn.classList.toggle('is-active', !dark);
      }
      if (darkBtn) {
        darkBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
        darkBtn.classList.toggle('is-active', dark);
      }
    }
  }
  function setTheme(next) {
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('sudarva-theme', next); } catch (e) {}
    applyThemeUI();
  }
  function toggleTheme() {
    setTheme(isDarkTheme() ? 'light' : 'dark');
  }
  function wireThemeSwitchers() {
    document.addEventListener('click', function (e) {
      var setBtn = e.target.closest('[data-theme-set]');
      if (setBtn) {
        e.preventDefault();
        setTheme(setBtn.getAttribute('data-theme-set'));
        return;
      }
      var toggle = e.target.closest('[data-theme-toggle]');
      if (toggle) {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  /* ---------- atropos (audience cards) ---------- */
  var audAtroposInstances = [];
  function initAudAtropos() {
    for (var i = 0; i < audAtroposInstances.length; i++) {
      try { audAtroposInstances[i].destroy(); } catch (e) {}
    }
    audAtroposInstances = [];
    if (typeof Atropos !== 'function') return;
    var nodes = document.querySelectorAll('.aud-atropos');
    for (var n = 0; n < nodes.length; n++) {
      audAtroposInstances.push(Atropos({
        el: nodes[n],
        activeOffset: 28,
        shadowScale: 1.02,
        shadowOffset: 40,
        rotateXMax: 10,
        rotateYMax: 10,
        highlight: true,
        shadow: true,
        rotateTouch: 'scroll-y'
      }));
    }
  }

  /* ---------- routing (URL paths) ---------- */
  var quoteStarted = false;
  var navSilent = false;

  var POLICIES = (typeof window !== 'undefined' && window.SUDARVA_POLICIES) || {};
  var policyOrder = ['terms', 'privacy', 'cookie', 'aup', 'refund', 'dpa'];
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function parsePath(pathname) {
    var path = String(pathname || '/').replace(/\/+$/, '') || '/';
    var fixed = {
      '/': 'home',
      '/about': 'about',
      '/careers': 'careers',
      '/connect': 'connect',
      '/contact': 'contact',
      '/guides': 'guides',
      '/support': 'support',
      '/insight': 'insights',
      '/solutions/travel': 'sol-travel',
      '/solutions/partner': 'sol-partner',
      '/solutions/network': 'sol-network',
      '/solutions/api': 'sol-api'
    };
    if (fixed[path]) return { view: fixed[path], path: path };
    var m;
    m = path.match(/^\/insight\/([^/]+)$/);
    if (m) return { view: 'insight', slug: decodeURIComponent(m[1]), path: path };
    m = path.match(/^\/support\/([^/]+)$/);
    if (m) return { view: 'support-article', articleId: decodeURIComponent(m[1]), path: path };
    m = path.match(/^\/policies\/([^/]+)$/);
    if (m) return { view: 'policy', policyId: decodeURIComponent(m[1]), path: path };
    return { view: 'home', path: '/' };
  }

  function pathForNav(v) {
    if (v === 'home') return '/';
    if (v === 'About Sudarva') return '/about';
    if (v === 'Careers') return '/careers';
    if (v === 'Guides') return '/guides';
    if (v === 'Insights') return '/insight';
    if (v === 'Support') return '/support';
    if (v === 'Connect') return '/connect';
    if (v === 'Contact') return '/contact';
    if (v === 'sol-travel') return '/solutions/travel';
    if (v === 'sol-partner') return '/solutions/partner';
    if (v === 'sol-network') return '/solutions/network';
    if (v === 'sol-api') return '/solutions/api';
    return null;
  }

  function pathForView(view, opts) {
    opts = opts || {};
    if (view === 'insight' && opts.slug) return '/insight/' + encodeURIComponent(opts.slug);
    if (view === 'support-article' && opts.articleId) return '/support/' + encodeURIComponent(opts.articleId);
    if (view === 'policy' && opts.policyId) return '/policies/' + encodeURIComponent(opts.policyId);
    if (view === 'insights') return '/insight';
    if (view === 'home') return '/';
    if (view === 'about') return '/about';
    if (view === 'careers') return '/careers';
    if (view === 'connect') return '/connect';
    if (view === 'contact') return '/contact';
    if (view === 'guides') return '/guides';
    if (view === 'support') return '/support';
    if (view === 'sol-travel') return '/solutions/travel';
    if (view === 'sol-partner') return '/solutions/partner';
    if (view === 'sol-network') return '/solutions/network';
    if (view === 'sol-api') return '/solutions/api';
    return null;
  }

  function setUrl(path, replace) {
    if (navSilent || !path) return;
    if (path === window.location.pathname) return;
    try {
      if (replace) history.replaceState({ path: path }, '', path);
      else history.pushState({ path: path }, '', path);
    } catch (e) {}
  }

  function showInsight(id, opts) {
    opts = opts || {};
    var idx = -1;
    for (var i = 0; i < insightsPosts.length; i++) if (insightsPosts[i].id === id) { idx = i; break; }
    if (idx === -1) { showPage('insights', { silent: opts.silent }); return; }
    var p = insightsPosts[idx];
    var next = insightsPosts[(idx + 1) % insightsPosts.length];
    var bodyHTML = p.body.map(function (b) {
      if (Array.isArray(b) && b[0] === 'h') return '<h3 class="post-h3">' + esc(b[1]) + '</h3>';
      return '<p class="post-p">' + esc(b) + '</p>';
    }).join('');
    set('insight',
      '<div class="section" style="border-top:none; padding-top:clamp(104px,14vh,150px); padding-bottom:clamp(28px,3vw,40px);">' +
        '<div class="post-head">' +
          '<a href="/insight" class="post-back" data-nav="Insights"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M15 9H4M8 4.5 3.5 9 8 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>All insights</a>' +
          '<div class="ins-meta" style="margin-top:26px;"><span class="ins-tag">' + esc(p.tag) + '</span><span class="ins-dot"></span><span>' + esc(p.date) + '</span><span class="ins-dot"></span><span>' + esc(p.read) + ' read</span></div>' +
          '<h1 class="post-title">' + esc(p.title) + '</h1>' +
          '<p class="post-lead">' + esc(p.excerpt) + '</p>' +
        '</div>' +
        '<div class="post-cover">' + insCover(p, 'xl') + '</div>' +
      '</div>' +
      '<div class="section" style="border-top:1px solid var(--ln);"><div class="post-body">' + bodyHTML +
        '<div class="post-byline">Written by the Sudarva team.</div>' +
      '</div></div>' +
      '<div class="section" style="border-top:1px solid var(--ln);"><div class="post-next"><div class="post-next-label">Next</div>' +
        '<a href="/insight/' + encodeURIComponent(next.id) + '" class="post-next-link" data-insight="' + next.id + '"><div><div class="ins-meta"><span class="ins-tag">' + esc(next.tag) + '</span></div><div class="post-next-title">' + esc(next.title) + '</div></div>' +
        '<svg width="22" height="22" viewBox="0 0 18 18" fill="none"><path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
      '</div></div>'
    );
    showPage('insight', { silent: true });
    if (!opts.silent) setUrl('/insight/' + encodeURIComponent(id));
  }

  function showPolicy(id, opts) {
    opts = opts || {};
    var p = POLICIES[id];
    if (!p) { showPage('home', { silent: opts.silent }); return; }
    var nav = policyOrder.map(function (pid) {
      var pp = POLICIES[pid]; if (!pp) return '';
      return '<a href="/policies/' + encodeURIComponent(pid) + '" class="policy-navlink' + (pid === id ? ' active' : '') + '" data-policy="' + pid + '">' + esc(pp.title) + '</a>';
    }).join('');
    var toc = p.sections.map(function (s) {
      return '<a href="#pol-' + s.n + '" class="policy-toc-link">' + esc(s.n) + ' &middot; ' + esc(s.heading) + '</a>';
    }).join('');
    var body = p.sections.map(function (s) {
      var blocks = s.blocks.map(function (b) {
        if (b.t === 'h') return '<h4 class="policy-subhead">' + esc(b.x) + '</h4>';
        return '<p class="policy-p">' + esc(b.x) + '</p>';
      }).join('');
      return '<section class="policy-section" id="pol-' + s.n + '"><div class="policy-section-n">' + esc(s.n) + '</div><div class="policy-section-body"><h3 class="policy-h3">' + esc(s.heading) + '</h3>' + blocks + '</div></section>';
    }).join('');
    set('policy',
      '<div class="section" style="border-top:none; padding-top:clamp(104px,14vh,150px); padding-bottom:clamp(40px,5vw,60px);">' +
        '<div class="policy-head">' +
          '<div class="eyebrow rise-1">' + esc(p.kicker) + '</div>' +
          '<h1 class="rise-2" style="font-size:clamp(32px,5.4vw,58px); line-height:1.05; font-weight:700; letter-spacing:-0.03em;">' + esc(p.title) + '</h1>' +
          '<p style="margin-top:clamp(14px,2.2vw,20px); font-size:clamp(15px,2.8vw,18px); line-height:1.6; color:var(--mut); max-width:560px;">' + esc(p.summary) + '</p>' +
          '<div class="policy-meta"><span>Effective ' + esc(p.effective) + '</span><span class="policy-meta-dot"></span><span>Version ' + esc(p.version) + '</span></div>' +
          '<div class="policy-switch">' + nav + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="section" style="border-top:1px solid var(--ln); padding-top:clamp(40px,5vw,64px);"><div class="policy-layout">' +
        '<aside class="policy-toc"><div class="policy-toc-label">On this page</div>' + toc + '</aside>' +
        '<div class="policy-content">' + body + '</div>' +
      '</div></div>'
    );
    showPage('policy', { silent: true });
    if (!opts.silent) setUrl('/policies/' + encodeURIComponent(id));
  }

  function showPage(page, opts) {
    opts = opts || {};
    var views = document.querySelectorAll('.view');
    for (var i = 0; i < views.length; i++) views[i].classList.remove('active');
    var target = el(page) || el('home');
    target.classList.add('active');
    closeMenu();
    window.scrollTo(0, 0);
    if (page === 'about' && !quoteStarted) { quoteStarted = true; startQuote(); }
    if (!opts.silent) {
      var path = pathForView(page, opts);
      if (path) setUrl(path);
    }
  }
  function routeFromNav(v) {
    var path = pathForNav(v);
    if (path) setUrl(path);
    if (v === 'home') showPage('home', { silent: true });
    else if (v === 'About Sudarva') showPage('about', { silent: true });
    else if (v === 'Careers') showPage('careers', { silent: true });
    else if (v === 'Guides') showPage('guides', { silent: true });
    else if (v === 'Insights') showPage('insights', { silent: true });
    else if (v === 'Support') showPage('support', { silent: true });
    else if (v === 'Connect') showPage('connect', { silent: true });
    else if (v === 'sol-travel' || v === 'sol-partner' || v === 'sol-network' || v === 'sol-api') showPage(v, { silent: true });
    else if (v === 'Contact') showPage('contact', { silent: true });
  }

  function applyPath(pathname) {
    var r = parsePath(pathname);
    navSilent = true;
    try {
      if (r.view === 'insight' && r.slug) showInsight(r.slug, { silent: true });
      else if (r.view === 'support-article' && r.articleId) showArticle(r.articleId, { silent: true });
      else if (r.view === 'policy' && r.policyId) showPolicy(r.policyId, { silent: true });
      else showPage(r.view || 'home', { silent: true });
    } finally {
      navSilent = false;
    }
  }

  /* ---------- mobile menu ---------- */
  function closeMenu() { el('mobile-menu').classList.remove('open'); }
  function toggleMenu() { el('mobile-menu').classList.toggle('open'); }

  /* ---------- count-up ---------- */
  function animateCounts() {
    var nodes = document.querySelectorAll('.stat-value');
    var dur = 1500, t0 = performance.now();
    function tick(now) {
      var raw = Math.min(1, (now - t0) / dur);
      var p = 1 - Math.pow(1 - raw, 3);
      for (var i = 0; i < nodes.length; i++) {
        var s = stats[+nodes[i].getAttribute('data-i')];
        if (s.text) { nodes[i].textContent = s.text; continue; }
        if (s.loading) { if (nodes[i].getAttribute('data-loaded') !== '1') { nodes[i].setAttribute('data-loaded','1'); nodes[i].innerHTML = '<span class="stat-loading"><span></span><span></span><span></span></span>'; } continue; }
        var val = s.value * p;
        var text = s.decimals ? val.toFixed(s.decimals) : Math.round(val).toString();
        nodes[i].textContent = text + s.suffix;
      }
      if (raw < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- terminal ---------- */
  function startTerminal() {
    var node = el('term');
    var script = '$ curl -X POST https://api.sudarva.io/v1/profiles \\\n     -H "Authorization: Bearer sk_live_9f2c" \\\n     -d \'{"traveler":"tr_8xz19","region":"JP"}\'\n\n{\n  "id": "esim_4Kp9q",\n  "status": "provisioned",\n  "region": "JP",\n  "activated": true\n}\n\n\u2713 eSIM provisioned \u00b7 340ms';
    var i = 0, timer;
    function type() {
      i++;
      node.textContent = script.slice(0, i);
      if (i < script.length) {
        var ch = script[i - 1];
        var delay = ch === '\n' ? 150 : (16 + Math.random() * 26);
        timer = setTimeout(type, delay);
      } else {
        timer = setTimeout(function () { i = 0; node.textContent = ''; setTimeout(type, 500); }, 2800);
      }
    }
    timer = setTimeout(type, 800);
  }

  /* ---------- quote ---------- */
  function startQuote() {
    var node = el('quote');
    var text = 'Failure was never the end of anything. It was information, arriving early. Impossible is just a sentence people finish too early — because the impossible becomes possible the moment you stop looking outside for the answer and start looking within. Failure is only the receipt of hard work. Fear the work, and your dream stays a dream. Face the failure, and the dream comes true.';
    var i = 0;
    node.textContent = '';
    function type() {
      i++;
      node.textContent = text.slice(0, i);
      if (i < text.length) {
        var ch = text[i - 1];
        var delay = ch === '\n' ? 220 : (14 + Math.random() * 22);
        setTimeout(type, delay);
      }
    }
    setTimeout(type, 400);
  }

  /* ---------- globe ---------- */
  function initGlobe() {
    var eln = el('globe');
    if (!eln || typeof window.Globe === 'undefined' || eln.clientWidth === 0) { requestAnimationFrame(initGlobe); return; }

    var hubs = [
      [28.6,77.2],[1.35,103.8],[35.7,139.7],[22.3,114.2],[13.75,100.5],
      [-6.2,106.8],[25.2,55.3],[31.2,121.5],[37.6,127.0],[3.14,101.7],
      [19.1,72.9],[23.1,113.3],[14.6,121.0],[21.0,105.8],[39.9,116.4],
      [24.7,46.7],[41.0,28.98],
      [51.5,-0.12],[48.85,2.35],[52.52,13.4],[40.4,-3.7],[55.75,37.6],
      [45.46,9.19],[59.33,18.06],
      [-26.2,28.0],[30.04,31.24],[6.5,3.38],[-1.29,36.82],
      [40.7,-74.0],[37.77,-122.4],[34.05,-118.2],[41.88,-87.6],[43.65,-79.38],
      [19.43,-99.13],[-23.55,-46.63],[-34.6,-58.38],[4.71,-74.07],
      [-33.87,151.2],[-37.81,144.96],[-36.85,174.76]
    ];
    var arcs = [];
    for (var i = 0; i < 50; i++) {
      var a = hubs[Math.floor(Math.random() * hubs.length)];
      var b = hubs[Math.floor(Math.random() * hubs.length)];
      if (a === b) continue;
      var blue = i % 2 === 0;
      arcs.push({
        startLat: a[0], startLng: a[1], endLat: b[0], endLng: b[1],
        color: blue
          ? ['rgba(56,152,255,0)', 'rgba(56,152,255,0.85)', 'rgba(56,152,255,0)']
          : ['rgba(232, 25, 26,0)', 'rgba(232, 25, 26,0.8)', 'rgba(232, 25, 26,0)']
      });
    }
    var points = hubs.map(function (h) { return { lat: h[0], lng: h[1] }; });
    var signals = hubs.filter(function (_, i) { return i % 3 === 0; }).map(function (h) { return { lat: h[0], lng: h[1] }; });

    var world = window.Globe()(eln)
      .width(eln.clientWidth)
      .height(eln.clientHeight)
      .backgroundColor('rgba(0,0,0,0)')
      .atmosphereColor('#9aa3b5')
      .atmosphereAltitude(0.16)
      .arcsData(arcs)
      .arcColor('color')
      .arcAltitude(function () { return 0.14 + Math.random() * 0.28; })
      .arcStroke(0.32)
      .arcDashLength(0.4)
      .arcDashGap(1.6)
      .arcDashInitialGap(function () { return Math.random() * 4; })
      .arcDashAnimateTime(function () { return 2600 + Math.random() * 2200; })
      .pointsData(points)
      .pointColor(function () { return ACC; })
      .pointAltitude(0.008)
      .pointRadius(0.18)
      .ringsData(signals)
      .ringColor(function () { return function (t) { return 'rgba(56,152,255,' + (1 - t) + ')'; }; })
      .ringMaxRadius(4)
      .ringPropagationSpeed(2.4)
      .ringRepeatPeriod(1600);

    var gm = world.globeMaterial();
    gm.transparent = true; gm.opacity = 0; gm.depthWrite = false; gm.needsUpdate = true;

    Promise.all([
      fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson').then(function (r) { return r.json(); }),
      fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_1_states_provinces.geojson').then(function (r) { return r.json(); })
    ]).then(function (res) {
      var countries = res[0], states = res[1];
      var cFeats = countries.features.map(function (f) { f.__kind = 'country'; return f; });
      var sFeats = states.features.map(function (f) { f.__kind = 'state'; return f; });
      world
        .polygonsTransitionDuration(0)
        .polygonsData(sFeats.concat(cFeats))
        .polygonCapColor(function (d) { return d.__kind === 'country' ? 'rgba(130,136,150,0.2)' : 'rgba(0,0,0,0)'; })
        .polygonSideColor(function () { return 'rgba(0,0,0,0)'; })
        .polygonStrokeColor(function (d) { return d.__kind === 'country' ? 'rgba(150,156,170,0.6)' : 'rgba(150,156,170,0.28)'; })
        .polygonAltitude(function (d) { return d.__kind === 'country' ? 0.012 : 0.006; });
    }).catch(function () {});

    world.controls().enableZoom = false;
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 0.42;
    world.pointOfView({ lat: 22, lng: 100, altitude: 2.1 }, 0);

    window.addEventListener('resize', function () {
      if (eln.clientWidth === 0) return;
      world.width(eln.clientWidth).height(eln.clientHeight);
    });
  }

  /* ---------- wire up ---------- */
  function init() {
    // restore saved theme (also set early in layout; keep in sync here)
    try {
      var saved = localStorage.getItem('sudarva-theme');
      if (saved) document.documentElement.setAttribute('data-theme', saved);
    } catch (e) {}
    applyThemeUI();
    wireThemeSwitchers();
    // re-enable theme color transitions after first paint
    requestAnimationFrame(function () {
      document.documentElement.classList.remove('theme-booting');
    });

    renderLists();

    el('burger').addEventListener('click', toggleMenu);

    // desktop dropdown hover-intent (stable across the nav-item → panel gap)
    (function () {
      var dds = document.querySelectorAll('.desktop-nav .dropdown');
      var timer;
      dds.forEach(function (dd) {
        dd.addEventListener('mouseenter', function () {
          clearTimeout(timer);
          dds.forEach(function (o) { if (o !== dd) o.classList.remove('open'); });
          dd.classList.add('open');
        });
        dd.addEventListener('mouseleave', function () {
          clearTimeout(timer);
          timer = setTimeout(function () { dd.classList.remove('open'); }, 180);
        });
      });
    })();
    var mmHeads = document.querySelectorAll('.mm-head');
    for (var h = 0; h < mmHeads.length; h++) {
      mmHeads[h].addEventListener('click', function () {
        var grp = this.closest('.mm-group');
        var isOpen = grp.classList.contains('open');
        var all = document.querySelectorAll('.mm-group');
        for (var a = 0; a < all.length; a++) { all[a].classList.remove('open'); all[a].querySelector('.mm-head').setAttribute('aria-expanded', 'false'); }
        if (!isOpen) { grp.classList.add('open'); this.setAttribute('aria-expanded', 'true'); }
      });
    }

    var contactForm = el('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }
        el('form-success').classList.add('show');
        contactForm.reset();
        setTimeout(function () { el('form-success').classList.remove('show'); }, 6000);
      });
    }

    // role row → prefill + scroll to apply form
    document.addEventListener('click', function (e) {
      var row = e.target.closest('[data-apply]');
      if (!row) return;
      e.preventDefault();
      var sel = el('apply-position');
      if (sel) sel.value = row.getAttribute('data-apply');
      var target = el('apply');
      if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    });

    // apply form: file label + submit
    var fileInput = el('apply-file');
    if (fileInput) {
      fileInput.addEventListener('change', function () {
        el('apply-file-label').textContent = fileInput.files.length ? fileInput.files[0].name : 'Drop a file or click to upload';
        el('apply-file-drop').classList.toggle('has-file', !!fileInput.files.length);
      });
    }
    var applyForm = el('apply-form');
    if (applyForm) {
      applyForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!applyForm.checkValidity()) { applyForm.reportValidity(); return; }
        el('apply-success').classList.add('show');
        applyForm.reset();
        if (el('apply-file-label')) el('apply-file-label').textContent = 'Drop a file or click to upload';
        if (el('apply-file-drop')) el('apply-file-drop').classList.remove('has-file');
        setTimeout(function () { el('apply-success').classList.remove('show'); }, 6000);
      });
    }

    var searchInput = el('support-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var q = this.value.trim().toLowerCase();
        if (!q) { renderArticles(supportArticles); return; }
        renderArticles(supportArticles.filter(function (a) { return a.q.toLowerCase().indexOf(q) !== -1 || a.cat.toLowerCase().indexOf(q) !== -1; }));
      });
    }

    // delegated nav clicks (works for JS-rendered footer links too)
    document.addEventListener('click', function (e) {
      var pol = e.target.closest('[data-policy]');
      if (pol) { e.preventDefault(); showPolicy(pol.getAttribute('data-policy')); return; }
      var art = e.target.closest('[data-article]');
      if (art) { e.preventDefault(); showArticle(art.getAttribute('data-article')); return; }
      var ins = e.target.closest('[data-insight]');
      if (ins) { e.preventDefault(); showInsight(ins.getAttribute('data-insight')); return; }
      var t = e.target.closest('[data-nav]');
      if (!t) return;
      e.preventDefault();
      routeFromNav(t.getAttribute('data-nav'));
    });

    // browser back / forward
    window.addEventListener('popstate', function () {
      applyPath(window.location.pathname);
    });

    // open the view that matches the current URL (e.g. /insight/my-slug)
    applyPath(window.SUDARVA_INITIAL_PATH || window.location.pathname);
    window.__sudarvaApplyPath = applyPath;

    // scrolled nav background
    window.addEventListener('scroll', function () {
      var nav = el('nav');
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }, { passive: true });

    animateCounts();
    startTerminal();
    startMorse();
    initGlobe();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
