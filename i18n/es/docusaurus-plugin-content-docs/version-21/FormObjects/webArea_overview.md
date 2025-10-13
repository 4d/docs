---
id: webAreaOverview
title: Área Web
---

Las áreas web pueden mostrar varios tipos de contenido web dentro de sus formularios: páginas HTML con contenidos estáticos o dinámicos, archivos, imágenes, JavaScript, etc. El motor de renderizado del área web depende de la plataforma de ejecución de la aplicación y de la [opción motor de renderizado](properties_WebArea.md#use-embedded-web-rendering-engine) seleccionada.

Es posible crear varias áreas web en el mismo formulario. Tenga en cuenta, sin embargo, que el uso de las áreas web debe seguir [varias reglas](#web-area-rules).

Varias [acciones estándar](#standard-actions) dedicadas, numerosos [comandos de lenguaje](../category/web-area) así como [eventos de formulario](#form-events) genéricos y específicos permiten al desarrollador controlar el funcionamiento de las áreas web. Se pueden utilizar variables específicas para intercambiar información entre el área y el entorno 4D.

:::info Displaying Qodly pages

In 4D client/server applications, Web areas can be used to display Qodly pages and [share the remote user session](../Desktop/clientServer.md#sharing-the-session-with-qodly-pages-in-web-areas). This feature allows you to design web-based interfaces for your client/server desktop applications.

:::

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

## Objeto $4d

The [`4D embedded web rendering engine`](properties_WebArea.md#use-embedded-web-rendering-engine) provides a **JavaScript object named `$4d`** in the web area. Por defecto, `$4d` permite acceder a todos los métodos proyecto 4D utilizando la notación de puntos.

Por ejemplo, llamando al método `HelloWorld` en 4D:

```js
$4d.HelloWorld();
```

> **Note:** JavaScript is **case-sensitive**, so the object is named **`$4d`** (with a lowercase "d").

### Controlar el acceso a $4d

Con [`WA SET CONTEXT`](../commands/wa-set-context.md), los desarrolladores pueden controlar lo que puede estar disponible a través de `$4d` desde un área Web. Using this command you define a **context object** that declares for example 4D methods through formulas and class instances.

Para verificar el contexto definido actualmente, utilice [`WA Get context`](../commands/wa-get-context.md).

Para más información, consulte [`WA SET CONTEXT`](../commands/wa-set-context.md).

### Llamada a métodos 4D desde JavaScript

La sintaxis de las llamadas a los métodos 4D es la siguiente:

```js
$4d.4DMethodName(param1,paramN,function(result){})
```

- `param1...paramN`: puede pasar tantos parámetros como necesite al método 4D.
  Estos parámetros pueden ser de cualquier tipo soportado por JavaScript (cadena, número, array, objeto).

- `function(result)`: función a pasar como último argumento. Esta función "callback" se llama de forma sincrónica una vez que el método 4D termina de ejecutarse. Recibe el parámetro `result`.

- `result`: resultado de la ejecución del método 4D. Este resultado puede ser de cualquier tipo soportado por JavaScript (cadena, número, array, objeto).

> Por defecto, 4D trabaja en UTF-8. Cuando devuelva un texto que contenga caracteres extendidos, por ejemplo, caracteres con acentos, asegúrese de que la codificación de la página mostrada en el área web esté declarada como UTF-8, ya que de lo contrario los caracteres podrían representarse incorrectamente. En este caso, añada la siguiente línea en la página HTML para declarar la codificación:
> `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />`

#### Ejemplo 1

Dado un método proyecto 4D llamado `today`que no recibe parámetros y devuelve la fecha actual como una cadena.

Código 4D del método `today`:

```4d
#DECLARE -> $result : Text
$result := String(Current date;System date long)
```

En el área web, el método 4D puede ser llamado con la siguiente sintaxis:

```js
$4d.today()
```

El método 4D no recibe ningún parámetro pero devuelve el resultado a la función de retrollamada por 4D después de la ejecución del método. Queremos mostrar la fecha en la página HTML que es cargada por el área web.

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

En lugar de utilizar un método independiente, también podemos definir una **clase** que se encargue del cálculo.

Define the Class with 4D project method `calcSum` which receives parameters and returns their sum:

```4d
// SumCalculator user class

Function calcSum(... : Real) -> $sum : Real
   // receives n Real type parameters
   // and returns a Real
  var $i; $n : Integer
  $n := Count parameters

  For ($i; 1; $n)
    $sum += ${$i}
  End for
```

En otro método, creamos una instancia y la asignamos a $4d

```4d
var $myCalculator := cs.SumCalculator.new()
WA SET CONTEXT OBJECT(*; "myWebArea"; $myCalculator)
```

El código JavaScript que se ejecuta en el área web es el siguiente:

```js
$4d.calcSum(33, 45, 75, 102.5, 7, function(theSum)
    {
        var result = theSum // el resultado es 262.5
});
```

## Acciones estándar

Existen cuatro acciones estándar específicas para gestionar automáticamente las áreas web: `Open Back URL`, `Open Forward URL`, `Refresh Current URL` y `Stop Loading URL`. Estas acciones pueden asociarse a botones o comandos de menú y permiten una rápida implementación de interfaces web básicas. Estas acciones pueden asociarse a botones o comandos de menú y permiten una rápida implementación de interfaces web básicas.

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
- **Menú contextual**: es posible utilizar el [menú contextual] estándar (properties_Entry.md#context-menu) del sistema con el área web. La visualización del menú contextual puede controlarse utilizando el comando [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md).
- **Arrastrar y soltar**: el usuario puede arrastrar y soltar texto, imágenes y documentos dentro del área web o entre un área web y los objetos de los formularios 4D, según las propiedades de los objetos 4D.
  Por razones de seguridad, no se permite por defecto cambiar el contenido de un área web mediante la acción de arrastrar y soltar un archivo o una URL. En este caso, el cursor muestra un icono de "prohibido" ![](../assets/en/FormObjects/forbidden.png). Tiene que usar la instrucción `WA SET PREFERENCE(*; "warea";WA enable URL drop;True)` para mostrar un icono "drop" y generar el evento [`On Window Opening Denied`](Events/onWindowOpeningDenied.md). En este evento, puede llamar al comando [`WA OPEN URL`](../commands-legacy/wa-open-url.md) o definir la [variable URL](properties_WebArea.md#url) en respuesta a un soltar del usuario.

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

Para mostrar el inspector Web, puede ejecutar el comando `WA OPEN WEB INSPECTOR` o utilizar el menú contextual del área web.

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

Para más información, consulte la descripción del comando [`WA SET PREFERENCE`](../commands-legacy/wa-set-preference.md).

Cuando haya realizado los ajustes como se ha descrito anteriormente, entonces tendrá nuevas opciones como **Inspeccionar el elemento** en el menú contextual del área. Al seleccionar esta opción, se muestra la ventana del inspector web.

> Para una descripción detallada de las funcionalidades de este depurador, consulte la documentación que ofrece el motor de renderizado web.

## Propiedades soportadas

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Fondo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Menú contextual](properties_Entry.md#context-menu) - [Altura](properties_CoordinatesAndSizing.md#height) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Método](properties_Action.md#method) - [Nombre del objeto](properties_Object.md#nombre-del-objeto) - [Progresión](properties_WebArea.md#progression) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [URL](properties_WebArea.md#url) - [Usar motor de renderizado web incrustado](properties_WebArea.md#use-embedded-web-rendering-engine) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)

## 4DCEFParameters.json

El 4DCEFParameters.json es un archivo de configuración que permite la personalización de los parámetros CEF para gestionar el comportamiento de las áreas web dentro de las aplicaciones 4D.

Se suministran [interruptores predeterminados](#default-file), pero puede reemplazarlos utilizando un archivo 4DCEFParameters.json personalizado.

En la fase de desarrollo (utilizando la aplicación 4D), cree un archivo 4DCEFParameters.json en la siguiente ubicación:

- Windows: `Users\[userName]\AppData\Roaming\4D\4DCEFParameters.json`
- macOS: `$HOME/Library/Application Support/4D/4DCEFParameters.json`

Antes de generar la aplicación final, añada el archivo personalizado 4DCEFParameters.json a la carpeta Resources del proyecto.

:::warning

Añadir un archivo 4DCEFParameters.json personalizado puede afectar fundamentalmente a todas las áreas web integradas de 4D, incluyendo las [áreas 4D View Pro](../ViewPro/configuring.md#form-area-properties). Es responsabilidad del desarrollador asegurarse de que los interruptores personalizados no desestabilizan la aplicación 4D.

:::

El formato del archivo 4DCEFParameters.json es el siguiente:

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

La estructura del archivo 4DCEFParameters.json contiene:

- **switches**: una lista de switches CEF y sus correspondientes valores aplicados tanto para macOS como para Windows.
- **macOS.switches**: conmutadores CEF específicos de macOS.
- **windows.switches**: interruptores CEF específicos para Windows.

Los interruptores del archivo personalizado tienen prioridad. En caso de duplicación de interruptores dentro del mismo archivo, los interruptores definidos en la subsección específica de la plataforma ("macOS.switches" o "windows.switches") tienen prioridad y son usadas para la configuración.

:::note

La lista de conmutadores compatibles evoluciona constantemente y está gestionada por el equipo de desarrollo de CEF. Para obtener información sobre los conmutadores disponibles, debe consultar la comunidad de desarrolladores de CEF.

:::

### Ejemplos

#### Archivo por defecto

El archivo 4DCEFParameters.json por defecto contiene los siguientes cambios:

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

#### Ejemplo de desactivación del interruptor por defecto

```json
{
  "switches": {
    "disable-javascript": true,
    "disable-web-security": true
  }
}
```

#### Ejemplo para Autoplay

```json
{
  "switches":{
     "autoplay-policy": "no-user-gesture-required"
  }
}
```

### Ver también

[Especifique sus propios parámetros para inicializar el área web integrada (entrada de blog)](https://blog.4d.com/specify-your-own-parameters-to-initialize-the-embedded-web-area)




