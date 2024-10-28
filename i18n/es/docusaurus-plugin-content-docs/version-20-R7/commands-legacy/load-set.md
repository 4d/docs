---
id: load-set
title: LOAD SET
slug: /commands/load-set
displayed_sidebar: docs
---

<!--REF #_command_.LOAD SET.Syntax-->**LOAD SET** ( {*tabla* ;} *conjunto* ; *doc* )<!-- END REF-->
<!--REF #_command_.LOAD SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a la cual pertenece el conjunto o Tabla por defecto si se omite |
| conjunto | Text | &#8594;  | Nombre del conjunto a crear en memoria |
| doc | Text | &#8594;  | Documento que contiene el conjunto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LOAD SET.Summary-->LOAD SET carga un conjunto desde el archivo *documento,* creado con el comando [SAVE SET](save-set.md "SAVE SET").<!-- END REF-->

El conjunto guardado en *documento* debe aplicar a *tabla*. El conjunto creado en memoria se sobrescribe si ya existe.

El parámetro *documento* es el nombre del documento disco que contiene el conjunto. El documento no necesita tener el mismo nombre del conjunto. Si pasa una cadena vacía en *documento*, se muestra una caja de diálogo estándar de apertura de archivos, permitiendo al usuario elegir el conjunto a cargar.

Recuerde que un conjunto es una representación de una selección de registros en el momento en que el conjunto se crea. Si los registros representados por el conjunto cambian, el conjunto podría volverse inválido. Por lo tanto, un conjunto cargado desde un disco debe representar a un grupo de registros que no cambia con frecuencia. Múltiples eventos pueden volver un conjunto inválido: modificación o eliminación de un registro del conjunto, o modificación de los criterios que determinan la creación del conjunto.

#### Ejemplo 

El siguiente ejemplo utiliza LOAD SET para cargar un conjunto de sedes de la empresa Acme en Nueva York:

```4d
 LOAD SET([Empresas];"NY Acme";"NYAcmeSt") // Cargar el conjunto en memoria
 USE SET("NY Acme") // Cambiar la selección actual a NY Acme
 CLEAR SET("NY Acme") // Borrar el conjunto de la memoria
```

#### Variables y conjuntos del sistema 

Si el usuario hace clic en Cancelar en la caja de diálogo de abrir archivos, o si se produce un error durante la carga, la variable sistema OK toma el valor 0\. De lo contrario, toma el valor 1.

#### Ver también 

[SAVE SET](save-set.md)  