---
id: method-get-attribute
title: METHOD Get attribute
slug: /commands/method-get-attribute
displayed_sidebar: docs
---

<!--REF #_command_.METHOD Get attribute.Syntax-->**METHOD Get attribute** ( *path* ; *attribType* {; *} ) : Boolean<!-- END REF-->
<!--REF #_command_.METHOD Get attribute.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text | &#8594;  | プロジェクトメソッドのパス |
| attribType | Integer | &#8594;  | 取得する属性タイプ |
| * | 演算子 | &#8594;  | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |
| 戻り値 | Boolean | &#8592; | True: 属性が選択されている、False: 選択されていない |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.METHOD Get attribute.Summary-->**METHOD Get attribute**コマンドは*path*引数で指定されたプロジェクトメソッドの*attribType*属性値を返します。<!-- END REF-->このコマンドはプロジェクトメソッドに対してのみ動作します。無効なパスを渡すとエラーが生成されます。 

*attribType*引数には取得する属性のタイプを指定する値を渡します。*Design Object Access*テーマの以下の定数を使用できます:

| 定数                           | 型    | 値 | コメント                                    |
| ---------------------------- | ---- | - | --------------------------------------- |
| Attribute executed on server | 倍長整数 | 8 | "サーバー上で実行"オプションに対応                      |
| Attribute invisible          | 倍長整数 | 1 | "隠す"オプションに対応                            |
| Attribute published SOAP     | 倍長整数 | 3 | "Webサービスとして提供"オプションに対応                  |
| Attribute published SQL      | 倍長整数 | 7 | "SQL利用可"オプションに対応                        |
| Attribute published Web      | 倍長整数 | 2 | "4DタグおよびURL (4DACTION...) で利用可"オプションに対応 |
| Attribute published WSDL     | 倍長整数 | 4 | "WSDLで公開する"オプションに対応                     |
| Attribute shared             | 倍長整数 | 5 | "コンポーネントとホストデータベースで共有する"オプションに対応        |

コマンドがコンポーネントから実行された場合、デフォルトでコンポーネントメソッドに適用されます。*\** 引数を渡すとホストデータベースのメソッドに適用されます。

コマンドは属性が選択されている場合**True**を、選択されていない場合**False**を返します。

#### 参照 

[METHOD SET ATTRIBUTE](method-set-attribute.md)  