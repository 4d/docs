---
id: webAreaOverview
title: Área Web
---

## Generalidades

Las áreas web pueden mostrar varios tipos de contenido web dentro de sus formularios: Páginas HTML con contenidos estáticos o dinámicos, archivos, imágenes, Javascript, etc. El motor de renderizado del área web depende de la plataforma de ejecución de la aplicación y de [la opción motor de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) seleccionada.

Es posible crear varias áreas web en el mismo formulario. Tenga en cuenta, sin embargo, que el uso de las áreas web debe seguir [varias reglas](#web-areas-rules).

Varias [acciones estándar](#standard-actions) dedicadas, numerosos [comandos de lenguaje](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) así como también [eventos formulario](#form-events) genéricos y específicos, permiten al desarrollador controlar el funcionamiento de las áreas web. Specific variables can be used to exchange information between the area and the 4D environment.
> No se recomienda el uso de plugins web ni de applets de Java en las áreas web porque pueden provocar inestabilidad en el funcionamiento de 4D, especialmente a nivel de gestión de eventos.


## Propiedades específicas

### Associated variables

Se pueden asociar dos variables específicas a cada área web:
- [`URL`](properties_WebArea.md#url) --para controlar la URL que muestra el área web
- [`Progresión`](properties_WebArea.md#progression) -- para controlar el porcentaje de carga de la página mostrada en el área web.

### Web rendering engine

Puede elegir entre [dos motores de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) para el área web, dependiendo de las particularidades de su aplicación.

La selección del motor de renderizado web anidado le permite llamar a los métodos 4D desde el área web.

### Access 4D methods
Cuando se selecciona la propiedad [Acceder a los métodos 4D](properties_WebArea.md#access-4d-methods), se puede llamar a los métodos 4D desde un área Web.

> This property is only available if the Web area [uses the embedded Web rendering engine](#use-embedded-web-rendering-engine).

### $4d object

El [motor de renderizado web incrustado de 4D](#use-embedded-web-rendering-engine) suministra al área un objeto JavaScript llamado $4d que puede asociar a cualquier método proyecto 4D utilizando la notación objeto ".".

For example, to call the `HelloWorld` 4D method, you just execute the following statement:

```codeJS
$4d.HelloWorld();
```
> JavaScript is case sensitive so it is important to note that the object is named $4d (with a lowercase "d").

The syntax of calls to 4D methods is as follows:

```codeJS
$4d.4DMethodName(param1,paramN,function(result){})
```
- `param1...paramN`: You can pass as many parameters as you need to the 4D method. These parameters can be of any type supported by JavaScript (string, number, array, object).

- `function(result)`: Function to pass as last argument. This "callback" function is called synchronously once the 4D method finishes executing. It receives the `result` parameter.

- `result`: Execution result of the 4D method, returned in the "$0" expression. This result can be of any type supported by JavaScript (string, number, array, object). You can use the `C_OBJECT` command to return the objects.

> By default, 4D works in UTF-8. When you return text containing extended characters, for example characters with accents, make sure the encoding of the page displayed in the Web area is declared as UTF-8, otherwise the characters may be rendered incorrectly. In this case, add the following line in the HTML page to declare the encoding: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Ejemplo 1
Given a 4D project method named `today` that does not receive parameters and returns the current date as a string.

4D code of `today` method:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

En el área Web, el método 4D puede ser llamado con la siguiente sintaxis:

```js
$4d.today()
```

The 4D method does not receive any parameters but it does return the value of $0 to the callback function called by 4D after the execution of the method. Queremos mostrar la fecha en la página HTML que es cargada por el área Web.

Here is the code of the HTML page:

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

The 4D project method `calcSum` receives parameters (`$1...$n`) and returns their sum in `$0`:

4D code of `calcSum` method:

```4d
 C_REAL(${1}) // receives n REAL type parameters
 C_REAL($0) // returns a Real
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
        var result = dollarZero // result is 262.5
    });
```


## Acciones estándar

Hay cuatro acciones estándar específicas para gestionar las áreas web de forma automática: `Open Back URL`, `Open Next URL`, `Refresh Current URL` y `Stop Loading URL`. Acciones estándar. Estas acciones pueden asociarse a botones o comandos de menú y permiten una rápida implementación de interfaces web básicas. These actions are described in [Standard actions](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).


## Eventos formulario

Los eventos formulario específicos están destinados a la gestión programada de las áreas de la web, más concretamente a la activación de los enlaces:

- `On Begin URL Loading`
- `On URL Resource Loading`
- `On End URL Loading`
- `On URL Loading Error`
- `On URL Filtering`
- `On Open External Link`
- `On Window Opening Denied`

Además, las áreas web soportan los siguientes eventos de formulario genéricos:

- `On Load`
- `On Unload`
- `On Getting Focus`
- `On Losing Focus`


## Reglas de las áreas web

### User interface

Cuando se ejecuta el formulario, las funciones estándar de la interfaz del navegador están disponibles para el usuario en el área web, lo que permite la interacción con otras áreas del formulario:

- **Comandos menú Edición**: cuando el área web tiene el foco, los comandos del menú **Edición** pueden utilizarse para realizar acciones como copiar, pegar, seleccionar todo, etc., según la selección.
- **El menú contextual**: es posible utilizar el [menú contextual](properties_Entry.md#context-menu) estándar del sistema con el área web. Display of the context menu can be controlled using the `WA SET PREFERENCE` command.
- **Arrastrar y soltar**: el usuario puede arrastrar y soltar texto, imágenes y documentos dentro del área web o entre un área web y los objetos de los formularios 4D, según las propiedades de los objetos 4D. Por razones de seguridad, no se permite por defecto cambiar el contenido de un área web mediante la acción de arrastrar y soltar un archivo o una URL. En este caso, el cursor del ratón muestra un icono "prohibido" <img src="assets/es/FormObjects/forbidden.png" alt=" />. Tiene que utilizar el comando `WA SET PREFERENCE` para permitir explícitamente soltar URLs o archivos en el área.

### Subforms
Por razones relacionadas con los mecanismos de redibujado de ventanas, la inserción de un área web en un subformulario está sujeta a las siguientes restricciones:

- The subform must not be able to scroll
- Los límites del área web no deben superar el tamaño del subformulario

> No se soporta la superposición de un área web sobre o debajo de otros objetos formulario.


### Web Area and Web server conflict (Windows)
En Windows, no se recomienda acceder, a través de un área web, al servidor web de la aplicación 4D que contiene el área, ya que esta configuración podría provocar un conflicto que paralice la aplicación. Por supuesto, un 4D remoto puede acceder al servidor web de 4D Server, pero no a su propio servidor web.

### Web plugins and Java applets
No se recomienda el uso de plugins web ni de applets de Java en las áreas web porque pueden provocar inestabilidad en el funcionamiento de 4D, especialmente a nivel de gestión de eventos.

### Insertion of protocol (macOS)
Las URLs manejadas por programación en áreas web bajo macOS deben comenzar con el protocolo. For example, you need to pass the string "http://www.mysite.com" and not just "www.mysite.com".


## Acceso al inspector web
Puede ver y utilizar un inspector web dentro de las áreas web de sus formularios. El inspector web es un depurador que ofrece el motor web integrado. Permite analizar el código y el flujo de información de las páginas web.

### Mostrar el inspector Web
Para poder visualizar el inspector web en un área web deben cumplirse las siguientes condiciones:

- You must [El motor de renderizado web integrado debe ser seleccionado](properties_WebArea.md#use-embedded-web-rendering-engine) para el área (el inspector web sólo está disponible con esta configuración).
- Debe activar el [menú contextual](properties_Entry.md#context-menu) del área (este menú se utiliza para llamar al inspector)
- Debe habilitar expresamente el uso del inspector en el área mediante la siguiente instrucción:

```4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

### Utilización del inspector Web
When you have done the settings as described above, you then have new options such as **Inspect Element** in the context menu of the area. Al seleccionar esta opción, se muestra la ventana del inspector web.

> El inspector web está incluido en el motor de renderizado web integrado. Para una descripción detallada de las funcionalidades de este depurador, consulte la documentación que ofrece el motor de renderizado web.




## Propiedades soportadas

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Progression](properties_WebArea.md#progression) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Use embedded Web rendering engine](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibilty](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 





