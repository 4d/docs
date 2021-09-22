---
id: ZipFolderClass
title: ZIPFolder
---


[Folder](FolderClass.md) クラスの次のプロパティや関数は `ZIPFolder` オブジェクトにおいて利用可能です:


| ZIPFolder で利用可能な [Folder](FolderClass.md) API                                                                                          | 説明                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder](FolderClass.md#copyto) |                                                                          |
| [**.creationDate** : Date](FolderClass.md#creationdate)                                                                                | アーカイブ内のフォルダーと `root` フォルダーの日付が異なる場合があります                                 |
| [**.creationTime** : Time](FolderClass.md#creationtime)                                                                                | アーカイブ内のフォルダーと `root` フォルダーの時刻が異なる場合があります                                 |
| [**.exists** : Boolean](FolderClass.md#exists)                                                                                         |                                                                          |
| [**.extension** : Text](FolderClass.md#extension)                                                                                      |                                                                          |
| [**.file**( *path* : Text ) : 4D.File](FolderClass.md#file)                                                                            |                                                                          |
| [**.files**( { *options* : Integer } ) : Collection](FolderClass.md#files)                                                             |                                                                          |
| [**.folder**( *path* : Text ) : 4D.Folder](FolderClass.md#folder)                                                                      |                                                                          |
| [**.folders**( { *options* : Integer } ) : Collection](FolderClass.md#folders)                                                         |                                                                          |
| [**.fullName** : Text](FolderClass.md#fullname)                                                                                        |                                                                          |
| [**.getIcon**( { *size* : Integer } ) : Picture](FolderClass.md#geticon)                                                               |                                                                          |
| [**.hidden** : Boolean](FolderClass.md#hidden)                                                                                         |                                                                          |
| [**.isAlias** : Boolean](FolderClass.md#isalias)                                                                                       |                                                                          |
| [**.isFile** : Boolean](FolderClass.md#isfile)                                                                                         |                                                                          |
| [**.isFolder** : Boolean](FolderClass.md#isfolder)                                                                                     |                                                                          |
| [**.isPackage** : Boolean](FolderClass.md#ispackage)                                                                                   |                                                                          |
| [**.modificationDate** : Date](FolderClass.md#modificationdate)                                                                        | アーカイブ内のフォルダーと `root` フォルダーの日付が異なる場合があります                                 |
| [**.modificationTime** : Time](FolderClass.md#modificationtime)                                                                        | アーカイブ内のフォルダーと `root` フォルダーの時刻が異なる場合があります                                 |
| [**.name** : Text](FolderClass.md#name)                                                                                                |                                                                          |
| [**.original** : 4D.Folder](FolderClass.md#original)                                                                                   |                                                                          |
| [**.parent** : 4D.Folder](FolderClass.md#parent)                                                                                       | アーカイブの仮想 `root` フォルダーは親を持ちません。 しかしながら、アーカイブ内のフォルダーは root 以外の親を持つ場合があります。 |
| [**.path** : Text](FolderClass.md#path)                                                                                                | アーカイブを起点とした相対パスを返します                                                     |
| [**.platformPath** : Text](FolderClass.md#platformpath)                                                                                |                                                                          |


<style> h2 { background: #d9ebff;}</style>
