---
id: session-storage-by-id
title: Session storage by ID
slug: /commands/session-storage-by-id
displayed_sidebar: docs
---

<!--REF #_command_.Session storage by ID.Syntax-->**Session storage by ID** ( *id* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Session storage by ID.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| id | Text | &#x1F852; | Unique identifier (UUID) of the session on the server |
| 戻り値 | Object | &#x1F850; | Storage object of the session |

<!-- END REF-->

#### 注 

<!--REF #_command_.Session storage by ID.Summary-->**Session storage by ID** コマンドは*id* 引数に渡した固有のIDを持つセッションのStorage オブジェクトを返します。<!-- END REF-->

引数には、Storage を取得したいセッションのUUID を渡します。これはサーバーによって自動的に割り当てられ、[session オブジェクト](https://developer.4d.com/docs/ja/API/SessionClass) の [**.id**](https://developer.4d.com/docs/ja/API/SessionClass/#id) プロパティ内に保存されています。指定したセッションがサーバー上に存在しない場合、コマンドは**Null** を返します。

**注意:** セッションの識別子は[Get process activity](get-process-activity.md) コマンドを使用することで取得できます。

返されるオブジェクトはセッションの[**.storage**](https://developer.4d.com/docs/ja/API/SessionClass/#storage) プロパティです。これはセッションの全てのプロセスから利用可能な情報を保存するための共有オブジェクトです。

#### 例題 

以下のメソッドは、特定のセッションのstorage オブジェクトに保存された"settings" プロパティの値を書き換えます:

```4d
  //セッションに対してstorageを設定
  // このメソッドには"サーバー上で実行" メソッドプロパティがチェックされている
 
 #DECLARE($id Text;$text Text)
 var $obj : Object
 
 $obj:=Session storage by ID($id)
 
 If($obj.settings=Null)
    Use($obj)
       $obj.settings:=New shared object("text";$text)
    End use
 Else
    Use($obj.settings)
       $obj.settings.text:=$text
    End use
 End if
```

#### 参照 

  
[Get process activity](get-process-activity.md)  