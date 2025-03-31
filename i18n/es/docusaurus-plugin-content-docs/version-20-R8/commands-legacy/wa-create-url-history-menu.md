---
id: wa-create-url-history-menu
title: WA Create URL history menu
slug: /commands/wa-create-url-history-menu
displayed_sidebar: docs
---

<!--REF #_command_.WA Create URL history menu.Syntax-->**WA Create URL history menu** ( {* ;} *objeto* {; *direccion*} ) : Text<!-- END REF-->
<!--REF #_command_.WA Create URL history menu.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| direccion | Integer | &#8594;  | 0 ó si se omite=Lista de los URLs anteriores, 1=Lista de los URLs siguientes |
| Resultado | Text | &#8592; | Referencia de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA Create URL history menu.Summary-->El comando **WA Create URL history menu** crea y llena un menú que puede utilizarse directamente para la navegación entre los URLs visitados durante la sesión en el área web designada por los parámetros *\** y *objeto*.<!-- END REF--> Puede utilizarse para crear una interfaz de navegación personalizada.

La información suminstrada concierne a la sesión; en otras palabras, la navegación se lleva a cabo en la misma área web siempre y cuando el formulario no se haya cerrado.

Pase en *direccion* un valor que indique la lista a recuperar. Puede utilizar una de las siguientes constantes, ubicadas en el tema *Web Area*:

| Constante        | Tipo         | Valor |
| ---------------- | ------------ | ----- |
| WA next URLs     | Entero largo | 1     |
| WA previous URLs | Entero largo | 0     |

Si omite el parámetro *direccion*, se utiliza el valor 0.

Una vez generado el menú, puede mostrarlo vía el comando de 4D [Dynamic pop up menu](dynamic-pop-up-menu.md) y puede trabajar con él utilizando los comandos estándar de gestión de menús de 4D. La cadena devuelta por este comando contiene el URL de la página visitada (ver ejemplo).

Llame el comando [RELEASE MENU](release-menu.md) para borrar un menú de historial del URL cuando ya no sea útil.

***Nota de compatibilidad:* a partir de 4D v19 R5, este comando llena un menú sólo con la URL actual de las áreas web que utilizan el motor de renderizado del sistema Windows.* 

#### Ejemplo 

El siguiente código puede estar asociado con un botón 3D con menú pop up llamado "Anterior":

```4d
 Case of
  //Single click
    :(Form event code=On Clicked)
       WA OPEN BACK URL(WA_area)
  //Click on arrow -> display of pop up
    :(Form event code=On Alternative Click)
  //Crear un menú de historial previo
       $Menu:=WA Create URL history menu(WA_area;WA previous URLs)
  //Mostrar este menú en un pop-up
       $URL:=Dynamic pop up menu($Menu)
  //Si un elemento está seleccionado
       If($URL#"")
  //Abrir la página Web
          WA OPEN URL(WA_area;$URL)
       End if
  //Borrar el menú para liberar la memoria
       RELEASE MENU($Menu)
 End case
```

#### Ver también 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[WA GET URL HISTORY](wa-get-url-history.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1049 |
| Hilo seguro | &cross; |


