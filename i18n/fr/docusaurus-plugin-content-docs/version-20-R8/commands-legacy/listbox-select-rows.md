---
id: listbox-select-rows
title: LISTBOX SELECT ROWS
slug: /commands/listbox-select-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROWS.Syntax-->**LISTBOX SELECT ROWS** ( {* ;} *objet* ; *sélection* {; *action*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROWS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, l'objet est un nom d'objet (chaîne). Si omis, l'objet est une variable. |
| objet | any | &#8594;  | Nom de l'objet (si * est spécifié) ou Variable (si * est spécifié) |
| sélection | Object, Collection | &#8594;  | Objet ou collection décrivant les lignes à sélectionner |
| action | Integer | &#8594;  | lk remplacer sélection (omis par défaut), lk ajouter à sélection, lk supprimer de sélection |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SELECT ROWS.Summary-->La commande **LISTBOX SELECT ROWS**  provoque la sélection des lignes d'une list box entity selection ou une list box collection correspondant aux entités ou objets contenus dans le paramètre *sélection*.<!-- END REF--> 

Si vous passez un paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d'objet, reportez-vous à la section *Objets de formulaires*.

Dans le paramètre sélection, passez un [Objet](# "Données structurées sous forme d'objet natif 4D") ou une [Collection](# "Tableau de valeurs de propriétés d'objets") en fonction du type de list box :

**List box e** **ntity selection** 

Pour une List box entity selection, passez un objet entity selection contenant des entités de la même dataclass que la list box. Si sélection est un objet entity selection d'une dataclass différente de la list box, une erreur est retournée.

**List box c** **ollection**

Pour une **list box** collection, passez une sous-collection d'objets appartenant à la list box. Si votre list box contient des valeurs scalaires, passez une sous-collection de valeurs.

**Notes :**

* Si *sélection* n'est pas un objet entity selection / collection valide, une erreur est retournée.
* Si *sélection* est une entity selection / collection vide, par défaut (avec l'action "remplacer" ci-dessous) toutes les lignes de la list box sont déselectionnées. Pour les autres actions, la commande ne fait rien.
* Si *sélection* contient des entités / éléments qui ne s'affichent pas dans la list box, ils sont ignorés.

Si le paramètre optionnel *action* est passé, il permet de définir l'action de sélection à exécuter lorsqu'une sélection de lignes existe déjà dans la list box. Vous pouvez passez une valeur ou l'une des constantes suivantes (du thème “*List box*”) :

| Constante                | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Entier long | 1      | La ligne sélectionnée est ajoutée à la sélection existante. Si la ligne désignée appartient déjà à la sélection existante, la commande ne fait rien.                                                                                                                                                                         |
| lk remove from selection | Entier long | 2      | La ligne sélectionnée est supprimée de la sélection existante. Si la ligne désignée n’appartient pas à la sélection existante, la commande ne fait rien.                                                                                                                                                                     |
| lk replace selection     | Entier long | 0      | La ligne sélectionnée devient la nouvelle sélection et remplace la sélection existante. La commande produit le même effet qu’un clic de l’utilisateur sur une ligne de la list box (l'événement Sur clic n'est toutefois pas généré). Cette action est effectuée par défaut (lorsque le paramètre *action* n’est pas passé). |

*Par défaut, si le paramètre action est omis, la commande remplace la ou les lignes définie(s) par le paramètre sélection*. 

**Note :** La commande s'attend à ce que chaque objet ou entity s'affiche une seule fois uniquement dans la list box.

#### Exemple 1 

Ce code vous permet de sélectionner les factures d'une entity selection à l'aide d'une requête de serveur :

```4d
  //Dans l'événement Sur chargement du formulaire, nous avons :
 Form.invoices:=ds.Invoices.all()
  //La ListBox "Factures" affiche l'entity selection Form.invoices  
 
 var $cash : Object
 var $card : Object
 
  //Sélectionner les factures ayant été réglées en liquide
 $cash:=Form.invoices.query("paymentMethod=:1";"Liquide")
 LISTBOX SELECT ROWS(*;"Factures";$cash;lk replace selection)
```

#### Exemple 2 

Exemple avec une collection d'objets :

```4d
 var $name : Text
 $name:=Request("Veuillez saisir un nom")
 If(OK=1)
  // Form.studentsColl est une collection d'objets
    $selection:=Form.studentsColl.query("lastname = :1";$name)
    LISTBOX SELECT ROWS(*;"LBStudents";$selection;lk ajouter à sélection)
 End if
```

#### Voir aussi 

[LISTBOX SELECT ROW](listbox-select-row.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1715 |
| Thread safe | &cross; |


