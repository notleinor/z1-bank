# Z1 Bank — Case de estudo de design

Implementação em código do case de design **Z1**, uma conta digital para
adolescentes. Feito a partir do [arquivo no Figma](https://www.figma.com/design/piPuHRRRAlW2jjYTfUE2Qe/%F0%9F%92%B3-Z1---Roni),
cobrindo os layouts de desktop e mobile.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) — grid de espaçamento em 8px, tudo em `rem`
- [GSAP](https://gsap.com/) (`@gsap/react`) para as animações de entrada e scroll reveal
- Fonte [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)

## Breakpoints

| Nome            | Largura         |
| --------------- | --------------- |
| Mobile          | até 799px       |
| Tablet          | 800px – 1023px  |
| Desktop         | 1024px – 1439px |
| Desktop Large   | 1440px+         |

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

O push na branch `main` dispara o workflow em
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que builda o
projeto e publica em GitHub Pages.
