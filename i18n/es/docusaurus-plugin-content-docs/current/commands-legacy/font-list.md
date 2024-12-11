---
id: font-list
title: FONT LIST
slug: /commands/font-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT LIST.Syntax-->**FONT LIST** ( *fuentes* {; *tipoLista*} )<!-- END REF-->
<!--REF #_command_.FONT LIST.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fuentes | Text array | &#8592; | Array de nombres de fuentes disponibles |
| tipoLista | Integer, * | &#8594;  | Tipo de lista de fuente a devolver o * para devolver los nombres de fuente en OS X |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FONT LIST.Summary-->El comando FONT LIST llena el array Texto *fuentes* con los nombres de las fuentes vectoriales disponibles en su sistema.<!-- END REF-->

El parámetro *tipoLista* permite designar el tipo de la lista de fuente a obtener. Para hacerlo, puede pasar una de las siguientes constantes en el parámetro *tipoLista*, disponible en el tema "*Tipo de lista de las fuentes*":

| Constante      | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Favorite fonts | Entero largo | 1     | *fuentes* contiene la lista de fuentes favoritas.<br/>- Bajo de Windows: lista de nombres de familias de fuentes activas en el panel de control de Windows.<br/>- Bajo OS X: lista de nombres de familias de fuentes de la colección "com.apple.Favorites" que se encuentra en el panel de control, llamada "Favorites" en Inglés, "Favoris" en francés, "Favoriten" en alemán, etc. Esta colección puede estar en blanco si el usuario no ha añadido fuentes favoritas. |
| Recent fonts   | Entero largo | 2     | *fuentes* contiene la lista de fuentes recientes (lista de fuentes utilizadas durante la sesión 4D). Esta lista es utilizada particularmente por las áreas de texto multiestilo.                                                                                                                                                                                                                                                                                                         |
| System fonts   | Entero largo | 0     | *fuentes* contiene la lista de todas las fuentes del sistema. Opción por defecto si se omite *tipoLista*.                                                                                                                                                                                                                                                                                                                                                                                |

Bajo Mac OS X, cuando se pasa el parámetro opcional *\**, el comando llena el array *fuentes* con los nombres de las fuentes y no con los nombres de las familias de fuentes. La operación por defecto simplifica la gestión programada de áreas de texto enriquecidas, que utilizan familias de fuente. Si pasa el parámetro *\**, los nombres de fuente, por ejemplo "Arial bold", "Arial italic", "Arial narrow italic," son devueltos en lugar de las familias, tales como "Arial", "Arial black" o "Arial narrow".

Bajo Windows, el parámetro *\** no tiene efecto. El comando devuelve siempre las familias de fuentes.

**Nota:** bajo Mac OS, si utiliza el resultado de este comando con el comando [ST SET ATTRIBUTES](st-set-attributes.md) en un área de texto multiestilo, no debe pasar el parámetro *\** (sólo familias de fuentes soportadas como Attribute font name). Esta limitación no aplica a áreas 4D Write Pro, que aceptan fuentes o nombres de familias de fuentes. 

##### Fuentes vectoriales 

Este comando devuelve sólo las fuentes escalables. No se recomienda el uso de fuentes no vectoriales (es decir, fuentes de mapa de bits) para el diseño de interfaces, ya que se basan en una tecnología obsoleta y sufren de limitaciones en cuanto a las variaciones de tamaño. No son compatibles con las funcionalidades más recientes de 4D como las áreas 4D Write Pro.

En OS X, este principio aplica desde OS X 10.4 (las fuentes de mapa de bits QuickDraw son obsoletas a partir de esta versión).

Bajo Windows, este principio se aplica comenzando con 4D v15 R4\. Con el fin de ayudar a los desarrolladores a seleccionar sólo fuentes modernas para sus interfaces, sólo las fuentes vectoriales "TrueType" u "OpenType" se listan. Por ejemplo, "ASI\_Mono", "MS Sans Serif" y "Syistem" ya no están disponibles. Además, también se ignoran los nombres GDI; sólo los nombres de familias de fuente DirectWrite son soportados. Por ejemplo, las fuentes "Arial Black" o "Segoe UI Black" no están en la lista; Sólo "Arial" y "Segoe" se devuelven.

  
**Notas de compatibilidad para Windows:**

* Las fuentes de mapa de bits se pueden seguir utilizando en sus formularios 4D (excepto en las áreas 4D Write Pro). Simplemente se eliminan de la lista devuelta por este comando. Sin embargo, para asegurar la compatibilidad con futuras versiones de 4D y Windows, se recomienda utilizar sólo las familias de fuentes DirectWrite.
* Dado que las fuentes de mapa de bits se filtran desde el parámetro *fuentes* en Windows, la lista resultante es diferente en aplicaciones 4D v15 R4 y superiores, en comparación con versiones anteriores. Por favor asegúrese de adaptar su código si utiliza este comando para seleccionar un tipo de letra no vectorial.

#### Ejemplo 1 

En un formulario, usted quiere obtener una lista desplegable que muestre las fuentes disponibles en el sistema. El método de la lista desplegable es el siguiente: 

```4d
 Case of
    :(FORM Event=On Load)
       ARRAY TEXT(asFuente;0)
       FONT LIST(asFuente)
  // ...
 
 End case
```

#### Ejemplo 2 

Usted quiere obtener una lista de fuentes recientes:

```4d
 FONT LIST($arrFonts;Recent fonts)
```

#### Ver también 

[FONT STYLE LIST](font-style-list.md)  
[OBJECT SET FONT](object-set-font.md)  
[SET RECENT FONTS](set-recent-fonts.md)  
[ST SET ATTRIBUTES](st-set-attributes.md)  
*Tipo de lista de las fuentes*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 460 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


