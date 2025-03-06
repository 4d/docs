---
id: on-host-database-event-database-method
title: On Host Database Event database method
slug: /commands/on-host-database-event-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Host Database Event database method.Syntax-->$1 -> On Host Database Event データベースメソッド<!-- END REF-->
<!--REF #_command_.On Host Database Event database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| $1 | 倍長整数 | &#8592; | イベントコード |

<!-- END REF-->

#### 詳細 

<!--REF #_command_.On Host Database Event database method.Summary-->**On Host Database Event データベースメソッド** はデータベースが開いた時と閉じられた時に 4D コンポーネントにコードを実行させることが出来るようになりました。<!-- END REF-->

**注:** セキュリティ上の理由から、このデータベースメソッドを使用可能にするためには、その実行をホストデータベースで明示的に許可する必要があります。詳細に関しては、*Design Reference* マニュアルを参照して下さい。

**On Host Database Event データベースメソッド** は、ホストデータベースのコンポーネントとして使用されているデータベースの中でのみ自動的に実行されます(ホストデータベースの設定で有効にされている必要があります)。このメソッドはホストデータベースの開閉に関するイベントが発生したときに呼び出されます。

イベントを扱うためには、 *$1* 引数の値をメソッド内で調べて、 "*Database Events*" テーマ内にある、以下の定数と比較する必要があります:

| 定数                              | 型    | 値 | コメント                                                                                                                                                                                                                                                                       |
| ------------------------------- | ---- | - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On after host database exit     | 倍長整数 | 4 | ホストデータベースの [Semaphore](semaphore.md) データベースメソッドが実行を終了したところです。                                                                                                                                                                                                              |
| On after host database startup  | 倍長整数 | 2 | ホストデーターベースの データベースメソッドが実行を終了したところです。                                                                                                                                                                                                                                       |
| On before host database exit    | 倍長整数 | 3 | ホストデータベースは閉じられようとしているところです。ホストデータベースの [Semaphore](semaphore.md) データベースメソッドはまだ呼び出されていない状態です。<br/>ホストデータベースの [Semaphore](semaphore.md) データベースは、コンポーネントの [On Host Database Event データベースメソッド](on-host-database-event-database-method.md) データベースメソッドが実行されている間は呼び出されません。 |
| On before host database startup | 倍長整数 | 1 | ホストデータベースはちょうど開かれたところです。ホストデータベースの データベースメソッドはまだ呼び出されていません。<br/> データベースメソッドは、 [On Host Database Event データベースメソッド](on-host-database-event-database-method.md) データベースメソッドがコンポーネント内で実行されている間は呼び出されません。                                                                |

このコマンドにより、4D コンポーネントはホストデータベースのオペレーションに関連したプリファレンスやユーザー情報を読み込んだり保存したりすることが出来ます。

#### 例題 

On Host Database Event の典型例を紹介します:

```4d
  // On Host Database Event データベースメソッド
 var $1 : Integer
 Case of
    :($1=On before host database startup)
  // この部分にホストデータベースの "On Startup" データベースメソッドの前に実行したいコードを記述します
    :($1=On after host database startup)
  // この部分にホストデータベースの "On Startup" データベースメソッドの後に実行したいコードを記述します
    :($1=On before host database exit)
  // この部分にホストデータベースの "On Exit" データベースメソッドの前に実行したいコードを記述します
    :($1=On after host database exit)
  // この部分にホストデータベースの "On Exit" データベースメソッドの後に実行したいコードを記述します
 End case
```
