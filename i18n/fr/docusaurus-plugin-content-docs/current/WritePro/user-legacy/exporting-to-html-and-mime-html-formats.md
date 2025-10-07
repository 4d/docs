---
id: exporting-to-html-and-mime-html-formats
title: Exporter aux formats HTML et MIME HTML
displayed_sidebar: docs
slug: /WritePro/exporting-to-html-and-mime-html-formats
---

Les documents 4D Write Pro peuvent être exportés aux formats HTML et MIME HTML à l'aide des commandes [WP EXPORTER DOCUMENT](../commands/wp-exporter-document) et [WP EXPORTER VARIABLE](../commands/wp-exporter-variable). Utilisez ces tableaux pour vérifier quels attributs et fonctionnalités de 4D Write Pro sont exportés vers HTML et HTML MIME. Les attributs/fonctionnalités sont triés par ordre alphabétique. Pour une liste détaillée des attributs, reportez-vous à la page *Attributs 4D Write Pro*.

### Common attributes 

| **Attribut/Fonctionnalités**                  | **Exporté(e)** | **Commentaire** |
| --------------------------------------------- | -------------- | --------------- |
| Background clip                               | oui            |                 |
| Background color (for element, not character) | oui            |                 |
| Background image                              | oui            |                 |
| Background repeat                             | oui            |                 |
| Background origin                             | oui            |                 |
| Background position                           | oui            |                 |
| Background width and height                   | oui            |                 |
| Border color                                  | oui            |                 |
| Border radius                                 | oui            |                 |
| Border style                                  | oui            |                 |
| Border width                                  | oui            |                 |
| Element id                                    | oui            |                 |
| Margin                                        | oui            |                 |
| Padding                                       | oui            |                 |
| Protected                                     | non            |                 |
| Style sheet                                   | oui            |                 |

### Caractères 

| **Attribut/Fonctionnalité** | **Exporté(e)** | **Commentaire**                              |
| --------------------------- | -------------- | -------------------------------------------- |
| Background color            | oui            |                                              |
| Font and font styles        | oui            |                                              |
| Font size                   | oui            |                                              |
| Strikethrough color         | non            |                                              |
| Strikethrough styles        | partiellement  | Seul le gras est exporté                     |
| Superscript, subscript      | oui            |                                              |
| Text color                  | oui            |                                              |
| Text shadow                 | oui            |                                              |
| Text transform              | partiellement  | Les petites majuscules ne sont pas exportées |
| Underline color             | non            |                                              |
| Underline styles            | partiellement  | Seul le gras est exporté                     |

### Colonnes 

| **Attribut/Fonctionnalité** | **Exporté(e)** | **Commentaire** |
| --------------------------- | -------------- | --------------- |
| Column count                | non            |                 |
| Column rule color           | non            |                 |
| Column rule style           | non            |                 |
| Column rule width           | non            |                 |
| Column spacing              | non            |                 |

### Document 

| **Attribut/Fonctionnalité**  | **Exporté(e)** | **Commentaire**                          |
| ---------------------------- | -------------- | ---------------------------------------- |
| Break paragraphs in formulas | non            |                                          |
| Document (meta) information  | partiellement  | Seuls le titre et le sujet sont exportés |
| Dpi                          | non            |                                          |
| Font default                 | non            |                                          |
| Header and footer autofit    | non            |                                          |
| Page margin                  | non            |                                          |
| Page orientation             | non            |                                          |
| Page width/height            | non            |                                          |
| Protection enabled           | non            |                                          |
| Tab decimal separator        | non            |                                          |
| User unit                    | non            |                                          |

### Images 

| **Attribut/Fonctionnalité**                  | **Exporté**   | **Commentaire**                                                                 |
| -------------------------------------------- | ------------- | ------------------------------------------------------------------------------- |
| Alternate text                               | oui           |                                                                                 |
| Anchor align                                 | partiellement | Uniquement droite, gauche, haut ou bas                                          |
| Anchor embedded                              | oui           |                                                                                 |
| Anchor offset                                | oui           |                                                                                 |
| Anchor origin                                | partiellement | Uniquement pour le conteneur (bordures de la page web)                          |
| Anchor to a single page                      | non           |                                                                                 |
| Anchor to all pages                          | non           |                                                                                 |
| Anchor to all sections of a page             | non           |                                                                                 |
| Background image (et attributs de fond liés) | oui           |                                                                                 |
| Image display mode                           | partiellement | Si une image contient une image de fond, elle est exportée et mise à l'échelle. |
| Image URL                                    | oui           |                                                                                 |
| Vertical align                               | oui           |                                                                                 |

