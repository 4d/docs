---
id: general
title: Général
sidebar_label: Général
sidebar_position: 1
description: "Clés XML BuildApplication situées directement sous le nœud BuildApp, et clés RuntimeVL."
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

Ces clés sont situées directement sous le nœud `<BuildApp>`.

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

## Résumé

| Clé | Valeurs | Description |
|---|---|---|
| [BuildApplicationName](#buildapplicationname) | Nom de fichier | Nom du fichier compilé ou de l'application générée |
| [BuildWinDestFolder](#buildwindestfolder) | Chemin | Dossier de destination Windows |
| [BuildMacDestFolder](#buildmacdestfolder) | Chemin | Dossier de destination macOS |
| [DataFilePath](#datafilepath) | Chemin | Fichier de données de l'application finale |
| [BuildCompiled](#buildcompiled) | True / False | Générer une structure compilée |
| [BuildApplicationSerialized](#buildapplicationserialized) | True / False | Générer une application autonome fusionnée avec 4D Volume Desktop |
| [IncludeAssociatedFolders](#includeassociatedfolders) | True / False | Copier les dossiers associés à la structure à côté de la structure compilée |
| [BuildComponent](#buildcomponent) | True / False | Générer un composant |
| [PackProject](#packproject) | True / False | Générer l'application sous forme de fichier .4dz (par défaut) ou de dossier Project |
| [UseStandardZipFormat](#usestandardzipformat) | True / False | Utiliser le format zip standard pour le fichier .4dz (par défaut) |
| [ArrayExcludedPluginName](#arrayexcludedpluginname) | Tableau de noms | Plug-ins à exclure, par nom |
| [ArrayExcludedPluginID](#arrayexcludedpluginid) | Tableau d'ID | Plug-ins à exclure, par ID |
| [ArrayExcludedComponentName](#arrayexcludedcomponentname) | Tableau de noms | Composants à exclure |
| [ArrayExcludedModuleName](#arrayexcludedmodulename) | Tableau de noms | Modules optionnels à exclure |

## Nom de l'application et dossier de destination

### BuildApplicationName

**Valeurs** : nom de fichier

Nom du fichier compilé ou de l'application générée. Ce nom est limité à 27 caractères, sans compter l'extension ; jusqu'à 31 caractères avec une extension de 4 caractères.

Si cette clé n'est pas utilisée, le fichier compilé ou l'application utilise le nom du fichier de structure.

### BuildWinDestFolder

**Valeurs** : chemin

Chemin du dossier de destination Windows. Le chemin peut être absolu ou relatif au fichier de structure. Si cette clé n'est pas utilisée, l'emplacement du fichier de structure est utilisé.

### BuildMacDestFolder

**Valeurs** : chemin

Chemin du dossier de destination macOS. Le chemin peut être absolu ou relatif au fichier de structure. Si cette clé n'est pas utilisée, l'emplacement du fichier de structure est utilisé.

### DataFilePath

**Valeurs** : nom et chemin du fichier de données

Chemin d'accès du fichier de données de l'application finale. Le chemin d'accès peut être absolu ou relatif au fichier de structure. Utilisez la syntaxe de la plate-forme sur laquelle l'application finale sera exécutée :

| Plate-forme | Absolu | Relatif |
|---|---|---|
| Windows | `C:\mybase\folder\mydata.4DD` | `\folder\mydata.4DD` |
| macOS (HFS) | `Macintosh HD:folder:mydata.4DD` | `:folder:mydata.4DD` |

Si cette clé est absente ou invalide, au premier lancement de l'application finale, 4D affiche une boîte de dialogue standard d'ouverture de fichier afin que l'utilisateur puisse sélectionner le fichier de données.

## Options de génération

### BuildCompiled

**Valeurs** : True / False (défaut)

Si True, une structure compilée est générée.

### BuildApplicationSerialized

**Valeurs** : True / False (défaut)

Si True, une application autonome fusionnée avec 4D Volume Desktop est générée.

Le chemin de 4D Volume Desktop doit être défini à l'aide de la clé [RuntimeVLWinFolder](./source-files.md#runtimevlwinfolder) ou [RuntimeVLMacFolder](./source-files.md#runtimevlmacfolder) (selon la plate-forme de génération). Si le chemin est absent ou invalide, une erreur est retournée et la génération est interrompue.

### IncludeAssociatedFolders

**Valeurs** : True / False

Correspond à l'option [Inclure les dossiers associés](../Desktop/building.md#include-related-folders) du Générateur d'applications. Si True, les dossiers Plugins, Resources, Components et Extras situés à côté de la structure sont copiés à côté de la structure compilée.

### BuildComponent

**Valeurs** : True / False

Si True, un dossier "Components" est créé dans le dossier de destination. Il contient la structure compilée dans un package ".4dbase", prête à être installée comme composant. Les dossiers Resources et Extras associés à la structure d'origine, s'ils existent, sont également placés dans ce dossier.

### PackProject

**Valeurs** : True (défaut) / False

Si True ou omise, l'application générée (monoposte ou client/serveur) est générée sous forme de [fichier .4dz](../Desktop/building.md#build-compiled-structure) en lecture seule.

Si False, l'application générée est générée sous forme de dossier **Project** standard ne contenant que du code compilé. Cette architecture permet au code 4D de modifier le modèle de données local des applications déployées (à l'aide de commandes telles que [`CREATE INDEX`](../commands/create-index) ou d'instructions SQL create/alter). Ces modifications sont enregistrées localement et sont perdues lors de la mise à jour de l'application.

### UseStandardZipFormat

**Valeurs** : True (défaut) / False

Si True ou omise, le fichier .4dz est généré au format zip standard. Si False, un format propriétaire est utilisé.

## Plug-ins, composants et modules

Par défaut, tous les plug-ins, composants et modules optionnels sont inclus dans l'application générée. Les clés suivantes vous permettent d'en exclure certains.

### ArrayExcludedPluginName

**Valeurs** : tableau de noms de plug-ins

Plug-ins à exclure, désignés par leur nom.

- Pour exclure des plug-ins 4D, seule la clé [ArrayExcludedPluginID](#arrayexcludedpluginid) est requise.
- Pour exclure des plug-ins tiers et le plug-in 4D Internet Commands, vous devez passer à la fois leur nom avec cette clé et leur ID avec [ArrayExcludedPluginID](#arrayexcludedpluginid). Seules les paires nom/ID valides sont prises en compte.

### ArrayExcludedPluginID

**Valeurs** : tableau d'ID de plug-ins

Plug-ins à exclure, désignés par leur ID. Les ID des plug-ins sont affichés dans la page "Plugins et composants" du Générateur d'applications, ainsi que dans la ressource 4BNX du plug-in.

Voir [ArrayExcludedPluginName](#arrayexcludedpluginname) pour les règles concernant les plug-ins tiers.

### ArrayExcludedComponentName

**Valeurs** : tableau de noms de composants

Composants à exclure. Par défaut, tous les composants du dossier Components de la structure d'origine sont inclus.

### ArrayExcludedModuleName

**Valeurs** : tableau de noms de modules : "CEF", "MeCab", "PHP", "SpellChecker", "4D Updater"

[Modules optionnels](../Desktop/building.md#deselecting-modules) à exclure.

:::caution

L'exclusion d'un module peut empêcher votre application générée de fonctionner correctement. Si vous n'êtes pas certain à 100 % qu'un module n'est jamais appelé par votre application, conservez-le.

:::
