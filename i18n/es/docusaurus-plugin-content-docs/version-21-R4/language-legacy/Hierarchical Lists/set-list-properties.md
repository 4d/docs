---
id: set-list-properties
title: SET LIST PROPERTIES
slug: /commands/set-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST PROPERTIES.Syntax-->**SET LIST PROPERTIES** ( *lista* : Integer ; *apariencia* : Integer {; *icono* : Integer {; *altoLinea* : Integer {; *dobleClic* : Integer {; *multiSeleccion* : Integer {; *editable* : Integer}}}}} )<!-- END REF-->
<!--REF #_command_.SET LIST PROPERTIES.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Integer | &#8594; | Número de referencia de la lista |
| apariencia | Integer | &#8594; | Estilo gráfico de la lista 1 = Lista jerárquica a la Macintosh 2 = Lista jerárquica a la Windows 0 = Aparición auto dependiendo de la plataforma |
| icono | Integer | &#8594; | ID de recurso Mac OS ‘cicn’ o 0 = icono por defecto de la plataforma |
| altoLinea | Integer | &#8594; | Altura mínima de la línea expresada en píxeles |
| dobleClic | Integer | &#8594; | Desplegar/Contraer sublista con doble-clic 0 = Sí, 1= No |
| multiSeleccion | Integer | &#8594; | Selecciones múltiples: 0 = No (por defecto), 1 = Sí |
| editable | Integer | &#8594; | 0 = Lista no editable por el usuario, 1 = Lista editable por el usuario (por defecto) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2004|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.SET LIST PROPERTIES.Summary-->El comando **SET LIST PROPERTIES** define el alto de línea y el funcionamiento de las lista jerárquica cuya referencia se pasa en el parámetro *lista*.<!-- END REF--> 

**Nota de compatibilidad:** los parámetros *apariencia* e *icono* son obsoletos, siempre deben tomar el valor 0\. 

**Nota:** si desea personalizar el icono de cada elemento en la lista, utilice el comando [SET LIST ITEM PROPERTIES](../commands/set-list-item-properties).

Si no pasa el parámetro *altoLinea*, la altura de línea de una lista jerárquica es determinada por la fuente y el tamaño de fuente utilizado por el objeto. También puede pasar en parámetro *altoLinea* la altura de línea mínima de la lista jerárquica. Si el valor que pasa es superior a la altura de las líneas definida por la fuente y el tamaño de fuente utilizado, la altura de las líneas de la lista jerárquicas será el valor pasado.Pase 0 para definir la altura por defecto.  

**Nota:** **SET LIST PROPERTIES** afecta la apariencia de los nodos en la lista jerárquica. Si prefiere personalizar el icono de cada elemento en la lista, utilice el comando [SET LIST ITEM PROPERTIES](../commands/set-list-item-properties).

El parámetro opcional *dobleClic* le permite definir que un doble clic en un elemento de la lista padre no provoque el despliegue o contracción de la sublista. Por defecto, un doble clic en un elemento de la lista padre provoca que su lista hijo se expanda o se contraiga. Sin embargo, algunas interfaces de usuario podrían necesita desactivar este mecanismo. Para hacer esto, pase 1 en el parámetro *dobleClic*.

Sólo se desactivará doble-clic. Los usuarios aún podrán expandir o contraer las sublistas haciendo clic en el nodo de la lista. 

Si omite el parámetro *dobleClic* o pasa 0, se aplica el funcionamiento por defecto. 

El parámetro opcional *multiSeleccion* le permite indicar si la lista debe aceptar selecciones múltiples.  
  
Por defecto, como en versiones anteriores de 4D, usted no puede seleccionar varios elementos de una lista jerárquica simultáneamente. Si quiere que esta función esté disponible para la lista, pase el valor 1 en el parámetro *multiSeleccion*. En ese caso, las selecciones múltiples pueden efectuarse:

\- manualmente, utilizando la combinación de teclas **Mayús**+**clic** para una selección continúa o **Ctrl**+**clic** (Windows) / **comando**+**clic** (macOS) para una selección discontinúa,  
\- por programación, utilizando los comandos [SELECT LIST ITEMS BY POSITION](../commands/select-list-items-by-position) y [SELECT LIST ITEMS BY REFERENCE](../commands/select-list-items-by-reference).  
Si pasa 0 y omite el parámetro *multiSeleccion*, se aplicará el comportamiento por defecto. 

El parámetro opcional *editable* le permite indicar si la lista debe ser editable por el usuario cuando se muestra como una lista de selección asociada a un campo o a una variable durante la entrada de datos. Cuando la lista es editable, un botón **Modificar** se añade en la ventana de la lista y el usuario puede añadir, borrar y ordenar los valores a través de un editor específico.   
Si pasa 1 u omite el parámetro *editable*, la lista será editable; si pasa 0, no será editable.

## Ejemplo 

Desea rechazar la sublista de expandir/contraer al hacer doble clic. Puede escribir en el método de formulario:

```4d
 Case of
    :(FORM Event.code=On Load)
       hlCities:=Load list("Cities") //cargar la lista de opciones Cities en el objeto de formulario hlCities
       SET LIST PROPERTIES(hlCities;0;0;0;1) //no permitir doble clic para expandir/contraer
 End case
```

## Ver también 

[GET LIST ITEM PROPERTIES](../commands/get-list-item-properties)  
[GET LIST PROPERTIES](../commands/get-list-properties)  
[SET LIST ITEM PROPERTIES](../commands/set-list-item-properties)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 387 |
| Hilo seguro | no |


