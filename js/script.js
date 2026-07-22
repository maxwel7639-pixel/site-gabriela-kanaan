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

  // Depoimentos — avaliações reais publicadas no Google, recriadas em HTML
  var reviews = [
    {
      name: 'Paula Oliveira',
      count: '6 avaliações',
      initial: 'P',
      color: '#00897b',
      text: 'Profissional incrível. Recomendo de olhos fechados. Humana, compreensiva. Sempre disposta e orienta com ajuda da melhor forma.'
    },
    {
      name: 'Amanda moura jorge',
      count: '1 avaliação',
      initial: 'A',
      color: '#d81b60',
      text: 'A Gabi é sensacional, e tem me ajudado muito a compreender meus sentimentos e a validá-los. Grata por encontrar alguém, que me acolhe, e me ensina tanto, principalmente no meu relacionamento com os meus filhos.'
    },
    {
      name: 'barbara ramalho',
      count: '6 avaliações',
      initial: 'b',
      color: '#8e24aa',
      text: 'A Gabi é uma profissional extremamente acolhedora, empática, flexível! Sempre me ajudou muito com as minhas demandas e foi fundamental na adaptação escolar do meu filho!! ❤️'
    },
    {
      name: 'Cristiane Ribeiro',
      count: '3 avaliações',
      initial: 'C',
      color: '#e65100',
      text: 'A Gabriela é uma profissional maravilhosa! Acolhedora, ela me fez sentir confiança desde a primeira sessão. Foi fundamental para a minha vida.'
    },
    {
      name: 'Alessandra Sopelsa Theiss',
      count: '2 avaliações',
      initial: 'A',
      color: '#1e88e5',
      text: 'Ótima profissional. A Gabriela tem um grande diferencial que é o conhecimento aprofundado nas áreas em que ela foca, principalmente no trabalho com mulheres, e ao mesmo tempo um acumulado de saberes sobre os mais diversos aspectos do desenvolvimento humano. Isso trás muita segurança pro tratamento. Obrigada por tanto, Gabi!'
    }
  ];
  var track = document.getElementById('t-track');
  if (track) {
    function cardHtml(r) {
      return (
        '<div class="t-card"><div class="g-review">' +
        '<div class="g-head">' +
        '<span class="g-avatar" style="background:' + r.color + '">' + r.initial + '</span>' +
        '<span class="g-who"><span class="g-name">' + r.name + '</span><span class="g-count">' + r.count + '</span></span>' +
        '</div>' +
        '<div class="g-meta"><span class="g-stars">★★★★★</span><span class="g-when">3 anos atrás</span></div>' +
        '<p class="g-text">' + r.text + '</p>' +
        '</div></div>'
      );
    }
    var cards = reviews.map(cardHtml).join('');
    track.innerHTML = cards + '<div class="t-dup">' + cards + '</div>';
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
