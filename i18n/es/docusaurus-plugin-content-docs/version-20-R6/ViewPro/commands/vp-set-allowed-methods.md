---
id: vp-set-allowed-methods
title: VP SET ALLOWED METHODS
---

<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->

**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->

| Parámetros | Tipo   |    | Descripción                                 |                  |
| ---------- | ------ | -- | ------------------------------------------- | ---------------- |
| methodObj  | Object | -> | Métodos permitidos en las áreas 4D View Pro | <!-- END REF --> |

> **Compatibilidad**

> Para una mayor flexibilidad, se recomienda utilizar el comando [`VP SET CUSTOM FUNCTIONS`](vp-set-custom-functions.md) que permite designar fórmulas 4D que pueden ser llamadas desde áreas 4D View Pro. En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, se ignoran las llamadas a `VP SET ALLOWED METHODS`. 4D View Pro también soporta el comando genérico 4D `SET ALLOWED METHODS` si no se llama ni a `VP SET CUSTOM FUNCTIONS` ni a `VP SET ALLOWED METHODS`, sin embargo no se recomienda usar el comando genérico.

#### Descripción

El comando `VP SET ALLOWED METHODS` <!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->designa los métodos proyecto que pueden ser llamados en las fórmulas 4D View Pro<!-- END REF -->. Este comando se aplica a todas las áreas 4D View Pro inicializadas después de su llamada durante la sesión. Se puede llamar varias veces en la misma sesión para inicializar diferentes configuraciones.

Por defecto, por razones de seguridad, si no se ejecuta el comando `VP SET ALLOWED METHODS`, no se permite ninguna llamada a métodos en las áreas 4D View Pro -- excepto si se ha utilizado el comando genérico `SET ALLOWED METHODS` (ver nota de compatibilidad). El uso de un método no autorizado en una fórmula muestra un error #NAME? error en el área 4D View Pro.

En el parámetro *methodObj*, pase un objeto en el que cada propiedad es el nombre de una función a definir en las áreas 4D View Pro:

| Propiedad        |            |                                                                                | Tipo                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ---------- | ------------------------------------------------------------------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<functionName>` |            |                                                                                | Object               | Definición de la función personalizada. El nombre de la propiedad `<functionName>` define el nombre de la función personalizada que se mostrará en las fórmulas 4D View Pro (no se permiten espacios)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                  | method     |                                                                                | Text                 | (obligatorio) Nombre del método proyecto 4D existente a autorizar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                  | parameters |                                                                                | Colección de objetos | Colección de parámetros (en el orden en que están definidos en el método). Para más información, consulte la sección [Parámetros](../formulas.md#parameters).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                  |            | \[ ].name | Text                 | Nombre de un parámetro a mostrar para la `<functionName>`.**Nota**: los nombres de los parámetros no deben contener caracteres de espacio.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                  |            | \[ ].type | Number               | Tipo de parámetro. Tipos soportados:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>`*type* puede omitirse (excepto cuando al menos un parámetro es de tipo collection, en cuyo caso la declaración del tipo del parámetro es obligatoria). <br/>Si se omite *type*, por defecto el valor se envía automáticamente con su tipo, excepto los valores de fecha u hora que se envían como un objeto.  Si *type* es `Is object`, el objeto es enviado en una propiedad `.value\`. Ver la sección [Parámetros](../formulas.md#parameters). |
|                  | summary    |                                                                                | Text                 | Descripción de la función a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                  | minParams  |                                                                                | Number               | Número mínimo de parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                  | maxParams  |                                                                                | Number               | Número máximo de parámetros. Pasar un número superior a la longitud de los parámetros permite declarar parámetros "opcionales" con tipo por defecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Ejemplo

Usted quiere autorizar dos métodos en sus áreas 4D View Pro:

```4d
C_OBJECT($allowed)
$allowed:=New object //parámetro para el comando
 
$allowed.Hello:=New object //crea una primera función simple llamada "Hello"
$allowed.Hello.method:="My_Hello_Method" //define el método 4D
$allowed.Hello.summary:="Hello prints hello world"
 
$allowed.Byebye:=New object //crea una segunda función con parámetros llamada "Byebye"
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3
 
VP SET ALLOWED METHODS($allowed)
```

Una vez ejecutado este código, las funciones definidas pueden utilizarse en las fórmulas 4D View Pro:

![](../../assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)

> En las fórmulas 4D View Pro, los nombres de las funciones se muestran automáticamente en mayúsculas.

#### Ver también

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET CUSTOM FUNCTIONS](vp-set-custom-functions.md)
