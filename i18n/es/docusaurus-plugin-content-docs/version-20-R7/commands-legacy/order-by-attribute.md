---
id: order-by-attribute
title: ORDER BY ATTRIBUTE
slug: /commands/order-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY ATTRIBUTE.Syntax-->**ORDER BY ATTRIBUTE** ( {*tabla* ;} *campoObjeto* ; *rutaAtrib* ; > o < {; *campoObjeto2* ; *rutaAtrib2* ; > o <2 ; ... ; *campoObjetoN* ; *rutaAtribN* ; > o <N} {; *} )<!-- END REF-->
<!--REF #_command_.ORDER BY ATTRIBUTE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual ordenar los registros seleccionados, o tabla por defecto, si se omite |
| campoObjeto | Object | &#8594;  | Campo objeto que contiene el atributo de ordenación |
| rutaAtrib | Text | &#8594;  | Nombre o ruta del atributo en el que se define el orden para cada nivel |
| > o < | Operador | &#8594;  | Dirección de ordenación para cada nivel: > para ordenar en orden ascendente o < para ordenar en orden descendente |
| * | Operador | &#8594;  | Continuar bandera de orden |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ORDER BY ATTRIBUTE.Summary-->El comando **ORDER BY ATTRIBUTE** ordena (reordena) los registros de la selección actual de *tabla* para el proceso actual basado en el contenido de *rutaAtrib* de *campoObjeto*.<!-- END REF--> Después de terminada la ordenación, el nuevo primer registro de la selección se convierte en el registro actual.

Si omite el parámetro *tabla*, el comando se aplica a la tabla por defecto, si se ha especificado. De lo contrario, 4D utiliza la tabla del primer campo pasado como un parámetro.

 En *campoObjeto*, pase el campo Objeto cuyo atributo desea utilizar para la ordenación. Este campo puede pertenecer a *tabla* o a una tabla relacionada con *tabla* con una relación automática o manual. En este caso, la ordenación es siempre secuencial.

En *rutaAtrib*, pase la ruta del atributo cuyos valores desea utilizar para ordenar los registros, por ejemplo "niños.genero.edad".

**Notas:** 

* Sólo los atributos que contienen valores escalares (números, textos, booleanos, fecha) pueden ser ordenados. Otros tipos de valores (objeto, imagen...) son considerados como valores nulos.
* No se puede pasar un elemento de un array en rutaAtrib (en este caso, se devuelve un error).
* Recuerde que los nombres de atributos son sensibles a las mayúsculas y minúsculas: "MiAtt" y "miAtt" son nombres de atributos diferentes en el mismo registro.
* No puede utilizar atributos cuyo nombre contenga caracteres especiales como "." o "\[\]", porque serán evaluados incorrectamente como tokens en el orden por cadena. Para más información, por favor consulte el párrafo *Identificadores de propiedades de objetos*.

Si el atributo del campo contiene valores de tipos diferentes (es decir, números, cadenas, booleanos), primero se agrupan por tipo, luego por valor.

Si el valor del atributo de campo es **nulo** para algunos registros (es decir, el valor del atributo es nulo o *rutaAtrib* no existe en el campo):

* Si la orden es **ascendente** (>), los registros con valor **nulo** se colocarán al principio de la selección.
* Si el orden es **descendente** (<), los registros con valor **nulo** se colocarán al final de la selección.

Puede ordenar la selección en uno o en varios niveles. Para cada nivel de ordenación, se especifica un *campo*, un *rutaAtrib* y el sentido de ordenación en *\> o <*. Si pasa el símbolo (>) "mayor que", el orden es ascendente. Si pasa el símbolo (<) "menor que", el orden es descendente. Si no se especifica el sentido de ordenación, el orden ascendente es el valor predeterminado.   
Si sólo se especifica un campo (un nivel de ordenación) y está indexado, el índice se utiliza para la orden. Si el campo no está indexado o si hay más de un campo, el orden es secuencial.

Para varias ordenaciones (ordenaciones en varios campos), puede llamar a **ORDER BY ATTRIBUTE** tantas veces como sea necesario y especificar el parámetro opcional *\**, a excepción de la última llamada **ORDER BY ATTRIBUTE**, que inicia la operación de ordenación. Esta funcionalidad es útil para la gestión de ordenaciones múltiples en interfaces de usuario personalizadas. Tenga en cuenta que puede combinar las llamadas **ORDER BY ATTRIBUTE** con llamadas [ORDER BY](order-by.md).

**Nota:** con esta sintaxis, puede pasar un solo nivel de ordenación (campo) por llamada **ORDER BY ATTRIBUTE**.

No importa qué forma de ordenación se haya definido, si la operación de ordenación va a tomar algún tiempo, 4D muestra automáticamente un mensaje que contiene un termómetro de progreso. Este mensaje se puede controlar mediante el uso de los comandos [MESSAGES ON](messages-on.md) y [MESSAGES OFF](messages-off.md). Si se muestra el termómetro de progreso, el usuario puede hacer clic en el botón **Detener** para interrumpir la ordenación. Si se finaliza la ordenación, OK pasa a 1\. De lo contrario, si se interrumpe la ordenación, OK pasa a 0 (cero).

#### Ejemplo 

Usted desea ordenar la selección actual por edad (descendente) y luego por su nombre (ascendente). El orden por defecto es:

```json
// [Customer]OB_Info contents partial export
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Mikken","age":"Forty-six","client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Hamp","age":"Sixty","client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Martin","client":true],
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Gordini","client":true},
{"LastName":"Delaferme","age":54,"client":true},
{"LastName":"Belami","age":"Forty-six","client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Smeldorf","age":70,"client":true}
```

Si ejecuta:

```4d
 ORDER BY ATTRIBUTE([Customer];[Customer]OB_Info;"age";<;[Customer]OB_Info;"LastName";>)
```

Los registros están en el siguiente orden:

```json
{"LastName":"Gordini","client":true}, //al inicio porque
{"LastName":"Martin","client":true}, //age is null (missing)
{"LastName":"Smeldorf","age":70,"client":true}
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Delaferme","age":54,"client":true}, 
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Hamp","age":"Sixty","client":true}, //string values in age
{"LastName":"Belami","age":"Forty-six","client":true}, //are handled separately
{"LastName":"Mikken","age":"Forty-six","client":true}
```

#### Ver también 

  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1407 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


