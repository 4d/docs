---
id: integrate-mirror-log-file
title: INTEGRATE MIRROR LOG FILE
slug: /commands/integrate-mirror-log-file
displayed_sidebar: docs
---

<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Syntax-->**INTEGRATE MIRROR LOG FILE** ( *cheminAccès* ; *numOpération* {; *mode* {; *objErreur*}} )<!-- END REF-->
<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminAccès | Text | &#8594;  | Nom ou chemin d’accès du fichier d’historique à intégrer |
| numOpération | Real | &#8594;  | Numéro de la dernière opération intégrée ou -2 pour tout intégrer |
| &#8592; | Nouveau numéro de la dernière opération intégrée |
| mode | Integer | &#8594;  | 0=mode strict (mode par défaut), 1=mode réparation auto |
| objErreur | Object | &#8592; | Opération(s) manquante(s) |

<!-- END REF-->

#### Description 

<!--REF #_command_.INTEGRATE MIRROR LOG FILE.Summary-->**Note préliminaire :** Cette commande ne fonctionne qu’avec 4D Server.<!-- END REF--> Elle ne peut être exécutée que via la commande [Execute on server](execute-on-server.md) ou dans une procédure stockée.

La commande **INTEGRATE MIRROR LOG FILE** permet d’intégrer le fichier d’historique désigné par *cheminAccès* dans une base 4D Server, à la suite de l’opération *numOpération*. La commande accepte d’intégrer tout fichier d’historique dans la base, même s’il ne correspond pas au fichier de données. Cette commande est particulièrement destinée à une utilisation dans le contexte d’une base miroir. 

