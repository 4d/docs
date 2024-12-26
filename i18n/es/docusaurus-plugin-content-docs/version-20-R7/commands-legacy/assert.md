---
id: assert
title: ASSERT
slug: /commands/assert
displayed_sidebar: docs
---

<!--REF #_command_.ASSERT.Syntax-->**ASSERT** ( *expresionBool* {; *textoMensaje*} )<!-- END REF-->
<!--REF #_command_.ASSERT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| expresionBool | Boolean | &#8594;  | Expresión booleana |
| textoMensaje | Text | &#8594;  | Texto del mensaje de error |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ASSERT.Summary-->El comando **ASSERT**evalúa la aserción *expresionBool* pasada en parámetro y, si se vuelve falsa, interrumpe la ejecución del código y muestra un error.<!-- END REF-->

El comando funciona en modo interpretado y en modo compilado.

Si la expresión es verdadera, no pasa nada. Si es falsa, el comando dispara el error -10518 y muestra por defecto el texto de la aserción precedido del mensaje "Aserción fallida:". Puede interceptar este error vía un método instalado utilizando el comando [ON ERR CALL](on-err-call.md), para por ejemplo alimentar un archivo de historial. 

El comando acepta un segundo parámetro opcional que puede utilizarse para proporcionar un texto que se mostrará en el mensaje de error en lugar de la expresión booleana cuando sea falsa.

Opcionalmente, puede pasar un parámetro *texto* *Mensaje* para mostrar un mensaje de error personalizado en lugar del texto de la aserción.

Una aserción es un instrucción insertada en el código que es responsable de detectar posibles anomalías durante su ejecución. El principio consiste en verificar que una expresión es verdadera en un momento dado y en caso contrario, producir una excepción. Las aserciones se utilizan sobre todo para detectar casos que no deberían ocurrir nunca. Principalmente se utilizan para detectar bugs de programación. Es posible activar o desactivar globalmente todas las aserciones de una aplicación (por ejemplo de acuerdo al tipo de versión) vía el comando [SET ASSERT ENABLED](set-assert-enabled.md). Para más información acerca de las aserciones en programación, por favor consulte el artículo en Wikipedia: http://en.wikipedia.org/wiki/Assertion\_(computing)

#### Ejemplo 1 

Antes de efectuar operaciones en un registro, el desarrollador quiere asegurarse de que está cargado en modo lectura/escritura:

```4d
 READ WRITE([Tabla 1])
 LOAD RECORD([Tabla 1])
 ASSERT(Not(Locked([Tabla 1])))
  // dispara el error -10518 si el registro está bloqueado
```

#### Ejemplo 2 

Una aserción permite probar los parámetros pasados a un método de proyecto para detectar los valores aberrantes. En este ejemplo, se utiliza un mensaje de alerta personalizado.

```4d
  // Método que devuelve el número de un cliente en función de su nombre pasado en $1
 var $1 : Text // Nombre del cliente
 ASSERT($1#"";"Búsqueda de un nombre de cliente vacío")
  // Un nombre vacío en este caso es un valor aberrante
  // Si la aserción es falsa, se mostrará en la caja de diálogo el error:
  // "Aserción fallida: búsqueda de un nombre de cliente vacía"
```

#### Ver también 

[Asserted](asserted.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1129 |
| Hilo seguro | &check; |
| Modifica variables | error |


