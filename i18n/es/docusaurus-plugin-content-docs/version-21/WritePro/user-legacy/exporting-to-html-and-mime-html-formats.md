---
id: exporting-to-html-and-mime-html-formats
title: Exportacion a formatos HTML y MIME HTML
displayed_sidebar: docs
slug: /WritePro/exporting-to-html-and-mime-html-formats
---

Los documentos 4D Write Pro pueden exportarse a los formatos HTML y MIME HTML utilizando los comandos [WP EXPORT DOCUMENT](../commands/wp-export-document) y [WP EXPORT VARIABLE](../commands/wp-export-variable). Utilice estas tablas para comprobar qué atributos y funcionalidades de 4D Write Pro se exportan a HTML y MIME HTML. Los atributos/funcionalidades están ordenados alfabéticamente. Para una lista detallada de atributos, ver *Atributos 4D Write Pro*.

### Atributos comunes 

| **Atributo/Funcionalidad**                    | **Exportado** | **Comentario** |
| --------------------------------------------- | ------------- | -------------- |
| Background clip                               | sí            |                |
| Background color (para elemento, no caracter) | sí            |                |
| Background image                              | sí            |                |
| Background repeat                             | sí            |                |
| Background origin                             | sí            |                |
| Background position                           | sí            |                |
| Background width and height                   | sí            |                |
| Border color                                  | sí            |                |
| Border radius                                 | sí            |                |
| Border style                                  | sí            |                |
| Border width                                  | sí            |                |
| Element id                                    | sí            |                |
| Margin                                        | sí            |                |
| Padding                                       | sí            |                |
| Protected                                     | no            |                |
| Style sheet                                   | sí            |                |

### Caracteres 

| **Atributo/Funcionalidad** | **Exportado** | **Comentario**                |
| -------------------------- | ------------- | ----------------------------- |
| Background color           | sí            |                               |
| Font and font styles       | sí            |                               |
| Font size                  | sí            |                               |
| Strikethrough color        | no            |                               |
| Strikethrough styles       | partialmente  | Sólo se exporta el sólido     |
| Superscript, subscript     | sí            |                               |
| Text color                 | sí            |                               |
| Text shadow                | sí            |                               |
| Text transform             | partially     | Las minúsculas no se exportan |
| Underline color            | no            |                               |
| Underline styles           | partially     | Sólo se exporta el sólido     |

### Columnas 

| **Atributo/Funcionalidad** | **Exportado** | **Comentario** |
| -------------------------- | ------------- | -------------- |
| Column count               | no            |                |
| Column rule color          | no            |                |
| Column rule style          | no            |                |
| Column rule width          | no            |                |
| Column spacing             | no            |                |

### Documento 

| **Atributo/Funcionalidad**   | **Exportado** | **Comentario**                         |
| ---------------------------- | ------------- | -------------------------------------- |
| Break paragraphs in formulas | no            |                                        |
| Document (meta) information  | parcialmente  | Sólo se exportan el título y el asunto |
| Dpi                          | no            |                                        |
| Font default                 | no            |                                        |
| Header and footer autofit    | no            |                                        |
| Page margin                  | no            |                                        |
| Page orientation             | no            |                                        |
| Page width/height            | no            |                                        |
| Protection enabled           | no            |                                        |
| Tab decimal separator        | no            |                                        |
| User unit                    | no            |                                        |

### Imágenes 

| **Atributo/Funcionalidad**                           | **Exportado** | **Comentario**                                                               |
| ---------------------------------------------------- | ------------- | ---------------------------------------------------------------------------- |
| Alternate text                                       | sí            |                                                                              |
| Anchor align                                         | parcialmente  | Sólo derecha, izquierda, arriba o abajo                                      |
| Anchor embedded                                      | sí            |                                                                              |
| Anchor offset                                        | sí            |                                                                              |
| Anchor origin                                        | parcialmente  | Sólo para la caja del contenedor (bordes de la página web)                   |
| Anchor to a single page                              | no            |                                                                              |
| Anchor to all pages                                  | no            |                                                                              |
| Anchor to all sections of a page                     | no            |                                                                              |
| Background image (y atributos de fondo relacionados) | sí            |                                                                              |
| Image display mode                                   | parcialmente  | Si una imagen tiene una imagen de fondo, se exporta a escala para ajustarla. |
| Image URL                                            | sí            |                                                                              |
| Vertical align                                       | sí            |                                                                              |

