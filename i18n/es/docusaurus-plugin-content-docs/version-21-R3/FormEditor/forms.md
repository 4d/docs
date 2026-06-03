---
id: forms
title: Formularios
---

Los formularios ofrecen la interfaz a través de la cual se introduce, modifica e imprime la información en una aplicación de escritorio. Los usuarios interactúan con los datos de una base de datos mediante formularios e imprimen informes utilizando formularios. Los formularios pueden utilizarse para crear cajas de diálogo personalizadas, paletas o toda ventana personalizada.

![](../assets/en/FormObjects/form1.png)

Los formularios también pueden contener otros formularios a través de las siguientes funcionalidades:

- [objetos de subformulario](FormObjects/subform_overview.md)
- [formularios heredados](./properties_FormProperties.md#inherited-form-name)

## Creación de formularios

Puede añadir o modificar formularios 4D utilizando los siguientes elementos:

- **La interfaz 4D Developer:** cree nuevos formularios desde el menú **Archivo** o la ventana del **Explorador**.
- **El editor de formularios**: modifique sus formularios utilizando el **[editor de formularios](FormEditor/formEditor.md)**.
- **El código JSON:** cree y diseñe sus formularios utilizando JSON y guarde los archivos de los formularios en la [ubicación adecuada](Project/architecture#sources). Ejemplo:

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

## Impresión de formularios

En las aplicaciones de escritorio 4D, los formularios pueden imprimirse utilizando los diferentes [comandos del tema **Imprimir**](../commands/theme/Printing).

### Print rendering engine

4D utiliza un motor de renderizado de impresión específico para generar salidas con un diseño adaptado a la impresión. Incluye las siguientes características principales:

- Interactive widgets such as buttons, toggles, dropdowns, etc. and modern UI effects such as glass, blur, transparency, or shadow effects are converted into adapted static representations and flattened into printable styles, so that the document remains readable and professional once printed.
- La estructura del diseño, el espaciado y la alineación se conservan para que el documento impreso refleje la estructura lógica del formulario en pantalla.
- Se produce la misma salida, tanto si el formulario se imprime desde macOS como desde Windows.

Por ejemplo, el siguiente formulario:

![](../assets/en/FormEditor/screen_rendering.png)

... se imprimirá con este renderizado:

![](../assets/en/FormEditor/print_rendering.png)

:::tip Entrada de blog relacionada

[Printing Modern Interfaces with Clean, Consistent Output](https://blog.4d.com/printing-modern-interfaces-with-clean-consistent-output)

:::

### Legacy print renderer

En versiones anteriores a 4D 21 R3, se utilizaba otro renderizador de impresión. Este renderizador heredado simplemente dibuja los widgets tal y como aparecen en la pantalla. For compatibility, the legacy renderer is **enabled by default** in projects or databases converted from versions prior to 4D 21 R3, so that forms designed with this renderer continue to be printed as expected.

You can however enable the modern print rendering engine at any moment by:

- unchecking the **Use legacy print rendering** option in the [Compatibility page of the Settings dialog box](../settings/compatibility.md) (permanent setting),
- o ejecutando el comando [`SET DATABASE PARAMETER`](../commands/set-database-parameter) con el selector `Use legacy print rendering` a 1 (configuración volátil).

:::warning Limitación

For technical reasons, the legacy print renderer is not available with forms displayed with [Fluent UI](#fluent-ui-rendering) on Windows or [Liquid Glass](../Notes/updates.md#support-of-liquid-glass-on-macos) on macOS. En estos contextos, los formularios se **imprimen siempre con el motor de renderizado de impresión moderno**, sea cual sea la opción de compatibilidad.

:::

## Formulario proyecto y formulario tabla

Hay dos categorías de formularios:

- **Los formularios proyecto** - Formularios independientes que no están unidos a ninguna tabla. Están pensados, sobre todo, para crear cajas de diálogo de interfaz, al igual que componentes. Los formularios proyecto pueden utilizarse para crear interfaces que cumplan fácilmente con los estándares del sistema operativo.

- **Los formularios tablas** - Se adjuntan a tablas específicas y, por tanto, se benefician de funciones automáticas útiles para el desarrollo de aplicaciones basadas en bases de datos. Normalmente, una tabla tiene formularios de entrada y salida separados.

Normalmente, se selecciona la categoría del formulario al crearlo, pero se puede cambiar después.

## Páginas formulario

Cada formulario consta de al menos dos páginas:

- una página 1: una página principal, mostrada por defecto
- una página 0: una página de fondo, cuyo contenido se muestra en todas las demás páginas.

Puede crear varias páginas para un formulario de entrada. Si tiene más campos o variables de los que caben en una pantalla, puede crear páginas adicionales para mostrarlos. Las páginas múltiples le permiten hacer lo siguiente:

- Coloque la información más importante en la primera página y la menos importante en otras.
- Organice cada tema en su propia página.
- Reducir o eliminar el desplazamiento durante la entrada de datos definiendo el [orden de entrada](formEditor.md#data-entry-order).
- Deje espacio alrededor de los elementos del formulario para lograr un diseño de pantalla atractivo.

Las páginas múltiples son útiles sólo para los formularios de entrada. No son para imprimir. Cuando se imprime un formulario de varias páginas, sólo se imprime la primera.

No hay restricciones en el número de páginas que puede tener un formulario. El mismo campo puede aparecer un número ilimitado de veces en un formulario y en todas las páginas que desee. Sin embargo, cuantas más páginas tenga un formulario, más tiempo tardará en mostrarse.

Un formulario multipáginas tiene una página de fondo y varias páginas de visualización. Los objetos que se colocan en la página de fondo pueden ser visibles en todas las páginas de visualización, pero sólo se pueden seleccionar y editar en la página de fondo. En los formularios multipágina, debe colocar su paleta de botones en la página de fondo. También es necesario incluir uno o más objetos en la página de fondo que ofrezcan las herramientas de navegación para el usuario.

## Renderización Fluent UI

:::caution Vista previa para desarrolladores

La compatibilidad con Fluent UI se encuentra actualmente en fase Developer Preview. No debe utilizarse en producción.

:::

En Windows, 4D soporta el renderizado de formularios **Fluent UI**, el moderno diseño gráfico de la interfaz de usuario de Microsoft, basado en la tecnología **WinUI 3**. **WinUI 3** es la base del Windows App SDK y representa las próximas interfaces gráficas de Windows.

La renderización Fluent UI ofrece controles modernos y atractivos, compatibilidad con los temas sistema dark/light, renderización más fluida optimizada para pantallas de alta resolución y una experiencia de usuario coherente y alineada con las aplicaciones recientes de Microsoft.

| Tema claro                              | Tema oscuro                                  |
| --------------------------------------- | -------------------------------------------- |
| ![](../assets/en/FormEditor/fluent.png) | ![](../assets/en/FormEditor/fluent-dark.png) |

:::info Disponibilidad

Esta funcionalidad puede utilizarse **en proyectos 4D en Windows**. No está disponible en macOS ni en bases de datos binarias 4D en Windows.

:::

:::tip Entradas de blog relacionadas

[Modernice sus interfaces 4D con Fluent UI](https://blog.4d.com/modernize-your-4d-interfaces-with-fluent-ui)<br/>
[Despliegue Fluent UI sin esfuerzo en sus aplicaciones 4D](https://blog.4d.com/deploy-fluent-ui-effortlessly-in-your-4d-applications)

:::

### Requisitos

El renderizado Fluent UI requiere que **Windows App SDK** esté instalado en su máquina. Debe asegurarse de que este SDK está instalado en cualquier máquina Windows que muestre sus formularios.

[Si es necesario](https://blog.4d.com/deploy-fluent-ui-effortlessly-in-your-4d-applications), puede instalar el Windows App SDK. Para mayor comodidad, el instalador 4D [ofrece un enlace](../GettingStarted/Installation.md#installation-on-disk) para descargar el instalador de Windows AppSDK. También puede visitar la [página de descargas de Microsoft](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/downloads). Recomendamos utilizar la versión referenciada por el programa de instalación de 4D, que ofrece una compatibilidad óptima.

Si Windows App SDK no está correctamente instalado, 4D renderizará todos sus formularios en modo clásico sin ningún error y se registrará la siguiente advertencia en el [log de diagnóstico](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt): "Fluent UI es necesario pero no está disponible. La aplicación se ejecuta con el aspecto clásico de Windows."

### Activar el renderizado Fluent UI

Puede activar el modo de renderizado Fluent UI a nivel de aplicación o a nivel de formulario. La configuración del formulario tiene prioridad sobre la configuración de la aplicación.

#### Parámetros de la aplicación

Seleccione la opción **Utilizar Fluent UI en Windows** en la página "Interfaz" de la caja de diálogo de las Propiedades.

![](../assets/en/FormObjects/fluentui-setting.png)

En este caso, el modo de renderizado Fluent UI se utilizará por defecto en Windows para todos los formularios.

:::note

Si la configuración actual no cumple las [condiciones de Fluent UI](#requirements), aparecerá un mensaje de error junto a la casilla de verificación.

:::

#### Parámetros del formulario

Cada formulario puede definir su propio renderizado a través de la propiedad **Apariencia de los Widgets**. Las siguientes opciones están disponibles:

- **Heredado**: hereda las propiedades globales de la aplicación (por defecto),
- **Classic**: utiliza el estilo clásico de Windows,
- **Fluent UI**: permite el renderizado moderno basado en Fluent UI. <br/>
  ![](../assets/en/FormObjects/fluentui-form.png)

La [propiedad de formulario JSON](./properties_JSONref.md) correspondiente es `fluentUI` con el valor undefined (es decir, heredado, valor por defecto), "true" o "false".

#### CSS

El [media query CSS **form-theme**](./createStylesheet.md#media-queries) permite configurar varios estilos en función del tema utilizado.

### Comportamientos específicos

Cuando utilice los formularios 4D con el renderizado Fluent UI, debe prestar atención a los siguientes puntos:

- El comando [`FORM theme`](../commands/form-theme) devuelve el tema actual del formulario. Valores posibles: "Classic" o "FluentUI". Si no existe un formulario actual o si el comando se ejecuta en macOS, se devuelve una cadena vacía.
- El comando [`Application info`](../commands/application-info) le permite saber si Fluent UI puede ser utilizado (propiedad `canUseFluentUI`) o está siendo utilizado (propiedad `useFluentUI`).
- Si [`GET STYLE SHEET INFO`](../commands/get-style-sheet-info) es llamado en el contexto de un formulario, la información devuelta se refiere a la apariencia actual del formulario (Classic o FluentUI). Si se llama al comando fuera del contexto de un formulario, la información devuelta se refiere a las [propiedades globales del proyecto](#application-setting).
- [`SET MENU ITEM STYLE`](../commands/set-menu-item-style) con el parámetro *itemStyle* `Underline` no es soportado (ignorado) para los menús emergentes.
- El objeto de formulario [Stepper](../FormObjects/stepper.md) no admite el [evento doble clic](../Events/onDoubleClicked.md).
- Los [botones circulares](../FormObjects/button_overview.md#circle) son soportados (como en macOS).
- Los comandos [`WA ZOOM IN`](../commands/wa-zoom-in) / [`WA ZOOM OUT`](../commands/wa-zoom-out) no son compatibles en áreas Web con motor de renderizado sistema.
- Se puede añadir rectángulo de foco a las [entradas](../FormObjects/input_overview.md) imagen y texto.

## Formularios heredados

Los formularios 4D pueden utilizar y ser utilizados como "formularios heredados", lo que significa que todos los objetos de *Formulario A* pueden ser utilizados en *Formulario B*. En este caso, *Formulario B* "hereda" los objetos de *Formulario A*.

Las referencias a un formulario heredado están siempre activas: si se modifica un elemento de un formulario heredado (estilos de botón, por ejemplo), se modificarán automáticamente todos los formularios que utilicen este elemento.

Todos los formularios (formularios tabla y formularios proyecto) pueden ser designados como un formulario heredado. Sin embargo, los elementos que contienen deben ser compatibles con el uso en diferentes tablas de la base de datos.

Cuando se ejecuta un formulario, los objetos se cargan y combinan en el siguiente orden:

1. Página cero del formulario heredado
2. Página 1 del formulario heredado
3. Página cero del formulario abierto
4. Página actual del formulario abierto.

Este orden determina el [orden de entrada](formEditor.md#data-entry-order) de los objetos en el formulario.

> Sólo las páginas 0 y 1 del formulario heredado pueden aparecer en otros formularios.

Las propiedades y el método de un formulario no se tienen en cuenta cuando ese formulario se utiliza como formulario heredado. Por otro lado, se llaman los métodos de los objetos que contiene.

Para definir un formulario heredado, el [nombre del formulario heredado](properties_FormProperties.md#inherited-form-name) y la [Tabla de formularios heredada](properties_FormProperties.md#inherited-form-table) (para el formulario tabla) las propiedades deben definirse en la forma que heredará algo de otro formulario.

Un formulario puede heredar de un formulario proyecto, definiendo la propiedad [Inherited Form Table](properties_FormProperties.md#inherited-form-table) en `\<None>` en la Lista de propiedades (o " " en JSON).

Para dejar de heredar un formulario, seleccione `\<None>` en la lista de propiedades (o " " en JSON) para la propiedad [Inherited Form Name](properties_FormProperties.md#inherited-form-name).

> Es posible definir un formulario heredado en un formulario que eventualmente se utilizará como formulario heredado para un tercer formulario. La combinación de objetos se realiza de forma recursiva. 4D detecta los bucles recursivos (por ejemplo, si el formulario [table1]form1 se define como el formulario heredado de [table1]form1, es decir, él mismo) e interrumpe la cadena de formularios.

## Propiedades soportadas

[Barra de menú asociada](properties_Menu.md#associated-menu-bar) - [Altura fija](properties_WindowSize.md#fixed-height) - [Ancho fijo](properties_WindowSize.md#fixed-width) - [Divisor de formulario](properties_Markers.md#form-break) - [Detalle de formulario](properties_Markers.md#form-detail) - [Pie de formulario](properties_Markers.md#form-footer) - [Encabezado de formulario](properties_Markers.md#form-header) - [Nombre de formulario](properties_FormProperties.md#form-name) - [Tipo de formulario](properties_FormProperties.md#form-type) - [Nombre de formulario heredado](properties_FormProperties.md#inherited-form-name) - [Tabla de formulario heredado](properties_FormProperties.md#inherited-form-table) - [Altura máxima](properties_WindowSize.md#maximum-height-minimum-height) - [Ancho máximo](properties_WindowSize.md#maximum-width-minimum-width) - [Método](properties_Action.md#method) - [Altura mínima](properties_WindowSize.md#maximum-height-minimum-height) - [Ancho mínimo](properties_WindowSize.md#maximum-width-minimum-width) - [Páginas](properties_FormProperties.md#pages) - [Configuración de impresión](properties_Print.md#settings) - [Publicado como subformulario](properties_FormProperties.md#published-as-subform) - [Guardar geometría](properties_FormProperties.md#save-geometry) - [Título de ventana](properties_FormProperties.md#window-title)

## Eventos soportados

[On Activate](../Events/onActivate.md) - [On After Edit](../Events/onAfterEdit.md) - [On After Keystroke](../Events/onAfterKeystroke.md) - [On Before Keystroke](../Events/onBeforeKeystroke.md) - [On Begin Drag Over](../Events/onBeginDragOver.md) - [On Bound Variable Change](../Events/onBoundVariableChange.md) - [On Clicked](../Events/onClicked.md) - [On Close Box](../Events/onCloseBox.md) - [On Close Detail](../Events/onCloseDetail.md) - [On Data Change](../Events/onDataChange.md) - [On Deactivate](../Events/onDeactivate.md) - [On Display Detail](../Events/onDisplayDetail.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drop](../Events/onDrop.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Load Record](../Events/onLoadRecord.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Menu Selected](../Events/onMenuSelected.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Open Detail](../Events/onOpenDetail.md) - [On Outside Call](../Events/onOutsideCall.md) - [On Page Change](../Events/onPageChange.md) - [On Plug in Area](../Events/onPlugInArea.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Resize](../Events/onResize.md) - [On Selection Change](../Events/onSelectionChange.md) - [On Timer](../Events/onTimer.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)