---
id: volume-list
title: VOLUME LIST
slug: /commands/volume-list
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME LIST.Syntax-->**VOLUME LIST** ( *volumes* )<!-- END REF-->
<!--REF #_command_.VOLUME LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| volumes | Text array | &#8592; | Noms des volumes actuellement montés |

<!-- END REF-->

#### Description 

<!--REF #_command_.VOLUME LIST.Summary-->**VOLUME LIST** remplit le tableau *volumes*, de type texte, avec les noms des volumes définis (Windows) ou montés (Mac OS) sur votre machine.<!-- END REF-->

* Sous Mac OS, elle retourne la liste des volumes visibles au niveau du Finder. Seuls les noms des volumes sont retournés (par exemple "MacHD", "BootCamp"...).
* Sous Windows, elle retourne la liste des volumes couramment définis, même si le volume n'est pas physiquement présent (par exemple un volume "E:\\" sera retourné même s'il n'y a pas de CD ou de DVD dans le lecteur). Les noms des volumes sont suivis du caractère séparateur de dossiers ("C:\\").

#### Exemple 

A l'aide de la zone de défilement *ttVolumes*, vous voulez afficher la liste des volumes définis ou montés sur votre machine :

```4d
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(ttVolumes;0)
       VOLUME LIST(ttVolumes)
 
  // ...
 End case
```

#### Voir aussi 

[DOCUMENT LIST](document-list.md)  
[FOLDER LIST](folder-list.md)  
[VOLUME ATTRIBUTES](volume-attributes.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 471 |
| Thread safe | &check; |