### Cajas de texto 

| **Atributo/Funcionalidad**       | **Exportado** | **Comentario**                                          |
| -------------------------------- | ------------- | ------------------------------------------------------- |
| Anchor align                     | sí            |                                                         |
| Anchor embedded                  | sí            | como div                                                |
| Anchor offset                    | sí            |                                                         |
| Anchor origin                    | parcialmente  | Sólo para la caja contenedora (bordes de la página web) |
| Anchor to a single page          | no            |                                                         |
| Anchor to all pages              | no            |                                                         |
| Anchor to all sections of a page | no            |                                                         |
| Vertical align                   | sí            |                                                         |

### Párrafos 

| **Atributo/Funcionalidad**                 | **Exportado** | **Comentario**                                                                        |
| ------------------------------------------ | ------------- | ------------------------------------------------------------------------------------- |
| Absolute tab stops                         | no            |                                                                                       |
| Column break after                         | sí            | Sólo una columna (no se soportan las columnas múltiples)                              |
| Direction                                  | sí            |                                                                                       |
| Line height                                | sí            |                                                                                       |
| List font                                  | no            |                                                                                       |
| List image                                 | sí            |                                                                                       |
| List image height                          | no            |                                                                                       |
| List start number                          | sí            |                                                                                       |
| List string format (formato personalizado) | no            |                                                                                       |
| List style type                            | parcialmente  | Hollow-square, diamond y club no se exportan, decimal-greek es idéntico a lower-greek |
| Min-height                                 | sí            |                                                                                       |
| Min-width                                  | no            |                                                                                       |
| New line style sheet                       | no            |                                                                                       |
| Page break after                           | sí            |                                                                                       |
| Page break inside                          | sí            |                                                                                       |
| Section break after (continuous or not)    | no            |                                                                                       |
| Text align                                 | sí            |                                                                                       |
| Text indent                                | sí            |                                                                                       |
| Vertical-align                             | sí            |                                                                                       |
| Widow and orphan control                   | no            |                                                                                       |
| Width                                      | sí            |                                                                                       |

### Secciones y elementos de la página 

| **Atributo/Funcionalidad**       | **Exportado** | **Comentario**                                                          |
| -------------------------------- | ------------- | ----------------------------------------------------------------------- |
| First page sub-section           | no            |                                                                         |
| Headers and footers              | no            |                                                                         |
| Left and right page sub-sections | no            |                                                                         |
| Main sections                    | no            | Sólo se exportan al cuerpo del html los atributos de nivel de documento |
| Page margin                      | no            |                                                                         |
| Page orientation                 | no            |                                                                         |

### Tablas 

| **Atributo/Funcionalidad**                  | **Exportado** | **Comentario**                                           |
| ------------------------------------------- | ------------- | -------------------------------------------------------- |
| Background image (y atributos relacionados) | sí            |                                                          |
| Column break after                          | sí            | Sólo una columna (no se soportan las columnas múltiples) |
| Horizontal alignment                        | sí            |                                                          |
| Page break after                            | sí            |                                                          |
| Page break inside                           | sí            |                                                          |
| Section break after                         | no            |                                                          |
| Bottom carry-over rows                      | no            |                                                          |

### Celdas de la tabla 

| **Atributo/Funcionalidad**                | **Exportado** | **Comentario** |
| ----------------------------------------- | ------------- | -------------- |
| Background image (and related attributes) | sí            |                |
| Height                                    | sí            |                |
| Vertical align                            | sí            |                |
| Width                                     | sí            |                |

### Líneas de tabla 

| **Atributo/Funcionalidad**                | **Exportado** | **Comentario**                                           |
| ----------------------------------------- | ------------- | -------------------------------------------------------- |
| Background image (and related attributes) | sí            |                                                          |
| Column break after                        | sí            | Sólo una columna (no se soportan las columnas múltiples) |
| Height                                    | sí            |                                                          |
| Page break after                          | sí            |                                                          |

### Otras funcionalidades 

| **Atributo/Funcionalidad**   | **Exportado** | **Comentario**                            |
| ---------------------------- | ------------- | ----------------------------------------- |
| 4D formulas                  | no            | Calculado y congelado para la exportación |
| 4D method links              | no            |                                           |
| Bookmarks and bookmark links | sí            |                                           |
| URL links                    | sí            |                                           |