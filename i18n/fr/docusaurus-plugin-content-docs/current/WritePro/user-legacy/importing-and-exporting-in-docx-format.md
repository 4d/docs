---
id: importing-and-exporting-in-docx-format
title: Exporter au format docx
displayed_sidebar: docs
---

#### 

4D Write Pro peut à la fois importer et exporter des documents au format .docx. Ce format est pris en charge par les applications de traitement de texte telles que Microsoft Word.

**Note de compatibilité :** La prise en charge des documents 4D Write Pro exportés au format .docx est uniquement certifiée pour Microsoft Word 2010 et les versions plus récentes. Les anciennes versions, notamment Microsoft Word 2007, sont susceptibles de ne pas pouvoir ouvrir les documents.

#### Comment importer au format .docx 

Les documents au format .docx peuvent être importés dans 4D Write Pro avec la commande [WP Importer document](../commands/wp-importer-document). Pour plus d'informations, reportez-vous à la description de cette commande.

##### Changements de comportement 

Si la majorité des paramètres .docx sont conservés, certains paramètres sont connus pour être non pris en charge ou pour se comporter différemment dans 4D Write Pro. Il s'agit des paramètres suivants :

###### Alignement / Configuration 

| **Paramètre**       | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Anchored text areas | Les zones de texte ancrées sont importées par défaut en tant que zones de texte (elles peuvent également être ignorées ou importées en tant que texte en ligne, voir l'option de la commande [WP Importer document](../commands/wp-importer-document)). Seules les zones de texte simples peuvent être importées. Les zones de texte en ligne sont importées comme étant ancrées dans le premier niveau. Les zones de texte ancrées avec du texte autour sont importées avec leurs propriétés d'habillage (exception : l'option d'habillage .docx "tight" est importée en tant qu'habillage carré). |
| Paragraph layout    | Seules les mises en page de texte occidental sont prises en charge. Les styles de paragraphe distribués, thaïlandais et asiatiques ne sont pas pris en charge.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Page Size           | Les différentes tailles de page par section ne sont pas prises en charge. Seule la taille de la page de la première section est importée.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

###### Arrière-plan 

| **Paramètre** | **Description**    |
| ------------- | ------------------ |
| Watermark     | Non pris en charge |

###### Expressions 

| **Paramètre**     | **Description**                                        |
| ----------------- | ------------------------------------------------------ |
| MS Word equations | Non pris en charge. Les données ne sont pas importées. |
| MS Word charts    | Non pris en charge. Les données ne sont pas importées. |

###### Listes 

| **Paramètre**      | **Description**                                                                                                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hierarchical lists | Les listes à plusieurs niveaux ne sont pas prises en charge. Elles sont converties en listes à un seul niveau, de sorte que l'apparence et/ou la numérotation des listes puissent être différentes. |

###### Images 

| **Paramètre**        | **Description**                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| DrawingML shapes     | Seules les images DrawingML simples (en ligne ou ancrées) sont importées. Les formes DrawingML complexes ne sont pas prises en charge.              |
| VML shapes or images | Non pris en charge. VML est obsolète dans MS Word et ne doit pas être utilisé dans des documents créés avec MS Word 2010 ou une version antérieure. |
| 3D models            | Non pris en charge, mais la dernière image 2D rendue par le modèle 3D peut être importée si elle est présente dans le fichier .docx.                |
| SmartArt             | Non pris en charge.                                                                                                                                 |

###### Références 

| **Paramètre** | **Description**                          |
| ------------- | ---------------------------------------- |
| Comments      | Non pris en charge. Contenu non importé. |
| Footnotes     | Non pris en charge. Contenu non importé. |

###### Espacement 

| **Paramètre**           | **Description**                                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| "At least" line spacing | Non pris en charge. L'espacement "at least" entre les lignes est converti en un espacement fixe (simple). |
| Fit text                | Non pris en charge. Le style 4D Write Pro normal est utilisé.                                             |

###### Tableaux 

| **Paramètre** | **Description**                                          |
| ------------- | -------------------------------------------------------- |
| Tables        | Les tableaux contigus ne fusionnent pas automatiquement. |

###### Texte 

| **Paramètre** | **Description**                                                                                                                                                                                                                                                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Themes        | Les thèmes de texte ne sont pas importés. Si la définiton d'une couleur ou d'une police fait référence à une couleur ou à une police dans un thème, la dernière couleur ou police calculée sera utilisée. Sinon, la couleur ou la police définie dans le thème est utilisée. |

##### Journal d'import 

Lors de l'import au format .docx dans 4D Write Pro, un objet journal est créé et inclus dans l'objet document importé. Cet objet peut être récupéré via l'attribut personnalisé "importLog" (ou la constante wk import log) :

```4d
 $myDoc:=WP Importer document("test.docx")
 Si($myDoc#Null)
    var $log : Objet
    $log:=$myDoc[wk import log]
 Fin de si
```

L'objet journal d'import contient les propriétés suivantes :

| Constante     | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk import log | Objet log contenant des informations sur l'opération d'import .docx. Les propriétés sont en lecture seule et ne peuvent pas être définies :  <table> <tbody> <tr> <td>**Propriété**</td> <td> </td> <td>**Type**</td> <td>**Description**</td> </tr> <tr> <td>status</td> <td> </td> <td>Texte</td> <td>Statut de l'import :<br/> successful - le document est importé dans 4D Write Pro failed - an empty 4D Write Pro document is returned  </td> </tr> <tr> <td>developer</td> <td> </td> <td>Collection</td> <td>Collection d'objet(s) message pour les développeurs 4D Write Pro.</td> </tr> <tr> <td> </td> <td>\[ \].type</td> <td>Texte</td> <td>Le type de message enregistré :<br/> info warning error  </td> </tr> <tr> <td> </td> <td>\[ \].message</td> <td>Texte</td> <td>Message concernant l'opération d'import.</td> </tr> <tr> <td>user</td> <td> </td> <td>Collection</td> <td>Collection d'objet(s) message pour les utilisateurs de 4D Write Pro.. </td> </tr> <tr> <td> </td> <td>\[ \].type</td> <td>Texte</td> <td>Le type de message enregistré :<br/> info warning  </td> </tr> <tr> <td> </td> <td>\[ \].messageShort</td> <td>Texte</td> <td>Court message sur l'opération d'import.</td> </tr> <tr> <td> </td> <td>\[ \].messageLong</td> <td>Texte</td> <td>Long message sur l'opération d'import.</td> </tr> </tbody> </table> **Attention :** *importLog* est un attribut personnalisé, la constante wk import log ne peut donc pas être utilisée par les commandes [WP FIXER ATTRIBUTS](../commands/wp-fixer-attributs), [WP LIRE ATTRIBUTS](../commands/wp-lire-attributs) ou [WP REINITIALISER ATTRIBUTS](../commands/wp-reinitialiser-attributs) (pour plus d'informations, voir *Utiliser des attributs personnalisés*). |

#### Exporter au format .docx 

Les objets 4D Write Pro permettent d'exporter des documents 4D Write Pro au format .docx de deux manières :

* en tant que fichier .docx exporté sur le disque ; utilisez la commande [WP EXPORTER DOCUMENT](../commands/wp-exporter-document).
* en tant que BLOB .docx exporté dans une variable ; utilisez la commande [WP EXPORTER VARIABLE](../commands/wp-exporter-variable).

Pour plus d'informations, veuillez lire la description de ces commandes.

##### Changements de comportement 

Si la majorité des paramètres 4D Write Pro sont maintenus, certains ne sont pas pris en charge ou fonctionnent différemment dans Microsoft Word. Il s'agit des paramètres suivants :

###### Alignement / Configuration 

| **Paramètre**                                                                                                             | **Paragraphes**                                                                                                                                                                                                                                                                              | **Sections**                                                                                        | **Images** |
| ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| Ancrage                                                                                                                   | Dans Microsoft Word, les images ancrées sont placées relativement à l'angle supérieur gauche de la page et du premier paragraphe. Les images peuvent alors s'afficher à des endroits non souhaités en raison des différences de configuration du texte entre 4D Write Pro et Microsoft Word. |                                                                                                     |            |
| Les zones de texte ancrées dans la zone intégrée ne sont pas exportées. Le rendu peut être différent dans Microsoft Word. |                                                                                                                                                                                                                                                                                              |                                                                                                     |            |
| Alignement vertical                                                                                                       | Non pris en charge par Microsoft Word (tous les éléments seront alignés en haut)                                                                                                                                                                                                             | Non pris en charge pour les images en ligne (tous les éléments seront alignés sur la ligne de base) |            |

###### Fond 

| Paramètre                  | **Paragraphes**                                                                                                                   | **Sections**                                                                                                       | **Images**                                                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Clipping du fond           | Non pris en charge par Microsoft Word (La couleur de fond couvre entièrement le paragraphe, exceptées les bordures et les marges) | Non prises en charge par Microsoft Word (le clipping de fond sera équivalent à la zone des marges intérieures)     |                                                                                                                                                  |
| Image de fond              | Non pris en charge par Microsoft Word                                                                                             | Plusieurs images/couleurs de fond non prises en charge par Microsoft Word (converties en images ou formes ancrées) | Microsoft Word affiche soit une couleur de fond soit une image de fond. Si une image de fond est définie, la couleur de fond sera "transparent". |
| Répétition d'image de fond | Blocs horizontaux ou verticaux convertis en blocs entiers dans Microsoft Word                                                     | Blocs horizontaux ou verticaux convertis en blocs entiers dans Microsoft Word                                      |                                                                                                                                                  |
| Origine du fond            | La zone d'origine prend la même valeur que celle de la zone de clipping du fond.                                                  | Non prise en charge par Microsoft.                                                                                 |                                                                                                                                                  |

  
###### Bordures 

| **Paramètre**                         | **Paragraphes**                                                                                                                                                                                                                | **Sections**                                                                                             | **Images** |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ---------- |
| Couleur de bordure                    | Microsoft Word ne prend pas en charge les bords de différentes couleurs. Le premier bord d'image 4D Write Pro défini (dans cet ordre : en haut, à droite, en bas, à gauche) sera utilisé pour toutes les bordures d'une image. |                                                                                                          |            |
| Rayon de bordure (bordures arrondies) | Non pris en charge par Microsoft Word                                                                                                                                                                                          |                                                                                                          |            |
| Largeur de bordure                    | La largeur maximale sous Microsoft Word est de 12pt; la taille des bordures dépassant 12 pt sera réduite.                                                                                                                      | La largeur maximale sous Microsoft Word est de 12pt, la taille des bordures dépassant 12pt sera réduite. |            |

###### Expressions 

| **Paramètre** | **Paragraphes**                                                                                                                                                                                                                                                                                                 | **Sections** | **Images** |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| Expressions   | Seules les expressions simples de 4D telles que "Date du jour" ou "Heure courante", ou les variables locales propres à 4D Write Pro ($wp\_title, $wp\_pageNumber, etc.) sont converties en champs Microsoft Word. Les autres expressions 4D sont calculées et converties en texte ou en images durant l'export. |              |            |

###### Listes 

| **Paramètre**        | **Paragraphes**                                                                                                                       | **Sections** | **Images** |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| Indentation          | Indentation à zéro pour les éléments de liste (Microsoft Word convertit l'indentation pour les éléments de liste en retrait suspendu) |              |            |
| Type liste numérotée | Greek, Armenian et Georgian sont convertis en décimaux et les hiragana sont convertis en katakana dans Microsoft Word.                |              |            |

###### Images 

| **Paramètre** | **Paragraphes**                                                                                  | **Sections** | **Images** |
| ------------- | ------------------------------------------------------------------------------------------------ | ------------ | ---------- |
| SVG           | Non pris en charge par Microsoft Word (les images au format SVG seront converties au format PNG) |              |            |

###### Tailles 

| Paramètre                  | **Paragraphes**                                                                             | **Sections** | **Images** |
| -------------------------- | ------------------------------------------------------------------------------------------- | ------------ | ---------- |
| Hauteur minimale           | Non prise en charge par Microsoft Word (la hauteur est gérée automatiquement)               |              |            |
| Largeur / Largeur minimale | Non prise en charge par Microsoft Word (la largeur du paragraphe est gérée automatiquement) |              |            |

###### Espacement 

| **Paramètre**      | **Paragraphes**                                                                                                                           | **Sections**                                                                                                                              | **Images** |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Marges intérieures | La taille maximale des marges intérieures dans Microsoft Word est de 31pt ; la taille des marges intérieures dépassant 31pt sera réduite. | La taille maximale des marges intérieures sous Microsoft Word est de 31pt ; la taille des marges intérieures dépassant 31pt sera réduite. |            |

###### Tableaux 

| **Fonctionnalité**                         | **Description** |
| ------------------------------------------ | --------------- |
| Carry-over rows (lignes à reporter en bas) | Non exporté.    |

###### Tabulations 

| **Paramètre**         | **Paragraphes**                                                                                                                                             | **Sections** | **Images** |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- |
| Tabulation par défaut | Non prise en charge par Microsoft Word (seront convertis en tabulations absolues)                                                                           |              |            |
| Caractères de suite   | Microsoft Word prend en charge les caractères de suite "point" (...), "tiret" (---), et "tiret bas" (\_\_\_) ; tous les autres seront convertis en "aucun". |              |            |

###### Texte 

| Paramètre           | **Paragraphes**                                                                                                                                                    | **Sections**                                                                                                           | **Images** |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ---------- |
| Barré               | La différence de couleur entre celle du trait et celle du texte n'est pas prise en charge par Microsoft Word. Seuls les styles plein et double sont pris en charge |                                                                                                                        |            |
| Feuilles de style   | Les feuilles de style des paragraphes sont converties en styles de paragraphes.                                                                                    |                                                                                                                        |            |
| Alignement du texte | Sous Microsoft Word les espaces sont comprimés, ce qui est susceptible de modifier la configuration du texte justifié.                                             | Sous Microsoft Word, les espaces sont comprimés, ce qui est susceptible de modifier la configuration du texte justifié |            |
| Ombre du texte      | Dans Microsoft Word, l'ombre 4D Write Pro sera floue et décalée, en utilisant la couleur par défaut.                                                               |                                                                                                                        |            |
| Soulignement        | Le soulignement semi-transparent est converti en plein.                                                                                                            |                                                                                                                        |            |