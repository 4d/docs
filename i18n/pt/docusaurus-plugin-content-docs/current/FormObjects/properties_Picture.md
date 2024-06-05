---
id: propertiesPicture
title: Imagem
---

## Pathname

Ruta de una imagen source estática para un [botón imagen](pictureButton_overview.md), [menú emergente de imagen](picturePopupMenu_overview.md), o [imagen estática](staticPicture.md). É necessário utilizar a sintaxe POSIX.

As seguintes localizações podem ser utilizadas para imagens estáticas:

- en la carpeta **Resources** del proyecto. Apropriado quando quiser compartir imagens estáticas entre vários formulários do banco de dados. In this case, the Pathname is "/RESOURCES/\<picture path\>".
- en una carpeta de imágenes (por ejemplo, llamada **Images**) dentro de la carpeta del formulario. Adequado quando as imagens estáticas forem utilizadas apenas no formulário ou se pretende poder mover ou duplicar todo o formulário dentro do projeto ou em projetos diferentes. In this case, the Pathname is "\<picture path\>" and is resolved from the root of the form folder.
- numa variável de imagem 4D. A imagem deve ser carregada na memória quando o formulário for executado. Neste caso, o nome do caminho é "var:\<variableName\>".

#### Gramática JSON

|   Nome  | Tipo de dados | Valores possíveis                           |
| :-----: | :-----------: | ------------------------------------------- |
| picture |      text     | Relative or filesystem path in POSIX syntax |

#### Objectos suportados

[Botón imagen](pictureButton_overview.md) - [Menú emergente imagen](picturePopupMenu_overview.md) - [Imagen estática](staticPicture.md)

---

## Visualização

### Escalado para caber

`Gramática JSON: "scaled"`

El formato **A escala para ajustarse** hace que 4D redimensione la imagen para ajustarla a las dimensiones del área.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Replicado

`Gramática JSON: "tiled"`

Cuando se amplía el área que contiene una imagen con el formato **Replicada**, la imagen no se deforma sino que se replica tantas veces como sea necesario para llenar el área por completo.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

Se o campo for reduzido para um tamanho inferior ao da imagem original, a imagem é truncada (não centrada).

### Centro / Truncado (não centrado)

`Gramática JSON: "truncatedCenter" / "truncatedTopLeft"`

El formato **Centro** hace que 4D centre la imagen en el área y recorte cualquier parte que no quepa dentro del área. 4D corta igualmente de cada borda e da parte superior e inferior.

El formato **Truncado (no centrado)** hace que 4D coloque la esquina superior izquierda de la imagen en la esquina superior izquierda del área y recorte cualquier parte que no quepa dentro del área. 4D corta da direita e de baixo para cima.

> Cuando el formato de la imagen es **Truncado (no centrado)**, es posible añadir barras de desplazamiento al área de entrada.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                        |
| ------------- | ------------- | -------------------------------------------------------- |
| pictureFormat | string        | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### Objectos suportados

[Static Picture](staticPicture.md)
