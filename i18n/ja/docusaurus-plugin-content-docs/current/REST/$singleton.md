---
id: singleton
title: $singleton
---

[共有シングルトンの公開関数](../Concepts/classes.md#シングルトンクラス) は、REST で直接呼び出すことができます。

Singleton functions are called in POST or GET requests with the `$singleton` command and without `()`. たとえば、`VehicleFactory` 共有シングルトンクラスに `buildVehicle()` 関数を定義した場合、次のリクエストで呼び出すことができます:

```json
/rest/$singleton/VehicleFactory/buildVehicle
```

POSTリクエストのボディに関数に渡す引数を含めます: ["truck"]

この呼び出しは、4Dランゲージでは次のステートメントに相当します:

```4d
$singleton:=cs.VehicleFactory.me.buildVehicle("truck")
```

:::note

RESTリクエストから直接呼び出すことができるのは、[`exposed` キーワード](../ORDA/ordaClasses.md#公開vs非公開関数) が付いた関数のみです。

:::

## 関数の呼び出し

Singleton functions can be called using REST **POST** or **GET** requests.

シンタックスは次の通りです:

#### POST request

`/rest/$singleton/SingletonClass/SingletonClassFunction`

with data in the body of the POST request: `["myparam"]`

#### GET request

`/rest/$singleton/SingletonClass/SingletonClassFunction?$params='["myparam"]'`

:::note

The `SingletonClassFunction()` function must have been declared with the `onHttpGet` keyword to be callable with `GET` (see [Function configuration](ClassFunctions#function-configuration)).

:::

> プロジェクトがコンパイル済みモードで実行される場合、RESTサーバーは常にプリエンプティブプロセスを使用するため、RESTリクエストから呼び出されるすべての 4Dコードは **スレッドセーフでなければなりません** ([*プリエンプティブプロセスを使用* の設定値](../WebServer/preemptiveWeb.md#webサーバーにおいてプリエンプティブモードを有効化する) は、RESTサーバーによって無視されます)。

:::info

特定のシングルトン関数の呼び出しを制限するには、[**roles.json**](../ORDA/privileges.md#rolesjson-ファイル) ファイルで適切な権限を設定することができます。

:::

## 引数

シングルトン関数に引数を渡すことができます。 サーバーサイドでこれらの引数は、シングルトンクラス関数の [宣言されたパラメーター](../Concepts/parameters.md#パラメーターの宣言) に受け渡されます。

シングルトン関数に引数を渡す方法は、ORDAクラスの関数に引数を渡すのとまったく同じです。 詳細については、["クラス関数の呼び出し" ページの **引数** の段落](ClassFunctions.md#引数) を参照ください。

## 例題

公開関数を持つ、シンプルな共有シングルトンを作成します:

```4d
// class mySingleton

shared singleton Class constructor()

exposed Function sayHello ($value : Text)
	return "Hello "+$value

```

:::note

[`$catalog`]($catalog.md#シングルトン) コマンドを呼び出すと、`mySingleton` クラスと `sayHello` 関数がリストされます。

:::

次のリクエストを実行します:

**POST** `/rest/$singleton/mySingleton/sayHello`

リクエストのボディ: ["John"]

#### レスポンス

```json
{
	"result": "Hello John"
}
```
