---
id: wa-create-url-history-menu
title: WA Create URL history menu
slug: /commands/wa-create-url-history-menu
displayed_sidebar: docs
---

<!--REF #_command_.WA Create URL history menu.Syntax-->**WA Create URL history menu** ( {* ;} *object* {; *direction*} ) : Text<!-- END REF-->
<!--REF #_command_.WA Create URL history menu.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| direction | Integer | &#8594;  | 0 または省略=戻るURLのリスト, 1=進むURLリスト |
| 戻り値 | Text | &#8592; | メニュー参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA Create URL history menu.Summary-->**WA Create URL history menu** コマンドは、*\** と *object* で指定したWebエリアがセッション中に訪問したURL間をナビゲートするメニューを作成します。<!-- END REF-->このコマンドを使用して、カスタムのナビゲーションインタフェースを作成できます。

提供される情報はセッションに限定されます。言い換えればナビゲーションは同じWebエリアで、フォームが閉じられない間実行されます。

*direction*には取得するリストを指定する値を渡します。*Web Area* テーマの以下の定数を使用できます:

| 定数               | 型    | 値 |
| ---------------- | ---- | - |
| WA next URLs     | 倍長整数 | 1 |
| WA previous URLs | 倍長整数 | 0 |

*direction* 引数を省略すると、0 が使用されます。

メニューが生成されたら、4Dの [Dynamic pop up menu](dynamic-pop-up-menu.md) コマンドで表示し、4Dの標準メニュー管理コマンドを使用して処理できます。このコマンドから返される文字列には、訪問したページのURLが含まれます (例題参照)。

メニューを使用しなくなったら、[RELEASE MENU](release-menu.md) コマンドを呼び出してURL履歴メニューを削除します。

**互換性に関する注意:* 4D v19 R5 以降、このコマンドは* **Windows のシステムレンダリングエンジン を使用しているWeb エリアに対するカレントURL のみを格納したメニューを作成します。*

#### 例題 

以下のコードを、ポップアップメニューを持つ"戻る"3Dボタンに関連付けることができます:

```4d
 Case of
  //シングルクリック
    :(Form event code=On Clicked)
       WA OPEN BACK URL(WA_area)
  //矢印のクリック -> ポップアップ表示
    :(Form event code=On Alternative Click)
  //戻る履歴メニューを作成
       $Menu:=WA Create URL history menu(WA_area;WA previous URLs)
  //ポップアップにこのメニューを表示
       $URL:=Dynamic pop up menu($Menu)
  //項目が選択されたら
       If($URL#"")
  //Webページを開く
          WA OPEN URL(WA_area;$URL)
       End if
  //メニューを削除してメモリを解放
       RELEASE MENU($Menu)
 End case
```

#### 参照 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[WA GET URL HISTORY](wa-get-url-history.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1049 |
| スレッドセーフである | &cross; |


