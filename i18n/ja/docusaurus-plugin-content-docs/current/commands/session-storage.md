---
id: session-storage
title: Session storage
displayed_sidebar: docs
---

<!--REF #_command_.Session storage.Syntax-->**Session storage** ( *id* ) : Object<!-- END REF-->

<!--REF #_command_.Session storage.Params-->

| 引数  | 型      |   | 説明                                  |
| --- | ------ | - | ----------------------------------- |
| id  | Text   | → | セッションの固有ID(UUID) |
| 戻り値 | Object | ← | セッションのStorage オブジェクト                |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容                |
| ----- | ----------------- |
| 20 R8 | スタンドアロンセッションのサポート |
| 20 R6 | 追加                |

</details>

#### 説明

<!--REF #_command_.Session storage.Summary-->The **Session storage** command returns the storage object of the session whose unique identifier you passed in the *id* parameter.<!-- END REF--> 

*id* 引数には、Storage を取得したいセッションのUUID を渡します。 *id* 引数には、Storage を取得したいセッションのUUID を渡します。 *id* 引数には、Storage を取得したいセッションのUUID を渡します。 *id* 引数には、Storage を取得したいセッションのUUID を渡します。 これは4D (4D Server、またはスタンドアロンセッションに対してはシングルユーザー版4D)によって自動的に割り振られるもので、[session オブジェクト](../API/SessionClass.md) の[**.id**](../API/SessionClass.md#id) に保存されています。 セッションが存在しない場合、コマンド**Null** はを返します。 セッションが存在しない場合、コマンド**Null** はを返します。 セッションが存在しない場合、コマンド**Null** はを返します。 セッションが存在しない場合、コマンド**Null** はを返します。 *id* 引数には、Storage を取得したいセッションのUUID を渡します。 *id* 引数には、Storage を取得したいセッションのUUID を渡します。 *id* 引数には、Storage を取得したいセッションのUUID を渡します。 これは4D (4D Server、またはスタンドアロンセッションに対してはシングルユーザー版4D)によって自動的に割り振られるもので、[session オブジェクト](../API/SessionClass.md) の[**.id**](../API/SessionClass.md#id) に保存されています。 セッションが存在しない場合、コマンド**Null** はを返します。 セッションが存在しない場合、コマンド**Null** はを返します。 セッションが存在しない場合、コマンド**Null** はを返します。 セッションが存在しない場合、コマンド**Null** はを返します。

**注意:** セッションの識別子は、[Process activity](process-activity.md) コマンドを使用することで取得できます。

返されるオブジェクトは、セッションオブジェクトの[**.storage**](../API/SessionClass.md#storage) プロパティです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。 これはセッションの全てのプロセスから利用可能な情報を保存するために使用される共有オブジェクトです。

#### 例題

以下のメソッドは、特定のセッションのStorage オブジェクト内の"settings" プロパティの値を変更します:

```4d
  // セッションに対してstorage を設定
  // "サーバー上で実行" メソッドプロパティが設定されているものとする
 
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

#### 参照

[Process activity](process-activity.md)\
[Session](../API/SessionClass.md#session)
