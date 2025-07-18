---
id: managing-formulas
title: Gestión de fórmulas
---

## Generalidades

4D Write Pro documents can contain references to 4D formulas such as variables, fields, expressions, project methods, or 4D commands. Información específica como el número de página también puede ser referenciada a través de fórmulas (ver [Inserción de documentos y expresiones de página](#inserting-date-and-time-formulas) más abajo).

Inserting formulas in 4D Write Pro areas is done with the [**WP INSERT FORMULA**](commands/wp-insert-formula.md) command and can be read using the [**WP Get formulas**](commands-legacy/wp-get-formulas.md) command. They are also returned by the [**WP Get text**](commands-legacy/wp-get-text.md) command.

Las fórmulas son evaluadas:

- when they are inserted in a form object which displays computed values
- when the 4D Write Pro object is loaded in a form object which displays computed values
- when the [**WP COMPUTE FORMULAS**](commands-legacy/wp-compute-formulas.md) command is called
- cuando estén "congelados" usando el comando [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) (si aún no se ha calculado)
- antes de imprimir (si no se ha calculado ya)
- before exporting to .docx (if the formula can't be mapped with MS Word formulas)
- when the standard actions to freeze, print, export, or compute formulas are called. Ver *Acciones estándar*

Formulas are not evaluated when a document is loaded (using [**WP New**](commands-legacy/wp-new.md), [**WP Insert document body**](commands/wp-insert-document-body.md), or `wpArea:=[table]field`):

- if the document is only offscreen,
- if the document is displayed onscreen but the form object only shows references.

Formulas become static values if you call the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command (except for page number and page count, see below).

**Compatibility Note**: *Handling expressions using the [**ST INSERT EXPRESSION**](../commands-legacy/st-insert-expression.md), [**ST Get expression**](../commands-legacy/st-get-expression.md), [**ST COMPUTE EXPRESSIONS**](../commands-legacy/st-compute-expressions.md), and [**ST FREEZE EXPRESSIONS**](../commands-legacy/st-freeze-expressions.md) commands is deprecated, however, it is still supported in 4D Write Pro for compatibility*.

:::note

For security reasons, when formulas are pasted from a different 4D application or an external environment, only the *computed values* (text or images) available at the time of copying are pasted. If no value was available (e.g., the formula was never computed), 4D pastes the formula source as plain text.

:::

### Ejemplo

You want to replace the selection in a 4D Write Pro area with the contents of a variable:

```4d
 var fullName: Text
 var $sel: Object
 fullName:="John Smith"
 $sel:=WP Selection range(4DWPArea)
 Case of
    :(Form event code=On Clicked)
       WP INSERT FORMULA($sel;Formula(fullName);wk replace)
 End case
```

## Formula context object

You can insert special expressions related to document attributes in any document area (body, header, footer) using the [WP Insert formula](commands/wp-insert-formula.md) command. Within a formula, a formula context object is automatically exposed. Puede utilizar las propiedades de este objeto a través de [**This**](../commands/this.md):

| Propiedades                                                                    | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [This](../commands/this.md).title                              | Text   | Título definido en el atributo wk title                                                                                                                                                                                                                                                                                                                            |
| [This](../commands/this.md).author                             | Text   | Autor definido en el atributo wk author                                                                                                                                                                                                                                                                                                                            |
| [This](../commands/this.md).subject                            | Text   | Asunto definido en el atributo wk subject                                                                                                                                                                                                                                                                                                                          |
| [This](../commands/this.md).company                            | Text   | Empresa definida en el atributo wk company                                                                                                                                                                                                                                                                                                                         |
| [This](../commands/this.md).notes                              | Text   | Notas definidas en el atributo wk notes                                                                                                                                                                                                                                                                                                                            |
| [This](../commands/this.md).dateCreation                       | Fecha  | Fecha de creación definida en el atributo wk date creation                                                                                                                                                                                                                                                                                                         |
| [This](../commands/this.md).dateModified                       | Fecha  | Fecha de modificación definida en el atributo wk date modified                                                                                                                                                                                                                                                                                                     |
| [This](../commands/this.md).pageNumber (\*) | Number | Page number as it is defined:<li>- From the document start (default) or </li><li>- From the section page start if it is defined by section page start.</li> Esta fórmula siempre es dinámica; no se ve afectada por el comando [**FORMULAS WP FREEZE**](commands-legacy/wp-freeze-formulas.md). |
| [This](../commands/this.md).pageCount (\*)  | Number | Número de páginas: número total de páginas.<br/> Esta fórmula siempre es dinámica; no se ve afectada por el comando [**FORMULAS WP FREEZE**](commands-legacy/wp-freeze-formulas.md).                                                                                                                               |
| [This](../commands/this.md).document                           | Object | Documento 4D Write Pro                                                                                                                                                                                                                                                                                                                                             |
| [This](../commands/this.md).data                               | Object | Contexto de datos del documento 4D Write Pro definido por [**WP SET DATA CONTEXT**](commands-legacy/wp-set-data-context.md)                                                                                                                                                                                                                                        |
| [This](../commands/this.md).sectionIndex                       | Number | The Index of the section in the 4D Write Pro document starting from 1                                                                                                                                                                                                                                                                                              |
| [This](../commands/this.md).pageIndex                          | Number | The actual page number in the 4D Write Pro document starting from 1 (regardless of the section page numbers)                                                                                                                                                                                                                                    |
| [This](../commands/this.md).sectionName                        | String | El nombre que el usuario da a la sección                                                                                                                                                                                                                                                                                                                           |

:::note

Additional context properties are available when you work with tables. Vea *Gestión de tablas* para más información.

:::

(\*) **Important**: **This.pageNumber**, **This.pageIndex** and **This.pageCount** must be used only directly in a 4D Write Pro formula (they must be present in the *formula.source* string). They will return incorrect values if they are used by the 4D language within a method called by the formula. However, they can be passed as parameters to a method called directly by the formula:

- Esto funcionará: " *formatNumber(This.pageNumber)* "
- This will NOT work: « *formatNumber* » with *formatNumber* method processing *This.pageNumber*.

For example, to insert the page number in the footer area:

```4d
 $footer:=WP Get footer(4DWP;1)
 WP INSERT FORMULA($footer;Formula(This.pageNumber);wk append)
  //Usando Formula(myMethod) con myMethod procesando This.pageNumber
  //no funcionaría correctamente
```

## Inserting date and time formulas

**Date**

Cuando se inserta en una fórmula el comando [**Current date**](../commands-legacy/current-date.md), una variable de fecha o un método que devuelve una fecha, ésta se transformará automáticamente en texto utilizando el formato abreviado de fecha del sistema.

**Time**

When the [**Current time**](../commands-legacy/current-time.md) command, a time variable, or a method returning a time is inserted in a formula, it must be enclosed within a [**String**](../commands-legacy/string.md) command because time type is not supported in JSON. Considera los siguientes ejemplos de fórmulas:

```4d
  // This code is the best practice
 $formula1:=Formula(String(Current time)) //OK 
 
  // This code will work but is usually not recommended, except after "Edit formula"
 $formula2:=Formula from string("String(Current time)") //OK
 
  // Wrong code because time values would be displayed as a longint for seconds (or milliseconds), not as a time
 $formula3:=Formula from string("Current time") //NOT valid
 $formula4:=Formula(Current time) //NOT valid
 
```

## Soporte de estructura virtual

Table and field expressions inserted in 4D Write Pro documents support the virtual structure definition of the database. The virtual structure exposed to formulas is defined through [**SET FIELD TITLES**](../commands-legacy/set-field-titles.md)(...;\*) and [**SET TABLE TITLES**](../commands-legacy/set-table-titles.md)(...;\*) commands.

When a virtual structure is defined:

- references to expressions containing fields display virtual names when the 4D Write Pro document shows references and not values.
- [**WP Get text**](commands-legacy/wp-get-text.md) devuelve nombres de estructura virtual si la opción `wk expressions as source` está establecida en el parámetro de expresiones.
- [WP Insert formula](commands/wp-insert-formula.md) ignores the virtual structure and always expects real table/field names

:::note

When a document is displayed in "display expressions" mode, references to tables or fields that do not belong to the virtual structure are displayed with "`?`" characters, for example `[VirtualTableName]?` when the field is not defined in the virtual structure.

:::

## Mostrar fórmulas

You can control how formulas are displayed in your documents:

- como *valores* o como \*referencias
- when shown as references, display source text, symbol, or name.

### Referencias o Valores

Por defecto, las fórmulas 4D se muestran como valores. When you insert a 4D formula, 4D Write Pro computes and displays its current value.  If you wish to know which formula is used or what is its name, you need to display it as a reference.

Para mostrar fórmulas como referencias, puede:

- check the **Show references** option in the Property list (see *Configuring View properties*), or
- use the visibleReferences standard action (see *Dynamic expressions*), or
- usa el comando [**WP SET VIEW PROPERTIES**](commands-legacy/wp-set-view-properties.md) con el selector `wk visible references` en **True**.

Las referencias a fórmulas pueden mostrarse como:

- textos fuente (por defecto)
- symbols
- names

### Referencias como textos fuente (por defecto)

When formulas are displayed as references, by default the source text of the formula appear in your document, with a default gray background (can be customized using the `wk formula highlight` selector).

Por ejemplo, ha insertado la fecha actual junto con un formato, la fecha se muestra:

![](../assets/en/WritePro/wp-formulas1.png)

When you display formulas as references, the **source** of the formula is displayed:

![](../assets/en/WritePro/wp-formulas2.png)

### Referencias como símbolos

When formula source texts are displayed in a document, the design could be confusing if you work on sophisticated templates using tables for example, and when formulas are complex:

![](../assets/en/WritePro/wp-formulas3.png)

In this case, you can display formula references as ![](../assets/en/WritePro/wp-formulas.png) symbols, so that the document is more compact:

![](../assets/en/WritePro/wp-formulas4.png)

Para mostrar las referencias a fórmulas como símbolos, puede:

- check the **Display formula source as symbol option** in the Property list (see *Configuring View properties*), or
- use the displayFormulaAsSymbol standard action (see *Using 4D Write Pro standard actions*), or
- usa el comando [**WP SET VIEW PROPERTIES**](commands-legacy/wp-set-view-properties.md) con el selector `wk display formula as symbol` en **True**.

### Referencias como nombres

You can assign names to formulas, making 4D Write Pro template documents easier to read and understand for end-users. When formulas are displayed as references (and not displayed as symbols) and you have defined a name for a formula, the formula name is displayed.

For example, the following formula references are displayed as source text by default:

![](../assets/en/WritePro/wp-formulas5.png)

If you assign formula names, they are displayed instead of texts:

![](../assets/en/WritePro/wp-formulas6.png)

Para asignar un nombre a una fórmula, debe utilizar el comando [WP Insert formula](commands/wp-insert-formula.md) con un parámetro objeto. Por ejemplo:

```4d
  //inserts the previous day in the document
 $o:=New object("formula";Formula(Current date-1);"name";"Yesterday")
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP INSERT FORMULA($range;$o;wk append)
 
```

![](../assets/en/WritePro/wp-formulas10.png)

:::note

Only inline formulas can have a name (formulas for anchored images, break rows, and table datasource formulas cannot have names).

:::

### Formula tips

Whatever the formula display mode, you can get additional information on formulas through **tips** that are displayed when you hover on formulas.

- When formulas do not have names, tips provide the source text of formulas:

  ![](../assets/en/WritePro/wp-formulas7.png)

- When formulas have names but are displayed as values or as symbols, the tip provides the name of formulas:

  ![](../assets/en/WritePro/wp-formulas8.png)

In this context, you can display the source text of the formula by pressing **Ctrl** (Windows) or **Cmd** (macOS) while hovering on the formula.

- When formulas have names and are displayed as names, no tip is displayed by default.
  You can display the source text of the formula by pressing **Ctrl** (Windows) or **Cmd** (macOS) while hovering on the formula:
  [
  ![](../assets/en/WritePro/wp-formulas9.png)

#### Ver también

[Download HDI database](http://download.4d.com/Demos/4D_v16/HDI_4DWP_Filter4DExpressions.zip)</br>
*Using commands from the Styled Text theme*
