---
id: create-deployment-license
title: Create deployment license
slug: /commands/create-deployment-license
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース   | 内容                        |
| ------ | ------------------------- |
| 20 R10 | 新しい*autoLicenseTarget* 引数 |
| 20     | 追加                        |

</details>

<!--REF #_command_.Create deployment license.Syntax-->**Create deployment license** ( *mergedApp* ; *autoLicenseTarget* ) : Object<br/>**Create deployment license** ( *mergedApp* ; *buildLicense* {; *oemLicense*} ) : Object<!-- END REF-->

<!--REF #_command_.Create deployment license.Params-->

| 引数                | 型                         |                             | 説明                              |
| ----------------- | ------------------------- | --------------------------- | ------------------------------- |
| mergedApp         | 4D.Folder | &#8594; | 組み込みアプリを格納しているフォルダ              |
| autoLicenseTarget | Integer                   | &#8594; | 自動ライセンス埋め込み用のターゲットライセンス         |
| buildLicense      | 4D.File   | &#8594; | 埋め込みライセンスを生成するのに必要なライセンス        |
| oemLicense        | 4D.File   | &#8594; | サーバーライセンスの場合は4D OEM XML キーライセンス |
| 戻り値               | Object                    | &#8592; | ステータス                           |

<!-- END REF-->

## 説明

<!--REF #_command_.Create deployment license.Summary-->**Create deployment license** コマンドは*mergedApp* 引数のビルドアプリケーションのLicenses フォルダ内に埋め込みライセンスファイルを作成します。<!-- END REF-->*mergedApp* 引数で指定したフォルダ内にLicenses フォルダが存在しない場合、このコマンドによって作成されます。

*mergedApp* 引数には、ライセンスを埋め込みたいビルドアプリケーションを格納しているフォルダへの参照を格納した[4D.Folder](../API/FolderClass.md) オブジェクトを渡します。

第二引数によって、ターゲットに対して[使用するライセンスを4D に自動的に決めさせる](#automatic-license-selection) か、または[使用するライセンスを指定](#designating-the-licenses-to-use) します。

### 自動ライセンス選択

*autoLicenseTarget* 引数を渡した場合、指定されたターゲットに対して、最適なライセンスを4D に探させて使用します。 自動ライセンス選択についてのより詳細な情報については、[ビルドアプリケーション](../Desktop/building.md#application-automatically-embedding-available-licenses) の章を参照して下さい。

以下の定数が*autoLicenseTarget* 引数においてサポートされます:

| 定数                | 値 | 説明                                   |
| ----------------- | - | ------------------------------------ |
| 4D Volume Desktop | 1 | 4D シングルユーザーアプリケーション用のライセンスを自動的に作成します |
| 4D Server         | 5 | 4D Server アプリケーション用のライセンスを自動的に作成します  |

有効なライセンスが見つからない場合、エラーが生成されます。

### 使用するライセンスを指定する

*license* 引数には、埋め込みライセンスを生成するのに使用したライセンスファイルへの参照を格納した[4D.File](../API/FileClass.md) オブジェクトを渡します。

非自動モードにおいて、ビルドに特定のOEM ライセンス(*4D OEM XML キー*)が必要で、そのようなライセンスがLicenses フォルダ内にすでにインストールされていない場合には、*oemLicense* 引数を使用してそれを渡す必要があります。 この引数は、アプリケーションのビルドに専用のマシンを用意している場合などに有用です。

### 戻り値

コマンドは、以下のプロパティを格納した *status* オブジェクトを返します:

| **プロパティ**                                                                          | **型**                                          | **Description**                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| success                                                                            | Boolean                                        | ライセンスファイルが生成された場合にはTrue                                                                |
| file                                                                               | [4D.File](../API/FileClass.md) | 生成されたライセンスファイル                                                                         |
| statusText                                                                         | Text                                           | エラーの詳細(あれば)                                                         |
| errors                                                                             | Collection                                     | エラーオブジェクトのコレクション                                                                       |
| \[\].message | Text                                           | エラーメッセージ                                                                               |
| \[\].errCode | Number                                         | エラー番号                                                                                  |
| standalone                                                                         | Object                                         | ([自動モード](#自動ライセンス選択)の場合のみ) `4D Volume Desktop` ライセンスのDescription 属性 |
| oemServer                                                                          | Object                                         | ([自動モード](#自動ライセンス選択)の場合のみ) `4D Server` OEM ライセンスのDescription 属性     |
| oemXMLKey                                                                          | Object                                         | ([自動モード](#自動ライセンス選択)の場合のみ) `4D Server` XML キーライセンスのDescription 属性   |

*Description 属性* は以下のようになっています:

| **プロパティ**            | **型**  | **Description**       |
| -------------------- | ------ | --------------------- |
| absolutePlatformPath | Text   | 保持している元のライセンスファイルへのパス |
| offerName            | Text   | 保持しているライセンスの商用名       |
| productNumber        | Number | 保持しているライセンスのシリアル番号    |

:::note 注記

- 生成されたライセンスは*mergedApp* 引数で参照されているアプリケーション以外で使用してはいけません。
- ライセンスは、アプリケーションのビルド/リビルドごとに再生成する必要があります。

:::

## 例題 1

自動シンタックスを使用してシングルユーザー向け4Dアプリケーションを作成します:

```4d
 var $status : Object
 var $application : 4D.File
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;4D Volume Desktop)
```

## 例題 2

使用するライセンスを指定します:

```4d
 var $status : Object
 var $application : 4D.File
 var $license : 4D.File
 $license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;$license)
```

## 参照

[Blog post - Finalize an application with 4D commands](https://blog.4d.com/finalize-an-application-with-4d-commands)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1811                        |
| スレッドセーフ | &cross; |


