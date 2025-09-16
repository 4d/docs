---
id: importing-4d-write-documents
title: Import de documents 4D Write
displayed_sidebar: docs
---

#### 

Une des principales fonctions du nouvel objet 4D Write Pro est sa capacité à importer et à convertir les documents 4D Write existants. Ce principe vous permet de migrer les applications qui s'appuient actuellement sur le plug-in 4D Write.

**Notes de compatibilité :** 

* Seuls les documents 4D Write de dernière génération ("4D Write v7") sont pris en charge.
* Le copier-coller d'un document 4D Write vers une zone 4D Write Pro n'est pour le moment pas pris en charge. L'importation d'un document 4D Write peut être uniquement effectuée via les commandes du langage de 4D Write Pro.
* Les retours chariots contenus dans les formules ont un comportement différent dans 4D Write et 4D Write Pro. Dans 4D Write, ils sont toujours interprétés comme des sauts de paragraphe, tandis que dans 4D Write Pro, ils sont interprétés par défaut comme des sauts de ligne. Afin de maintenir les retours chariots comme des sauts de paragraphe dans les formules des documents 4D Write importés, utilisez, après la conversion :  
```4d  
 WP FIXER ATTRIBUTS(wp;wk break paragraphs in formulas;wk true)  
```  
    
Pour plus d'informations, reportez-vous à *Gérer des formules*.

#### Comment importer un document 4D Write ? 

Les objets 4D Write Pro permettent d'importer des documents 4D Write de deux manières :

* Pour les fichiers 4D Write stockés sur disque, vous pouvez utiliser la commande [WP Importer document](../commands/wp-importer-document),
* Pour les fichiers 4D Write stockés dans des champs BLOB, vous pouvez utiliser la commande [WP Nouveau](../commands/wp-nouveau).

Pour plus d'informations, veuillez vous reporter aux descriptions de ces commandes.

#### Quelles propriétés 4D Write sont importées ? 

Afin de faciliter votre migration du plug-in 4D Write vers 4D Write Pro, nous voulons conserver autant de fonctions 4D Write que possible dans les objets 4D Write Pro.

Ce paragraphe liste les propriétés du plug-in 4D Write qui sont actuellement récupérées dans une zone 4D Write Pro après un import effectué à l'aide de la commande [WP Importer document](../commands/wp-importer-document) ou [WP Nouveau](../commands/wp-nouveau). 

Notez que quelques différences de rendu pourront apparaître, qui ne seront pas nécessairement considérées comme des bogues. Par exemple, des différences peuvent être liées à la police par défaut utilisée par 4D Write Pro pour les puces, ou aux conversions des caractères soulignés. 

##### Document info 

