---
id: vp-set-print-info
title: VP SET PRINT INFO
---

<!-- REF #_method_.VP SET PRINT INFO.Syntax -->

**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET PRINT INFO.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro                                                  |                  |
| printInfo  | Object  | -> | Objet contenant les attributs d'impression                                  |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

## Description

La commande `VP SET PRINT INFO` <!-- REF #_method_.VP SET PRINT INFO.Summary -->définit les attributs à utiliser lors de l'impression du *vpAreaName*<!-- END REF -->.

Passez le nom de la zone 4D View Pro pour l'imprimer dans *vpAreaName*. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez passer un objet contenant des définitions pour divers attributs d'impression dans le paramètre *printInfo*. Pour afficher la liste complète des attributs disponibles, voir [Attributs d'impression](../configuring.md#print-attributes).

Dans le paramètre optionnel *sheet*, vous pouvez définir une feuille (sheet) spécifique à imprimer (la numérotation démarre à zéro). Si le paramètre est omis, la feuille courante est utilisée par défaut. Vous pouvez sélectionner explicitement la feuille courante à l'aide de la constante suivante :

- `vk current sheet`

## Exemple

Le code suivant imprimera une nouvelle zone 4D View Pro dans un document PDF :

```4d
var $printInfo : Object

//Déclarer l'objet attributs d'impression
$printInfo:=New object

//Définir attributs d'impression
$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"
$printInfo.firstPageNumber:=1
$printInfo.footerRight:="page &P of &N"
$printInfo.orientation:=vk print page orientation landscape
$printInfo.centering:=vk print centering horizontal
$printInfo.columnStart:=0
$printInfo.columnEnd:=8
$printInfo.rowStart:=0
$printInfo.rowEnd:=24

$printInfo.showGridLine:=True

//Ajouter le logo de l'entreprise
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

//Imprimer le document PDF
VP SET PRINT INFO ("ViewProArea";$printInfo)

//Exporter le PDF
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))
```

Le PDF :

![](../../assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)

## Voir également

[4D View Pro print attributes](../configuring.md#print-attributes)<br/>
[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP Get print info](vp-get-print-info.md)<br/>
[VP PRINT](vp-print.md)
