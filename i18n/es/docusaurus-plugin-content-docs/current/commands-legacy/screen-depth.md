---
id: screen-depth
title: SCREEN DEPTH
slug: /commands/screen-depth
displayed_sidebar: docs
---

<!--REF #_command_.SCREEN DEPTH.Syntax-->**SCREEN DEPTH** ( *profundidad* ; *color* {; *pantalla*} )<!-- END REF-->
<!--REF #_command_.SCREEN DEPTH.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| profundidad | Integer | &#8592; | Profundidad de la pantalla (número de colores = 2 ^ profundidad) |
| color | Integer | &#8592; | 1 = Pantalla color 0 = Pantalla blanco y negro o escala de grises |
| pantalla | Integer | &#8594;  | Número de la pantalla, o pantalla principal si se omite |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SCREEN DEPTH.Summary-->El comando SCREEN DEPTH devuelve en los parámetros *profundidad* y *color* la información sobre el monitor.<!-- END REF--> 

Después de la llamada:

* Se devuelve la profundidad de la pantalla en *profundidad*. La profundidad de la pantalla elevada como potencia de 2 permite conocer el número de colores mostrados en su monitor. Por ejemplo, si su monitor está definido para 256 colores (2^8), la profundidad de su pantalla es 8\. Las siguientes son constantes predefinidas ofrecidas por 4D:

| Constante                 | Tipo         | Valor |
| ------------------------- | ------------ | ----- |
| Black and white           | Entero largo | 0     |
| Four colors               | Entero largo | 2     |
| Sixteen colors            | Entero largo | 4     |
| Two fifty six colors      | Entero largo | 8     |
| Thousands of colors       | Entero largo | 16    |
| Millions of colors 24 bit | Entero largo | 24    |
| Millions of colors 32 bit | Entero largo | 32    |
  
  
Si el monitor está configurado para mostrar colores, se devuelve *1* en *color*. Si el monitor está configurado para mostrar escala de grises, se devuelve *0* en *color*. Note que este valor es significativo en la plataforma Macintosh. Las siguientes son constantes predefinidas ofrecidas por 4D: 

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is gray scale | Entero largo | 0     |
| Is color      | Entero largo | 1     |

  
* El parámetro opcional *pantalla* especifica el monitor para el cual quiere obtener la información. Si omite el parámetro *pantalla*, el comando devuelve la profundidad de la pantalla principal.

#### Ejemplo 

Su aplicación muestra varios gráficos a color. Puede escribir en alguna parte en su base:

```4d
 SCREEN DEPTH($vlProf;$vlColor)
 If($vlProf<8)
    ALERT("Los formularios se verían mejor si el monitor"+" estuviera configurado para mostrar 256 colores o más.")
 End if
```

#### Ver también 

[Count screens](count-screens.md)  
