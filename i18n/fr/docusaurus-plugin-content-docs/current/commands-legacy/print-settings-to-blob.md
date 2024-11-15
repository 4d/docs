---
id: print-settings-to-blob
title: Print settings to BLOB
slug: /commands/print-settings-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.Print settings to BLOB.Syntax-->**Print settings to BLOB** ( *paramImpression* ) : Integer<!-- END REF-->
<!--REF #_command_.Print settings to BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| paramImpression | Blob | &#8592; | Paramètres courants d'impression |
| Résultat | Integer | &#8592; | Code d'état : 1=Opération réussie, 0=Pas d'imprimante courante |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Print settings to BLOB.Summary-->La commande **Print settings to BLOB** sauvegarde les paramètres d'impression courants de 4D dans le BLOB *paramImpression*.<!-- END REF--> Le paramètre *paramImpression* stocke tous les paramètres utilisés pour l'impression :

* Paramètres de mise en page comme le papier, l'orientation, l'échelle...
* Paramètres d'impression comme le nombre de copies, la source du papier...

Cette commande doit être utilisée conjointement avec la commande [BLOB to print settings](blob-to-print-settings.md). Ces commandes vous permettent de sauvegarder les paramètres d'impression de l'utilisateur courant et de les recharger pour qu'il n'ait pas à préciser ses paramètres chaque fois qu'il imprime. De plus, cela permet de garder des paramètres d'impression "privés" (spécifiques à un pilote d'imprimante) qui ne sont pas disponibles dans les paramètres d'impression standard. 

Le BLOB généré ne doit pas être modifié par programmation : il ne peut être utilisé qu'avec la commande [BLOB to print settings](blob-to-print-settings.md).

La commande retourne 1 si le BLOB a été correctement généré et 0 si aucune imprimante courante n'est sélectionnée.

##### Windows / OS X 

Le BLOB *paramImpression* peut être sauvegardé et lu sur les deux plateformes. Toutefois, même si certains paramètres d'impression sont communs, d'autres sont spécifiques à la plateforme et dépendent du pilote d'impression et des versions de l'OS. Si le même BLOB *paramImpression* est partagé entre les deux plateformes, vous pouvez perdre des informations.  
  
Lorsque vous utilisez un environnement hétérogène, pour restaurer le maximum de paramètres d'impression disponibles pour chaque plateforme (et pas seulement la partie commune), il est recommandé de gérer deux BLOBs *paramImpression*, un pour chaque plateforme.

#### Exemple 

Vous voulez sauvegarder les paramètres d'impression courants sur disque :

```4d
 var curSettings : Blob
 PRINT SETTINGS //displays print settings dialog to the user
 If(OK=1)
    $err:=Print settings to BLOB(curSettings)
    If($err=1)
       BLOB TO DOCUMENT(Get 4D folder+"current4Dsettings.blob";curSettings)
    Else
       ALERT("Pas d'imprimante sélectionnée")
    End if
 End if
```

#### Voir aussi 

  
[BLOB to print settings](blob-to-print-settings.md)  