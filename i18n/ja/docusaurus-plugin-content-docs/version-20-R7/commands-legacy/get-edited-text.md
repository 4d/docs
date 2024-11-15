---
id: get-edited-text
title: Get edited text
slug: /commands/get-edited-text
displayed_sidebar: docs
---

<!--REF #_command_.Get edited text.Syntax-->**Get edited text**  : Text<!-- END REF-->
<!--REF #_command_.Get edited text.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | 編集中のテキスト |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get edited text.Summary-->**Get edited text**コマンドは、主にOn After Edit フォームイベントで入力中のテキストを取得するために使用します。<!-- END REF-->またOn Before Keystroke および On After Keystroke フォームイベントで使用することもできます。これらのフォームイベントについてのより詳細な情報は[Form event code](form-event-code.md)の説明を参照してください。

このコマンドとOn Before Keystroke または On After Keystroke フォームイベントの組み合わせは、以下の用に動作します:

* キーボード上で文字がタイプされると、On Before Keystroke イベントが生成されます。この場合、**Get edited text** ファンクションは最後のキーストロークが起きる前のエリアの中身を返します。例えば、エリアに“PA” が含まれていて、ユーザーが“R”をタイプした場合、**Get edited text** は"PA"をOn Before Keystroke イベントに返します。初めにエリアが空だった場合、**Get edited text** は空の文字列を返します。
* 次に、On After Keystroke フォームイベントが生成されます。この場合、**Get edited text** コマンドはキーボードで入力された最後の文字を含めたエリアの中身を返します。例えば、エリアに“PA” が含まれていてユーザーが"R"をタイプした場合、**Get edited text**  は“PAR” を On After Keystroke イベントに返します。

一般的に、On After Keystroke イベントはOn After Edit イベントで置き換え可能である点に注意してください。後者の方がより多くの入力方法(IMEなど)をサポートしています。

これら二つのイベントは、関連するオブジェクトメソッド内でのみ生成されます。

フォームオブジェクト内のテキスト入力以外のコンテキストで使用された場合、このファンクションは空の文字列を返します。

#### 例題 1 

以下のメソッドは、入力される文字を自動で大文字に変換します:

```4d
 If(Form event code=On After Edit)
    [Trips]Agencies:=Uppercase(Get edited text)
 End if
```

#### 例題 2 

以下はテキストフィールドへの文字入力をオンザフライで処理する例です。これは入力中の文のすべての単語を、"Words"という他のテキストフィールドに置くというアイデアに基づきます。これを実行するには、フィールドのオブジェクトメソッド内に下記のコードを記述します:

```4d
 If(Form event code=On After Keystroke)
    $RealTimeEntry:=Get edited text
    PLATFORM PROPERTIES($platform)
    If($platform#3) // Mac OS
       Repeat
          $DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13))
       Until(Position(" ";$DecomposedSentence)=0)
    Else // Windows
       Repeat
          $DecomposedSentence:=Replace string($RealTimeEntry;Char(32);Char(13)+Char(10))
       Until(Position(" ";$DecomposedSentence)=0)
    End if
    [Example]Words:=$DecomposedSentence
 End if
```

**Note:** この例題は、単語がスペース（Char(32)）によって区切られていると仮定しているため、完全なものではありません。完全な解決法としては、すべての単語を抽出するように他のフィルタを付加する必要があります（カンマ、セミコロン、アポストロフィー等の区切り）。

#### 参照 

[Form event code](form-event-code.md)  
[Is editing text](is-editing-text.md)  