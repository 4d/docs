---
id: blob-to-print-settings
title: BLOB to print settings
slug: /commands/blob-to-print-settings
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to print settings.Syntax-->**BLOB to print settings** ( *paramImpression* {; *param*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to print settings.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| paramImpression | Blob | &#8594;  | BLOB contenant les paramètres d’impression |
| param | Integer | &#8594;  | 0=Utilise les valeurs sauvegardées pour le nombre de copies et la plage d'impression, 1=Réinitialise aux valeurs par défaut |
| Résultat | Integer | &#8592; | Code d'état : 1=Opération réussie, 0=Pas d'imprimante courante, -1=Paramètres incorrects, 2=L'imprimante a changé |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB to print settings.Summary-->La commande **BLOB to print settings** remplace les paramètres d’impression courants de 4D par les paramètres stockés dans le BLOB *paramImpression*.<!-- END REF--> Ce BLOB doit avoir été généré par la commande [Print settings to BLOB](print-settings-to-blob.md) ou par la commande de 4D Pack  (voir ci-dessous).

Le paramètre *param* permet de définir la façon de gérer les paramètres de base "nombre de copies" et "plage d'impression" : 

* si vous passez 0 ou omettez ce paramètre, les valeurs stockées dans le BLOB sont utilisées pour l'impression.
* si vous passez 1, les valeurs sont réinitialisées aux valeurs par défaut : le nombre de copies est fixé à 1, et la plage d'impression est fixée à "toutes les pages".

Les paramètres d'impression s'appliquent aux [paramètres courants de l'impression 4D](https://developer.4d.com/docs/fr/settings/compatibility/) jusqu'à ce qu'une commande telle que *\_o\_PAGE SETUP*, [SET PRINT OPTION](set-print-option.md) ou [PRINT SELECTION](print-selection.md) sans le paramètre > les modifie. Les paramètres fixés sont utilisés plus particulièrement par les commandes [PRINT SELECTION](print-selection.md), [PRINT LABEL](print-label.md), [PRINT RECORD](print-record.md), [Print form](print-form.md) et [QR REPORT](qr-report.md), ainsi que par les commandes d'impression dans les menus de 4D, y compris ceux de l'environnement Développement.

Les commandes [PRINT SELECTION](print-selection.md), [PRINT LABEL](print-label.md) et [PRINT RECORD](print-record.md) doivent être appelées avec le paramètre *\>* (si applicable) de façon à ce que les paramètres définis par **BLOB to print settings** soient gardés.

La commande retourne un des codes d'état suivants :

* \-1 : le BLOB est incorrect.
* 0 : aucune imprimante courante n'est sélectionnée (dans ce cas, la commande ne fait rien).
* 1 : le BLOB a été correctement chargé.
* 2 : le BLOB a été correctement chargé mais le nom de l'imprimante courante a changé (\*).  
**Note :** le code (2) est toujours retourné si le BLOB a été crée avec la commande de 4D Pack , même si le nom de l'imprimante n'a pas changé, car cette information n'est pas présente dans les BLOBs de 4D Pack.

(\*) Les paramètres dépendent de l'imprimante courante sélectionnée au moment où le BLOB a été stocké. Appliquer ces paramètres à une autre imprimante sera pris en charge si les deux imprimantes sont du même modèle. Si les imprimantes sont différentes, seuls les paramètres communs seront restaurés.

##### Windows / OS X 

Le BLOB *paramImpression* peut être sauvegardé et lu sur les deux plate-formes. Toutefois, même si certains paramètres d'impression sont communs, d'autres sont spécifiques à la plate-forme et dépendent du pilote d'impression et des versions de l'OS. Si le même BLOB *paramImpression* est partagé entre les deux plate-formes, vous pouvez perdre des informations.\*

Lorsque vous utilisez un environnement hétérogène, pour restaurer le maximum de paramètres d'impression disponibles pour chaque plate-forme (et pas seulement la partie commune), il est recommandé de gérer deux BLOBs *paramImpression*, un pour chaque plate-forme.

##### Compatibilité avec les commandes 4D Pack 

Les BLOBs de paramètres d'impression générés avec la commande 4D Pack  peuvent être chargés et utilisés par la commande **BLOB to print settings**. Notez toutefois que s'ils sont stockés avec [Print settings to BLOB](print-settings-to-blob.md), ils sont convertis et ne pourront plus être ouvert avec . La commande **BLOB to print settings** stocke davantage d'informations que la commande . 

#### Exemple 

Vous voulez appliquer des paramètres d'impression précédemment stockés sur disque au dialogue d'impression de 4D : 

```4d
 var curSettings : Blob
 DOCUMENT TO BLOB(Get 4D folder(Active 4D Folder)+"current4Dsettings.blob";curSettings)
  //current4Dsettings a été créé avec la commande Paramètres impression vers BLOB
 $err:=BLOB to print settings(curSettings;0)
 Case of
    :($err=1)
  //tout est OK
    :($err=2)
       CONFIRM("L'imprimante a changé. \n\nVérifiez les paramètres d'impression.")
       If(OK=1)
          PRINT SETTINGS
       End if
    :($err=0)
       ALERT("Il n'y a pas d'imprimante courante.")
    :($err=-1)
       ALERT("Fichier de paramètres invalide.")
 End case
```

#### Voir aussi 

[Print settings to BLOB](print-settings-to-blob.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1434 |
| Thread safe | &cross; |


