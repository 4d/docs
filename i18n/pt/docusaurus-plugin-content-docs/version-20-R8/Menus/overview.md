---
id: overview
title: Menus
---

Pode criar barras de menu e menus para as suas aplicações 4D. Because pull-down menus are a standard feature of any desktop application, their addition will make your applications easier to use and will make them feel familiar to users.

![](../assets/en/Menus/menubar.png)

Una **barra de menús** es un grupo de menús que pueden aparecer juntos en una misma pantalla. Cada **menú** de una barra de menús puede tener varios comandos de menú en ella, incluyendo algunos que llaman a submenús en cascada (o submenús jerárquicos). When the user chooses a menu or submenu command, it calls a project method or a standard action that performs an operation.

É possível ter várias barras de menu separadas para cada aplicação. For example, you can use one menu bar that contains menus for standard operations on the database and another that becomes active only for reporting. One menu bar may contain a menu with menu commands for entering records. The menu bar appearing with the input form may contain the same menu, but the menu commands are disabled because the user doesn’t need them during data entry.

You can use the same menu in several menu bars or other menus, or you can leave it unattached and manage it only by programming (in this case, it is known as an independent menu).

Quando conceber menus, tenha em mente as duas regras seguintes:

- Use menus for functions that are suited to menus: Menu commands should perform tasks such as adding a record, searching for records, or printing a report.
- Group menu commands by function: For example, all menu commands that print reports should be in the same menu. For another example, you might have all the operations for a certain table in one menu.

Para criar menus e barras de menu, pode utilizar qualquer um deles:

- o editor de menus da caixa de ferramentas,
- comandos de linguagem para o tema "Menus",
- uma combinação de ambos.

## Editor de menus

Se accede al editor de menús mediante el botón **Menús** de la caja de herramientas.

![](../assets/en/Menus/editor1.png)

Menus and menu bars are displayed as two items of the same hierarchical list, on the left side of the dialog box. Cada menu pode ser anexado a uma barra de menus ou a outro menu. No segundo caso, o menu torna-se um sub-menu.

4D atribui números de barra de menu sequencialmente - a barra de menu #1 aparece primeiro. É possível mudar o nome das barras de menu, mas não é possível alterar os seus números. Estes números são utilizados pelos comandos da linguaje.
