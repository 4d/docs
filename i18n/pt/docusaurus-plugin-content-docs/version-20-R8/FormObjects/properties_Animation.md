---
id: propertiesAnimation
title: Animação
---

## Repetir a sequência

As imagens são apresentadas num ciclo contínuo. Quando o usuário chega na última imagem e clica novamente, a primeira imagem aparece, e assim por diante.

#### Gramática JSON

| Nome                 | Tipo de dados | Valores possíveis |
| -------------------- | ------------- | ----------------- |
| loopBackToFirstFrame | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Mudar de volta quando liberado

Exibe a primeira imagem o tempo todo, exceto quando o usuário clica no botão. Apresenta a segunda imagem até que o botão do rato seja libertado. Este modo permite que você crie um botão de ação com uma imagem diferente para cada estado (inativo e clicado). Você pode usar este modo para criar um efeito 3D ou exibir qualquer imagem que represente a ação do botão.

#### Gramática JSON

| Nome                   | Tipo de dados | Valores possíveis |
| ---------------------- | ------------- | ----------------- |
| switchBackWhenReleased | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Alternar continuamente em cliques

Permite ao usuário manter pressionado o botão do mouse para exibir as imagens continuamente (ou seja, como uma animação). Quando o usuário chega na última imagem, o objeto não volta para a primeira imagem.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| switchContinuously | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Mudar a cada x ticks

Permite percorrer o conteúdo do botão de imagem na velocidade especificada (em ticks). Neste modo, todas as outras opções são ignoradas.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis         |
| ---------- | ------------- | ------------------------- |
| frameDelay | integer       | mínimo: 0 |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Alternar quando rolar sobre

Modifica o conteúdo do botão de imagem quando o cursor do mouse passa sobre ele. A imagem inicial é exibida quando o cursor sai da área do botão.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| switchWhenRollover | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Utilizar o último marco como desativado

Habilita a configuração da última miniatura como a que será exibida quando o botão estiver desativado. A miniatura usada quando o botão está desativado é processada separadamente por 4D: quando você combina essa opção com "Switch Continuously" e "Loop Back to First Frame", a última imagem é excluída da sequência associada ao botão e só aparece quando ele está desativado.

#### Gramática JSON

| Nome                   | Tipo de dados | Valores possíveis |
| :--------------------- | ------------- | ----------------- |
| useLastFrameAsDisabled | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)
