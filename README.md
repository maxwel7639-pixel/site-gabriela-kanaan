# Site — Gabriela Kanaan · GabiComVida

Landing page da psicóloga Gabriela Kanaan (Pelotas/RS). Site estático (HTML/CSS/JS puro),
pronto para deploy na Vercel — Framework: **Other**, Build/Output vazios, Root Directory na raiz.

## Estrutura

```
index.html      — página única (todas as seções)
css/style.css   — estilos (paleta preto + dourado)
js/script.js    — links de WhatsApp, marquee, depoimentos, reveal, tilt
img/            — fotos e imagens dos cards
```

## Depoimentos

As 5 avaliações reais do Google (Paula, Amanda, barbara, Cristiane e Alessandra) são
renderizadas em HTML no estilo do card de avaliação do Google — texto nítido em qualquer
tela, sem depender de screenshot. Os dados ficam no array `reviews` em `js/script.js`.
Os avatares usam a inicial colorida (padrão do Google); quem tem foto de perfil no
Google aparece com inicial mesmo assim.

## Contato configurado

- WhatsApp: `5553981476662` (variável `WHATSAPP` no topo de `js/script.js`)
- Endereço: Av. Rio Grande do Sul, 629 — Laranjal, Pelotas/RS (mapa embed do Google)
