---
id: object-get-value
title: OBJECT Get value
slug: /commands/object-get-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get value.Syntax-->**OBJECT Get value** ( *nomObjeto* ) : any<!-- END REF-->
<!--REF #_command_.OBJECT Get value.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomObjeto | Text | &#8594;  | Nombre del objeto |
| Resultado | any | &#8592; | Valor actual de la fuente de datos del objeto de formulario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get value.Summary-->El comando **OBJECT Get value** devuelve el valor actual de la fuente de datos para los objetos de formulario designados por el parámetro *nomObjeto*.<!-- END REF-->

En el parámetro *nomObjeto*, pase el nombre de un objeto de formulario (cadena). Si utiliza el carácter comodín ("@") para varios objetos, solo se devuelve el valor de la fuente de datos del primer objeto de formulario.

**Nota**: **OBJECT Get value** no está disponible en los objetos de columna del list box.

**Valor devuelto**

Valor actual de la fuente de datos del objeto de formulario.

**Notas**:

* Si la fuente de datos es un array, el comando devuelve el índice del array
* Si la fuente de datos es una expresión, el comando devuelve el valor evaluado desde el último ciclo de ejecución

#### Ejemplo 

Ver el ejemplo para el comando [OBJECT SET VALUE](object-set-value.md). 

#### Ver también 

[OBJECT SET VALUE](object-set-value.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1743 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


