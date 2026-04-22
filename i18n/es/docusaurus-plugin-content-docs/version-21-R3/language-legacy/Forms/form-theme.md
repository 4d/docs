---
id: form-theme
title: FORM theme
slug: /commands/form-theme
displayed_sidebar: docs
---

<!--REF #_command_.FORM theme.Syntax-->**FORM theme**: Text<!-- END REF-->
<!--REF #_command_.FORM theme.Params-->
<div class="no-index">

| Parámetros | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado  | Text | &#8592; | Tema utilizado por el formulario actual: "Classic" o "FluentUI" (Windows) |
</div>
<!-- END REF-->


<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
|---|---|
|21 R3|Soporte de LiquidGlass en macOS |
|21 R2|Añadidos|

</details>


## Descripción

<!--REF #_command_.FORM theme.Summary-->El comando **FORM theme** devuelve el tema Windows realmente renderizado para el formulario actual: "FluentUI" (Windows), "LiquidGlass" (macOS), o "Classic" (todas las plataformas).<!-- END REF-->

Si no hay ningún formulario activo, o si el comando se ejecuta en macOS, **FORM theme** devuelve una cadena vacía.

### Windows

El tema de renderización de los formularios Windows se puede definir en el [nivel aplicación](../../settings/interface.md#use-fluent-ui-on-windows) y/o en el [nivel formulario](../../FormEditor/properties_FormProperties.md#form-theme-on-windows) (donde puede heredarse o definirse explícitamente), y también depende de la [disponibilidad de librerías Microsoft específicas](../../FormEditor/forms.md#requirements) en la máquina actual en tiempo de ejecución. Este comando le permite saber qué tema de formulario se está ejecutando actualmente. 

### macOS

A partir de la versión 21 R3, 4D y 4D Server se ejecutan de forma nativa con la interfaz Liquid Glass en macOS 26 Tahoe. Esta renderización se utiliza automáticamente y no se puede desactivar, salvo en aplicaciones basadas en el motor, como medida transitoria para dar a los desarrolladores más tiempo para adaptar sus formularios (ver la [documentación de Apple](https://developer.apple.com/documentation/BundleResources/Information-Property-List/UIDesignRequiresCompatibility) sobre la llave "UIDesignRequiresCompatibility" de *Info.plist*).



## Ver también

[Renderización Fluent UI](../../FormEditor/forms.md#fluent-ui-rendering)  
[(blog post) Despliegue Fluent UI sin esfuerzo en sus aplicaciones 4D](https://blog.4d.com/deploy-fluent-ui-effortlessly-in-your-4d-applications/)   
[(blog post) El nuevo diseño macOS Tahoe llega a sus aplicaciones 4D](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1832 |
| Hilo seguro       | no   |
