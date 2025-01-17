---
id: create-folder
title: CREATE FOLDER
slug: /commands/create-folder
displayed_sidebar: docs
---

<!--REF #_command_.CREATE FOLDER.Syntax-->**CREATE FOLDER** ( *cheminAccès* {; *} )<!-- END REF-->
<!--REF #_command_.CREATE FOLDER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminAccès | Text | &#8594;  | Chemin d'accès au nouveau dossier à créer |
| * | Opérateur | &#8594;  | Créer la hiérarchie du dossier |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE FOLDER.Summary-->La commande **CREATE FOLDER** crée un dossier en fonction du chemin d'accès que vous passez dans le paramètre *cheminAccès*.<!-- END REF-->

Si vous passez un nom dans *cheminAccès*, le dossier est créé dans le dossier de la base. 

Vous pouvez également passer dans *cheminAccès* une hiérarchie de dossiers à partir de la racine du volume ou du dossier de la base (dans ce cas, la chaîne doit se terminer par un séparateur de dossier).   
Si vous omettez le paramètre \*, une erreur est générée et aucun dossier n'est créé si au moins un dossier intermédiaire n'existe pas.   
Si vous passez le paramètre \*, **CREATE FOLDER** recrée la hiérarchie de dossiers si nécessaire et aucune erreur n'est générée. Dans ce cas, vous pouvez également passer un chemin d’accès de document dans *cheminAccès*. Le nom du document est alors ignoré mais la hiérarchie de dossiers définie dans *cheminAccès* est créée récursivement. 

#### Exemple 1 

L'exemple suivant crée le dossier “Archives” dans le dossier de la base :

```4d
 CREATE FOLDER("Archives")
```

#### Exemple 2 

L'exemple suivant crée le dossier “Archives” dans le dossier de la base, puis crée les sous-dossiers “Janvier” et “Février”:

```4d
 CREATE FOLDER("Archives")
 CREATE FOLDER("Archives\\Janvier")
 CREATE FOLDER("Archives\\Février")
```

#### Exemple 3 

L'exemple suivant crée le dossier “Archives” à la racine du volume C :

```4d
 CREATE FOLDER("C:\\Archives")
```

#### Exemple 4 

Création de la hiérarchie de dossiers "C:\\Archives\\2011\\January\\" : 

```4d
 CREATE FOLDER("C:\\Archives\\2011\\January\\";*)
```

#### Exemple 5 

Création du sous-dossier "\\February\\" dans le dossier existant "C:\\Archives\\" : 

```4d
 CREATE FOLDER("C:\\Archives\\2011\\February\\Doc.txt";*)
  // le fichier "Doc.txt" est ignoré
```

#### Voir aussi 

[FOLDER LIST](folder-list.md)  
[Test path name](test-path-name.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 475 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


