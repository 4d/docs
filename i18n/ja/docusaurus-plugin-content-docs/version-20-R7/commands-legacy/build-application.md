---
id: build-application
title: BUILD APPLICATION
slug: /commands/build-application
displayed_sidebar: docs
---

<!--REF #_command_.BUILD APPLICATION.Syntax-->**BUILD APPLICATION** {( *projectName* )}<!-- END REF-->
<!--REF #_command_.BUILD APPLICATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| projectName | Text | &#8594;  | 使用する設定ファイルのフルアクセスパス |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.BUILD APPLICATION.Summary-->BUILD APPLICATION コマンドはアプリケーションの生成処理を開始します。<!-- END REF-->処理に使用されるのは、カレントのアプリケーションビルド設定ファイル、または*buildAppSettings* 引数で渡した設定ファイルのパラメーターです。

**注:** このコマンドは、4D Developer (シングルユーザー)でしか動作しません。4D Server、リモートモードの4D、組み込みアプリケーションから呼び出すことはできません。

アプリケーションビルド設定ファイルはXMLファイルで、アプリケーションを生成するために使用されるすべてのパラメーターが含まれています。ほとんどのパ ラメーターはアプリケーションビルドダイアログボックスで確認できます。詳細は4D Design Referenceマニュアルの *アプリケーションビルダー*を参照してください。

デフォルトで、4Dはデータベースごとに“buildApp.4DSettings”という名前のアプリケーションビルド設定ファイルを作成し、データベースのSettingsフォルダー内に配置します。

データベースがコンパイルされていないか、コンパイルされたコードが古い場合、コマンドはまずコンパイル処理を起動します。この場合、エラーが発生しない限り、コンパイラウィンドウは表示されません。進捗バーのみが表示されます。この進捗バーは、 [MESSAGES OFF](messages-off.md) コマンドによって非表示にすることができます。

オプションのbuildAppSettings 引数を渡さない場合、コマンドは標準のファイルを開くダイアログボックスを表示し、アプリケーションビルド設定ファイルの選択を要求します。ダイアログボックスが受け入れられると、システム変数 Document に開かれた設定ファイルのフルパスが格納されます。

有効なアプリケーションプロジェクトとして、XMLファイル (UTF-8エンコーディングおよび拡張子“.xml”) のアクセスパスと名前を渡すと、コマンドはファイルで定義されたパラメーターを使用します。アプリケーションビルド設定ファイルで利用可能な構造とキーに関する詳細は*アプリケーションビルド設定ファイル*を参照してください。

#### 例題 

この例題では、1つのメソッドで2つのアプリケーションを作成します:

```4d
 BUILD APPLICATION("c:\\folder\\buildApp\\myclientApp.xml")
 If(OK=1)
    BUILD APPLICATION(File(Build application settings file).platformPath) //デフォルト設定
 End if
```

#### システム変数またはセット 

コマンドが正しく実行されると、システム変数OKに1が、そうでなければ0が設定されます。システム変数 Document には開かれた設定ファイルのフルパス名が格納されます。

#### エラー処理 

コマンドの実行に失敗すると、[ON ERR CALL](on-err-call.md "ON ERR CALL") コマンドで割り込み可能なエラーが生成されます。

#### 参照 

[Compile project](compile-project.md)  