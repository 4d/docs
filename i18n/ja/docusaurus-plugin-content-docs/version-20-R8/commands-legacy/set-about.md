---
id: set-about
title: SET ABOUT
slug: /commands/set-about
displayed_sidebar: docs
---

<!--REF #_command_.SET ABOUT.Syntax-->**SET ABOUT** ( *itemText* ; *method* )<!-- END REF-->
<!--REF #_command_.SET ABOUT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| itemText | Text | &#8594;  | アバウトメニュー項目の新しいテキスト |
| method | Text | &#8594;  | メニューが選択された時に実行するメソッドの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET ABOUT.Summary-->**SET ABOUT** コマンドは、**ヘルプ** メニュー(Windows) または**アプリケーション** メニュー(macOS) 内の"**4Dについて**"メニューを*itemText* に変更します。<!-- END REF-->

実行後、ユーザがこのメニューをデザインまたはアプリケーションモードで選択すると、*method*が実行されます。一般的に、このメソッドではデータベースに関するバージョン情報を示すダイアログボックスを表示します。

このコマンドは4D (すべてのモード)、4D Desktop、および4D Serverで使用されます。サーバマシンで実行されると、新しいプロセス上で実行されます。

**注意:** Windows では、このコマンドは、**ヘルプ**メニュー内の[SET HELP MENU](set-help-menu.md) コマンドで作成された"4D について"の行を変更します。

#### 例題 1 

以下の例は4DについてメニューをAbout Schedulerに置き換えます。ABOUTメソッドはカスタマイズされたアバウトボックスを表示します:

```4d
 SET ABOUT(“About Scheduler…”;“ABOUT”)
```

#### 例題 2 

以下の例題は4Dについてメニューをリセットします:

```4d
 SET ABOUT("4Dについて";"")
```

#### 参照 

[SET HELP MENU](set-help-menu.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 316 |
| スレッドセーフである | &cross; |


