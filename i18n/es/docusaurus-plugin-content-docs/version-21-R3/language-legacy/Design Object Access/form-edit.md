---
id: form-edit
title: FORM EDIT
slug: /commands/form-edit
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*aTable* : Table ;} *form* : Text )<br/>**FORM EDIT** ( {*aTable* : Table ;} *form* : Text ; *object* : Text )<!-- END REF-->

<!--REF #_command_.FORM EDIT.Params-->

<div class="no-index">

| Parámetros | Tipo  |                             | Descripción                                                                                                    |
| ---------- | ----- | --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| aTable     | Tabla | &#8594; | Tabla propia del formulario o Si se omite: tabla por defecto o uso del formulario del proyecto |
| form       | Text  | &#8594; | Nombre del formulario                                                                                          |
| object     | Text  | &#8594; | Nombre del objeto del formulario o nombre del grupo                                                            |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                 |
| ----------- | ------------------------------ |
| 20 R8       | Soporte del parámetro *object* |
| 18 R5       | Created                        |

</details>
</div>

## Descripción

<!--REF #_command_.FORM EDIT.Summary-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.<!-- END REF-->El comando **FORM EDIT** abre el *form* asociado a *aTable* en el editor de formularios 4D, con opcionalmente *object* seleccionado. Tenga en cuenta que debe tener acceso al entorno Diseño, de lo contrario se generará el error -9804 ("No se puede abrir el formulario").

El comando es asíncrono: vuelve inmediatamente al método que lo llama y no espera a que el formulario esté abierto.

Si se pasa el parámetro opcional *aTable*, se indica la tabla asociada a *form*. Si omite este parámetro, indica que *form* es un formulario proyecto.

En el parámetro *form*, pasa el nombre del formulario a abrir en el editor de formularios de 4D. Si pasa un nombre que no existe, se genera el error 81 ("Formulario no encontrado").

Opcionalmente, puede pasar en *object* el nombre de un objeto formulario o de un grupo para seleccionarlo automáticamente en el editor de formularios de 4D. Esta función le permite, por ejemplo, ahorrar tiempo al depurar un formulario basándose en los errores de expresión devueltos por [`Compilar proyecto`](../commands/compile-project).

Si *object* no se encuentra en *form*, el formulario se abre y no se devuelve ningún error.

Pase una cadena vacía en *object* para deseleccionar todos los objetos del *form* abierto.

## Ejemplos

Para abrir el formulario de la tabla *Contact* *Address*:

```4d
 FORM EDIT([Contacts];"Address")
```

Para abrir el formulario de proyecto *ContactList*:

```4d
 FORM EDIT("ContactList")
```

Para abrir el formulario de proyecto *ContactPage* con el objeto "name-input" seleccionado:

```4d
 FORM EDIT("ContactList"; "name-input")
```

## Ver también

[Design Object Access Commands](../commands/theme/Design_Object_Access)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1749 |
| Hilo seguro       | no   |



