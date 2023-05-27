---
id: propertiesPicture
title: Imagem
---

## Pathname

Nome do caminho de uma imagem de origem estática para um botão de imagem [](pictureButton_overview.md), um menu pop-up de imagem [](picturePopupMenu_overview.md)ou uma imagem estática [](staticPicture.md). É necessário utilizar a sintaxe POSIX.

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

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Replicado

`Gramática JSON: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

If the field is reduced to a size smaller than that of the original picture, the picture is truncated (non-centered).

### Centro / Truncado (não centrado)

`JSON grammar: "truncatedCenter" / "truncatedTopLeft"`

O formato **Center** faz com que o 4D centralize a imagem na área e corte qualquer parte que não caiba na área. 4D crops equally from each edge and from the top and bottom.

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D crops from the right and bottom.
> When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                        |
| ------------- | ------------- | -------------------------------------------------------- |
| pictureFormat | string        | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### Objectos suportados

[Imagem estática](staticPicture.md)
