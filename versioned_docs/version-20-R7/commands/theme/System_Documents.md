---
id: System_Documents
title: System Documents
---
||
|---|
|[**Append document** ( *document* {; *fileType*} ) : DocRef](../../commands-legacy/append-document)<br/>The **Append document** command does the same as thing as [Open document](open-document.md): it opens a document on disk.|
|[**CLOSE DOCUMENT** ( *docRef* )](../../commands-legacy/close-document)<br/>**CLOSE DOCUMENT** closes the document specified by *docRef*.|
|[**Convert path POSIX to system** ( *posixPath* {; *} ) : Text](../../commands-legacy/convert-path-posix-to-system)<br/>The **Convert path POSIX to system** command converts a pathname expressed with the POSIX (Unix) syntax into a pathname expressed with the system syntax.|
|[**Convert path system to POSIX** ( *systemPath* {; *} ) : Text](../../commands-legacy/convert-path-system-to-posix)<br/>The Convert path system to POSIX command converts a pathname expressed with the system syntax as a pathname expressed with the POSIX (Unix) syntax.|
|[**COPY DOCUMENT** ( *sourceName* ; *destinationName* {; *newName*} {; *} )](../../commands-legacy/copy-document)<br/>The **COPY DOCUMENT** command copies the file or folder specified by *sourceName* to the location specified by *destinationName* and, optionally, renames it.|
|[**CREATE ALIAS** ( *targetPath* ; *aliasPath* )](../../commands-legacy/create-alias)<br/>The CREATE ALIAS command creates an alias (named “shortcut” under Windows) for the target file or folder passed in *targetPath*.|
|[**Create document** ( *document* {; *fileType*} ) : DocRef](../../commands-legacy/create-document)<br/>The**Create document** command creates a new document and returns its document reference number.|
|[**CREATE FOLDER** ( *folderPath* {; *} )](../../commands-legacy/create-folder)<br/>The **CREATE FOLDER** command creates a folder according to the pathname you pass in *folderPath*.|
|[**DELETE DOCUMENT** ( *document* )](../../commands-legacy/delete-document)<br/>The **DELETE DOCUMENT** command deletes the document whose name you pass in *document*.|
|[**DELETE FOLDER** ( *folder* {; *deleteOption*} )](../../commands-legacy/delete-folder)<br/>The **DELETE FOLDER** command deletes the folder whose name or full path has been passed in *folder*.|
|[**DOCUMENT LIST** ( *pathname* ; *documents* {; *options*} )](../../commands-legacy/document-list)<br/>The **DOCUMENT LIST** command populates the Text array *documents* with the names of the documents located at the location you pass in *pathname*.|
|[**Document to text** ( *fileName* {; *charSet* {; *breakMode*}} ) : Text](../../commands-legacy/document-to-text)<br/>The **Document to text** command lets you retrieve the contents of a file directly on disk in a 4D text variable or text field.|
|[**FOLDER LIST** ( *pathname* ; *directories* )](../../commands-legacy/folder-list)<br/>The **FOLDER LIST** command populates the Text or String array *directories* with the names of the folders located at the pathname you pass in *pathname*.|
|[**GET DOCUMENT ICON** ( *docPath* ; *icon* {; *size*} )](../../commands-legacy/get-document-icon)<br/>The GET DOCUMENT ICON command returns, in the 4D picture variable or field *icon*, the icon of the document whose name or complete pathname is passed in *docPath*.|
|[**Get document position** ( *docRef* ) : Real](../../commands-legacy/get-document-position)<br/>This command operates only on a document that is currently open whose document reference number you pass in *docRef*.|
|[**GET DOCUMENT PROPERTIES** ( *document* ; *locked* ; *invisible* ; created on ; created at ; modified on ; modified at )](../../commands-legacy/get-document-properties)<br/>The **GET DOCUMENT PROPERTIES** command returns information about the document whose name or pathname you pass in *document*.|
|[**Get document size** ( *document* {; *} ) : Real](../../commands-legacy/get-document-size)<br/>The Get document size command returns the size, expressed in bytes, of a document.|
|[**Localized document path** ( *relativePath* ) : Text](../../commands-legacy/localized-document-path)<br/>The **Localized document path** command returns the complete (absolute) pathname of a document designated by *relativePath* and located in a xxx.|
|[**MOVE DOCUMENT** ( *srcPathname* ; *dstPathname* )](../../commands-legacy/move-document)<br/>The **MOVE DOCUMENT** command moves or renames a document.|
|[**Object to path** ( *pathObject* ) : Text](../../commands-legacy/object-to-path)<br/>The **Object to path** command returns a pathname (string) based upon path information you passed in the *pathObject* parameter.|
|[**Open document** ( *document* {; *fileType*}{; *mode*} ) : DocRef](../../commands-legacy/open-document)<br/>The **Open document** command opens the document whose name or pathname you pass in *document*.|
|[**Path to object** ( *path* {; *pathType*} ) : Object](../../commands-legacy/path-to-object)<br/>The **Path to object** command returns an object containing the specific properties of the *path* you passed in parameter.|
|[**RESOLVE ALIAS** ( *aliasPath* ; *targetPath* )](../../commands-legacy/resolve-alias)<br/>The RESOLVE ALIAS command returns the full path to the target file or folder of the alias (named shortcut under Windows).|
|[**Select document** ( *directory* ; *fileTypes* ; *title* ; *options* {; *selected*} ) : Text](../../commands-legacy/select-document)<br/>The **Select document** command displays a standard open document dialog box which allows the user to set one or more files and returns the name and/or full access path of the selected file(s).|
|[**Select folder** ( {*message* }{;}{ *defaultPath* {; *options*}} ) : Text](../../commands-legacy/select-folder)<br/>The **Select folder** command displays a dialog box that allows you to manually select a folder and then retrieve the complete access path to that folder.|
|[**SET DOCUMENT POSITION** ( *docRef* ; *offset* {; *anchor*} )](../../commands-legacy/set-document-position)<br/>This command operates only on a document currently open whose document reference number you pass in *docRef*.|
|[**SET DOCUMENT PROPERTIES** ( *document* ; *locked* ; *invisible* ; created on ; created at ; modified on ; modified at )](../../commands-legacy/set-document-properties)<br/>The **SET DOCUMENT PROPERTIES** command changes the information about the document whose name or pathname you pass in *document*.|
|[**SET DOCUMENT SIZE** ( *docRef* ; *size* )](../../commands-legacy/set-document-size)<br/>The **SET DOCUMENT SIZE** command sets the size of a document to the number of bytes you pass in *size*.|
|[**SHOW ON DISK** ( *pathname* {; *} )](../../commands-legacy/show-on-disk)<br/>The SHOW ON DISK command displays the file or folder whose pathname was passed in the *pathname* parameter in a standard window of the operating system.|
|[**Test path name** ( *pathname* ) : Integer](../../commands-legacy/test-path-name)<br/>The **Test path name** function checks if a document or folder whose name or pathname you pass in *pathname* is present on the disk.|
|[**TEXT TO DOCUMENT** ( *fileName* ; *text* {; *charSet* {; *breakMode*}} )](../../commands-legacy/text-to-document)<br/>The **TEXT TO DOCUMENT** command lets you write the *text* directly to a disk file.|
|[**VOLUME ATTRIBUTES** ( *volume* ; *size* ; *used* ; *free* )](../../commands-legacy/volume-attributes)<br/>The VOLUME ATTRIBUTES command returns, expressed in bytes, the size, the used space and the free space for the volume whose name you pass in *volume*.|
|[**VOLUME LIST** ( *volumes* )](../../commands-legacy/volume-list)<br/>The VOLUME LIST command populates the text array *volumes* with the names of the volumes currently defined (Windows) or mounted (Macintosh) on your machine.|
