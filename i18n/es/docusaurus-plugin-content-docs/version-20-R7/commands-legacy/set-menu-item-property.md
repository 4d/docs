---
id: set-menu-item-property
title: SET MENU ITEM PROPERTY
slug: /commands/set-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PROPERTY.Syntax-->**SET MENU ITEM PROPERTY** ( *menu* ; *lineaMenu* ; *propiedad* ; *valor* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PROPERTY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Referencia del menú o número de menú |
| lineaMenu | Integer | &#8594;  | Número de línea del menú o -1 para la última línea añadida al menú |
| propiedad | Text | &#8594;  | Tipo de propiedad |
| valor | Text, Number, Boolean | &#8594;  | Valor de la propiedad |
| proceso | Integer | &#8594;  | Número del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET MENU ITEM PROPERTY.Summary-->El comando **SET MENU ITEM PROPERTY** permite fijar el *valor* de la propiedad para la línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF-->

Puede pasar -1 en *lineaMenu* para especificar la última línea añadida a *menu*.

En *menu*, puede pasar una referencia de menú ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) o un número de menú. Si pasa una referencia de menú, el comando se aplicará a todas las instancias del menú en todos los procesos En este caso, si se pasa el parámetro *proceso* se ignora. Si pasa un número de menú, el comando se aplicará al menú correspondiente en la barra de menús principal del proceso actual. Si quiere designar otro proceso, pase su número en el parámetro opcional *proceso*.

En el parámetro *propiedad*, pase la propiedad cuyo valor quiere modificar y pase el nuevo valore en *valor*. Para el parámetro *propiedad*, puede utilizar una **propiedad estándar** (una de las constantes del tema “*Propiedades de ítem de menú*”) o una **propiedad personalizada**:

* **Propiedad estándar**: La mayoría de las propiedades estándar están disponibles a través de constantes en el tema "*Propiedades de ítem de menú*".  

| Constante                  | Tipo   | Valor                            | Comentario  |  
| -------------------------- | ------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Access privileges          | Cadena | 4D\_access\_group                | Activar la opción "Iniciar un nuevo proceso"<br/>0 = No, 1 = Sí<br/>                                                                                                                                                          |  
| Associated standard action | Cadena | 4D\_standard\_action             | Asociar una acción estándar a la línea de menú <br/>Ver las constantes del tema "*Acción estándar*"                                                                                                                                   |  
| n/a                        | Cadena | 4D\_execute\_without\_validating | Activar la opción [**Ejecutar sin validar**](../Menus/properties.md#ejecutar-sin-validar)** (para los elementos de menú asociados a acciones estándar). <br/>True=activar, False (por defecto)=desactivar |  
| Start a new process        | Cadena | 4D\_start\_new\_process          | Asignar un grupo de acceso al comando<br/>0 = Sin restricción<br/>>0 = Número de grupo<br/>     |  
    
En el caso de la propiedad Associated standard action, puede pasar en el parámetro *valor* un nombre de acción estándar. Para obtener una lista completa de las acciones disponibles, consulte la sección *Acciones estándar* del manual de *Diseño*. Las acciones más comunes también están disponibles como constantes en el tema *Acción estándar*.  
    
**Nota de compatibilidad:** en versiones anteriores, las constantes del tema *Valores para acción estándar asociada* se utilizaron en el parámetro *valor* (Entero largo). A partir de 4D v16 R3, son obsoletas, pero aún son soportadas por compatibilidad.  
**Nota:** si la línea de menú corresponde al título de un submenú jerárquico, la acción estándar no se llamará cuando se seleccione la línea de menú.
* **Propiedad personalizada**: en *propiedad*, puede pasar todo texto personalizado y asociar un *valor* de tipo texto, numérico o booleano. Este *valor* será almacenado con el elemento y puede ser recuperado utilizando el comando [GET MENU ITEM PROPERTY](get-menu-item-property.md). En el parámetro *propiedad* puede utilizar toda cadena personalizada, simplemente asegúrese de utilizar un título utilizado por 4D (por convención, las propiedades definidas por 4D comienzan por “4D\_”).

#### Ejemplo

```4d
  // Acción estándar
  // Asociar un elemento
  APPEND MENU ITEM(myMenu; ak standard action title)
  SET MENU ITEM PROPERTY(myMenu; -1; Associated standard action; ak copy)
  // Asociar un sub menú
  APPEND MENU ITEM(myMenu; ak standard action title)
  SET MENU ITEM PROPERTY(myMenu; -1; Associated standard action; ak font style)
```



#### Ver también 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[GET MENU ITEM PROPERTY](get-menu-item-property.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 973 |
| Hilo seguro | &cross; |


