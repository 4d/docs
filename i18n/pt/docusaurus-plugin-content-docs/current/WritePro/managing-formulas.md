---
id: managing-formulas
title: Managing formulas
---

## Visão Geral

4D Write Pro documents can contain references to 4D formulas such as variables, fields, expressions, project methods, or 4D commands. Specific information such as the page number can also be referenced through formulas (see [Inserting document and page expressions](#inserting-date-and-time-formulas) below).

Inserting formulas in 4D Write Pro areas is done with the [**WP INSERT FORMULA**](commands/wp-insert-formula.md) command and can be read using the [**WP Get formulas**](commands-legacy/wp-get-formulas.md) command. Eles também são devolvidos pelo comando [**WP Get text**](commands-legacy/wp-get-text.md).

As fórmulas são avaliadas:

- when they are inserted in a form object which displays computed values
- when the 4D Write Pro object is loaded in a form object which displays computed values
- quando o comando [**WP COMPUTE FORMULAS**](commands-legacy/wp-compute-formulas.md) for chamado
- when they are "frozen" using the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command (if not already computed)
- before printing (if not already computed)
- before exporting to .docx (if the formula can't be mapped with MS Word formulas)
- when the standard actions to freeze, print, export, or compute formulas are called. Veja *Ações padrão*

As fórmulas não são avaliadas quando um documento é carregado (usando [**WP New**](commands-legacy/wp-new.md), [**WP Insert document body**](commands/wp-insert-document-body.md), ou `wpArea:=[table]field`):

- if the document is only offscreen,
- if the document is displayed onscreen but the form object only shows references.

Formulas become static values if you call the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command (except for page number and page count, see below).

**Compatibility Note**: *Handling expressions using the [**ST INSERT EXPRESSION**](../commands-legacy/st-insert-expression.md), [**ST Get expression**](../commands-legacy/st-get-expression.md), [**ST COMPUTE EXPRESSIONS**](../commands-legacy/st-compute-expressions.md), and [**ST FREEZE EXPRESSIONS**](../commands-legacy/st-freeze-expressions.md) commands is deprecated, however, it is still supported in 4D Write Pro for compatibility*.

:::note

For security reasons, when formulas are pasted from a different 4D application or an external environment, only the *computed values* (text or images) available at the time of copying are pasted. If no value was available (e.g., the formula was never computed), 4D pastes the formula source as plain text.

:::

### Exemplo

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

Você pode inserir expressões especiais relacionadas aos atributos de documento em qualquer área de documento (corpo, cabeçalho, rodapé) usando o comando [WP Insert formula](commands/wp-insert-formula.md). Within a formula, a formula context object is automatically exposed. Você pode usar as propriedades desse objeto por meio de [**This**](../commands/this.md):

| Propriedades                                                                   | Tipo   | Descrição                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [This](../commands/this.md).title                              | Text   | Título definido no atributo wk title                                                                                                                                                                                                                                                                                                                              |
| [This](../commands/this.md).author                             | Text   | Autor definido no atributo wk author                                                                                                                                                                                                                                                                                                                              |
| [This](../commands/this.md).subject                            | Text   | Assunto definido no atributo wk subject                                                                                                                                                                                                                                                                                                                           |
| [This](../commands/this.md).company                            | Text   | Empresa definida no atributo wk company                                                                                                                                                                                                                                                                                                                           |
| [This](../commands/this.md).notes                              | Text   | Notas definidas no atributo wk notes                                                                                                                                                                                                                                                                                                                              |
| [This](../commands/this.md).dateCreation                       | Date   | Data de criação definida no atributo wk date creation                                                                                                                                                                                                                                                                                                             |
| [This](../commands/this.md).dateModified                       | Date   | Data de modificação definida no atributo wk date modified                                                                                                                                                                                                                                                                                                         |
| [This](../commands/this.md).pageNumber (\*) | Number | Page number as it is defined:<li>- From the document start (default) or </li><li>- From the section page start if it is defined by section page start.</li> This formula is always dynamic; it is not affected by the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command. |
| [This](../commands/this.md).pageCount (\*)  | Number | Page count: total count of pages.<br/> This formula is always dynamic; it is not affected by the [**WP FREEZE FORMULAS**](commands-legacy/wp-freeze-formulas.md) command.                                                                                                                                         |
| [This](../commands/this.md).document                           | Object | Documento 4D Write Pro                                                                                                                                                                                                                                                                                                                                            |
| [This](../commands/this.md).data                               | Object | Contexto dos dados do documento 4D Write Pro definido por [**WP SET DATA CONTEXT**](commands-legacy/wp-set-data-context.md)                                                                                                                                                                                                                                       |
| [This](../commands/this.md).sectionIndex                       | Number | The Index of the section in the 4D Write Pro document starting from 1                                                                                                                                                                                                                                                                                             |
| [This](../commands/this.md).pageIndex                          | Number | The actual page number in the 4D Write Pro document starting from 1 (regardless of the section page numbers)                                                                                                                                                                                                                                   |
| [This](../commands/this.md).sectionName                        | String | The name that the user gives to the section                                                                                                                                                                                                                                                                                                                       |

:::note

Additional context properties are available when you work with tables. See *Handling tables* for more information.

:::

(\*) **Important**: **This.pageNumber**, **This.pageIndex** and **This.pageCount** must be used only directly in a 4D Write Pro formula (they must be present in the *formula.source* string). They will return incorrect values if they are used by the 4D language within a method called by the formula. However, they can be passed as parameters to a method called directly by the formula:

- Isso funcionará: " *formatNumber(This.pageNumber)* "
- This will NOT work: « *formatNumber* » with *formatNumber* method processing *This.pageNumber*.

For example, to insert the page number in the footer area:

```4d
 $footer:=WP Get footer(4DWP;1)
 WP INSERT FORMULA($footer;Formula(This.pageNumber);wk append)
  //Usando Formula(myMethod) com myMethod processando This.pageNumber
  //não funcionaria corretamente
```

## Table formula context object

When used in a formula within the table, the **This** keyword gives access to different data according to the context:

| **Context**                                                                                                            | **Expression**                                                               | **Tipo**                                                    | **Retorna**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Anywhere                                                                                                               | [This](../commands/this.md).table                            | Object                                                      | Current table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                                                                                                                        | [This](../commands/this.md).row                              | Object                                                      | Current table row element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                        | [This](../commands/this.md).rowIndex                         | Number                                                      | Index of the current row, starting from 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| When a datasource has been defined for the table                                                                       | [This](../commands/this.md).table.dataSource | Object (fórmula)                         | Datasource as a formula                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                        | [This](../commands/this.md).tableData                        | Collection or Entity selection (usually) | Evaluated table.dataSource                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| In each data row when a table datasource returns a collection or an entity selection                                   | [This](../commands/this.md).item.xxx         | Qualquer                                                    | Mapped to each item of the table datasource collection or entity selection, for example **This.item.firstName** if the associated entity has the *firstName* attribute                                                                                                                                                                                                                                                                                                                                |
|                                                                                                                        | [This](../commands/this.md).itemIndex                        | Number                                                      | Index of the current item in the collection or entity selection, starting from 0                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| In any row (except header rows) when a table datasource returns a collection or an entity selection | [This](../commands/this.md).previousItems                    | Collection or Entity selection                              | Items displayed on the pages before the bottom carry over row (if any) or before the row of the expression, including the page where is displayed the row containing the expression. <br/>This expression returns the same type of value as the **This.tableData** expression.                                                                                                                                                                                     |
| In a break row                                                                                                         | [This](../commands/this.md).breakItems                       | Collection or Entity selection                              | Items of the collection or entity selection displayed in the rows between:<br/><ul><li>the current break row and the previous break row of the same level (or the start of the table) if the break row(s) are displayed after the data row.</li><li>the current break and the next break row of the same level (or the end of the table) if the break row(s) are displayed before the data row.</li></ul> |

In any other contexts, these expressions will return *undefined*.

:::note

For more information about formula insertion, see [WP INSERT FORMULA](../commands/wp-insert-formula).

:::

## Inserting date and time formulas

**Date**

When the [**Current date**](../commands-legacy/current-date.md) command, a date variable, or a method returning a date is inserted in a formula, it will automatically be transformed into text using the system date short format.

**Time**

Quando o comando [**Current time**](../commands-legacy/current-time.md), uma variável de tempo ou um método que retorna um tempo é inserido em uma fórmula, ele deve ser incluído em um comando [**String**](../commands/string.md) porque o tipo de tempo não é compatível com JSON. Consider the following examples of formulas:

```4d
  // This code is the best practice
 $formula1:=Formula(String(Current time)) //OK 
 
  // This code will work but is usually not recommended, except after "Edit formula"
 $formula2:=Formula from string("String(Current time)") //OK
 
  // Wrong code because time values would be displayed as a longint for seconds (or milliseconds), not as a time
 $formula3:=Formula from string("Current time") //NOT valid
 $formula4:=Formula(Current time) //NOT valid
 
```

## Support of virtual structure

Table and field expressions inserted in 4D Write Pro documents support the virtual structure definition of the database. A estrutura virtual exposta às fórmulas é definida por meio dos comandos [**SET FIELD TITLES**](../commands-legacy/set-field-titles.md)(...;\*) e [**SET TABLE TITLES**](../commands-legacy/set-table-titles.md)(...;\*).

When a virtual structure is defined:

- references to expressions containing fields display virtual names when the 4D Write Pro document shows references and not values.
- [**WP Get text**](commands-legacy/wp-get-text.md) retorna nomes de estrutura virtual se a opção `wk expressions as source` estiver definida no parâmetro de expressões.
- [WP Insert formula](commands/wp-insert-formula.md) ignora a estrutura virtual e sempre espera tabela/nomes de campo reais

:::note

When a document is displayed in "display expressions" mode, references to tables or fields that do not belong to the virtual structure are displayed with "`?`" characters, for example `[VirtualTableName]?` when the field is not defined in the virtual structure.

:::

## Exibindo fórmulas

You can control how formulas are displayed in your documents:

- como *valores* ou como *referências*
- when shown as references, display source text, symbol, or name.

### Referências ou valores

By default, 4D formulas are displayed as values. When you insert a 4D formula, 4D Write Pro computes and displays its current value.  If you wish to know which formula is used or what is its name, you need to display it as a reference.

To display formulas as references, you can:

- check the **Show references** option in the Property list (see *Configuring View properties*), or
- usar a ação padrão visibleReferences (consulte *Expressões dinâmicas*), ou
- use o comando [**WP SET VIEW PROPERTIES**](commands-legacy/wp-set-view-properties.md) com o seletor `wk visible references` como **True**.

Formula references can be displayed as:

- source texts (default)
- symbols
- names

### References as source texts (default)

When formulas are displayed as references, by default the source text of the formula appear in your document, with a default gray background (can be customized using the `wk formula highlight` selector).

Por exemplo, se você tiver inserido a data atual junto com um formato, a data será exibida:

![](../assets/en/WritePro/wp-formulas1.png)

Quando você exibir fórmulas como referências, a **fonte** da fórmula é exibida:

![](../assets/en/WritePro/wp-formulas2.png)

### Referências como símbolos

When formula source texts are displayed in a document, the design could be confusing if you work on sophisticated templates using tables for example, and when formulas are complex:

![](../assets/en/WritePro/wp-formulas3.png)

In this case, you can display formula references as ![](../assets/en/WritePro/wp-formulas.png) symbols, so that the document is more compact:

![](../assets/en/WritePro/wp-formulas4.png)

To display formula references as symbols, you can:

- check the **Display formula source as symbol option** in the Property list (see *Configuring View properties*), or
- use the displayFormulaAsSymbol standard action (see *Using 4D Write Pro standard actions*), or
- use o comando [**WP SET VIEW PROPERTIES**](commands-legacy/wp-set-view-properties.md) com o seletor `wk display formula as symbol` como **True**.

### Referências como nomes

You can assign names to formulas, making 4D Write Pro template documents easier to read and understand for end-users. When formulas are displayed as references (and not displayed as symbols) and you have defined a name for a formula, the formula name is displayed.

For example, the following formula references are displayed as source text by default:

![](../assets/en/WritePro/wp-formulas5.png)

If you assign formula names, they are displayed instead of texts:

![](../assets/en/WritePro/wp-formulas6.png)

Para atribuir um nome a uma fórmula, você precisa usar o comando [WP Insert formula](commands/wp-insert-formula.md) com um parâmetro objeto. Por exemplo:

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

#### Veja também

[Download HDI database](http://download.4d.com/Demos/4D_v16/HDI_4DWP_Filter4DExpressions.zip)</br>
*Using commands from the Styled Text theme*
