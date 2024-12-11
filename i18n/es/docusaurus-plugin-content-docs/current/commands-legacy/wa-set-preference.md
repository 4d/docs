---
id: wa-set-preference
title: WA SET PREFERENCE
slug: /commands/wa-set-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PREFERENCE.Syntax-->**WA SET PREFERENCE** ( {* ;} *objeto* ; *selector* ; *valor* )<!-- END REF-->
<!--REF #_command_.WA SET PREFERENCE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| selector | Integer | &#8594;  | Preferencia a modificar |
| valor | Boolean | &#8594;  | Valor de la preferencia (True = permitido,  False = no autorizado) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA SET PREFERENCE.Summary-->El comando WA SET PREFERENCE permite fijar diferentes preferencias para el área web designada por los parámetros *\** y *objeto*.<!-- END REF-->

Pase en el parámetro *selector* la preferencia a modificar y en *valor* el valor a atribuirle. Puede pasar en *selector*, una de las siguientes constantes, que se encuentran en el tema *Web Area*:

| Constante                 | Valor | Comentario                                                                                                                                                          |
| ------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4     | Autoriza la visualización del menú contextual estándar en el área web. Por defecto (cualquier máquina) = False                                                      |
| WA enable URL drop        | 101   | Cambia el icono de soltar y llama al evento *On Window Opening Denied* cuando se sueltan las URLs o los archivos en el área web. Por defecto (toda máquina) = False |
| WA enable Web inspector   | 100   | Permite la visualización del inspector web en el área. Por defecto (todo máquina) = False.                                                                          |

Para cada preferencia, pase **True** en *valor* para activarla y **False** para desactivarla.

#### Ejemplo 

Para activar la URL suéltela en el área web 'myarea':

```4d
  //en el método del formulario
 WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)
```

```4d
  //en el método de objetos del área web
 If(FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))
 End if
```

#### Ver también 

[WA GET PREFERENCE](wa-get-preference.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1041 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


