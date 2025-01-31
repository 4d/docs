---
id: dom-find-xml-element-by-id
title: DOM Find XML element by ID
slug: /commands/dom-find-xml-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element by ID.Syntax-->**DOM Find XML element by ID** ( *elementRef* ; *id* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element by ID.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| id | Text | &#8594;  | 検索する要素のID属性値 |
| 戻り値 | Text | &#8592; | 見つけた要素の参照 (該当する場合) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Find XML element by ID.Summary-->DOM Find XML element by ID コマンドはXMLドキュメント中で、id属性値が引数として渡した*id*と同じである要素を検索します。<!-- END REF-->

*elementRef*にはXMLドキュメント中の要素の参照を渡します。ルート要素の参照あるいは他の要素の参照を渡すことができます。検索は*elementRef*の位置を考慮せず、常にドキュメント全体を検索します。

コマンドは見つけたXML要素の参照を返します。

**警告:** XMLにおいて、id属性はドキュメント要素ごとのユニークIDを関連付けます。ID属性の値は有効なXML名でなければならず、XMLドキュメント内のすべての要素中でユニークでなければなりません (妥当性制約)。DOM Find XML element by IDコマンドが正しく動作するためには、この制約が守られていなければなりません。そうでない場合、結果は保証されません (コマンドはドキュメント中で最初に見つけた要素を返します)。

#### 参照 

[DOM Find XML element](dom-find-xml-element.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1010 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


