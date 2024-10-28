---
id: wa-set-page-content
title: WA SET PAGE CONTENT
slug: /commands/wa-set-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PAGE CONTENT.Syntax-->**WA SET PAGE CONTENT** ( {* ;} *object* ; *content* ; *baseURL* )<!-- END REF-->
<!--REF #_command_.WA SET PAGE CONTENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| content | Text | &#8594;  | HTMLソースコード |
| baseURL | Text | &#8594;  | 相対参照に使用するURL (Mac OS) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 互換性に関する注意 

<!--REF #_command_.WA SET PAGE CONTENT.Summary-->この歴史的なコマンドは現実的にはもはや実用的とは言えません。<!-- END REF-->現代的なブラウザにおいてはセキュリティが厳格化されているため、ページコンテンツを"オンザフライ"で変更することに対しては制約が増える一方です。より信頼性のある方法としてはローカルなファイルを(例: 一時フォルダ内などに)作成し、[WA OPEN URL](wa-open-url.md) を使用してロードすることです。コンテンツを消去するためには、**WA OPEN URL**(myArea;”about:blank”) を呼び出してください。

#### 説明 

The WA SET PAGE CONTENT コマンドは、*\** と *object* 引数で指定したWebエリアに表示されているページを、*content*引数で渡されたHTML コードで置き換えます。

Mac OSでは、*baseURL*引数を使用して、ページ中に存在する相対パスの前に追加するベースURLを指定できます。  
Windows では、この引数は効果がなく、ベースURLは指定されません。このプラットフォームでは相対参照を使用できません。

**Note:** Windows では、このコマンドが呼ばれる前に、ページが既にWeb エリアにロードされていなければなりません。必要であれば"about:blank"URL を使用してブランクページをロードできます。

#### 例題 

"Hello world!" を表示して、ベースURL を"file:///" にします (Mac OS のみ):

```4d
 WA SET PAGE CONTENT(MyWArea;"

[Hello World!]

";"file:///")
```

#### 参照 

[WA Get page content](wa-get-page-content.md)  