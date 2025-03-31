---
id: action-info
title: Action info
slug: /commands/action-info
displayed_sidebar: docs
---

<!--REF #_command_.Action info.Syntax-->**Action info** ( *action* {; *cible*} ) : Object<!-- END REF-->
<!--REF #_command_.Action info.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| action | Text | &#8594;  | Nom de l'action standard ou syntaxe incluant un paramètre si celui-ci est requis |
| cible | Integer | &#8594;  | Définit la cible de l'action où lire les informations : formulaire principal ou formulaire courant |
| Résultat | Object | &#8592; | Objet contenant le statut de l'action sous forme de booléens : isEnabled, isVisible, isChecked, isMixed, isUnknownState |

<!-- END REF-->

#### Description 

<!--REF #_command_.Action info.Summary-->La commande **Action info** retourne plusieurs informations, incluant la disponibilité et le statut à propos de l'*action* définie dans la *cible*, selon le contexte de l'application courante.<!-- END REF--> 

Dans *action*, passez l'action standard à vérifier. Ce peut être une chaîne ou une constante du thème *Action standard*. Certaines actions acceptent un élément cible et des paramètres. Dans ce cas, vous devez utiliser la syntaxe requise, par exemple *"gotoPage?value=2"* ou *paragraph/backgroundPositionV?value=top.*

Les actions disponibles sont listées dans la section *Actions standard* du manuel *4D - Mode Développement*.

**Note** : Des actions spécifiques sont également fournies pour les documents 4D Write Pro. Elles sont détaillées dans la section *Utiliser les actions standard 4D Write Pro* du manuel de référence 4D Write Pro.

Vous pouvez passer dans *cible* le contexte formulaire où l'*action* doit être exécutée. Vous pouvez utiliser une des constantes suivantes, du thème *Action standard* :

| Constante       | Type        | Valeur | Comment                                                                                                                                                                                                            |
| --------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ak current form | Entier long | 1      | Le formulaire courant est le formulaire depuis lequel l'action a été appelée. Il peut s'agir soit du formulaire principal du process courant soit d'un formulaire palette situé au-dessus du formulaire principal. |
| ak main form    | Entier long | 2      | Le formulaire principal est le document ou le formulaire de dialogue au premier plan du process, sans tenir compte des fenêtres palettes ou flottantes.                                                            |

**Note :** Si *cible* est omis, par défaut, c'est le contexte ak current form qui est utilisé.

La commande **Action info** retourne les informations sous la forme d'un Objet contenant les propriétés ci-dessous :

| **Propriété** | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **enabled**   | Booléen  | **true** si l'action peut être appelée, **false** sinon.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **status**    | Chaîne   | Les valeurs de la propriété "status" peuvent être une des chaînes suivantes :<table><tbody><tr><td>"**checked**"</td><td>l'action est cochée (checked) ce qui signifie que la propriété est fixée. Ex : le texte sélectionné est en gras, la propriété "status" de l'action standard ak font bold contient "checked"</td></tr><tr><td>"**unchecked**"</td><td>l'action est décochée (unchecked), ce qui signifie que la propriété n'est pas fixée. Ex : le texte sélectionné n'est pas en gras, la propriété "status" de l'action standard ak font bold contient "unchecked". </td></tr><tr><td>"**mixed**"</td><td>l'action est mixte, ce qui signifie que la propriété est partiellement fixée. Ex : une partie du texte sélectionné est "bold", la propriété "status" de l'action standard ak font bold contient "mixed".</td></tr></tbody></table> |
| **title**     | Texte    | libellé courant et localisé de l'action. Ex: "Annuler", "Coller", etc. pour la version française.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **visible**   | Booléen  | **true** si l'action est visible dans le formulaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **value**     | Chaîne   | Valeur courante de la chaîne de paramètre d'action (s'il y en a). Par exemple, si l'action standard est "fontSize?value=10pt", la propriété *value* contient "10pt"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

Si le statut de l'action ne peut pas être déterminé (par exemple si elle n'est affectée à aucun objet ou à aucune ligne de menu), la commande retourne un objet null (indéfini). 

#### Exemple 

Vous voulez savoir si l'action standard **Copier** est disponible (c'est-à-dire si des données sont sélectionnées) :

```4d
 var $actionInfo : Object
 var $isEnabled : Boolean
 $actionInfo:=Action info(ak copy)
 If(Not(Undefined($actionInfo.enabled)) //l'action est définie dans le process
    If(OB Get($actionInfo;"enabled"))
       ... //la copie est disponible
    End if
 End if
```

#### Voir aussi 

[INVOKE ACTION](invoke-action.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1442 |
| Thread safe | &cross; |


