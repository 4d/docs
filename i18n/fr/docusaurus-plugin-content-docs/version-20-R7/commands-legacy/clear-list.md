---
id: clear-list
title: CLEAR LIST
slug: /commands/clear-list
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR LIST.Syntax-->**CLEAR LIST** ( *liste* {; *} )<!-- END REF-->
<!--REF #_command_.CLEAR LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| liste | Integer | &#8594;  | Numéro de référence de liste |
| * | Operator |  &#8594;  | Si spécifié, effacer les sous-listes de la mémoire (s'il existe des sous-listes) Si omis, ne pas effacer les sous-listes |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.CLEAR LIST.Summary-->La commande **CLEAR LIST** efface de la mémoire la liste hiérarchique dont vous avez passé le numéro de référence dans le paramètre *liste*.<!-- END REF-->

Généralement, vous devez passer le paramètre optionnel *\**, afin que les sous-listes et les sous-éléments (s'il y en a) rattachés à la liste soient également effacés.

Il n'est pas nécessaire de supprimer une liste associée à un objet de formulaire via la Liste des propriétés : 4D charge et efface la liste automatiquement. Sinon, à chaque fois que vous chargez, copiez, extrayez d'un BLOB ou créez une liste par programmation, appelez la commande **CLEAR LIST** lorsque vous n'en avez plus besoin.

Si vous voulez supprimer une sous-liste rattachée à un élément (à tout niveau) d'une autre liste affichée dans un formulaire, procédez de la manière suivante :  
1\. Appelez [GET LIST ITEM](get-list-item.md) avec l'élément parent pour obtenir le numéro de référence de la sous-liste.   
2\. Appelez [SET LIST ITEM](set-list-item.md) avec l'élément parent pour dissocier la sous-liste de l'élément de liste avant de l'effacer.  
3\. Appelez **CLEAR LIST** pour effacer la sous-liste dont vous avez obtenu le numéro de référence à l'aide de [GET LIST ITEM](get-list-item.md).

#### Exemple 1 

Vous disposez, dans votre application, d'une routine de "nettoyage" chargée d'effacer tous les objets et données dont vous n'avez plus besoin lorsque, par exemple, une fenêtre ou un formulaire est refermé(e). A un endroit de cette routine, vous supprimez une liste hiérarchique qui peut avoir déjà été supprimée, suivant les actions de l'utilisateur dans le formulaire. Vous utilisez la fonction [Is a list](is-a-list.md) pour effacer la liste uniquement si c'est nécessaire :

```4d
  // Extrait de la sous-routine de nettoyage
 If(Is a list(hlList))
    CLEAR LIST(hlList;*)
 End if
```

#### Exemple 2 

Reportez-vous à l'exemple de la fonction [Load list](load-list.md).

#### Exemple 3 

Reportez-vous à l'exemple de la fonction [BLOB to list](blob-to-list.md).

#### Voir aussi 

[BLOB to list](blob-to-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  