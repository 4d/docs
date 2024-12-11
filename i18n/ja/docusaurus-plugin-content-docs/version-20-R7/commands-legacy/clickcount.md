---
id: clickcount
title: Clickcount
slug: /commands/clickcount
displayed_sidebar: docs
---

<!--REF #_command_.Clickcount.Syntax-->**Clickcount**  : Integer<!-- END REF-->
<!--REF #_command_.Clickcount.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 連続したクリックの回数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Clickcount.Summary-->**Clickcount** コマンドは、マウスクリックイベントのコンテキストにおいて、ユーザー同じマウスボタンを素早く連続でクリックした回数を返します。<!-- END REF-->通常、このコマンドはダブルクリックを意味する2を返します。

このコマンドによってリストボックスのヘッダーやフッターにおいてダブルクリックを検知したり、トリプルクリック、あるいはそれ以上のクリックを扱えるようになります。  

全てのマウスボタンは個別のクリックイベントを生成します。例えば、ユーザーがダブルクリックをした場合、最初のクリックに対してイベントが送られ、**Clickcount**は1を返します。そして二つ目のクリックに対してイベントがもう一つ送られ、**Clickcount** は2を返します。

このコマンドはOn Clicked、On Header Click または On Footer Click フォームイベントおいてのみ使用されるべきものです。そのため、デザインモードで検索をし、フォームプロパティあるいは特定のオブジェクトにおいて適切なイベントが正常に選択されているかどうかをチェックする必要があります。

On Clicked と On Double Clicked フォームイベントが両方とも有効化されている場合、**Clickcount** が返す値は以下の様に変遷します:

* On Clicked イベントに1が返されます
* On Double Clicked イベントに2が返されます
* On Clicked イベントに2+nが返されます

#### 例題 1 

以下のコードストラクチャーをリストボックスヘッダー内に配置すると、シングルクリックとダブルクリックを管理することが出来るようになります:

```4d
 Case of
    :(Form event code=On Header Click)
       Case of
          :(Clickcount=1)
             ... //シングルクリックアクション
          :(Clickcount=2)
             ... //ダブルクリックアクション
       End case
 End case
```

#### 例題 2 

ラベルは入力可能ではないですが、トリプルクリックをすると入力可能になります。ユーザーにラベルの編集を許可したい場合、以下の様なコードをオブジェクトメソッドに記載します:

```4d
 If(Form event code=On Clicked)
    Case of
       :(Clickcount=3)
          OBJECT SET ENTERABLE(*;"Label";True)
          EDIT ITEM(*;"Label")
    End case
 End if
```


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1332 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


