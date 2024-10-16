---
id: export-structure
title: EXPORT STRUCTURE
slug: /commands/export-structure
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT STRUCTURE.Syntax-->**EXPORT STRUCTURE** ( *structureXML* {; *format*} )<!-- END REF-->
<!--REF #_command_.EXPORT STRUCTURE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| structureXML | Text | &#8592; | Export de la définition XML de la structure de la base 4D |
| format | Text | &#8594;  | Export format: xml format (default) or html format |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXPORT STRUCTURE.Summary-->La commande **EXPORT STRUCTURE** exporte la définition de la structure de la base 4D courante dans exportedStructure.<!-- END REF-->

Passez dans exportedStructure la variable texte destinée à stocker la définition de la structure. La définition exportée inclut les tables, les champs, les index et les liens, ainsi que leurs attributs et toutes les caractéristiques nécessaires à la description complète de la structure. Les éléments invisibles sont exportés avec l'attribut correspondant. Les éléments supprimés, cependant, ne sont pas exportés. 

Par défaut, si vous omettez le paramètre format, la commande exporte la définition de la structure au format XML. Sinon, vous pouvez passer l'une des constantes suivantes dans le paramètre format :

| Constante   | Valeur |
| ----------- | ------ |
| html format | html   |
| xml format  | xml    |

La commande génère le même code XML ou HTML que la commande de menu **Exporter > Définition de structure vers le fichier XML... ou Exporter > Définition de structure vers le fichier HTML**... (voir *Exporter et importer des définitions de structure*).

* **format** **xml** : la "grammaire" interne des définitions de structures 4D est documentée via des fichiers DTD - également utilisés pour la validation des fichiers XML. Les fichiers DTD utilisés par 4D sont regroupés dans le dossier **DTD**, situé à côté de l'application 4D. Les fichiers **base\_core.dtd** et **common.dtd** sont utilisés pour les définitions de structure. Pour plus d'informations, vous pouvez consulter ces fichiers ainsi que les commentaires qu'ils contiennent.  
Une définition de structure exportée au format XML peut être importée dans une autre base de données (voir [IMPORT STRUCTURE](import-structure.md)).
* **format html** : la commande génère un code HTML brut qui inclut des références à un dossier contenant des ressources externes telles que des images ou du css, nécessaires à la représentation HTML. Si vous souhaitez enregistrer ce code dans une page HTML à afficher dans un navigateur, vous pouvez réutiliser le dossier créé par l'option de menu **Exporter > Définition de structure vers le fichier HTML**..., ou créer votre propre dossier de ressources.

#### Exemple 1 

Vous voulez exporter la structure de la base courante dans un fichier texte :

```4d
 var $vTStruc : Text
 EXPORT STRUCTURE($vTStruc)
 TEXT TO DOCUMENT("myStructure.xml";$vTStruc)
```

#### Exemple 2 

Vous voulez exporter la structure de la base courante au format html :

```4d
 var $vHtml : Text
 EXPORT STRUCTURE($vHtml;html format)
 File("/PACKAGE/myProject Structure Export/myProject.html").setText($vHtml)
```

#### Voir aussi 

[IMPORT STRUCTURE](import-structure.md)  