---
id: save-variables
title: SAVE VARIABLES
slug: /commands/save-variables
displayed_sidebar: docs
---

<!--REF #_command_.SAVE VARIABLES.Syntax-->**SAVE VARIABLES** ( *nomFichier* ; *variable* {; *variable2* ; ... ; *variableN*} )<!-- END REF-->
<!--REF #_command_.SAVE VARIABLES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom du document dans lequel sauvegarder la ou les variable(s) |
| variable | Variable | &#8594;  | Variable(s) à sauvegarder |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE VARIABLES.Summary-->La commande **SAVE VARIABLES** sauvegarde une ou plusieurs variable(s) dans un document disque dont le nom est passé dans le paramètre *document*.<!-- END REF-->

Les variables ne doivent pas obligatoirement être du même type, mais doivent avoir le type Texte, numérique, Date, Heure, Booléen ou Image. 

Si vous passez une chaîne vide ("") dans *document*, une boîte de dialogue standard d'enregistrement de fichiers apparaît, permettant à l'utilisateur de donner un nom au document à créer. Dans ce cas, la variable système Document récupère le nom du document, s'il a bien été créé.

Si les variables ont été correctement sauvegardées, la variable système OK prend la valeur 1\. Sinon, OK prend la valeur 0.

**Note :** Lorsque vous écrivez des variables dans des documents à l'aide de la commande **SAVE VARIABLES**, 4D utilise un format de données qui lui est propre. Vous ne pouvez récupérer les variables qu'avec la commande [LOAD VARIABLES](load-variables.md). N'utilisez pas les commandes [RECEIVE PACKET](receive-packet.md) ou [RECEIVE VARIABLE](receive-variable.md) pour lire un document créé par **SAVE VARIABLES**.

**ATTENTION :** La commande **SAVE VARIABLES** ne permet pas de sauvegarder les variables de type Tableau. Pour cela, vous devez utiliser les commandes du thème BLOB.

#### Exemple 

L'exemple suivant enregistre trois variables dans un fichier nommé PrefsUti :

```4d
 SAVE VARIABLES("PrefsUti";VSNom;VLCode;VGIconPict)
```

#### Variables et ensembles système 

Si l'opération s'est correctement déroulée, la variable OK prend la valeur 1, sinon elle prend la valeur 0\. 

#### Voir aussi 

[BLOB TO DOCUMENT](blob-to-document.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[LOAD VARIABLES](load-variables.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  
*Variables système*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 75 |
| Thread safe | &check; |
| Modifie les variables | OK, Document |
| Interdite sur le serveur ||


