---
id: general
title: General
sidebar_label: General
sidebar_position: 1
description: "BuildApplication XML keys located directly under the BuildApp node, and RuntimeVL keys."
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

These keys are located directly under the `<BuildApp>` node.

```xml
<Preferences4D>
  <BuildApp>
    <BuildApplicationName>MyApplication</BuildApplicationName>
    <BuildWinDestFolder>C:\Builds\</BuildWinDestFolder>
    <BuildCompiled>True</BuildCompiled>
    <BuildApplicationSerialized>True</BuildApplicationSerialized>
  </BuildApp>
</Preferences4D>
```

## Summary

| Key | Values | Description |
|---|---|---|
| [BuildApplicationName](#buildapplicationname) | File name | Name of the compiled file or built application |
| [BuildWinDestFolder](#buildwindestfolder) | Path | Windows destination folder |
| [BuildMacDestFolder](#buildmacdestfolder) | Path | macOS destination folder |
| [DataFilePath](#datafilepath) | Path | Data file of the final application |
| [BuildCompiled](#buildcompiled) | True / False | Build a compiled structure |
| [BuildApplicationSerialized](#buildapplicationserialized) | True / False | Build a stand-alone application merged with 4D Volume Desktop |
| [IncludeAssociatedFolders](#includeassociatedfolders) | True / False | Copy the folders related to the structure next to the compiled structure |
| [BuildComponent](#buildcomponent) | True / False | Build a component |
| [PackProject](#packproject) | True / False | Build the application as a .4dz file (default) or as a Project folder |
| [UseStandardZipFormat](#usestandardzipformat) | True / False | Use the standard zip format for the .4dz file (default) |
| [ArrayExcludedPluginName](#arrayexcludedpluginname) | Array of names | Plug-ins to exclude, by name |
| [ArrayExcludedPluginID](#arrayexcludedpluginid) | Array of IDs | Plug-ins to exclude, by ID |
| [ArrayExcludedComponentName](#arrayexcludedcomponentname) | Array of names | Components to exclude |
| [ArrayExcludedModuleName](#arrayexcludedmodulename) | Array of names | Optional modules to exclude |


## Application name and destination

### BuildApplicationName

**Values**: file name

Name of the compiled file or built application. This name is limited to 27 characters, not counting the extension; up to 31 characters with a 4-character extension.

If this key is not used, the compiled file or application uses the name of the structure file.

### BuildWinDestFolder

**Values**: path

Path of the Windows destination folder. The path can be absolute or relative to the structure file. If this key is not used, the location of the structure file is used.

### BuildMacDestFolder

**Values**: path

Path of the macOS destination folder. The path can be absolute or relative to the structure file. If this key is not used, the location of the structure file is used.

### DataFilePath

**Values**: data file name and path

Data file pathname of the final application. The pathname can be absolute or relative to the structure file. Use the syntax of the platform the final application will run on:

| Platform | Absolute | Relative |
|---|---|---|
| Windows | `C:\mybase\folder\mydata.4DD` | `\folder\mydata.4DD` |
| macOS (HFS) | `Macintosh HD:folder:mydata.4DD` | `:folder:mydata.4DD` |

If this key is missing or invalid, on the initial startup of the final application 4D displays a standard open file dialog box so that the user can select the data file.

## Build options

### BuildCompiled

**Values**: True / False (default)

If True, a compiled structure is built.

### BuildApplicationSerialized

**Values**: True / False (default)

If True, a stand-alone application merged with 4D Volume Desktop is built.

The path to 4D Volume Desktop must be set using the [RuntimeVLWinFolder](./source-files.md#runtimevlwinfolder) or [RuntimeVLMacFolder](./source-files.md#runtimevlmacfolder) key (depending on the build platform). If the path is missing or invalid, an error is returned and the build is stopped.

### IncludeAssociatedFolders

**Values**: True / False

Corresponds to the [Include related folders](../Desktop/building.md#include-related-folders) option of the Application builder. When True, the Plugins, Resources, Components and Extras folders located next to the structure are copied next to the compiled structure.

### BuildComponent

**Values**: True / False

If True, a "Components" folder is created in the destination folder. It contains the compiled structure in a ".4dbase" package, ready to be installed as a component. The Resources and Extras folders associated with the original structure, if any, are also placed in this folder.

### PackProject

**Values**: True (default) / False

When True or omitted, the built application (single-user or client/server) is generated as a read-only [.4dz file](../Desktop/building.md#build-compiled-structure).

When False, the built application is generated as a regular **Project** folder containing only compiled code. This architecture allows the 4D code to modify the local data model of deployed applications (using commands such as [`CREATE INDEX`](../commands/create-index) or SQL create/alter statements). These modifications are saved locally and are lost when the application is updated.

### UseStandardZipFormat

**Values**: True (default) / False

When True or omitted, the .4dz file is built using the standard zip format. When False, a proprietary format is used.

## Plug-ins, components and modules

By default, all plug-ins, components and optional modules are included in the built application. The following keys allow you to exclude some of them.

### ArrayExcludedPluginName

**Values**: array of plug-in names

Plug-ins to exclude, designated by their names.

- To exclude 4D plug-ins, only the [ArrayExcludedPluginID](#arrayexcludedpluginid) key is required.
- To exclude third-party plug-ins and the 4D Internet Commands plug-in, you must pass both their name with this key and their ID with [ArrayExcludedPluginID](#arrayexcludedpluginid). Only valid name/ID pairs are taken into account.

### ArrayExcludedPluginID

**Values**: array of plug-in IDs

Plug-ins to exclude, designated by their IDs. Plug-in IDs are displayed on the "Plugins & components" page of the Application builder, and in the 4BNX resource of the plug-in.

See [ArrayExcludedPluginName](#arrayexcludedpluginname) for the rules about third-party plug-ins.

### ArrayExcludedComponentName

**Values**: array of component names

Components to exclude. By default, all components of the Components folder of the original structure are included.

### ArrayExcludedModuleName

**Values**: array of module names: "CEF", "MeCab", "PHP", "SpellChecker", "4D Updater"

[Optional modules](../Desktop/building.md#deselecting-modules) to exclude.

:::caution

Excluding a module could prevent your built application from working as expected. If you are not 100% certain that a module is never called by your application, keep it included.

:::

