---
id: ZipFolderClass
title: ZIPFolder
---


The following properties and functions from the [Folder](FolderClass.md) class are available to `ZIPFolder` objects:


|Available [Folder](FolderClass.md) APIs for ZIPFolder|Comment |
|---|---|
|[**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder](FolderClass.md#copyto)||
|[**.creationDate** : Date](FolderClass.md#creationdate)|Date may be different for the `root` folder from a folder within the archive|
|[**.creationTime** : Time](FolderClass.md#creationtime)|Time may be different for the `root` folder from a folder within the archive|
|[**.exists** : Boolean](FolderClass.md#exists)||
|[**.extension** : Text](FolderClass.md#extension)||
|[**.file**( *path* : Text ) : 4D.File](FolderClass.md#file)||
|[**.files**( { *options* : Integer } ) : Collection](FolderClass.md#files)||
|[**.folder**( *path* : Text ) : 4D.Folder](FolderClass.md#folder)||
|[**.folders**( { *options* : Integer } ) : Collection](FolderClass.md#folders)||
|[**.fullName** : Text](FolderClass.md#fullname)||
|[**.getIcon**( { *size* : Integer } ) : Picture](FolderClass.md#geticon)||
|[**.hidden** : Boolean](FolderClass.md#hidden)||
|[**.isAlias** : Boolean](FolderClass.md#isalias)||
|[**.isFile** : Boolean](FolderClass.md#isfile)||
|[**.isFolder** : Boolean](FolderClass.md#isfolder)||
|[**.isPackage** : Boolean](FolderClass.md#ispackage)||
|[**.modificationDate** : Date](FolderClass.md#modificationdate)|Date may be different for the `root` folder from a folder within the archive|
|[**.modificationTime** : Time](FolderClass.md#modificationtime)|Time may be different for the `root` folder from a folder within the archive|
|[**.name** : Text](FolderClass.md#name)||
|[**.original** : 4D.Folder](FolderClass.md#original)||
|[**.parent** : 4D.Folder](FolderClass.md#parent)|The archive's virtual `root` folder has no parent. However, the folders within the archive may have a parent other than the root.|
|[**.path** : Text](FolderClass.md#path)|Returns a path relative to the archive|
|[**.platformPath** : Text](FolderClass.md#platformpath)||


<style> h2 { background: #d9ebff;}</style>
