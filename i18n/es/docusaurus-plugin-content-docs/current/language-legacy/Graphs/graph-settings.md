---
id: graph-settings
title: GRAPH SETTINGS
slug: /commands/graph-settings
displayed_sidebar: docs
---

<!--REF #_command_.GRAPH SETTINGS.Syntax-->**GRAPH SETTINGS** ( *graf* : Picture ; *xmin* : Integer, Date, Time ; *xmax* : Integer, Date, Time ; *ymin* : Integer ; *ymax* : Integer ; *xprop* : Boolean ; *xgrid* : Boolean ; *ygrid* : Boolean ; *titulo* : Text {; *...titulo* : Text} )<!-- END REF-->
<!--REF #_command_.GRAPH SETTINGS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| graf | Picture | &#8594; | Área del gráfico o variable imagen |
| xmin | Integer, Date, Time | &#8594; | Valor mínimo del eje de las x para gráfico proporcional (líneas o puntos solamente) |
| xmax | Integer, Date, Time | &#8594; | Valor máximo del eje de las x para gráfico proporcional (líneas o puntos solamente) |
| ymin | Integer | &#8594; | Valor mínimo del eje y |
| ymax | Integer | &#8594; | Valor máximo del eje y |
| xprop | Boolean | &#8594; | TRUE para eje x proporcional; FALSE para eje x normal (líneas o puntos solamente) |
| xgrid | Boolean | &#8594; | TRUE para rejilla del eje x; FALSE para no rejilla en el eje x (sólo si xprop es TRUE) |
| ygrid | Boolean | &#8594; | TRUE para rejilla del eje y; FALSE para no rejilla el eje y |
| titulo | Text | &#8594; | Título(s) para las leyenda(s) del gráfico |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|15 R4|Modificado|
|14 R5|Modificado|
|14|Modificado|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.GRAPH SETTINGS.Summary-->GRAPH SETTINGS permite cambiar los parámetros de los gráficos mostrados en un formulario.<!-- END REF--> El gráfico debe haber sido definido con el comando [GRAPH](../commands/graph). GRAPH SETTINGS no tiene efecto en un gráfico de tipo sectores. Este comando debe llamarse obligatoriamente en el mismo proceso que el formulario.

**Nota:** no debe llamar este comando si el gráfico se generó utilizando el comando [GRAPH](../commands/graph) con el parámetro *grafParams* de tipo [Objeto](# "Datos estructurados como forma de objeto nativo 4D"). Consulte la descripción del comando [GRAPH](../commands/graph) para más información.

Los parámetros *xmin*, *xmax*, *ymin*, y *ymax* fijan los valores mínimos y máximos para sus respectivos ejes del gráfico. Si el valor de un par de estos parámetros es un valor nulo, (0, ?00:00:00?, ó !00/00/00!, dependiendo del tipo de dato), se utilizarán los valores del gráfico por defecto. Los parámetros *xmin* y *xmax* sólo se tienen en cuenta para gráficos proporcionales (*xprop* es **True**).

El parámetro *xprop* activa el trazado proporcional para gráficos de líneas (tipo 4), gráficos de área (tipo 5) y gráficos de puntos (tipo 6). Cuando este parámetro es TRUE, cada punto será trazado sobre el eje x de acuerdo al valore del punto, y luego sólo si los valores son numéricos, hora o fecha.

Los parámetros *xgrid* y *ygrid* muestran u ocultan las líneas de rejilla. Una rejilla para el eje x será mostrada sólo si se trata de un gráfico de puntos o de líneas proporcional.

El(los) parámetro(s) *titulo* especifican los títulos de las leyendas.

## Ejemplo 

Ver el ejemplo del comando [GRAPH](graph.md "GRAPH").

## Ver también 

[GRAPH](../commands/graph)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 298 |
| Hilo seguro | no |


