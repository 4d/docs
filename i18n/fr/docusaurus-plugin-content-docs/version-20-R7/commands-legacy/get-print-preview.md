---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai = Impression à l’écran, Faux = Pas d’impression écran |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Get print preview.Summary-->La commande **Get print preview** retourne Vrai si l’instruction [SET PRINT PREVIEW](set-print-preview.md) a été appelée avec la valeur **Vrai** dans le process courant.<!-- END REF-->

A noter que l’utilisateur peut modifier cette option avant de valider la boîte de dialogue. Pour obtenir le mode final d’impression, vous devez utiliser la commande [Is in print preview](is-in-print-preview.md). 

#### Voir aussi 

[Is in print preview](is-in-print-preview.md)  
[SET PRINT PREVIEW](set-print-preview.md)  