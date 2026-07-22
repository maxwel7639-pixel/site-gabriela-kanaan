// GabiComVida — Gabriela Kanaan

(function () {
  var WHATSAPP = '5553981476662';

  function wa(msg) {
    return 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);
  }

  // WhatsApp links (mensagem específica por seção via data-msg)
  document.querySelectorAll('.wa-link').forEach(function (el) {
    el.href = wa(el.dataset.msg || 'Olá, Gabriela! Vim pela sua página e gostaria de mais informações.');
  });

  // Marquee — itens duplicados para o loop contínuo (translateX(-50%))
  var marquee = document.getElementById('marquee-track');
  if (marquee) {
    var itemHtml =
      '<span class="marquee-item"><span class="stars">★★★★★</span> 5,0 · 40 avaliações no Google <span class="diamond">◆</span></span>';
    marquee.innerHTML = new Array(20 + 1).join(itemHtml);
  }

  // Depoimentos — prints de avaliações do Google (dep-1 a dep-4 aparecem
  // automaticamente quando os arquivos forem adicionados em img/)
  var deps = ['dep-1', 'dep-2', 'dep-3', 'dep-4', 'dep-5'];
  var track = document.getElementById('t-track');
  if (track) {
    function cardHtml(slot) {
      return (
        '<div class="t-card">' +
        '<div class="t-shot">' +
        '<img src="img/' + slot + '.webp" alt="Avaliação publicada no Google">' +
        '<div class="t-placeholder"><span class="stars">★★★★★</span><span>Avaliação 5,0 no Google</span></div>' +
        '</div></div>'
      );
    }
    var cards = deps.map(cardHtml).join('');
    track.innerHTML = cards + '<div class="t-dup">' + cards + '</div>';
    track.querySelectorAll('.t-shot img').forEach(function (img) {
      function ok() {
        img.closest('.t-card').classList.add('t-loaded');
      }
      if (img.complete && img.naturalWidth > 0) ok();
      else img.addEventListener('load', ok);
    });
  }

  // Reveal on scroll
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(function (el) {
    io.observe(el);
  });

  // Tilt 3D nos cards e molduras (desktop / mouse)
  var MAX_TILT = 7;
  document.querySelectorAll('[data-tilt]').forEach(function (el) {
    el.addEventListener('mousemove', function (ev) {
      var r = el.getBoundingClientRect();
      var x = (ev.clientX - r.left) / r.width - 0.5;
      var y = (ev.clientY - r.top) / r.height - 0.5;
      el.style.transform =
        'perspective(800px) rotateY(' + x * MAX_TILT + 'deg) rotateX(' + -y * MAX_TILT + 'deg)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.transform = '';
    });
  });
})();
