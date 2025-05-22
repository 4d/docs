---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *command* {; *info* {; *theme*}} ) : Text<!-- END REF-->

<!--REF #_command_.Command name.Params-->

| 引数    | 型       |                             | 説明             |
| ----- | ------- | --------------------------- | -------------- |
| コマンド  | Integer | &#8594; | コマンド番号         |
| info  | Integer | &#8592; | 評価するコマンドのプロパティ |
| theme | Text    | &#8592; | コマンドのランゲージテーマ  |
| 戻り値   | Text    | &#8592; | ローカライズされたコマンド名 |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容                    |
| ----- | --------------------- |
| 20 R9 | deprecated プロパティのサポート |

</details>

## 説明

**Command name** コマンドは、<!--REF #_command_.Command name.Summary-->*command* 引数にコマンド番号を渡したコマンドの名前と、オプションとしてそのコマンドのプロパティを返します。<!-- END REF-->各コマンドの番号はエクスプローラー内に記載してある他、このドキュメンテーションのプロパティエリアにも記載があります。

**互換性に関する注意:** コマンド名はある4D のバージョンと他のバージョンでは異なる(コマンドが改名された)可能性があり、このコマンドは以前のバージョンでは特にトークナイズドされていない部分のコードにおいて、コマンドをその番号で指定するのに使用されていました。 この用途の必要性は、時とともに4D が進化するにつれて減ってきています。それはトークナイズドされていない宣言(フォーミュラ)に対しては、4D は現在はトークンシンタックスを提供しているからです。 このシンタックスを使用すると、コマンド名の変遷や、あるいはテーブル名などの他の要素が変わったことによって引き起こされる潜在的な問題を避けつつ、読みやすい方法でこれらの名前を入力することができるようになります(詳細な情報については、 *フォーミュラ内でトークンを使用* の章を参照して下さい)。 また、[環境設定内の*リージョンシステム設定を使用* オプション](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) を使用すると、フランス語版の4D において引き続きフランス語のコマンド名を使用することが可能となります。

二つのオプションの引数を渡すことができます:

- *info*: コマンドのプロパティを指定します。 返される値は *ビットフィールド* で、以下のビットが意味を持ちます:
 - 最初のビット(bit 0): コマンドが[**スレッドセーフである**](../Develop/preemptive.md#thread-safe-vs-thread-unsafe-code)(つまりプリエンプティブプロセスでの実行に互換性がある)場合には1 に設定され、コマンドが**スレッドセーフでない**場合には0 に設定されます。 [プリエンプティブプロセス](../Develop/preemptive.md) 内ではスレッドセーフなコマンドのみが使用可能です。
 - 二つ目のビット(bit 1): コマンドが**廃止予定** の場合には1 に設定され、そうでない場合には0 に設定されます。 廃止予定のコマンドはサポートされている限りにおいては通常通り機能し続けますが、可能であれば置き換えるべきであり、今後書く新しいコード内においては使用するべきではありません。 コード内における廃止予定のコマンドは[ライブチェッカーおよびコンパイラ](../code-editor/write-class-method.md#警告とエラー) において警告を生成します。

*theme*: コマンドの4D ランゲージテーマの名前。

**Command name** コマンドは、*command* で指定したコマンドが既存のコマンド番号と対応する場合には*OK* 変数を1に設定し、それ以外の場合には0に設定します。 しかしながら、既存のコマンドの一部には無効化されてしまったコマンドもあり、そういったコマンドの場合には**Command name** は空の文字列を返すという点に注意が必要です(最後の例題を参照して下さい)。

## 例題 1

以下のコードを使用すると、全ての有効な4Dコマンドを配列内に読み込むことができます:

```4d
 var $Lon_id : Integer
 var $Txt_command : Text
 ARRAY LONGINT($tLon_Command_IDs;0)
 ARRAY TEXT($tTxt_commands;0)
 
 Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id)
    If(OK=1) // コマンド番号が存在する
       If(Length($Txt_command)>0) // コマンドが無効化されていない
          APPEND TO ARRAY($tTxt_commands;$Txt_command)
          APPEND TO ARRAY($tLon_Command_IDs;$Lon_id)
       End if
    End if
 Until(OK=0) // 既存のコマンドの終了
```

## 例題 2

フォームで、一般的なサマリーレポートコマンドのドロップダウンリストを作成します。 ドロップダウンリストのオブジェクトメソッドに、次のように記述します:

```4d
 Case of
    :(Form event code=On Before)
       ARRAY TEXT(asCommand;4)
       asCommand{1}:=Command name(1)
       asCommand{2}:=Command name(2)
       asCommand{3}:=Command name(4)
       asCommand{4}:=Command name(3)
  // ...
 End case
```

4Dの日本語版ではドロップダウンリストに、Sum、Average、Min、Maxが表示されます。 フランス語版\*では、ドロップダウンリストには、Somme、Moyenne、Min、Maxが表示されます。

\*フランス語のプログラミング言語を使用するよう設定されている4Dアプリケーション(互換性に関する注意を参照して下さい)

## 例題 3

番号を引数として渡したコマンドがスレッドセーフである場合には**True** を、そうでない場合には**False** を返す様なメソッドを作成したい場合を考えます。

```4d
  //Is_Thread_Safe project method
 #declare($command : Integer) : Boolean
 var $threadsafe : Integer
 var $name; $theme : Text
 $name:=Command name($command;$threadsafe;$theme)
 If($threadsafe ?? 0) // 最初のビットが1に設定されている
    return True
 Else
    return False
 End if
```

これを使い、例えば"SAVE RECORD"コマンド(53番)に対して、以下のように書く事ができます:

```4d
 $isSafe:=Is_Thread_Safe(53)
  // True を返す
```

## 例題 4

使用中のバージョンの4D 内で、廃止予定のコマンドを全てコレクションに入れて返したい場合を考えます。

```4d
var $info; $Lon_id : Integer
var $Txt_command : Text
var $deprecated : Collection

Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id;$info)
    If($info ?? 1) // 二つ目のビットが1である
            // 1であればコマンドは廃止予定である
        $deprecated.push($Txt_command)
    End if
Until(OK=0) // 既存のコマンドの終了

```

## 参照

[EXECUTE FORMULA](../commands-legacy/execute-formula.md)\
[プリエンプティブプロセス](../Develop/preemptive.md)

## プロパティ

|            |                             |
| ---------- | --------------------------- |
| コマンド番号     | 538                         |
| スレッドセーフ    | &check; |
| 更新するシステム変数 | OK                          |


