---
id: creating-using-macros
title: Créer et utiliser des macros
---

Vous pouvez utiliser des macro-commandes dans vos méthodes. Les macro-commandes permettent de gagner beaucoup de temps lors de la saisie de code.

## Qu’est-ce qu’une macro ?

Une macro-commande est une partie de code 4D accessible en permanence et pouvant être insérée à tout endroit de vos méthodes, quelle que soit la base ouverte. Les macro-commandes peuvent contenir tout type de texte, des commandes et des constantes 4D, ainsi que des balises spéciales, remplacées au moment de l’insertion de la macro par des valeurs issues du contexte de la méthode. Par exemple, une macro-commande peut contenir la balise `<method_name/>;` au moment de son insertion, cette balise sera remplacée par le nom de la méthode projet courante.

Les macro-commandes sont stockées dans un ou plusieurs fichier(s) au format XML (texte). Elles peuvent être affichées dans une liste de l’éditeur de code; elle peuvent également être appelées à l’aide du menu contextuel de l’éditeur ou à l’aide de la fonction de saisie prédictive.

Les macro-commandes de 4D sont écrites au format XML. Vous pouvez utiliser “tel quel” le fichier de macro-commandes par défaut de 4D ou le modifier.

## Emplacement des macros

4D charge les macros à partir d’un dossier nommé **Macros v2**. Les macros doivent être présentes sous forme d’un ou plusieurs fichiers XML placés dans ce dossier.

Le dossier “Macros v2” peut être situé :

- Dans le dossier 4D actif de la machine. Les macros sont alors partagées pour toutes les bases. **Note :** L’emplacement du dossier 4D actif varie en fonction du système d’exploitation. Pour plus d’informations, reportez-vous à la description de la commande [Get 4D folder](https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html) dans le *manuel Langage de 4D*.
- A côté du fichier de structure de la base. Les macros ne sont chargées que pour cette structure.
- Pour les composants : dans le dossier **Components** de la base. Les macros ne sont alors chargées que si le composant est installé.

Ces trois emplacements peuvent être utilisés simultanément : il est possible d’installer un dossier “Macros v2” à chaque emplacement. Les macros seront chargées dans l’ordre suivant : dossier 4D, fichier de structure, composant 1... composant N.

## Macros par défaut

4D offers a set of default macros corresponding, in particular, to the list of keywords in previous versions of 4D. These macros are included in the default "*Macros.xml*" file, placed in the "Macros v2" folder that is created in the active 4D folder of the machine during the initial startup of 4D.

You can modify this file or the contents of the folder subsequently as desired (see the following paragraph). In the event of problems with this folder, it can be deleted and 4D will re-create it on the next startup.

## Adding customized macros

You can add customized macros in the "Macros.xml" file using a standard text editor or by programming. You can also add XML files of customized macros in this folder.

In local mode, the macros file can be open while using 4D. The list of available macros is updated on each event activating 4D. For instance, it is possible to bring the text editor to the foreground, modify the macro file, then return to the method: the new macro is then available in the Code Editor.

Empty or erroneous macros are not displayed.

### Checking the syntax of customized macros

The macro-command files of 4D must be in conformity with the XML standard. This means more particularly that XML declaration `<?xml version="1.0" ...?>` and document declaration `<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">` statements are mandatory at the beginning of a macro file in order for it to be loaded. The different types of XML encoding are supported. However, it is recommended to use encoding that is Mac/PC (UTF-8) compatible. 4D provides a DTD that can be used to validate the macro files. This file is found in the following location:

- Windows: \Resources\DTD\macros.dtd
- Mac OS: :Contents:Resources:DTD:macros.dtd

If a macros file does not contain the declaration statements or cannot be validated, it is not loaded.

## Syntax of 4D macros

4D macros are built using customized XML tags called "elements."

Some tags indicate the start and end of the definition (double tags of the type `<tag> </tag>`), others are replaced by insertion context values (`<tag/>`).

In conformity with XML specifications, some element tags can include attributes. Unless otherwise indicated, these attributes are optional and a default value is used when they are omitted. The syntax of elements with attributes is as follows:

- Double tags: `<tag attribute="value"> </macro>`
- Single tags: `<tag attribute="value"/>`

If the element accepts several attributes, you can group them in the same line of command, separated by a space: `\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;`

Here is the list of tags and their mode of use:

| **Element tags**                 | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<macros> </macros>` | Start and end of macro file (mandatory tag).                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `<macro> </macro>`   | Start and end of the definition of a macro and its attributes.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                  | *Attributes*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                  | - name: Name**of macro as it appears in menus and Code Editor lists (mandatory attribute).                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                  | - type_ahead_text: Character string** to be entered to call the macro using the type-ahead (aka autocomplete) function*.                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - in_menu: Boolean indicating whether the macro can be called using the context menu*. Values = "true" (default) or "false."                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - type_ahead: Boolean indicating whether the macro can be called using the type-ahead (aka autocomplete) function*. Values = "true" (default) or "false."                                                                                                                                                                                                                                                                                                                                                |
|                                  | - method_event: Used to trigger the automatic calling of the macro depending on the current handling phase of each method (creation, closing, and so on). Values = "on_load": The macro is triggered on the opening of each method, "on_save": The macro is triggered when each method is saved (closing of a modified method or saving using the File>Save command, "on_create": The macro is triggered when each method is created, "on_close": The macro is triggered when each method is closed. |
|                                  | "on_save" and "on_close" can be used jointly --- in other words, both of these events are generated when a modified method is closed. On the other hand, "on_create" and "on_load" are never generated in a consecutive manner. This attribute can be used, for example, to preformat methods when they are created (comments in header area) or to record information such as the date and time when they are closed.                                                                               |
|                                  | - version: Used to activate the new mode of supporting text selections for the macro (see the "About the `<method>` Tag" section below). To activate this new mode, pass the value "2". If you omit this attribute or pass version="1", the former mode is kept.                                                                                                                                                                                                                                   |
|                                  | - in_toolbar: Boolean indicating if the macro must be present in the menu of the Macro button of the toolbar. Values= "true" (default) or "false".                                                                                                                                                                                                                                                                                                                                                       |
| `<selection/>`             | Tag replaced by the selected text when the macro is inserted. The selection may be empty.                                                                                                                                                                                                                                                                                                                                                                                                                |
| `<text> </text>`     | Start and end of code that must be inserted in the method. A carriage return will be added before and after the code.                                                                                                                                                                                                                                                                                                                                                                                    |
| `<method> </method>` | Start and end of the name of the project method and its (optional) parameter. The method is executed when the macro is called. You can pass a parameter in the form ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the `<method>` Tag" section below.                                                                                                                        |
| `<caret/>`                 | Location of the insertion point in the code after the macro has been inserted.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `<user_4D/>`               | Tag replaced by the name of the current 4D user.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `<user_os/>`               | Tag replaced by the current system user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `<method_name/>`           | Tag replaced by the current project method name.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `<method_path/>`           | Tag replaced by full pathname of the current project method.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `<date/>`                  | Tag replaced by the current date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                  | *Attribute*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - format: 4D format used to display the date. If no format is set, the default format is used. Values = number of 4D format (0 to 8).                                                                                                                                                                                                                                                                                                                                                                    |
| `<time/>`                  | Tag replaced by the current time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                  | *Attribute*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - format: 4D format used to display the time. If no format is set, the default format is used. Values = number of 4D format (0 to 6).                                                                                                                                                                                                                                                                                                                                                                    |
| `<clipboard/>`             | Tag replaced by the contents of the clipboard.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                  | *Attribute*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - index: Clipboard to be pasted. Values = number of the clipboard (0 to 9).                                                                                                                                                                                                                                                                                                                                                                                                                              |

- Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section).\
  ** If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).
- If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).

Here is an example of a macro definition:

| **Content of macro**                                 | **Commentaires**                                                                                                                                |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `<?xml version="1.0"...?>`                     | XML declaration                                                                                                                                 |
| `<!DOCTYPE macros SYSTEM>`                     | Document declaration                                                                                                                            |
| `<macros>`                                     | Start of macros XML file                                                                                                                        |
| `<macro name="RecordLoop">`                    | Start of macro definition and name                                                                                                              |
| `<text>`                                       | Start of macro code                                                                                                                             |
| For($i;1;Records in selection(`<Selection/>`)) | The `<Selection/>` tag will be replaced by the selected code in the 4D method at the time of macro insertion (for instance, a table name) |
| SAVE RECORD(`<Selection/>`)                    |                                                                                                                                                 |
| NEXT RECORD(`<Selection/>`)                    |                                                                                                                                                 |
| End for                                              |                                                                                                                                                 |
| `</text>`                                      | End of macro code                                                                                                                               |
| `</macro>`                                     | End of macro definition                                                                                                                         |
| `</macros>`                                    | End of macros XML file                                                                                                                          |

## About the `<method>` tag

The `<method>` tag allows you to generate and use macro-commands that execute 4D project methods. This allows developers to create sophisticated functions that can be distributed via macro-commands which are associated with components. For example, the following macro will cause the *MyMethod* method to be executed with the name of the current method as parameter:

`<method>MyMethod("<method_name/>")</method>`

The code of a called method is executed in a new process. This process is killed once the method is executed.

> **Note:** The structure process remains frozen until the called method execution is completed. You must make sure that the execution is quick and that there is no risk of it blocking the application. If this occurs, use the **Ctrl+F8** (Windows) or **Command+F8** (Mac OS) command to "kill" the process.

## Calling macros

By default, macros can be called using the context menu or toolbar of the Code Editor, the autocomplete function, or a specific list at the bottom of the Code Editor window.

Note that for each macro it is possible to restrict the possibility of calling it using the context menu and/or the autocomplete function.

### Context menu and toolbar

By default, all macros can be called via the context menu of the Code Editor (using the **Insert macro** hierarchical command) or the **Macros** button of the toolbar.

The *in_menu* attribute of the `<macro>` tag is used to set whether or not the macro appears in this menu.

In the context menu, macros are displayed in the order of the "Macros.xml" file and any additional XML files. It is thus possible to change the order by modifying these files.

### Autocomplete

By default, all macros are accessible using the autocomplete (aka type-ahead) function (see [Writing a method](./write-class-method.md)). The *type_ahead* attribute of the `<macro>` tag can be used to exclude a macro from this type of operation.

**Note:** If the macro contains the `<selection/>` tag, it will not appear in the autocomplete pop-up window.

### Code Editor list

You can display your macros in a list of the Code Editor (see [Writing a method](./write-class-method.md)). Simply double-click on the name of a macro in the list in order to call it. It is not possible to exclude a specific macro from this list.

## Compatibility notes

Macro support can change from one version of 4D to another. In order to keep the different versions compatible while maintaining your customizations, 4D does not remove any previous versions. If you want to use the latest features available, you must adapt your version accordingly.

### Text selection variables for methods

It is recommended to manage text selections using the [GET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html)and [SET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html) commands. These commands can be used to overcome the partitioning of the host project/component execution spaces and thus allow the creation of components dedicated to the management of macros. In order to activate this mode for a macro, you must declare the Version attribute with the value 2 in the Macro element. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the [GET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html)and [SET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html) are used. This attribute must be declared as follows:

`<macro name="MyMacro" version="2">`<br/> `--- Text of the macro ---`<br/> `</macro>`

If you do not pass this attribute, the previous mode is kept.

### Incompatibilities related to the XML standard

Strict syntax rules must be observed in order for macros files to respect the XML standard. This may lead to incompatibilities with the code of macros created with previous versions and prevent the loading of XML files. The following are the main sources of malfunctioning:

- Comments of the "// my comment" type, allowed inside `<macro>` elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard `"<!-- my comment -->"` form.
- The `<>` symbols used more particularly for interprocess object names must be encoded. For example, the `<>params` variable must be written `&lt;>params`.
- The initial `<macros>` declaration tag could be omitted in previous versions of 4D. It is now mandatory; otherwise, the file will not be loaded.
