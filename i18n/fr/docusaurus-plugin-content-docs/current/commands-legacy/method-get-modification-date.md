---
id: method-get-modification-date
title: METHOD GET MODIFICATION DATE
slug: /commands/method-get-modification-date
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET MODIFICATION DATE.Syntax-->**METHOD GET MODIFICATION DATE** ( *chemin* ; *dateMod* ; *heureMod* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET MODIFICATION DATE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text, Text array | &#8594;  | Texte ou Tableau texte contenant un ou plusieurs chemin(s) de méthode(s) |
| dateMod | Date, Date array | &#8592; | Date(s) de modification de méthode(s) |
| heureMod | Time, Integer array | &#8592; | Heure(s) de modification de méthode(s) |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.METHOD GET MODIFICATION DATE.Summary-->La commande **METHOD GET MODIFICATION DATE** retourne dans les paramètres *dateMod* et *heureMod* les dates et heures de dernière modification de la ou des méthode(s) désignée(s) par le paramètre *chemin*.<!-- END REF--> 

Vous pouvez utiliser deux types de syntaxes, basées soit sur des tableaux, soit sur des variables :  

```4d
 var vTchemin : Text // variables
 var vDate : Date
 var vHeure : Time
 METHOD GET MODIFICATION DATE(vTchemin;vDate;vHeure) // date et heure d’une seule méthode
```

```4d
 ARRAY TEXT(tabChemins;0) // tableaux
 ARRAY DATE(tabDates;0)
 ARRAY LONGINT(tabHeures;0)
 METHOD GET MODIFICATION DATE(tabChemins;tabDates;tabHeures) // dates et heures de plusieurs méthodes
```

Il n’est pas possible de mixer les deux syntaxes. 

Si la commande est exécutée depuis un composant, elle s’applique par défaut aux méthodes du composant. Si vous passez le paramètre *\**, elle accède aux méthodes de la base hôte. 

#### Exemple 1 

Vous souhaitez connaître les dates et heures de modification de plusieurs méthodes :

```4d
 ARRAY TEXT(tabChemins;0)
 APPEND TO ARRAY(tabChemins;"MaMethode1")
 APPEND TO ARRAY(tabChemins;"MaMethode2")
 ...
 ARRAY DATE(tabDates;0)
 ARRAY LONGINT(tabHeures;0)
 METHOD GET MODIFICATION DATE(tabChemins;tabDates;tabHeures)
```

#### Exemple 2 

Vous souhaitez obtenir les dates de modification des méthodes d'un module, préfixées "Web\_". Il n’est pas possible d’utiliser "@" dans le chemin, vous pouvez cependant écrire :

```4d
 ARRAY TEXT($_webMethod;0)      
 METHOD GET NAMES($_webMethod;"Web_@")
 ARRAY DATE($_date;0)
 ARRAY LONGINT($_time;0)
 METHOD GET MODIFICATION DATE($_webMethod;$_date;$_time)
```

  
