---
id: stylesheets
title: Hojas de estilo
---


Una hoja de estilo agrupa una combinación de atributos de objetos formulario, desde los atributos de texto hasta casi todos los atributos de objeto disponibles.

Además de armonizar la interfaz de sus aplicaciones, las hojas de estilo ofrecen tres grandes ventajas:

*   Permite ahorrar tiempo durante el desarrollo: para cada objeto tiene un grupo específico de parámetros dentro de una sola operación.
*   Facilita el mantenimiento: las hojas de estilo modifican la apariencia de todos los objetos que las utilicen, por lo que cambiar el tamaño de la fuente en una hoja de estilo cambiará el tamaño de la fuente para todos los objetos que utilicen esta misma hoja de estilo.
*   Control del desarrollo multiplataforma: las hojas de estilo se pueden aplicar a las plataformas macOS y Windows, sólo a macOS o sólo a Windows. Cuando se aplica una hoja de estilo, 4D utiliza automáticamente la hoja de estilo apropiada.

## Archivos hojas de estilo

4D acepta tres archivos específicos de hojas de estilo:

| Hoja de estilo          | Plataforma                                                                |
| ----------------------- | ------------------------------------------------------------------------- |
| styleSheets.css         | Default global style sheet for both macOS and Windows                     |
| styleSheets_mac.css     | For defining macOS only specific attribute styles                         |
| styleSheets_windows.css | Para definir los estilos de atributos específicos para Windows únicamente |

