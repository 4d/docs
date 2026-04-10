---
id: form-theme
title: FORM theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme**: Text<!-- END REF-->

<!--REF #_command_.FORM theme.Params-->

<div class="no-index">

| Parámetros | Tipo |                             | Descripción                                                                                                  |
| ---------- | ---- | --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Resultado  | Text | &#8592; | Tema utilizado por el formulario actual: "Classic" o "FluentUI" (Windows) |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R2       | Añadidos       |

</details>
</div>

## Descripción

<!--REF #_command_.FORM theme.Summary-->El comando **FORM theme** devuelve el tema Windows realmente renderizado para el formulario actual: "Classic" or "FluentUI".<!-- END REF-->

El tema de renderizado de los formularios Windows puede definirse a [nivel de la aplicación](../settings/interface.md#use-fluent-ui-on-windows) y/o a [nivel del formulario](../FormEditor/properties_FormProperties.md#form-theme-on-windows) (donde puede heredarse o definirse explícitamente), y también depende de la [disponibilidad de bibliotecas Microsoft específicas](../FormEditor/forms.md#requirements) en la máquina actual en tiempo de ejecución. Este comando le permite saber qué tema de formulario se está ejecutando actualmente.

Si no hay un formulario actual, o si el comando se ejecuta en macOS, **FORM theme** devuelve una cadena vacía.

## Ver también

[Renderización Fluent UI](../FormEditor/forms.md#fluent-ui-rendering)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1832 |
| Hilo seguro       | no   |


