---
id: self
title: Self
slug: /commands/self
displayed_sidebar: docs
---

<!--REF #_command_.Self.Syntax-->**Self**  : Pointer<!-- END REF-->
<!--REF #_command_.Self.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Pointer | &#8592; | Pointeur vers l'objet du formulaire dont la méthode est en cours d'exécution (le cas échéant) Sinon Nil (->[]) si hors contexte |

<!-- END REF-->

#### Note de compatibilité 

<!--REF #_command_.Self.Summary-->Cette commande est conservée pour des raisons de compatibilité uniquement.<!-- END REF--> A compter de la version 12 de 4D, il est conseillé d'utiliser la commande [OBJECT Get pointer](object-get-pointer.md).

#### Description 

**Self** retourne un pointeur vers l'objet du formulaire dont la méthode objet est en cours d'exécution. 

La fonction **Self** est utilisée pour référencer une variable dans sa propre méthode objet. Elle retourne un pointeur valide si elle est appelée dans une méthode objet ou dans une méthode projet appelée directement ou indirectement par un méthode objet. 

Si **Self** est appelée en-dehors de ce contexte, elle retourne un pointeur [Is nil pointer](is-nil-pointer.md)(*\->\[\]*).

**Conseil :** **Self** est très utile lorsque plusieurs objets d'un formulaire doivent effectuer la même action, opérée sur eux-mêmes.

**Note :** Lorsqu’elle est utilisée avec une list box, la fonction **Self** retourne un pointeur vers la list box ou la colonne de la list box en fonction du contexte. Pour plus d'informations, reportez-vous à la section *Gestion programmée des objets de type List box*.

#### Exemple 

Référez-vous à l'exemple de la commande [RESOLVE POINTER](resolve-pointer.md).

#### Voir aussi 

[OBJECT Get pointer](object-get-pointer.md)  
[RESOLVE POINTER](resolve-pointer.md)  
[This](this.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 308 |
| Thread safe | &cross; |


