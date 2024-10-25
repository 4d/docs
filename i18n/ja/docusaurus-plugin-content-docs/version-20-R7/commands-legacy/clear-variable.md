---
id: clear-variable
title: CLEAR VARIABLE
slug: /commands/clear-variable
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR VARIABLE.Syntax-->**CLEAR VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.CLEAR VARIABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | クリアする変数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CLEAR VARIABLE.Summary-->CLEAR VARIABLE コマンドを使用して、 *variable* をそのデフォルト値へ再設定します (テキスト変数は空の文字列に、数値変数には *0* に、配列はエレメントを空にします) 。<!-- END REF-->しかし、変数はメモリに存在しています。

**注:** 型ごとのデフォルト値の情報については、*デフォルトの値* の段落を参照してください。

引数 *variable* に渡す変数には、ローカル、プロセス、またはインタプロセス変数を渡せます。

**注:** プロセスの終了時、ユーザはプロセス変数を消去する必要はありません。4Dが自動的に消去します。同様に、それぞれのローカル変数は、それが作成されたメソッドが実行を終了すると自動的に消去されます。

#### 例題 

フォーム上でユーザインターフェースの目的だけで、*asMyDropDown* ドロップダウンリストを使用するとします。つまり、データ入力中には配列を使用しますが、フォームから抜けた後はその配列が不要となります。したがって、On Unload イベントでこの配列を消去します。

```4d
  //asMyDropDown ドロップダウンリストのオブジェクトメソッド
 Case of
    :(Form event code=On Load)
  // 配列を初期化する
       ARRAY TEXT(asMyDropDown;...)
  // ...
    :(Form event code=On Unload)
  // 配列が必要なくなった
       CLEAR VARIABLE(asMyDropDown)
  // ...
 End case
```

#### 参照 

[Undefined](undefined.md)  