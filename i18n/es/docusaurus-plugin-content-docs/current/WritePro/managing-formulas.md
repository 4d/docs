---
id: managing-formulas
title: Managing formulas
---

#### Generalidades

4D Write Pro documents can contain references to 4D formulas such as variables, fields, expressions, project methods, or 4D commands. Specific information such as the page number can also be referenced through formulas (see [Inserting document and page expressions](#inserting-date-and-time-formulas) below).

Inserting formulas in 4D Write Pro areas is done with the [**WP INSERT FORMULA**](commands/wp-insert-formula.md) command and can be read using the [**WP Get formulas**](commands-legacy/wp-get-formulas.md) command. They are also returned by the [**WP Get text**](commands-legacy/wp-get-text.md) command.

Formulas are evaluated:

- when they are inserted in a form object which displays computed values
- when the 4D Write Pro object is loaded in a form object which displays computed values
- when the [**WP COMPUTE FORMULAS**](commands-legacy/wp-compute-formulas.md) command is called
- when they are "frozen" using the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command (if not already computed)
- before printing (if not already computed)
- before exporting to .docx (if the formula can't be mapped with MS Word formulas)
- when the standard actions to freeze, print, export, or compute formulas are called. See *Standard actions*

Formulas are not evaluated when a document is loaded (using [**WP New**](commands-legacy/wp-new.md), [**WP Insert document body**](commands/wp-insert-document-body.md), or `wpArea:=[table]field`):

- if the document is only offscreen,
- if the document is displayed onscreen but the form object only shows references.

Formulas become static values if you call the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command (except for page number and page count, see below).

**Compatibility Note**: *Handling expressions using the [**ST INSERT EXPRESSION**](../commands-legacy/st-insert-expression.md), [**ST Get expression**](../commands-legacy/st-get-expression.md), [**ST COMPUTE EXPRESSIONS**](../commands-legacy/st-compute-expressions.md), and [**ST FREEZE EXPRESSIONS**](../commands-legacy/st-freeze-expressions.md) commands is deprecated, however, it is still supported in 4D Write Pro for compatibility*.

##### Ejemplo

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

#### Formula context object

You can insert special expressions related to document attributes in any document area (body, header, footer) using the [WP Insert formula](commands/wp-insert-formula.md) command. Within a formula, a formula context object is automatically exposed. You can use the properties of this object through [**This**](../commands/this.md):

| Propiedades                                                                    | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [This](../commands/this.md).title                              | Text   | Title defined in wk title attribute                                                                                                                                                                                                                                                                                                                               |
| [This](../commands/this.md).author                             | Text   | Author defined in wk author attribute                                                                                                                                                                                                                                                                                                                             |
| [This](../commands/this.md).subject                            | Text   | Subject defined in wk subject attribute                                                                                                                                                                                                                                                                                                                           |
| [This](../commands/this.md).company                            | Text   | Company defined in wk company attribute                                                                                                                                                                                                                                                                                                                           |
| [This](../commands/this.md).notes                              | Text   | Notes defined in wk notes attribute                                                                                                                                                                                                                                                                                                                               |
| [This](../commands/this.md).dateCreation                       | Fecha  | Date creation defined in wk date creation attribute                                                                                                                                                                                                                                                                                                               |
| [This](../commands/this.md).dateModified                       | Fecha  | Date modified defined in wk date modified attribute                                                                                                                                                                                                                                                                                                               |
| [This](../commands/this.md).pageNumber (\*) | Number | Page number as it is defined:<li>- From the document start (default) or </li><li>- From the section page start if it is defined by section page start.</li> This formula is always dynamic; it is not affected by the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command. |
| [This](../commands/this.md).pageCount (\*)  | Number | Page count: total count of pages.<br/> This formula is always dynamic; it is not affected by the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command.                                                                                                                                         |
| [This](../commands/this.md).document                           | Object | Documento 4D Write Pro                                                                                                                                                                                                                                                                                                                                            |
| [This](../commands/this.md).data                               | Object | Data context of the 4D Write Pro document set by [**WP SET DATA CONTEXT**](commands-legacy/wp-set-data-context.md)                                                                                                                                                                                                                                                |
| [This](../commands/this.md).sectionIndex                       | Number | The Index of the section in the 4D Write Pro document starting from 1                                                                                                                                                                                                                                                                                             |
| [This](../commands/this.md).pageIndex                          | Number | The actual page number in the 4D Write Pro document starting from 1 (regardless of the section page numbers)                                                                                                                                                                                                                                   |
| [This](../commands/this.md).sectionName                        | String | The name that the user gives to the section                                                                                                                                                                                                                                                                                                                       |

:::note

Additional context properties are available when you work with tables. See *Handling tables* for more information.

:::

(\*) **Important**: **This.pageNumber**, **This.pageIndex** and **This.pageCount** must be used only directly in a 4D Write Pro formula (they must be present in the *formula.source* string). They will return incorrect values if they are used by the 4D language within a method called by the formula. However, they can be passed as parameters to a method called directly by the formula:

- This will work: « *formatNumber(This.pageNumber)* »
- This will NOT work: « *formatNumber* » with *formatNumber* method processing *This.pageNumber*.

For example, to insert the page number in the footer area:

```4d
 $footer:=WP Get footer(4DWP;1)
 WP INSERT FORMULA($footer;Formula(This.pageNumber);wk append)
  //Using Formula(myMethod) with myMethod processing This.pageNumber
  //would not work correctly
```

#### Inserting date and time formulas

**Date**

When the [**Current date**](../commands-legacy/current-date.md) command, a date variable, or a method returning a date is inserted in a formula, it will automatically be transformed into text using the system date short format.

**Time**

When the [**Current time**](../commands-legacy/current-time.md) command, a time variable, or a method returning a time is inserted in a formula, it must be enclosed within a [**String**](../commands-legacy/string.md) command because time type is not supported in JSON. Consider the following examples of formulas:

```4d
  // This code is the best practice
 $formula1:=Formula(String(Current time)) //OK 
 
  // This code will work but is usually not recommended, except after "Edit formula"
 $formula2:=Formula from string("String(Current time)") //OK
 
  // Wrong code because time values would be displayed as a longint for seconds (or milliseconds), not as a time
 $formula3:=Formula from string("Current time") //NOT valid
 $formula4:=Formula(Current time) //NOT valid
 
```

#### Support of virtual structure

Table and field expressions inserted in 4D Write Pro documents support the virtual structure definition of the database. The virtual structure exposed to formulas is defined through [**SET FIELD TITLES**](../commands-legacy/set-field-titles.md)(...;\*) and [**SET TABLE TITLES**](../commands-legacy/set-table-titles.md)(...;\*) commands.

When a virtual structure is defined:

- references to expressions containing fields display virtual names when the 4D Write Pro document shows references and not values.
- [**WP Get text**](commands-legacy/wp-get-text.md) returns virtual structure names if `wk expressions as source` option is set in expressions parameter.
- [WP Insert formula](commands/wp-insert-formula.md) ignores the virtual structure and always expects real table/field names

:::note

When a document is displayed in "display expressions" mode, references to tables or fields that do not belong to the virtual structure are displayed with "`?`" characters, for example `[VirtualTableName]?` when the field is not defined in the virtual structure.

:::

#### Displaying formulas

You can control how formulas are displayed in your documents:

- as *values* or as *references*
- when shown as references, display source text, symbol, or name.

##### References or Values

By default, 4D formulas are displayed as values. When you insert a 4D formula, 4D Write Pro computes and displays its current value.  If you wish to know which formula is used or what is its name, you need to display it as a reference.

To display formulas as references, you can:

- check the **Show references** option in the Property list (see *Configuring View properties*), or
- use the visibleReferences standard action (see *Dynamic expressions*), or
- use the [**WP SET VIEW PROPERTIES**](commands-legacy/wp-set-view-properties.md) command with the `wk visible references` selector to **True**.

Formula references can be displayed as:

- source texts (default)
- symbols
- names

##### References as source texts (default)

When formulas are displayed as references, by default the source text of the formula appear in your document, with a default gray background (can be customized using the `wk formula highlight` selector).

Por ejemplo, ha insertado la fecha actual junto con un formato, la fecha se muestra:

![](../assets/en/WritePro/wp-formulas1.png)

When you display formulas as references, the **source** of the formula is displayed:

![](../assets/en/WritePro/wp-formulas2.png)

##### References as symbols

When formula source texts are displayed in a document, the design could be confusing if you work on sophisticated templates using tables for example, and when formulas are complex:

![](../assets/en/WritePro/wp-formulas3.png)

In this case, you can display formula references as ![](../assets/en/WritePro/wp-formulas.png) symbols, so that the document is more compact:

![](../assets/en/WritePro/wp-formulas4.png)

To display formula references as symbols, you can:

- check the **Display formula source as symbol option** in the Property list (see *Configuring View properties*), or
- use the displayFormulaAsSymbol standard action (see *Using 4D Write Pro standard actions*), or
- use the [**WP SET VIEW PROPERTIES**](commands-legacy/wp-set-view-properties.md) command with the `wk display formula as symbol` selector to **True**.

##### References as names

You can assign names to formulas, making 4D Write Pro template documents easier to read and understand for end-users. When formulas are displayed as references (and not displayed as symbols) and you have defined a name for a formula, the formula name is displayed.

For example, the following formula references are displayed as source text by default:

![](../assets/en/WritePro/wp-formulas5.png)

If you assign formula names, they are displayed instead of texts:

![](../assets/en/WritePro/wp-formulas6.png)

To assign a name to a formula, you need to use the [WP Insert formula](commands/wp-insert-formula.md) command with an object parameter. Por ejemplo:

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

##### Formula tips

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
