---
id: get-allowed-methods
title: GET ALLOWED METHODS
slug: /commands/get-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.GET ALLOWED METHODS.Syntax-->**GET ALLOWED METHODS** ( *methodsArray* )<!-- END REF-->
<!--REF #_command_.GET ALLOWED METHODS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| methodsArray | Text array | &#8592; | メソッド名配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET ALLOWED METHODS.Summary-->GET ALLOWED METHODS コマンドは、フォーミュラの作成に使用できるメソッド名を引数*methodsArray*に返します。<!-- END REF-->これらのメソッドは、エディタ上のコマンドリストの最後に一覧表示されます。 

デフォルトで、メソッドはフォーミュラエディタで利用できません。メソッドは[SET ALLOWED METHODS](../commands/set-allowed-methods.md "SET ALLOWED METHODS") コマンドを使用して明示的に許可しなければなりません。このメソッドが実行されていない場合、GET ALLOWED METHODS メソッドは空の配列を返します。  
  
GET ALLOWED METHODSコマンドは、[SET ALLOWED METHODS](../commands/set-allowed-methods.md "SET ALLOWED METHODS")コマンドに渡されたものとまったく同じ値を返します。必要に応じてコマンドは配列の作成やサイズ調整を行います。また、ワイルドカード記号（@）を使用してメソッドグループが設定されている場合、“@”記号を含む文字列が返されます（メソッドグループの名前ではありません）。

このコマンドは、特定のコンテキストのフォーミュラ（例えば、クイックレポートなど）を実行する前に、現在指定されているメソッドの組み合わせの設定を保存しておくために使用できます。

#### 例題 

この例では、レポート作成のため一連の特定メソッドを許可します: 

```4d
  //現在の設定を取得
 GET ALLOWED METHODS(methodsArray)
 
  //クイックレポート用のメソッドを定義
 methodsarr_Reports{1}:="Reports_@"
 SET ALLOWED METHODS(methodsarr_Reports)
 QR REPORT([People];"MyReport")
 
  //先ほどの設定に戻す
 SET ALLOWED METHODS(methodsArray)
```

#### 参照 

[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 908 |
| スレッドセーフである | &cross; |


