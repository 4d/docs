---
id: expand-blob
title: EXPAND BLOB
slug: /commands/expand-blob
displayed_sidebar: docs
---

<!--REF #_command_.EXPAND BLOB.Syntax-->**EXPAND BLOB** ( *blob* )<!-- END REF-->
<!--REF #_command_.EXPAND BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB à décompresser |

<!-- END REF-->

#### Description 

<!--REF #_command_.EXPAND BLOB.Summary-->**EXPAND BLOB** décompresse le BLOB *blob* préalablement compressé à l'aide de la commande [COMPRESS BLOB](compress-blob.md).<!-- END REF-->

Après l'appel de la commande, la variable système OK prend la valeur 1 si le BLOB a été correctement décompressé. 

Si la décompression n'a pas pu être effectuée, OK prend la valeur 0\.   
Dans ce cas, si l'erreur provient du fait que la mémoire disponible est insuffisante pour effectuer l'opération, aucune erreur n'est générée et la méthode poursuit son exécution.   
En revanche, si l'erreur est causée par un problème plus important (le BLOB n'avait pas été compressé ou le BLOB est endommagé), l'erreur -10600 est générée. Cette erreur peut être interceptée à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md). 

De manière générale, il est préférable d'appeler la commande [BLOB PROPERTIES](blob-properties.md) pour savoir si le BLOB a été compressé avant d'exécuter **EXPAND BLOB**.

#### Exemple 1 

L'exemple suivant teste si le BLOB *vxMonBlob* est compressé et, si oui, le décompresse :

```4d
 BLOB PROPERTIES(vxMonBlob;$vlCompressé;$vlTailleDécompressée;$vlTailleCourante)
 If($vlCompressé#Is not compressed)
    EXPAND BLOB(vxMonBlob)
 End if
```

#### Exemple 2 

L'exemple suivant vous permet de sélectionner un document et puis de le décompresser s'il était compressé :

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       BLOB PROPERTIES(vxBlob;$vlCompressé;$vlTailleDécompressée;$vlTailleCourante)
       If($vlCompressé#Is not compressed)
          EXPAND BLOB(vxBlob)
          If(OK=1)
             BLOB TO DOCUMENT(Document;vxBlob)
          End if
       End if
    End if
 End if
```

#### Variables et ensembles système 

La variable OK prend la valeur 1 si le BLOB a été correctement décompressé, sinon elle prend la valeur 0.

#### Voir aussi 

[BLOB PROPERTIES](blob-properties.md)  
[COMPRESS BLOB](compress-blob.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 535 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


