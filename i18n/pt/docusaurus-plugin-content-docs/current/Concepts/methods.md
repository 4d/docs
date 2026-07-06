---
id: methods
title: Página Métodos
---

Um método é basicamente um pedaço de código que executa uma ou várias acções. Na linguagem 4D, há duas categorias de métodos:

Uma linha de instrução realiza uma ação e pode ser simples ou complexa. Cada instrução geralmente consiste em uma linha no método (se necessário, no entanto, pode ser [dividida usando o caractere `\`](quick-tour.md#code-on-several-lines)).

O tamanho máximo de um método de projecto é limitado a 2 GB de texto ou 32.000 linhas de comando.

## Tipos de métodos

Na Linguagem 4D, existem várias categorias de métodos. A categoria depende da forma como podem ser chamados:

| Tipo                                              | Contexto de chamada                                                                                                                                                                                                                     | Aceita parâmetros                        | Descrição                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos projeto**                               | On demand, when the project method name [is called](../Project/project-method-properties.md)                                                                                                                                            | Sim                                      | Pode conter qualquer código para executar ações personalizadas Pode conter qualquer código para executar ações personalizadas Quando um método projeto for criado, se torna parte  parte da linguagem do banco de dados na qual foi criado.                                                    |
| **Método objeto (widget)**     | Automático, quando um evento envolve a forma a que o método está ligado                                                                                                                                                                 | Não                                      | Propriedade de um objecto de formulário (também chamado widget)                                                                                                                                                                                                                             |
| **Método formulário**                             | Automático, quando um evento envolve o objecto ao qual o método está ligado                                                                                                                                                             | Não                                      | Propriedade de um formulário. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins.                                                                              |
| **Trigger** (o *método tabla*) | Automático, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)                                                                                                                          | Não                                      | Propriedade de uma tabela. Os gatilhos/triggers são métodos que podem prevenir operações "ilegais" com os registos da sua base de dados.                                                                                                                                       |
| **Método base**                                   | Automático, quando ocorre um evento de sessão de trabalho                                                                                                                                                                               | Sim (pré-definido)    | Existem 16 métodos base em 4D.                                                                                                                                                                                                                                                                 |
| **Class**                                         | Automatically called when an object of the class is instantiated or when a function of the class is executed on an object instance in any other methods or in a [database field](../Develop/field-properties.md#class). | yes (class functions) | A **Class** is used to declare and configure the class [constructor](./classes.md#class-constructor), [properties](./classes.md#property), and [functions](./classes.md#function) of objects. See [**Classes**](classes.md) and [**Function** class](../API/FunctionClass.md). |

## Language tokens

4D's language includes a unique tokenization system for constants, commands, tables, fields and keywords names that are used in the code. Tokenizing these names means that as you type in the code editor they are stored internally as absolute references (numbers) and then restored as text during execution or display depending on the context. This allows you to guarantee that the code will always be interpreted correctly, even if you rename your tables or fields, or when 4D language commands are renamed over the course of different application versions.

**Note:** This also ensures automatic translation of the code when you have enabled the ["Use regional system settings" preference](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) and open your databases with 4D versions in different languages.

Tokenisation is completely transparent for 4D developers when working in the [4D code editor](../code-editor/write-class-method.md), and you generally won't need to worry about it. However, there are two cases where you might need to take action regarding tokenization: if you want to disable it, and if you want to use tokenization in your formulas.

### Disabling tokenization

When your project is stored on a version control system (VCS) such as GitHub or GitLab, you may want to disable tokenization to make the code more readable on the external platform. To do this, you can deselect the [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) preference to prevent tokens from being stored in your **new projects**.

You can configure your **existing projects** to save code without tokens by inserting the following key in the `<applicationName>.4DProject` file using a text editor:

```json
"tokenizedText": false
```

Este parâmetro só é tida em conta quando os métodos são guardados. Os métodos existentes em seus projetos não são modificados, a menos que você os salve novamente.

### Using tokens in formulas

A text-based 4D [formula](../commands/theme/Formulas.md) is a text that is interpreted at runtime, and not as it is typed. In fact, this is the case as soon as 4D code is expressed as raw text, more specifically when code is exported and then imported using the [`METHOD GET CODE`](../commands/method-get-code) and [`METHOD SET CODE`](../commands/method-set-code) commands, copied/pasted or [interpreted from 4D HTML tags](../Tags/transformation-tags.md).
To benefit from tokenization mechanisms in these contexts, you just need to use an explicit syntax which consists in preceding object names in the language by their token.

### Token syntax

For tokenizable named elements contained in expressions, 4D offers a special syntax you can use to reference the tokens directly: you just need to add a specific suffix after the element name to indicate its type (command, field, etc.), followed by its reference. The token syntax is detailed in this table:

| Elemento    | Example (standard syntax)                        | Suffix                                  | Example (token syntax)                                                               | Comentários                                                                                            |
| ----------- | ------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 4D Command  | String(a)                                        | :Cxx                    | String:C10(a)                                                        | xx is the command number                                                                               |
| 4D Constant | Pi                                                                  | :Kxx:yy | Pi:K30:1                                                                | xx is the ID of the constant group and yy is its index (position) within this group |
| Tabela      | [Employees]     | :xx                     | [Employees:1]                       | xx is the table number                                                                                 |
| Campo       | [Employees]Name | :xx                     | [Employees:1]Name:2 | xx is the field number                                                                                 |
| 4D Plugin   | PV PRINT(area)                                   | :Pxx:yy | PV PRINT:P13000:229(area)                            | xx is the plug-in ID and yy is the index of the command                                                |

**Note:** Uppercase letters (C, P) must be used in the suffixes; otherwise, they will not be interpreted correctly.

When you use this syntax, you guarantee that your formulas will be interpreted correctly even in the case of renaming or when the database is executed in a different language.

This syntax is accepted in all 4D formulas (or 4D expressions) regardless of the calling context:

- 4D formulas executed using the Formula editor or using commands such as [`EXECUTE FORMULA`](../commands/execute-formula), [`APPLY TO SELECTION`](../commands/apply-to-selection), [`QUERY BY FORMULA`](../commands/query-by-formula), [`LISTBOX INSERT COLUMN FORMULA`](../commands/listbox-insert-column-formula), etc.
- expressions inserted in [multi-style text areas](../FormObjects/properties_Text.md#supported-tags) (see ST INSERT EXPRESSION),
- expressions calculated in [transformation tags](../Tags/transformation-tags.md),
- expressions inserted in external areas such as [4D Write Pro areas](../WritePro/managing-formulas.md).

#### Where to find the element numbers?

The token syntax requires the addition of the reference numbers of various elements. The location of these references depends on the type of element.

- **4D commands:** Command numbers can be found in the documentation ("Properties" area) as well as on the Commands page of the Explorer.
- **Tables and fields**: Table and field numbers can be obtained using the [`Table`](../commands/table) and [`Field`](../commands/field) commands. They are also displayed in the Inspector palette of the Structure editor.