**Note :** Depuis 4D v14, il est possible d’utiliser un fichier d’historique dans le contexte d’une base miroir : l’option "Utiliser fichier d’historique" peut désormais être cochée dans les propriétés d’une base 4D Server utilisée comme miroir logique, permettant la mise en place de serveurs miroirs en série (cf. section *Mise en place d'un miroir logique* dans le manuel de 4D Server).

A la différence de la commande *\_o\_INTEGRATE LOG FILE*, la commande **INTEGRATE MIRROR LOG FILE** ne substitue pas le fichier d’historique intégré à l’historique courant à l’issue de son exécution : le fichier d’historique de la base continue d’être utilisé. Par conséquent, les modifications effectuées lors de l’intégration sont enregistrées dans le fichier d’historique courant. 

Passez dans *cheminAccès* un chemin d’accès absolu ou relatif au dossier de la base. Si vous passez une chaîne vide dans ce paramètre, une boîte de dialogue standard d’ouverture de fichier s’affiche, permettant de désigner le fichier à intégrer. Si la boîte de dialogue est annulée, aucun fichier n’est intégré et la variable système *OK* prend la valeur 0.

Passez dans la variable *numOpération* le numéro de la dernière opération intégrée, afin que l’intégration débute à l'opération suivante. A l’issue de l’intégration, la valeur de la variable *numOpération* est mise à jour avec le numéro de la dernière opération intégrée. Vous devez alors stocker cette variable puis la réutiliser directement comme paramètre *numOpération* lors de l'opération d'intégration suivante. Ce principe vous permet d’enchaîner les intégrations d’historiques à l'aide de **INTEGRATE MIRROR LOG FILE**. Passez la valeur -2 dans la variable si vous souhaitez intégrer la totalité du fichier.

**Note de compatibilité :* Dans les versions de 4D antérieures à la v15 R4, le paramètre numOpération était optionnel. Désormais, si le paramètre numOpération est omis, une erreur est générée. Pour rétablir le fonctionnement initial de votre ancien code, passez simplement une variable avec la valeur -2 dans le paramètre numOpération.* 

Le paramètre *mode* vous permet de spécifier le mode d'intégration que vous souhaitez utiliser. Vous pouvez passer une des constantes suivantes, placées dans le thème "*Sauvegarde et restitution*" :

| Constante        | Type        | Valeur | Comment                                                                                                                     |
| ---------------- | ----------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| Auto repair mode | Entier long | 1      | Utiliser le mode flexible avec réparation automatique et remplir le paramètre *objErreur* (si passé)                        |
| Strict mode      | Entier long | 0      | Utiliser le mode d'intégration avec contrôle strict des opérations (option par défaut). Recommandé dans la plupart des cas. |

* Strict mode : Dans ce mode, dès qu'une erreur se produit au cours de l'intégration, la procédure est stoppée et vous devez utiliser le CSM pour tracer l'erreur. Ce mode sécurisé est utilisé par défaut et est recommandé dans la plupart des cas.
* Auto repair mode : Dans ce mode, lorsqu'une erreur non critique est détectée, elle est "réparée" et l'intégration se poursuit. Si vous avez passé le paramètre *objErreur*, chaque erreur est enregistrée et pourra être analysée par la suite.  
Les cas d'erreurs non critiques sont les suivants :  
   * Le fichier d'historique demande à ajouter un enregistrement mais l'enregistrement existe déjà dans les données.  
   Action de réparation : 4D met à jour l'enregistrement.  
   * Le fichier d'historique demande à mettre à jour un enregistrement mais l'enregistrement n'existe pas.  
   Action de réparation : 4D ajoute l'enregistrement.  
   * Le fichier d'historique demande à supprimer un enregistrement mais l'enregistrement n'existe pas.  
   Action de réparation : 4D ne fait rien.

**Note :** En mode strict (mode par défaut), l’intégration stoppe à la première erreur rencontrée. Si vous souhaitez poursuivre l’intégration dans ce cas, il sera nécessaire d’utiliser le CSM.

Lorsqu'une anomalie se produit en mode réparation auto, l'enregistrement concerné est automatiquement "réparé" et l'opération associée est enregistrée dans le paramètre *objErreur*. Une fois l'intégration terminée, le paramètre *objErreur* contient la liste de tous les enregistrements réparés. Il se compose d'un unique tableau d'objets nommé "operations", structuré de la manière suivante :

```json
{"operations":    [        {            "operationType":24,            "operationName":"Create record",            "operationNumber":2,            "contextID":48,            "timeStamp":"2015-07-10T07:53:02.413Z",            "dataLen":24,            "recordNumber":0,            "tableID":"F4CXXXXX",            "tableName":"Customers",            "fields": {                "1": 9,                "2": "test value",                "3": "2003-03-03T00:00:00.000Z",                "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",                "8": "BlobID: 2"              }        },        {...}     ]
```

**Attention :** Le mode réparation auto doit être activé dans des cas spécifiques car il contourne les sécurités intégrées de 4D chargées de contrôler l'intégrité des données. Il peut être utilisé, par exemple, lorsqu'un fichier d'historique intermédiaire a été perdu ou corrompu et que vous souhaitez récupérer autant d'opérations que possible. Dans tous les cas, vous devez être particulièrement vigilant en ce qui concerne l'intégrité des données lorsque ce mode est activé.

##### 

La liste effective des propriétés présentes dans l'objet "operations" dépend du type d'opération (i.e.: création, suppression ou modification de l'enregistrement, créer Blob, etc.). Les principales propriétés sont les suivantes :

* *operationType* : Code interne de l'opération
* *operationName* : Type d'opération, par exemple "create record," "modify record"
* *operationNumber* : Numéro interne de l'opération dans le fichier d'historique
* *contextID* : ID du contexte d'exécution ; le contexte est détaillé dans la section *extraData*
* *timeStamp* : horodatage de l'opération dans le fichier d'historique
* *dataLen* : taille interne des données
* *recordNumber* : numéro interne d'enregistrement
* *tableID* : ID interne de la table
* *tableName* : nom de la table
* *fields* : objet contenant la liste des numéros de champ ainsi que leur valeur. Tous les champs de la table sont listés.  
Dans le cas de valeurs de type Blob ou image, différentes informations sont stockées en fonction de leur mode de stockage :  
   * si le Blob ou l'image est stocké(e) dans le fichier de données, la propriété sera "BlobID:"+ un numéro de Blob interne, par exemple : "BlobID:1"  
   * si le Blob ou l'image est stocké(e) à l'extérieur du fichier de données, la propriété sera "BlobPath:" + chemin du fichier, par exemple : "BlobPath: Table 1/Field 6/Data\_EE12D091535F9748BCE62EDE972A4BA2.jpg"
* *extraData* : données du contexte de l'utilisateur, incluant son nom et son ID, le nom et l'ID de la tâche, le nom de la machine hôte ainsi que la version du client.
* *sequenceNumber* : numéro courant au sein d'une séquence d'incrémentation automatique.
* *primaryKey* : valeur de clé primaire.

#### Exemple 

Vous voulez intégrer un fichier d'historique sur le serveur miroir en mode réparation auto :

```4d
  //à exécuter sur le serveur
 var $err : Object
 var $num : Integer //-2 pour tout intégrer
 INTEGRATE MIRROR LOG FILE("c:\\mirror\\logNew.journal";$num;Auto repair mode;$err)
```

#### Variables et ensembles système 

Si l'intégration s'effectue correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. 

#### Voir aussi 

[LOG FILE TO JSON](log-file-to-json.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1312 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


