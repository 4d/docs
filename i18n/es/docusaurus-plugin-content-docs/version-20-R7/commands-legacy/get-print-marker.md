---
id: get-print-marker
title: Get print marker
slug: /commands/get-print-marker
displayed_sidebar: docs
---

<!--REF #_command_.Get print marker.Syntax-->**Get print marker** ( *markNum* ) : Integer<!-- END REF-->
<!--REF #_command_.Get print marker.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| markNum | Integer | &#8594;  | Número de marcador |
| Resultado | Integer | &#8592; | Posición del marcador |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get print marker.Summary-->El comando Get print marker permite obtener la posición actual de un marcador durante una impresión.<!-- END REF--> 

Este comando puede utilizarse en dos contextos:

* Durante el evento de formulario On Header, en el contexto de los comandos [PRINT SELECTION](print-selection.md "PRINT SELECTION") y [PRINT RECORD](print-record.md "PRINT RECORD").
* Durante el evento de formulario On Printing Detail, en el contexto del comando [Print form](print-form.md "Print form").

Se devuelven las coordenadas en píxeles (1 píxel = 1/72 pulgadas). 

Pase una de las constantes del tema *Área de formulario* en el parámetro *nummarc*:

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Form break0   | Entero largo | 300   |
| Form break1   | Entero largo | 301   |
| Form break2   | Entero largo | 302   |
| Form break3   | Entero largo | 303   |
| Form break4   | Entero largo | 304   |
| Form break5   | Entero largo | 305   |
| Form break6   | Entero largo | 306   |
| Form break7   | Entero largo | 307   |
| Form break8   | Entero largo | 308   |
| Form break9   | Entero largo | 309   |
| Form detail   | Entero largo | 0     |
| Form footer   | Entero largo | 100   |
| Form header   | Entero largo | 200   |
| Form header1  | Entero largo | 201   |
| Form header10 | Entero largo | 210   |
| Form header2  | Entero largo | 202   |
| Form header3  | Entero largo | 203   |
| Form header4  | Entero largo | 204   |
| Form header5  | Entero largo | 205   |
| Form header6  | Entero largo | 206   |
| Form header7  | Entero largo | 207   |
| Form header8  | Entero largo | 208   |
| Form header9  | Entero largo | 209   |

#### Ejemplo 

Consulte el ejemplo del comando [SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER"). 

#### Ver también 

[OBJECT MOVE](object-move.md)  
[SET PRINT MARKER](set-print-marker.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 708 |
| Hilo seguro | &cross; |


