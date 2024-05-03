---
id: stylesheets
title: Hojas de estilo
---

Una hoja de estilo agrupa una combinación de atributos de objetos formulario, desde los atributos de texto hasta casi todos los atributos de objeto disponibles.

Además de armonizar la interfaz de sus aplicaciones, las hojas de estilo ofrecen tres grandes ventajas:

- Permite ahorrar tiempo durante el desarrollo: para cada objeto tiene un grupo específico de parámetros dentro de una sola operación.
- Facilita el mantenimiento: las hojas de estilo modifican la apariencia de todos los objetos que las utilicen, por lo que cambiar el tamaño de la fuente en una hoja de estilo cambiará el tamaño de la fuente para todos los objetos que utilicen esta misma hoja de estilo.
- Control del desarrollo multiplataforma: las hojas de estilo se pueden aplicar a las plataformas macOS y Windows, sólo a macOS o sólo a Windows. Cuando se aplica una hoja de estilo, 4D utiliza automáticamente la hoja de estilo apropiada.

## Creación o modificación de hojas de estilo

Puede crear hojas de estilo utilizando su editor de texto preferido y guardando el archivo con extensión ".css" en la carpeta "/SOURCES" del proyecto.

The 4D Tool Box provides a **Style Sheets** page as a shortcut option to create and edit one of three platform-specific named style sheets.

1. Open the **Style Sheets** page by choosing the **Tool Box > Style Sheet** from the Design menu or click on the **Tool Box** icon in the Form Editor toolbar.

![](../assets/en/FormEditor/stylesheets.png)

2. Select the type of style sheet to create and click on the **Create** or **Edit** button: ![](../assets/en/FormEditor/createButton.png)

3. La hoja de estilo se abrirá en su editor de texto predeterminado.

## Archivos hojas de estilo

4D acepta tres archivos específicos de hojas de estilo:

| Hoja de estilo                                               | Plataforma                                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| styleSheets.css                              | Hoja de estilo global por defecto para macOS y Windows                    |
| styleSheets_mac.css     | Para definir los estilos de atributos específicos de macOS únicamente     |
| styleSheets_windows.css | Para definir los estilos de atributos específicos para Windows únicamente |

