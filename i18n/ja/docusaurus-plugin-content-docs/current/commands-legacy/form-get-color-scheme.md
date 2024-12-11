---
id: form-get-color-scheme
title: FORM Get color scheme
slug: /commands/form-get-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get color scheme.Syntax-->**FORM Get color scheme**  : Text<!-- END REF-->
<!--REF #_command_.FORM Get color scheme.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | カレントフォームのカラースキーム: "light" または "dark" |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM Get color scheme.Summary-->**FORM Get color scheme** コマンドは、現在表示されているフォームの実際のカラースキームの名前を返します。<!-- END REF-->カレントのフォームがない場合には、このコマンドは空の文字列を返します。

**注**: Windows では、このコマンドは常に"light" しか返しません。

フォームの実際のカラースキームは、以下の方法によって定義されます:

* フォームの"Color Scheme"プロパティ(*colorScheme*を参照してください)
* "Color Scheme"が"inherited"に設定されていた場合には、[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) コマンドの呼び出し
* [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) が呼び出されていない、または"inherited" 引数値で呼び出されていた場合には、データベース設定(コンポーネントの場合にはホストデータベース側の設定)
* データベース設定が"継承する"に設定されていた場合、OS のユーザー設定

カラースキーム名の詳細については、[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) コマンドの説明を参照してください。

#### 例題 

フォームのカレントのスキームに応じてピクチャーを呼び出したい場合を考えます:

```4d
 $txt_suffix:=Choose((FORM Get color scheme="dark");"_dark";"")
 READ PICTURE FILE(Get 4D folder(Current resources folder)+"myPict"+$txt_suffix+".png";$Pic_icon)
```

**注:** フォームオブジェクトのデザインをカレントのスキームに適応させるためには*css* を使用することが推奨されます。

#### 参照 

[Get application color scheme](get-application-color-scheme.md)  
[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1761 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


