---
id: compress-blob
title: COMPRESS BLOB
slug: /commands/compress-blob
displayed_sidebar: docs
---

<!--REF #_command_.COMPRESS BLOB.Syntax-->**COMPRESS BLOB** ( *blob* {; *compression*} )<!-- END REF-->
<!--REF #_command_.COMPRESS BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB à compresser |
| compression | Integer | &#8594;  | Si ce paramètre est passé : 1= taux de compression maximum 2 = vitesse de compression maximum |

<!-- END REF-->

#### Description 

<!--REF #_command_.COMPRESS BLOB.Summary-->**COMPRESS BLOB** compresse le BLOB *blob* à l'aide d'un algorithme de compression.<!-- END REF-->

Le paramètre optionnel *compression* vous permet de fixer la façon dont le BLOB sera compressé. Passez dans ce paramètre une des constantes suivantes, placées dans le thème *BLOB* : 

| Constante                  | Type        | Valeur | Comment                                                                                                                                              |
| -------------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Compact compression mode   | Entier long | 1      | Compression interne la plus compacte (au détriment de la vitesse à laquelle la compression et la décompression sont effectuées). Méthode par défaut. |
| Fast compression mode      | Entier long | 2      | Compression/décompression interne la plus rapide au détriment du taux de compression (une fois compressé, le BLOB prend plus de place)               |
| GZIP best compression mode | Entier long | \-1    | Compression GZIP la plus compacte (au détriment de la vitesse à laquelle la compression et la décompression sont effectuées)                         |
| GZIP fast compression mode | Entier long | \-2    | Compression/décompression GZIP la plus rapide (au détriment du taux de compression)                                                                  |

  
Si vous passez une autre valeur ou si vous omettez le paramètre *compression*, la méthode de compression 1 est utilisée (algorithme interne compact).

**Note :** La commande compresse uniquement les BLOBs de taille supérieure ou égale à 255 octets.

Après que cette commande ait été appelée, la variable système OK prend la valeur 1 si le BLOB a été correctement compressé.   
Si la compression n'a pu être effectuée, OK prend la valeur 0\. Dans ce cas, si l'erreur provient du fait que la taille du BLOB est inférieure à 255 octets ou que la mémoire disponible est insuffisante pour effectuer l'opération, aucune erreur n'est générée, la méthode poursuit son exécution.   
En revanche, si l'erreur est causée par un problème plus important (le BLOB est endommagé), l'erreur -10600 est générée. Cette erreur, relativement rare, peut être interceptée à l'aide d'une méthode installée par la commande [ON ERR CALL](on-err-call.md).

Lorsqu'un BLOB a été compressé, vous pouvez le décompresser à l'aide de la commande [EXPAND BLOB](expand-blob.md).

Pour savoir si un BLOB a été compressé, utilisez la commande [BLOB PROPERTIES](blob-properties.md).

**ATTENTION :** Un BLOB compressé est toujours un BLOB, rien ne vous empêche donc de modifier son contenu. Cependant, si vous le modifiez, la commande [EXPAND BLOB](expand-blob.md) ne pourra plus décompresser correctement le BLOB.

#### Exemple 1 

L'exemple suivant teste si le BLOB *vxMonBlob* est compressé et, sinon, le compresse :

```4d
 BLOB PROPERTIES(vxMonBlob;$vlCompressé;$vlTailleDécompressée;$vlTailleCourante)
 If($vlCompressé=Is not compressed)
    COMPRESS BLOB(vxMonBlob)
 End if
```

Notez que si vous appliquez **COMPRESS BLOB** à un BLOB déjà compressé, la commande le détecte et ne fait rien.

#### Exemple 2 

L'exemple suivant vous permet de sélectionner un document puis de le compresser :

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       COMPRESS BLOB(vxBlob)
       If(OK=1)
          BLOB TO DOCUMENT(Document;vxBlob)
       End if
    End if
 End if
```

#### Exemple 3 

Envoi de données HTTP brutes compressées en GZIP :

```4d
 COMPRESS BLOB($blob;GZIP best compression mode )
 var $vEncoding : Text
 $vEncoding:="Content-encoding: gzip"
 WEB SET HTTP HEADER($vEncoding)
 WEB SEND RAW DATA($blob ;*)
```

#### Variables et ensembles système 

La variable OK prend la valeur 1 si le BLOB a été correctement compressé, sinon elle prend la valeur 0.

#### Voir aussi 

[BLOB PROPERTIES](blob-properties.md)  
[EXPAND BLOB](expand-blob.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 534 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


