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

## Pendência: prints de avaliações do Google

A seção **Depoimentos** tem 5 espaços para prints de avaliações. Só o print da
Alessandra (`img/dep-5.webp`) veio completo na exportação do design — os outros 4
ficaram indisponíveis (limite de leitura da exportação).

Para completar: salvar os prints como `img/dep-1.webp`, `img/dep-2.webp`,
`img/dep-3.webp` e `img/dep-4.webp` (pode ser `.webp` gerado de screenshot; proporção
livre, o card usa `object-fit: contain`). **Nenhuma mudança de código é necessária** —
cada card mostra um placeholder discreto ("★★★★★ Avaliação 5,0 no Google") até o
arquivo existir, e passa a exibir o print automaticamente quando ele é adicionado.

## Contato configurado

- WhatsApp: `5553981476662` (variável `WHATSAPP` no topo de `js/script.js`)
- Endereço: Av. Rio Grande do Sul, 629 — Laranjal, Pelotas/RS (mapa embed do Google)
