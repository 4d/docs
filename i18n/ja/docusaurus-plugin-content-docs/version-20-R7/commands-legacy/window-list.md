---
id: window-list
title: WINDOW LIST
slug: /commands/window-list
displayed_sidebar: docs
---

<!--REF #_command_.WINDOW LIST.Syntax-->**WINDOW LIST** ( *windows* {; *} )<!-- END REF-->
<!--REF #_command_.WINDOW LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| windows | Array | &#8592; | ウィンドウ参照番号の配列 |
| * | 演算子 | &#8594;  | 指定時, フローティングウィンドウも含める 省略時, フローティングウィンドウを含めない |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WINDOW LIST.Summary-->WINDOW LIST コマンドは配列 *windows* を生成し、実行中のすべての (カーネルおよびユーザ) プロセスで開かれているウィンドウの参照番号を返します。<!-- END REF-->"可視状態"のウィンドウ(非表示になっていないウィンドウ)のみが返されます。

オプションの *\** 引数を渡さない場合、フローティングウィンドウは含められません。

#### 例題 

以下のプロジェクトメソッドは、(フローティングとダイアリグボックスを除く) すべての開かれているウィンドウをタイル表示します:

```4d
  // TILE WINDOWS project method
 
 WINDOW LIST($alWnd)
 $vlLeft:=10
 $vlTop:=80 // ツールバーのスペースを確保
 For($vlWnd;1;Size of array($alWnd))
    If(Window kind($alWnd{$vlWnd})#Modal dialog)
       GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlWR:=$vlLeft+($vlWR-$vlWL)
       $vlWB:=$vlTop+($vlWB-$vlWT)
       $vlWL:=$vlLeft
       $vlWT:=$vlTop
       SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlLeft:=$vlLeft+10
       $vlTop:=$vlTop+25
    End if
 End for
```

**Note:** このメソッドにメインウィンドウ (Windows) やスクリーン (Mac OS) のテストを組み込むとより洗練されたものとなります。

#### 参照 

[Window kind](window-kind.md)  
[Window process](window-process.md)  