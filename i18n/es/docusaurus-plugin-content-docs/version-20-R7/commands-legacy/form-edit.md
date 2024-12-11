---
id: form-edit
title: FORM EDIT
slug: /commands/form-edit
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*tabla* ;} *form* )<!-- END REF-->
<!--REF #_command_.FORM EDIT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla dueña del formulario o Si se omite: tabla predeterminada o uso del formulario proyecto |
| form | Text | &#8594;  | Nombre del formulario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM EDIT.Summary-->El comando **FORM EDIT** abre el *form* asociado a *tabla* en el editor de formularios 4D.<!-- END REF--> Tenga en cuenta que debe tener acceso al entorno Diseño; de lo contrario, se genera el error -9804 ("No se puede abrir el formulario").

El comando es asíncrono: vuelve inmediatamente al método de llamada y no espera a que se abra el formulario.

Si pasa el parámetro opcional *tabla*, indica la tabla asociada con el *form*. Si omite este parámetro, indica que el *form* es un formulario proyecto.

En el parámetro *form*, pase el nombre del formulario para abrir en el editor de formularios 4D. Si pasa un nombre que no existe, se genera el error 81 ("Formulario no encontrado").

#### Ejemplo 

Para abrir el formulario *Contacts* table *Address*:

```4d
 FORM EDIT([Contacts];"Address")
```

Para abrir el formulario proyecto *ContactList*:

```4d
 FORM EDIT("ContactList")
```

#### Ver también 

*Comandos del tema Acceso objetos diseño*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1749 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


