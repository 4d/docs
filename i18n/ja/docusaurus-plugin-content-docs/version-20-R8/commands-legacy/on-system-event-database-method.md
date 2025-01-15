---
id: on-system-event-database-method
title: On System Event database method
slug: /commands/on-system-event-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On System Event database method.Syntax-->$1 -> On System Event データベースメソッド<!-- END REF-->
<!--REF #_command_.On System Event database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| $1 | 倍長整数 | &#8592; | イベントコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.On System Event database method.Summary-->**On System Event データベースメソッド** はシステムイベントが発生するたびに呼び出されます。<!-- END REF-->すべてのモードの4D、4D Server、4D Volume Desktopが統合されたコンパイル済みアプリケーションなど、すべての4D環境で有効です。

イベントを処理するために、メソッドの中で$1引数をテストし、*Database Events*テーマの以下の定数と比較しなければなりません:

| 定数                             | 型    | 値 | コメント                    |
| ------------------------------ | ---- | - | ----------------------- |
| On application background move | 倍長整数 | 1 | 4Dアプリケーションがバックグランドに移動した |
| On application foreground move | 倍長整数 | 2 | 4Dアプリケーションが最前面に移動した     |

これらのイベントは4Dアプリケーションのレベルが変わったときに生成されます。例えば: 

* 4Dあるいは他のアプリケーションのウィンドウがクリックされた。
* **Alt+Tab** (Windows) や **Command+Tab** (Mac OS) キーボードショートカットでアプリケーションが選択された。
* Dockの隠すコマンドが選択された (Mac OS)。
* Dockやタスクバーでアプリケーションアイコンがクリックされた。
* メインウィンドウで最小化ボタンがクリックされた (Windows)。

データベースメソッド内では$1を倍長引数型で宣言しなければなりません。データベースメソッドの構造は以下のようになります:

```4d
  // On System Event データベースメソッド
 
 var $1 : Integer
 Case of
    :($1=On application background move)
  // 処理を行う
    :($1=On application foreground move)
  // 処理を行う
 End case
```
