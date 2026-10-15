---
id: standard-actions
title: Standard actions
slug: /Desktop/standard-actions
displayed_sidebar: docs
---

## Description

### Assigning or executing standard actions

Standard actions can be used in several ways:

- as actions for [buttons](../FormObjects/button_overview.md) and various form objects such as [check boxes](../FormObjects/checkbox_overview.md) or [pop up/drop down lists](../FormObjects/dropdownList_Overview.md). Actions can be assigned to form objects either in the Property list of the Form editor, or using the [OBJECT SET ACTION](../commands/object-set-action) command.
- as actions for menu commands. They can be assigned to menu commands either in the Menu editor (see [Specifying the action of a menu](../Menus/properties.md)), or using the [SET MENU ITEM PROPERTY](../commands/set-menu-item-property) command.
- as actions for list items (used when the list is associated to a pop up/drop down list or a hierarchical pop up menu). They can be assigned to list items either in the List editor (see [Creating and modifying lists](https://doc.4d.com/4Dv21/4D/21/Creating-and-modifying-lists.300-7676826.en.html)), or using the [SET LIST ITEM PARAMETER](../commands/set-list-item-parameter) command.
- as parameters for the [INVOKE ACTION](../commands/invoke-action) and [Action info](../commands/ction-info) commands.

For form objects or menu commands can be assigned both a standard action and a method. In this case, the standard action is always executed after the method (except for the `deleteRecord` action, see below).

### Parameters

Some standard actions accept one parameter that will define their execution. The syntax to use is similar to the URL syntax:

```4d 
standardActionName{?nameParameter=valueParameter}
```
where:

- `standardActionName` is the name of the standard action (string).
- `nameParameter` (optional) is the name of the parameter to pass (string)
- `valueParameter` (optional) is the value to set (string, longint...)

For example, to define a `gotoPage(5)` action, you can write:

```4d 
gotoPage?value=5
```
This syntax is available wherever a standard action can be defined, i.e. in the Property list, Menu editor, or in the language commands. For example, in the Property list:

![](../assets/en/Desktop-legacy/action-menu.png)




## Notes about objects and actions

- Editing actions such as `cut`, `paste`... can be used with:
    * standard editable areas,
    * [multi-styled](../FormObjects/properties_Text.md#multi-style) text areas
    * [4D Write Pro areas](../FormObjects/writeProArea_overview.md).
- Fonts, expressions, and spellchecking actions such as `backgroundColor`, `computeExpressions`, `spell/autoCorrectionEnabled`... can be used with: 
    * [multi-styled](../FormObjects/properties_Text.md#multi-style) text areas
    * [4D Write Pro areas](../FormObjects/writeProArea_overview.md).
- Spellchecking actions are available only if the [Auto Spellcheck option](../FormObjects/properties_Entry.md#auto-spellcheck) is selected for the area. 
- When a style attribute like `fontSize` or `color` is modified via a standard action, 4D generates the `On After Edit` form event.
- *Buttons* means all buttons and also includes check boxes that can represent actions with true/false status, e.g. `fontBold`.
- [Pop-Up/Drop-down lists](../FormObjects/dropdownList_Overview.md) and [Hierarchical choice list](../FormObjects/dropdownList_Overview.md#using-a-hierarchical-choice-list) objects can only be associated directly with standard actions that generate a submenu (list), such as `backgroundColor` or `fontSize`. In this case, they display an automatic list of values, unless custom standard actions have been set to list items (see below).
- *List items*: If you do not want to use automatic values, you can associate custom standard actions with items of a list (using the List editor or the [SET LIST ITEM PARAMETER](../commands/set-list-item-parameter) command) and set the list as "Choice list" for the Pop-Up/Drop-down lists and hierarchical pop up menu. Automatic values are replaced by custom actions at runtime. In this context, only standard actions with value parameters in relation with a submenu (list) main action can be used. For example, you can define a list of items associated with backgroundColor action values (`backgroundColor?value="red"`, `backgroundColor?value="blue"`...) and set it as Choice list for a hierarchical pop up menu.


## Available actions 

### 4D Write Pro actions

See the [4D Write Pro standard actions](../WritePro/user-legacy/standard-actions.md) page for the description of additional dedicated actions, available for **4D Write Pro areas only**. 


### "" (empty string)

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak none` | N/A | Buttons, Menu commands |

Does not perform a standard action. Use this value when you need to write a method to manage the control. For example, a button that displays a custom Find dialog box in a custom application would not have a standard action because you must write a method to open the custom dialog box.

### accept

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak accept` | None (can be handled by the [OBJECT SET ENABLED](../commands/object-set-enabled) command) | Buttons, Menu commands |

Saves a new or modified record, thus triggers either `On Saving New Record` Event or `On Saving Existing Record` Event. It also accepts a form displayed with the [DIALOG](../commands/dialog) command. In all cases, it triggers the `On Validate` form event.

:::note

When using the [Dynamic pop up menu](../commands/dynamic-pop-up-menu) command, an item associated with this action will not be automatically hidden depending on the context.

:::

### addSubrecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak add subrecord` | • *List box:* there is at least one "selection" type list box in the form and it has the focus<br>• *Subform:* has focus<br>• *List form:* none | Buttons, Menu commands |

• *List box:* a new blank record appears in the detail form defined for the list box. The user can enter values, then validate the record and a new blank record automatically appears. This continues until the user clicks on a cancel button.<br>• *Subform:* 4D creates a new record in the table or related table, either directly in the list, or in the associated detail form (depending on the properties of the subform).<br>• *List form:* a new blank record is created. With lists displayed using the [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection) commands, the record is added in the list or in the detail page depending on the value of the `enterList` parameter. In the records display window, the record is added to the list.

### automaticSplitter

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak automatic splitter` | None (can be handled by the [OBJECT SET ENABLED](../commands/object-set-enabled) command) | Invisible Buttons |

This standard action allows you to create custom splitters on a form. It can only be assigned to an invisible button (see [Buttons](../FormObjects/button_overview.md)). When an invisible button is assigned this action, it behaves in the same way as a splitter. By pasting, for example, a picture in the invisible button, you can create any type of custom interface for your splitters. For more information about splitters, refer to [Splitters](../FormObjects/splitters.md).

### backgroundColor

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak background color` | None | Menu commands, Pop-up/Drop-down lists, Hierarchical Pop-up menus |

Displays the standard background color submenu.

### backgroundColor/showDialog

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak background color dialog` | None | Buttons, Menu commands |

Opens font background color dialog.

### backgroundColor?value=\<color\>

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak background color` | None | Buttons, Menu commands, List items |

Sets the background color to `<color>`. Pass a CSS color value or name. Ex: `backgroundColor?value=#FF0000`, `backgroundColor?value=red`, `backgroundColor?value=transparent`

### cancel

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak cancel` | None (can be handled by the [OBJECT SET ENABLED](../commands/object-set-enabled) command) | Buttons, Menu commands |

Exits the current record without saving any changes. It can also close a form displayed with the [DIALOG](../commands/dialog) command, or exit a form displaying a selection of records using [DISPLAY SELECTION](../commands/display-selection) or [MODIFY SELECTION](../commands/modify-selection).

:::note

When using the [Dynamic pop up menu](../commands/dynamic-pop-up-menu) command, an item associated with this action will not be automatically hidden depending on the context.

:::


### clear

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak clear` | The editable area has the focus. Focused object has an editable area | Buttons, Menu commands |

Deletes the selection. If nothing is selected, it erases the entire area containing the cursor (enterable areas only).

### color

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font color` | None | Menu commands, Pop-up/Drop-down lists, Hierarchical Pop-up menus |

Displays the standard font color submenu.

### color/showDialog

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font color dialog` | None | Buttons, Menu commands |

Displays the system font color dialog box.

### color?value=\<color\>

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font color` | None | Buttons, Menu commands, List items |

Sets the font color to `<color>`. Pass a CSS color value or name. Ex: `color?value=#FF0000`, `color?value=red`

### computeExpressions

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak compute expressions` | None | Buttons, Menu commands |

Updates all dynamic expressions in the area.

### copy

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak copy` | The editable area has the focus. Contents selected | Buttons, Menu commands |

Places a copy of the selection in the Clipboard.

### cut

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak cut` | The editable area has the focus. Contents selected | Buttons, Menu commands |

Removes the selection and places it in the Clipboard.

### databaseSettings

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak database settings` | None (can be handled by the [OBJECT SET ENABLED](../commands/object-set-enabled) command) | Buttons, Menu commands |

Displays the standard Database Settings dialog box.

:::note

Under macOS, the menu command associated with the `databaseSettings` action is automatically placed in the application system menu, when the database is running in this environment.

:::

:::note

When using the [Dynamic pop up menu](../commands/dynamic-pop-up-menu) command, an item associated with this action will not be automatically hidden depending on the context.

:::


### deleteRecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak delete record` | A record is selected and is not a new record being added | Buttons, Menu commands |

Displays an alert asking the user to confirm the deletion. Clicking Yes in the alert deletes the current record. After the user clicks a Delete Record button, the 4D automatically returns to the output display. Particular case: if a method is also assigned to the button/menu, the standard action is called first and the method is executed only if the user clicks Yes in the alert dialog box.

### deleteSubrecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak delete subrecord` | • *List box:* at least one row of a "selection" type list box is selected<br>• *Subform:* has focus and a record is selected inside.<br>• *List form:* a record is selected in the list. | Buttons, Menu commands |

• *List box:* a confirmation dialog box appears so that the user can confirm or cancel the deletion.<br>• *Subform:* a dialog box appears, which can be used to confirm or cancel the deletion of the selected subrecord(s).<br>• *List form:* a dialog box appears, which can be used to confirm or cancel the deletion of the selected record(s).

### designMode

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak return to design mode` | Application mode (can be handled by the [OBJECT SET ENABLED](../commands/object-set-enabled) command)| Buttons, Menu commands |

Brings the windows and menu bars of the 4D Design environment to the foreground. When the database is running in interpreted mode, this displays the current window of the Design environment. When the database is running in compiled mode, this displays the records window of the current table (in compiled mode, only access to records is possible).

:::note

When using the [Dynamic pop up menu](../commands/dynamic-pop-up-menu) command, an item associated with this action will not be automatically hidden depending on the context.

:::

### displaySubrecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak display subrecord` | • *List box:* at least one row of a "selection" type list box is selected<br>• *Subform:* has focus and a record is selected inside.<br>• *List form:* a record is selected in the list. | Buttons, Menu commands |

• *List box:* the record corresponding to the list box row appears in the detail form defined for the list box, in read-only mode. The user can only cancel the form in order to return to the list box.<br>• *Subform:* the selected subrecord is displayed in the associated detail form in read-only mode (if defined in the properties of the subform).<br>• *List form:* with lists displayed via the [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection) commands, the selected record is displayed in read-only mode in the detail page depending on the value of the `enterList` parameter. In the records display window, the selected record is displayed in read-only mode in the detail page.

### editSubrecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak edit subrecord` | • *List box:* at least one row of a "selection" type list box is selected<br>• *Subform:* has focus and a record is selected inside.<br>• *List form:* a record is selected in the list. | Buttons, Menu commands |

• *List box:* the record corresponding to the list box row appears in the detail form defined for the list box. The user can modify the values, then validate or cancel the form in order to return to the list box.<br>• *Subform:* the selected subrecord switches to editing mode, either directly in the list, or in the associated detail form (depending on the properties of the subform).<br>• *List form:* the selected record switches to editing mode. With lists displayed via the [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection) commands, the modification is carried out in the list or on the detail page depending on the value of the `enterList` parameter. In the records display window, the modification is carried out on the detail page (the action is equivalent to a double-click).

### firstPage

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak next page` | Multi-page form and you are not on the first page | Buttons, Menu commands |

Displays the first page.

### firstRecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak first record` | A record is selected and is not the first of the selection | Buttons, Menu commands |

Accepts the current record and then makes the first record the current one.

### font/showDialog

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font show dialog` | None | Buttons, Menu commands |

Displays the system font picker dialog box.

### fontBold

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font bold` | None | Buttons, Menu commands |

Toggles bold font attribute.

### fontItalic

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font italic` | None | Buttons, Menu commands |

Toggles italic font attribute.

### fontLineThrough

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font linethrough` | None | Buttons, Menu commands |

Toggles linethrough font attribute.

### fontSize

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font size` | None | Menu commands, Pop-up/Drop-down lists, Hierarchical Pop-up menus |

Displays the standard font size submenu.

### fontSize?value=\<size\>

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font size` | None | Buttons, Menu commands, List items |

Sets the font size to `<size>`. Pass a CSS length value in pt. Ex: `fontSize?value=12pt`

### fontStyle

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font style` | None | Menu commands, Pop-up/Drop-down lists, Hierarchical Pop-up menus |

Displays the standard font style submenu.

### fontUnderline

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak font underline` | None | Buttons, Menu commands |

Toggles underline font attribute.

### freezeExpressions

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak freeze expressions` | None | Buttons, Menu commands |

Freezes all dynamic expressions in the area.

### gotoPage

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak goto page` | Multi-page form | Tab Controls, List Boxes, Button Grids, Pop-up Menus/Drop-down Lists |

Displays the form page (if it exists) that corresponds to the number of the selected item (tab control, list box row, button in grid, pop up menu item). See also [Goto Page action](../FormObjects/tabControl.md#goto-page-action).

### gotoPage?value=\<page\>

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak goto page` | Multi-page form | Buttons, Menu commands |

Displays the form page that corresponds to the `<page>` number.

### lastPage

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak last page` | Multi-page form and you are not on the last page | Buttons, Menu commands |

Displays the last page.

### lastRecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak last record` | A record is selected and is not the last of the selection | Buttons, Menu commands |

Accepts the current record and then makes the last record the current one.

### msc

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak msc` | None (can be handled by the [OBJECT SET ENABLED](../commands/object-set-enabled) command) | Buttons, Menu commands |

Displays the [Maintenance and security center](../MSC/overview.md) window.

:::note

When using the [Dynamic pop up menu](../commands/dynamic-pop-up-menu) command, an item associated with this action will not be automatically hidden depending on the context.

:::

### nextPage

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak next page` | Multi-page form and you are not on the last page | Buttons, Menu commands |

Displays the next page.

### nextRecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak next record` | A record is selected and is not the last of the selection | Buttons, Menu commands |

Accepts the current record and then makes the next record the current one.

### openBackURL

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak open back url` |[Web areas only](../FormObjects/webArea_overview.md). A previous URL was loaded | Buttons, Menu commands |

Opens the previous URL in the browsing sequence carried out by the user in the Web area. Disabled if there is no previous URL; in other words, if the user has only displayed a single page in the Web area.

### openForwardURL

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak open forward url` |[Web areas only](../FormObjects/webArea_overview.md). `openBackURL` previously executed | Buttons, Menu commands |

Opens the next URL in the browsing sequence carried out by the user in the Web area. Disabled if there is no next URL; in other words, if the user has never gone back a page in the sequence.

### paste

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak paste` | The editable area has the focus. Clipboard not empty | Buttons, Menu commands |

Inserts the contents of the Clipboard at the location of the insertion point.

### previousPage

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak previous page` | Multi-page form and you are not on the first page | Buttons, Menu commands |

Displays the previous page.

### previousRecord

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak previous record` | A record is selected and is not the first of the selection | Buttons, Menu commands |

Accepts the current record and then makes the previous record the current one.

### quit

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak quit` | None (can be handled by the [OBJECT SET ENABLED](../commands/object-set-enabled) command) | Buttons, Menu commands |

Displays an "Are you sure?" confirmation dialog box, then exits the 4D application if validation occurs. Otherwise, the operation is cancelled. When this action is assigned to a button with which an object method is also associated, the following sequence is executed: first, the confirmation dialog box appears. If it is validated, 4D executes the object method. After its execution, the application quits.

:::note

Under macOS, the menu command associated with the `quit` action is automatically placed in the application system menu, when the database is running in this environment. This mechanism simplifies the management of the Quit command under macOS.

:::

:::note

When using the [Dynamic pop up menu](../commands/dynamic-pop-up-menu) command, an item associated with this action will not be automatically hidden depending on the context.

:::

### redo

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak redo` | The editable area has the focus. An undo action was done | Buttons, Menu commands |

Repeats the last action cancelled (= Redo command of the Edit menu).

### refreshCurrentURL

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak refresh current url` |[Web areas only](../FormObjects/webArea_overview.md). `openBackURL` previously executed (can be handled by the [OBJECT SET ENABLED](../commands/object-set-enabled) command) | Buttons, Menu commands |

Reloads the current contents of the Web area.

### selectAll

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak select all` | The editable area has the focus. Focused object has an editable area | Buttons, Menu commands |

Selects all of the selectable elements in the context.

### showClipboard

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak show clipboard` | Always available | Buttons, Menu commands |

Opens a new window that displays the current contents of the Clipboard.

### spell

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | None | Menu commands |

Displays the full spellchecking menu.

### spell/autoCorrectionEnabled

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Enables/disables automatic correction mode.

### spell/autoDashSubstitutionsEnabled

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Enables/disables replacement of double hyphens (`--`) with em dashes (`—`) during input (macOS only).

### spell/autoLanguageEnabled

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Enables/disables identification of dictionary language to be used based on text contents (macOS only).

### spell/autoQuoteSubstitutionsEnabled

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Enables/disables replacement of straight quotes with smart quotes (macOS only).

### spell/autoSubstitutionsEnabled

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Enables/disables text substitution.

### spell/enabled

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | None | Buttons, Menu commands |

Enables/disables spellchecking in the area (the Auto Spellcheck option must be checked for the area).

### spell/forgetIgnore

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Clears the list of ignored words.

### spell/grammarEnabled

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Enables/disables grammar checking of text (macOS only).

### spell/ignore

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled / An unknown word is selected or has the cursor | Buttons, Menu commands |

Unknown word is left untouched and is no longer underlined.

### spell/learn

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled / An unknown word is selected or has the cursor | Buttons, Menu commands |

Unknown word is added to the dictionary.

### spell/removeSubstitution

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled / A word that was substituted is selected or has the cursor | Buttons, Menu commands |

Removes selected substitution.

### spell/showDialog

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Displays a spellchecking dialog.

### spell/suggestion?index=\<1-number\<=10\>

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled / Misspelled word selected | Buttons, Menu commands |

Number is the Nth spell suggestion for current first misspelled word in selection. Ex: `spell/suggestion?index=1` will replace current misspelled word in current focused view with first suggestion.

### spell/unLearn

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled / A learned word is selected or has the cursor | Buttons, Menu commands |

Removes the selected learned word from the list of learned words.

### spell/visibleSubstitutions

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| - | Spellchecking is enabled | Buttons, Menu commands |

Enables/disables blue underline for possible substitutions in the text.

### stopLoadingURL

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak stop loading url` |[Web areas only](../FormObjects/webArea_overview.md). URL being loaded | Buttons, Menu commands |

Stops loading the page and/or objects of the current URL in the Web area.

### undo

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak undo` | The editable area has the focus. An editing action was done | Buttons, Menu commands |

Cancels the last action performed (=Undo command of the Edit menu). Undo should not be confused with Cancel (= cancels any modifications made to a record during its viewing and returns to the Output form).

### visibleReferences

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
| `ak show reference` | None | Buttons, Menu commands |

Displays all dynamic expressions as references.

### writingTools 

| Constant (if any) | Activation conditions | Available with |
|---|---|---|
|-| *macOS only* | Buttons, Menu commands |

For [4D Write Pro documents](../category/4d-write-pro) and [Input form objects](../FormObjects/input_overview.md). Displays the [Writing Tools](../FormObjects/properties_Entry.md#writing-tools) for the area, using the container where the cursor is located and the current selection as context. The selected text (or the whole container if there is no selection) is replaced with the returned modification. The action is deactivated if the area is not enterable or not enabled, on Windows, or when Apple Intelligence is disabled. 


## See also

- [4D Write Pro standard actions](../WritePro/user-legacy/standard-actions.md)
- [Download HDI database](http://download.4d.com//Demos/4D_v16_R3/HDI_NewStandardActions.zip)