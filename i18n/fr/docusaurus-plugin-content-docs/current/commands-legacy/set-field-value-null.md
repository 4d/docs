---
id: set-field-value-null
title: SET FIELD VALUE NULL
slug: /commands/set-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD VALUE NULL.Syntax-->**SET FIELD VALUE NULL** ( *leChamp* )<!-- END REF-->
<!--REF #_command_.SET FIELD VALUE NULL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ auquel attribuer la valeur NULL |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET FIELD VALUE NULL.Summary-->La commande **SET FIELD VALUE NULL** attribue la valeur NULL au champ désigné par le paramètre *leChamp*.<!-- END REF-->

La valeur NULL est exploitée par le moteur SQL de 4D. Pour plus d’informations, reportez-vous au manuel Guide de référence 4D SQL.

**Notes :** 

* Il est possible d’interdire la valeur Null pour les champs 4D au niveau de l’éditeur de Structure (cf. manuel Mode Développement).
* **SET FIELD VALUE NULL** efface le contenu des champs objet.

#### Voir aussi 

[Is field value Null](is-field-value-null.md)  
[Null](null.md)  