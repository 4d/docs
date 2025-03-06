---
id: wp-get-subsection
title: WP Get subsection
slug: /WritePro/commands/wp-get-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP Get subsection.Syntax-->**WP Get subsection** ( *objRango* ) | (*wpSection* ; *subSectionType* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get subsection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o elemento |
| wpSection | Object | &#8594;  | Sección 4D Write Pro |
| subSectionType | Integer | &#8594;  | Tipo de subsección (wk first page, wk left page, o wk right page) |
| Resultado | Object | &#8592; | Subsección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get subsection.Summary-->El comando **WP Get subsection** devuelve la primera subsección intersectada por el rango o elemento *objDestino*, o a la subsección especificada *tipoSubSeccion* de la sección *wpSection*.<!-- END REF-->

* Con la primera sintaxis (utilizando el parámetro *objDestino*), el comando devuelve la primera subsección que intersecta el rango o el elemento. Si ninguna subsección intersecta el rango o el elemento, se devuelve un objeto **null**, puede pasar en *objDestino*:  
   * un rango, o  
   * un elemento (tabla / fila / párrafo / cuerpo / caja de texto / encabezado / pie de página).

Si el rango o el elemento pertenece a un encabezado, a un pie de página, o a una caja de texto, **WP Get subsection** devuelve la subsección a la que *objDestino* está asociada. Si *objDestino* no está adjunto a una una subsección, se devuelve un objeto **null**.

Si el rango o el elemento pertenece a una imagen anclada, se devuelve un error.

* Con la segunda sintaxis (utilizando los parámetros *wpSection* y *tipoSubSeccion*), el comando devuelve un objeto *wpSubSection* (hijo de *wpSection*) del tipo *tipoSubSeccion*. Pase una de las siguientes constantes en el parámetro *tipoSubSeccion*:  
    
| Constante     | Tipo         | Valor |  
| ------------- | ------------ | ----- |  
| wk first page | Entero largo | 1     |  
| wk left page  | Entero largo | 2     |  
| wk right page | Entero largo | 3     |  
    
    
Si no se define *tipoSubSeccion* para la *wpSection* especificada, el comando devuelve un objeto indefinido (no se devuelve ningún error).

#### Ejemplo 

Desea aplicar un fondo azul en las páginas de la izquierda:

```4d
 var $section;$subsection : Object
  //Recupera la referencia en la primera sección
 $section:=WP Get section(wpDoc;1)
  //Recupera la referencia en la subsección izquierda de la primera sección
 $subsection:=WP Get subsection($section;wk left page)
 
  //Si la subsección existe, configure el fondo en azul
 If($subsection#Null)
    WP SET ATTRIBUTES($subsection;wk background color;"#87CEEB")
 Else
    ALERT("Por favor, cree subsecciones izquierda y derecha")
 End if
```

#### Ver también 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get section](wp-get-section.md)  
[WP New subsection](wp-new-subsection.md)  