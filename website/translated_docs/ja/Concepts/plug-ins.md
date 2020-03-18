---
id: plug-ins
title: プラグイン
---

4Dアプリケーションの開発を進めていくと、最初は気付かなかった数多くの機能を発見することでしょう。 それだけでなく、**プラグイン** を4D開発環境に追加することで、標準の4Dの機能を高めることもできます。

## プラグインの必要性

オブジェクトやレコードの操作、ユーザーインターフェースの実装のため、4D は数百のビルトインコマンドを提供していますが、さらに特殊な機能 (プラットフォーム依存のものなど) が必要になることがあります。たとえば、Windows上のODBC 、macOS上のアップルサービス、特殊な統計機能、ソーシャルネットワークログイン、決済用のプラットフォーム、ネットワークを介したファイルアクセス、特殊なユーザーインターフェース、独自のピクチャー構造などです。

これらの機能をすべて、macOS と Windows の両方で 4D コマンドによって提供しようとした場合、コマンド数は数千に膨れ上がると同時に、ほとんどのユーザーはそれらの追加機能を必要としないでしょう。 また、そのような万能ツールを作り上げたとしても、その結果として 4D 環境は複雑化することになり、4D の学習が困難になるだけでなく、成果が得られるまで時間を要するようになるでしょう。

4D 環境のモジュール性により、基礎的なアプリケーションの作成はもちろんのこと、非常に複雑なシステムの開発も可能です。 4D プラグインのアーキテクチャーによって、4D 環境はあらゆるアプリケーションとユーザーに対して開かれています。 4D プラグインによってアプリケーションやユーザーの生産性を飛躍させることができます。

## プラグインとは何か

プラグインとは、4D 起動時にロードされるコードのことです。 プラグインは、4D に機能を追加します。

通常、プラグインは:

- 4D ができないことを処理します (プラットフォーム特有の技術など)
- 4D だけでは難しいことを実現します
- プラグインのエントリーポイントの形でのみ提供されている機能を提供します

A plug-in usually contains a set of routines given to the 4D Developer. It can handle an External Area and run an external process.

- A **plug-in routine** is a routine written in native language (usually C or C++) that causes an action. 
- An **external area** is a part of a form that can display almost everything and interact with the user when necessary.
- An **external process** is a process that runs alone, usually in a loop, doing almost everything it wants. All process code belongs to the plug-in, 4D is simply present to receive/send events to the process. 

### Important note

A plug-in can be very simple, with just one routine performing a very small task, or it can be very complex, involving hundred of routines and areas. There is virtually no limit to what a plug-in can do, however every plug-in developer should remember that a plug-in is a "sample" piece of code. It is the plug-in that runs within 4D, not the opposite. As a piece of code, it is the host of 4D; it is not a stand-alone application. It shares CPU time and memory with 4D and other plug-ins, thus, it should be a polite code, using just what is necessary to run. For example, in long loops, a plug-in should call `PA_Yield()` to give time to the 4D scheduler unless its task is critical for both it and the database.

## How to create a plug-in?

4D provides on GitHub an open-source [**plug-in SDK**](https://github.com/4d/4D-Plugin-SDK), containing the 4D Plugin API and the 4D Plugin Wizard:

- the [**4D Plugin API**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API), written in C, adds more than 400 functions that help you to easily create your own plug-ins to add new functionnalities to your 4D application. 4D Plug-in API functions manage all the interactions between the 4D application and your plug-in.
- The [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) is an essential tool that simplifies the task of developing 4D plug-ins. It writes the code 4D needs to correctly load and interact with a plug-in, allowing you to concentrate on your own code.

## How to install a plug-in?

You install plug-ins in the 4D environment by copying their files into the appropriate folder.

“PluginName.bundle” folders contain both Windows and macOS versions of 4D plug-ins. Their specific internal architecture lets 4D Server load the appropriate version according to the platform where the client machine will be run. To install a plug-in in your environment, you just need to put the “PluginName.bundle” folder or package concerned into the desired **PlugIns** folder.

You can put the PlugIns folder in two different places:

- At the level of the 4D executable application, i.e.: 
  - Under Windows: next to the .exe file
  - Under macOS: at the first level of the Contents folder inside the application package.  
    In this case, plug-ins are available in every database opened by this application. 
- At the same level as the database structure file. In this case, plug-ins are only available in this particular database. 

The choice of location depends on how you want to use the plug-in.

If the same plug-in is placed in both locations, 4D will only load the one located next to the structure. In an application that is compiled and merged using 4D Volume Desktop, if there are several instances of the same plug-in present, this will prevent the application from opening.

Plug-ins are loaded by 4D when the application is launched so you will need to quit your 4D application before installing them. Then open your database with 4D. If any plug-in requires a specific license for use, it will be loaded but not available for use.