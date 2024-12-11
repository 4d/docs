---
id: get-missing-table-names
title: GET MISSING TABLE NAMES
slug: /commands/get-missing-table-names
displayed_sidebar: docs
---

<!--REF #_command_.GET MISSING TABLE NAMES.Syntax-->**GET MISSING TABLE NAMES** ( *tabManquantes* )<!-- END REF-->
<!--REF #_command_.GET MISSING TABLE NAMES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabManquantes | Text array | &#8592; | Noms des tables manquantes dans la base |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MISSING TABLE NAMES.Summary-->La commande **GET MISSING TABLE NAMES** retourne dans le tableau *tabManquantes* les noms de toutes les tables manquantes de la base courante.<!-- END REF-->

Les tables manquantes sont des tables dont les données sont présentes dans le fichier de données mais qui n’existent pas au niveau de la structure courante. Ce cas se produit lorsqu’un fichier de données est ouvert avec des versions différentes de la structure. 

Typiquement, le scénario est le suivant :

* le développeur fournit une structure contenant les tables A, B et C,
* l’utilisateur ajoute des tables personnalisées D et E à l’aide, par exemple, des commandes *SQL* intégrées de 4D, et stocke des données dans ces tables,
* le développeur fournit une nouvelle version de la structure. Elle ne contient pas les tables D et E.  
Dans ce cas, la version utilisateur de la base contient toujours les données des tables D et E, mais elles ne sont plus accessibles. La commande **GET MISSING TABLE NAMES** retournera les noms "D" et "E".

Une fois que vous avez identifié les tables manquantes de la base, vous pouvez les réactiver via la commande [REGENERATE MISSING TABLE](regenerate-missing-table.md).

**Note :** Les données des tables manquantes sont effacées en cas de compactage du fichier de données (si les tables n’ont pas été regénérées entre-temps). 

#### Voir aussi 

[REGENERATE MISSING TABLE](regenerate-missing-table.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1125 |
| Thread safe | &check; |
| Interdite sur le serveur ||


