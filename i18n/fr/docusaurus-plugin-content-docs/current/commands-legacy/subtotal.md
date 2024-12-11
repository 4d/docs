---
id: subtotal
title: Subtotal
slug: /commands/subtotal
displayed_sidebar: docs
---

<!--REF #_command_.Subtotal.Syntax-->**Subtotal** ( *valeurs* {; *sautPage*} ) : Real<!-- END REF-->
<!--REF #_command_.Subtotal.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| valeurs | Field | &#8594;  | Champ ou variable numérique dont vous voulez calculer le sous-total |
| sautPage | Integer | &#8594;  | Niveau de rupture auquel effectuer un saut de page |
| Résultat | Real | &#8592; | Sous-total de valeurs |

<!-- END REF-->

#### Description 

<!--REF #_command_.Subtotal.Summary-->**Subtotal** retourne le sous-total de *valeurs* pour le niveau de rupture courant ou précédent.<!-- END REF--> **Subtotal** ne fonctionne que dans le cadre d'une sélection triée imprimée par l'intermédiaire de la commande [PRINT SELECTION](print-selection.md) ou de la commande de menu **Imprimer** du mode Développement. Le paramètre *valeurs* doit être de type numérique, entier ou entier long. Vous devez assigner le résultat de la fonction **Subtotal** à une variable placée dans la zone de rupture du formulaire.

**Attention :** Vous **devez** utiliser les commandes [BREAK LEVEL](break-level.md) et [ACCUMULATE](accumulate.md) avant d'imprimer un état sur lequel vous voulez traiter les niveaux de rupture et calculer des sous-totaux. Reportez-vous au paragraphe situé à la fin de cette section.

Le second paramètre (optionnel) de la fonction **Subtotal** est utilisé pour provoquer des sauts de page lors de l'impression. Si *sautPage* vaut 0, **Subtotal** ne génère aucun saut de page. Si *sautPage* vaut 1, **Subtotal** génère un saut de page pour chaque niveau de rupture 1\. Si *sautPage* vaut 2, **Subtotal** génère un saut de page pour chaque niveau de rupture 1 et 2, etc.

**Conseil :** Si vous faites appel à la fonction **Subtotal** dans le formulaire sortie affiché à l'écran, 4D va afficher un message d'erreur. La fermeture du dialogue d'erreur va provoquer un rafraîchissement de l'écran, donc de nouveau l'exécution de la méthode qui fait appel à **Subtotal**, donc de nouveau un message d'erreur, etc. Pour sortir de ce cercle vicieux, appuyez sur les touche **Alt** + **Maj** (Windows) ou **Option**+**Maj** (Macintosh) et cliquez sur le bouton **Arrêter** dans la fenêtre d'erreur : cela met provisoirement fin aux rafraîchissements d'écran. Choisissez un autre formulaire de sortie pour éviter que le problème ne se répète. Passez en mode Structure pour isoler l'appel à la fonction **Subtotal** par un test ([Form event code](../commands/form-event-code.md) \= On Printing Break) si vous avez l'intention d'utiliser le même formulaire de sortie pour l'écran et l'imprimante.

#### Exemple 

L'exemple suivant est la méthode objet d'une variable intitulée *vSalaire*, placée dans une zone de rupture d'un formulaire (R0, la zone située au-dessus du marqueur R0). La variable prend la valeur du sous-total du champ Salaire pour ce niveau de rupture. Le traitement des ruptures doit avoir été auparavant activé par les commandes [BREAK LEVEL](break-level.md) et [ACCUMULATE](accumulate.md).

```4d
 Case of
    :(FORM Event=On Printing Break)
       vSalaire:=Subtotal([Employés]Salaire)
 End case
```

Reportez-vous au chapitre "Les formulaires de sortie et les états" du manuel Mode Développement pour plus d'informations sur la construction de formulaires avec des niveaux de ruptures.

#### Traitement de niveaux de rupture dans les formulaires d'état 

Pour pouvoir générer des états avec ruptures, vous devez déclencher le traitement des ruptures en appelant les commandes [BREAK LEVEL](break-level.md) et [ACCUMULATE](accumulate.md). Il faut que ces deux commandes soient appelées avant l'impression du formulaire. L'appel à la fonction **Subtotal** est nécessaire pour afficher les calculs de niveaux intermédiaires. Il est obligatoire de trier sur au moins le nombre de niveaux de ruptures désiré.

Dans le cadre de l'utilisation des commandes [BREAK LEVEL](break-level.md) et [ACCUMULATE](accumulate.md), les étapes à suivre sont :  
1\. Sélectionner les enregistrements à imprimer,  
2\. Trier les enregistrements sur autant de niveaux que de niveaux de ruptures,  
3\. Appeler les commandes [BREAK LEVEL](break-level.md) et [ACCUMULATE](accumulate.md),  
4\. Imprimer l'état avec la commande [PRINT SELECTION](print-selection.md).

La commande **Subtotal** permet d'afficher des calculs de sous-totaux dans des formulaires.

#### Voir aussi 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Level](level.md)  
[PRINT SELECTION](print-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 97 |
| Thread safe | &check; |
| Interdite sur le serveur ||


