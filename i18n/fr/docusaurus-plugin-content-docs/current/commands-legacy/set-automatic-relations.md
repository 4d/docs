---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *aller* {; *retour*} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| aller | Boolean | &#8594;  | Statut de tous les liens de N vers 1 |
| retour | Boolean | &#8594;  | Statut de tous les liens de 1 vers N |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->La commande **SET AUTOMATIC RELATIONS** transforme tous les liens manuels en liens automatiques pour toute la base dans le process courant.<!-- END REF--> Cette modification est temporaire et peut à tout moment être remise en cause par un nouvel appel à **SET AUTOMATIC RELATIONS**.

* Si *aller* est Vrai, tous les liens N vers 1 deviennent automatiques. Si *aller* est Faux, tous les liens N vers 1 deviennent manuels.
* Si *retour* est Vrai, tous les liens 1 vers N deviennent automatiques. Si *retour* est Faux, tous les liens 1 vers N deviennent manuels.

Les liens définis comme automatiques en mode Développement ne sont pas affectés par cette commande. Elle permet de rendre automatiques les liens déclarés manuels en mode Développement, avant d'exécuter des opérations nécessitant qu'ils soient automatiques (par exemple, des recherches et tri relationnels). A l'issue de l'opération, le lien peut redevenir manuel via un nouvel appel à **SET AUTOMATIC RELATIONS**. 

**Notes :** 

* Lorsque vous passez Vrai à la commande **SET AUTOMATIC RELATIONS**, le mode automatique est "verrouillé" pour tous les liens manuels au cours de la session. Dans ce cas, les éventuels appels à la commande [SET FIELD RELATION](set-field-relation.md) dans la même session sont ignorés, qu'ils soient placés avant ou après **SET AUTOMATIC RELATIONS**. Pour "déverrouiller" le mode automatique et prendre en compte les appels à [SET FIELD RELATION](set-field-relation.md), passez Faux à **SET AUTOMATIC RELATIONS**.
* Les automatismes sont désactivés lorsque les tables liées sont visualisées dans un formulaire liste affiché à l'aide de [DISPLAY SELECTION](display-selection.md), [MODIFY SELECTION](modify-selection.md) ou d'un sous-formulaire. Voir *Liens manuels et automatiques*.

#### Exemple 

L'exemple suivant rend tous les liens N vers 1 automatiques et rétablit en manuel tous les liens 1 vers N qui étaient précédemment modifiés :

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

#### Voir aussi 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
*Présentation des liens*  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET FIELD RELATION](set-field-relation.md)  