---
id: invoke-action
title: INVOKE ACTION
slug: /commands/invoke-action
displayed_sidebar: docs
---

<!--REF #_command_.INVOKE ACTION.Syntax-->**INVOKE ACTION** ( *action* {; *cible*} )<!-- END REF-->
<!--REF #_command_.INVOKE ACTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| action | Text | &#8594;  | Nom de l'action standard ou syntaxe avec paramètre si celui-ci est requis |
| cible | Integer | &#8594;  | Définit le lieu d'exécution de l'action : le formulaire courant (par défaut) ou le formulaire principal |

<!-- END REF-->

#### Description 

<!--REF #_command_.INVOKE ACTION.Summary-->La commande **INVOKE ACTION** déclenche l'action standard définie par le paramètre *action*, optionnellement dans le contexte de la *cible*.<!-- END REF-->

Dans *action*, passez l'action standard à exécuter. Ce peut être une chaîne ou une constante du thème *Action standard*. Certaines actions acceptent un élément cible et des paramètres. Dans ce cas, vous devez utiliser la syntaxe requise, par exemple *"gotoPage?value=2"* ou *paragraph/backgroundPositionV?value=top.*

Les actions disponibles sont listées dans la section *Actions standard* du manuel *4D - Mode Développement*.

**Note** : Des actions spécifiques sont également fournies pour les documents 4D Write Pro. Elles sont détaillées dans la section *Utiliser les actions standard 4D Write Pro* du manuel de référence 4D Write Pro.

##### 

Dans *cible*, vous pouvez passer le contexte formulaire dans lequel l'*action* doit être exécutée. Vous pouvez utiliser une des constantes suivantes, du thème *Action standard* :

| Constante       | Type        | Valeur | Comment                                                                                                                                                                                                            |
| --------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ak current form | Entier long | 1      | Le formulaire courant est le formulaire depuis lequel l'action a été appelée. Il peut s'agir soit du formulaire principal du process courant soit d'un formulaire palette situé au-dessus du formulaire principal. |
| ak main form    | Entier long | 2      | Le formulaire principal est le document ou le formulaire de dialogue au premier plan du process, sans tenir compte des fenêtres palettes ou flottantes.                                                            |

**Note :** Si *cible* est omis, par défaut le contexte ak current form est utilisé. 

En fonction de la *cible*, l'exécution de la commande **INVOKE ACTION** sera synchrone ou asynchrone :

* Avec ak current form comme *cible*, la commande **INVOKE ACTION** est synchrone ; l'action est exécutée dans le cycle courant, au moment même où la commande est appelée.
* Avec ak main form comme *cible*, la commande **INVOKE ACTION** est asynchrone ; l'action est exécutée dans le cycle suivant, après la fin de l'exécution de la méthode de l'objet.

**Note :** Les actions standard d'édition (Couper, Copier, Coller, Tout sélectionner, Effacer, Annuler édition/Répéter) ignore le paramètre *cible*, s'il est passé. Ces actions sont toujours exécutées de façon synchrone dans le contexte de l'objet éditable qui a le focus.

La commande **INVOKE ACTION** ne génère pas une erreur, par exemple, si la commande requise n'est pas disponible dans le contexte courant. Vous devez valider l'action attendue en utilisant la commande [Action info](action-info.md). 

#### Exemple 1 

Vous souhaitez exécuter l'action standard **Copier** dans le formulaire courant :

```4d
 INVOKE ACTION(ak copy;ak current form)
```

#### Exemple 2 

Vous souhaitez exécuter l'action standard **Aller a page** (page 3) dans le formulaire principal :

```4d
 INVOKE ACTION(ak goto page+"?value=3";ak main form)
```

#### Voir aussi 

[Action info](action-info.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1439 |
| Thread safe | &cross; |


