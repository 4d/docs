---
id: webAreaOverview
title: Área Web
---


Web areas can display various types of web content within your forms: HTML pages with static or dynamic contents, files, pictures, JavaScript, etc. The rendering engine of the web area depends on the execution platform of the application and the selected [rendering engine option](properties_WebArea.md#use-embedded-web-rendering-engine).

It is possible to create several web areas in the same form. Tenga en cuenta, sin embargo, que el uso de las áreas web debe seguir [varias reglas](#web-areas-rules).

Several dedicated [standard actions](#standard-actions), numerous [language commands](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) as well as generic and specific [form events](#form-events) allow the developer to control the functioning of web areas. Se pueden utilizar variables específicas para intercambiar información entre el área y el entorno 4D.
> No se recomienda el uso de plugins web ni de applets de Java en las áreas web porque pueden provocar inestabilidad en el funcionamiento de 4D, especialmente a nivel de gestión de eventos.


## Propiedades específicas

### Variables asociadas

Two specific variables can be associated with each web area:
- [`URL`](properties_WebArea.md#url) --to control the URL displayed by the web area
- [`Progression`](properties_WebArea.md#progression) -- to control the loading percentage of the page displayed in the web area.

### Motor de renderización web

You can choose between [two rendering engines](properties_WebArea.md#use-embedded-web-rendering-engine) for the web area, depending on the specifics of your application.

La selección del motor de renderizado web anidado le permite llamar a los métodos 4D desde el área web.

### Acceder a los métodos 4D

When the [Access 4D methods](properties_WebArea.md#access-4d-methods) property is selected, you can call 4D methods from a web area.

> This property is only available if the web area [uses the embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine).

### Objeto $4d


The [4D embedded web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) supplies the area with a JavaScript object named $4d that you can associate with any 4D project method using the "." object notation.

Por ejemplo, para llamar al método `HelloWorld` de 4D, basta con ejecutar la siguiente declaración:

```codeJS
$4d.HelloWorld();
```
> JavaScript es sensible a las mayúsculas y minúsculas, por lo que es importante tener en cuenta que el objeto se llama $4d (con "d" minúscula).

La sintaxis de las llamadas a los métodos 4D es la siguiente:

```codeJS
$4d.4DMethodName(param1,paramN,function(result){})
```
- `param1...paramN`: Puede pasar tantos parámetros como necesite al método 4D. Estos parámetros pueden ser de cualquier tipo soportado por JavaScript (cadena, número, array, objeto).

- `function(result)`: Función a pasar como último argumento. Esta función "callback" se llama de forma sincrónica una vez que el método 4D termina de ejecutarse. Recibe el parámetro `result`.

- `result`: resultado de la ejecución del método 4D, devuelto en la expresión "$0". Este resultado puede ser de cualquier tipo soportado por JavaScript (cadena, número, array, objeto). Puede utilizar el comando `C_OBJECT` para devolver los objetos.

> Por defecto, 4D trabaja en UTF-8. Cuando devuelva un texto que contenga caracteres extendidos, por ejemplo, caracteres con acentos, asegúrese de que la codificación de la página mostrada en el área web esté declarada como UTF-8, ya que de lo contrario los caracteres podrían representarse incorrectamente. En este caso, añada la siguiente línea en la página HTML para declarar la codificación: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Ejemplo 1

Dado un método proyecto 4D llamado `today` que no recibe parámetros y devuelve la fecha actual como una cadena.

Código 4D del método `today`:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

In the web area, the 4D method can be called with the following syntax:

```js
$4d.today()
```

El método 4D no recibe ningún parámetro pero devuelve el valor $0 a la función callback llamada por 4D tras la ejecución del método. We want to display the date in the HTML page that is loaded by the web area.

Aquí está el código de la página HTML:

```html
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
 <script type="text/javascript">
$4d.today(function(dollarZero)
{
    var curDate = dollarZero;
    document.getElementById("mydiv").innerHTML=curDate;
});
</script>
</head>
<body>Today is: <div id="mydiv"></div>
</body>
</html>
```

#### Ejemplo 2

El método proyecto 4D `calcSum` recibe los parámetros (`$1...$n`) y devuelve su suma en `$0`:

Código 4D del método `calcSum`:

```4d
 C_REAL(${1}) // recibe n parámetros de tipo REAL
 C_REAL($0) // devuelve un Real
 C_LONGINT($i;$n)
 $n:=Count parameters
 For($i;1;$n)
    $0:=$0+${$i}
 End for
```

El código JavaScript que se ejecuta en el área web es el siguiente:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(dollarZero)
    {
        var result = dollarZero // el resultado es 262.5
    });
```


## Acciones estándar

Four specific standard actions are available for managing web areas automatically: `Open Back URL`, `Open Forward URL`, `Refresh Current URL` and `Stop Loading URL`. These actions can be associated with buttons or menu commands and allow quick implementation of basic web interfaces. These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).


## Eventos formulario

Specific form events are intended for programmed management of web areas, more particularly concerning the activation of links:

- [`On Begin URL Loading`](Events/onBeginUrlLoading.md)
- [`On URL Resource Loading`](Events/onUrlResourceLoading.md)
- [`On End URL Loading`](Events/onEndUrlLoading.md)
- [`On URL Loading Error`](Events/onUrlLoadingError.md)
- [`On URL Filtering`](Events/onUrlFiltering.md)
- [`On Open External Link`](Events/onOpenExternalLink.md)
- [`On Window Opening Denied`](Events/onWindowOpeningDenied.md)

In addition, web areas support the following generic form events:

- [`On Load`](Events/onLoad.md)
- [`On Unload`](Events/onUnload.md)
- [`On Getting Focus`](Events/onGettingFocus.md)
- [`On Losing Focus`](Events/onLosingFocus.md)


## Reglas de las áreas web

### Interfaz de usuario

When the form is executed, standard browser interface functions are available to the user in the web area, which permit interaction with other form areas:

- **Edit menu commands**: When the web area has the focus, the **Edit** menu commands can be used to carry out actions such as copy, paste, select all, etc., according to the selection.
- **Context menu**: It is possible to use the standard [context menu](properties_Entry.md#context-menu) of the system with the web area. La visualización del menú contextual se puede controlar con el comando `WA SET PREFERENCE`.
- **Drag and drop**: The user can drag and drop text, pictures and documents within the web area or between a web area and the 4D form objects, according to the 4D object properties. For security reasons, changing the contents of a web area by means of dragging and dropping a file or URL is not allowed by default. In this case, the cursor displays a "forbidden" icon ![](assets/en/FormObjects/forbidden.png). Tiene que utilizar el comando `WA SET PREFERENCE` para permitir explícitamente soltar URLs o archivos en el área web.

### Subformularios

For reasons related to window redrawing mechanisms, the insertion of a web area into a subform is subject to the following constraints:

- El subformulario no debe poder desplazarse
- The limits of the web area must not exceed the size of the subform

> No se soporta la superposición de un área web sobre o debajo de otros objetos formulario.


### Conflicto entre el área web y el servidor web (Windows)

In Windows, it is not recommended to access, via a web area, the Web server of the 4D application containing the area because this configuration could lead to a conflict that freezes the application. Of course, a remote 4D can access the Web server of 4D Server, but not its own web server.

### Inserción del protocolo (macOS)
The URLs handled by programming in web areas in macOS must begin with the protocol. Por ejemplo, debe pasar la cadena "http://www.mysite.com" y no sólo "www.mysite.com".


## Acceso al inspector web

You can view and use a web inspector within web areas in your forms or in offscreen web areas. El inspector web es un depurador que ofrece el motor web integrado. Permite analizar el código y el flujo de información de las páginas web.

### Mostrar el inspector web

Para mostrar el inspector web, puede ejecutar el comando `WA OPEN WEB INSPECTOR` o utilizar el menú contextual del área web.

- **Ejecute el comando `WA OPEN WEB INSPECTOR` **<br> Este comando se puede utilizar directamente con áreas web en pantalla (objeto formulario) y fuera de ella. En el caso de un área web en pantalla, debe haber [seleccionado el motor de renderizado web integrado](properties_WebArea.md#use-embedded-web-rendering-engine) para el área (el inspector web sólo está disponible con esta configuración).

- **Utilice el menú contextual del área web**<br> Esta funcionalidad sólo puede utilizarse con áreas web en pantalla y requiere que se cumplan las siguientes condiciones:
    - se selecciona el motor de renderizado web integrado para el área
    - el [menú contextual](properties_Entry.md#context-menu) del área web está activado
    - el uso del inspector está expresamente autorizado en el área mediante la siguiente declaración:

```4d
    WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

For more information, refer to the description of the `WA SET PREFERENCE` command.

### Utilización del inspector web

Cuando haya realizado los ajustes como se ha descrito anteriormente, entonces tendrá nuevas opciones como **Inspeccionar elemento** en el menú contextual del área. When you select this option, the web inspector window is displayed.

> El inspector web está incluido en el motor de renderizado web integrado. Para una descripción detallada de las funcionalidades de este depurador, consulte la documentación que ofrece el motor de renderizado web.




## Propiedades soportadas

[BEstilo del borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Menú contextual](properties_Entry.md#context-menu) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dim. horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Método](properties_Action.md#method) - [Nombre del objeto](properties_Object.md#object-name) - [Progresión](properties_WebArea.md#progression) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Utilizar el motor de renderizado Web integrado](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Dim. vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width) 





