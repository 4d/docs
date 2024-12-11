---
id: find-in-field
title: Find in field
slug: /commands/find-in-field
displayed_sidebar: docs
---

<!--REF #_command_.Find in field.Syntax-->**Find in field** ( *targetField* ; *value* ) : Integer<!-- END REF-->
<!--REF #_command_.Find in field.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetField | Field | &#8594;  | 検索を実行するフィールド |
| value | Field, Variable | &#8594;  | 検索する値 |
| &#8592; | 検索された値 |
| 戻り値 | Integer | &#8592; | 検索されたレコード番号 または レコードが検索されなかった場合、-1 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Find in field.Summary-->Find in field コマンドは、*targetField*フィールドの値が*value*に等しい最初のレコードのレコード番号を返します。<!-- END REF-->何もレコードが見つからなければ、は-1を返します。

このコマンドを呼び出した後、*value*には見つかった値が返されます。これにより、文字列フィールド上でワイルドカード (“@”) を使って検索し、見つかった値を知る事ができます。

**注:** この原則により、コンパイルモードでは*value* に*引数*($1、$2、など)を使用する事はできません(不正な挙動を引き起こします)。同様に、*value* 引数にフィールドを渡したとき、正常にクエリされたときにはその値は上書きされるという点に注意して下さい(特に[Modified record](modified-record.md) コマンドはテーブルのカレントレコードに対してはTrueを返します)。

このコマンドは、カレントセレクションまたはカレントレコードを変更しません。

このコマンドは速く、特にレコード入力中に重複データの入力を防ぐのに役立ちます。

**以前のバージョンについて:** このコマンドは、初期のバージョンでの名称はFind index keyコマンドで、インデックスが付けられたフィールドのみを対象としていました。4D v11 SQLからこの制限はなくなり、そのためにコマンド名が変更されました。

#### 例題 1 

オーディオCD用のデータベースで、レコード入力中に既に登録されている歌手かどうかを確認したいとします。同姓同名も存在するため\[Singer\]Nameフィールドを重複不可にせず、入力フォームで\[Singer\]Nameフィールドのオブジェクトメソッドに下記のコードを書くことにします:

```4d
 If(Form event code=On Data Change) //v17 以前ではForm event を使用
    $RecNum:=Find in field([Singer]Name;[Singer]Name)
    If($RecNum #-1) // この名前が既に入力済みなら
       CONFIRM("この名前の歌手が既に存在します。レコードを表示しますか?";"Yes";"No")
       If(OK=1)
          GOTO RECORD([Singer];$RecNum)
       End if
    End if
 End if
```

#### 例題 2 

この例題は有効な値を持つレコードがあるかを調べます。  
  
```4d
 var $id;$1 : Integer
 $id:=$1
 If(Find in field([MyTable]MyID;$id)>=0)
    $0:=True
 Else
    $0:=False
 End if
```

  
**備考:** 演算子 >= が示しているのは、全てのレコード番号を対象としていることです。本コマンドはレコード番号を返しますが、レコード番号の最小値は0なので、全てのレコード番号が対象となります。


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 653 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


