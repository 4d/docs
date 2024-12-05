---
id: singleton
title: $singleton
---

Puede llamar directamente a [funciones de sus singletons compartidos] (../Concepts/classes.md#singleton-classes) a través de REST.

Singleton functions are called in POST or GET requests with the `$singleton` command and without `()`. Por ejemplo, si ha definido una función `buildVehicle()` en la clase compartida singleton `VehicleFactory`, podría llamarla utilizando la siguiente petición:

```json
/rest/$singleton/VehicleFactory/buildVehicle
```

con los datos en el cuerpo de la petición POST: ["truck"]

En el lenguaje 4D, esta llamada equivale a:

```4d
$singleton:=cs.VehicleFactory.me.buildVehicle("truck")
```

:::note

Tenga en cuenta que sólo las funciones con la [palabra clave `exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) pueden ser llamadas directamente desde peticiones REST.

:::

## Llamadas de las funciones

Singleton functions can be called using REST **POST** or **GET** requests.

La sintaxis formal es:

#### POST request

`/rest/$singleton/SingletonClass/SingletonClassFunction`

with data in the body of the POST request: `["myparam"]`

#### GET request

`/rest/$singleton/SingletonClass/SingletonClassFunction?$params='["myparam"]'`

:::note

The `SingletonClassFunction()` function must have been declared with the `onHttpGet` keyword to be callable with `GET` (see [Function configuration](ClassFunctions#function-configuration)).

:::

> Todo el código 4D llamado desde las peticiones REST **debe ser hilo seguro** si el proyecto se ejecuta en modo compilado, porque el Servidor REST siempre utiliza procesos apropiativos en este caso (el valor de la propiedad [*Utilizar proceso apropiativo*](../WebServer/preemptiveWeb.md#enabling-the-preemptive-mode-for-the-web-server) es ignorado por el Servidor REST).

:::info

Puede restringir las llamadas a funciones singleton específicas configurando los privilegios apropiados en el archivo [**roles.json**](../ORDA/privileges.md#rolesjson-file).

:::

## Parámetros

Puede enviar parámetros a funciones singleton. Del lado del servidor, serán recibidos en los [parámetros declarados](../Concepts/parameters.md#declaring-parameters) de las funciones clase singleton.

Enviar parámetros a funciones singleton es exactamente lo mismo que enviar parámetros a funciones de clase ORDA. Consulte [el párrafo **Parámetros** de la página "Llamada a funciones clase"](ClassFunctions.md#parameters) para obtener una descripción detallada.

## Ejemplo

Ha creado un singleton compartido sencillo con una función expuesta:

```4d
//class mySingleton

shared singleton Class constructor()

exposed Function sayHello ($value : Text)
	return "Hello "+$value

```

:::note

La clase `mySingleton` y la función `sayHello` se listan cuando se llama al comando [`$catalog`]($catalog.md#singleton).

:::

A continuación, puede ejecutar esta petición:

**POST** `/rest/$singleton/mySingleton/sayHello`

Cuerpo de la petición: ["John"]

#### Respuesta

```json
{
	"result": "Hello John"
}
```
