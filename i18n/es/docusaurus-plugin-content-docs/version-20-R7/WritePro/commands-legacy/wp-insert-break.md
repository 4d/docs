---
id: wp-insert-break
title: WP INSERT BREAK
slug: /WritePro/commands/wp-insert-break
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT BREAK.Syntax-->**WP INSERT BREAK** ( *objRango* ; *tipoRuptura* ; *modo* {; *ActRango*} )<!-- END REF-->
<!--REF #_command_.WP INSERT BREAK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango |
| tipoRuptura | Integer | &#8594;  | Tipo de ruptura a insertar |
| modo | Integer | &#8594;  | Modo de inserción |
| ActRango | Integer | &#8594;  | Modo de actualización del rango |

<!-- END REF-->

## Descripción 

<!--REF #_command_.WP INSERT BREAK.Summary-->El comando **WP INSERT BREAK** inserta una nueva ruptura de tipo *tipoRuptura* en el rango de selección *objRango* según el modo de inserción *modo* y el parámetro *ActRango*.<!-- END REF-->

En *objRango*, pase:

* un rango, o
* un elemento (tabla / fila / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección), o
* un documento 4D Write Pro

En *tipoRuptura*, pase una de las siguientes constantes del tema *Constantes 4D Write Pro* para definir el tipo de ruptura a insertar:

| Constante                   | Tipo         | Valor | Comentario                                                                                                                |
| --------------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------- |
| wk column break             | Entero largo | 3     | Salto de columna: inserta un salto de columna                                                                             |
| wk continuous section break | Entero largo | 5     | Define un salto de sección continuo (a menudo utilizado para cambiar el número de columnas sin empezar una nueva página). |
| wk line break               | Entero largo | 0     | Salto de línea (en el mismo párrafo)                                                                                      |
| wk page break               | Entero largo | 2     | Salto de página: define una nueva página                                                                                  |
| wk paragraph break          | Entero largo | 4     | Ruptura de párrafo: define un nuevo párrafo                                                                               |
| wk section break            | Entero largo | 1     | Salto de sección: define una nueva sección                                                                                |

En el parámetro *modo*, pase una constante para indicar el modo de inserción que se utilizará para la ruptura en el rango de selección *objRango*:

| Constante  | Tipo         | Valor | Comentario                                 |
| ---------- | ------------ | ----- | ------------------------------------------ |
| wk append  | Entero largo | 2     | Inserta contenidos al final del rango      |
| wk prepend | Entero largo | 1     | Insertar contenidos al principio del rango |
| wk replace | Entero largo | 0     | Remplazar el contenido de la página        |

* Si *objRango* es un rango, you can use the optional *ActRango* puede utilizar el parámetro opcional *ActRango* para pasar una de las siguientes constantes para especificar si los contenidos insertados están incluidos en el rango resultante:  
    
| Constante             | Tipo         | Valor | Comentario                                                            |  
| --------------------- | ------------ | ----- | --------------------------------------------------------------------- |  
| wk exclude from range | Entero largo | 1     | Contenidos insertados no incluidos en el rango actualizado            |  
| wk include in range   | Entero largo | 0     | Contenido insertado incluido en el rango actualizado (predeterminado) |  
    
Si no pasa el parámetro *ActRango*, por defecto los contenidos insertados están incluidos en el rango resultante.
* Si *objRango* is not a range, *ActRango* is ignored.

## Ejemplo 1 

Al crear facturas, usted desea insertar saltos de página, excepto en la última página:  
  
```4d
 $nbInvoices:=Records in selection([INVOICE])
 For($j;1;$nbInvoices)
    ... //Procesamiento de facturas
    If($j#$nbInvoices) //Insertar un salto de página, excepto en la última página
       WP INSERT BREAK($buildRange;wk page break;wk append;wk exclude from range)
    End if
 End for
```

## Ejemplo 2 

Desea insertar un salto de sección continuo para tener una sección de una columna y una sección de dos columnas en la misma página.

1. Inserte un salto de sección continuo en la selección para crear una nueva sección:  
    
```4d  
 $range:=WP Selection range(*;"WParea")  
 WP INSERT BREAK($range;wk continuous section break;wk append)  
```  
    
    
![](../../assets/en/WritePro/commands/pict5562056.en.png)
2. Defina el conteo de columnas a 2 para la primera sección:  
    
```4d  
 $section:=WP Get section(WParea;1)  
 WP SET ATTRIBUTES($section;wk column count;2)  
```  
    
    
![](../../assets/en/WritePro/commands/pict5562058.en.png)

## Ver también 

[WP Get breaks](wp-get-breaks.md)  
[WP INSERT DOCUMENT](wp-insert-document.md)  