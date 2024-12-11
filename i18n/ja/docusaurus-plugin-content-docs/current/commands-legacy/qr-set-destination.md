---
id: qr-set-destination
title: QR SET DESTINATION
slug: /commands/qr-set-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DESTINATION.Syntax-->**QR SET DESTINATION** ( *area* ; *type* {; *specifics*} )<!-- END REF-->
<!--REF #_command_.QR SET DESTINATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| type | Integer | &#8594;  | レポートの出力先 |
| specifics | Text, Variable | &#8594;  | 出力先の詳細 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET DESTINATION.Summary-->**QR SET DESTINATION** コマンドは、*area* に渡された参照番号のエリア用のレポート出力タイプを設定します。<!-- END REF-->

*type* 引数には、 *QR Output Destination* テーマの定数のいずれかを渡します。*specifics* 引数の内容は*type* の値に基づきます。次の表は*type* および*specifics* の両引数へ渡すことができる値を示しています:

| 定数           | 型    | 値 | コメント                          |
| ------------ | ---- | - | ----------------------------- |
| qr HTML file | 倍長整数 | 5 | ファイルへのパス名                     |
| qr printer   | 倍長整数 | 1 | "\*" を渡した場合、印刷ダイアログボックスを表示しない |
| qr text file | 倍長整数 | 2 | ファイルへのパス名                     |

*qr printer* (1): *specifics* 引数にアスタリスク("\*")を含む文字列を渡した場合、印刷の途中にダイアログボックスは表示されずカレントの印刷設定が自動的に使用されます。この設定は、サーバーでレポートを印刷する際に必要になります。

*qr text file* (2): *specifics*引数に空の文字列を渡した場合、ファイル保存ダイアログが表示されます。それ以外の場合、ファイルはパス名で指定された場所に保存されます。  
デフォルトのフィールド区切りはタブ記号 (文字コード9) です。また、デフォルトのレコード区切りはキャリッジリターン (文字コード13) です。区切り文字用の2つのシステム変数 (FldDelimitとRecDelimit) に値を指定して、これらのデフォルト値を変更できます。Windowsにおいて、FldDelimitが13である場合、このキャリッジリターンの後にラインフィード (文字コード10) が付加されます。これらの変数は、 [IMPORT TEXT](import-text.md) などの他のコマンドでも使用される点に注意してください。クイックレポートエディタのためにこれらの変数の値を変更すると、その変更はアプリケーションのあらゆる箇所に反映されます。

*qr HTML file* (5): [QR SET HTML TEMPLATE](qr-set-html-template.md) で設定されたテンプレートを使用して、HTMLファイルが作成されます。この変換の実行方法については、4D Design Referenceマニュアルを参照してください。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な出力先*type*を渡した場合、エラー番号-9852が生成されます。

#### 例題 

以下のコードは出力先をテキストファイルMydoc.txtに設定し、クイックレポートを実行します: 

```4d
 QR SET DESTINATION(MyArea;2;"MyDoc.txt")
 QR RUN(MyArea)
```

#### 参照 

[QR GET DESTINATION](qr-get-destination.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 745 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


