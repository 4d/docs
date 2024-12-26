---
id: log-file-to-json
title: LOG FILE TO JSON
slug: /commands/log-file-to-json
displayed_sidebar: docs
---

<!--REF #_command_.LOG FILE TO JSON.Syntax-->**LOG FILE TO JSON** ( *cheminDossierDest* {; *tailleMax* {; *cheminHistorique* {; *attribChamp*}}} )<!-- END REF-->
<!--REF #_command_.LOG FILE TO JSON.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminDossierDest | Text | &#8594;  | Chemin d'accès du dossier de destination du fichier sauvegardé |
| tailleMax | Integer | &#8594;  | Taille maximale du fichier JSON à créer (octets) |
| cheminHistorique | Text | &#8594;  | Chemin d'accès du fichier d'historique à exporter ; utiliser l'historique courant si omis |
| attribChamp | Integer | &#8594;  | Attribut de description du champ : 1 = utiliser numéro (défaut), 2 = utiliser nom |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOG FILE TO JSON.Summary-->La commande **LOG FILE TO JSON** sauvegarde au format JSON le fichier d'historique courant ou tout fichier d'historique spécifié.<!-- END REF-->

Lorsqu'un fichier d'historique (fichier binaire) est sauvegardé au format JSON, son contenu peut alors être lu et interprété par l'administrateur de la base ou tout utilisateur afin d'analyser les événements de la base, par exemple.

Dans *cheminDossierDest*, passez le chemin du dossier dans lequel vous souhaitez stocker le fichier JSON. Le fichier sera nommé **JournalExport.json**.

Par défaut, la taille maximale du fichier JSON exporté est de 10 Mo. Lorsque cette taille est atteinte, le fichier est refermé et un nouveau fichier est créé. Limiter la taille de chaque fichier JSON réduit la quantité de mémoire requise pour analyser les fichiers. Vous pouvez modifier la taille maximale du fichier exporté en passant une valeur (en octets) dans le paramètre *tailleMax*. Passer 0 rétablit la valeur par défaut (10 Mo). Passer une valeur négative indique une taille illimitée.

Par défaut, si le paramètre *cheminHistorique* est omis, la commande sauvegarde le fichier d'historique courant. Si vous voulez exporter en JSON un fichier d'historique spécifique, passez son chemin d'accès dans le paramètre *cheminHistorique*. Ce fichier d'historique doit avoir l'extension ".journal". Si vous souhaitez exporter un fichier d'historique archivé (extension ".4bl"), vous devez au préalable le convertir à l'aide de la commande [RESTORE](restore.md). Vous pouvez passer une chaîne vide ("") afin d'afficher la boîte de dialogue standard d'ouverture de fichier, permettant à l'utilisateur de sélectionner le fichier d'historique à traiter. Le chemin du fichier sélectionné est retourné dans la variable système **Document**.

**Note :** Lorsque la commande sauvegarde le fichier d'historique courant, la base n'est pas verrouillée. De nouvelles opérations peuvent être exécutées tandis que le fichier est écrit sur le disque -- ces opérations ne seront pas incluses dans le fichier sauvegardé.

Lorsque vous exportez le fichier d'historique courant, le paramètre *attribChamp* vous permet de définir la manière dont les champs doivent être désignés dans les attributs exportés : via leur numéro (défaut) ou via leur nom. Vous pouvez passer une des constantes suivantes, placées dans le thème de constantes "*Sauvegarde et restitution*" :

| Constante                   | Type        | Valeur | Comment                                                                              |
| --------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------ |
| Field attribute with name   | Entier long | 2      | Les champs sont identifiés par leur nom. Exemple: {"Nom":"Jones"}                    |
| Field attribute with number | Entier long | 1      | Les champs sont identifiés par leur numéro (défaut si omis). Exemple: {"5":"Jones"}. |

**Note :** Lorsque vous exportez un fichier d'historique externe, les champs sont toujours désignés par leur numéro.

Le fichier JSON sauvegardé contient toutes les opérations enregistrées dans l'historique sous la forme d'un tableau d'objets JSON. Chaque objet contient plusieurs propriétés décrivant l'opération. Exemple :

