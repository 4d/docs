---
id: propertiesPicture
title: Imagem
---


## Rota de acesso

Nome do caminho de uma imagem de origem estática para um [botão imagem](pictureButton_overview.md), [menu pop-up imagem](picturePopupMenu_overview.md) ou [imagem estática](staticPicture.md). É necessário utilizar a sintaxe POSIX.

As seguintes localizações podem ser utilizadas para imagens estáticas:

- na pasta **Resources** do banco de dados projeto. Apropriado quando quiser compartir imagens estáticas entre vários formulários do banco de dados. Neste caso, o nome do caminho é "/RESOURCES/<picture path\>".
- numa pasta de imagens (por exemplo, **Images**) dentro da pasta do formulário. Adequado quando as imagens estáticas forem utilizadas apenas no formulário ou se pretende poder mover ou duplicar todo o formulário dentro do projeto ou em projetos diferentes. Neste caso, o nome do caminho é "<picture path\>" e é resolvido a partir da raiz da pasta do formulário.
- numa variável de imagem 4D. A imagem deve ser carregada na memória quando o formulário for executado. Neste caso, o nome do caminho é "var:<variableName\>".

#### Gramática JSON

|  Nome   | Tipo de dados | Valores possíveis                           |
|:-------:|:-------------:| ------------------------------------------- |
| picture |     text      | Relative or filesystem path in POSIX syntax |

#### Objectos suportados

[Botão de imagem](pictureButton_overview.md) - [Menu pop-up de imagem](picturePopupMenu_overview.md) - [Imagem estática](staticPicture.md)

---

## Visualização

### Escalado para caber

`Gramática JSON: "scaled"`

O formato **Scaled to fit** faz com que o 4D redimensione a imagem para se ajustar às dimensões da área.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Replicado

`Gramática JSON: "tiled"`

Quando a área que conter uma imagem com o formato **Replicated** for ampliada, a imagem não é deformada, mas é replicada tantas vezes quantas as necessárias para preencher totalmente a área.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

Se o campo for reduzido para um tamanho inferior ao da imagem original, a imagem é truncada (não centrada).

### Centro / Truncado (não centrado)

`Gramática JSON: "truncatedCenter" / "truncatedTopLeft"`

O formato **Center** faz com que o 4D centralize a imagem na área e corte qualquer parte que não caiba na área. 4D corta igualmente de cada borda e da parte superior e inferior.

O formato **Truncado (não centrado)** faz com que 4D coloque o canto superior esquerdo da imagem no canto superior esquerdo da área e recorte qualquer parte que não caiba na área. 4D corta da direita e de baixo para cima.
> Quando o formato da imagem for **Truncado (não centrado)**, é possível adicionar barras de deslocamento à área de entrada.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                        |
| ------------- | ------------- | -------------------------------------------------------- |
| pictureFormat | string        | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### Objectos suportados

[Imagem estática](staticPicture.md)
