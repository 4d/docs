---
id: set-cursor
title: SET CURSOR
slug: /commands/set-cursor
displayed_sidebar: docs
---

<!--REF #_command_.SET CURSOR.Syntax-->**SET CURSOR** {( *curseur* )}<!-- END REF-->
<!--REF #_command_.SET CURSOR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| curseur | Integer | &#8594;  | Numéro de curseur système |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET CURSOR.Summary-->La commande **SET CURSOR** remplace le pointeur (graphique) de la souris par le pointeur système dont vous avez passé le numéro d'ID dans le paramètre *curseur*.<!-- END REF-->

Cette commande doit être appelée dans le contexte de l'[Form event code](../commands/form-event-code.md) On Mouse Move.

Pour restaurer le pointeur de souris standard, appelez la commande sans paramètre. 

Voici les curseurs disponibles :

| **Numéro** | **Curseur**                                   |
| ---------- | --------------------------------------------- |
| 1          | ![](../assets/en/commands/pict14679.fr.png)   |
| 2          | ![](../assets/en/commands/pict14680.fr.png)   |
| 4          | ![](../assets/en/commands/pict2478657.en.png) |
| 9000       | ![](../assets/en/commands/pict2478660.en.png) |
| 9001       | ![](../assets/en/commands/pict2478662.en.png) |
| 9003       | ![](../assets/en/commands/pict2478664.en.png) |
| 9004       | ![](../assets/en/commands/pict2478666.en.png) |
| 9005       | ![](../assets/en/commands/pict2478669.en.png) |
| 9006       | ![](../assets/en/commands/pict2478671.en.png) |
| 9021       | ![](../assets/en/commands/pict2478674.en.png) |
| 351        | ![](../assets/en/commands/pict2478676.en.png) |
| 9010       | ![](../assets/en/commands/pict2478688.en.png) |
| 9011       | ![](../assets/en/commands/pict2478678.en.png) |
| 9013       | ![](../assets/en/commands/pict2478680.en.png) |
| 9014       | ![](../assets/en/commands/pict2478682.en.png) |
| 9015       | ![](../assets/en/commands/pict2478686.en.png) |
| 9016       | ![](../assets/en/commands/pict2478684.en.png) |
| 9017       | ![](../assets/en/commands/pict2478690.en.png) |
| 9019       | ![](../assets/en/commands/pict2478692.en.png) |
| 9020       | ![](../assets/en/commands/pict2478694.en.png) |
| 559        | ![](../assets/en/commands/pict2478698.en.png) |
| 560        | ![](../assets/en/commands/pict2478696.en.png) |

**Note :** La disponibilité et l'apparence des curseurs varie en fonction du système d'exploitation. 

#### Exemple 

Vous souhaitez que le curseur se transforme en ![](../assets/en/commands/pict2478692.en.png) lorsque la souris survole une variable du formulaire. Dans la méthode de la variable, vous pouvez écrire :

```4d
 If(Form event code=On Mouse Move)
    SET CURSOR(9019)
 End if
```
