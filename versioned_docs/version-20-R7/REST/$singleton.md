---
id: singleton
title: $singleton
---

You can directly call exposed [functions of your shared singletons](../Concepts/classes.md#singleton-classes) through REST.

Singleton functions are called in POST or GET requests with the `$singleton` command and without `()`. For example, if you have defined a `buildVehicle()` function in the `VehicleFactory` shared singleton class, you could call it using the following request:

```json
/rest/$singleton/VehicleFactory/buildVehicle
```

with data in the body of the POST request: ["truck"]

In 4D language, this call is equivalent to:

```4d
$singleton:=cs.VehicleFactory.me.buildVehicle("truck")
```

:::note

Keep in mind that only functions with the [`exposed` keyword](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) can be directly called from REST requests.

:::




## Function calls

Singleton functions can be called using REST **POST** or **GET** requests.

The formal syntax is:

#### POST request

`/rest/$singleton/SingletonClass/SingletonClassFunction`

with data in the body of the POST request: `["myparam"]`


#### GET request

`/rest/$singleton/SingletonClass/SingletonClassFunction?$params='["myparam"]'`

:::note

The `SingletonClassFunction()` function must have been declared with the `onHttpGet` keyword to be callable with `GET` (see [Function configuration](ClassFunctions#function-configuration)). 

:::



> All 4D code called from REST requests **must be thread-safe** if the project runs in compiled mode, because the REST Server always uses preemptive processes in this case (the [*Use preemptive process* setting value](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) is ignored by the REST Server).

:::info

You can restrict calls to specific singleton functions by configuring appropriate privileges in the [**roles.json**](../ORDA/privileges.md#rolesjson-file) file.

:::

## Parameters

You can send parameters to singleton functions. On the server side, they will be received in the [declared parameters](../Concepts/parameters.md#declaring-parameters) of the singleton class functions.

Sending parameters to singleton functions is exactly the same as sending parameter to ORDA class functions. Please refer to [the **Parameters** paragraph of the "Calling class functions" page](ClassFunctions.md#parameters) for a detailed description.


## Example  

You have created a simple shared singleton with an exposed function:

```4d
//class mySingleton

shared singleton Class constructor()

exposed Function sayHello ($value : Text)
	return "Hello "+$value

```

:::note

The `mySingleton` class and `sayHello` function are listed when you call the [`$catalog`]($catalog.md#singleton) command.

:::


You can then run this request:  

**POST** `/rest/$singleton/mySingleton/sayHello`

Body of the request: ["John"]


#### Response

```json
{
	"result": "Hello John"
}
```
