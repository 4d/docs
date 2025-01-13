---
id: new-shared-object
title: New shared object
slug: /commands/new-shared-object
displayed_sidebar: docs
---

<!--REF #_command_.New shared object.Syntax-->**New shared object** {( *propriété* ; *valeur* {; *propriété2* ; *valeur2* ; ... ; *propriétéN* ; *valeurN*} )} : Object<!-- END REF-->
<!--REF #_command_.New shared object.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| propriété | Text | &#8594;  | Nom de propriété à créer |
| valeur | Text, Date, Boolean, Pointer, Number, Object | &#8594;  | Valeur de propriété |
| Résultat | Object | &#8592; | Nouvel objet partagé |

<!-- END REF-->

#### Description 

<!--REF #_command_.New shared object.Summary-->La commande **New shared object** crée un objet partagé vide ou pré-rempli et retourne sa référence.<!-- END REF--> L'ajout et la modification de propriétés dans un objet partagé doivent être encadrés par une structure *Utiliser...Fin utiliser*, sinon une erreur est générée. La lecture d'une propriété hors *Utiliser...Fin utiliser* est toutefois possible. 

**Note :** Pour plus d'informations sur les *objets partagés*, veuillez vous reporter à la page *Objets partagés et collections partagées*. 

Si vous ne passez aucun paramètre, **New shared object** crée un objet partagé vide et retourne sa référence. Vous devez assigner cette référence à une variable 4D déclarée avec [C\_OBJECT](c-object.md).

**Note :** [C\_OBJECT](c-object.md) déclare une variable de type [Objet](# "Données structurées sous forme d'objet natif 4D") mais ne crée pas d'objet.

Optionnellement, vous pouvez pré-remplir le nouvel objet en passant une ou plusieurs paires *propriété*/*valeur* comme paramètres :

* Dans le paramètre *propriété*, passez le libellé de la propriété à créer (jusqu'à 255 caractères). Notez que le libellé du paramètre *propriété* est sensible à la casse.
* Dans le paramètre *valeur*, passez la valeur que vous souhaitez affecter à la propriété. Les objets partagés peuvent contenir les types de valeur suivants :  
   * nombre (réel, entier long...). Les valeurs numériques sont toujours stockées sous forme de réels.  
   * texte  
   * boolean  
   * date  
   * heure (stockée sous forme de nombre de millisecondes - réel)  
   * null  
   * objet partagé(\*)  
   * collection partagée(\*)  
**Note :** A la différence des objets standard (non partagés), les objets partagés ne peuvent pas contenir d'images, de pointeurs, ni d'objets ou collections qui ne sont pas partagé(e)s.  
    
(\*)Lorsqu'un objet partagé ou une collection partagée est ajouté(e) à un objet partagé, l'objet ou la collection ajouté(e) hérite du *locking identifier* de l'objet parent. Pour plus d'informations sur ce point, reportez-vous à la section *A propos du locking identifier (comment fonctionnent les groupes partagés)*.

#### Exemple 1 

Vous voulez créer un nouvel objet partagé prérempli : 

```4d
 var $contact : Object
 $contact:=New shared object("name";"Smith";"firstname";"John")
```

#### Exemple 2 

Vous souhaitez créer et modifier un objet partagé. La structure *Utiliser...Fin utiliser* doit être appelée pour cet objet :

```4d
 var $s_obj : Object
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End use
```

#### Voir aussi 

[New object](new-object.md)  
[New shared collection](../commands/new-shared-collection.md)  
*Objets partagés et collections partagées*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1526 |
| Thread safe | &check; |


