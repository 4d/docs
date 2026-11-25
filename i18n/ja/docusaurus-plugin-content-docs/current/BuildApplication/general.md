---
id: general
title: 一般
sidebar_label: 一般
sidebar_position: 1
description: "BuildApp ノードの直下に配置される BuildApplication XML キー、および RuntimeVL キー。"
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

これらのキーは `<BuildApp>` ノードの直下に配置されます。

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

## 概要

| キー | 値 | 説明 |
|---|---|---|
| [BuildApplicationName](#buildapplicationname) | ファイル名 | コンパイル済みファイルまたはビルドされるアプリケーションの名前 |
| [BuildWinDestFolder](#buildwindestfolder) | パス | Windows の保存先フォルダー |
| [BuildMacDestFolder](#buildmacdestfolder) | パス | macOS の保存先フォルダー |
| [DataFilePath](#datafilepath) | パス | ファイナルアプリケーションのデータファイル |
| [BuildCompiled](#buildcompiled) | True / False | コンパイル済みストラクチャーをビルドします |
| [BuildApplicationSerialized](#buildapplicationserialized) | True / False | 4D Volume Desktop を組み込んだスタンドアロンアプリケーションをビルドします |
| [IncludeAssociatedFolders](#includeassociatedfolders) | True / False | ストラクチャーに関連するフォルダーを、コンパイル済みストラクチャーの隣にコピーします |
| [BuildComponent](#buildcomponent) | True / False | コンポーネントをビルドします |
| [PackProject](#packproject) | True / False | アプリケーションを .4dz ファイル (デフォルト) または Project フォルダーとしてビルドします |
| [UseStandardZipFormat](#usestandardzipformat) | True / False | .4dz ファイルに標準の zip 形式を使用します (デフォルト) |
| [ArrayExcludedPluginName](#arrayexcludedpluginname) | 名前の配列 | 除外するプラグイン (名前で指定) |
| [ArrayExcludedPluginID](#arrayexcludedpluginid) | ID の配列 | 除外するプラグイン (ID で指定) |
| [ArrayExcludedComponentName](#arrayexcludedcomponentname) | 名前の配列 | 除外するコンポーネント |
| [ArrayExcludedModuleName](#arrayexcludedmodulename) | 名前の配列 | 除外するオプションモジュール |

## アプリケーション名と保存先

### BuildApplicationName

**値**: ファイル名

コンパイル済みファイルまたはビルドされるアプリケーションの名前です。この名前は拡張子を除いて 27文字までに制限されます。4文字の拡張子を含めると最大 31文字です。

このキーが使用されない場合、コンパイル済みファイルまたはアプリケーションにはストラクチャーファイルの名前が使用されます。

### BuildWinDestFolder

**値**: パス

Windows の保存先フォルダーのパスです。パスは絶対パス、またはストラクチャーファイルからの相対パスで指定できます。このキーが使用されない場合、ストラクチャーファイルの場所が使用されます。

### BuildMacDestFolder

**値**: パス

macOS の保存先フォルダーのパスです。パスは絶対パス、またはストラクチャーファイルからの相対パスで指定できます。このキーが使用されない場合、ストラクチャーファイルの場所が使用されます。

### DataFilePath

**値**: データファイルの名前とパス

ファイナルアプリケーションのデータファイルのパス名です。パス名は絶対パス、またはストラクチャーファイルからの相対パスで指定できます。ファイナルアプリケーションが実行されるプラットフォームのシンタックスを使用してください:

| プラットフォーム | 絶対パス | 相対パス |
|---|---|---|
| Windows | `C:\mybase\folder\mydata.4DD` | `\folder\mydata.4DD` |
| macOS (HFS) | `Macintosh HD:folder:mydata.4DD` | `:folder:mydata.4DD` |

このキーが存在しないか無効な場合、ファイナルアプリケーションの初回起動時に 4D は標準のファイルを開くダイアログボックスを表示し、ユーザーがデータファイルを選択できるようにします。

## ビルドオプション

### BuildCompiled

**値**: True / False (デフォルト)

True の場合、コンパイル済みストラクチャーがビルドされます。

### BuildApplicationSerialized

**値**: True / False (デフォルト)

True の場合、4D Volume Desktop を組み込んだスタンドアロンアプリケーションがビルドされます。

4D Volume Desktop へのパスは、(ビルドするプラットフォームに応じて) [RuntimeVLWinFolder](./source-files.md#runtimevlwinfolder) または [RuntimeVLMacFolder](./source-files.md#runtimevlmacfolder) キーを使用して設定する必要があります。パスが存在しないか無効な場合、エラーが返され、ビルドは中止されます。

### IncludeAssociatedFolders

**値**: True / False

アプリケーションビルダーの [関連するフォルダーを含む](../Desktop/building.md#include-related-folders) オプションに対応します。True の場合、ストラクチャーの隣にある Plugins、Resources、Components、Extras フォルダーが、コンパイル済みストラクチャーの隣にコピーされます。

### BuildComponent

**値**: True / False

True の場合、保存先フォルダー内に "Components" フォルダーが作成されます。このフォルダーには、コンポーネントとしてインストール可能な ".4dbase" パッケージ形式のコンパイル済みストラクチャーが格納されます。元のストラクチャーに関連する Resources および Extras フォルダーがある場合、それらもこのフォルダー内に配置されます。

### PackProject

**値**: True (デフォルト) / False

True または省略された場合、ビルドされるアプリケーション (シングルユーザーまたはクライアント/サーバー) は読み取り専用の [.4dz ファイル](../Desktop/building.md#build-compiled-structure) として生成されます。

False の場合、ビルドされるアプリケーションは、コンパイル済みコードのみを含む通常の **Project** フォルダーとして生成されます。このアーキテクチャーにより、4D コードで運用中のアプリケーションのローカルなデータモデルを変更することができます ([`CREATE INDEX`](../commands/create-index) などのコマンドや、SQL の create/alter 文を使用)。これらの変更はローカルに保存され、アプリケーションが更新されると失われます。

### UseStandardZipFormat

**値**: True (デフォルト) / False

True または省略された場合、.4dz ファイルは標準の zip 形式でビルドされます。False の場合、独自形式が使用されます。

## プラグイン、コンポーネント、モジュール

デフォルトでは、すべてのプラグイン、コンポーネント、およびオプションモジュールがビルドされるアプリケーションに含まれます。以下のキーを使用すると、それらの一部を除外することができます。

### ArrayExcludedPluginName

**値**: プラグイン名の配列

除外するプラグインを、名前で指定します。

- 4D プラグインを除外するには、[ArrayExcludedPluginID](#arrayexcludedpluginid) キーのみが必要です。
- サードパーティのプラグインおよび 4D Internet Commands プラグインを除外するには、このキーで名前を、[ArrayExcludedPluginID](#arrayexcludedpluginid) で ID を、両方とも渡す必要があります。有効な名前/ID のペアのみが考慮されます。

### ArrayExcludedPluginID

**値**: プラグイン ID の配列

除外するプラグインを、ID で指定します。プラグイン ID は、アプリケーションビルダーの "プラグイン＆コンポーネント" ページ、およびプラグインの 4BNX リソースに表示されます。

サードパーティのプラグインに関するルールについては [ArrayExcludedPluginName](#arrayexcludedpluginname) を参照してください。

### ArrayExcludedComponentName

**値**: コンポーネント名の配列

除外するコンポーネントです。デフォルトでは、元のストラクチャーの Components フォルダー内にあるすべてのコンポーネントが含まれます。

### ArrayExcludedModuleName

**値**: モジュール名の配列: "CEF", "MeCab", "PHP", "SpellChecker", "4D Updater"

除外する [オプションモジュール](../Desktop/building.md#deselecting-modules) です。

:::caution

モジュールを除外すると、ビルドしたアプリケーションが期待どおりに動作しなくなる可能性があります。モジュールがアプリケーションから一切呼び出されないと 100% 確信できない場合は、そのモジュールを含めたままにしてください。

:::
