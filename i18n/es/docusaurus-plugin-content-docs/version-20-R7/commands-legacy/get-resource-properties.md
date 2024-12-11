---
id: get-resource-properties
title: Get resource properties
slug: /commands/get-resource-properties
displayed_sidebar: docs
---

<!--REF #_command_.Get resource properties.Syntax-->**Get resource properties** ( *resTipo* ; *resNum* {; *resArchivo*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get resource properties.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resTipo | Text | &#8594;  | Tipo de recurso (4 caracteres) |
| resNum | Integer | &#8594;  | Número de referencia del recurso (ID) |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite |
| Resultado | Integer | &#8592; | Atributos del recurso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get resource properties.Summary-->El comando **Get resource properties** devuelve los atributos del recurso cuyo tipo se pasa en *resTipo* y cuyo número de identificación se pasa en *resNum*.<!-- END REF--> 

Si pasa un número de referencia de archivo de recursos válido en *resArchivo*, el recurso se busca en ese archivo únicamente. Si no pasa *resArchivo*, el archivo se busca en los archivos de recursos abiertos. 

Si el archivo de recursos no existe, **Get resource properties** devuelve *0* (cero) y la variable OK toma el valor *0* (cero).

El valor numérico devuelto por **Get resource properties** debe considerable como un valor binario cuyos bits tienen un significado especial. 

#### Ejemplo 

Ver el ejemplo del comando [Get resource name](get-resource-name.md).

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 0 si el recurso no existe, de lo contrario toma el valor 1.


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 515 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


