---
id: fileProperties
title: File and Folder Properties
---

## Properties

<!-- REF fileProperties.properties -->
|Property|Type|Description|
|----|----|-----------|
|<!-- REF fileProperties.creationDate -->creationDate<!-- END REF -->|Date |<!-- REF fileProperties.creationDateDesc -->Returns the creation date of the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.creationTime -->creationTime<!-- END REF -->| Time|<!-- REF fileProperties.creationTimeDesc -->Returns the creation time of the file (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.exists -->exists<!-- END REF -->|Boolean |<!-- REF fileProperties.existsDesc --> Returns **true** if the file exists on disk, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.extension -->extension<!-- END REF -->|Text |<!-- REF fileProperties.extensionDesc -->Returns the extension of the file name. An extension always starts with ".". The property returns an empty string if the file name does not have an extension. This property is **read-only**.<!-- END REF -->| 
|<!-- REF fileProperties.fullName -->fullName<!-- END REF -->| Text|<!-- REF fileProperties.fullNameDesc -->Returns the full name of the file, including its extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.hidden -->hidden <!-- END REF -->|Boolean |<!-- REF fileProperties.hiddenDesc -->  Returns **true** if the file is set as "hidden" at the system level, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.isAlias -->isAlias<!-- END REF -->|Boolean |<!-- REF fileProperties.isAliasDesc -->Returns **true** if the file is an alias, a shortcut, or a symbolic link, and **false** otherwise. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.isFile -->isFile <!-- END REF -->|Boolean |<!-- REF fileProperties.isFileDesc -->Always returns **true** for a file. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.isFolder -->isFolder<!-- END REF -->|Boolean |<!-- REF fileProperties.isFolderDesc -->Always returns **false** for a file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF fileProperties.isWritable -->isWritable<!-- END REF -->|Boolean |<!-- REF fileProperties.isWritableDesc -->Returns **true** if the file exists on disk and is writable. **Note**: The property checks the ability of the 4D application to write on the disk (access rights), it does not solely rely on the writable attribute of the file. This property is **read-only**.<!-- END REF -->| 
|<!-- REF fileProperties.modificationDate -->modificationDate<!-- END REF -->| Date|<!-- REF fileProperties.modificationDateDesc --> Returns the date of the file's last modification. This property is **read-only**.<!-- END REF -->| 
|<!-- REF fileProperties.modificationTime -->modificationTime<!-- END REF -->|Time |<!-- REF fileProperties.modificationTimeDesc -->Returns the time of the file's last modification (expressed as a number of seconds beginning at 00:00). This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.name -->name<!-- END REF -->|Text |<!-- REF fileProperties.nameDesc --> Returns the name of the file, without extension (if any). This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.original -->orignial <!-- END REF -->|Object |<!-- REF fileProperties.originalDesc -->Returns the target element for an alias, a shortcut, or a symbolic link file. The target element can be:<ul><li>a file object </li><li>a folder object</li></ul>For non-alias files, the property returns the same file object as the file. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.parent -->parent<!-- END REF -->|Object |<!-- REF fileProperties.parentDesc -->Returns the parent folder object of the file. If the path represents a system path (e.g., "/DATA/"), the system path is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.path -->path<!-- END REF -->|Text |<!-- REF fileProperties.pathDesc -->Returns the POSIX path of the file. If the path represents a filesystem (e.g., "/DATA/"), the filesystem is returned. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.platformPath -->platformPath<!-- END REF -->|Text  |<!-- REF fileProperties.platformPathDesc -->Returns the path of the file expressed with the current platform syntax. This property is **read-only**.<!-- END REF -->|
|<!-- REF fileProperties.size -->size<!-- END REF -->|Number  |<!-- REF fileProperties.sizeDesc -->Returns the size of the file expressed in bytes. If the file does not exist on disk, the size is 0. This property is **read-only**.<!-- END REF -->|
<!-- END REF -->