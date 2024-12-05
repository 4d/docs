---
id: webAreaOverview
title: Área Web
---

Las áreas web pueden mostrar varios tipos de contenido web dentro de sus formularios: páginas HTML con contenidos estáticos o dinámicos, archivos, imágenes, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected [rendering engine option](properties_WebArea.md#use-embedded-web-rendering-engine).

Es posible crear varias áreas web en el mismo formulario. Note, however, that the use of web areas must follow [several rules](#web-area-rules).

Several dedicated [standard actions](#standard-actions), numerous [language commands](../category/web-area) as well as generic and specific [form events](#form-events) allow the developer to control the functioning of web areas. Se pueden utilizar variables específicas para intercambiar información entre el área y el entorno 4D.

## Propiedades específicas

### Variables asociadas

Se pueden asociar dos variables específicas a cada área web:

- [`URL`](properties_WebArea.md#url) --to control the URL displayed by the web area
- [`Progression`](properties_WebArea.md#progression) -- to control the loading percentage of the page displayed in the web area.

> As of 4D v19 R5, the Progression variable is no longer updated in Web Areas using the [Windows system rendering engine](./webArea_overview.md#web-rendering-engine).

### Motor de renderización web

You can choose between [two rendering engines](properties_WebArea.md#use-embedded-web-rendering-engine) for the web area, depending on the specifics of your application.

Seleccionar el motor de renderizado web anidado permite llamar a los métodos de 4D desde el área web y asegurarse de que las funcionalidades en macOS y Windows sean similares. Se recomienda seleccionar el motor de renderizado del sistema cuando el área web está conectada a Internet porque siempre se beneficia de las últimas actualizaciones de seguridad.

### Acceder a los métodos 4D

When the [Access 4D methods](properties_WebArea.md#access-4d-methods) property is selected, you can call 4D methods from a web area.

:::note Notas

- This property is only available if the web area [uses the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).
- Por razones de seguridad, ya que permite ejecutar código 4D, esta opción solo debe habilitarse para páginas de confianza, como las páginas generadas por la aplicación.

:::

### Objeto $4d

The [4D embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

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
  // receives n Real type parameters
  // and returns a Real
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
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the web area. Display of the context menu can be controlled using the [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) command.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties.
  Por razones de seguridad, no se permite por defecto cambiar el contenido de un área web mediante la acción de arrastrar y soltar un archivo o una URL. In this case, the cursor displays a "forbidden" icon ![](../assets/en/FormObjects/forbidden.png). You have to use the `WA SET PREFERENCE(*;"warea";WA enable URL drop;True)` statement to display a "drop" icon and generate the [`On Window Opening Denied`](Events/onWindowOpeningDenied.md) event. In this event, you can call the [`WA OPEN URL`](../commands-legacy/wa-open-url.md) command or set the [URL variable](properties_WebArea.md#url) in response to a user drop.

> Drag and drop features described above are not supported in web areas using the [macOS system rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

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

> With [Windows system rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine), a change in this preference requires a navigation action in the area (for example, a page refresh) to be taken into account.

For more information, refer to the description of the [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md) command.

When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. Al seleccionar esta opción, se muestra la ventana del inspector web.

> Para una descripción detallada de las funcionalidades de este depurador, consulte la documentación que ofrece el motor de renderizado web.

## Propiedades soportadas

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## 4DCEFParameters.json

The 4DCEFParameters.json is a configuration file that allows customization of CEF parameters to manage the behavior of web areas within 4D applications.

[Default switches](#default-file) are provided, but you can override them by using a custom 4DCEFParameters.json file.

In the development phase (using 4D application), create a 4DCEFParameters.json file at the following location:

- Windows: `Users\[userName]\AppData\Roaming\4D\4DCEFParameters.json`
- macOS: `$HOME/Library/Application Support/4D/4DCEFParameters.json`

Before building a final application, add the custom 4DCEFParameters.json file to the Resources folder of the project.

:::warning

Adding a custom 4DCEFParameters.json file can fundamentally impact all 4D embedded web areas, including [4D View Pro areas](../ViewPro/configuring.md#form-area-properties). It is the developer's responsibility to ensure that the custom switches do not destabilize the 4D application.

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
