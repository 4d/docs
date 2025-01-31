---
id: wp-get-subsection
title: WP Get subsection
slug: /WritePro/commands/wp-get-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP Get subsection.Syntax-->**WP Get subsection** ( *targetObj* ) | (*wpSection* ; *subSectionType* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get subsection.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素 |
| wpSection | Object | &#8594;  | 4D Write Pro セクション |
| subSectionType | Integer | &#8594;  | サブセクションのタイプ(wk first page, wk left page, または wk right page) |
| 戻り値 | Object | &#8592; | サブセクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get subsection.Summary-->**WP Get subsection** コマンドは、*targetObj* 引数で指定したレンジまたは要素と交差する最初のサブセクション、あるいは*wpSection* 引数のセクション内の*subSectionType* 型のサブセクションを返します。<!-- END REF-->

* 最初のシンタックス(*targetObj* 引数を使用)では、コマンドはレンジまたは要素と交差する最初のサブセクションを返します。レンジまたは要素と交差するサブセクションがない場合、**null** オブジェクトが返されます。*targetObj* 引数には、以下のいづれかを渡すことができます:  
   * レンジ  
   * 要素(表 / 行 / 段落 / 本文 / テキストボックス / ヘッダー / フッター )  
レンジまたは要素がヘッダー/フッター/テキストボックスであるかまたはそれらに所属している場合、**WP Get subsection** は*targetObj* 引数で指定した要素が割り当てられているサブセクションを返します。*targetObj* で指定した要素がサブセクションに割り当てられていない場合、**null** オブジェクトが返されます。  
レンジまたは要素がアンカーされた画像に所属している場合、エラーが返されます。
* 第二シンタックス(*wpSection* および *subSectionType* 引数を使用)では、コマンドは*subSectionType* タイプの*wpSubSection* サブセクションオブジェクト(*wpSection* の子)を返します。*subSectionType* 引数には以下の定数のいづれか一つを渡します:  
    
| 定数            | 型    | 値 |  
| ------------- | ---- | - |  
| wk first page | 倍長整数 | 1 |  
| wk left page  | 倍長整数 | 2 |  
| wk right page | 倍長整数 | 3 |  
    
    
*wpSection* 引数で指定したセクションに*subSectionType* 引数のタイプのサブセクションが定義されていない場合、 コマンドは未定義のオブジェクトを返します(エラーは返されません)。

#### 例題 

左ページに青い背景を適用したい場合を考えます:

```4d
 var $section;$subsection : Object
  //最初のセクションを取得
 $section:=WP Get section(wpDoc;1)
  //最初のセクションの左ページサブセクションへを取得
 $subsection:=WP Get subsection($section;wk left page)
 
  //サブセクションが存在する場合、背景を青に設定
 If($subsection#Null)
    WP SET ATTRIBUTES($subsection;wk background color;"#87CEEB")
 Else
    ALERT("Please, create left and right subsections.")
 End if
```

#### 参照 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get section](wp-get-section.md)  
[WP New subsection](wp-new-subsection.md)  