---
id: File_and_Folder
title: File and Folder
---
||
|---|
|[**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File](../../commands/file)<br/>creates and returns a new object of the [`4D.File`](../API/FileClass.md) type|
|[**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.Folder<br/>**Folder** ( *folderConstant* : Integer { ; \* } ) : 4D.Folder](../../commands/folder)<br/>creates and returns a new object of the [`4D.Folder`](../API/FolderClass.md) type|
|[**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object](../../commands/zip-create-archive)<br/>creates a compressed ZIP archive object and returns the status of the operation|
|[**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive](../../commands/zip-read-archive)<br/>retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object|
