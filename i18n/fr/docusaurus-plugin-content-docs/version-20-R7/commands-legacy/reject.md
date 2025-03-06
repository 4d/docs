---
id: reject
title: REJECT
slug: /commands/reject
displayed_sidebar: docs
---

<!--REF #_command_.REJECT.Syntax-->**REJECT** {( *leChamp* )}<!-- END REF-->
<!--REF #_command_.REJECT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ dont la saisie doit être refusée |

<!-- END REF-->

#### Description 

<!--REF #_command_.REJECT.Summary-->**REJECT** accepte deux syntaxes.<!-- END REF--> Dans la première syntaxe, **REJECT** n'a pas de paramètre. Dans ce cas, la commande rejette la totalité de la saisie et force l'utilisateur à rester dans le formulaire. La seconde syntaxe permet de ne refuser que *leChamp* et force l'utilisateur à rester dans le champ. 

**Note :** Nous vous conseillons d'utiliser en priorité les outils intégrés de validation de saisie de 4D, avant de faire appel à cette commande.

La première syntaxe de **REJECT** est utilisée pour empêcher l'utilisateur de valider un enregistrement incomplet. Vous pouvez parvenir au même résultat sans utiliser **REJECT** : associez la touche **Entrée** à un bouton n'effectuant "Pas d'action" et utilisez les commandes [ACCEPT](accept.md) et [CANCEL](cancel.md) pour valider ou annuler l'enregistrement, une fois que les champs ont été correctement remplis. Il est recommandé d'employer cette seconde technique plutôt que d'utiliser la première syntaxe de **REJECT**.

En général, vous employez la première syntaxe de **REJECT** pour empêcher l'utilisateur de valider un enregistrement incomplet ou comportant des valeurs incorrectes. Si l'utilisateur tente de valider l'enregistrement, l'exécution de **REJECT** provoque l'annulation de cette commande et l'enregistrement reste affiché dans le formulaire. L'utilisateur doit alors recommencer la saisie jusqu'à ce que les valeurs soient considérées comme correctes ou annuler l'enregistrement.

Le meilleur emplacement pour la commande **REJECT**, lorsque vous utilisez cette syntaxe, est la méthode objet d'un bouton de type Valider associé à la touche de validation. De cette manière, la validation n'est possible que lorsque l'enregistrement est accepté, et l'utilisateur ne peut pas "forcer" la validation en appuyant sur la touche **Entrée**.

La seconde syntaxe de **REJECT** utilise le paramètre *leChamp*. Dans ce cas, le curseur reste dans la zone de saisie du champ, ce qui oblige l'utilisateur à saisir une valeur correcte.   
Avec cette syntaxe, la commande **REJECT** doit impérativement être appelée dans l'événement formulaire On Data Change.Vous devez placer cette syntaxe de **REJECT** soit dans la méthode formulaire, soit dans la méthode objet de la zone de saisie. Si vous utilisez **REJECT** avec le formulaire "pleine page" d'un sous-formulaire, placez-la dans la méthode formulaire ou une méthode objet du formulaire "pleine page". Lorsqu'elle est utilisée avec des champs de sous-formulaires, cette commande ne fait rien.

Vous pouvez utiliser la commande [HIGHLIGHT TEXT](highlight-text.md) pour sélectionner, à l'intérieur du champ, les valeurs qui ont été refusées.

#### Exemple 1 

L'exemple suivant illustre la première syntaxe de **REJECT**, placée dans la méthode objet d'un bouton Valider. La touche **Entrée** a été définie comme équivalent clavier pour ce bouton. Cela signifie que même si l'utilisateur appuie sur cette touche pour valider l'enregistrement, la méthode objet du bouton sera exécutée. L'enregistrement est une transaction bancaire. Si la transaction est un chèque, un numéro de chèque doit être saisi. S'il n'y a pas de numéro, la validation est refusée : 

```4d
 Case of
    :(([Opération]Trans="Chèque") & ([Opération]Numéro="")) // Si c'est un chèque sans numéro...
       ALERT("Veuillez saisir le numéro du chèque.") // Alerter l'utilisateur
       REJECT // Refuser la saisie
       GOTO OBJECT([Opération]Numéro) // Placer le curseur dans le champ "numéro de chèque"
 End case
```

#### Exemple 2 

L'exemple suivant est une partie de la méthode objet d'un champ *\[Employés\]Salaire*. La méthode objet teste si la valeur de ce champ est inférieure à 10 000 Euros et la refuse si c'est le cas. Vous pourriez effectuer le même contrôle en spécifiant une valeur minimum pour le champ, dans l'éditeur de formulaires du mode Développement :

```4d
 Case of
    :(FORM Event=On Data Change)
       If([Employés]Salaire<10000)
          ALERT("Le salaire annuel doit être supérieur à 10 000 Euros.")
          REJECT([Employés]Salaire)
       End if
 End case
```

#### Voir aussi 

[ACCEPT](accept.md)  
[CANCEL](cancel.md)  
[GOTO OBJECT](goto-object.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 38 |
| Thread safe | &cross; |


