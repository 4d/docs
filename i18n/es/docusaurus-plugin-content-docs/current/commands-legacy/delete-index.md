---
id: delete-index
title: DELETE INDEX
slug: /commands/delete-index
displayed_sidebar: docs
---

<!--REF #_command_.DELETE INDEX.Syntax-->**DELETE INDEX** ( Ptrcamp | nomIndex {; *} )<!-- END REF-->
<!--REF #_command_.DELETE INDEX.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Ptrcamp &#124; nomIndex | Puntero, Cadena | &#8594;  | Puntero al campo del cual borrar los índices o Nombre del índice a borrar |
| * | Operador | &#8594;  | Si se pasa = operación asincrónica |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELETE INDEX.Summary-->El comando DELETE INDEX se utiliza para borrar uno o más índices existentes en la base.<!-- END REF-->  
Puede pasar en parámetro un puntero o un campo o el nombre de un índice en el parámetro: 

* Si pasa un puntero a un campo (*ptrcampo*), todos los índices asociados al campo serán borrados. Puede tratarse de índices de palabras claves o de índices estándar. Sin embargo, si el campo está incluido en uno o más índices compuestos, no se borrarán (debe pasar un nombre de índice).
* Si pasa el nombre de un índice (*nomIndex*), sólo se borrará el índice designado. Puede tratarse de índices de palabras claves, índices estándar o índices compuestos.

El parámetro opcional *\**, cuando se pasa, permite efectuar la desindexación en modo asincrónico. En este modo, el método de origen continúa su ejecución después de la llamada al comando, sin importar si la eliminación del índice a terminado o no.

Si no existe un índice correspondiente a Ptrfcamp o *nomIndex*, el comando no hace nada.

#### Nota para despliegue 

Dado que este comando modifica la estructura de la base de datos, no puede utilizarse en el contexto de una aplicación empaquetada de sólo lectura (archivo .4dc instalado en la carpeta Archivos de programa o archivo .4dz). 

#### Ejemplo 

Este ejemplo ilustra las dos sintaxis del comando:

```4d
  //Eliminación de todos los índices relacionados con el campo Apellido
 DELETE INDEX(->[Clientes]Apellido)
  //Eliminación del índice llamado “CPCiudad”
 DELETE INDEX("CPCiudad")
```

#### Ver también 

[CREATE INDEX](create-index.md)  
[PAUSE INDEXES](pause-indexes.md)  
[SET INDEX](set-index.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 967 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


