---
id: zipFolderClass
title: ZIPFolder
---


The following properties and functions from the [Folder](folderClass.md) class are available to `ZIPFolder` objects:


| Available [Folder](folderClass.md) APIs for ZIPFolder                                            | Comentario                                                                                                                        |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| [**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder](folderClass.md#copyto)                   |                                                                                                                                   |
| [**.creationDate** : Date](folderClass.md#creationdate)         | Date may be different for the `root` folder from a folder within the archive                                                      |
| [**.creationTime** : Time](folderClass.md#creationtime)         | Time may be different for the `root` folder from a folder within the archive                                                      |
| [**.exists** : Boolean](folderClass.md#exists)                     |                                                                                                                                   |
| [**.extension** : Text](folderClass.md#extension)               |                                                                                                                                   |
| [**.file**( *path* : Text ) : 4D.File](folderClass.md#file)                       |                                                                                                                                   |
| [**.files**( { *options* : Integer } ) : Collection](folderClass.md#files)                     |                                                                                                                                   |
| [**.folder**( *path* : Text ) : 4D.Folder](folderClass.md#folder)                   |                                                                                                                                   |
| [**.folders**( { *options* : Integer } ) : Collection](folderClass.md#folders)                 |                                                                                                                                   |
| [**.fullName** : Text](folderClass.md#fullname)                 |                                                                                                                                   |
| [**.getIcon**( { *size* : Integer } ) : Picture](folderClass.md#geticon)                 |                                                                                                                                   |
| [**.hidden** : Boolean](folderClass.md#hidden)                     |                                                                                                                                   |
| [**.isAlias** : Boolean](folderClass.md#isalias)                   |                                                                                                                                   |
| [**.isFile** : Boolean](folderClass.md#isfile)                     |                                                                                                                                   |
| [**.isFolder** : Boolean](folderClass.md#isfolder)                 |                                                                                                                                   |
| [**.isPackage** : Boolean](folderClass.md#ispackage)               |                                                                                                                                   |
| [**.modificationDate** : Date](folderClass.md#modificationdate) | Date may be different for the `root` folder from a folder within the archive                                                      |
| [**.modificationTime** : Time](folderClass.md#modificationtime) | Time may be different for the `root` folder from a folder within the archive                                                      |
| [**.name** : Text](folderClass.md#name)                         |                                                                                                                                   |
| [**.original** : 4D.Folder](folderClass.md#original)                 |                                                                                                                                   |
| [**.parent** : 4D.Folder](folderClass.md#parent)                     | The archive's virtual `root` folder has no parent. However, the folders within the archive may have a parent other than the root. |
| [**.path** : Text](folderClass.md#path)                         | Returns a path relative to the archive                                                                                            |
| [**.platformPath** : Text](folderClass.md#platformpath)         |                                                                                                                                   |

<style> h2 { background: #d9ebff;}</style>
