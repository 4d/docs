---
id: stylesheets
title: Hojas de estilo
---


Una hoja de estilo agrupa una combinación de atributos de objetos formulario, desde los atributos de texto hasta casi todos los atributos de objeto disponibles.

Además de armonizar la interfaz de sus aplicaciones, las hojas de estilo ofrecen tres grandes ventajas:

* Permite ahorrar tiempo durante el desarrollo: para cada objeto tiene un grupo específico de parámetros dentro de una sola operación.
* Facilita el mantenimiento: las hojas de estilo modifican la apariencia de todos los objetos que las utilicen, por lo que cambiar el tamaño de la fuente en una hoja de estilo cambiará el tamaño de la fuente para todos los objetos que utilicen esta misma hoja de estilo.
* Control del desarrollo multiplataforma: las hojas de estilo se pueden aplicar a las plataformas macOS y Windows, sólo a macOS o sólo a Windows. Cuando se aplica una hoja de estilo, 4D utiliza automáticamente la hoja de estilo apropiada.

## Archivos hojas de estilo

4D acepta tres archivos específicos de hojas de estilo:

| Hoja de estilo          | Plataforma                                                                |
| ----------------------- | ------------------------------------------------------------------------- |
| styleSheets.css         | Hoja de estilo global por defecto para macOS y Windows                    |
| styleSheets_mac.css     | Para definir los estilos de atributos específicos de macOS únicamente     |
| styleSheets_windows.css | Para definir los estilos de atributos específicos para Windows únicamente |

