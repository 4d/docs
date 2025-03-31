---
id: method-set-comments
title: METHOD SET COMMENTS
slug: /commands/method-set-comments
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET COMMENTS.Syntax-->**METHOD SET COMMENTS** ( *chemin* ; *commentaires* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET COMMENTS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text, Text array | &#8594;  | Texte ou Tableau texte contenant un ou plusieurs chemin(s) de méthode(s) |
| commentaires | Text, Text array | &#8594;  | Documentation de(s) méthode(s) désignée(s) |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD SET COMMENTS.Summary-->La commande **METHOD SET COMMENTS** remplace la documentation de la ou des méthode(s) désignée(s) par le paramètre *chemin* par ceux définis dans le paramètre *commentaires*.<!-- END REF-->

La documentation modifiée par cette commande est affichée dans l’Explorateur de 4D (à ne pas confondre avec les lignes de commentaires dans le code). Ils contiennent du texte stylé. Elle contient :

* du texte markdown dans les bases projet,
* du texte stylé dans les bases binaires.

Cette documentation peut être générée pour les méthodes de type trigger, méthodes projet, méthodes formulaire, méthodes base ou les classes.

**Note :** Les formulaires et les méthodes formulaire partagent la même documentation.

Vous pouvez utiliser deux types de syntaxes, basées soit sur des tableaux texte, soit sur des variables texte :  

```4d
 var vTchemin : Text // variables texte
 var vTcommentaires : Text
 METHOD SET COMMENTS(vTchemin;vTcommentaires) // documentation d’une seule méthode
```

```4d
 ARRAY TEXT(tabChemins;0) // tableaux texte
 ARRAY TEXT(tabCommentaires;0)
 METHOD SET COMMENTS(tabChemins;tabCommentaires) // documentation de plusieurs méthodes
```

Il n’est pas possible de mixer les deux syntaxes.

Si un chemin d’accès passé est invalide, une erreur est générée.

Vous pouvez exécuter cette commande depuis un composant, mais dans ce cas vous devez passer le paramètre *\** car l’accès en écriture au code du composant n’est pas possible. Si vous omettez le paramètre *\** dans ce contexte, l’erreur -9763 est générée.

#### Exemple 

Ajout d’une date de modification à une documentation de trigger existante :

```4d
 METHOD GET COMMENTS("[trigger]/Table1";$comments)
 $comments:="Modif :"+String(Date du jour)+"\r"+$comments
 METHOD SET COMMENTS("[trigger]/Table1";$comments)
```

#### Voir aussi 

[METHOD GET COMMENTS](method-get-comments.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1193 |
| Thread safe | &cross; |


