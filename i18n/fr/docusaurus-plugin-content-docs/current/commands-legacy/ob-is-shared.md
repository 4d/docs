---
id: ob-is-shared
title: OB Is shared
slug: /commands/ob-is-shared
displayed_sidebar: docs
---

<!--REF #_command_.OB Is shared.Syntax-->**OB Is shared** ( *toCheck* ) -> Résultat<!-- END REF-->
<!--REF #_command_.OB Is shared.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| toCheck | Object, Collection | &srarr; | Object or collection or to check |
| Résultat | Boolean | &larr; | True if the object or collection is shareable, False if it is alterable |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Is shared.Summary-->La commande **OB Is shared** retourne **Vrai** si l'objet ou la collection *toCheck* est partagé , sinon **Faux** (voir *Objets partagés et collections partagées*).<!-- END REF-->

Cette commande retourne **Vrai** si vous passez une sélection d'entité partageable dans *toCheck* (voir ). 
