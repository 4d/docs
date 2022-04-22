---
id: dropdown
title: Navigation dropdown
---

The navigation dropdown helps you organize your code and navigate more easily inside your classes and methods:

![dropdown-list](assets/en/code-editor/dropdown-list.png)

Some tags are added automatically, and you can complement the dropdown list using [markers](#manual-tagging).

## Code navigation

Click an item in the dropdown list to go to its first line in the code. You can also navigate with arrow-keys and press **Enter**.

## Automatic tagging

Constructors, method declarations, functions and computed attributes are automatically tagged and added to the dropdown list.

When there is no tag in the class/method, the tool displays "No tag".

The following items are added automatically:

| Icône                                                                    | Élément                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------ |
| ![no-tag-icon](assets/en/code-editor/no-tag.png)                         | No tag                                           |
| ![constructor-icon](assets/en/code-editor/constructor.png)               | Class constructor or method declaration          |
| ![computed-attribute-icon](assets/en/code-editor/computed-attribute.png) | Computed attribute (get, set, orderBy and query) |
| ![function-icon](assets/en/code-editor/function.png)                     | Class function name                              |


## Manual tagging

By adding markers in your code, you can add the following tags to the dropdown:

| Icône                                                | Élément    |
| ---------------------------------------------------- | ---------- |
| ![mark-tag-icon](assets/en/code-editor/mark-tag.png) | MARK: tag  |
| ![todo-tag-icon](assets/en/code-editor/todo-tag.png) | TODO: tag  |
| ![fixme-icon](assets/en/code-editor/fixme-tag.png)   | FIXME: tag |

You declare them by adding comments such as:

```4d 
// FIXME: Fix following items
```

Adding a hyphen after the `MARK:` tag draws a separating line in the code editor and dropdown menu. So writing this:

![mark-hyphen-image](assets/en/code-editor/mark-hyphen-editor.png)

Results in this:

![mark-hyphen-image](assets/en/code-editor/dropdown-organize.png)

## Display order

Tags are displayed in their appearing order inside the method/class.

* If the method has a #DECLARE line, the first item in the dropdown list is *declare*.

* If the class has a constructor, the first item in the dropdown list is *constructor*.

To display the tags of a method or class in alphabetical order, do one of the following:
* **right-click** the dropdown tool
* hold **Cmd** on macOS or **Alt** on Windows, and click the dropdown tool

> Tags inside functions move with their parent items.




