---
id: filter-keystroke
title: FILTER KEYSTROKE
slug: /commands/filter-keystroke
displayed_sidebar: docs
---

<!--REF #_command_.FILTER KEYSTROKE.Syntax-->**FILTER KEYSTROKE** ( *filteredChar* )<!-- END REF-->
<!--REF #_command_.FILTER KEYSTROKE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| filteredChar | Text | &#8594;  | フィルタされたキーストローク文字、または 空文字の場合キーストロークをキャンセル |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.FILTER KEYSTROKE.Summary-->FILTER KEYSTROKE は、ユーザがフィールドや入力可エリアに入力した文字を、*filteredChar* に渡した文字列の最初の文字で置き換えます。<!-- END REF-->

空の文字を渡すと、キーストロークはキャンセルされ無視されます。

通常FILTER KEYSTROKEはOn Before Keystrokeフォームイベントを処理するフォームメソッドあるいはオブジェクトメソッドで呼び出します。キーストロークイベントを検知するには、[Form event](../commands/form-event.md "Form event")コマンドを使用します。実際のキーストロークを得るには[Keystroke](keystroke.md "Keystroke")コマンドを使用します。

**重要**: FILTER KEYSTROKEコマンドはユーザが入 力した他の文字をキャンセルしたり置き換えたりすることを可能にします。他方特定のキーストロークに対し複数の文字を入力したい場合、スクリーン上に表示 されているテキストは、編集中のデータソースフィールドや変数の値にまだなっていないことに注意してください。データソースフィールドや変数にはデータ入 力が確定された後に値が代入されます。変数へのデータ入力を途中で取得し、この値を変更して、入力エリアに代入するのは開発者に任されています (この節の例題を参照)。

FILTER KEYSTROKE は以下の目的で使用できます:

* カスタマイズされた方法で文字をフィルタする
* データ入力フィルタで実現できない方法でデータ入力のフィルタを行う
* ダイナミックなルックアップやタイプアヘッドの実装

**警告:** FILTER KEYSTROKEの後に[Keystroke](keystroke.md "Keystroke")コマンドを呼び出すと、実際に入力された文字の代わりにこのコマンドに渡された文字が返されます。

#### 例題 1 

以下のコードを使用すると: 

```4d
  // myObject enterable area object method
 Case of
    :(Form event code=On Load) //v17 以前ではForm event を使用
       myObject:=""
    :(Form event code=On Before Keystroke) //v17 以前ではForm event を使用
       If(Position(Keystroke;"0123456789")>0)
          FILTER KEYSTROKE("*")
       End if
 End case
```

*myObject* エリアに入力されたすべての数字がアスタリスクに変換されます。

#### 例題 2 

以下のコードはパスワード入力エリアを実装します。入力された文字はスクリーン上にランダムな文字で表示されます: 

```4d
  // vsPassword enterable area object method
 Case of
    :(Form event code=On Load) //v17 以前ではForm event を使用
       vsPassword:=""
       vsActualPassword:=""
    :(Form event code=On Before Keystroke) //v17 以前ではForm event を使用
       Handle keystroke(->vsPassword;->vsActualPassword)
       If(Position(Keystroke;Char(Backspace)+Char(Left arrow key)+
          Char(Right arrow key)+Char(Up arrow key)+Char(Down arrow key))=0)
          FILTER KEYSTROKE(Char(65+(Random%26)))
       End if
 End case
```

データ入力が確定されると、ユーザが実際に入力したデータは*vsActualPassword* に格納されています。

注意: Handle keystroke メソッドは[Keystroke](keystroke.md) の節で紹介されています。

#### 例題 3 

 アプリケーションに文章を入力できる欄があります。またアプリケーションには辞書テーブルがあります。テキストエリア編集中に、テキストエリア中で選択された文字に基づき、辞書の内容を取り出して挿入したいとします。これを行うには2つの方法があります:  
\- キーを割り当てたボタンを用意する  
\- テキストエリアの編集中、特別なキーストロークを検知する

この例題ではHelpキーを使用して、2つ目のソリューションを実装します。

上で説明した通り、テキストエリアの編集中、このエリアのデータソースにはデータ入力を確定した後に入力された値が代入されます。テキストエリア編 集中、辞書の内容を取り出してこのエリアに挿入するために、データ入力をシャドウする必要があります。最初の2つの引数として、この入力エリアとシャドウ 用の変数へのポインタを、3番目の引数として禁止文字を渡します。キーストロークがどのように取り扱われるにしても、メソッドは元のキーストロークを返し ます。禁止文字は入力エリアに挿入されず、特別に扱いたい文字のことです。

```4d
  // Shadow keystroke project method
  // Shadow keystroke ( Pointer ; Pointer ; String) -> String
  // Shadow keystroke ( -> srcArea ; -> curValue ; Filter ) -> Old keystroke
 #DECLARE ($srcArea : Pointer ; $curVal : Pointer ; $filter : Text) -> $old : Text
 var $vtNewValue : Text
  // 元のキーストロークを返す
 $old:=Keystroke
  // 入力エリア中で選択されている文字範囲を取得する
 GET HIGHLIGHT($srcArea->;$vlStart;$vlEnd)
  // 現在値を処理する
 $vtNewValue:=$curVal->
  // 押されたキーまたは入力された文字に基づき、
  // 適切な処理を行う
 Case of
  // (Delete) キーが押された
    :(Character code($old)=Backspace)
  // 選択されている文字あるいはカーソルの左の文字を削除
       $vtNewValue:=Delete text($vtNewValue;$vlStart;$vlEnd)
  // 矢印キーが押されたら
  // 何も行わずキーストロークを受け入れる
    :(Character code($old)=Left arrow key)
    :(Character code($old)=Right arrow key)
    :(Character code($old)=Up arrow key)
    :(Character code($old)=Down arrow key)
 
  // 入力を許可する文字が入力された
    :(Position($old;$filter)=0)
       $vtNewValue:=Insert text($vtNewValue;$vlStart;$vlEnd;$0)
    Else
  // 入力を許可しない
       FILTER KEYSTROKE("")
 End case
  // 次のキーストローク処理のために値を返す
 $curVal->:=$vtNewValue
```

