---
id: wp-get-footer
title: WP Get footer
slug: /WritePro/commands/wp-get-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP Get footer.Syntax-->**WP Get footer** ( *targetObj* ) | (*wpDoc* ; *sectionIndex* {; *sectionSubType*} )  -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get footer.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro レンジ |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| sectionIndex | Integer | &#8594;  | セクションインデックス |
| sectionSubType | Integer | &#8594;  | サブセクションのタイプ(wk first page、wk left page、あるいは wk right page) |
| 戻り値 | Object | &#8592; | 4D Write Pro フッター |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get footer.Summary-->**WP Get footer** コマンドは*wpDoc* 引数で指定したドキュメントの、*targetObj* 引数で指定したレンジ、あるいは*sectionIndex* 引数で指定したインデックスに関連付けられたフッターを返します。<!-- END REF-->引数で指定した条件に合致するフッターが見つからなかった場合、コマンドは**Null** を返します。

* 第一シンタックス(*targetObj* 引数を使用)では、コマンドはレンジ内の最初のページのフッター、あるいは引数として渡されたセクション/サブセクションのフッターを返します。ページ内においてサブセクションがアクティブになっている場合、コマンドはアクティブなサブセクションのフッターを返します(そのため常に表示されているフッターを返します)。
* 第二シンタックス(*wpDoc* 引数)では、*sectionIndex* コマンドは引数で指定したセクションのフッターを返します(*sectionIndex* 引数の値は1以上でなければなりません)。  
*subSectionType* 引数が渡された場合、コマンドは指定されたサブセクションタイプに関連付けられたフッターを返します。*subSectionType* 引数には以下の定数のどれか一つを渡すことができます:  

| 定数            | 型    | 値 |  
| ------------- | ---- | - |  
| wk first page | 倍長整数 | 1 |  
| wk left page  | 倍長整数 | 2 |  
| wk right page | 倍長整数 | 3 |  
    
*subSectionType* 引数が指定されなかった場合、メインセクションのフッターが返されます。この場合、サブセクションがアクティブになっている場合、メインセクションのフッターオブジェクトは*undefined* となります(メインセクションフッターはアクティブなwk first page あるいは wk left page サブセクションがない場合にのみ利用可能です)。

#### 例題 

ある4D Write Pro ドキュメントの最初のページのフッターを、他の4D Write Pro ドキュメントのすべてのページのフッターにコピーしたい場合を考えます:

```4d
 var $footerSource;$rangeSource;$tempoc;$footerTarget;$rangeTarget : Object
 
 $footerSource:=WP Get footer([TEMPLATES]WPtemplate;1;wk first page) //セクション1の最初のページのフッターを取得
 $rangeSource:=WP Text range($footerSource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $footerTarget:=WP Get footer([Docs]MyWPDoc;1) //セクション1の全てのページ
 $rangeTarget:=WP Text range($footerTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### 参照 

*4D Write Pro エリアを使用する*  
[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get frame](wp-get-frame.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  