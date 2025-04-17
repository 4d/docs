---
id: vp-print
title: VP PRINT
---

<!-- REF #_method_.VP PRINT.Syntax -->

**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP PRINT` <!-- REF #_method_.VP PRINT.Summary -->ouvre une fenêtre de dialogue d'impression pour imprimer *vpAreaName*<!-- END REF -->.

Passez la zone 4D View Pro à imprimer dans *vpAreaName*. La commande ouvrira la fenêtre de dialogue d'impression permettant de définir l'imprimante et les propriétés de la page.

> Les propriétés définies dans la fenêtre de dialogue d'impression concernent le papier de l'imprimante, ce ne sont pas les propriétés d'impression de la zone 4D View Pro. Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](vp-set-print-info.md) command. Il est fortement recommandé que les propriétés de l'imprimante et de la zone 4D View Pro correspondent, sinon le document imprimé pourrait ne pas correspondre à vos attentes.

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). S'il est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante ou le workbook entier à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

> * 4D View Pro areas can only be printed with the `VP PRINT` command.
> * Commands from the 4D **Printing** language theme are not supported by `VP PRINT`.
> * Cette commande est destinée à l'impression individuelle par l'utilisateur final. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](vp-export-document.md) method.

## Exemple

Le code suivant :

```4d
 VP PRINT("myVPArea")
```

... ouvrira une fenêtre de dialogue d'impression :

![](../../assets/en/ViewPro/cmd_vpPrint.PNG)

## Voir également

[VP EXPORT DOCUMENT](vp-export-document.md)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
