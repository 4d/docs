---
id: forms
title: Formularios
---

Los formularios ofrecen la interfaz a través de la cual se introduce, modifica e imprime la información en una aplicación de escritorio. Los usuarios interactúan con los datos de una base de datos mediante formularios e imprimen informes utilizando formularios. Los formularios pueden utilizarse para crear cajas de diálogo personalizadas, paletas o toda ventana personalizada.

![](../assets/en/FormObjects/form1.png)

Los formularios también pueden contener otros formularios a través de las siguientes funcionalidades:

- [subform objects](FormObjects/subform_overview.md)
- [inherited forms](properties_FormProperties.md#inherited-forms)

## Creación de formularios

Puede añadir o modificar formularios 4D utilizando los siguientes elementos:

- **4D Developer interface:** Create new forms from the **File** menu or the **Explorer** window.
- **Form Editor**: Modify your forms using the **[Form Editor](FormEditor/formEditor.md)**.
- **JSON code:** Create and design your forms using JSON and save the form files at the [appropriate location](Project/architecture.md#sources-folder). Ejemplo:

```
{
    "windowTitle": "Hello World",
    "windowMinWidth": 220,
    "windowMinHeight": 80,
    "method": "HWexample",
    "pages": [
        null,
        {
            "objects": {
                "text": {
                "type": "text",
                "text": "Hello World!",
                "textAlign": "center",
                "left": 50,
                "top": 120,
                "width": 120,
                "height": 80
                },
                "image": {
                "type": "picture",
                "pictureFormat": "scaled",
                "picture": "/RESOURCES/Images/HW.png",
                "alignment":"center", 
                "left": 70,
                "top": 20, 
                "width":75, 
                "height":75        
                },
                "button": {
                "type": "button",
                "text": "OK",
                "action": "Cancel",
                "left": 60,
                "top": 160,


                "width": 100,
                "height": 20
                }
            }
        }
    ]
}
```

## Formulario proyecto y formulario tabla

Hay dos categorías de formularios:

- **Project forms** - Independent forms that are not attached to any table. Están pensados, sobre todo, para crear cajas de diálogo de interfaz, al igual que componentes. Los formularios proyecto pueden utilizarse para crear interfaces que cumplan fácilmente con los estándares del sistema operativo.

- **Table forms** - Attached to specific tables and thus benefit from automatic functions useful for developing applications based on databases. Normalmente, una tabla tiene formularios de entrada y salida separados.

Normalmente, se selecciona la categoría del formulario al crearlo, pero se puede cambiar después.

## Páginas formulario

Cada formulario consta de al menos dos páginas:

- una página 1: una página principal, mostrada por defecto
- una página 0: una página de fondo, cuyo contenido se muestra en todas las demás páginas.

Puede crear varias páginas para un formulario de entrada. Si tiene más campos o variables de los que caben en una pantalla, puede crear páginas adicionales para mostrarlos. Las páginas múltiples le permiten hacer lo siguiente:

- Coloque la información más importante en la primera página y la menos importante en otras.
- Organice cada tema en su propia página.
- Reduce or eliminate scrolling during data entry by setting the [entry order](../FormEditor/formEditor.html#data-entry-order).
- Deje espacio alrededor de los elementos del formulario para lograr un diseño de pantalla atractivo.

Las páginas múltiples son útiles sólo para los formularios de entrada. No son para imprimir. Cuando se imprime un formulario de varias páginas, sólo se imprime la primera.

No hay restricciones en el número de páginas que puede tener un formulario. El mismo campo puede aparecer un número ilimitado de veces en un formulario y en todas las páginas que desee. Sin embargo, cuantas más páginas tenga un formulario, más tiempo tardará en mostrarse.

Un formulario multipáginas tiene una página de fondo y varias páginas de visualización. Los objetos que se colocan en la página de fondo pueden ser visibles en todas las páginas de visualización, pero sólo se pueden seleccionar y editar en la página de fondo. En los formularios multipágina, debe colocar su paleta de botones en la página de fondo. También es necesario incluir uno o más objetos en la página de fondo que ofrezcan las herramientas de navegación para el usuario.

## Formularios heredados

4D forms can use and be used as "inherited forms," meaning that all of the objects from _Form A_ can be used in _Form B_. In this case, _Form B_ "inherits" the objects from _Form A_.

Las referencias a un formulario heredado están siempre activas: si se modifica un elemento de un formulario heredado (estilos de botón, por ejemplo), se modificarán automáticamente todos los formularios que utilicen este elemento.

Todos los formularios (formularios tabla y formularios proyecto) pueden ser designados como un formulario heredado. Sin embargo, los elementos que contienen deben ser compatibles con el uso en diferentes tablas de la base de datos.

Cuando se ejecuta un formulario, los objetos se cargan y combinan en el siguiente orden:

1. Página cero del formulario heredado
2. Página 1 del formulario heredado
3. Página cero del formulario abierto
4. Página actual del formulario abierto.

This order determines the default [entry order](../FormEditor/formEditor.html#data-entry-order) of objects in the form.

> Sólo las páginas 0 y 1 del formulario heredado pueden aparecer en otros formularios.

Las propiedades y el método de un formulario no se tienen en cuenta cuando ese formulario se utiliza como formulario heredado. Por otro lado, se llaman los métodos de los objetos que contiene.

To define an inherited form, the [Inherited Form Name](properties_FormProperties.md#inherited-form-name) and [Inherited Form Table](properties_FormProperties.md#inherited-form-table) (for table form) properties must be defined in the form that will inherit something from another form.

A form can inherit from a project form, by setting the [Inherited Form Table](properties_FormProperties.md#inherited-form-table) property to `\<None>` in the Property List (or " " in JSON).

To stop inheriting a form, select `\<None>` in the Property List (or " " in JSON) for the [Inherited Form Name](properties_FormProperties.md#inherited-form-name) property.

> Es posible definir un formulario heredado en un formulario que eventualmente se utilizará como formulario heredado para un tercer formulario. La combinación de objetos se realiza de forma recursiva. 4D detecta los bucles recursivos (por ejemplo, si el formulario [table1]form1 se define como el formulario heredado de [table1]form1, es decir, él mismo) e interrumpe la cadena de formularios.

## Propiedades soportadas

[Associated Menu Bar](properties_Menu.md#associated-menu-bar) - [Fixed Height](properties_WindowSize.md#fixed-height) - [Fixed Width](properties_WindowSize.md#fixed-width) - [Form Break](properties_Markers.md#form-break) - [Form Detail](properties_Markers.md#form-detail) - [Form Footer](properties_Markers.md#form-footer) - [Form Header](properties_Markers.md#form-header) - [Form Name](properties_FormProperties.md#form-name) - [Form Type](properties_FormProperties.md#form-type) - [Inherited Form Name](properties_FormProperties.md#inherited-form-name) - [Inherited Form Table](properties_FormProperties.md#inherited-form-table) - [Maximum Height](properties_WindowSize.md#maximum-height-minimum-height) - [Maximum Width](properties_WindowSize.md#maximum-width-minimum-width) - [Method](properties_Action.md#method) - [Minimum Height](properties_WindowSize.md#maximum-height-minimum-height) - [Minimum Width](properties_WindowSize.md#maximum-width-minimum-width) - [Pages](properties_FormProperties.md#pages) - [Print Settings](properties_Print.md#settings) - [Published as Subform](properties_FormProperties.md#published-as-subform) - [Save Geometry](properties_FormProperties.md#save-geometry) - [Window Title](properties_FormProperties.md#window-title)
