---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *componentsArray* )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| componentsArray | Text array | &#8592; | コンポーネント名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.COMPONENT LIST.Summary-->**COMPONENT LIST**コマンドは、4Dがカレントのホストデータベースにロードしたコンポーネントの名前を、*componentsArray* 配列に返します。<!-- END REF-->

データベースが開かれると、4DはComponentsフォルダ内の有効なコンポーネントをロードします。

* ストラクチャーファイルと同階層にあるComponentsフォルダー
* 4Dアプリケーション実行ファイルと同階層にあるComponentsフォルダー

**注**： 両方に同じコンポーネントがインストールされている場合、4Dはストラクチャーと同階層のComponentsフォルダーにあるコンポーネントをロードします。

このコマンドは、ホストデータベースまたはコンポーネントから呼び出すことができます。データベースがコンポーネントを使用しない場合、*componentsArray* 配列は空となります。

コンポーネントの名前は、マトリクスデータベース (.4db, .4dc または .4dbase) のストラクチャー名です。このコマンドを使用して、コンポーネントがインストールされているかいないかにより追加の機能を提供する、アーキテクチャやモジュールインタフェースを設定できます。

4Dコンポーネントに関する詳細は、Design Referenceマニュアルを参照してください。

#### 参照 

[PLUGIN LIST](plugin-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1001 |
| スレッドセーフである | &check; |


