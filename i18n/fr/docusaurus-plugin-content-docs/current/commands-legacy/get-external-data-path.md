---
id: get-external-data-path
title: Get external data path
slug: /commands/get-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.Get external data path.Syntax-->**Get external data path** ( *leChamp* ) : Text<!-- END REF-->
<!--REF #_command_.Get external data path.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leChamp | Text, Blob, Picture | &#8594;  | Champ dont vous souhaitez obtenir le lieu de stockage |
| Résultat | Text | &#8592; | Chemin d’accès complet du fichier de stockage externe |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get external data path.Summary-->La commande **Get external data path** retourne le chemin d’accès complet du fichier de stockage externe des données du champ passé dans le paramètre *leChamp*, pour l’enregistrement courant.<!-- END REF--> Le champ passé en paramètre doit être de type Texte, Blob ou Image. La commande retourne le chemin d'accès du fichier de stockage même si le fichier n'existe pas ou n'est pas accessible.

Cette commande vous permet notamment de recopier le fichier externe.

**Note :** Pour plus d’informations sur le stockage externe de données, reportez-vous au manuel *Mode Développement*.

 Cette commande retourne une chaîne vide dans les cas suivants :

* le champ n’est pas stocké en-dehors du fichier de données,
* le champ a une valeur Null (et ne contient pas de chemin d'accès),
* la commande est exécutée depuis un 4D distant.

#### Voir aussi 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  