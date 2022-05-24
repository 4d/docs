---
id: navigation
title: Navigation dropdown
---

The navigation dropdown helps you organize your code and navigate more easily inside your classes and methods:

![dropdown-list](assets/en/code-editor/dropdown-list.png)

Some tags are added automatically, and you can complement the dropdown list using [markers](#manual-tagging).

## Navegación en el código

Click an item in the dropdown list to go to its first line in the code. You can also navigate with arrow-keys and press **Enter**.

## Etiquetado automático

Constructors, method declarations, functions and computed attributes are automatically tagged and added to the dropdown list.

When there is no tag in the class/method, the tool displays "No tag".

The following items are added automatically:

| Icono                                                                    | Elemento                                         |
| ------------------------------------------------------------------------ | ------------------------------------------------ |
| ![no-tag-icon](assets/en/code-editor/no-tag.png)                         | Sin etiqueta                                     |
| ![constructor-icon](assets/en/code-editor/constructor.png)               | Class constructor or method declaration          |
| ![computed-attribute-icon](assets/en/code-editor/computed-attribute.png) | Computed attribute (get, set, orderBy and query) |
| ![function-icon](assets/en/code-editor/function.png)                     | Nombre de la función de clase                    |


## Etiquetado manual

By adding markers in your code, you can add the following tags to the dropdown:

| Icono                                                | Elemento       |
| ---------------------------------------------------- | -------------- |
| ![mark-tag-icon](assets/en/code-editor/mark-tag.png) | MARK: etiqueta |
| ![todo-tag-icon](assets/en/code-editor/todo-tag.png) | TODO: etiqueta |
| ![fixme-icon](assets/en/code-editor/fixme-tag.png)   | FIXME: tag     |

You declare them by adding comments such as:

```4d 
// FIXME: Fix following items
```

Declarations are not case-sensitive; writing `fixme:` has the same effect.

Adding a hyphen after the `MARK:` tag draws a separating line in the code editor and the dropdown menu. Así que escribiendo esto:

![mark-hyphen-image](assets/en/code-editor/mark-hyphen-editor.png)

Results in this:

![mark-hyphen-image](assets/en/code-editor/dropdown-organize.png)

All markers located inside functions are indented in the dropdown list, except for the `MARK:` tags located at the end of functions and not followed by instructions. Those will appear at the first level.

## Orden de visualización

Tags are displayed in their appearing order inside the method/class.

To display the tags of a method or class in alphabetical order, do one of the following:
* **right-click** the dropdown tool
* hold **Cmd** on macOS or **Alt** on Windows, and click the dropdown tool

> Tags inside functions move with their parent items.




