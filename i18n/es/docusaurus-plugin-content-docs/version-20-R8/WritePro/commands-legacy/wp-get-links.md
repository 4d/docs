---
id: wp-get-links
title: WP Get links
slug: /WritePro/commands/wp-get-links
displayed_sidebar: docs
---

<!--REF #_command_.WP Get links.Syntax-->**WP Get links** ( *objRango* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get links.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |
| Resultado | Collection | &#8592; | Colección de enlaces |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get links.Summary-->**WP Get links** devuelve la colección de todos los enlaces definidos en *objRango*.<!-- END REF-->

En el parámetro *objRango*, puede pasar:

* un rango, o
* un elemento (tabla / línea / párrafo / cuerpo / encabezado / pie de página / sección / subsección / caja de texto), o
* un documento 4D Write Pro

**Valor devuelto**

**WP Get links** devuelve una colección de objetos de enlace, cada uno de los cuales contiene una o más de las siguientes propiedades:

| **Propiedad**   | **Tipo**        | **Descripción**                                                      | **Disponible para**                |
| --------------- | --------------- | -------------------------------------------------------------------- | ---------------------------------- |
| \[ \].url       | Texto           | Contenido de destino del enlace                                      | enlaces url                        |
| \[ \].method    | Texto           | Nombre del método del enlace                                         | enlaces del método                 |
| \[ \].parameter | Texto \| Número | Valor del parámetro del usuario pasado al enlace                     | enlaces del método (si se utiliza) |
| \[ \].bookmark  | Texto           | Nombre del marcador para el enlace                                   | enlaces de marcadores              |
| \[ \].range     | Objeto          | Rango de la etiqueta del enlace. Ver *Comandos de gestión de rangos* | todos los enlaces                  |

#### Ejemplo 

Usted desea cambiar el color de todas las etiquetas de enlace url en un documento 4D Write Pro:

```4d
 var $links : Collection
 var $link : Object
 
 $links:=WP Get links(myDoc)
 
 For each($link;$links)
    If($link.url#Null) //it's a url link
       WP SET ATTRIBUTES($link.range;wk text color;"red")
    End if
 End for each
```

#### Ver también 

  
[WP Get formulas](wp-get-formulas.md)  
[WP SET LINK](wp-set-link.md)  