| **4D Write plug-in**         | **4D Write Pro**                                             |
| ---------------------------- | ------------------------------------------------------------ |
| Date & heure de création     | Disponible                                                   |
| Date & heure de modification | Disponible                                                   |
| Verrouillé                   | Non disponible (utiliser la propriété d'objet lecture seule) |
| Titre                        | Disponible                                                   |
| Sujet                        | Disponible (texte brut uniquement)                           |
| Auteur                       | Disponible                                                   |
| Société                      | Disponible                                                   |
| Commentaire                  | Disponible                                                   |

##### Paramètres de vue 

| **4D Write plug-in**       | **4D Write Pro**                                                           |
| -------------------------- | -------------------------------------------------------------------------- |
| Mode affichage             | Non importé (utiliser Document/Mode d'affichage dans le menu contextuel)   |
| Règles                     | Non importé (utiliser propriété d'objet)                                   |
| Cadres texte               | Non importé (utiliser propriété d'objet)                                   |
| En-têtes                   | Non importé (utiliser propriété d'objet)                                   |
| Pieds de page              | Non importé (utiliser propriété d'objet)                                   |
| En-tête première page      | Non disponible                                                             |
| Pied de page première page | Non disponible                                                             |
| Images                     | Non disponible                                                             |
| Barres défil horiz         | Non importé (utiliser propriété d'objet Barre de défilement horiz)         |
| Barres défil vert          | Non importé (utiliser propriété d'objet Barre de défilement vert)          |
| Caractères invisibles      | Non importé (utiliser propriété d'objet)                                   |
| Références                 | Non importé (utiliser [ST FIXER OPTIONS](../../commands/st-fixer-options)) |
| Séparateur de colonne      | Disponible (à partir de 4D v17)                                            |
| Séparateur horiz           | Non disponible                                                             |
| Séparateur vert            | Non disponible                                                             |
| Wysiwyg                    | Non disponible                                                             |
| Zoom                       | Non importé (utiliser Document/Zoom dans le menu contextuel)               |

##### Paramètres de document 

| **4D Write plug-in** | **4D Write Pro**                                                       |
| -------------------- | ---------------------------------------------------------------------- |
| Unité                | Non importé (utiliser Document/Unité de mesuredans le menu contextuel) |
| Langage              | Non disponible                                                         |
| Nombre de colonnes   | Disponible (à partir de 4D v17)                                        |
| Espacement colonnes  | Disponible (à partir de 4D v17)                                        |
| Veuves & orphelins   | Disponible                                                             |
| Tabu défaut          | Disponible                                                             |
| Tabu début           | Disponible                                                             |
| Couleur lien         | Non disponible                                                         |
| Couleur lien visité  | Non disponible                                                         |

Note : Le séparateur du système (comme retourné par [LIRE FORMATAGE SYSTEME](../../commands/lire-formatage-systeme)) est utilisé comme séparateur décimal pour les tabulations décimales. Vous pouvez modifier ce paramètre à l'aide de la commande [WP FIXER ATTRIBUTS](../commands/wp-fixer-attributs). 

##### Paramètres pagination document 

| **4D Write plug-in**                            | **4D Write Pro** |
| ----------------------------------------------- | ---------------- |
| Largeur page                                    | Disponible       |
| Hauteur page                                    | Disponible       |
| Numéro première page                            | Disponible       |
| Première page en-tête pied différents           | Disponible       |
| Pages en-têtes pieds paires impaires différents | Disponible       |
| Reliure                                         | Disponible       |
| Pages opposées                                  | Disponible       |
| Mages page                                      | Disponible       |
| En-tête marge haut                              | Disponible       |
| En-tête marge bas                               | Disponible       |
| Pied de page marge haut                         | Disponible       |
| Pied de page marge bas                          | Disponible       |
| Première page marge haut                        | Disponible       |
| Première page marge bas                         | Disponible       |
| En-tête première page marge haut                | Disponible       |
| En-tête première page marge bas                 | Disponible       |
| Pied de page première page marge haut           | Disponible       |
| Pied de page première page marge bas            | Disponible       |
| Première page droite                            | Disponible       |

##### Paramètre impression document 

| **4D Write plug-in** | **4D Write Pro** |
| -------------------- | ---------------- |
| Papier               | Non disponible   |
| Orientation          | Non disponible   |
| Largeur              | Non disponible   |
| Hauteur              | Non disponible   |
| Marges utilisateur   | Non disponible   |
| Echelle              | Non disponible   |
| Résolution X         | Non disponible   |
| Résolution Y         | Non disponible   |

##### Images 

**Note de compatibilité** : 

* Les modes d'affichage des images sont automatiquement importés à partir de 4D Write Pro v19 R2, à l'aide de [WP Importer document](../commands/wp-importer-document). Vous pouvez restaurer le comportement précédent (toutes les images sont redimensionnées pour s'adapter) à l'aide de l'attribut *importDisplayMode*.
* Sous Windows, les images au format PICT Mac OS insérées dans le document 4D Write sont importées mais ne peuvent pas être restituées dans 4D Write Pro. Si vous importez un document contenant ce type d'images, il sera nécessaire de les convertir. Le format PICT n'est plus pris en charge depuis 4D v18 et ne peut plus être utilisé.

| **4D Write plug-in**            | **4D Write Pro**                                             |
| ------------------------------- | ------------------------------------------------------------ |
| X (gauche)                      | (& position :absolute) (uniquement images en page)           |
| Y (haut)                        | (& position :absolute) (uniquement images en page)           |
| Largeur                         | Disponible                                                   |
| Hauteur                         | Disponible                                                   |
| Numéro de page                  | Disponible (à partir de 4D v16 R6)                           |
| Devant                          | Disponible (à partir de 4D v16 R6)                           |
| Pas première page               | Disponible (à partir de 4D v16 R6)                           |
| Mode d'affichage (rognée, etc.) | Disponible                                                   |
| Est une expression              | Disponible pour images dans le texte (à partir de 4D v16 R5) |
| Conserver la taille             | Non importé (automatique dans 4D Write Pro)                  |

##### Propriétés de caractères 

| **4D Write plug-in**                             | **4D Write Pro (span)**             |
| ------------------------------------------------ | ----------------------------------- |
| Italique                                         | Disponible                          |
| Gras                                             | Disponible                          |
| Barré                                            | Disponible                          |
| Souligné                                         | Disponible                          |
| Ombré                                            | Disponible                          |
| Exposant ou indice                               | Disponible                          |
| Majuscules ou petites majuscules                 | Disponible                          |
| Famille de police                                | Disponible                          |
| Taille de police                                 | Disponible                          |
| Couleur texte                                    | Disponible                          |
| Couleur fond du texte                            | Disponible                          |
| Couleur soulignement                             | Disponible                          |
| Couleur barré                                    | Disponible                          |
| Couleur ombré                                    | Disponible                          |
| Propriété utilisateur                            | Non disponible                      |
| Correction orthographique (grammaire et syntaxe) | Non importée (propriété de la zone) |
| Aspect liens                                     | Non disponible                      |
| Feuille de style                                 | Disponible (à compter de 4D v18)    |

##### Propriétés paragraphes 

| **4D Write plug-in**           | **4D Write Pro** |
| ------------------------------ | ---------------- |
| Justification                  | Disponible       |
| Interligne                     | Disponible       |
| Puces                          | Disponible       |
| Marge gauche                   | Disponible       |
| Marge droite                   | Disponible       |
| Retrait alinéa                 | Disponible       |
| Style encadrement              | Disponible       |
| Couleur encadrement            | Disponible       |
| Couleur fond encadrement       | Disponible       |
| Encadrement gauche             | Disponible       |
| Encadrement droit              | Disponible       |
| Encadrement haut et inter haut | Disponible       |
| Encadrement bas et inter bas   | Disponible       |
| Espace encadrement             | Disponible       |
| Feuille de style               | Disponible       |
| Tabulations                    | Disponible       |

##### Liens hypertexte 

| **4D Write plug-in** | **4D Write Pro**                              |
| -------------------- | --------------------------------------------- |
| Lien URL             | Disponible (\*)                               |
| Lien méthode 4D      | Disponible (\*\*) (à partir de v17 R5)        |
| Lien ouvrir document | Disponible (converti en URL de fichier local) |

* (\*) À compter de 4D v16 R4, les liens URL sont convertis en attributs modifiables. Pour plus d'informations, veuillez vous reporter au paragraphe *Gestion des liens*.
* (\*\*) Les paramètres reçus dans les méthodes appelées doivent être adaptés :  
| **Paramètres** | **4D Write plug-in**                            | **4D Write Pro**                                                                                                                                                                                                                                                                                                                |  
| -------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| $1             | Entier long - Référence de la zone 4D Write     | Texte - Nom de la zone 4D Write Pro                                                                                                                                                                                                                                                                                             |  
| $2             | Texte - Étiquette du lien                       | Objet - Description du lien :.method - Nom de la méthode du lien devant être autorisée par la commande [FIXER METHODES AUTORISEES](../../commands/fixer-methodes-autorisees). .parameter - Valeur du paramètre utilisateur passée à la méthode (le cas échéant).range - Plage de l'étiquette du lien. Voir *Gestion des plages* |  
| $3             | Entier long - Paramètre utilisateur (methodRef) | \-                                                                                                                                                                                                                                                                                                                              |

##### Expressions 4D 

| **4D Write plug-in** | **4D Write Pro**   |
| -------------------- | ------------------ |
| Expression 4D        | Disponible\*       |
| Date & Heure         | Disponible         |
| Expression HTML      | Non disponible\*\* |
| Expression RTF       | Non disponible     |

\*Utilisez la commande [WP FIXER ATTRIBUTS](../commands/wp-fixer-attributs) avec l'attribut wk break paragraphs in formulas pour transformer les retours chariots retournés par les formules en sauts de paragraphe dans le document importé (sauts de ligne par défaut). Voir *Gérer des formules*).

\*\*peut être importée en tant que texte dans les balises ***##htmlBegin##*** et ***##htmlEnd##*** si vous utilisez la constante wk import html expressions as text.

##### Données texte 

| **4D Write plug-in**       | **4D Write Pro** |
| -------------------------- | ---------------- |
| Données texte principal    | Disponible       |
| Données texte en-tête      | Disponible       |
| Données texte pied de page | Disponible       |