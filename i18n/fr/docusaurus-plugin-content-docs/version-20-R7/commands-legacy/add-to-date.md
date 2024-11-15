---
id: add-to-date
title: Add to date
slug: /commands/add-to-date
displayed_sidebar: docs
---

<!--REF #_command_.Add to date.Syntax-->**Add to date** ( *date* ; *années* ; *mois* ; *jours* ) : Date<!-- END REF-->
<!--REF #_command_.Add to date.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| date | Date | &#8594;  | Date à laquelle ajouter jours, mois et années |
| années | Integer | &#8594;  | Nombre d'années à ajouter à la date |
| mois | Integer | &#8594;  | Nombre de mois à ajouter à la date |
| jours | Integer | &#8594;  | Nombre de jours à ajouter à la date |
| Résultat | Date | &#8592; | Date résultante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Add to date.Summary-->**Add to date** ajoute *années*, *mois* et *jours* à la date que vous avez passée dans *laDate*, et retourne la date résultante.<!-- END REF-->

Alors que les [Self](self.md) vous permettent d'ajouter des jours à une date, **Add to date** vous permet d'ajouter rapidement des mois et des années sans vous soucier du nombre de jours par mois ou des années bissextiles (comme vous devriez le faire avec l'opérateur "+" sur les dates).

#### Exemple 

```4d
  //Cette ligne calcule la date dans un an, le même jour
 $vdDansUnAn:=Add to date(Current date;1;0;0)
 
  //Cette ligne calcule la date le mois prochain, le même jour
 $vdMoisProchain:=Add to date(Current date;0;1;0)
 
  //Cette ligne fait la même chose que '$vdDemain:=Date du jour+1'
 $vdDemain:=Add to date(Current date;0;0;1)
```
