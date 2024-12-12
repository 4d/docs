---
id: create-deployment-license
title: Create deployment license
slug: /commands/create-deployment-license
displayed_sidebar: docs
---

<!--REF #_command_.Create deployment license.Syntax-->**Create deployment license** ( *mergedApp* ; *buildLicense* {; *oemLicense*} ) : Object<!-- END REF-->
<!--REF #_command_.Create deployment license.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| mergedApp | 4D.Folder | &#8594;  | Folder containing the merged application |
| buildLicense | 4D.File | &#8594;  | License required to generate the embedded license |
| oemLicense | 4D.File | &#8594;  | 4D OEM XML Key license if server license |
| Résultat | Object | &#8592; | Status |

<!-- END REF-->

#### Description 

<!--REF #_command_.Create deployment license.Summary-->La commande **Create deployment license** crée un fichier de licence intégré dans le dossier Licences de l'application construite par la *mergedApp*.<!-- END REF--> Si le dossier Licences n'existe pas dans la *mergedApp*, il est créé par la commande.

Dans mergedApp, passez un objet [4D.Folder](https://developer.4d.com/docs/fr/API/FolderClass/) contenant une référence au dossier contenant l'application construite dans laquelle vous souhaitez intégrer une licence.

Dans licence, passez un objet [4D.File](https://developer.4d.com/docs/fr/API/FileClass/) contenant une référence au fichier de licence utilisé pour générer la licence intégrée.

If the build requires a specific OEM license (*4D OEM XML Keys*) and if no such license is already installed in the Licenses folder of the building machine, you need to pass it using the *oemLicense* parameter. This parameter is useful if you dedicate a machine to build your applications. 

Si la construction nécessite une licence OEM spécifique (*clés* *XML* *4D OEM*) et si une telle licence n'est pas déjà installée dans le dossier Licences de la machine de construction, vous devez la transmettre en utilisant le paramètre oemLicense. Ce paramètre est utile si vous dédiez une machine à la construction de vos applications.

La commande renvoie un objet *status* contenant les propriétés suivantes :

| **Propriété** | **Type**                                                   | **Description**                            |
| ------------- | ---------------------------------------------------------- | ------------------------------------------ |
| success       | Booléen                                                    | Vrai si le fichier de licence a été généré |
| file          | [4D.File](https://developer.4d.com/docs/fr/API/FileClass/) | Le fichier de licence généré               |
| statusText    | Texte                                                      | Description de l'erreur, s'il y a lieu     |
| errors        | Collection                                                 | Collection d'objets d'erreur               |
| \[\].message  | Texte                                                      | Message d'erreur                           |
| \[\].errCode  | Nombre                                                     | Numéro d'erreur                            |

**Notes :**

* La licence générée doit être utilisée uniquement avec l'application référencée par mergedApp.
* Il est nécessaire de régénérer la licence à chaque fois que l'application est reconstruite.

#### Exemple 

```4d
 var $status : Object
 var $application : 4D.File
 var $license : 4D.File
 $license:=Folder(fk desktop folder).file("4UUD200-xxx.license4D")
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;$license)
```

#### Voir aussi 

  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1811 |
| Thread safe | &cross; |


