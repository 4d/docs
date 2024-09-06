---
id: writeprointerface
title: 4D Write Pro Interface
---

L'interface de 4D WritePro offre un ensemble de palettes, qui permettent aux utilisateurs de personnaliser facilement un document 4D Write Pro.

Un développeur 4D peut facilement implémenter ces palettes dans leur application. Ainsi, les utilisateurs finaux peuvent gérer toutes les propriétés de 4D Write Pro, telles que les polices, l'alignement du texte, les signets, la mise en page des tableaux et les cadres.

La documentation principale de l'[interface 4D Write Pro](https://doc.4d.com/4Dv20/4D/20/Entry-areas.300-6263967.en.html) se trouve dans le *4D - Mode Développement*.

Vous trouverez ci-dessous la documentation de configuration de l'Assistant de table.

## Assistant de table

L'Assistant de table est là pour simplifier encore davantage la création de table basée sur les données de la base de données en utilisant des contextes, des sources de données et des formules.

L'Assistant de table, accessible aux utilisateurs finaux, charge les modèles fournis et configurés par les développeurs de 4D. Cela permet aux développeurs de personnaliser le modèle en fonction des cas d'utilisation spécifiques et des exigences métier des utilisateurs.

L'Assistant de table est fourni avec des modèles et des thèmes par défaut, que les développeurs peuvent configurer pour adapter son contenu en fonction des exigences spécifiques de l'application.

Pour implémenter l'Assistant de table dans votre application, les développeurs peuvent créer et configurer des fichiers de modèle.

### Interface de l'Assistant de table WP

L'utilisateur ouvre la boîte de dialogue de l'Assistant de table à partir de l'élément de menu "Insérer une table" dans la barre d'outils et la barre latérale de l'interface de 4D Write Pro.

![](../assets/en/WritePro/tablewizard-interface2.png)

À partir de cette interface, l'utilisateur peut sélectionner un modèle ou un tableau dans la première liste déroulante et un thème dans la deuxième.

##### Dans Colonnes :

![](../assets/en/WritePro/columns2.PNG)

