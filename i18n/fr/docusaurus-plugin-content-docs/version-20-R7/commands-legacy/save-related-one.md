---
id: save-related-one
title: SAVE RELATED ONE
slug: /commands/save-related-one
displayed_sidebar: docs
---

<!--REF #_command_.SAVE RELATED ONE.Syntax-->**SAVE RELATED ONE** ( *leChamp* )<!-- END REF-->
<!--REF #_command_.SAVE RELATED ONE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ N |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE RELATED ONE.Summary-->**SAVE RELATED ONE** sauvegarde l'enregistrement lié à *leChamp*.<!-- END REF--> Vous pouvez exécuter une commande **SAVE RELATED ONE** pour mettre à jour un enregistrement créé par [CREATE RELATED ONE](create-related-one.md), ou bien lorsque vous voulez sauvegarder des modifications apportées à un enregistrement chargé par [RELATE ONE](relate-one.md). 

**SAVE RELATED ONE** ne sauvegardera pas un enregistrement verrouillé. Lorsque vous appelez cette commande, vous devez tout d'abord vous assurer que l'enregistrement n'est pas verrouillé. S'il est verrouillé, la commande est ignorée, l'enregistrement n'est pas sauvegardé et aucune erreur ne vous est retournée. 

#### Voir aussi 

[CREATE RELATED ONE](create-related-one.md)  
[Locked](locked.md)  
*Présentation des triggers*  
[RELATE ONE](relate-one.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 43 |
| Thread safe | &check; |


