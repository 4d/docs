---
id: webAreaOverview
title: Área Web
---

Las áreas web pueden mostrar varios tipos de contenido web dentro de sus formularios: páginas HTML con contenidos estáticos o dinámicos, archivos, imágenes, JavaScript, etc. El motor de renderizado del área web depende de la plataforma de ejecución de la aplicación y de la [opción motor de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) seleccionada.

Es posible crear varias áreas web en el mismo formulario. Tenga en cuenta, sin embargo, que el uso de las áreas web debe seguir [varias reglas](#web-area-rules).

Varias [acciones estándar](#standard-actions) dedicadas, numerosos [comandos de lenguaje](../category/web-area) así como [eventos de formulario](#form-events) genéricos y específicos permiten al desarrollador controlar el funcionamiento de las áreas web. Se pueden utilizar variables específicas para intercambiar información entre el área y el entorno 4D.

## Propiedades específicas

### Variables asociadas

Se pueden asociar dos variables específicas a cada área web:

- [`URL`](properties_WebArea.md#url) --para controlar la URL mostrada por el área web
- [`Progression`](properties_WebArea.md#progression) -- para controlar el porcentaje de carga de la página mostrada en el área web.

> A partir de 4D v19 R5, la variable Progression ya no se actualiza en las Áreas Web que utilizan el [motor de renderizado del sistema Windows](./webArea_overview.md#web-rendering-engine).

### Motor de renderización web

Puede elegir entre [dos motores de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) para el área web, dependiendo de las especificaciones de su aplicación.

Seleccionar el motor de renderizado web anidado permite llamar a los métodos de 4D desde el área web y asegurarse de que las funcionalidades en macOS y Windows sean similares. Se recomienda seleccionar el motor de renderizado del sistema cuando el área web está conectada a Internet porque siempre se beneficia de las últimas actualizaciones de seguridad.

### Acceder a los métodos 4D

Cuando la propiedad [Acceso a los métodos 4D](properties_WebArea.md#access-4d-methods) está seleccionada, puede llamar a métodos 4D desde un área web.

:::note Notas

- Esta propiedad sólo está disponible si el área web [utiliza el motor de renderizado web integrado](properties_WebArea.md#use-embedded-web-rendering-engine).
- Por razones de seguridad, ya que permite ejecutar código 4D, esta opción solo debe habilitarse para páginas de confianza, como las páginas generadas por la aplicación.

:::

### Objeto $4d

El [motor de renderizado web integrado](properties_WebArea.md#use-embedded-web-rendering-engine) suministra el área con un objeto JavaScript llamado $4d que puede asociar con cualquier método de proyecto 4D usando la notación de objeto ".".

For example, to call the `HelloWorld` 4D method, you just execute the following statement:

```js
$4d.HelloWorld();
```

> JavaScript is case sensitive so it is important to note that the object is named **$4d** (with a lowercase "d").

La sintaxis de las llamadas a los métodos 4D es la siguiente:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: You can pass as many parameters as you need to the 4D method.
 Estos parámetros pueden ser de cualquier tipo soportado por JavaScript (cadena, número, array, objeto).

- `function(result)`: Function to pass as last argument. Esta función "callback" se llama de forma sincrónica una vez que el método 4D termina de ejecutarse. It receives the `result` parameter.

- `result`: Execution result of the 4D method. Este resultado puede ser de cualquier tipo soportado por JavaScript (cadena, número, array, objeto).

> Por defecto, 4D trabaja en UTF-8. Cuando devuelva un texto que contenga caracteres extendidos, por ejemplo, caracteres con acentos, asegúrese de que la codificación de la página mostrada en el área web esté declarada como UTF-8, ya que de lo contrario los caracteres podrían representarse incorrectamente. In this case, add the following line in the HTML page to declare the encoding:
> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Ejemplo 1

Given a 4D project method named `today` that does not receive parameters and returns the current date as a string.

4D code of `today` method:

```4d
 #DECLARE : Text
 return String(Current date;System date long)
```

En el área web, el método 4D puede ser llamado con la siguiente sintaxis:

```js
$4d.today()
```

The 4D method does not receive any parameters but it does return the result to the callback function called by 4D after the execution of the method. Queremos mostrar la fecha en la página HTML que es cargada por el área web.

Aquí está el código de la página HTML:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(result)
{
    var curDate = result;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### Ejemplo 2

The 4D project method `calcSum` receives parameters and returns their sum:

4D code of `calcSum` method:

```4d
 #DECLARE (... : Real) -> $sum : Real 
  // recibe n parámetros de tipo Real 
  // y devuelve un Real
 var $i; $n : Integer
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

El código JavaScript que se ejecuta en el área web es el siguiente:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)
    {
        var result = theSum // result is 262.5
    });
```

## Acciones estándar

Four specific standard actions are available for managing web areas automatically: `Open Back URL`, `Open Forward URL`, `Refresh Current URL` and `Stop Loading URL`. Estas acciones pueden asociarse a botones o comandos de menú y permiten una rápida implementación de interfaces web básicas. Estas acciones pueden asociarse a botones o comandos de menú y permiten una rápida implementación de interfaces web básicas.

## Eventos formulario

Los eventos formulario específicos están destinados a la gestión programada de las áreas de la web, más concretamente a la activación de los enlaces:

- [`On Begin URL Loading`](Events/onBeginUrlLoading.md)
- [`On URL Resource Loading`](Events/onUrlResourceLoading.md)
- [`On End URL Loading`](Events/onEndUrlLoading.md)
- [`On URL Loading Error`](Events/onUrlLoadingError.md)
- [`On URL Filtering`](Events/onUrlFiltering.md)
- [`On Open External Link`](Events/onOpenExternalLink.md)
- [`On Window Opening Denied`](Events/onWindowOpeningDenied.md)

Además, las áreas web soportan los siguientes eventos de formulario genéricos:

- [`On Load`](Events/onLoad.md)
- [`On Unload`](Events/onUnload.md)
- [`On Getting Focus`](Events/onGettingFocus.md)
- [`On Losing Focus`](Events/onLosingFocus.md)

## Reglas de las áreas web

### Interfaz de usuario

Cuando se ejecuta el formulario, las funciones estándar de la interfaz del navegador están disponibles para el usuario en el área web, lo que permite la interacción con otras áreas del formulario:

- **Edit menu commands**: When the web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Menú contextual**: es posible utilizar el [menú contextual] estándar (properties_Entry.md#context-menu) del sistema con el área web. Display of the context menu can be controlled using the [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) command.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties.
 Por razones de seguridad, no se permite por defecto cambiar el contenido de un área web mediante la acción de arrastrar y soltar un archivo o una URL. In this case, the cursor displays a "forbidden" icon ![](../assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE(*;"warea";WA enable URL drop;True)` statement to display a "drop" icon and generate the [`On Window Opening Denied`](Events/onWindowOpeningDenied.md) event. En este evento, puede llamar al comando [`WA OPEN URL`](../commands-legacy/wa-open-url.md) o definir la [variable URL](properties_WebArea.md#url) en respuesta a un soltar del usuario.

> Las funciones de arrastrar y soltar descritas anteriormente no son compatibles con las áreas web que utilizan el [motor de renderizado del sistema macOS](properties_WebArea.md#use-embedded-web-rendering-engine).

### Subformularios

Por razones relacionadas con los mecanismos de redibujado de ventanas, la inserción de un área web en un subformulario está sujeta a las siguientes restricciones:

- El subformulario no debe poder desplazarse
- Los límites del área web no deben superar el tamaño del subformulario

> No se soporta la superposición de un área web sobre o debajo de otros objetos formulario.

### Conflicto entre el área web y el servidor web (Windows)

En Windows, no se recomienda acceder, a través de un área web, al servidor web de la aplicación 4D que contiene el área, ya que esta configuración podría provocar un conflicto que paralice la aplicación. Por supuesto, un 4D remoto puede acceder al servidor web de 4D Server, pero no a su propio servidor web.

### Inserción del protocolo (macOS)

Las URLs manejadas por programación en áreas web bajo macOS deben comenzar con el protocolo. Por ejemplo, debe pasar la cadena "http://www.mysite.com" y no sólo "www.mysite.com".

## Acceso al inspector web

Puede visualizar y utilizar un inspector web dentro de las áreas web de sus formularios o en las áreas web fuera de la pantalla. El inspector web es un depurador que permite analizar el código y el flujo de información de las páginas web.

To display the Web inspector, you can either execute the `WA OPEN WEB INSPECTOR` command, or use the context menu of the web area.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br/>
 This command can be used directly with onscreen (form object) and offscreen web areas.

- **Use the web area context menu**<br/>
 This feature can only be used with onscreen web areas and requires that the following conditions are met:
 - el [menú contextual](properties_Entry.md#context-menu) del área web está activado
 - el uso del inspector está expresamente autorizado en el área mediante la siguiente declaración:
 ```4d
 	WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)  
 ```

> Con el [motor de renderizado del sistema de Windows](properties_WebArea.md#use-embedded-web-rendering-engine), un cambio en esta preferencia requiere que se tenga en cuenta una acción de navegación en el área (por ejemplo, una actualización de la página).

For more information, refer to the description of the [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) command.

When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. Al seleccionar esta opción, se muestra la ventana del inspector web.

> Para una descripción detallada de las funcionalidades de este depurador, consulte la documentación que ofrece el motor de renderizado web.

## Propiedades soportadas

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Fondo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Menú contextual](properties_Entry.md#context-menu) - [Altura](properties_CoordinatesAndSizing.md#height) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Método](properties_Action.md#method) - [Nombre del objeto](properties_Object.md#nombre-del-objeto) - [Progresión](properties_WebArea.md#progression) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Usar motor de renderizado web incrustado](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)

## 4DCEFParameters.json

The 4DCEFParameters.json is a configuration file that allows customization of CEF parameters to manage the behavior of web areas within 4D applications.

Se suministran [interruptores predeterminados](#default-file), pero puede reemplazarlos utilizando un archivo 4DCEFParameters.json personalizado.

In the development phase (using 4D application), create a 4DCEFParameters.json file at the following location:

- Windows: `Users\[userName]\AppData\Roaming\4D\4DCEFParameters.json`
- macOS: `$HOME/Library/Application Support/4D/4DCEFParameters.json`

Before building a final application, add the custom 4DCEFParameters.json file to the Resources folder of the project.

:::warning

Añadir un archivo 4DCEFParameters.json personalizado puede afectar fundamentalmente a todas las áreas web integradas de 4D, incluyendo las [áreas 4D View Pro](../ViewPro/configuring.md#form-area-properties). It is the developer's responsibility to ensure that the custom switches do not destabilize the 4D application.

:::

The 4DCEFParameters.json file format is as the following:

```json

{
  "switches":{
     "key":value
  },
  "macOS":{
    "switches": {
     "key":value
    }
  },
  "windows": {
    "switches": {
     "key":value
    }
  }
}
```

The 4DCEFParameters.json file structure contains:

- **switches**: a list of CEF switches and their corresponding values applied for both macOS and Windows.
- **macOS.switches**: macOS-specific CEF switches.
- **windows.switches**: Windows-specific CEF switches.

The switches in the custom file take precedence. In case of duplication of switches within the same file, the switches defined in the platform-specific subsection ("macOS.switches" or "windows.switches") are given priority and used for configuration.

:::note

The list of supported switches is constantly evolving and is managed by the CEF development team. For information about available switches, you need to refer to the CEF developer community.

:::

### Ejemplos

#### Archivo por defecto

The default 4DCEFParameters.json file contains the following switches:

```json
{
  "switches":{
     "enable-media-stream":true,
     "enable-print-preview":true
  },
  "macOS":{
    "switches": {
      "use-mock-keychain": true
    }
  },
  "windows": {
    "switches": {
      "disable-features": "WinUseBrowserSpellChecker"
    }
  }
}

```

#### Example of disabling default Switch

```json
{
  "switches": {
    "disable-javascript": true,
    "disable-web-security": true
  }
}
```

#### Example for Autoplay

```json
{
  "switches":{
     "autoplay-policy": "no-user-gesture-required"
  }
}
```

### Ver también

[Specify your own parameters to initialize the embedded web area (blog post)](https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area)




