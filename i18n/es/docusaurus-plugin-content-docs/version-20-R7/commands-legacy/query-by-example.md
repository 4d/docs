---
id: query-by-example
title: QUERY BY EXAMPLE
slug: /commands/query-by-example
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY EXAMPLE.Syntax-->**QUERY BY EXAMPLE** ( {*tabla*}{;}{*} )<!-- END REF-->
<!--REF #_command_.QUERY BY EXAMPLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual debe devolverse una selección de  registros , o Tabla por defecto, si se omite |
| * | Operador | &#8594;  | Si se pasa, no se muestra la barra de desplazamiento |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QUERY BY EXAMPLE.Summary-->QUERY BY EXAMPLE efectúa la misma acción que el comando de menú Búsqueda por formulario.<!-- END REF-->.. en el entorno Diseño. Este comando muestra el formulario de entrada actual como ventana de búsqueda. QUERY BY EXAMPLE busca en *tabla* los datos que el usuario introduce en la ventana de búsqueda. El formulario debe contener los campos que usted quiere utilizar para efectuar la búsqueda. La búsqueda se optimiza; los campos indexados se utilizan automáticamente para optimizar la búsqueda.

Ver el manual de Diseño de 4D para mayor información sobre la utilización del comando de menú Búsqueda por formulario... del entorno Diseño. 

#### Ejemplo 

El método en este ejemplo muestra el formulario miBusqueda. Si el usuario acepta el formulario y ejecuta la búsqueda (es decir, si la variable sistema OK toma el valor 1), se muestran los registros que cumplen con el criterio de búsqueda:

```4d
 FORM SET INPUT([Personas];"miBusqueda") // Pasar al formulario de entrada
 QUERY BY EXAMPLE([Personas]) // Mostrar el formulario y realizar la búsqueda
 If(OK=1) // Si el usuario valida la búsqueda
    DISPLAY SELECTION([Personas]) // Mostrar los registros
 End if
```

#### Variables y conjuntos del sistema 

Si el usuario hace clic en el botón Aceptar o presionan la tecla Enter, la variable sistema OK toma el valor 1 y la búsqueda se realiza. Si el usuario hace clic en el botón Cancelar o presiona la tecla de anulación, la variable sistema OK toma el valor 0 y la búsqueda se cancela.

#### Ver también 

[ORDER BY](order-by.md)  
[QUERY](query.md)  