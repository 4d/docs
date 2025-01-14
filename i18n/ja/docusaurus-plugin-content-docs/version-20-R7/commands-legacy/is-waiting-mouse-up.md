---
id: is-waiting-mouse-up
title: Is waiting mouse up
slug: /commands/is-waiting-mouse-up
displayed_sidebar: docs
---

<!--REF #_command_.Is waiting mouse up.Syntax-->**Is waiting mouse up**  : Boolean<!-- END REF-->
<!--REF #_command_.Is waiting mouse up.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | オブジェクトがmouse upイベントを待っている場合にはTrue、それ以外ならFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is waiting mouse up.Summary-->The **Is waiting mouse up** コマンドはカレントオブジェクトがクリックされて、かつマウスボタンがリリースされておらず、親ウィンドウにフォーカスが入っている場合に**True**を返します。<!-- END REF-->そうでない場合、例えばマウスボタンがリリースされる前に親ウィンドウのフォーカスが外れてしまった場合などには**False**を返します。

このコマンドはカレントオブジェクトのコンテキストにおいて呼び出される必要があります。これはピクチャーフィールドあるいは変数に対して使用可能なOn Mouse Up フォームイベントと共に使用される事を前提に設計されています。これを使用すれば、例えばユーザーがフォームオブジェクトピクチャー内で何かをクリックして移動を開始したものの、そのアクションが何らかの外部イベント、例えばALERTダイアログボックスなどで中断されたなどの場合をコードで管理する事ができるようになります。中断されてしまった場合、オブジェクトの内部状態としては永遠に発生しないmouse up eventを待ち続けることになってしまうため、無期限に停止してしまうことになります。この問題を避けるため、このコマンドが有効なコンテキストでのみ実行される事を保証するように、**Is waiting mouse up**コマンド内でのマウスの移動コードを保護する必要があります。

#### 例題 

以下のコードを使用する事で、ピクチャーオブジェクト内のマウストラック機能を管理する事ができます:

```4d
  //ピクチャーオブジェクト用のオブジェクトメソッド
 var vLtracking : Integer //トラックモードのフラグ管理
 Case of
    :(Form event code=On Clicked)
       If(Is waiting mouse up) //マウスボタンはまだリリースされていない
          vLtracking:=1 //トラックモード内にいる
  //... ここにトラック機能用の初期化コードを書く
       End if
    :(Form event code=On Mouse Move)
       If(vLtracking=1) //トラックモード内にいる
          If(Not(Is waiting mouse up)) //mouse upは永遠に来ない場合
             vLtracking:=0 //トラックモードを中止
  //... ユーザートラックアクションを管理あるいはキャンセルするコードをここに書く
          Else //オブジェクトはmouse upをまだ待っている
  //... トラック用のコードをここに書く
          End if
       End if
    :(Form event code=On Mouse Up) //マウスボタンはリリースされた
  //... トラックアクションを完成させるコードをここに書く
       vLtracking:=0 //トラックモードを終了
 End case
```

#### 参照 

[Form event code](../commands/form-event-code.md)"  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1422 |
| スレッドセーフである | &cross; |