### Zones de texte 

| **Attribut/Fonctionnalité**      | **Exporté**   | **Commentaire**                                        |
| -------------------------------- | ------------- | ------------------------------------------------------ |
| Anchor align                     | oui           |                                                        |
| Anchor embedded                  | oui           | comme div                                              |
| Anchor offset                    | oui           |                                                        |
| Anchor origin                    | partiellement | Uniquement pour le conteneur (bordures de la page web) |
| Anchor to a single page          | non           |                                                        |
| Anchor to all pages              | non           |                                                        |
| Anchor to all sections of a page | non           |                                                        |
| Vertical align                   | oui           |                                                        |

### Paragraphes 

| **Attribute/Fonctionnalité**            | **Exporté**   | **Commentaire**                                                                                 |
| --------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------- |
| Absolute tab stops                      | non           |                                                                                                 |
| Column break after                      | oui           | Une seule colonne uniquement (colonnes multiples non prises en charge)                          |
| Direction                               | oui           |                                                                                                 |
| Keep with next                          | oui           |                                                                                                 |
| Line height                             | yes           |                                                                                                 |
| List font                               | non           |                                                                                                 |
| List image                              | oui           |                                                                                                 |
| List image height                       | non           |                                                                                                 |
| List start number                       | oui           |                                                                                                 |
| List string format (custom format)      | non           |                                                                                                 |
| List style type                         | partiellement | Hollow-square, diamond, et club ne sont pas exportés, decimal-greek est identique à lower-greek |
| Min-height                              | oui           |                                                                                                 |
| Min-width                               | non           |                                                                                                 |
| New line style sheet                    | non           |                                                                                                 |
| Page break after                        | oui           |                                                                                                 |
| Page break inside                       | oui           |                                                                                                 |
| Section break after (continuous or not) | non           |                                                                                                 |
| Text align                              | oui           |                                                                                                 |
| Text indent                             | oui           |                                                                                                 |
| Vertical-align                          | oui           |                                                                                                 |
| Widow and orphan control                | non           |                                                                                                 |
| Width                                   | oui           |                                                                                                 |

### Elements de section et de page 

| **Attribut/Fonctionnalité**      | **Exporté** | **Commentaire**                                                       |
| -------------------------------- | ----------- | --------------------------------------------------------------------- |
| First page sub-section           | non         |                                                                       |
| Headers and footers              | non         |                                                                       |
| Left and right page sub-sections | non         |                                                                       |
| Main sections                    | non         | Seuls les attributs au niveau du document sont exportés au corps html |
| Page margin                      | non         |                                                                       |
| Page orientation                 | non         |                                                                       |

### Tableaux 

| **Attribut/Fonctionnalité**          | **Exporté** | **Commentaire**                                                        |
| ------------------------------------ | ----------- | ---------------------------------------------------------------------- |
| Background image (et attributs liés) | oui         |                                                                        |
| Column break after                   | oui         | Une seule colonne uniquement (colonnes multiples non prises en charge) |
| Horizontal alignment                 | oui         |                                                                        |
| Page break after                     | oui         |                                                                        |
| Page break inside                    | oui         |                                                                        |
| Section break after                  | non         |                                                                        |
| Bottom carry-over rows               | non         |                                                                        |

### Cellules de tableau 

| **Attribut/Fonctionnalité**              | **Exporté** | **Commentaire** |
| ---------------------------------------- | ----------- | --------------- |
| Background image (et attributs relatifs) | oui         |                 |
| Height                                   | oui         |                 |
| Vertical align                           | oui         |                 |
| Width                                    | oui         |                 |

### Ligne de tableau 

| **Attribut/Fonctionnalité**          | **Exporté** | **Commentaire**                                                                   |
| ------------------------------------ | ----------- | --------------------------------------------------------------------------------- |
| Background image (et attributs liés) | oui         |                                                                                   |
| Column break after                   | oui         | Une seule colonne seulement (les colonnes multiples ne sont pas prises en charge) |
| Height                               | oui         |                                                                                   |
| Page break after                     | oui         |                                                                                   |

### Autres fonctionnalités 

| **Attribut/Fonctionnalité**  | **Exporté** | **Commentaire**                   |
| ---------------------------- | ----------- | --------------------------------- |
| 4D formulas                  | non         | Calculées et gelées pour l'export |
| 4D method links              | non         |                                   |
| Bookmarks and bookmark links | oui         |                                   |
| URL links                    | oui         |                                   |