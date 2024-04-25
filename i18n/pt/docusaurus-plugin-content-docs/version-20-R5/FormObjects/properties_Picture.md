---
id: propertiesPicture
title: Imagem
---

## Pathname

Pathname of a static source picture for a [picture button](pictureButton_overview.md), [picture pop-up Menu](picturePopupMenu_overview.md), or [static picture](staticPicture.md). É necessário utilizar a sintaxe POSIX.

As seguintes localizações podem ser utilizadas para imagens estáticas:

- in the **Resources** folder of the project. Apropriado quando quiser compartir imagens estáticas entre vários formulários do banco de dados. In this case, the Pathname is "/RESOURCES/\<picture path\>".
- in an image folder (e.g. named **Images**) within the form folder. Adequado quando as imagens estáticas forem utilizadas apenas no formulário ou se pretende poder mover ou duplicar todo o formulário dentro do projeto ou em projetos diferentes. In this case, the Pathname is "\<picture path\>" and is resolved from the root of the form folder.
- numa variável de imagem 4D. A imagem deve ser carregada na memória quando o formulário for executado. Neste caso, o nome do caminho é "var:\<variableName\>".

#### Gramática JSON

|   Nome  | Tipo de dados | Valores possíveis                           |
| :-----: | :-----------: | ------------------------------------------- |
| picture |      text     | Relative or filesystem path in POSIX syntax |

#### Objectos suportados

[Picture button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Static Picture](staticPicture.md)

---

## Visualização

### Escalado para caber

`Gramática JSON: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Replicado

`Gramática JSON: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

Se o campo for reduzido para um tamanho inferior ao da imagem original, a imagem é truncada (não centrada).

### Centro / Truncado (não centrado)

`Gramática JSON: "truncatedCenter" / "truncatedTopLeft"`

The **Center** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D corta igualmente de cada borda e da parte superior e inferior.

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D corta da direita e de baixo para cima.

> When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                        |
| ------------- | ------------- | -------------------------------------------------------- |
| pictureFormat | string        | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### Objectos suportados

[Static Picture](staticPicture.md)
