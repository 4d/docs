---
id: fileProperties
title: File and Folder Properties
---

## Properties

|Property|Type|Description|
|----|----|-----------|
|creationDate|Date |Returns the creation date of the file. This property is **read-only**.|
|creationTime| Time|Returns the creation time of the file (expressed as a number of seconds beginning at 00:00). This property is **read-only**.|
|exists|Boolean | Returns **true** if the file exists on disk, and **false** otherwise. This property is **read-only**.|
|extension|Text |Returns the extension of the file name. An extension always starts with ".". The property returns an empty string if the file name does not have an extension. This property is **read-only**.| 
|fullName| Text|Returns the full name of the file, including its extension (if any). This property is **read-only**.|
|hidden |Boolean |  Returns **true** if the file is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.|
|isAlias|Boolean |Returns **true** if the file is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.|
|isFile |Boolean |Always returns **true** for a file. This property is **read-only**.|
|isFolder|Boolean |Always returns **false** for a file. This property is **read-only**.| 
|isWritable|Boolean |Returns **true** if the file exists on disk and is writable. **Note**: The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. This property is **read-only**.| 
|modificationDate| Date| Returns the date of the file's last modification. This property is **read-only**.| 
|modificationTime|Time |Returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.|
|name|Text | Returns the name of the file, without extension (if any). This property is **read-only**.|
|orignial |Object |Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.|
|parent|Object |Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.|
|path|Text |Returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.|
|platformPath|Text  |Returns the path of the file expressed with the current platform syntax. This property is **read-only**.|
|size|Number  |Returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0. This property is **read-only**.|
