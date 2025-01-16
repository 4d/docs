---
id: copy-document
title: COPY DOCUMENT
slug: /commands/copy-document
displayed_sidebar: docs
---

<!--REF #_command_.COPY DOCUMENT.Syntax-->**COPY DOCUMENT** ( *nomSource* ; *nomDest* {; *nouvNom*} {; *} )<!-- END REF-->
<!--REF #_command_.COPY DOCUMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomSource | Text | &#8594;  | Chemin d’accès du fichier ou du dossier à copier |
| nomDest | Text | &#8594;  | Nom ou chemin d’accès du fichier ou du dossier copié |
| nouvNom | Text | &#8594;  | Nouveau nom du fichier ou du dossier copié |
| * | Opérateur | &#8594;  | Remplacer le document existant le cas échéant |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY DOCUMENT.Summary-->La commande **COPY DOCUMENT** copie le fichier ou dossier désigné par *nomSource* à l'emplacement désigné par *nomDest* et le renomme optionnellement.<!-- END REF--> 
Dans ce cas, le paramètre *nomSource* peut contenir :  
   * soit un chemin d'accès complet de fichier, exprimé par rapport à la racine du volume,  
   * soit un chemin d'accès relatif au dossier de la base.  
Le paramètre *nomDest* peut contenir plusieurs types d'emplacements :  
   * un chemin d'accès complet de fichier exprimé par rapport à la racine du volume : le fichier est recopié à cet emplacement  
   * un nom de fichier ou un chemin d'accès de fichier relatif au dossier de la base : le fichier est recopié dans le dossier de la base (les sous-dossiers doivent exister)  
   * un chemin d'accès de dossier complet ou relatif au dossier de la base (*nomDest* doit se terminer par un séparateur de dossier de la plate-forme) : le fichier est recopié dans le dossier désigné. Les dossiers doivent déjà exister sur le disque, il ne sont pas pas créés.  
Une erreur est générée si un document nommé *nomDest* existe déjà, à moins que vous n'ayez spécifié le paramètre optionnel *\**, qui indique à **COPY DOCUMENT** de supprimer et de remplacer le document à l’emplacement de destination dans ce cas.
* **Copie de dossier**  
Pour indiquer que vous désignez un dossier, les chaînes passées dans *nomSource* et *nomDest* doivent se terminer par un séparateur de dossier de la plate-forme. Par exemple, sous Windows "C:\\\\Element\\\\" désigne un dossier et "C:\\\\Element" désigne un fichier.  
Pour recopier un dossier, passez son chemin d’accès complet dans *nomSource*. Ce dossier doit exister sur le disque.  
Lorsqu’un dossier est défini dans le paramètre *nomSource*, un dossier doit également être désigné dans le paramètre *nomDest*. Vous devez passer un chemin d’accès complet de dossier (dont chaque élément doit déjà exister sur le disque).  
Si un dossier du même nom que celui désigné par le paramètre *nomSource* existe déjà à l’emplacement défini par *nomDest* et n’est pas vide, 4D vérifie son contenu avant de copier les éléments. Une erreur est générée si un fichier du même nom existe déjà, à moins que vous n’ayez spécifié le paramètre optionnel *\**, qui indique à la commande de supprimer et de remplacer le document à l’emplacement de destination dans ce cas.

A noter que vous pouvez passer un fichier dans le paramètre *nomSource* et un dossier dans le paramètre *nomDest*, afin de copier un fichier dans un dossier.

Le paramètre optionnel *nouvNom*, s'il est passé, permet de renommer le document copié à son emplacement de destination (fichier ou dossier). Lorsqu’il est passé dans le contexte d’une copie de fichier, ce paramètre remplace le nom éventuellement passé via le paramètre *nomDest*.

#### Exemple 1 

L'exemple suivant duplique un document dans son propre dossier :

```4d
 COPY DOCUMENT("C:\\DOSSIER\\LeDoc";"C:\\DOSSIER\\LeDoc2")
```

#### Exemple 2 

L'exemple suivant copie un document dans le dossier de la base (dans la mesure où C:\\\\DOSSIER n'est pas le dossier de la base) :

```4d
 COPY DOCUMENT("C:\\DOSSIER\\LeDoc";"LeDoc")
```

#### Exemple 3 

L'exemple suivant copie un document d'un volume vers un autre :

```4d
 COPY DOCUMENT("C:\\DOSSIER\\LeDoc";"F:\\Archives\\LeDoc.OLD")
```

#### Exemple 4 

L'exemple suivant duplique un document dans son propre dossier, écrasant la précédente copie si elle existe :

```4d
 COPY DOCUMENT("C:\\DOSSIER\\LeDoc";"C:\\DOSSIER\\LeDoc2";*)
```

#### Exemple 5 

Copie d’un fichier dans un dossier spécifique en conservant le même nom :

```4d
 COPY DOCUMENT("C:\\Projets\\NomDoc";"C:\\Projets\\")
```

#### Exemple 6 

Copie d’un fichier dans un dossier spécifique en conservant le même nom et en remplaçant le document existant : 

```4d
 COPY DOCUMENT("C:\\Projets\\NomDoc";"C:\\Projets\\"; *)
```

#### Exemple 7 

Copie d’un dossier dans un autre dossier (les deux dossiers doivent exister sur le disque) : 

```4d
 COPY DOCUMENT("C:\\Projets\\";"C\\Archives\\2011\\")
```

#### Exemple 8 

Les exemples suivants créent différents fichiers et dossiers dans le dossier de la base (exemples Windows). Dans tous le cas, le dossier "dossier2" doit exister :

```4d
 COPY DOCUMENT("dossier1\\nom1";"dossier2\\")
     //crée le fichier "dossier2/nom1"
 
 COPY DOCUMENT("dossier1\\nom1";"dossier2\\" ; "nouveauté")
     //crée le fichier "dossier2/nouveauté"
 
 COPY DOCUMENT("dossier1\\nom1";"dossier2\\nom2")
     //crée le fichier "dossier2/nom2"
 
 COPY DOCUMENT("dossier1\\nom1";"dossier2\\nom2";"nouveauté")
     //crée le fichier "dossier2/nouveauté" (nom2 est ignoré)
 
 COPY DOCUMENT("dossier1\\" ; "dossier2\\")
     //crée le dossier "dossier2/dossier1/"
 
 COPY DOCUMENT("dossier1\\" ; "dossier2\\" ; "nouveauté")
     //crée le dossier "dossier2/nouveauté/"
```

#### Voir aussi 

[MOVE DOCUMENT](move-document.md)  
*Présentation des documents système*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 541 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