Selon la sélection de l'utilisateur d'un modèle ou d'un tableau, l'utilisateur peut voir la liste des champs stockés dans le modèle (Blob et les types d'objets sont automatiquement exclus). Ensuite, ils peuvent sélectionner les colonnes à afficher dans le tableau en cochant la case devant le nom du champ et les ordonner en déplaçant et en faisant glisser la liste des champs.

##### Dans Lignes :

![](../assets/en/WritePro/rows1.PNG)

Dans l'Assistant de table, l'utilisateur peut également définir le nombre de lignes d'en-tête et de lignes supplémentaires (de 0 à 5 chacune), définir les [lignes de rupture](https://doc.4d.com/4Dv20/4D/20/Handling-tables.200-6229469.fr.html#6233076) (lignes de synthèse) au-dessus ou en dessous de la ligne de données, et choisir d'afficher/masquer les [lignes de report](https://doc.4d.com/4Dv20/4D/20/Handling-tables.200-6229469.fr.html#6236686).

In addition, the user has the possibility to choose the table's behavior when its datasource is empty with the following options: Show data row, Hide date row, Hide table, Show placeholder row.

##### Dans Affichage :

![](../assets/en/WritePro/display2.PNG)

L'utilisateur ajuste le niveau de zoom selon ses préférences en sélectionnant l'option souhaitée dans une liste déroulante, utilise des boutons radio pour afficher les formules ou les données pour une présentation claire, et choisit d'afficher une règle horizontale à l'aide d'une case à cocher.

Après avoir finalisé la création et la personnalisation de la table, l'utilisateur peut cliquer sur le bouton **Insérer** pour ajouter la table à son document WP.

Une fois que la table a été intégrée dans le document, l'utilisateur peut personnaliser son style. Les outils de mise en forme de la barre d'outils et de la barre latérale sont toujours disponibles.

### WP Table Wizard template configuration

La configuration des modèles inclut:

- Définir des tables et des champs ainsi que préparer des formules adaptées à l'application à partir du [fichier de modèle](#template-files).
- Traduction des noms de table, de champ et de formule à partir du [fichier de traduction](#translation-files).
- Conception de styles graphiques et de thèmes personnalisés à partir du [fichier de thème](#theme-files).

These three types of files contribute to the configuration of the Table Wizard, and while each serves a distinct purpose, none of them are considered essential components.

#### Template files

Le fichier de modèle vous permet de définir les éléments suivants :

- the formula that returns an entity selection used as the table's data source,
- the break formulas (if any break row can be inserted)
- the dataclass attributes that can be used as table columns,
- the formulas available as contextual menus inside break rows, carry-over row, placeholder row or extra rows.

Le fichier modèle doit être stocké dans un dossier "[`Resources`](../Project/architecture.md#resources)/4DWP_Wizard/Templates" dans votre projet.

The template file in JSON format contains the following attributes:

| Attribut                             | Type       | Obligatoire | Description                                                                                                                                                                                              |
| :----------------------------------- | :--------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tableDataSource                      | Text       | x           | Formula of table data source                                                                                                                                                                             |
| colonnes                             | Collection | x           | Collection of table columns                                                                                                                                                                              |
| columns.check        | Text       | x           | True when the column is already checked in the template editor. False when the column is unchecked in the template editor.                                               |
| columns.header       | Text       | x           | Label shown to the user                                                                                                                                                                                  |
| columns.source       | Text       | x           | Formula                                                                                                                                                                                                  |
| ruptures/sauts                       | Collection |             | Collection of break objects. The order of the breaks is important. It corresponds to the order in the document when the breaks are above the data lines. |
| breaks.label         | Text       | x           | Label shown to the user                                                                                                                                                                                  |
| breaks.source        | Text       | x           | Formula                                                                                                                                                                                                  |
| breakFormulas                        | Collection |             | Collection of formula objects applicable to break rows                                                                                                                                                   |
| breakFormulas.label  | Text       | x           | Label shown to the user                                                                                                                                                                                  |
| breakFormulas.source | Text       | x           | Formula                                                                                                                                                                                                  |
| bcorFormulas                         | Collection |             | Collection of formula objects applicable to bottom carry over rows                                                                                                                                       |
| bcorFormulas.label   | Text       | x           | Label shown to the user                                                                                                                                                                                  |
| bcorFormulas.source  | Text       | x           | Formula                                                                                                                                                                                                  |
| extraFormulas                        | Collection |             | Collection of formula objects applicable to extra rows                                                                                                                                                   |
| extraFormulas.label  | Text       | x           | Label shown to the user                                                                                                                                                                                  |
| extraFormulas.source | Text       | x           | Formula                                                                                                                                                                                                  |
| placeholderFormulas                  | Collection |             | Collection of formula objects that are inserted in the placeholder row                                                                                                                                   |

:::note Langue française

Si votre application est susceptible d'être exécutée sur un 4D avec une langue définie en français, assurez-vous d'utiliser [tokens](https://doc.4d.com/4Dv20/4D/20/Using-tokens-in-formulas.300-6237731.en.html) dans vos formules afin qu'elles soient correctement interprétées quelle que soit la configuration de la langue de l'utilisateur.

:::

##### Exemple

Here's a brief example of what your JSON file might look like:

```json
{
    "tableDataSource": "ds.People.all().orderBy(\"toCompany.name asc, continent asc, country asc, city asc\")",
    "columns": [{
            "check": true,
            "header": "Firstname",
            "source": "This.item.firstname"
        }, {
            "check": true,
            "header": "Lastname",
            "source": "This.item.lastname"
        }, {
            "check": true,
            "header": "Salary",
            "source": "String(This.item.salary;\"###,###.00\")"
        }
    ],
    "breaks": [{
            "label": "Company",
            "source": "This.item.toCompany.name"
        }
    ],
    "breakFormulas": [{
            "label": "Company",
            "source": "This.item.toCompany.name"
	}, {
            "label": "Sum of salaries",
            "source": "String(This.breakItems.sum(\"salary\"); \"###,###.00\")"
        }
    ],
    "bcorFormulas": [{
            "label": "Sum of salaries",
            "source": "String(This.tableData.sum(\"salary\"); \"###,###.00\")"
        }
    ],
    "extraFormulas": [{
            "label": "Sum of salaries",
            "source": "String(This.tableData.sum(\"salary\"); \"###,###.00\")"
        }
    ]
}

```

#### Translation files

Translation files translate the names of templates, themes, tables, fields, and formulas. Ces fichiers sont ajoutés au dossier "[`Resources`](../Project/architecture.md#resources)/4DWP_Wizard/Translations" de votre projet.

Each translation file must be named with the corresponding language code (for example "en" for English or "fr" for French).

The translation file in JSON format contains the following attributes:

| Attribut  | Type       | Obligatoire | Description                                                                                              |
| :-------- | :--------- | :---------- | :------------------------------------------------------------------------------------------------------- |
| tables    | Collection |             | Collection of translated table objects                                                                   |
| fields    | Collection |             | Collection of translated field objects                                                                   |
| formulas  | Collection |             | Collection of translated formula objects                                                                 |
| fileNames | Collection |             | Collection of translated fileName objects (applicable to the theme and template name) |

Whitin each one of these attribute, the translation object includes the following attributes:

| Attribut    | Type | Obligatoire | Description                             |
| :---------- | :--- | :---------- | :-------------------------------------- |
| original    | Text | x           | Original text intended for translation  |
| translation | Text | x           | Translated version of the original text |

Defining these attributes within the translation object ensures proper organization and alignment between the source and translated content.

If the template name or the formula (break, carry-over row, or extra) exists in the translated file, its translation is applied in the Table Wizard. In addition, only the table defined within the translation file is displayed and translated.

The translation file serves an additional role when a user selects a table in the interface. It can filter the tables and fields proposed to the user. Par exemple, pour masquer les IDs de table, ce comportement est similaire aux commandes `SET TABLE TITLES` et `SET FIELD TITLES`.

##### Exemple

```json
{
    "tables": [{
            "original": "People",
            "translation": "Personne"
        }
    ],
    "fields": [{
            "original": "lastname",
            "translation": "Nom"
        }, {
            "original": "firstname",
            "translation": "Prénom"
        }, {
            "original": "salary",
            "translation": "Salaire"
        }, {
            "original": "company",
            "translation": "Société"
        }
    ],
    "formulas": [{
            "original": "Sum of salary",
            "translation": "Somme des salaires"
        }
    ]
}
    
```

#### Theme files

A list of themes is provided by default in the 4D Write Pro Interface component, such as "Arial", "CourierNew" and "YuGothic", available in multiple variations like "Blue" and "Green". Cependant, vous pouvez créer votre propre thème en le plaçant dans le dossier "[`Resources`](../Project/architecture.md#resources)/4DWP_Wizard/Themes" de votre projet.

The theme file in JSON format contains the following attributes:

| Attribut       | Type   | Obligatoire | Description                                                                                                                                                                                                                       |
| :------------- | :----- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| default        | Object |             | Object containing the default style applicable to all rows.                                                                                                                                                       |
| table          | Object |             | Object containing the style definition applicable to the table.                                                                                                                                                   |
| rows           | Object |             | Object containing the style definition applicable to all rows.                                                                                                                                                    |
| cells          | Object |             | Object containing the style definition applicable to all cells.                                                                                                                                                   |
| header1        | Object |             | Object containing the style definition applicable to the first header row.                                                                                                                                        |
| header2        | Object |             | Object containing the style definition applicable to the second header row.                                                                                                                                       |
| header3        | Object |             | Object containing the style definition applicable to the third header row.                                                                                                                                        |
| header4        | Object |             | Object containing the style definition applicable to the fourth header row.                                                                                                                                       |
| header5        | Object |             | Object containing the style definition applicable to the fifth header row.                                                                                                                                        |
| headers        | Object |             | Objet contenant la définition de style applicable aux lignes d'en-tête, si un en-tête spécifique (comme header1, header2...) n'est pas défini. |
| data           | Object |             | Object containing the style definition applicable to the repeated data row.                                                                                                                                       |
| break1         | Object |             | Object containing the style definition applicable to the first break row.                                                                                                                                         |
| break2         | Object |             | Object containing the style definition applicable to the second break row.                                                                                                                                        |
| break3         | Object |             | Object containing the style definition applicable to the third break row.                                                                                                                                         |
| break4         | Object |             | Object containing the style definition applicable to the fourth break row.                                                                                                                                        |
| break5         | Object |             | Object containing the style definition applicable to the fifth break row.                                                                                                                                         |
| ruptures/sauts | Object |             | Object containing the style definition applicable to the break rows, if a specific break (like break1, break2...) n'est pas défini.            |
| bcor           | Object |             | Object containing the style definition applicable to the bottom carry-over row.                                                                                                                                   |
| placeholder    | Object |             | Object containing the default style applicable to the placeholder row.                                                                                                                                            |

For every attribute used in your JSON file (header, data, carry-over, summary, and extra rows), you can define the following WP attributes, mentionned with their [corresponding WP constant](https://doc.4d.com/4Dv20/4D/20/4D-Write-Pro-Attributes.300-6229528.en.html):

| WP attributes   | Corresponding WP constant |
| :-------------- | :------------------------ |
| textAlign       | wk text align             |
| backgroundColor | wk background color       |
| borderColor     | wk border color           |
| borderStyle     | wk border style           |
| borderWidth     | wk border width           |
| font            | wk font                   |
| color           | wk font color             |
| fontFamily      | wk font family            |
| fontSize        | wk font size              |
| padding         | wk padding                |

##### Exemple

```json
{
    "default": {
           "backgroundColor": "#F0F0F0",
           "borderColor": "#101010",
           "borderStyle": 1,
           "borderWidth": "0.5pt",
           "font": "Times New Roman",
           "color": "#101010",
           "fontFamily": "Times New Roman",
           "fontSize": "7pt",
           "padding": "2pt"
    },
    "table": {
           "backgroundColor": "#E1EAF3"
    },
    "header1": {
           "textAlign": 2,
           "borderColor": "#41548F",
           "borderWidth": "1.5pt",
           "backgroundColor": "#979BA9",
           "color": "#F4F4FF",
           "font": "Times New Roman Bold"
    },
    "data": {
           "fontSize": "13pt",
           "textAlign": 0
    },
    "break1": {
           "textAlign": 2,
           "fontSize": "15pt"
    }
}
    
```

#### Voir également

[4D Write Pro - Table Wizard (vidéo tutorial)](https://www.youtube.com/watch?v=2ChlTju-mtM)
