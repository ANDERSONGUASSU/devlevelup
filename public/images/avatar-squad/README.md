# SouJunior — sprites de respiração idle

8 PNGs originais, sem recompressão ou alteração de pixels, em sprites/.
Cada arquivo: 2172 × 724 px, RGBA, com transparência.
Grade: 4 colunas × 1 linha. Cada célula: 543 × 724 px (não é quadrada).
Ordem: esquerda para direita. Coordenadas X: 0, 543, 1086, 1629; Y: 0.
Tempo da prévia aprovada: 400 ms por frame, loop de 1600 ms.

## Integração

manifest.json contém os retângulos dos frames e a duração em milissegundos.
Não redimensionar cada frame individualmente: preservar a célula e a origem.
Usar image-rendering: pixelated ao ampliar no navegador.
Respeitar prefers-reduced-motion, mostrando o primeiro frame estático.

Exemplo CSS (543 × 724 px; adaptar ambas as dimensões na mesma proporção):

```css
.idle {
  width: 543px;
  height: 724px;
  background-image: url('sprites/jornada-01-iniciante-idle.png');
  background-size: 400% 100%;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  animation: respirar 1.6s steps(1, end) infinite;
}
@keyframes respirar {
  0%   { background-position: 0% 0; }
  25%  { background-position: 33.333333% 0; }
  50%  { background-position: 66.666667% 0; }
  75%  { background-position: 100% 0; }
}
@media (prefers-reduced-motion: reduce) {
  .idle { animation: none; background-position: 0% 0; }
}
```

## Observações de qualidade

Estes são os mesmos sprites usados na simulação, gerados por IA.
São uma base visual para integração, não um atlas revisado pixel a pixel.
Há pequenas variações de posição, proporção e detalhes entre frames, que
podem causar tremulação. Alguns acessórios chegam aos limites das células;
o laptop do último frame da jornada-futuro está cortado na borda direita.
Revisar enquadramento, alinhamento dos pés e transição do último para o primeiro
frame antes de publicar. Não foram aplicadas correções automáticas ou recortes.
