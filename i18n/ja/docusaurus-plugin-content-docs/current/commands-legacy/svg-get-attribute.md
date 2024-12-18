---
id: svg-get-attribute
title: SVG GET ATTRIBUTE
slug: /commands/svg-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG GET ATTRIBUTE.Syntax-->**SVG GET ATTRIBUTE** ( {* ;} *pictureObject* ; element_ID ; *attribName* ; *attribValue* )<!-- END REF-->
<!--REF #_command_.SVG GET ATTRIBUTE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: pictureObjectはオブジェクト名 (文字) <br/>省略時: pictureObjectは変数 |
| pictureObject | Picture | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数 (* 省略時) |
| element_ID | Text | &#8594;  | 属性値を取得する要素のID |
| attribName | Text | &#8594;  | 取得する属性 |
| attribValue | Text, Integer | &#8592; | 現在の属性値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SVG GET ATTRIBUTE.Summary-->**SVG GET ATTRIBUTE**コマンドを使用して、オブジェクトまたはSVGピクチャの*attribName*属性の現在値を取得できます。<!-- END REF--> 

オプションの *\** 引数を渡すと、*pictureObject*引数はオブジェクト名 (文字) です。この場合、コマンドはオブジェクトにアタッチされた描画イメージの属性値を返します。この値は例えば[SVG SET ATTRIBUTE](svg-set-attribute.md)で変更されているかもしれません。  
*\** 引数を渡さないと、*pictureObject*引数は変数です。従って文字ではなく変数参照 (変数オブジェクトのみ) を渡します。この場合コマンドは、最初に描画されたイメージの属性値を返します (変数のデーターソースに対応)。

**注:** この原則は既存の[SVG Find element ID by coordinates](svg-find-element-id-by-coordinates.md)コマンドにも適用されます。

*element\_ID* 引数は属性値を取得したい要素のID ("id"または"xml:id"属性) を設定するために使用します。

SVG属性に関する詳細は、[SVG SET ATTRIBUTE](svg-set-attribute.md)コマンドの説明を参照してください。以下は予約済みまたはアニメーションに関連する4Dの属性です:

| **属性**                                        | **アクセス** | **コメント**                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D-text                                       | 読み/書き    | テキストノードの内容を置き換え/読み込みます。'text'、'tspan'、および'textArea'要素で利用できます。                                                                                                                                                                                                                                       |
| 4D-bringToFront                               | 読み込み     | 'true'の場合、ノードを兄弟ノードの前面に移動します。[SVG SET ATTRIBUTE](svg-set-attribute.md)コマンドでのみ使用できます。                                                                                                                                                                                                                |
| 4D-isOfClass-{IDENT \[\[S\|COMMA\] IDENT\]\*} | 読み込み     | ノードの継承クラス属性がすべてのクラス名を含む場合に'true'を返します。そうでなければ'false'を返します。例えば"4D-isOfClass-land"に対してノードの継承されたクラスが"land department01" の場合、trueを返します。                                                                                                                                                                 |
| 4D-enableD2D                                  | 読み/書き    | 'false'の場合、SVG描画エンジンのDirect2Dを無効にします。実際SVGフィルターはDirect2Dでは描画されず、GDI/GDIPlusを使用します。このオプションを使用すればデータベースがDirect2DモードであってもSVGフィルターを利用できるようになります。このオプションはピクチャーが*pictureObject*にロード済みである場合のみ効果がある点に留意してください。このオプションはエンジンにグローバルに設定されるため、セッション毎に一回設定すれば十分です (例えばデータベース開始時にテキスト変数からメモリにロードされた小さなSVGのようなケース)。 |

#### 参照 

[SVG SET ATTRIBUTE](svg-set-attribute.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1056 |
| スレッドセーフである | &cross; |


