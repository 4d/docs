---
id: is-in-print-preview
title: Is in print preview
slug: /commands/is-in-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Is in print preview.Syntax-->**Is in print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Is in print preview.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai = Impression à l’écran, Faux = Pas d’impression écran |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is in print preview.Summary-->La commande **Is in print preview** retourne Vrai si l’option **Aperçu avant impression** est cochée dans la boîte de dialogue d’impression, et Faux sinon.<!-- END REF--> Ce paramétrage est local au process. 

A la différence de la commande [Get print preview](get-print-preview.md), **Is in print preview** retourne la valeur finale de l’option, après validation de la boîte de dialogue par l’utilisateur. Cette commande vous permet donc de déterminer avec certitude si l’impression a effectivement lieu en mode "aperçu". 

#### Exemple 

Cet exemple permet de prendre en compte tous les types d’impressions : 

```4d
 SET PRINT PREVIEW(True) //Impression écran par défaut
 PRINT SETTINGS
 If(OK=1)
  //L’utilisateur peut avoir changé la destination d’impression
    If(Is in print preview)  // Vrai si aperçu
       FORM SET OUTPUT([Factures];"versEcran")
    Else
       FORM SET OUTPUT([Factures];"versImprimante")
    End if
    OPEN PRINTING JOB
    ALL RECORDS([Factures])
    PRINT SELECTION([Factures];>)
    CLOSE PRINTING JOB
 End if
```

#### Voir aussi 

[Get print preview](get-print-preview.md)  
[SET PRINT PREVIEW](set-print-preview.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1198 |
| Thread safe | &check; |
| Interdite sur le serveur ||


