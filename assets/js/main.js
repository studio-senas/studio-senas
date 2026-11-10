(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

  const CATS = { identidade: 'Identidade visual', social: 'Social media', sites: 'Sites', graficos: 'Impressos' };
  const SYMBOL_BY_COLOR = { oliva: 'simbolo-negativo.png', choco: 'simbolo-negativo.png', ferrugem: 'simbolo-ferrugem.png', bege: 'simbolo.png' };

  /* ---------------- Cabeçalho e menu ---------------- */
  const header = $('.header');
  const nav = $('#nav');
  const toggle = $('#menuToggle');

  const floatBtn = $('.float-wa');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
    floatBtn.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  $$('a', nav).forEach((a) => a.addEventListener('click', closeMenu));

  // Link ativo conforme a rolagem
  const sections = $$('main section[id]');
  const links = $$('.nav a[href^="#"]:not(.nav__cta)');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));

  /* ---------------- Banner rotativo ---------------- */
  (function hero() {
    const root = $('.hero');
    const slides = $$('.slide', root);
    const dotsWrap = $('.hero__dots', root);
    const DELAY = 6500;
    let i = 0, timer = null;

    slides.forEach((_, n) => {
      const b = document.createElement('button');
      b.className = 'hero__dot';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Ir para o slide ' + (n + 1));
      b.innerHTML = '<span></span>';
      b.addEventListener('click', () => { go(n); restart(); });
      dotsWrap.appendChild(b);
    });
    const dots = $$('.hero__dot', dotsWrap);

    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => {
        s.classList.toggle('is-active', k === i);
        s.setAttribute('aria-hidden', k === i ? 'false' : 'true');
        $$('a,button', s).forEach((el) => (el.tabIndex = k === i ? 0 : -1));
      });
      dots.forEach((d, k) => {
        d.classList.toggle('is-active', k === i);
        d.setAttribute('aria-selected', k === i ? 'true' : 'false');
      });
    }
    function restart() {
      clearInterval(timer);
      dots.forEach((d) => { const s = d.firstChild; s.style.animation = 'none'; void s.offsetWidth; s.style.animation = ''; });
      if (!reduceMotion) timer = setInterval(() => go(i + 1), DELAY);
    }

    $('.hero__arrow--prev', root).addEventListener('click', () => { go(i - 1); restart(); });
    $('.hero__arrow--next', root).addEventListener('click', () => { go(i + 1); restart(); });
    root.addEventListener('mouseenter', () => { clearInterval(timer); root.classList.add('is-paused'); });
    root.addEventListener('mouseleave', () => { root.classList.remove('is-paused'); restart(); });
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { go(i - 1); restart(); }
      if (e.key === 'ArrowRight') { go(i + 1); restart(); }
    });

    // arrastar no celular
    let x0 = null;
    root.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) { go(dx < 0 ? i + 1 : i - 1); restart(); }
      x0 = null;
    });

    go(0); restart();
  })();

  /* ---------------- Logos de clientes ---------------- */
  (function logos() {
    const track = $('#logosTrack');
    const item = (c) => c.logo
      ? `<div class="logos__item"><img src="${esc(c.logo)}" alt="${esc(c.nome)}" loading="lazy"></div>`
      : `<div class="logos__item logos__item--text">${esc(c.nome)}</div>`;
    const html = CLIENTES.map(item).join('');
    // duplicado para o loop infinito
    track.innerHTML = html + html.replace(/<div class="logos__item/g, '<div aria-hidden="true" class="logos__item');
  })();

  /* ---------------- Cases ---------------- */
  (function cases() {
    const grid = $('#casesGrid');
    const filters = $('#caseFilters');
    const cats = [['todos', 'Todos'], ...Object.entries(CATS)];

    filters.innerHTML = cats.map(([k, v], n) =>
      `<button class="filter${n === 0 ? ' is-active' : ''}" role="tab" aria-selected="${n === 0}" data-filter="${k}">${v}</button>`).join('');

    grid.innerHTML = CASES.map((c, n) => `
      <button class="case" data-cat="${esc(c.categoria)}" data-case="${n}" aria-label="Abrir case: ${esc(c.titulo)}">
        <div class="case__cover case__cover--${esc(c.cor || 'oliva')}">
          ${c.capa
            ? `<img src="${esc(c.capa)}" alt="" loading="lazy">`
            : `<img class="case__symbol" src="assets/img/${SYMBOL_BY_COLOR[c.cor] || 'simbolo-negativo.png'}" alt=""><span class="case__ph">Imagem do projeto</span>`}
          <span class="case__more">Ver case</span>
        </div>
        <div class="case__info">
          <span class="label">${esc(CATS[c.categoria] || '')}</span>
          <h3>${esc(c.titulo)}</h3>
          <p>${esc(c.cliente)}</p>
        </div>
      </button>`).join('');

    filters.addEventListener('click', (e) => {
      const b = e.target.closest('.filter');
      if (!b) return;
      $$('.filter', filters).forEach((f) => { f.classList.toggle('is-active', f === b); f.setAttribute('aria-selected', f === b); });
      const f = b.dataset.filter;
      $$('.case', grid).forEach((el) => {
        const show = f === 'todos' || el.dataset.cat === f;
        el.classList.toggle('is-hidden', !show);
      });
    });

    grid.addEventListener('click', (e) => {
      const el = e.target.closest('.case');
      if (el) openCase(+el.dataset.case);
    });
  })();

  function caseHTML(n) {
    const c = CASES[n];
    const visible = CASES.map((_, k) => k);
    const prev = visible[(visible.indexOf(n) - 1 + visible.length) % visible.length];
    const next = visible[(visible.indexOf(n) + 1) % visible.length];
    const gallery = (c.galeria && c.galeria.length)
      ? c.galeria.map((src) => `<img src="${esc(src)}" alt="" loading="lazy">`).join('')
      : [1, 2, 3].map(() => `<div class="gallery__ph case__cover--${esc(c.cor || 'oliva')}"><span>Imagem do projeto</span></div>`).join('');
    return `
      <div class="case-detail">
        <div class="case-detail__hero case__cover--${esc(c.cor || 'oliva')}">
          ${c.capa ? `<img src="${esc(c.capa)}" alt="">` : `<img class="case__symbol" src="assets/img/${SYMBOL_BY_COLOR[c.cor] || 'simbolo-negativo.png'}" alt="">`}
        </div>
        <div class="case-detail__body">
          <span class="label">${esc(CATS[c.categoria] || '')}</span>
          <h2 id="modalTitle">${esc(c.titulo)}</h2>
          <p class="case-detail__client">${esc(c.cliente)}</p>
          <p class="case-detail__lead">${esc(c.resumo)}</p>
          <div class="case-detail__cols">
            <div><h4>Desafio</h4><p>${esc(c.desafio)}</p></div>
            <div><h4>Solução</h4><p>${esc(c.solucao)}</p></div>
            <div><h4>Entregas</h4><ul>${(c.entregas || []).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
          </div>
          <div class="gallery">${gallery}</div>
          <div class="case-detail__nav">
            <button class="btn btn--line" data-goto-case="${prev}">← Case anterior</button>
            <a href="#contato" class="btn btn--oliva" data-close>Quero um projeto assim</a>
            <button class="btn btn--line" data-goto-case="${next}">Próximo case →</button>
          </div>
        </div>
      </div>`;
  }

  function openCase(n) {
    openModal(caseHTML(n), 'modal--case');
  }

  /* ---------------- Vídeos ---------------- */
  function youtubeId(url) {
    const m = String(url).match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
    return m ? m[1] : null;
  }

  (function videos() {
    const grid = $('#videosGrid');
    grid.innerHTML = VIDEOS.map((v, n) => {
      const id = v.tipo === 'youtube' ? youtubeId(v.url) : null;
      const thumb = v.capa || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '');
      return `
        <button class="video video--${v.formato === 'horizontal' ? 'h' : 'v'}" data-video="${n}" aria-label="Assistir: ${esc(v.titulo)}">
          <div class="video__thumb">
            ${thumb ? `<img src="${esc(thumb)}" alt="" loading="lazy">` : '<div class="video__pattern"></div>'}
            <span class="video__play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
          </div>
          <div class="video__info">
            <span class="label label--light">${esc(v.subtitulo)}</span>
            <h3>${esc(v.titulo)}</h3>
          </div>
        </button>`;
    }).join('');

    grid.addEventListener('click', (e) => {
      const el = e.target.closest('.video');
      if (!el) return;
      const v = VIDEOS[+el.dataset.video];
      const ratio = v.formato === 'horizontal' ? 'h' : 'v';
      let player;
      if (v.tipo === 'youtube' && youtubeId(v.url)) {
        player = `<iframe src="https://www.youtube.com/embed/${youtubeId(v.url)}?autoplay=1&rel=0" title="${esc(v.titulo)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      } else if (v.tipo === 'mp4' && v.url) {
        player = `<video src="${esc(v.url)}" controls autoplay playsinline></video>`;
      } else {
        player = `<div class="player__empty"><img src="assets/img/simbolo-negativo.png" alt=""><p>Vídeo em breve.</p><small>Adicione o link em <code>assets/js/conteudo.js</code></small></div>`;
      }
      openModal(`<div class="player player--${ratio}">${player}</div><h2 id="modalTitle" class="player__title">${esc(v.titulo)}</h2>`, 'modal--video');
    });
  })();

  /* ---------------- Depoimentos ---------------- */
  (function testimonials() {
    const track = $('#testiTrack');
    if (!track) return;
    const initials = (n) => String(n).replace(/[\[\]]/g, '').split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase() || 'SS';
    track.innerHTML = DEPOIMENTOS.map((d) => `
      <figure class="quote">
        <svg class="quote__mark" viewBox="0 0 40 30" aria-hidden="true"><path d="M0 30V17Q0 4 13 0l2 4Q8 7 8 14h7v16zm22 0V17Q22 4 35 0l2 4q-7 3-7 10h7v16z"/></svg>
        <blockquote>${esc(d.texto)}</blockquote>
        <figcaption>
          ${d.foto ? `<img src="${esc(d.foto)}" alt="">` : `<span class="quote__avatar">${esc(initials(d.nome))}</span>`}
          <span><strong>${esc(d.nome)}</strong><small>${esc(d.empresa)}</small></span>
        </figcaption>
      </figure>`).join('');

    const items = $$('.quote', track);
    let i = 0, timer;
    const perView = () => (window.innerWidth >= 900 ? 2 : 1);
    function go(n) {
      const max = Math.max(0, items.length - perView());
      i = n > max ? 0 : n < 0 ? max : n;
      const w = items[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
      track.style.transform = `translateX(${-i * w}px)`;
    }
    const restart = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => go(i + 1), 7000); };
    $('#testiPrev').addEventListener('click', () => { go(i - 1); restart(); });
    $('#testiNext').addEventListener('click', () => { go(i + 1); restart(); });
    window.addEventListener('resize', () => go(i));

    let x0 = null;
    track.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) { go(dx < 0 ? i + 1 : i - 1); restart(); }
      x0 = null;
    });
    go(0); restart();
  })();

  /* ---------------- Modal ---------------- */
  const modal = $('#modal');
  const modalBody = $('#modalBody');
  let lastFocus = null;

  function openModal(html, cls) {
    lastFocus = document.activeElement;
    modal.className = 'modal is-open ' + (cls || '');
    modalBody.innerHTML = html;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('#modalBox').scrollTop = 0;
    $('.modal__close', modal).focus();
  }
  function closeModal(refocus = true) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    setTimeout(() => { if (!modal.classList.contains('is-open')) modalBody.innerHTML = ''; }, 300);
    if (refocus && lastFocus) lastFocus.focus({ preventScroll: true });
  }
  modal.addEventListener('click', (e) => {
    const go = e.target.closest('[data-goto-case]');
    if (go) { modalBody.innerHTML = caseHTML(+go.dataset.gotoCase); $('#modalBox').scrollTop = 0; return; }
    const closer = e.target.closest('[data-close]');
    if (closer) closeModal(!(closer.tagName === 'A'));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('is-open')) closeModal();
      else closeMenu();
    }
  });

  /* ---------------- WhatsApp e formulário ---------------- */
  const track = (event, extra) => { window.dataLayer = window.dataLayer || []; window.dataLayer.push(Object.assign({ event }, extra || {})); };
  const waURL = (msg) => `https://wa.me/${WHATSAPP}${msg ? '?text=' + encodeURIComponent(msg) : ''}`;
  $$('[data-whatsapp-link]').forEach((a) => {
    if (WHATSAPP) {
      a.href = waURL('Olá, May! Vim pelo site do Studio Senas.');
      a.target = '_blank'; a.rel = 'noopener';
      a.addEventListener('click', () => track('clique_whatsapp', { origem: a.classList.contains('float-wa') ? 'botao_flutuante' : 'contato' }));
    } else {
      a.href = '#contato';
    }
  });

  const form = $('#contactForm');
  const note = $('#formNote');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!d.nome.trim() || !d.mensagem.trim()) {
      note.textContent = 'Preencha seu nome e a mensagem.';
      note.className = 'form__note is-error';
      return;
    }
    const msg = `Olá, May! Meu nome é ${d.nome.trim()}${d.empresa.trim() ? ' (' + d.empresa.trim() + ')' : ''}.\nServiço: ${d.servico}\n\n${d.mensagem.trim()}`;
    if (!WHATSAPP) {
      note.textContent = 'Número de WhatsApp ainda não configurado.';
      note.className = 'form__note is-error';
      return;
    }
    track('envio_formulario', { servico: d.servico });
    window.open(waURL(msg), '_blank', 'noopener');
    note.textContent = 'Abrindo o WhatsApp...';
    note.className = 'form__note';
  });

  /* ---------------- Animação de entrada ---------------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const els = $$('.section__head, .service, .case, .video, .steps li, .quote, .manifesto__inner, .contact__text, .form');
    els.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  $('#ano').textContent = new Date().getFullYear();
})();
