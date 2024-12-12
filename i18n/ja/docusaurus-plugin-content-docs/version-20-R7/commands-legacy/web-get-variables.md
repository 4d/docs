---
id: web-get-variables
title: WEB GET VARIABLES
slug: /commands/web-get-variables
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET VARIABLES.Syntax-->**WEB GET VARIABLES** ( *nameArray* ; *valueArray* )<!-- END REF-->
<!--REF #_command_.WEB GET VARIABLES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| nameArray | Text array | &#8592; | Webフォームの変数の名前 |
| valueArray | Text array | &#8592; | Webフォームの変数の値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB GET VARIABLES.Summary-->**WEB GET VARIABLES**コマンドは、サブミットされたWebフォームにある変数の名前と値をテキスト配列 *nameArray*と*valueArray* に代入します。<!-- END REF-->

このコマンドはHTMLページ、テキストエリア、ボタン、チェックボックス、ラジオボタン、ポップアップメニュー、選択リストにあるすべての変数の値を取得します。

**注:** チェックボックスに関しては、チェックボックスが実際にチェックされた場合に限り、その変数の名前と値が返されます。

URLのタイプやWebサーバーに送られたフォーム (POSTまたはGETメソッド) に関係なく有効です。

[QR SET DESTINATION](qr-set-destination.md)や、フォームをサブミットすることによって呼び出される他の4Dメソッドにおいて、必要に応じこのコマンドを呼び出します。

##### Webフォームと関連するアクションについて 

各フォームには、名前が付けられたデータを入力するエリアがあります (テキストエリア、ボタン、チェックボックス) 。  
フォームがサブミットされると (リクエストがWebサーバへ送られます) 、リクエストはデータ入力エリアのリストとそれに関連する値を格納します。  
2つのメソッドでフォームをサブミットできます (両方とも4Dで使用できます) 。  

* POST: 通常Webサーバやデータベースにデータを追加する際に使用します。
* GET: 通常Webサーバやデータベースから抽出されたデータをリクエストする際に使用します。

#### 例題 

フォームには、値 "ROBERT" と "DALLAS" を持つ vNameフィールドとvCityフィールドがそれぞれあります。そのフォームに関連するアクションは、"/4DACTION/WEBFORM" です。

* フォームメソッドがPOST (頻繁に使用されます) である場合、入力されたデータはURL上で表示されません。
* フォームメソッドがGETである場合、入力されたデータはURLで表示されます。 (http://127.0.0.1/4DACTION/WEBFORM?vNAME=ROBERT&vCITY=DALLAS).

WEBFORMメソッド以下のように記述します。

```4d
 ARRAY TEXT($anames;0)
 ARRAY TEXT($avalues;0)
 WEB GET VARIABLES($anames;$avalues)
```

結果は以下のようになります。

```4d
 $anames{1}="vNAME"
 $anames{2}="vCITY"
 $avalues{1}="ROBERT"
 $avalues{2}="DALLAS"
```

変数vNAMEは、ROBERTを格納し、変数vCITYは、DALLASを格納します。.

#### 参照 

[WEB GET BODY PART](web-get-body-part.md)  