---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *targetObj* ; *attribName* {; *attribName2* ; ... ; *attribNameN*} )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribName* }{; *attribName2* ; ... ; *attribNameN*} )<br/>**WP RESET ATTRIBUTES** ( *targetObj* ; *attribColl* )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribColl*})<!-- END REF-->

<!--REF #_command_.WP RESET ATTRIBUTES.Params-->

| 引数                  | 型          |   | 説明                                  |
| ------------------- | ---------- | - | ----------------------------------- |
| targetObj           | Object     | → | レンジまたは要素または4D Write Pro ドキュメント      |
| sectionOrSubsection | Object     | → | 4D Write Pro ドキュメントのセクションまたはサブセクション |
| attribName          | Text       | → | 削除したい属性の名前                          |
| attribColl          | Collection | → | Collection of attributes to remove  |

<!-- END REF-->

#### 説明

**WP RESET ATTRIBUTES** コマンドは<!--REF #_command_.WP RESET ATTRIBUTES.Summary-->引数として渡されたレンジ、要素、またはドキュメントの1つ以上の値をリセットすることができます。<!-- END REF-->このコマンドは任意の4D Write Pro 内部属性(文字、段落、ドキュメント、表または画像)を削除することができます。 You can pass the attribute name to be reset in *attribName* or you can pass a collection of attributes in *attribColl* to reset multiple attributes at once.

> In the case of a section or a subsection, the *sectionOrSubsection* object can be passed alone and all the attributes are reset at once.

*targetObj* 引数には、以下のいずれかを渡すことができます:

- レンジ
- 要素(ヘッダー / フッター / 本文 / 表 / 段落 / アンカーされた画像またはインラインの画像 / セクション / サブセクション / スタイルシート)
- 4D Write Pro ドキュメント

**WP RESET ATTRIBUTES** コマンドを使用して属性の値が削除された場合、*targetObj* あるいは *sectionOrSubsection* にはデフォルトの値が適用されます。 デフォルトの値については、*4D Write Pro Attributes* の章に記載されています。

:::note 注記

- **WP RESET ATTRIBUTES** がセクション/サブセクションオブジェクトに対して適用された場合、属性はその親セクションまたはドキュメントから継承されます。
- **WP RESET ATTRIBUTES** がスタイルシートオブジェクトに対して適用された場合、スタイルシートがデフォルト("Normal")スタイルシートである場合を除き、その属性はスタイルシートから削除されます。 この場合、デフォルトの値が属性に対して適用されます(スタイルシートは全てのスタイルシート属性を定義します)。
- *sectionOrSubsection* 引数がセクションでもサブセクションでもなく、また属性が何も指定されたなかった場合には、エラーが生成されます。

:::

引数として渡された要素の中にリセットしたい属性が定義されていなかった場合、コマンドは何もしません。

#### 例題 1

以下の選択範囲から複数の属性を削除したい場合を考えます:

![](../../assets/en/WritePro/commands/pict2643861.en.png)

この場合、以下のように書くことができます:

```4d
 $range:=WP Get selection(*;"WParea")
 WP RESET ATTRIBUTES($range;wk padding)
 WP RESET ATTRIBUTES($range;wk background color)
 WP RESET ATTRIBUTES($range;wk text underline style)
 WP RESET ATTRIBUTES($range;wk margin)
 WP RESET ATTRIBUTES($range;wk border style)
```

実行後のドキュメントはこうなります:

![](../../assets/en/WritePro/commands/pict2643863.en.png)

#### 例題 2

You want to remove several attributes using a collection:

```4d
$myRange:=WP Get selection(*;"WParea")
$myCollection:=New collection(wk font size; wk background color; wk border style)
WP RESET ATTRIBUTES($myRange; $myCollection)
 
```

#### 例題 3

```4d
$section:=WP Get section($document; 3)
WP RESET ATTRIBUTES($section)  // セクションの全ての属性が削除される
$subSection:=WP Get subsection(WP Get section($document; 3); wk left page)
WP RESET ATTRIBUTES($subSection) // サブセクションの全ての属性が削除される
```

#### 参照

*4D Write Pro Attributes*\
[WP GET ATTRIBUTES](wp-get-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)
