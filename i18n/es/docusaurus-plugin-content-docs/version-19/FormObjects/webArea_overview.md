---
id: webAreaOverview
title: Área Web
---


Las áreas web pueden mostrar varios tipos de contenido web dentro de sus formularios: páginas HTML con contenidos estáticos o dinámicos, archivos, imágenes, JavaScript, etc. El motor de renderizado del área web depende de la plataforma de ejecución de la aplicación y de [la opción motor de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) seleccionada.

Es posible crear varias áreas web en el mismo formulario. Tenga en cuenta, sin embargo, que el uso de las áreas web debe seguir [varias reglas](#web-area-rules).

Varias [acciones estándar](#standard-actions) dedicadas, numerosos [comandos de lenguaje](https://doc.4d.com/4Dv18/4D/18/Web-Area.201-4504309.en.html) así como también [eventos formulario](#form-events) genéricos y específicos, permiten al desarrollador controlar el funcionamiento de las áreas web. Se pueden utilizar variables específicas para intercambiar información entre el área y el entorno 4D.
> No se recomienda el uso de plugins web ni de applets de Java en las áreas web porque pueden provocar inestabilidad en el funcionamiento de 4D, especialmente a nivel de gestión de eventos.

## Propiedades específicas

### Variables asociadas

Se pueden asociar dos variables específicas a cada área web:

- [`URL`](properties_WebArea.md#url) --para controlar la URL que muestra el área web
- [`Progresión`](properties_WebArea.md#progression) -- para controlar el porcentaje de carga de la página mostrada en el área web.

### Motor de renderización web

Puede elegir entre [dos motores de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) para el área web, dependiendo de las particularidades de su aplicación.

La selección del motor de renderizado web anidado le permite llamar a los métodos 4D desde el área web.

### Acceder a los métodos 4D

Cuando se selecciona la propiedad [Acceder a los métodos 4D](properties_WebArea.md#access-4d-methods), se puede llamar a los métodos 4D desde un área web.

:::note Notas

- Esta propiedad sólo está disponible si el área web [utiliza el motor de renderizado web integrado](properties_WebArea.md#use-embedded-web-rendering-engine).
- Por razones de seguridad, ya que permite ejecutar código 4D, esta opción solo debe habilitarse para páginas de confianza, como las páginas generadas por la aplicación.

:::

### Objeto $4d

El [motor de renderizado web integrado 4D](properties_WebArea.md#use-embedded-web-rendering-engine) suministra al área un objeto JavaScript llamado $4d que puede asociar a cualquier método proyecto 4D utilizando la notación objeto ".".

Por ejemplo, para llamar al método `HelloWorld` de 4D, basta con ejecutar la siguiente declaración:

```js
$4d.HelloWorld();
```
> JavaScript es sensible a las mayúsculas y minúsculas, por lo que es importante tener en cuenta que el objeto se llama $4d (con "d" minúscula).

La sintaxis de las llamadas a los métodos 4D es la siguiente:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: Puede pasar tantos parámetros como necesite al método 4D. Estos parámetros pueden ser de cualquier tipo soportado por JavaScript (cadena, número, array, objeto).

- `function(result)`: Función a pasar como último argumento. Esta función "callback" se llama de forma sincrónica una vez que el método 4D termina de ejecutarse. Recibe el parámetro `result`.

- `result`: resultado de la ejecución del método 4D, devuelto en la expresión "$0". Este resultado puede ser de cualquier tipo soportado por JavaScript (cadena, número, array, objeto). Puede utilizar el comando `C_OBJECT` para devolver los objetos.

> Por defecto, 4D trabaja en UTF-8. Cuando devuelva un texto que contenga caracteres extendidos, por ejemplo, caracteres con acentos, asegúrese de que la codificación de la página mostrada en el área web esté declarada como UTF-8, ya que de lo contrario los caracteres podrían representarse incorrectamente. In this case, add the following line in the HTML page to declare the encoding: `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Ejemplo 1

Dado un método proyecto 4D llamado `today` que no recibe parámetros y devuelve la fecha actual como una cadena.

Código 4D del método `today`:

```4d
 C_TEXT($0)
 $0:=String(Current date;System date long)
```

En el área web, el método 4D puede ser llamado con la siguiente sintaxis:

```js
$4d.today()
```

El método 4D no recibe ningún parámetro pero devuelve el valor $0 a la función callback llamada por 4D tras la ejecución del método. Queremos mostrar la fecha en la página HTML que es cargada por el área web.

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

Hay cuatro acciones estándar específicas para gestionar las áreas web de forma automática: `Open Back URL`, `Open Forward URL`, `Refresh Current URL` y `Stop Loading URL`. Estas acciones pueden asociarse a botones o comandos de menú y permiten una rápida implementación de interfaces web básicas. Estas acciones se describen en [Acciones estándar](https://doc.4d.com/4Dv17R6/4D/17-R6/Standard-actions.300-4354791.en.html).

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

- **Comandos menú Edición**: cuando el área web tiene el foco, los comandos del menú **Edición** pueden utilizarse para realizar acciones como copiar, pegar, seleccionar todo, etc., según la selección.
- **El menú contextual**: es posible utilizar el [menú contextual](properties_Entry.md#context-menu) estándar del sistema con el área web. La visualización del menú contextual se puede controlar con el comando `WA SET PREFERENCE`.
- **Arrastrar y soltar**: el usuario puede arrastrar y soltar texto, imágenes y documentos dentro del área web o entre un área web y los objetos de los formularios 4D, según las propiedades de los objetos 4D. Por razones de seguridad, no se permite por defecto cambiar el contenido de un área web mediante la acción de arrastrar y soltar un archivo o una URL. En este caso, el cursor muestra un icono "prohibido" ![](../assets/en/FormObjects/forbidden.png). Tiene que utilizar el comando `WA SET PREFERENCE` para permitir explícitamente soltar URLs o archivos en el área web.

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

Puede visualizar y utilizar un inspector web dentro de las áreas web de sus formularios o en las áreas web fuera de la pantalla. El inspector web es un depurador que ofrece el motor web integrado. Permite analizar el código y el flujo de información de las páginas web.

### Mostrar el inspector web

Para mostrar el inspector web, puede ejecutar el comando `WA OPEN WEB INSPECTOR` o utilizar el menú contextual del área web.

- **Execute the `WA OPEN WEB INSPECTOR` command**<br/> This command can be used directly with onscreen (form object) and offscreen web areas. En el caso de un área web en pantalla, debe haber [seleccionado el motor de renderizado web integrado](properties_WebArea.md#use-embedded-web-rendering-engine) para el área (el inspector web sólo está disponible con esta configuración).

- **Use the web area context menu**<br/> This feature can only be used with onscreen web areas and requires that the following conditions are met:
  - se selecciona el motor de renderizado web integrado para el área
  - el [menú contextual](properties_Entry.md#context-menu) del área web está activado
  - el uso del inspector está expresamente autorizado en el área mediante la siguiente declaración:

```4d
 WA SET PREFERENCE(*;"WA";WA enable Web inspector;True)
```

Para más información, consulte la descripción del comando `WA SET PREFERENCE`.

### Utilización del inspector web

Cuando haya realizado los ajustes como se ha descrito anteriormente, entonces tendrá nuevas opciones como **Inspeccionar elemento** en el menú contextual del área. Al seleccionar esta opción, se muestra la ventana del inspector web.

> El inspector web está incluido en el motor de renderizado web integrado. Para una descripción detallada de las funcionalidades de este depurador, consulte la documentación que ofrece el motor de renderizado web.

## Propiedades soportadas

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Menú contextual](properties_Entry.md#context-menu) - [Altura](properties_CoordinatesAndSizing.md#height) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Método](properties_Action.md#method) - [Nombre de objeto](properties_Object.md#object-name) - [Progresión](properties_WebArea.md#progression) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Utilizar motor de renderizado web integrado](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)