Estos archivos se almacenan en la carpeta "/SOURCES" del proyecto. También se puede acceder directamente a través del [CSS Preview](formEditor.md#css-preview) en la barra de herramientas del editor de formularios.

## Arquitectura de las hojas de estilo

Aunque adaptadas para satisfacer las necesidades específicas de los formularios 4D, las hojas de estilo para proyectos aplicación suelen seguir la sintaxis y la gramática CSS2.

Cada regla de estilo de una hoja de estilo contiene dos partes:

* un *selector* - Un selector define dónde aplicar el estilo. 4D soporta los selectores "object type", "object name", "class", "all objects" y "attribute value".

* una *declaración* - La declaración define el estilo real a aplicar. Se pueden agrupar varias líneas de declaración para formar un bloque de declaración. Cada línea de un bloque de declaración CSS debe terminar con un punto y coma, y todo el bloque debe estar rodeado de llaves.

## Selectores de hojas de estilo

### Tipo de objeto

El tipo de objeto define el tipo de objeto al que hay que aplicar el estilo, y corresponde al selector de elementos CSS.

Especifique el tipo de objeto, luego entre llaves, declare el estilo o los estilos a aplicar.

> El tipo objeto corresponde a la propiedad JSON [tipo](FormObjects/properties_Object.md#type) de los objetos formulario.

En el siguiente ejemplo, todos los objetos del tipo *botón* mostrarán el texto en la fuente Helvetica Neue, con un tamaño de 20 píxeles:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

Para aplicar el mismo estilo a varios tipos de objetos, especifique los tipos de objetos separados por un "," y luego, entre llaves, declare el o los estilos a aplicar:

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### Nombre del objeto

El nombre del objeto corresponde al **selector de ID** CSS y define un objeto específico al que hay que dar estilo, ya que el nombre del objeto es único dentro del formulario.

Designe el objeto con un carácter "#" antes del nombre del objeto y, a continuación, entre llaves, declare el o los estilos a aplicar.

En el siguiente ejemplo, el texto del objeto con el nombre "okButton" se mostrará en fuente Helvetica Neue, con un tamaño de 20 píxeles:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

### Class

Class corresponde al **selector class** CSS y define el estilo para todos los objetos formulario con el atributo `class`.

Puede especificar las clases a utilizar con un caracter "." seguido del nombre de la clase, y entre llaves, declarar el o los estilos a aplicar.

En el siguiente ejemplo, el texto de todos los objetos con el nombre de la clase `okButtons` se mostrará en la fuente Helvetica Neue, con un tamaño de 20 píxeles, alineado al centro:

```
.okButtons {
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: center;
}
```

Para indicar que un estilo debe aplicarse sólo a los objetos de un tipo determinado, especifique el tipo seguido de "." y el nombre de la clase, y luego, entre llaves, declare el estilo o los estilos a aplicar.

```
text.center {
  text-align: center;
  stroke: red;
}
```

En la descripción del formulario 4D, se asocia un nombre de clase a un objeto mediante el atributo `class`. Este atributo contiene uno o varios nombres de clase, separados por un espacio:

```
class: "okButtons important"       
```

### Todos los objetos

En correspondencia con el selector CSS **universal**, el carácter "*" indica que el siguiente estilo se aplicará a todos los objetos del formulario.

Indique que un estilo debe aplicarse a todos los objetos formulario con el carácter "*" y, a continuación, entre llaves, declare el o los estilos que deben aplicarse.

En el siguiente ejemplo, todos los objetos tendrán un fondo gris:

```
* {
  fill: gray;
}
```

### Atributos específicos

Los estilos correspondientes a los **selectores de atributos** CSS se pueden aplicar a todos los objetos formulario con un atributo específico.

Especifique el atributo entre corchetes y, a continuación, entre llaves, declare el estilo o los estilos a aplicar.

#### Sintaxis soportadas

| Sintaxis                  | Descripción                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [attribute]               | coincide con objetos con el `attribute`                                                                                          |
| [attribute="value"]       | coincide con objetos cuyo valor del `attribute` contenga exactamente el "valor" especificado                                     |
| [attribute~="value"]      | coincide con los objetos con el valor del `attribute` que contiene el "valor" entre una lista de palabras separadas por espacios |
| [attribute&#124;="value"] | coincide con objetos con un `attribute` cuyo valor empieza por "valor"                                                           |

#### Ejemplos

Todos los objetos con el atributo `borderStyle` tendrán líneas moradas:

```
[borderStyle]
{
     stroke: purple;
}
```

Todos los objetos de tipo texto con un atributo texto cuyo valor sea "Hello" tendrán letras azules:

```
text[text=Hello]
{
     stroke: blue;
}
```

Todos los objetos con un atributo texto cuyo valor sea "Hello" tendrán letras azules:

```
[text~=Hello]
{
     stroke: blue;
}

```

Todos los objetos de tipo texto con un atributo texto cuyo valor comience por "Hello" tendrán letras azules:

```
text[text|=Hello]
{
     stroke: yellow;


}
```

## Declaraciones de hojas de estilo

### Consultas de medios

Las consultas de medios se utilizan para aplicar esquemas de color a las aplicaciones.

Una media query está formada por una funcionalidade media y un valor (por ejemplo, `\&#060;media feature&#062;:\&#060;value&#062;`).

Funciones de medios disponibles:

* `prefers-color-scheme`

Expresiones de funcionalidades de medios disponibles:

* **light**<br/>Para utilizar un esquema de luz
* **oscuro**<br/>Para utilizar un esquema oscuro

> Los esquemas de color sólo son soportados en macOS.

##### Ejemplo

Este CSS define una combinación de colores para el texto y el fondo del texto en el esquema claro (por defecto) y otra combinación cuando se selecciona el esquema oscuro:

```
@media (prefers-color-scheme: light) {
 .textScheme {
   fill: LightGrey;
   stroke: Black;
  }
}

@media (prefers-color-scheme: dark) {
  .textScheme {
    fill: DarkSlateGray;
    stroke: LightGrey;
  }
}
```

### Atributos de objetos

La mayoría de los atributos del objeto formulario pueden ser definidos dentro de una hoja de estilo, excepto los siguientes atributos:

* `method`
* `type`
* `class`
* `evento`
* `choiceList`, `excludedList`, `labels`, `list`, `requiredList` (tipo de lista)

Los atributos del objeto formulario pueden declararse con su [nombre JSON](FormObjects/properties_Reference.md) como atributos CSS (sin incluir los tipos de objetos, métodos, eventos y listas).

#### Mapa de atributos

Los atributos listados a continuación pueden aceptar el nombre 4D o el nombre CSS.

| 4D               | CSS                |
| ---------------- | ------------------ |
| `borderStyle`    | `border-style`     |
| `fill`           | `background-color` |
| `fontFamily`     | `font-family`      |
| `fontSize`       | `font-size`        |
| `fontStyle`      | `font-style`       |
| `fontWeight`     | `font-weight`      |
| `stroke`         | `color`            |
| `textAlign`      | `text-align`       |
| `textDecoration` | `text-decoration`  |
| `verticalAlign`  | `vertical-align`   |
> Los valores específicos 4D (*por ejemplo*, `hundido`) no se soportan cuando se utilizan nombres de atributos CSS.

#### Valores de atributos específicos

* Para los atributos `icon`, `picture` y `customBackgroundPicture` que soportan una ruta a una imagen, la sintaxis es:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* ruta absoluta */
icon: url("edit.png"); /* ruta relativa al archivo del formulario */
```

* Para `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` y `verticalLineStroke`, se soportan tres sintaxis:

  * Nombre del color CSS: `fill: red;`
  * Valor hexadécimal: `fill: #FF0000;`
  * función `rgb()`: `fill:rgb(255,0,0)`

* Si una cadena utiliza caracteres prohibidos en CSS, puede rodear la cadena con comillas simples o dobles. Por ejemplo:
  * una referencia xliff: `tooltip: ":xliff:CommonMenuFile";`
  * un datasource con la expresión de campo: `dataSource: "[Table_1:1]ID:1";`

## Orden de prioridad

Los proyectos 4D priorizan las definiciones de estilo en conflicto, primero por la definición del formulario y luego por las hojas de estilo.

### JSON vs Hoja de estilo

Si un atributo está definido en la descripción del formulario JSON y en una hoja de estilo, 4D utilizará el valor del archivo JSON.

Para anular este comportamiento, el valor del estilo debe ir seguido de una declaración `!important`.

**Ejemplo 1:**

| Descripción del formulario JSON | Hoja de estilo | 4D muestra |
| ------------------------------- | -------------- | ---------- |
| `"text": "Button",`             | `text: Edit;`  | `"Button"` |

**Ejemplo 2:**

| Descripción del formulario JSON | Hoja de estilo           | 4D muestra |
| ------------------------------- | ------------------------ | ---------- |
| `"text": "Button",`             | `text: Edit !important;` | `"Edit"`   |

### Hojas de estilo múltiples

Durante la ejecución, 4D prioriza automáticamente las hojas de estilo en el siguiente orden:

1. El formulario 4D cargará primero el archivo CSS por defecto `/SOURCES/styleSheets.css`.
2. Luego cargará el archivo CSS para la plataforma actual `/SOURCES/styleSheets_mac.css` o `/SOURCES/styleSheets_windows.css`.
3. Si existe, entonces cargará un archivo CSS específico definido en el formulario JSON:

* un archivo para ambas plataformas:

 ```
 "css": "<path>" 
 ```

* o una lista de archivos para ambas plataformas:

 ```
 "css": [
      "<path1>",
      "<path2>" 
       ],
 ```

* o una lista de archivos por plataforma:

 ```
  "css": [
         {"path": "<path>", "media": "mac"},
         {"path": "<path>", "media": "windows"},
     ],
 ```

> Las rutas de los archivos pueden ser relativas o absolutas.
> 
> * Las rutas relativas se resuelven en relación con el archivo de descripción del formulario JSON.
> * Por razones de seguridad, sólo se aceptan las rutas del sistema de archivos para las rutas absolutas. (*e.g.*, "/RESOURCES", "/DATA")

## Creación o modificación de hojas de estilo

Puede crear hojas de estilo utilizando su editor de texto preferido y guardando el archivo con extensión ".css" en la carpeta "/SOURCES" del proyecto.

La caja de herramientas de 4D ofrece una página **Hojas de estilo** como opción de acceso directo para crear y editar una de las tres hojas de estilo con nombre específicas de la plataforma.

1. Abra la página **Estilos** eligiendo la **Caja de herramientas > Styles** del menú Diseño o haga clic en el icono **Caja de herramientas** de la barra de herramientas del editor de formularios.

 ![](../assets/en/FormEditor/stylesheets.png)

2. Seleccione el tipo de hoja de estilo que desea crear y haga clic en el botón **Crear** o **Editar**: ![](../assets/en/FormEditor/createButton.png)

3. La hoja de estilo se abrirá en su editor de texto predeterminado.  
