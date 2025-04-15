---
id: blob-properties
title: BLOB PROPERTIES
slug: /commands/blob-properties
displayed_sidebar: docs
---

<!--REF #_command_.BLOB PROPERTIES.Syntax-->**BLOB PROPERTIES** ( *blob* ; *compressé* {; *tailleDécompressée* {; *tailleCourante*}} )<!-- END REF-->
<!--REF #_command_.BLOB PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB sur lequel vous voulez obtenir des informations |
| compressé | Integer | &#8592; | 0 = pas de compression, 1 = interne compact, 2 = interne rapide, -1 = GZIP compact, -2 = GZIP rapide |
| tailleDécompressée | Integer | &#8592; | Taille du BLOB décompressé en octets |
| tailleCourante | Integer | &#8592; | Taille courante du BLOB en octets |

<!-- END REF-->

## Description 

<!--REF #_command_.BLOB PROPERTIES.Summary-->**BLOB PROPERTIES** retourne des informations sur le BLOB *blob*.<!-- END REF-->

Le paramètre *compressé* retourne une valeur indiquant si et comment le BLOB est compressé. Vous pouvez comparer cette valeur aux constantes suivantes, placées dans le thème *BLOB* :

| Constante                  | Type        | Valeur | Comment                                                                                                                                              |
| -------------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Compact compression mode   | Entier long | 1      | Compression interne la plus compacte (au détriment de la vitesse à laquelle la compression et la décompression sont effectuées). Méthode par défaut. |
| Fast compression mode      | Entier long | 2      | Compression/décompression interne la plus rapide au détriment du taux de compression (une fois compressé, le BLOB prend plus de place)               |
| GZIP best compression mode | Entier long | \-1    | Compression GZIP la plus compacte (au détriment de la vitesse à laquelle la compression et la décompression sont effectuées)                         |
| GZIP fast compression mode | Entier long | \-2    | Compression/décompression GZIP la plus rapide (au détriment du taux de compression)                                                                  |
| Is not compressed          | Entier long | 0      | Pas de compression                                                                                                                                   |

Quel que soit l'état de compression du BLOB, le paramètre *tailleDécompressée* retourne la taille du BLOB non compressé.

Le paramètre *tailleCourante* retourne la taille courante du BLOB. Si le BLOB est compressé, *tailleCourante* sera inférieur à *tailleDécompressée*. Si le BLOB n'est pas compressé, *tailleCourante* sera égal à *tailleDécompressée*.

## Exemple 1 

Référez-vous aux exemples des commandes [COMPRESS BLOB](compress-blob.md) et [EXPAND BLOB](expand-blob.md).

## Exemple 2 

Lorsqu'un BLOB est compressé, la méthode projet suivante vous permet de connaître le taux de place gagnée en compressant le BLOB :

```4d
  // Méthode projet Place gagnée par compression
  // Place gagnée par compression (Pointeur {; Pointeur } ) -> Entier long
  // Place gagnée par compression ( -> BLOB {; -> octetsGagnés } ) -> Pourcentage
 
 #DECLARE ($blob : Pointer ; $saved : Pointer ) -> $percent : Integer
 var $vlCompressé;$vlTailleDécompressée;$vlTailleCourante : Integer
 
 BLOB PROPERTIES($blob->;$vlCompressé;$vlTailleDécompressée;$vlTailleCourante)
 If($vlTailleDécompressée=0)
    $percent:=0
    If(Count parameters>=2)
       $saved->:=0
    End if
 Else
    $percent:=100-(($vlTailleCourante/$vlTailleDécompressée)*100)
    If(Count parameters>=2)
       $saved->:=$vlTailleDécompressée-$vlTailleCourante
    End if
 End if
```

Lorsque cette méthode est placée dans votre application, vous pouvez écrire :

```4d
  // ...
 COMPRESS BLOB(vxBlob)
 $vlPourcent:=Place gagnée par compression(->vxBlob;->vlTailleBlob)
 ALERT("La compression permet de gagner "+String(vlTailleBlob)+" octets, donc "+Chaine($vlPourcent;"#0%")+" d'espace.")
```

## Voir aussi 

[COMPRESS BLOB](compress-blob.md)  
[EXPAND BLOB](expand-blob.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 536 |
| Thread safe | &check; |


