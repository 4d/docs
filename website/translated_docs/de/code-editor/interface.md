---
id: interface
title: Interface
---

By default, a window of the code editor consists of several areas: a toolbar, an editing area, a lists area, a status bar and a break points area.

![dropdown-list](assets/en/code-editor/code-editor-hello.png)

## Interface

Each Code Editor window contains a toolbar that provides instant access to basic functions related to code execution and editing.

| Element                       | Icon                                                                           | Beschreibung                                                                                                                                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Method execution**          | ![execute-method](assets/en/code-editor/execute-method.png)                    | When working with methods, each Code Editor window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution:<ul><li> **Run new process**: Creates a process and runs the method in standard mode in this process.<li>**Run and debug new process**: Creates a new process and displays the method in the Debugger window for step by step execution in this process.</li><li>**Run in Application process**: Runs the method in standard mode in the context of the Application process (in other words, the record display window).</li><li>**Run and debug in Application process**: Displays the method in the Debugger window for step by step execution in the context of the Application process (in other words, the record display window).</li></ul>                                                         |
| **Search**                    | ![search-icon](assets/en/code-editor/search.png)                               | Allows performing a search in the current method.                                                                                                                                                                                                                              |
| **Macros**                    | ![macros-button](assets/en/code-editor/macros.png)                             | Inserts a macro at the selection. Click the dropdown arrow to display a list of available macros. For more information on how to create and instantiate macros, see [Macros](../FormEditor/macros.md).                                                                         |
| **Expand all / Collapse all** | ![expand-collapse-button](assets/en/code-editor/expand-collapse-all.png)       | These buttons allow expanding or collapsing all the control flow structures of the method.                                                                                                                                                                                     |
| **Method information**        | ![method-information-icon](assets/en/code-editor/method-information.png)       | Displays the [Method Properties](../Concepts/methods.md#project-method-properties) dialog box (project methods only).                                                                                                                                                          |
| **Last clipboard values**     | ![last-clipboard-values-icon](assets/en/code-editor/last-clipboard-values.png) | Displays the last values stored in the clipboard.                                                                                                                                                                                                                              |
| **Clipboards**                | ![clipboard icons](assets/en/code-editor/clipboards.png)                       | Nine clipboards available in the code editor. You can use these clipboards by clicking on them directly or by using keyboard shortcuts. For more information, refer to [Writing classes and methods](./write-class-method.md#multiple-copy-paste-and-numbering-of-clipboards). |
| **Code navigation**           | ![code-navigation-icons](assets/en/code-editor/tags.png)                       | Lets you navigate inside methods and classes with automatically tagged content or manually declared markers. See [Navigation dropdown](./navigation.md).                                                                                                                       |

## Editing area

This is where you write and edit your code. The editor automatically indents method text and colors the different syntax elements for clear code structure.

## Customizing the editing area

You can customize the display of the editing area. Any customization is automatically passed on to all the windows of the code editor:

| Option                                 | Beschreibung                                                                                                                                                                                                | Set in...                                                                                                                                      |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **font** and **font size**             | Sets the character font and size to be used in the editing area                                                                                                                                             | **Preferences** > [**Methods**](../Preferences/methods.md) or **Method > View** > **Bigger Font** or **Smaller Font**                          |
| **style and color of syntax elements** | assign a specific color and/or style to each type of element of the 4D language.  You can also change the different colors used in the interface of the editing area (highlighting, background, and so on). | Right-click on a language element (variable, keyword, etc.) > **Style** submenu. Or **Preferences** > [**Methods**](../Preferences/methods.md) |
| **spaces**                             | You can display the spaces between words using dots (.) instead of blank spaces. This option applies to all the code elements (command names, variables, comments, etc.).                                   | **Method > View > White Spaces**                                                                                                               |
| **themes**                             | You can select the Dark or Light theme, or set a custom one                                                                                                                                                 | **Preferences** > [**Methods**](../Preferences/methods.md)                                                                                     |
| **width of code indentations**         | Set the width of code indentations                                                                                                                                                                          | **Preferences** > [**Methods**](../Preferences/methods.md)                                                                                     |

For more information about entering code in this area, refer to [Writing a method](#writing-a-method).

### Lists area

The lists area lets you display one or more lists of elements necessary for writing methods and classes (commands, constants, forms, etc.). You can choose the number and contents of the lists displayed in the window.

By default, the Code Editor displays four lists. You can enlarge or reduce the relative width of each list area by dragging one of its partitions. It is also possible to adjust the size of the list area in relation to that of the editing area by dragging the dividing line between them.

- Double-clicking on an item in a list causes it to be inserted into the editing area, at the location of the cursor.
- To **modify the contents** of a list, click on the title area of the list concerned: a pop-up menu appears, enabling you to choose the type of item to be displayed.

![](assets/en/code-editor/list-area.png)

- To add or remove a list, click in the title area of one of the lists and choose the corresponding command in the pop-up menu. Note that at least one list must be displayed in the editor window.

    The **Remove this list** command is disabled when you click on the last list. If you want to hide all the lists, you must either click on the **show or hide lists**  button at the bottom right of the window or hide them by default in the **Preferences**.

- You can hide the lists in all the windows in the following ways:
  - Select the **View > Lists** option in the **Method** menu (a check mark indicates whether lists are displayed)
  - Uncheck the **Preferences** > **Methods** > **Options** > **Show Lists** option. For the modifications made in the **Preferences** dialog box to be taken into account, any open methods, classes or functions must first be closed then reopened.

You can save the parameters set in the Code Editor window in the form of a template. For more information, refer to [Save as template](#save-as-template).

#### Available lists of items

You can display the following lists of items in the lists area of the Code Editor window:

- **All tables and fields**: Database table and field names in the form of a hierarchical list. When you insert a field name into the method by double-clicking on its name, 4D inserts it while respecting the syntax and adds the name of the table or subtable as the case may be.
- **Table** (submenu): Field names of the table selected using the submenu.
- **Current table**: Field names of the current table (available in triggers, form methods and object methods).
- **Project forms**: Database project form names. When you double-click on a project form name, 4D inserts its while respecting the syntax: the form name is inserted between quotes.
- **Table forms**: Database table and form names in the form of a hierarchical list. When you insert a form name into a method by double-clicking its name, 4D inserts it while respecting the syntax: the form name is inserted between quotes and is preceded by the name of the table and a semi-colon. For example: [Table];"Form".
- **Methods**: Database project method names.
- **All folders**: Names of object folders and subfolders set in the database displayed in the form of a hierarchical list. Folders can be used to organize objects in a customized manner. They are managed from the Home Page of the Explorer.
- **Folders** (submenu): Contents of the folder selected using the submenu.
- **Macros**: Macro names defined for the database (see [Creating and using macros](#creating-and-using-macros)).
- **Commands**: 4D language commands in alphabetical order.
- **Commands by themes**: 4D language commands classified by theme in the form of a hierarchical list.
- **Menu bars**: Names and numbers of menu bars created with the 4D Menu bar editor (see the [Menus and menu bars](#menus-and-menu-bars) chapter).
- **Constants**: 4D constants and those of any plug-ins, classified by theme in the form of a hierarchical list.
- **Lists**: Names of lists.
- **Pictures**: Names and numbers of pictures stored in the 4D **Picture Library**.
- **All plug-in commands**: Commands for all the plug-ins installed in the database, classified by theme in the form of a hierarchical list.
- **Commands for the plug-in** (submenu): Commands of a specific plug-in selected using the submenu. By default, the following plug-in is available:
- **SQL Keywords**: set of keywords recognized by the 4D SQL syntax parser. This list includes commands (e.g. SELECT), clauses (e.g. WHERE) as well as functions (ABS).
- **SQL Functions**: 4D SQL functions.

**Note:** Except for the Macros element, all the lists are in alphabetical order.

### Break points area

This area, located to the left of the editing area, allows you to display the line numbers and to insert break points directly next to specific instructions. Break points are useful during the debugging phase of your programming. They stop the execution of your code at specific locations and display the debugger.

For more information on break points, see the [Debugging](../Debugging/breakpoints.md#breakpoints) section.

You can display or hide the line numbers in the break points area for each window of the Code Editor.

- To enable or disable the display of line numbers by default,  choose **Preferences** > **Methods** > **Show line numbers**.

- To modify this display separately for each window of the Code Editor, choose **Method** > **View** > **Line Numbers**.

Displaying the line numbers makes it easier to find your way around in the window. The **Method** > **Go to Line Number...** command in the also lets you take advantage of this display.

### Save as template

You can save the parameters set in the Code Editor window in the form of a template. Once the template is saved, the parameters set in it will be used for each new Code Editor window that is opened.

The following parameters are stored in the template:

- Relative size of the editing and list areas
- Number of lists
- Location and contents of each list
- Relative width of each list

To save a Code Editor window as a template, choose **Method** > **Save As Template**. The template is saved immediately (no dialog box appears). It is stored in the **Preferences** of the 4D application. If a previous template already exists, it is replaced.

## Status bar

The status bar located at the bottom right part of the editor window displays the position of the cursor at all times:

![](assets/en/code-editor/status-bar.png)

- **Ln**: Line number
- **Col**: Column number, i.e., the level in the hierarchy of programming structures. The first level is 0. The column number is useful for debugging since this information can be provided by the interpreter in the event of an error in the code.
- **Ch**: Location of character in the line.
