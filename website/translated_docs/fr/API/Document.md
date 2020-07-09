---
id: document
title: Document
---

## Description

## Propriétés

<!-- REF document.properties -->
| Nom                                                                          | Description                                                                                                                                                                            |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|<!-- REF document.creationDate -->[creationDate]()<!-- END REF -->|<!-- REF document.creationDateDesc -->retourne la date de création du fichier.<!-- END REF -->|
|<!-- REF document.creationTime -->[creationTime]()<!-- END REF -->| <!-- REF document.creationTimeDesc --> retourne l'heure de création du fichier (exprimée en secondes sous forme d'un nombre, commençant à 00:00). <!-- END REF -->|
|<!-- REF document.exists -->[exists]()<!-- END REF -->|<!-- REF document.existsDesc --> retourne vrai si le fichier existe sur le disque, sinon elle retourne faux.<!-- END REF -->|
|<!-- REF document.extension -->[extension]()<!-- END REF -->| <!-- REF document.extensionDesc -->retourne la date de création du fichier. <!-- END REF -->|
|<!-- REF document.fullName -->[fullName]()<!-- END REF -->|<!-- REF document.fullNameDesc -->retourne le nom complet du fichier, extension comprise (le cas échéant).<!-- END REF -->|
|<!-- REF document.hidden -->[hidden]() <!-- END REF -->|<!-- REF document.hiddenDesc -->  retourne vrai si le fichier est identifié comme "caché" au niveau du système, sinon elle retourne faux. <!-- END REF -->|
|<!-- REF document.isAlias -->[isAlias]()<!-- END REF -->| <!-- REF document.isAliasDesc -->retourne Vrai si le fichier est un alias, un raccourci ou un lien symbolique, sinon elle retourne Faux.<!-- END REF -->|
|<!-- REF document.isFile -->[isFile]() <!-- END REF -->|<!-- REF document.isFileDesc -->retourne toujours vrai pour un fichier.<!-- END REF -->|
|<!-- REF document.isFolder -->[isFolder]()<!-- END REF -->|<!-- REF document.isFolderDesc -->retourne systématiquement faux pour un fichier.<!-- END REF -->|
|<!-- REF document.isWritable -->[isWritable]()<!-- END REF -->|<!-- REF document.isWritableDesc -->retourne vrai si le fichier existe sur le disque et s'il est accessible en écriture.<!-- END REF -->|
|<!-- REF document.modificationDate -->[modificationDate]()<!-- END REF -->|<!-- REF document.modificationDateDesc --> retourne la date de la dernière modification apportée au fichier.<!-- END REF -->|
|<!-- REF document.modificationTime -->[modificationTime]()<!-- END REF -->|<!-- REF document.modificationTimeDesc -->retourne l'heure de la dernière modification du fichier (exprimée en secondes sous forme d'un nombre, commençant à 00:00).<!-- END REF -->|
|<!-- REF document.name -->[name]()<!-- END REF -->| <!-- REF document.nameDesc --> retourne le nom du fichier, sans extension (le cas échéant).<!-- END REF -->|
|<!-- REF document.original -->[original]() <!-- END REF -->|<!-- REF document.originalDesc -->retourne l'élément cible d'un alias, d'un raccourci ou d'un lien symbolique.<!-- END REF -->|
|<!-- REF document.parent -->[parent]()<!-- END REF -->|<!-- REF document.parentDesc -->retourne l'objet dossier parent du fichier. Si le chemin représente un filesystem  (ex : "/DATA/"), le filesystem est retourné.<!-- END REF -->|
|<!-- REF document.path -->[path]()<!-- END REF -->|<!-- REF document.pathDesc -->retourne le chemin POSIX du fichier. Si le chemin représente un filesystem (ex : "/DATA/"), le filesystem est retourné.<!-- END REF -->|
|<!-- REF document.platformPath -->[platformPath]()<!-- END REF -->|  <!-- REF document.platformPathDesc -->retourne le chemin du fichier exprimé dans la syntaxe de la plateforme. <!-- END REF -->|
<!-- END REF -->


## Méthodes

















