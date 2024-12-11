---
id: throw
title: throw
slug: /commands/throw
displayed_sidebar: docs
---

<!--REF #_command_.throw.Syntax-->**throw** ( *errorCode* {; *descripcion*} ) <br/>
*throw* {( *errorObj* )}<!-- END REF-->
<!--REF #_command_.throw.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| errorCode | Integer | &#8594;  | Un entero largo que representa el código de error. |
| descripcion | Text | &#8594;  | Texto que describe el error. |
| throw {( errorObj )} |
| Parámetro | Tipo | Descripción |
| errorObj | Object | &#8594;  | Un objeto que contiene propiedades para construir el error |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.throw.Summary-->El comando **throw** crea un error que será lanzado inmediatamente o cuando el método que lo llama devuelva a su llamador (modo diferido).<!-- END REF-->

Cuando se encuentre con una situación en su código 4D en la que surja una condición de error, puede utilizar el comando throw para lanzar explícitamente un error y dar un mensaje de error específico o un número de error. Esto puede ser útil para señalar condiciones excepcionales o entradas inválidas.

Los errores lanzados utilizando el comando **throw** son gestionados por el runtime de 4D como cualquier error normal: se muestra el diálogo de error estándar a menos que se haya instalado un método de intercepción utilizando el comando [ON ERR CALL](on-err-call.md).

El comando admite tres sintaxis:

##### **throw(errorCode{; description})**

Especifica el código de error y un texto de descripción opcional, el error se lanza inmediatamente.  
Si no se indica ninguna descripción: se llena con:

* Código de error (errorCode): (host) en la aplicación local
* Código de error (errorCode): (C00x) en un componente

##### **throw(errorObj)**

El objeto *errorObj* permite obtener información de error más detallada y controlar la gestión de errores. Puede contener las siguientes propiedades, así como toda propiedad personalizada a la que pueda hacer referencia la propiedad **message**.

Puede contener las siguientes propiedades, así como toda propiedad personalizada a la que pueda hacer referencia utilizando marcadores de posición dentro de la propiedad message.

| **propiedad**      | **tipo<br/>** | **descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| componentSignature | text                  | Firma de cuatro letras latinas para identificar de forma única el origen del error. Si no se indica **componentSignature**, el comando utiliza "host" para la base de datos host, y "C001", "C002", ... para los componentes.                                                                                                                                                                                                                                                                      |
| errCode            | number                | Código de error.<br/> Si no se indica el **errCode**, el comando utiliza -1.                                                                                                                                                                                                                                                                                                                                                                                                               |
| message            | text                  | Descripción del error.<br/> El **mensaje** puede contener marcadores de posición que serán sustituidos por propiedades personalizadas añadidas al objeto errorObj. Cada marcador de posición debe especificarse utilizando llaves {} encerrando el nombre de la propiedad a utilizar. Si el **mensaje** no se indica o es una cadena vacía, el comando buscará una descripción en los archivos xliff de la base de datos actual con un renombre construido así: ERR\_{component}\_{code}". |
| deferred           | boolean               | True si el error debe diferirse cuando vuelva al método actual o al final del [Try block](developer.4d.com/docs/Concepts/error-handling#trycatchend-try). El valor por defecto es false.                                                                                                                                                                                                                                                                                                           |

Cuando se utiliza esta sintaxis, el objeto *errorObj* se devuelve en Últimos errores.

**Nota:** es posible llamar al comando varias veces en el mismo método proyecto para generar varios errores. Puede utilizar la opción diferido para enviar todos los errores a la vez.

##### **throw** 

Lanza todos los errores actuales en **modo diferido**, lo que significa que se añadirán a una pila y se gestionarán cuando vuelva el método que los llama. Esto se hace típicamente desde dentro de una retrollamada [ON ERR CALL](on-err-call.md).

* **En una aplicación**: cuando se produce un error, se añade a la pila de errores y se llama al método [ON ERR CALL](on-err-call.md) de la aplicación al final del método actual. La función [Last errors](last-errors.md) devuelve la pila de errores.
* **Como consecuencia, en un componente:** la pila de errores se puede enviar a la aplicación local y se llama al método [ON ERR CALL](on-err-call.md) de la aplicación local.

#### Ejemplo 1 

```4d
 var $code : Integer
 var $description : text
 $code:=50042 //Código personalizado
 $description:=“This is a custom error”
 throw($code ;$description) //  Lanza un error con el mensaje "This is a custom error" y errCode = 50042
```

#### Ejemplo 2 

```4d
throw({errCode: 1; message: "This an error"}) // Lanza un error con el mensaje errCode = 1 y mensaje "This an error"
```

#### Ejemplo 3 

```4d
throw({errCode: 1}) // Lanza un error con errCode = 1 y el mensaje "Error code: 1 (host)"
```

#### Ejemplo 4 

```4d
throw({message: "This an error"}) // Lanza un error con errCode = -1 y el mensaje "This is my error"
```

#### Ejemplo 5 

```4d
throw({message: "This is my error"; deferred: True}) // Lanza un error con el mensaje "This is my error" y errCode = -1 en modo diferido
```

#### Ejemplo 6 

```4d
throw({componentSignature: "xbox"; errCode: 600; name: "myFileName"; path: "myFilePath"; deferred: True})// Lanza un error con el mensaje "File myFileName not found (myFilePath)" en modo diferido.
```

#### Ver también 

[ASSERT](assert.md)  
[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1805 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


