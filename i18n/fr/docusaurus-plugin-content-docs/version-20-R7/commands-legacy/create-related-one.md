---
id: create-related-one
title: CREATE RELATED ONE
slug: /commands/create-related-one
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RELATED ONE.Syntax-->**CREATE RELATED ONE** ( *leChamp* )<!-- END REF-->
<!--REF #_command_.CREATE RELATED ONE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ N (champ d'où part le lien) |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE RELATED ONE.Summary-->**CREATE RELATED ONE** a deux effets.<!-- END REF--> S'il n'existe pas d'enregistrement lié à *leChamp* (c'est-à-dire si la valeur courante de *leChamp* n'est présente dans le champ correspondant d'aucun enregistrement de la table liée), **CREATE RELATED ONE** crée un nouvel enregistrement lié. Si vous souhaitez conserver dans cet enregistrement la valeur de *leChamp* ayant provoqué sa création, assignez-la au champ correspondant. Utilisez ensuite la commande [SAVE RELATED ONE](save-related-one.md) pour sauvegarder le nouvel enregistrement. 

Si un enregistrement lié existe déjà, la commande **CREATE RELATED ONE** a alors exactement le même effet que [RELATE ONE](relate-one.md) : elle charge en mémoire l'enregistrement lié.

#### Voir aussi 

[SAVE RELATED ONE](save-related-one.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 65 |
| Thread safe | &check; |
| Interdite sur le serveur ||


