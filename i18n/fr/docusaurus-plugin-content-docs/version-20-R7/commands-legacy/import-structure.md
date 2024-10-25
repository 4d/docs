---
id: import-structure
title: IMPORT STRUCTURE
slug: /commands/import-structure
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT STRUCTURE.Syntax-->**IMPORT STRUCTURE** ( *structureXML* )<!-- END REF-->
<!--REF #_command_.IMPORT STRUCTURE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| structureXML | Text | &#8594;  | Définition XML de la structure de la base 4D |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.IMPORT STRUCTURE.Summary-->La commande **IMPORT STRUCTURE** vous permet d'importer, dans la base courante, la définition XML de la structure de la base 4D passée dans le paramètre *structureXML*.<!-- END REF--> 

Le paramètre *structureXML* doit contenir une définition valide de structure 4D au format XML. Pour obtenir ce type de définition, vous pouvez utiliser l'un des moyens suivants :

* exécuter la commande [EXPORT STRUCTURE](export-structure.md),
* sélectionner la commande de menu **Exporter > Définition de structure vers le fichier XML...** disponible dans l'interface du mode Développement de 4D (voir *Exporter et importer des définitions de structure*),
* créer ou modifier un fichier XML personnalisé basé sur les DTD publiques présentes dans le dossier "DTD" de l'application 4D.

La définition de structure importée est ajoutée à la structure déjà ouverte et est affichée dans l'éditeur de Structure standard de 4D parmi les tables existantes (s'il y en a). Si une table importée a le même nom qu'une table locale, une erreur est générée et l'opération d'import est annulée. 

Vous pouvez également importer la structure dans une base vide, et ainsi créer une nouvelle base. 

Une erreur est générée si la structure est en mode compilé ou en lecture seulement. 

Cette commande ne peut pas être appelée depuis une application 4D en mode distant.

#### Note pour le déploiement 

Étant donné que cette commande modifie la structure de la base de données, elle ne peut pas être utilisée dans une application packagée en lecture seule (fichier .4dc installé dans le dossier Program Files ou fichier .4dz).

#### Exemple 

Vous souhaitez importer une définiton de structure stockée sur disque dans la base courante :

```4d
 $struc:=Document to text("c:\\4DStructures\\Employee.xml")
 IMPORT STRUCTURE($struc)
```

#### Voir aussi 

[EXPORT STRUCTURE](export-structure.md)  