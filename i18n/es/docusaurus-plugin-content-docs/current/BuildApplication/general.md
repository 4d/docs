---
id: general
title: General
sidebar_label: General
sidebar_position: 1
description: "Llaves XML BuildApplication ubicadas directamente bajo el nodo BuildApp, y llaves RuntimeVL."
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

Estas llaves se encuentran directamente bajo el nodo `<BuildApp>`.

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

## Resumen

| Llave | Valores | Descripción |
|---|---|---|
| [BuildApplicationName](#buildapplicationname) | Nombre de archivo | Nombre del archivo compilado o de la aplicación generada |
| [BuildWinDestFolder](#buildwindestfolder) | Ruta | Carpeta de destino Windows |
| [BuildMacDestFolder](#buildmacdestfolder) | Ruta | Carpeta de destino macOS |
| [DataFilePath](#datafilepath) | Ruta | Archivo de datos de la aplicación final |
| [BuildCompiled](#buildcompiled) | True / False | Generar una estructura compilada |
| [BuildApplicationSerialized](#buildapplicationserialized) | True / False | Generar una aplicación autónoma fusionada con 4D Volume Desktop |
| [IncludeAssociatedFolders](#includeassociatedfolders) | True / False | Copiar las carpetas asociadas a la estructura junto a la estructura compilada |
| [BuildComponent](#buildcomponent) | True / False | Generar un componente |
| [PackProject](#packproject) | True / False | Generar la aplicación como un archivo .4dz (por defecto) o como una carpeta Project |
| [UseStandardZipFormat](#usestandardzipformat) | True / False | Utilizar el formato zip estándar para el archivo .4dz (por defecto) |
| [ArrayExcludedPluginName](#arrayexcludedpluginname) | Array de nombres | Plug-ins a excluir, por nombre |
| [ArrayExcludedPluginID](#arrayexcludedpluginid) | Array de IDs | Plug-ins a excluir, por ID |
| [ArrayExcludedComponentName](#arrayexcludedcomponentname) | Array de nombres | Componentes a excluir |
| [ArrayExcludedModuleName](#arrayexcludedmodulename) | Array de nombres | Módulos opcionales a excluir |

## Nombre de la aplicación y destino

### BuildApplicationName

**Valores**: nombre de archivo

Nombre del archivo compilado o de la aplicación generada. Este nombre está limitado a 27 caracteres, sin contar la extensión; hasta 31 caracteres con una extensión de 4 caracteres.

Si no se utiliza esta llave, el archivo compilado o la aplicación utiliza el nombre del archivo de estructura.

### BuildWinDestFolder

**Valores**: ruta

Ruta de la carpeta de destino Windows. La ruta puede ser absoluta o relativa al archivo de estructura. Si no se utiliza esta llave, se utiliza la ubicación del archivo de estructura.

### BuildMacDestFolder

**Valores**: ruta

Ruta de la carpeta de destino macOS. La ruta puede ser absoluta o relativa al archivo de estructura. Si no se utiliza esta llave, se utiliza la ubicación del archivo de estructura.

### DataFilePath

**Valores**: nombre y ruta del archivo de datos

Ruta de acceso del archivo de datos de la aplicación final. La ruta puede ser absoluta o relativa al archivo de estructura. Utilice la sintaxis de la plataforma en la que se ejecutará la aplicación final:

| Plataforma | Absoluta | Relativa |
|---|---|---|
| Windows | `C:\mybase\folder\mydata.4DD` | `\folder\mydata.4DD` |
| macOS (HFS) | `Macintosh HD:folder:mydata.4DD` | `:folder:mydata.4DD` |

Si esta llave falta o no es válida, en el primer lanzamiento de la aplicación final 4D muestra una caja de diálogo estándar de apertura de archivos para que el usuario pueda seleccionar el archivo de datos.

## Opciones de generación

### BuildCompiled

**Valores**: True / False (por defecto)

Si es True, se genera una estructura compilada.

### BuildApplicationSerialized

**Valores**: True / False (por defecto)

Si es True, se genera una aplicación autónoma fusionada con 4D Volume Desktop.

La ruta de 4D Volume Desktop debe definirse mediante la llave [RuntimeVLWinFolder](./source-files.md#runtimevlwinfolder) o [RuntimeVLMacFolder](./source-files.md#runtimevlmacfolder) (según la plataforma de generación). Si la ruta falta o no es válida, se devuelve un error y se detiene la generación.

### IncludeAssociatedFolders

**Valores**: True / False

Corresponde a la opción [Incluir las carpetas asociadas](../Desktop/building.md#include-related-folders) del Creador de aplicaciones. Cuando es True, las carpetas Plugins, Resources, Components y Extras ubicadas junto a la estructura se copian junto a la estructura compilada.

### BuildComponent

**Valores**: True / False

Si es True, se crea una carpeta "Components" en la carpeta de destino. Contiene la estructura compilada en un paquete ".4dbase", lista para ser instalada como componente. Las carpetas Resources y Extras asociadas a la estructura original, si las hay, también se colocan en esta carpeta.

### PackProject

**Valores**: True (por defecto) / False

Cuando es True o se omite, la aplicación generada (monopuesto o cliente/servidor) se genera como un [archivo .4dz](../Desktop/building.md#build-compiled-structure) de sólo lectura.

Cuando es False, la aplicación generada se genera como una carpeta **Project** estándar que sólo contiene código compilado. Esta arquitectura permite al código 4D modificar el modelo de datos local de las aplicaciones desplegadas (utilizando comandos como [`CREATE INDEX`](../commands/create-index) o instrucciones SQL create/alter). Estas modificaciones se guardan localmente y se pierden cuando se actualiza la aplicación.

### UseStandardZipFormat

**Valores**: True (por defecto) / False

Cuando es True o se omite, el archivo .4dz se genera utilizando el formato zip estándar. Cuando es False, se utiliza un formato propietario.

## Plug-ins, componentes y módulos

Por defecto, todos los plug-ins, componentes y módulos opcionales se incluyen en la aplicación generada. Las siguientes llaves le permiten excluir algunos de ellos.

### ArrayExcludedPluginName

**Valores**: array de nombres de plug-ins

Plug-ins a excluir, designados por sus nombres.

- Para excluir plug-ins 4D, sólo es necesaria la llave [ArrayExcludedPluginID](#arrayexcludedpluginid).
- Para excluir plug-ins de terceros y el plug-in 4D Internet Commands, debe pasar a la vez su nombre con esta llave y su ID con [ArrayExcludedPluginID](#arrayexcludedpluginid). Sólo se tienen en cuenta los pares nombre/ID válidos.

### ArrayExcludedPluginID

**Valores**: array de IDs de plug-ins

Plug-ins a excluir, designados por sus IDs. Los IDs de los plug-ins se muestran en la página "Plugins y componentes" del Creador de aplicaciones, y en el recurso 4BNX del plug-in.

Ver [ArrayExcludedPluginName](#arrayexcludedpluginname) para las reglas relativas a los plug-ins de terceros.

### ArrayExcludedComponentName

**Valores**: array de nombres de componentes

Componentes a excluir. Por defecto, se incluyen todos los componentes de la carpeta Components de la estructura original.

### ArrayExcludedModuleName

**Valores**: array de nombres de módulos: "CEF", "MeCab", "PHP", "SpellChecker", "4D Updater"

[Módulos opcionales](../Desktop/building.md#deselecting-modules) a excluir.

:::caution

Excluir un módulo podría impedir que su aplicación generada funcione como se espera. Si no está 100% seguro de que un módulo nunca es llamado por su aplicación, manténgalo incluido.

:::
