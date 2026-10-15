---
id: new-list
title: New list
slug: /commands/new-list
displayed_sidebar: docs
---

<!--REF #_command_.New list.Syntax-->**New list**  : Integer<!-- END REF-->
<!--REF #_command_.New list.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de referencia de lista |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.New list.Summary-->New list crea una nueva lista jerárquica vacía en memoria y devuelve su número de referencia único.<!-- END REF--> 

**Advertencia:** las listas jerárquicas residen en la memoria. Cuando terminé de utilizar una lista jerárquica, es importante borrarla para liberar memoria, utilizando el comando CLEAR LIST.

Otros comandos le permiten crear listas jerárquicas:

* [Copy list](copy-list.md "Copy list") duplica una lista existente.
* [Load list](load-list.md "Load list") crea una nueva lista cargando una lista creada (manualmente o por programación) en el editor de listas del entorno Diseño.
* [BLOB to list](blob-to-list.md "BLOB to list") crea una lista a partir del contenido de un BLOB en el cual una lista fue previamente guardada.

Una vez haya creado una lista jerárquica utilizando New list, puede:

* Añadir elementos a esa lista, utilizando el comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST") o INSERT LIST ITEM.
* Borrar elementos de esa lista, utilizando el comando [DELETE FROM LIST](delete-from-list.md "DELETE FROM LIST").

## Ejemplo 

Ver el ejemplo del comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

## Ver también 

[APPEND TO LIST](../commands/append-to-list)  
[BLOB to list](../commands/blob-to-list)  
[CLEAR LIST](../commands/clear-list)  
[Copy list](../commands/copy-list)  
[DELETE FROM LIST](../commands/delete-from-list)  
[INSERT IN LIST](../commands/insert-in-list)  
[LIST TO BLOB](../commands/list-to-blob)  
[Load list](../commands/load-list)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 375 |
| Hilo seguro | no |