| Nom                           | Description                                  |
| ----------------------------- | -------------------------------------------- |
|<!-- REF document.methods -->|                                              |
| [getContent()](#getcontent)   |<!-- INCLUDE Document.getContent.Summary -->|
|                               |<!--INCLUDE Document.getContent.Syntax -->|
| [copyTo()](#copyto)           |<!-- INCLUDE Document.copyTo.Summary -->|
|                               |<!--INCLUDE Document.copyTo.Syntax -->|
| [getText()](#gettext)         |<!-- INCLUDE Document.getText.Summary -->|
|                               |<!--INCLUDE Document.getText.Syntax -->|
| [getIcone()](#geticone)       |<!-- INCLUDE Document.getIcone.Summary -->|
|                               |<!--INCLUDE Document.getIcone.Syntax -->|
<!-- END REF -->
 
<!-- REF document.methods.Desc -->
## getContent()
<!-- REF Document.getContent.Syntax -->
**getContent** &rarr; Résultat<!-- END REF -->

<!-- REF Document.getContent.Parameters -->
| Paramètres | Type | Description        |
| ---------- | ---- | ------------------ |
| Résultat   | BLOB | Contenu du fichier |
<!-- END REF -->

<!-- REF Document.getContent.Desc -->
#### Description
La méthode file.getContent( ) retourne <!-- REF Document.getContent.Summary -->un BLOB avec le contenu intégral du fichier. Pour plus d'informations sur les BLOB, veuillez vous reporter à la section Commandes du thème BLOB.<!-- END REF -->

*Valeur retournée*

La méthode file.getContent( ) retourne un BLOB.

#### Exemple
Pour sauvegarder le contenu d'un document dans un champ BLOB :

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 <!-- END REF -->

## copyTo()

<!-- REF Document.copyTo.Syntax -->
**copyTo** (*destinationFolder*{;{*nouveauNom}*{;*écraser*} ) &rarr; Résultat<!-- END REF -->

<!-- REF Document.copyTo.Parameters -->
| Paramètres | Type | Description        |
| ---------- | ---- | ------------------ |
| Résultat   | BLOB | Contenu du fichier |
<!-- END REF -->

<!-- REF Document.copyTo.Desc -->
#### Description
La méthode file.copyTo( ) retourne <!-- REF Document.copyTo.Summary -->un BLOB avec le contenu intégral du fichier. Pour plus d'informations sur les BLOB, veuillez vous reporter à la section Commandes du thème BLOB.<!-- END REF -->

*Valeur retournée*

La méthode file.getContent( ) retourne un BLOB.

#### Exemple
Pour sauvegarder le contenu d'un document dans un champ BLOB :

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 <!-- END REF -->

## getText()
<!-- REF Document.getText.Syntax -->
**getText** &rarr; Résultat<!-- END REF -->

<!-- REF Document.getText.Parameters -->
| Paramètres | Type | Description        |
| ---------- | ---- | ------------------ |
| Résultat   | BLOB | Contenu du fichier |
<!-- END REF -->

<!-- REF Document.getText.Desc -->
#### Description
La méthode file.getContent( ) retourne <!-- REF Document.getText.Summary -->un BLOB avec le contenu intégral du fichier. Pour plus d'informations sur les BLOB, veuillez vous reporter à la section Commandes du thème BLOB.<!-- END REF -->

*Valeur retournée*

La méthode file.getContent( ) retourne un BLOB.

#### Exemple
Pour sauvegarder le contenu d'un document dans un champ BLOB :

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 <!-- END REF -->

## getIcone()
<!-- REF Document.getIcone.Syntax -->
**getIcone** &rarr; Résultat<!-- END REF -->

<!-- REF Document.getIcone.Parameters -->
| Paramètres | Type | Description        |
| ---------- | ---- | ------------------ |
| Résultat   | BLOB | Contenu du fichier |
<!-- END REF -->

<!-- REF Document.getIcone.Desc -->
#### Description
La méthode file.getIcon( ) retourne<!-- REF Document.getIcon.Summary -->un BLOB avec le contenu intégral du fichier. Pour plus d'informations sur les BLOB, veuillez vous reporter à la section Commandes du thème BLOB.<!-- END REF -->

*Valeur retournée*

La méthode file.getContent( ) retourne un BLOB.

#### Exemple
Pour sauvegarder le contenu d'un document dans un champ BLOB :

 ```4d
 C_TEXT($vPath)
 $vPath:=Select document("";"*";"Select a document";0)
 If(OK=1) //If a document has been chosen
    [aTable]aBlobField:=File($vPath;fk platform path).getContent()
 End if
 ```
 <!-- END REF -->
 <!-- END REF -->