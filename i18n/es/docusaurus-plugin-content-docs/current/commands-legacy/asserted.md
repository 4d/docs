---
id: asserted
title: Asserted
slug: /commands/asserted
displayed_sidebar: docs
---

<!--REF #_command_.Asserted.Syntax-->**Asserted** ( *expresionBool* {; *textoMensaje*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Asserted.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| expresionBool | Boolean | &#8594;  | Expresión booleana |
| textoMensaje | Text | &#8594;  | Texto del mensaje de error |
| Resultado | Boolean | &#8592; | Resultado de la evaluación de expresionBool |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Asserted.Summary-->El comando **Asserted** tiene un funcionamiento similar al del comando [ASSERT](assert.md), con la diferencia de que devuelve un valor que es el resultado de la evaluación del parámetro *expresionBool*.<!-- END REF--> Permite utilizar una aserción durante la evaluación de una condición (ver el ejemplo). Para mayor información sobre el funcionamiento de las aserciones y los parámetros de este comando, consulte la descripción del comando [ASSERT](assert.md).

**Asserted** acepta una expresión Booleana como parámetro y devuelve el resultado de la evaluación de esta expresión. Si la expresión es falsa y si las aserciones están activas (ver el comando [SET ASSERT ENABLED](set-assert-enabled.md)), se genera el error -10518, exactamente que para el comando [ASSERT](assert.md). Si las aserciones están inactivas, **Asserted** devuelve el resultado de la expresión que se pasó sin disparar un error.

**Nota:** como el comando [ASSERT](assert.md), **Asserted** funciona en modo interpretado y en modo compilado. 

#### Ejemplo 

Inserción de una aserción en la evaluación de una expresión:

```4d
 READ WRITE([Tabla 1])
 LOAD RECORD([Tabla 1])
 If(Asserted(Not(Locked([Tabla 1]))))
  // Este código desencadena el error -10518 si el registro está bloqueado
    ...
 End if
```

#### Ver también 

[ASSERT](assert.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1132 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


