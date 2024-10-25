---
id: set-blob-size
title: SET BLOB SIZE
slug: /commands/set-blob-size
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOB SIZE.Syntax-->**SET BLOB SIZE** ( *blob* ; *taille* {; *remplisseur*} )<!-- END REF-->
<!--REF #_command_.SET BLOB SIZE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | Champ ou variable de type BLOB |
| taille | Integer | &#8594;  | Nouvelle taille de BLOB |
| remplisseur | Integer | &#8594;  | Code du caractère de remplissage |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET BLOB SIZE.Summary-->**SET BLOB SIZE** redimensionne *blob* selon la valeur passée dans le paramètre *taille*.<!-- END REF-->

Si vous souhaitez que les nouveaux octets réservés (s'il y en a) pour le BLOB soient initialisés avec une valeur particulière, passez cette valeur (comprise entre 0 et 255) dans le paramètre optionnel *remplisseur*.

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Gestion des erreurs 

Si vous ne pouvez pas redimensionner le BLOB parce qu'il n'y a pas assez de mémoire, l'erreur –*108* est générée. Vous pouvez installer une méthode avec la commande [ON ERR CALL](on-err-call.md) pour interrompre la méthode lorsqu'une erreur survient.

#### Exemple 1 

Lorsque vous n'avez plus besoin d'un BLOB process ou interprocess, il est préférable de libérer la mémoire qu'il occupe. Pour cela, écrivez le code suivant :

```4d
 SET BLOB SIZE(vProcessBLOB;0)
 SET BLOB SIZE(◊vInterprocessBLOB;0)
```

#### Exemple 2 

L'exemple suivant crée un BLOB de 16 Ko et remplit chaque octet avec la valeur 0xFF :

```4d
 var vxData : Blob
 SET BLOB SIZE(vxData;16*1024;0xFF)
```

#### Voir aussi 

[BLOB size](blob-size.md)  