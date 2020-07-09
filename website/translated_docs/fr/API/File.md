---
id: file
title: File
---

Hérité de : [Document](Document.md)

## Propriétés

<!-- INCLUDE document.properties -->

## Méthodes





























| Nom                               | Description                               |
| --------------------------------- | ----------------------------------------- |
|<!-- INCLUDE document.methods -->|                                           |
| [create()](#create)               |<!-- INCLUDE File.create.Summary -->|
|                                   |<!--INCLUDE File.create.Syntax -->|
| [createAlias()](#createalias)     |<!-- INCLUDE File.createAlias.Summary -->|
|                                   |<!--INCLUDE File.createAlias.Syntax -->|
| [delete()](#delete)               |<!-- INCLUDE File.delete.Summary -->|
|                                   |<!-- INCLUDE File.delete.Syntax -->|
| [moveTo()](#moveto)               |<!-- INCLUDE File.moveTo.Summary -->|
|                                   |<!-- INCLUDE File.moveTo.Syntax -->|
| [rename()](#rename)               |<!-- INCLUDE File.rename.Summary -->|
|                                   |<!-- INCLUDE File.rename.Syntax -->|
| [setContent()](#setcontent)       |<!-- INCLUDE File.setContent.Summary -->|
|                                   |<!-- INCLUDE File.setContent.Syntax -->|
| [setText()](#settext)             |<!-- INCLUDE File.setText.Summary -->|
|                                   |<!-- INCLUDE File.setText.Syntax -->|

<!-- INCLUDE document.methods.Desc -->
## create()
<!--REF File.create.Syntax -->
**create** &rarr; booléen<!-- END REF -->

<!--REF File.create.Parameters -->
| Paramètres | Type    | Description                                           |
| ---------- | ------- | ----------------------------------------------------- |
| Résultat   | Booléen | Vrai si le fichier a été créé avec succès, sinon Faux |
<!-- END REF -->

<!-- REF File.create.Desc -->
#### Description
La méthode file.create( ) <!-- REF File.create.Summary -->crée un fichier sur disque en fonction des propriétés de l'objet fichier.<!-- END REF -->

Le cas échéant, la fonction crée la hiérarchie du dossier en se basant sur la description des propriétés fichier.platformPath ou fichier.path. Si le fichier existe déjà sur disque, la fonction ne fait rien (aucune erreur n'est générée) et retourne faux.

Valeur retournée

vrai si le fichier est créé avec succès; faux si un fichier portant le même nom existe déjà ou en cas d'erreur.

#### Exemple
Création d'un fichier de préférenes dans le dossier de la base de donées :
 ```4d
 C_BOOLEAN($created)
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
 ```
  <!-- END REF -->

## createAlias()
<!--REF File.createAlias.Syntax -->
 **file.createAlias** (*destinationFolder* ; *aliasName* {; *aliasType*} ) &rarr; Résultat<!-- END REF -->

 <!--REF File.createAlias.Parameters -->
| Paramètres        | Type        | Description                                       |
| ----------------- | ----------- | ------------------------------------------------- |
| destinationFolder | Objet       | Dossier de destination de l'alias ou du raccourci |
| aliasName         | Texte       | Nom de l'alias ou du raccourci                    |
| aliasType         | Entier long | Type du lien de l'alias                           |
| Résultat          | Objet       | Référence du dossier de l'alias ou du raccourci   |
<!-- END REF -->

<!-- REF File.createAlias.Desc -->
#### Description
La méthode file.createAlias( ) <!-- REF File.createAlias.Summary -->crée un alias (macOS) ou un raccourci (Windows) pour le fichier avec le nom nomAlias spécifié dans le dossier désigné par l'objet dossierDestination.<!-- END REF -->.

Passez le nom de l'alias ou du raccourci à créer dans le paramètre nomAlias.

Par défaut sur macOS, la méthode crée un alias standard. Vous pouvez également créer un lien symbolique à l'aide du paramètre typeAlias. Les constantes suivantes sont disponibles :
| Constante        | Valeur | Commentaire                               |
| ---------------- | ------ | ----------------------------------------- |
| fk alias link    | 0      | Lien alias (macOS uniquement)(par défaut) |
| fk symbolic link | 1      | Lien symbolique (macOS uniquement)        |

Sur Windows, un raccourci (fichier .lnk) est toujours créé (le paramètre typeAlias est ignoré).

Objet retourné

La méthode folder.createAlias( ) retourne un objet Folder avec la propriété dossier.isAlias mise à Vrai.

#### Exemple
Vous souhaitez créer un alias pour le fichier contenu dans votre dossier de base de données :
```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
 ```
 <!-- END REF -->

## delete()
<!--REF File.delete.Syntax -->
**file.delete()**<!-- END REF -->

<!-- REF File.delete.Desc -->
#### Description
La méthode file.delete( ) <!-- REF File.delete.Summary -->supprime le fichier.<!-- END REF -->

Si le fichier est ouvert, une erreur est générée.

Si le fichier n'existe pas sur disque, la méthode ne fait rien (aucune erreur n'est générée).

ATTENTION : file.delete( ) peut supprimer n'importe quel fichier sur un disque, y compris les documents créés avec d'autres applications ainsi que les applications elles-mêmes. file.delete( ) doit être utilisé avec beaucoup de précaution. La suppression d'un fichier est une opération permanente et irréversible.

#### Exemple
Vous souhaitez supprimer un fichier spécifique dans un dossier de base de données :
 ```4d
  $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("User preference file deleted.")
 End if
 ``` 
 <!-- END REF -->

## moveTo()
<!--REF File.moveTo.Syntax -->
 **moveTo** ( *dossierDestination * {; *nouveauNom*})  &rarr; Résultat<!-- END REF -->

<!--REF File.moveTo.Parameters -->
| Paramètres         | Type  | Description                    |
| ------------------ | ----- | ------------------------------ |
| dossierDestination | Objet | Dossier de destination         |
| nouveauNom         | Texte | Nom complet du fichier déplacé |
| Résultat           | Objet | Fichier déplacé                |
<!-- END REF -->

<!-- REF File.moveTo.Desc -->
#### Description
La méthode file.moveTo( ) <!-- REF File.moveTo.Summary -->déplace ou renomme l'objet File vers le dossierDestination spécifié.<!-- END REF -->

Le dossierDestination doit exister sur disque, sinon une erreur est générée.

Par défaut, le fichier garde le même nom lorsqu'il est déplacé. Si vous souhaitez renommer le fichier déplacé, passez le nom complet dans le paramètre nouveauNom. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

Objet retourné

La méthode retourne l'objet File déplacé.

#### Exemple
Vous souhaitez créer un alias pour le fichier contenu dans votre dossier de base de données :

 ```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
 ```
<!-- END REF -->

## rename()
<!--REF File.rename.Syntax -->
 **rename** ( nouveauNom ) &rarr; Résultat<!-- END REF -->

<!--REF File.rename.Parameters -->
| Paramètres | Type  | Description                    |
| ---------- | ----- | ------------------------------ |
| nouveauNom | Texte | Nouveau nom complet du fichier |
| Résultat   | Objet | Fichier renommé                |
<!-- END REF -->

<!-- REF File.rename.Desc -->
#### Description
La méthode file.rename( ) <!-- REF File.rename.Summary -->renomme le fichier avec le nom que vous avez passé dans le paramètre nouveauNom et retourne l'objet File renommé.<!-- END REF -->

Le paramètre nouveauNom doit être conforme aux règles de nommage (ex : il ne doit pas contenir des caractères tels que ":", "/", etc.), sinon une erreur est retournée. S'il existe déjà un fichier portant le même nom, une erreur est retournée.

A noter que la méthode modifie le nom complet du fichier, c'est-à-dire que si vous ne passez pas une extension dans le paramètre nouveauNom, le fichier aura un nom sans extension.

Objet retourné

La méthode retourne l'objet File renommé.

#### Exemple
Vous souhaitez que "ReadMe.txt" soit renommé "ReadMe_new.txt" :

 ```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
 ```
<!-- END REF -->

## setContent()

<!--REF File.setContent.Syntax -->
**file.setContent (contenu)** <!-- END REF -->

<!--REF File.setContent.Parameters -->
| Paramètres | Type | Description                |
| ---------- | ---- | -------------------------- |
| contenu    | BLOB | Nouveau contenu du fichier |
<!-- END REF -->

<!-- REF File.setContent.Desc -->
#### Description
La méthode file.setContent( ) <!-- REF File.setContent.Summary -->réécrit le contenu intégral du fichier à l'aide des données stockées dans le BLOB contenu. Pour plus d'informations sur les BLOB, veuillez vous reporter à la section Commandes du thème BLOB.
<!-- END REF -->

#### Exemple

 ```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
 ```
<!-- END REF -->

## setText()

<!--REF File.setText.Syntax -->
 **setText** ( texte {; jeuCaractères {;modeRetour }}) &rarr; blob<!-- END REF -->

<!--REF File.setText.Parameters -->
| Paramètres    | Type               | Description                                               |
| ------------- | ------------------ | --------------------------------------------------------- |
| Texte         | Texte              | Texte à stocker dans le fichier                           |
| jeuCaractères | Texte, Entier long | Nom ou Numéro de jeu de caractères                        |
| modeRetour    | Entier long        | Mode de traitement des retours à la ligne<!-- END REF -->

|<!-- REF File.setText.Desc -->
#### Description
La méthode file.setText( ) <!-- REF File.setText.Summary -->écrit texte comme nouveau contenu du fichier.<!-- END REF -->

Si le fichier référencé dans l'objet File n'existe pas sur disque, il est créé par la méthode. Lorsque le fichier existe déjà sur disque, son contenu antérieur est supprimé, sauf s'il est déjà ouvert, auquel cas son contenu est verrouillé et une erreur est générée.

Dans le paramètre texte, passez le texte à écrire dans le fichier. Il peut être littéral ("my text"), un champ texte ou une variable 4D.

Dans le paramètre jeuCaractères, passez le jeu de caractères à utiliser pour l'écriture du contenu. Vous pouvez passer une chaîne contenant le nom standard du jeu (par exemple “ISO-8859-1” ou “UTF-8”) ou son identifiant MIBEnum (entier long). Pour plus d'informations sur la liste des jeux de caractères pris en charge par 4D, veuillez vous reporter à la description de la commande CONVERT FROM TEXT.   Si un BOM (Byte Order Mark) existe pour le jeu de caractères, 4D l'insère dans le fichier.  Si vous n'indiquez pas un jeu de caractères, 4D utilise par défaut le jeu de caractères "UTF-8" et un BOM.

Dans le paramètre modeRetour, vous pouvez passer un entier long indiquant le traitement à appliquer aux caractères de fin de ligne avant de les sauvegarder dans le fichier. Les constantes suivantes du thème "Documents système" sont disponibles :

| Constante                   | Type        | Valeur | Commentaire                                                                                                                                                               |
| --------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document unchanged          | Entier long | 0      | Aucun traitement                                                                                                                                                          |
| Document with native format | Entier long | 1      | (Défaut) Les fins de ligne sont convertis au format natif de la plate-forme d’exécution : CR (carriage return) sous OS X, CRLF (carriage return + line feed) sous Windows |
| Document with CRLF          | Entier long | 2      | Les fins de ligne sont convertis au format Windows : CRLF (carriage return + line feed)                                                                                   |
| Document with CR            | Entier long | 3      | Les fins de ligne sont convertis au format OS X : CR (carriage return)                                                                                                    |
| Document with LF            | Entier long | 4      | Les fins de ligne sont convertis au format Unix : LF (line feed)                                                                                                          |

#### Exemple

  ```4d
  $myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
 $myFile.setText("Hello world")
 ```
<!-- END REF -->
