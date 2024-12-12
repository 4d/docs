---
id: is-editing-text
title: Is editing text
slug: /commands/is-editing-text
displayed_sidebar: docs
---

<!--REF #_command_.Is editing text.Syntax-->**Is editing text**  : Boolean<!-- END REF-->
<!--REF #_command_.Is editing text.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | テキストが入力されているならTrue、それ以外ならFalse |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Is editing text.Summary-->**Is editing text** は、ユーザーが入力フォームオブジェクトに値を入力中であれば**True** を、それ以外の場合には**False** を返します。<!-- END REF-->

このコマンドは、On Before Keystroke フォームイベントでトリガーされたコード内において、実際のユーザーのデータ入力とショートカットキーの使用を区別するために使用することを想定されています。例えば、ユーザーがセルにテキストを入力するためにキーを押しているのか、リストボックスをスクロールしたいのかによって異なるコードを実行したい場合などです。

**Is editing text** コマンドは以下のフォームオブジェクトでしか使用することができません:

* 入力
* リストボックス(入力可能または入力不可)
* コンボボックス

これ以外のオブジェクトについては、コマンドは常に**False** を返します。具体的には、このコマンドは4D Write Pro エリアと4D View Pro エリアで使用することはできません。

#### 例題 

入力可能なリストボックス内において、ユーザーが入力した文字で始まる行を選択できるようにしたい場合を考えます:

```4d
 Case of
    :(FORM Event.code=On Before Keystroke) // キーが押された
       If(Is editing text) // テキストが入力されている
  // 一部の文字を無効化する
          If(Keystroke="+")|(Keystroke="-")|(Keystroke="/")|(Keystroke="*")
             FILTER KEYSTROKE("")
          End if
       Else
  // 入力がされていない、スクロールショートカット機能を有効化
          $charCode:=Keystroke
          $char:=Uppercase($charCode) // アクセントを除去
          Case of
             :((($char>="A")&($char<="Z"))|(($char>="0")&($char<="9")))
                ... // 入力された文字または数字で始まる行を選択
             :($charCode>=Left arrow key)&($charCode<=Down arrow key) // 左/右/上/下 矢印キー
                FILTER KEYSTROKE("") // 矢印キーのアクションを無効化
          End case
       End if
 End case
```

#### 参照 

  
[FILTER KEYSTROKE](filter-keystroke.md)  
[Get edited text](get-edited-text.md)  