Estos archivos se almacenan en la carpeta "/SOURCES" del proyecto. They can also be accessed directly via the [CSS Preview](formEditor.md#css-preview) in the Form editor toobar.

## Arquitectura de las hojas de estilo

Aunque adaptadas para satisfacer las necesidades específicas de los formularios 4D, las hojas de estilo para proyectos aplicación suelen seguir la sintaxis y la gramática CSS2.

Cada regla de estilo de una hoja de estilo contiene dos partes:

- a _Selector_ - A selector defines where to apply the style. 4D soporta los selectores "object type", "object name", "class", "all objects" y "attribute value".

- a _Declaration_ - The declaration defines the actual style to apply. Se pueden agrupar varias líneas de declaración para formar un bloque de declaración. Cada línea de un bloque de declaración CSS debe terminar con un punto y coma, y todo el bloque debe estar rodeado de llaves.

## Selectores de hojas de estilo

### Tipo de objeto

El tipo de objeto define el tipo de objeto al que hay que aplicar el estilo, y corresponde al selector de elementos CSS.

Especifique el tipo de objeto, luego entre llaves, declare el estilo o los estilos a aplicar.

> The object type corresponds to the JSON [type](FormObjects/properties_Object.md#type) property of form objects.

In the following example, all objects of the _button_ type will display text in the Helvetica Neue font, with a size of 20 pixels:

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

Corresponding to the CSS **ID selector**, the object name defines a specific object to style since the object's name is unique within the form.

Designe el objeto con un carácter "#" antes del nombre del objeto y, a continuación, entre llaves, declare el o los estilos a aplicar.

En el siguiente ejemplo, el texto del objeto con el nombre "okButton" se mostrará en fuente Helvetica Neue, con un tamaño de 20 píxeles:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

### Class

Corresponding to the CSS **class selector**, the class defines the style for all form objects with the `class` attribute.

Puede especificar las clases a utilizar con un caracter "." seguido del nombre de la clase, y entre llaves, declarar el o los estilos a aplicar.

In the following example, the text of all objects with the `okButtons` class will be displayed in Helvetica Neue font, with a size of 20 pixels, aligned in the center:

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

In the 4D form description, you associate a class name to an object using the `class` attribute. Este atributo contiene uno o varios nombres de clase, separados por un espacio:

```
class: "okButtons important"       
```

### Todos los objetos

Corresponding to the CSS **universal selector**, the "\*" character indicates that the following style will be applied to all objects on the form.

Indique que un estilo debe aplicarse a todos los objetos formulario con el carácter "\*" y, a continuación, entre llaves, declare el o los estilos que deben aplicarse.

En el siguiente ejemplo, todos los objetos tendrán un fondo gris:

```
* {
  fill: gray;
}
```

### Atributos específicos

Corresponding to the CSS **attribute selectors**, styles can be applied to all form objects with a specific attribute.

Especifique el atributo entre corchetes y, a continuación, entre llaves, declare el estilo o los estilos a aplicar.

#### Sintaxis soportadas

| Sintaxis                                                                                 | Descripción                                                                                             |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [attribute]                          | matches objects with the `attribute`                                                                    |
| [attribute="value"]                  | matches objects with the `attribute` value containing exactly the specified "value"                     |
| [attribute~="value"] | matches objects with the `attribute` value containing the "value" among a space-separated list of words |
| [attribute\|="value"]                | matches objects with an `attribute` whose value starts with "value"                                     |

#### Ejemplos

All objects with the `borderStyle` attribute will have purple lines:

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

A media query is composed of a media feature and a value (e.g., `\<media feature>:\<value>` ).

Funciones de medios disponibles:

- `prefers-color-scheme`

Expresiones de funcionalidades de medios disponibles:

- **light**<br/>For using a light scheme
- **dark**<br/>For using a dark scheme

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

- `method`
- `tipo`
- `class`
- `event`
- `choiceList`, `excludedList`, `labels`, `list`, `requiredList` (list type)

Form object attributes can be declared with their [JSON name](FormObjects/properties_Reference.md) as CSS attributes (not including object types, methods, events, and lists).

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

> 4D-specific values (_e.g._, `sunken`) are not supported when using CSS attribute names.

#### Valores de atributos específicos

- For `icon`, `picture`, and `customBackgroundPicture` attributes that support a path to an image, the syntax is:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* ruta absoluta */
icon: url("edit.png"); /* ruta relativa al archivo del formulario */
```

- For `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` and `verticalLineStroke`, three syntaxes are supported:

  - CSS color name: `fill: red;`
  - Hexa value: `fill: #FF0000;`
  - the `rgb()` function: `fill:rgb(255,0,0)`

- Si una cadena utiliza caracteres prohibidos en CSS, puede rodear la cadena con comillas simples o dobles. Por ejemplo:
  - a xliff reference: `tooltip: ":xliff:CommonMenuFile";`
  - a datasource with a field expression: `dataSource: "[Table_1:1]ID:1";`

## Orden de prioridad

Los proyectos 4D priorizan las definiciones de estilo en conflicto, primero por la definición del formulario y luego por las hojas de estilo.

### JSON vs Hoja de estilo

Si un atributo está definido en la descripción del formulario JSON y en una hoja de estilo, 4D utilizará el valor del archivo JSON.

To override this behavior, the style value must be followed with an `!important` declaration.

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

1. The 4D form will first load the default CSS file `/SOURCES/styleSheets.css`.
2. It will then load the CSS file for the current platform `/SOURCES/styleSheets_mac.css` or `/SOURCES/styleSheets_windows.css`.
3. Si existe, entonces cargará un archivo CSS específico definido en el formulario JSON:

- un archivo para ambas plataformas:

```
"css": "<path>" 
```

- o una lista de archivos para ambas plataformas:

```
"css": [
     "<path1>",
     "<path2>" 
      ],
```

- o una lista de archivos por plataforma:

```
 "css": [
        {"path": "<path>", "media": "mac"},
        {"path": "<path>", "media": "windows"},
    ],
```

> Las rutas de los archivos pueden ser relativas o absolutas.
>
> - Las rutas relativas se resuelven en relación con el archivo de descripción del formulario JSON.
> - Por razones de seguridad, sólo se aceptan las rutas del sistema de archivos para las rutas absolutas. (_e.g._, "/RESOURCES", "/DATA")

## Ver también

See the [**CSS for 4D Forms**](https://www.youtube.com/watch?v=3Hk4FUQENyQ) video presentation.
