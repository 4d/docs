---
id: save-set
title: SAVE SET
slug: /commands/save-set
displayed_sidebar: docs
---

<!--REF #_command_.SAVE SET.Syntax-->**SAVE SET** ( *conjunto* ; *doc* )<!-- END REF-->
<!--REF #_command_.SAVE SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| conjunto | Text | &#8594;  | Nombre del conjunto a guardar |
| doc | Text | &#8594;  | Nombre del archivo en el cual guardar el conjunto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAVE SET.Summary-->SAVE SET guarda *conjunto* en el archivo *documento*.<!-- END REF--> 

No es necesario que *documento* tenga el mismo nombre que el conjunto. Si pasa una cadena vacía en *documento*, aparece una caja de diálogo de guardar archivos de manera que el usuario pueda introducir el nombre del documento. Con el comando LOAD SET puede cargar un conjunto guardado.

Si el usuario hace clic en Cancelar en la caja de diálogo de guardar archivo, o si se presenta un error durante la operación de guardar, la variable sistema OK toma el valor 0\. De lo contrario, toma el valor 1.

SAVE SET con frecuencia se utiliza para guardar en disco los resultados de una búsqueda larga. 

**Advertencia:** recuerde que un conjunto es una representación de una selección de registros en el momento en que se crea el conjunto. Si los registros representados por el conjunto cambian, el conjunto podría volverse inválido. Por lo tanto, un conjunto guardado en disco debe representar a un grupo de registros que no cambia con frecuencia. Múltiples eventos pueden volver un conjunto inválido: modificación o eliminación de un registro del conjunto, o modificación de los criterios que determinan la creación del conjunto. Igualmente recuerde que los conjuntos no guardan valores de campos. 

#### Ejemplo 

El siguiente ejemplo muestra la caja de diálogo estándar de guardar archivos con el fin de permitir al usuario introducir el nombre del documento que contiene el conjunto:

```4d
 SAVE SET("UnConjunto";"")
```

#### Variables y conjuntos del sistema 

Si el usuario hace clic en el botón Cancelar en la caja de diálogo de guardar archivos, o si hay un error durante la operación de carga, la variable sistema OK toma el valor 0\. De lo contrario, toma el valor 1.

#### Ver también 

[LOAD SET](load-set.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 184 |
| Hilo seguro | &check; |
| Modifica variables | OK |


