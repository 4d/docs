---
id: load-variables
title: LOAD VARIABLES
slug: /commands/load-variables
displayed_sidebar: docs
---

<!--REF #_command_.LOAD VARIABLES.Syntax-->**LOAD VARIABLES** ( *nomFichier* ; *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.LOAD VARIABLES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Document contenant la ou les variable(s) à lire |
| variable | Variable | &#8592; | Nom de(s) variable(s) devant recevoir les valeurs |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOAD VARIABLES.Summary-->La commande **LOAD VARIABLES** charge une ou plusieurs variable(s) depuis le document désigné par *document*.<!-- END REF--> Ce document doit avoir été créé à l'aide de la commande [SAVE VARIABLES](save-variables.md).

Les variables *variable, variable2...variableN* sont soit créées, soit réécrites si elles existent déjà. 

Si vous passez une chaîne vide ("") dans *document*, une boîte de dialogue standard d'ouverture de fichiers apparaît, permettant à l'utilisateur de sélectionner le document à ouvrir. Dans ce cas, la variable système Document contiendra le nom du document choisi.

Dans le cadre de bases compilées, les variables utilisées doivent être du même type que celles chargées du disque. 

**ATTENTION :** Cette commande ne traite pas les variables de type Tableau. Pour cela, vous devez utiliser les commandes du thème BLOB.

#### Exemple 

L'exemple suivant charge trois variables d'un document nommé PrefsUti :

```4d
 LOAD VARIABLES("PrefsUti";VSNom;VLCode;VGIconPict)
```

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si les variables ont été correctement chargées, sinon elle prend la valeur 0\. 

#### Voir aussi 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  