---
id: dom-create-xml-element
title: DOM Create XML element
slug: /commands/dom-create-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element.Syntax-->**DOM Create XML element** ( *elementRef* ; *xPath* {; *attrName* ; *attrValue*} {; *attrName2* ; *attrValue2* ; ... ; *attrNameN* ; *attrValueN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | ルートXML要素参照 |
| xPath | Text | &#8594;  | 作成するXML要素のXPathパス |
| attrName | Text | &#8594;  | 設定する属性 |
| attrValue | Text, Boolean, Integer, Real, Time, Date | &#8594;  | 新しい属性値 |
| 戻り値 | Text | &#8592; | 作成されたXML要素の参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Create XML element.Summary-->**DOM Create XML element** コマンドは、*elementRef* で参照されるXML中の*xPath* 引数で指定された位置に新しい要素を作成し、また必要であれば属性を追加します。<!-- END REF-->

*elementRef* にはルートの要素参照 (例えば[DOM Create XML Ref](dom-create-xml-ref.md) コマンドで作成された) を渡します。

*xPath* 引数には、XPath 記法を使用して表現された、作成するパスを渡します(詳細な情報については、*XPath記法のサポート (DOM)*の章を参照してください)。以下のパス式がサポートされます: 

| **式**          | **アクション**              |
| -------------- | ---------------------- |
| /              | rootノードを指定します(絶対パス)    |
| para\[1\]      | コンテキストノードの最初のパラ子を指定します |
| para\[last()\] | コンテキストノードの最後のパラ子を指定します |

**互換性に関する注意:* v18 R3 以降、* *4D のXPath 実装はより幅広い式に対応しサポートするために変更されました。互換性上の理由から、以前の標準でない実装は返還されたデータベースではデフォルトでは維持されます。変換されたデータベースにおいて拡張された機能を利用するためには、* *互換性ページの互換性オプションの標準XPath を使用するオプションを選択してください。*

*xPath* 引数に直接単純な項目名を渡すことができます。この場合、カレントの項目のサブ項目が作成されます (例題3参照)。

存在しないパス要素があれば、それは作成されます。パス要素が既に存在する場合、新しいノードが追加されます。

**注:** *elementRef* 引数を使用して一つまたはそれ以上のツリーの名前空間を定義していた場合([DOM Create XML Ref](dom-create-xml-ref.md) コマンド参照)、使用したい名前空間のあとに*xPath* 引数を指定する必要があります(例: “MyNameSpace:MyElement”)。

任意の*attrName* および *attrValue* 引数には、属性/属性値のペアを渡すことができます(変数、フィールドまたはリテラル値形式が可能です)。渡すペアの数に制限はありません。

*attrValue* 引数はテキストあるいは他の型 (ブール、整数、実数、日付または時間) です。テキスト以外の型を渡した場合、4Dは以下の原則に基づきテキストへの変換を行います:

| **型** | **変換された値の例**                         |
| ----- | ------------------------------------ |
| ブール   | "true" または "false"                   |
| 整数    | "123456"                             |
| 実数    | "12.34" (小数点は常に ".")                 |
| 日付    | "2006-12-04T00:00:00Z" (RFC 3339 標準) |
| 時間    | "5233" (秒数)                          |

コマンドは作成された要素のXML参照を返します。

#### 例題 1 

以下の要素を作成したいとします: 

```RAW
 
```

`<RootElement>  
 <Elem1>  
 <Elem2>  
 <Elem3> </Elem3>  
 <Elem3> </Elem3>  
 </Elem2>  
 </Elem1>  
</RootElement>`

これを行うには以下のコードを実行します:

```4d
 var vRootRef;vElemRef : Text
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vElemRef:=DOM Create XML element(vRootRef;vxPath)
```

#### 例題 2 

以下の要素を作成したいとします (属性付き): 

```RAW
                                      
```

これを行うには以下のコードを実行します:

```4d
 var vRootRef;vElemRef : Text
 var $aAttrName1;$aAttrName2;$aAttrVal1;$aAttrVal2;$aAttrVal3 : Text

$aAttrName1:="Font"
 $aAttrName2:="Size"
 $aAttrVal1:="Verdana"
 $aAttrVal2:="10"
 $aAttrVal3:="8"
 
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal2)
 vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal3)


```

後から要素を挿入したい場合、以下のように書くことができます:

```4d
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vElemRef:=DOM Create XML element(vRootRef;vxPath;"Font";"Arial")
```

その結果、以下のような構造になります:

```RAW
                                                
```

#### 例題 3 

以下の構造を作成して書き出したいとします:  

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<Root>
   <Elem1>Hello</Elem1>
</Root>
```

項目名を使用したシンプルなシンタックスを使用する場合、以下のように書きます:

```4d
 var $root : Text
 var $ref1 : Text
 
 $root:=DOM Create XML Ref("Root")
 $ref1:=DOM Create XML element($root;"Elem1")
 DOM SET XML ELEMENT VALUE($ref1;"Hello")
 DOM EXPORT TO FILE($root;"mydoc.xml")
 DOM CLOSE XML($root)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されエラーが生成されます。

#### エラー管理 

エラーは以下の場合に生成されます:

* ルート要素参照が無効の場合。
* 作成する要素の名前が無効の場合 (例えば名前が数字で始まる場合)。

#### 参照 

[DOM Create XML element arrays](dom-create-xml-element-arrays.md)  
[DOM Get XML element](dom-get-xml-element.md)  
[DOM REMOVE XML ELEMENT](dom-remove-xml-element.md)  