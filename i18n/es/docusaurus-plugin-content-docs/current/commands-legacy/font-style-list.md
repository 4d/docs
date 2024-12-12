---
id: font-style-list
title: FONT STYLE LIST
slug: /commands/font-style-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT STYLE LIST.Syntax-->**FONT STYLE LIST** ( *familiaFuiente* ; *listaEstilosFuente* ; *listaNomsFuente* )<!-- END REF-->
<!--REF #_command_.FONT STYLE LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| familiaFuiente | Text | &#8594;  | Nombre de la familia de fuente |
| listaEstilosFuente | Text array | &#8592; | Lista de estilos fuente soportados por la familia de fuente |
| listaNomsFuente | Text array | &#8592; | Lista de nombres completos soportados por la familia de fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FONT STYLE LIST.Summary-->El comando **FONT STYLE LIST** devuelve la lista de estilos y la lista de nombres completos soportados por la familia de fuente designada por el parámetro *familiaFuente*.<!-- END REF--> Este comando le permite diseñar interfaces de manejo de fuentes y estilos, en particular en el contexto de las áreas 4D Write Pro (ver *Referencia 4D Write Pro*).

En *familiaFuente*, pase el nombre de la familia de fuente para el que desea conocer los estilos y nombres de fuentes soportados.

En *listaEstilosFuente*, pase un array texto para ser llenado con la lista de estilos de fuente soportados por la *familiaFuente*. Los estilos se devuelven utilizando sus nombres localizados (es decir, un elemento "cursiva" será devuelto como "Itálico" en un sistema español), por lo que se puede construir un menú pop-up "Estilos" localizado, por ejemplo.

En *listaNomsFuente*, pase un array texto para ser llenado con la lista completa de nombres de fuentes soportadas por la *familiaFuente*. A diferencia del array *listaEstilosFuente*, el array *listaNomsFuente* devuelve los valores no localizados, es decir, los nombres de fuentes basados en la identificación del sistema. Por lo tanto, los nombres de fuentes serán independientes del idioma del sistema. Los elementos de este array son cadenas destinadas a ser utilizadas con el atributo wk font del comando 4D Write Pro   *WP SET ATTRIBUTES*. Al utilizar esta funcionalidad, los documentos 4D Write Pro pueden almacenar nombres de fuente y que luego se abrirán en máquinas utilizando cualquier lenguaje del sistema sin problemas de fuentes.

 Si la *familiaFuente* no se encuentra en la máquina, los arrays se devuelven vacíos. Para obtener la lista de familias de fuentes disponibles en la máquina, utilice el comando [FONT LIST](font-list.md).

#### Ejemplo 

Usted desea seleccionar estilos de la familia de fuentes "Verdana" (si está disponible):

```4d
 ARRAY TEXT($aTfonts;0)
 ARRAY TEXT($aTStyles;0)
 ARRAY TEXT($aTnames;0)
 var $numStyle : Integer
 
 FONT LIST($aTfonts)
 $numStyle:=Find in array($aTfonts;"Verdana")
 If($numStyle#0)
    FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)
 End if
 
  //Por ejemplo, los arrays resultantes son:
  //$aTStyles{1}="Normal"
  //$aTStyles{1}="Italic"
  //$aTStyles{1}="Bold"
  //$aTStyles{1}="Bold Italic"
 
  // $aTnames{1}="Verdana"
  // $aTnames{1}="Verdana Italic"
  // $aTnames{1}="Verdana Bold"
  // $aTnames{1}="Verdana Bold Italic"
```

#### Ver también 

[FONT LIST](font-list.md)  