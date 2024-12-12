---
id: create-deployment-license
title: Create deployment license
slug: /commands/create-deployment-license
displayed_sidebar: docs
---

<!--REF #_command_.Create deployment license.Syntax-->**Create deployment license** ( *mergedApp* ; *buildLicense* {; *oemLicense*} ) : Object<!-- END REF-->
<!--REF #_command_.Create deployment license.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| mergedApp | 4D.Folder | &#8594;  | 組み込みアプリケーションを格納したフォルダ |
| buildLicense | 4D.File | &#8594;  | 埋め込みライセンスを生成するのに必要なライセンス |
| oemLicense | 4D.File | &#8594;  | サーバーライセンスの場合には4D OEM XML Key ライセンス |
| 戻り値 | Object | &#8592; | ステータス |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Create deployment license.Summary-->**Create deployment license** コマンドは、*mergedApp* 引数で指定したビルドされたアプリのライセンスフォルダ内に、埋め込みライセンスファイルを作成します。<!-- END REF--> *mergedApp* 引数で指定した組み込みアプリ内にライセンスフォルダが存在しない場合、フォルダはコマンドによって作成されます。

*mergedApp* 引数には、ライセンスを埋め込みたいビルドされたアプリケーションを格納しているフォルダへの参照を格納した [4D.Folder](https://developer.4d.com/docs/API/FolderClass) オブジェクトを渡します。

*license* 引数には、埋め込みライセンスを生成するのに使用されるライセンスファイルへの参照を格納した [4D.File](https://developer.4d.com/docs/API/FileClass) オブジェクトを渡します。

ビルドに特定のOEM ライセンス(*4D OEM XML Keys*) が必要で、ビルドするマシンのライセンスフォルダにそのようなライセンスがまだインストールされていない場合、 *oemLicense* 引数を指定してそれを渡す必要があります。この引数は、あるマシンをアプリケーションをビルドする専用機として使う場合に便利です。

 コマンドは、以下のプロパティを格納した *status* オブジェクトを返します: 

| **プロパティ**    | **型**                                                  | **詳細**                  |
| ------------ | ------------------------------------------------------ | ----------------------- |
| success      | ブール                                                    | ライセンスファイルが生成された場合にはTrue |
| file         | [4D.File](https://developer.4d.com/docs/API/FileClass) | 生成されたライセンスファイル          |
| statusText   | テキスト                                                   | エラーがあればその詳細             |
| errors       | コレクション                                                 | エラーオブジェクトのコレクション        |
| \[\].message | テキスト                                                   | エラーメッセージ                |
| \[\].errCode | 数値                                                     | エラー番号                   |

**注意:**

* 生成されたライセンスは、*mergedApp* 引数で参照されたアプリケーションでのみ使用してください。
* アプリケーションを再ビルドする場合には、ライセンスをその度に生成する必要があります。

#### 例題 

```4d
 var $status : Object
 var $application : 4D.File
 var $license : 4D.File
 $license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;$license)
```

#### 参照 

  