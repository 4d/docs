---
id: new-shared-collection
title: New shared collection
slug: /commands/new-shared-collection
displayed_sidebar: docs
---

<!--REF #_command_.New shared collection.Syntax-->**New shared collection** {( *valeur* {; *valeur2* ; ... ; *valeurN*} )} -> Résultat<!-- END REF-->
<!--REF #_command_.New shared collection.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| valeur | &#x1F852; | Valeur(s) de la collection partagée |
| Résultat | Collection | &#x1F850; | Nouvelle collection partagée |

<!-- END REF-->

#### Description 

<!--REF #_command_.New shared collection.Summary-->La commande **New shared collection** crée une nouvelle collection partagée vide ou pré-remplie et retourne sa référence.<!-- END REF--> L'ajout et la modification d'éléments dans une collection partagée doivent être encadrés par une structure *Utiliser...Fin utiliser*, sinon une erreur est générée. La lecture d'un élement hors *Utiliser...Fin utiliser* est toutefois possible. 

**Note :** Pour plus d'informations sur les *collections partagées*, veuillez vous reporter à la page *Objets partagés et collections partagées*.

Si vous ne passez aucun paramètre, **New shared collection** crée une collection partagée vide et retourne sa référence. 

Vous devez assigner la référence retournée à une variable 4D déclarée avec [C\_COLLECTION](c-collection.md).

**Note :** Gardez à l'esprit que [C\_COLLECTION](c-collection.md) déclare une variable de type [Collection](# "Tableau de valeurs de propriétés d'objets") mais ne crée aucune collection. 

Optionnellement, vous pouvez préremplir la nouvelle collection partagée en passant une ou plusieurs *valeur*(s) en paramètre(s). Sinon, vous pourrez ajouter ou modifier des éléments ultérieurement via l'assignation en notation objet (cf. exemple). 

 Si l'indice du nouvel élément est situé au-delà du dernier élément existant de la collection partagée, la collection est automatiquement redimensionnée et tous les nouveaux éléments intermédiaires prennent la valeur **null**.

Vous pouvez passer tout nombre de valeurs de n'importe quel type pris en charge : 

* nombre (réel, entier long...). Les valeurs numériques sont toujours stockées sous forme de réels.
* texte
* boolean
* date
* heure (stockée sous forme de nombre de millisecondes - réel)
* null
* objet partagé(\*)
* collection partagée(\*)

**Note :** A la différence des collections standard (non partagées), les collections partagées ne peuvent pas contenir d'images, de pointeurs, ni d'objets ou collections qui ne sont pas partagé(e)s. 

 (\*)Lorsqu'un objet partagé ou une collection partagée est ajouté(e) comme élément à une collection partagée, il/elle hérite de son *locking identifier*. Pour plus d'informations sur ce point, reportez-vous à la section *A propos du locking identifier (comment fonctionnent les groupes partagés)*.

#### Exemple 

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### Voir aussi 

[New collection](new-collection.md)  
[New shared object](new-shared-object.md)  
*Objets partagés et collections partagées*  