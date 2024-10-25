---
id: set-print-preview
title: SET PRINT PREVIEW
slug: /commands/set-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT PREVIEW.Syntax-->**SET PRINT PREVIEW** ( *aperçu* )<!-- END REF-->
<!--REF #_command_.SET PRINT PREVIEW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| aperçu | Boolean | &#8594;  | Impression à l'écran (Vrai) ou non (Faux) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET PRINT PREVIEW.Summary-->La commande **SET PRINT PREVIEW** vous permet de sélectionner ou de désélectionner l'option d'**aperçu** dans la boîte de dialogue standard d'impression.<!-- END REF--> Si vous passez Vrai dans *aperçu*, l'option "à l'écran" sera cochée. Si vous passez Faux, elle ne sera pas cochée. Ce paramétrage est local au process et n'affecte pas les autres process ou utilisateurs.

**Note :** Sous Windows, vous pouvez définir le format de l'aperçu avant impression à l'aide de la commande [SET PRINT OPTION](set-print-option.md).

#### Exemple 

L'exemple suivant sélectionne l'option **A l'écran** pour afficher le résultat d'une recherche de clients à l'écran, puis la désélectionne.

```4d
 QUERY([Clients])
 If(OK=1)
    SET PRINT PREVIEW(True)
    PRINT SELECTION([Clients];*)
    SET PRINT PREVIEW(False)
 End if
```

#### Voir aussi 

[Get print preview](get-print-preview.md)  
[Is in print preview](is-in-print-preview.md)  