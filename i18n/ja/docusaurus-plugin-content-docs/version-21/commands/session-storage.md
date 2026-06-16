---
id: session-storage
title: Session storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* : Text ) : Object<!-- END REF-->

<!--REF #_command_.Session storage.Params-->

<div class="no-index">

| 引数  | 型      |                             | 説明                                  |
| --- | ------ | --------------------------- | ----------------------------------- |
| id  | Text   | &#8594; | セッションの固有ID(UUID) |
| 戻り値 | Object | &#8592; | セッションのStorage オブジェクト                |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

| リリース  | 内容                             |
| ----- | ------------------------------ |
| 20 R8 | Support of standalone sessions |
| 20 R6 | 追加                             |

</details>
</div>

## 説明

<!--REF #_command_.Session storage.Summary-->**Session storage** コマンドは、*id* 引数に渡された固有の識別子を持つセッションのストアレージオブジェクトを返します。<!-- END REF--> 

*id* 引数には、Storage を取得したいセッションのUUID を渡します 。 *id* 引数には、Storage を取得したいセッションのUUID を渡します 。 これは4D (4D Server、またはスタンドアロンセッションに対してはシングルユーザー版4D )によって自動的に割り振られるもので、[session オブジェクト](../API/SessionClass.md) の[**.id**](../API/SessionClass.md#id) プロパティに保存されています。 セッションが存在しない場合、コマンド**Null** はを返します。 セッションが存在しない場合、コマンド**Null** はを返します。

**注意:** セッションの識別子は、[Process activity](process-activity.md) コマンドを使用することで取得できます。

返されるオブジェクトは、セッションオブジェクトの [**.storage**](../API/SessionClass.md#storage) プロパティです。  これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。

## 例題

以下のメソッドは、特定のセッションのStorage オブジェクト内の"settings" プロパティの値を変更します:

```4d
  //Set storage for a session
  //The "Execute On Server" method property is set
 
 #DECLARE($id : Text; $text : Text)
 var $obj : Object
 
 $obj:=Session storage($id)
 
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

## 参照

[Process activity](process-activity.md)
[Session](./session.md)

## プロパティ

|         |      |
| ------- | ---- |
| コマンド番号  | 1839 |
| スレッドセーフ | ◯    |


