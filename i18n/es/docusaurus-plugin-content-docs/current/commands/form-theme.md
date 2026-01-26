---
id: form-theme
title: FORM theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme**: Text<!-- END REF-->

<!--REF #_command_.FORM theme.Params-->

| Parámetros | Tipo |                             | Descripción                                                                                          |
| ---------- | ---- | --------------------------- | ---------------------------------------------------------------------------------------------------- |
| Resultado  | Text | &#8592; | Theme used by the current form: "Classic" or "FluentUI" (Windows) |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R2       | Añadidos       |

</details>

## Descripción

<!--REF #_command_.FORM theme.Summary-->El comando **FORM theme** devuelve el tema Windows realmente renderizado para el formulario actual: "Classic" or "FluentUI".<!-- END REF-->

The Windows form rendering theme can be defined at [application level](../settings/interface.md#use-fluent-ui-on-windows) and/or at [form level](../FormEditor/properties_FormProperties.md#form-theme-on-windows) (where it can be inherited or explicitely defined), and also depends on the [availability of specific Microsoft libraries](../FormEditor/forms.md#requirements) on the current machine at runtime. Este comando le permite saber qué tema de formulario se está ejecutando actualmente.

If there is no current form, or if the command is executed on macOS, **FORM theme** returns an empty string.

## Ver también

[Renderización Fluent UI](../FormEditor/forms.md#fluent-ui-rendering)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1832 |
| Hilo seguro       | no   |


