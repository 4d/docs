---
id: modified
title: Modified
slug: /commands/modified
displayed_sidebar: docs
---

<!--REF #_command_.Modified.Syntax-->**Modified** ( *leChamp* ) : Boolean<!-- END REF-->
<!--REF #_command_.Modified.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ dont vous voulez tester la modification |
| Résultat | Boolean | &#8592; | Vrai si une nouvelle valeur a été assignée au champ, sinon Faux |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Modified.Summary-->**Modified** retourne **Vrai** si une valeur a été assignée par programmation au champ *leChamp* ou s'il a été modifié lors de la saisie de données.<!-- END REF--> La commande **Modified** ne fonctionne que lorsqu'elle est appelée dans le cadre d'une méthode formulaire (ou d'une sous-méthode appelée par la méthode formulaire).

Attention, cette commande ne retourne une valeur significative qu'à l'intérieur d'un même cycle d'exécution. Elle est notamment remise à **Faux** pour tous les événements formulaires correspondant à l'ancien cycle d'exécution *\_o\_During* (On Clicked, On After Keystroke...).

Dans le cas de la saisie de données, un champ est considéré comme modifié à partir du moment où un utilisateur l'édite (et change ou non sa valeur originale) puis le quitte pour un autre champ ou pour cliquer sur un objet de formulaire. Notez que le fait qu'un utilisateur active puis quitte un champ à l'aide de la touche Tabulation ne suffit pas en soi à ce que **Modified** retourne **Vrai**. Le champ doit avoir été réellement modifié pour que **Modified** retourne **Vrai**.

Dans le cas de l'exécution d'une méthode, un champ est considéré comme modifié si une valeur lui a été assignée (différente ou non de sa valeur précédente).

**Note :** La commande **Modified** retourne toujours **Vrai** après l'exécution des commandes [PUSH RECORD](push-record.md) et [POP RECORD](pop-record.md).

Dans tous les cas, pour savoir si la valeur d'un champ a été effectivement modifiée, utilisez la commande [Old](old.md). 

**Note :** Bien que la fonction **Modified** puisse être appliquée à tout type de champ, si vous l'utilisez conjointement avec la fonction [Old](old.md), vous devez dans ce cas tenir compte des restrictions liées à cette fonction. Reportez-vous à la description de la commande [Old](old.md).

Pendant la saisie de données, il est généralement plus pratique d'effectuer des opérations dans des méthodes objet à l'aide de la commande [Form event code](form-event-code.md) que d'utiliser la fonction **Modified** dans des méthodes formulaires. Comme une méthode objet reçoit l'événement On Data Change à chaque fois qu'un champ est modifié, utiliser une telle méthode équivaut à appeler **Modified** dans une méthode formulaire.

#### Exemple 1 

L'exemple suivant teste si le champ *\[Commandes\]Quantité* ou le champ *\[Commandes\]Prix* a été modifié. Si c'est le cas, le champ *\[Commandes\]Total* est recalculé :

```4d
 If((Modified([Commandes]Quantité)|(Modified([Commandes]Prix))
    [Commandes]Total:=[Commandes]Quantité*[Commandes]Prix
 End if
```

Notez que le même résultat aurait pu être obtenu en utilisant la seconde ligne de cette méthode en tant que méthode objet des champs *\[Commandes\]Quantité* et *\[Commandes\]Prix* dans le cadre de l'événement formulaire On Data Change. 

#### Exemple 2 

Vous sélectionnez un enregistrement de la table *\[uneTable\]*, puis vous appelez plusieurs sous-routines qui sont susceptibles de modifier le champ *\[uneTable\]Champ important* mais sans provoquer de sauvegarde de l'enregistrement. A la fin de la méthode principale, vous pouvez utiliser la commande **Modified** pour déterminer si vous devez stocker l'enregistrement :

```4d
  // L'enregistrement a été sélectionné comme enregistrement courant
  // Puis vous effectuez des actions à l'aide des sous-routines
 FAIRE QUELQUE CHOSE
 FAIRE AUTRE CHOSE
 NE PAS OUBLIER DE FAIRE CA
  // ...
  // Enfin, vous testez le champ pour déterminer s'il faut stocker l'enregistrement
 If(Modified([uneTable]Champ important))
    SAVE RECORD([uneTable])
 End if
```

#### Voir aussi 

[Form event code](form-event-code.md)  
[Old](old.md)  