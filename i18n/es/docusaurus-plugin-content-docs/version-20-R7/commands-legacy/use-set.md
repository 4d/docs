---
id: use-set
title: USE SET
slug: /commands/use-set
displayed_sidebar: docs
---

<!--REF #_command_.USE SET.Syntax-->**USE SET** ( *conjunto* )<!-- END REF-->
<!--REF #_command_.USE SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| conjunto | Text | &#8594;  | Nombre del conjunto a utilizar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.USE SET.Summary-->USE SET crea, con los registros de *conjunto,* una nueva selección actual para la tabla a la cual pertenece *conjunto*.<!-- END REF--> 

Cuando crea un conjunto, la posición del registro actual se guarda. USE SET recupera esta información y hace del registro el nuevo registro actual. Si borra este registro antes de ejecutar USE SET, 4D selecciona como registro actual el primer registro del conjunto. Los comandos de Conjuntos [INTERSECTION](intersection.md "INTERSECTION"), [UNION](union.md "UNION"), [DIFFERENCE](difference.md "DIFFERENCE"), y [ADD TO SET](add-to-set.md "ADD TO SET") reinicializan el registro actual. Igualmente, si usted crea un conjunto que no contiene la posición del registro actual, USE SET selecciona el primer registro en el conjunto como registro actual.

**Advertencia:** recuerde que un conjunto es la representación de una selección de registros en un momento dado, el momento de la creación del conjunto. Si los registros que el conjunto representa se modifican, el conjunto podría no ser válido. Por lo tanto, un conjunto guardado en el disco debe representar a un grupo de registros que no cambia frecuentemente. Muchos eventos pueden invalidar la validez de un conjunto, como por ejemplo la supresión o modificación de un registro del conjunto, o la modificación de los criterios de creación del conjunto.

#### Ejemplo 

El siguiente ejemplo utiliza [LOAD SET](load-set.md "LOAD SET") para cargar un conjunto de sitios de la empresa Acme ubicada en Nueva York. Luego utiliza USE SET para hacer del conjunto la selección actual:

```4d
 LOAD SET([Empresas];"NY Acme";"NYAcmeSt") // Cargar el conjunto en memoria
 USE SET("NY Acme") // Cambiar la selección actual a NY Acme
 CLEAR SET("NY Acme") // Borrar el conjunto de la memoria
```

#### Ver también 

[CLEAR SET](clear-set.md)  
[LOAD SET](load-set.md)  