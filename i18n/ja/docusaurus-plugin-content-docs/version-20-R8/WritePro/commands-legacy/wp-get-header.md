---
id: wp-get-header
title: WP Get header
slug: /WritePro/commands/wp-get-header
displayed_sidebar: docs
---

<!--REF #_command_.WP Get header.Syntax-->**WP Get header** ( *targetObj* ) | (*wpDoc* ; *sectionIndex* {; *subSectionType*} )  -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get header.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro レンジ |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| sectionIndex | Integer | &#8594;  | セクションインデックス |
| subSectionType | Integer | &#8594;  | サブセクションのタイプ(wk first page、wk left page、あるいは wk right page) |
| 戻り値 | Object | &#8592; | 4D Write Pro ヘッダー |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get header.Summary-->**WP Get header** コマンドは*wpDoc* 引数で指定したドキュメントの、*targetObj* 引数で指定したレンジ、あるいは*sectionIndex* 引数で指定したインデックスに関連付けられたヘッダーを返します。<!-- END REF-->引数で指定した条件に合致するヘッダーが見つからなかった場合、コマンドは**Null** を返します。

* 第一シンタックス(*targetObj* 引数を使用)では、コマンドはレンジ内の最初のページのヘッダー、あるいは引数として渡されたセクション/サブセクションのヘッダーを返します。ページ内においてサブセクションがアクティブになっている場合、コマンドはアクティブなサブセクションのヘッダーを返します(そのため常に表示されているヘッダーを返します)。
* 第二シンタックス(*wpDoc* 引数)では、*sectionIndex* コマンドは引数で指定したセクションのヘッダーを返します(*sectionIndex* 引数の値は1以上でなければなりません)。  
*subSectionType* 引数が渡された場合、コマンドは指定されたサブセクションタイプに関連付けられたヘッダーを返します。*subSectionType* 引数には以下の定数のどれか一つを渡すことができます:  

| 定数            | 型    | 値 |  
| ------------- | ---- | - |  
| wk first page | 倍長整数 | 1 |  
| wk left page  | 倍長整数 | 2 |  
| wk right page | 倍長整数 | 3 |  
    
*subSectionType* 引数が指定されなかった場合、メインセクションのヘッダーが返されます。この場合、サブセクションがアクティブになっている場合、メインセクションのヘッダーオブジェクトは*undefined* となります(メインセクションのヘッダーはアクティブなwk first page あるいは wk left page サブセクションがない場合にのみ利用可能です)。

#### 例題 

ある4D Write Pro ドキュメントの最初のページのヘッダーを、他の4D Write Pro ドキュメントのすべてのページのヘッダーにコピーしたい場合を考えます:

```4d
 var $headerSource;$rangeSource;$tempoc;$headerTarget;$rangeTarget : Object
 
 $headerSource:=WP Get header([TEMPLATES]WPtemplate;1;wk first page) //セクション1の最初のページのヘッダーを取得
 $rangeSource:=WP Text range($headerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $headerTarget:=WP Get header([Docs]MyWPDoc;1) //セクション1の全ページ
 $rangeTarget:=WP Text range($headerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### 参照 

*4D Write Pro エリアを使用する*  
[WP DELETE HEADER](wp-delete-header.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  
[WP Text range](wp-text-range.md)  