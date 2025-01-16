---
id: blob-to-variable
title: BLOB TO VARIABLE
slug: /commands/blob-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO VARIABLE.Syntax-->**BLOB TO VARIABLE** ( *blob* ; *variable* {; *offset*} )<!-- END REF-->
<!--REF #_command_.BLOB TO VARIABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB contenant une ou plusieurs variable(s) 4D |
| variable | Variable | &#8592; | Variable à écrire avec le contenu de BLOB |
| offset | Integer | &#8596;  | Position de la variable dans BLOB |
|||| Position de la variable suivante dans BLOB |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB TO VARIABLE.Summary-->**BLOB TO VARIABLE** réécrit la variable *variable* avec les données stockées dans le BLOB *blob* à l'offset d'octet (à partir de zéro) spécifié par *offset*.<!-- END REF-->

Les données dans le BLOB doivent être compatibles avec la variable de destination : vous utiliserez généralement des BLOBs que vous avez précédemment remplis à l'aide de [VARIABLE TO BLOB](variable-to-blob.md).

Si vous ne spécifiez pas le paramètre *offset*, les données de la variable sont lues à partir du début du BLOB. Si le BLOB contient plusieurs variables, vous devez passer le paramètre *offset* ainsi qu'une variable numérique. Avant d'appeler la commande, définissez cette variable numérique avec l'offset correspondant. Après l'appel, la même variable numérique retourne l'offset de la variable suivante stockée dans le BLOB.

**Note:** **BLOB TO VARIABLE** prend en charge les variables objet de type [C\_OBJECT](c-object.md) et les variables collection de type [C\_COLLECTION](c-collection.md). Pour plus d'informations, reportez-vous à la commande [VARIABLE TO BLOB](variable-to-blob.md).

La variable OK prend la valeur 1 si l'opération s'est correctement déroulée. Si l'opération n'a pas pu être effectuée, par exemple à cause d'un manque de mémoire, la variable OK prend la valeur 0.

**Note sur l'indépendance de plate-forme :** **BLOB TO VARIABLE** et [VARIABLE TO BLOB](variable-to-blob.md) utilisent un format interne à 4D pour gérer les variables stockées dans les BLOBs. Vous n'avez donc pas besoin de vous préoccuper de la conversion des octets ("byte swapping") entre les différentes plates-formes lors de l'utilisation de ces deux commandes. Un BLOB créé sous Windows à l'aide de ces deux commandes peut être réutilisé sans la moindre manipulation sous Mac OS et vice-versa.

#### Exemple 

Référez-vous aux exemples de [VARIABLE TO BLOB](variable-to-blob.md).

#### Variables et ensembles système 

La variable OK prend la valeur 1 si la variable a été correctement réécrite, sinon elle prend la valeur 0.

#### Voir aussi 

[VARIABLE TO BLOB](variable-to-blob.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 533 |
| Thread safe | &check; |
| Modifie les variables | OK |