Estos archivos se almacenan en la carpeta "/SOURCES" del proyecto. They can also be accessed directly via the [CSS Preview](formEditor.md#css-preview) in the Form editor toobar.


## Arquitectura de las hojas de estilo

While adapted to meet the specific needs of 4D forms, style sheets for application projects generally follow CSS2 syntax and grammar.

Every style rule in a style sheet contains two parts:

*   a *Selector* - A selector defines where to apply the style. 4D supports "object type", "object name", "class", "all objects", as well as "attribute value" selectors.

*   a *Declaration* - The declaration defines the actual style to apply. Multiple declaration lines can be grouped together to form a declaration block. Each line in a CSS declaration block must end with a semicolon, and the entire block must be surrounded by curly braces.



## Selectores de hojas de estilo


### Tipo de objeto

Corresponding to the CSS element selector, the object type defines the type of object to style.

Specify the object type, then in curly braces, declare the style(s) to apply.

> The object type corresponds to the JSON [type](FormObjects/properties_Object.md#type) property of form objects.

In the following example, all objects of the *button* type will display text in the Helvetica Neue font, with a size of 20 pixels:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

To apply the same style to multiple types of objects, specify the object types separated by a "," then in curly braces, declare the style(s) to apply:

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### Object Name

Corresponding to the CSS **ID selector**, the object name defines a specific object to style since the object's name is unique within the form.

Designate the object with a "#" character before the object's name, then in curly braces, declare the style(s) to apply.

In the following example, the text of the object with the name "okButton" will be displayed in Helvetica Neue font, with a size of 20 pixels:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```



### Class

Corresponding to the CSS **class selector**, the class defines the style for all form objects with the `class` attribute.

You can specify the classes to use with a "." character followed by the name of the class, and in curly braces, declare the style(s) to apply.

In the following example, the text of all objects with the `okButtons` class will be displayed in Helvetica Neue font, with a size of 20 pixels, aligned in the center:

```
.okButtons {
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: center;
}
```

To designate that a style should be applied only to objects of a distinct type, specify the type followed by "." and the name of the class, then in curly braces, declare the style(s) to apply.

```
text.center {
  text-align: center;
  stroke: red;
}
```

In the 4D form description, you associate a class name to an object using the `class` attribute. This attribute contains one or several class names, separated by a space character:

```
class: "okButtons important"             
```


### Todos los objetos

Corresponding to the CSS **universal selector**, the "*" character indicates that the following style will be applied to all objects on the form.

Designate that a style should apply to all form objects with the "*" character, then in curly braces, declare the style(s) to apply.

In the following example, all objects will have a gray fill:

```
* {
  fill: gray;
}
```


### Atributos específicos

Corresponding to the CSS **attribute selectors**, styles can be applied to all form objects with a specific attribute.

Specify the attribute within brackets, then in curly braces, declare the style(s) to apply.

#### Supported syntaxes

| Sintaxis                  | Descripción                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| [attribute]               | matches objects with the `attribute`                                                                    |
| [attribute="value"]       | matches objects with the `attribute` value containing exactly the specified "value"                     |
| [attribute~="value"]      | matches objects with the `attribute` value containing the "value" among a space-separated list of words |
| [attribute&#124;="value"] | matches objects with an `attribute` whose value starts with "value"                                     |

#### Ejemplos

All objects with the `borderStyle` attribute will have purple lines:

```
[borderStyle]
{
     stroke: purple;
}
```

All objects of the text type with a text attribute whose value is "Hello" will have blue letters:


```
text[text=Hello]
{
     stroke: blue;
}
```

All objects with a text attribute whose value contains "Hello" will have blue lines:

```
[text~=Hello]
{
     stroke: blue;
}

```

All objects of the text type with a text attribute whose value starts with "Hello" will have yellow letters:

```
text[text|=Hello]
{
     stroke: yellow;


}
```


## Declaraciones de hojas de estilo

### Media Queries

Media queries are used to apply color schemes to an application.

A media query is composed of a media feature and a value (e.g., \<media feature>:\<value> ).


Available media features:

*   `prefers-color-scheme`


Available media feature expressions:

*   **light**<br>For using a light scheme
*   **dark**<br>For using a dark scheme

> Color schemes are only supported on macOS.

##### Ejemplo

This CSS defines a color combination for text and text background in the light scheme (default) and another combination when the dark scheme is selected:

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


### Object Attributes

The majority of form object attributes can be defined within a style sheet, except the following attributes:
    - `method`
    - `type`
    - `class`
    - `event`
    - `choiceList`, `excludedList`, `labels`, `list`, `requiredList` (list type)

Form object attributes can be declared with their [JSON name](FormObjets/properties_Reference.md) as CSS attributes (not including object types, methods, events, and lists).

#### Mapa de atributos

The attributes listed below are able to accept either the 4D name or the CSS name.

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
> 4D-specific values (*e.g.*, `sunken`) are not supported when using CSS attribute names.


#### Valores de atributos específicos

- Para los atributos `icon`, `picture` y `customBackgroundPicture` que soportan una ruta a una imagen, la sintaxis es:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* ruta absoluta */
icon: url("edit.png"); /* ruta relativa al archivo del formulario */
```

- Para `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` y `verticalLineStroke`, se soportan tres sintaxis:

    - Nombre del color CSS: `fill: red;`
    - Valor hexadécimal: `fill: #FF0000;`
    - función `rgb()`: `fill:rgb(255,0,0)`

- Si una cadena utiliza caracteres prohibidos en CSS, puede rodear la cadena con comillas simples o dobles. Por ejemplo:
    - una referencia xliff: `tooltip: ":xliff:CommonMenuFile";`
    - un datasource con la expresión de campo: `dataSource: "[Table_1:1]ID:1";`


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

1.  El formulario 4D cargará primero el archivo CSS por defecto `/SOURCES/styleSheets.css`.
2.  Luego cargará el archivo CSS para la plataforma actual `/SOURCES/styleSheets_mac.css` o `/SOURCES/styleSheets_windows.css`.
3.  Si existe, entonces cargará un archivo CSS específico definido en el formulario JSON:

    *   un archivo para ambas plataformas:

    ```
    "css": "<path>" 
    ```

    *   o una lista de archivos para ambas plataformas:

    ```
    "css": [
         "<path1>",
         "<path2>" 
          ],
    ```

    *   o una lista de archivos por plataforma:

    ```
     "css": [
            {"path": "<path>", "media": "mac"},
            {"path": "<path>", "media": "windows"},
        ],
    ```

> Las rutas de los archivos pueden ser relativas o absolutas. * Las rutas relativas se resuelven en relación con el archivo de descripción del formulario JSON. * Por razones de seguridad, sólo se aceptan las rutas del sistema de archivos para las rutas absolutas. (*e.g.*, "/RESOURCES", "/DATA")


## Creación o modificación de hojas de estilo

Puede crear hojas de estilo utilizando su editor de texto preferido y guardando el archivo con extensión ".css" en la carpeta "/SOURCES" del proyecto.

The 4D Tool Box provides a **Style Sheets** page as a shortcut option to create and edit one of three platform-specific named style sheets.

1.  Open the **Style Sheets** page by choosing the **Tool Box > Style Sheet** from the Design menu or click on the **Tool Box** icon in the Form Editor toolbar.

    ![](assets/en/FormEditor/stylesheets.png)

2.  Select the type of style sheet to create and click on the **Create** or **Edit** button: ![](assets/en/FormEditor/createButton.png)

3. The style sheet will open in your default text editor.  
