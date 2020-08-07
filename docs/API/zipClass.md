---
id: zipClass
title: ZIP Archives 
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files and folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to:

*	Save disk space
*	Store data on a removable media device
*	Easily transfer files via mediums which may have size limitations (e.g., email or inter/intranet systems)

4D ZIP archives are created and handled with the following 4D commands:

*	[ZIP Create archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Create-archive.301-4982187.en.html)
*	[ZIP Read archive](https://doc.4d.com/4Dv18R4/4D/18-R4/ZIP-Read-archive.301-4982192.en.html)


## Summary 

|Files|Folders |
|---|---|
|[.copyTo( )](fileClass.html#copyto-)|[.copyTo( )](folderClass.html#copyto-)|
|[.creationDate](fileClass.html#creationdate)|[.creationDate](folderClass.html#creationdate)<p>Date may be different for the root folder from a folder within the archive|
|[.creationTime](fileClass.html#creationtime)|[.creationTime](folderClass.html#creationtime)<p>Time may be different for the root folder from a folder within the archive|
|[.exists](fileClass.html#exists)|[.exists](folderClass.html#exists)|
|[.extension](fileClass.html#extension)|[.extension](folderClass.html#extension)|
||[.file( )](folderClass.html#file-)|
||[.files( )](folderClass.html#files-)|
||[.folder( )](folderClass.html#folder-)|
||[.folders( )](folderClass.html#folders-)|
|[.fullName](fileClass.html#fullname)|[.fullName](folderClass.html#fullname)|
|[.getContent( )](fileClass.html#getcontent-)||
|[.getIcon( )](fileClass.html#geticon-)|[.getIcon( )](folderClass.html#geticon-)|
|[.getText( )](fileClass.html#gettext-)||
|[.hidden](fileClass.html#hidden)|[.hidden](folderClass.html#hidden)|
|[.isAlias](fileClass.html#isalias)|[.isAlias](folderClass.html#isalias)|
|[.isFile](fileClass.html#isfile)|[.isFile](folderClass.html#isfile)|
|[.isFolder](fileClass.html#ifFolder)|[.isFolder](folderClass.html#isFolder)|
||[.isPackage](folderClass.html#ispackage)|
|[.isWritable](fileClass.html#iswritable)<p>Always false||
|[.modificationDate](fileClass.html#modificationdate)|[.modificationDate](folderClass.html#modificationdate)<p>Date may be different for the root folder from a folder within the archive|
|[.modificationTime](fileClass.html#modificationtime)|[.modificationTime](folderClass.html#modificationtime)<p>Time may be different for the root folder from a folder within the archive|
|[.name](fileClass.html#name)|[.name](folderClass.html#name)|
|[.original](fileClass.html#original)|[.original](folderClass.html#original)|
|[.parent](fileClass.html#parent)|[.parent](folderClass.html#parent)<p>The archive's virtual root folder has no parent. However, the folders within the archive may have a parent other than the root.|
|[.path](fileClass.html#path)<p>Returns a path relative to the archive|[.path](folderClass.html#path)<p>Returns a path relative to the archive|
|[.platformPath](fileClass.html#platformpath)|[.platformPath](folderClass.html#platformpath)|