このメソッドは以下のサブメソッドを使用します:

```4d
  // Delete text プロジェクトメソッド
  // Delete text ( String; Long ; Long ) -> String
  // Delete text ( -> Text ; SelStart ; SelEnd ) -> New text
 #DECLARE ($src : Text ; $start : Integer ; $end : Integer) -> $new : Text 
 $new:=Substring($src;1;$start-1-Num($start=$end))+Substring($src;$end)
```

```4d
  // Insert text プロジェクトメソッド
  // Insert text ( String; Long ; Long ; String) -> String
  // Insert text ( -> srcText ; SelStart ; SelEnd ; Text to insert ) -> New text
 #DECLARE ($src : Text ; $start : Integer ; $end : Integer ; $toInsert : Text) -> $new : Text 
 $new:=$src
 If($start # $end)
    $new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$end)
 Else
    Caes of
 :($start<=1)
    $new:=$toInsert+$new
 :($start>Length($new))
    $new:=$new+$toInsert
 Else
    $0:=Substring($0;1;$2-1)+$4+Substring($0;$2)
End case
End if
```

プロジェクトにこれらのメソッドを実装したのち、以下のように使用することができます:

```4d
  // vsDescription 入力可エリアのプロジェクトメソッド
 Case of
    :(Form event code=On Load) //v17 以前ではForm event を使用
       vsDescription:=""
       vsShadowDescription:=""
  // 特別なキーとして使用する禁止文字リストを作成
  // ( この例題ではHelpキーをフィルタする)
       vsSpecialKeys:=Char(HelpKey)
    :(Form event code=On Before Keystroke) //v17 以前ではForm event を使用
       $vsKey:=Shadow keystroke(->vsDescription;->vsShadowDescription;vsSpecialKeys)
       Caes of
    :(Character code($vsKey)=Help key)
  // Help キーが押された時の処理
  // この例題では辞書を検索し、挿入する
       LOOKUP DICTIONARY(->vsDescription;->vsShadowDescription)
 End case
End case
```

LOOKUP DICTIONARYプロジェクトメソッドは以下のようなものです。このメソッドの目的はシャドウの変数を使用して検索を行い、編集中のエリアに再代入を行うことです:

```4d
  // LOOKUP DICTIONARY プロジェクトメソッド
  // LOOKUP DICTIONARY ( Pointer ; Pointer )
  // LOOKUP DICTIONARY ( -> Enterable Area ; ->ShadowVariable )
 
 #DECLARE ($area : Pointer ; $shadow : Pointer)
 var $vlStart;$vlEnd : Integer
 
  // 入力エリアの選択範囲を取得
 GET HIGHLIGHT($area->;$vlStart;$vlEnd)
  // 選択されたテキストあるいはカーソルの左側の単語を取得
 $vtHighlightedText:=Get highlighted text($shadow->;$vlStart;$vlEnd)
  // 検索すべきものがあるか
 If($vtHighlightedText#"")
  // テキストセレクションがカーソルなら
  // 選択はテキストカーソルの前の単語から始まる
    If($vlStart=$vlEnd)
       $vlStart:=$vlStart-Length($vtHighlightedText)
    End if
  // 最初に有効な辞書エントリを検索
    QUERY([Dictionary];[Dictionary]Entry=$vtHighlightedText+"@")
  // 存在するか
    If(Records in selection([Dictionary])>0)
  // 存在すればシャドウテキストに挿入する
       $shadow->:=Insert text($shadow->;$vlStart;$vlEnd;
  // シャドウテキストを編集中のエリアにコピーする
       $area->:=$shadow->
  // 挿入した辞書入力の後に選択をセットする
       $vlEnd:=$vlStart+Length([Dictionary]Entry)
       HIGHLIGHT TEXT(vsComments;$vlEnd;$vlEnd)
    Else
  // 辞書に対応するエントリがなかった
       BEEP
    End if
 Else
  // ハイライトされたテキストがない
    BEEP
 End if
```

Get highlighted text メソッド:

```4d
  // Get highlighted text プロジェクトメソッド
  // Get highlighted text ( String; Long ; Long ) -> String
  // Get highlighted text ( Text ; SelStart ; SelEnd ) -> highlighted text
#DECLARE ($text : Text ; $start : Integer ; $end : Integer) -> $highlight : Text
 If($start<$end)
    $highlight:=Substring($text;$start;$end-$start)
 Else
    $highlight:=""
    $start:=$start-1
    Repeat
       If($start>0)
          If(Position($text[[$start]];"  ,.!?:;()-_–—")=0)
             $highlight:=$text[[$start]]+$highlight
             $start:=$start-1
          Else
             $start:=0
          End if
       End if
    Until($start=0)
 End if
```

#### 参照 

[Form event code](../commands/form-event-code.md)  
[Get edited text](get-edited-text.md)  
[Is editing text](is-editing-text.md)  
[Keystroke](keystroke.md)  