```json
[   {      "operationType":25,      "operationName":"Modify record",      "operationNumber":45,      "contextID":37,      "timeStamp":"2019-12-11T09:13:17.138Z",      "dataLen":42,      "recordNumber":4,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": "primkey5",            "2": -5,            "5": "data 25"        },      "primaryKey": "8"   },   {      "operationType":23,      "operationName":"Save seqnum",      "operationNumber":46,      "contextID":37,      "timeStamp":"2019-12-11T09:13:18.155Z",      "sequenceNumber":23,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem"    },   {      "operationType":24,      "operationName":"Create record",      "operationNumber":47,      "contextID":37,      "timeStamp":"2019-12-11T09:13:19.228Z",      "dataLen":570,      "recordNumber":7,      "tableID":"5AFA15123F991C43B6ACF8B46A914BD0",      "tableName":"elem",      "fields": {            "1": 9,            "2": "test value",            "3": "2003-03-03T00:00:00.000Z",            "4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "8": "BlobID: 2"       },      "extraData": {          "task_id": 1,          "user_name": "Vanessa Smith",          "user4d_alias": "Default 4D User",          "user4d_id": 1,          "host_name": "iMac-VSmith-0833",          "task_name": "Application process",          "client_version": -1610541776      },      "primaryKey": "9"   }]
```

Note : Si vous passez Field attribute with name dans le paramètre *attribChamp*, l'objet "fields" contiendra :  

```json
...      "fields": {            "ID": 9,            "Field_2": "test value",            "Date_Field": "2003-03-03T00:00:00.000Z",            "Field_4": "BlobPath: Table 1/Field 4/Data_9ACB28F1A2744FDFA5822B22F18B2E12.png",            "Field_8": "BlobID: 2"       },...
```

##### 

La liste effective des propriétés dépend du type d'opération (i.e.: création, suppression ou modification de l'enregistrement, créer Blob, etc.). Les principales propriétés sont les suivantes :

* *operationType* : Code interne de l'opération
* *operationName* : Type d'opération, par exemple "create record," "modify record"
* *operationNumber* : Numéro interne de l'opération dans le fichier d'historique
* *contextID* : ID du contexte d'exécution ; le contexte est détaillé dans la section *extraData*
* *timeStamp* : horodatage de l'opération dans le fichier d'historique
* *dataLen* : taille interne des données
* *recordNumber* : numéro interne d'enregistrement
* *tableID* : ID interne de la table
* *tableName* : nom de la table
* *fields* : objet contenant la liste des numéros de champs (ou des noms de champs) ainsi que leur valeur. Tous les champs de la table dont la valeur a été modifiée sont listés. Dans le cas de valeurs de type Blob ou image, différentes informations sont stockées en fonction de leur mode de stockage :  
   * si le Blob ou l'image est stocké(e) dans le fichier de données, la propriété sera "BlobID:"+ un numéro de Blob interne, par exemple : "BlobID:1"  
   * si le Blob ou l'image est stocké(e) à l'extérieur du fichier de données, la propriété sera "BlobPath:" + chemin du fichier, par exemple : "BlobPath: Table 1/Field 6/Data\_EE12D091535F9748BCE62EDE972A4BA2.jpg"
* *extraData* : données du contexte de l'utilisateur, incluant son nom et son alias(\*), le nom et l'ID de la tâche, le nom de la machine hôte ainsi que la version du client.
* *sequenceNumber* : numéro courant au sein d'une séquence d'incrémentation automatique.
* *primaryKey* : valeur de clé primaire.

(\*) Dans les bases projets, la propriété "user4d\_id" n'est pas retournée.

#### Exemple 

Vous voulez sauvegarder le fichier d'historique courant en JSON :

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs")
```

Vous voulez sauvegarder un fichier d'historique spécifique en JSON avec les champs identifiés par nom :

```4d
 LOG FILE TO JSON("c:\\4Dv15\\ExportLogs";0;"c:\\4Dv15\\Backup\\old_myDB.journal";Field attribute with name)
```

#### Variables et ensembles système 

La commande **LOG FILE TO JSON** modifie la valeur des variables système OK et Document : si le fichier JSON a été correctement sauvegardé, OK prend la valeur 1 et Document contient le chemin du fichier d'historique. Si vous avez passé "" dans le paramètre *logPath* et que l'utilisateur a annulé la boîte de dialogue de sélection de fichier, OK prend la valeur 0 et Document contient une chaîne vide. Si l'utilisateur a sélectionné un fichier invalide, OK prend la valeur 0 et Document contient le chemin du fichier invalide.

#### Voir aussi 

  
[INTEGRATE MIRROR LOG FILE](integrate-mirror-log-file.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1352 |
| Thread safe | &check; |
| Modifie les variables | OK, Document |


