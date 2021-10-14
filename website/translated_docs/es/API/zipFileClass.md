---
id: zipFileClass
title: ZIPFile
---

The following properties and functions from the [File](fileClass.md) class are available to `ZIPFile` objects:

| Available [File](fileClass.md) APIs for ZIPFile                                               | Comentario                             |
| --------------------------------------------------------------------------------------------- | -------------------------------------- |
| [**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D.File](fileClass.md#copyto)                   |                                        |
| [**.creationDate** : Date](fileClass.md#creationdate)         |                                        |
| [**.creationTime** : Time](fileClass.md#creationtime)         |                                        |
| [**.exists** : Boolean](fileClass.md#exists)                     |                                        |
| [**.extension** : Text](fileClass.md#extension)               |                                        |
| [**.fullName** : Text](fileClass.md#fullname)                 |                                        |
| [**.getContent( )** : Blob](fileClass.md#getcontent)           |                                        |
| [**.getIcon**( { *size* : Integer } ) : Picture](fileClass.md#geticon)                 |                                        |
| [**.getText**( { *charSetName* : Text } { ; } { *breakMode* : integer} ) : Text<br>**.getText**( { *charSetNum* : integer } { ; } { *breakMode* : integer} ) : Text](fileClass.md#gettext)                 |                                        |
| [**.hidden** : Boolean](fileClass.md#hidden)                     |                                        |
| [**.isAlias** : Boolean](fileClass.md#isalias)                   |                                        |
| [**.isFile** : Boolean](fileClass.md#isfile)                     |                                        |
| [**.isFolder** : Boolean](fileClass.md#ifFolder)                 |                                        |
| [**.isWritable** : Boolean](fileClass.md#iswritable)             | Always false with ZIP archive          |
| [**.modificationDate** : Date](fileClass.md#modificationdate) |                                        |
| [**.modificationTime** : Time](fileClass.md#modificationtime) |                                        |
| [**.name** : Text](fileClass.md#name)                         |                                        |
| [**.original** : 4D.File<br>**.original** : 4D.Folder](fileClass.md#original)                 |                                        |
| [**.parent** : 4D.Folder](fileClass.md#parent)                     |                                        |
| [**.path** : Text](fileClass.md#path)                         | Returns a path relative to the archive |
| [**.platformPath** : Text](fileClass.md#platformpath)         |                                        |

<style> h2 { background: #d9ebff;}</style>
