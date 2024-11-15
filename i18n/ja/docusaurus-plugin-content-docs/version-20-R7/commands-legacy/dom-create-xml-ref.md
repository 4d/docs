---
id: dom-create-xml-ref
title: DOM Create XML Ref
slug: /commands/dom-create-xml-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML Ref.Syntax-->**DOM Create XML Ref** ( *root* {; *nameSpace*} {; *nameSpaceName* ; *nameSpaceValue*} {; *nameSpaceName2* ; *nameSpaceValue2* ; ... ; *nameSpaceNameN* ; *nameSpaceValueN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML Ref.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| root | Text | &#8594;  | ルート要素名 |
| nameSpace | Text | &#8594;  | 名前空間の値 |
| nameSpaceName | Text | &#8594;  | 名前空間名 |
| nameSpaceValue | Text | &#8594;  | 名前空間値 |
| 戻り値 | Text | &#8592; | ルートXML要素参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Create XML Ref.Summary-->DOM Create XML Ref コマンドは空のXMLツリーをメモリに作成し、その参照を返します。<!-- END REF-->  
  
*root* 引数にはXMLツリーのルート要素名を渡します。

オプションの*nameSpace* 引数にはツリーの名前空間値の定義を渡します (例えば“http://www.4d.com”)。   
*root*引数に名前空間名とコロン、そしてルート要素名を結合した文字列を渡せることができます (例えば“MyNameSpace:MyRoot”)。この場合、名前空間を指定する*nameSpace*引数は必須となります。

**Note:** 名前空間は文字列で、XML変数名がユニークであることを保証するために使用されます。一般的に、http://www.mysite.com/myurlのようなURLが使用されます。URLが有効である必要はありませんが、ユニークでなければなりません。

*nameSpaceName/nameSpaceValue* のペアを使用して、生成されたXMLツリーの中で1つ以上の追加の名前空間を定義できます。 

**重要**: XMLツリーへの作業が終了したら、メモリを解放するために、[DOM CLOSE XML](dom-close-xml.md "DOM CLOSE XML") コマンドを呼び出してください。

#### 例題 1 

ひとつのXMLツリーを作成します:   

```4d
 var vElemRef : Text
 vElemRef:=DOM Create XML Ref("MyRoot")
```

このコードは以下の結果を生成します:

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?> 
<MyRoot/>
```

#### 例題 2 

 １つの名前空間をもつXMLツリーを作成します:   
  
```4d
 var vElemRef : Text
 $Root:="MyNameSpace:MyRoot"
 $Namespace:="http://www.4D.com/tech/namespace"
 vElemRef:=DOM Create XML Ref($Root;$Namespace)
```

このコードは以下の結果を生成します:

```XML
<MyNameSpace:MyRoot xmlns:MyNameSpace="http://www.4D.com/tech/namespace"/>
```

#### 例題 3 

複数の名前空間を持つXMLツリーを作成します:   
  
```4d
 var vElemRef : Text
 var $aNSName1;$aNSName2;$aNSValue1;$aNSValue2 : Text
 $Root:="MyNameSpace:MyRoot"
 $Namespace:="http://www.4D.com/tech/namespace"
 $aNSName1:="NSName1"
 $aNSName2:="NSName2"
 $aNSValue1:="http://www.4D.com/Prod/namespace"
 $aNSValue2:="http://www.4D.com/Mkt/namespace"
 vElemRef:=DOM Create XML Ref($Root;$Namespace;$aNSName1;$aNSValue1;$aNSName2;$aNSValue2)
```

このコードは以下の結果を生成します:

```XML
<MyNameSpace:MyRoot xmlns:MyNameSpace="http://www.4D.com/tech/nameSpace"
NSName1="http://www.4D.com/Prod/namespace"
NSName2="http://www.4D.com/Mkt/namespace"/>
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM SET XML DECLARATION](dom-set-xml-declaration.md)  