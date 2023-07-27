---
id: sdi
title: Modo SDI em Windows
---

## Visão Geral

On Windows, 4D developers can configure their 4D merged applications to work as SDI (Single-Document Interface) applications. On Windows, 4D developers can configure their 4D merged applications to work as SDI (Single-Document Interface) applications. In SDI applications, each window is independant from others and can have its own menu bar.

> O conceito SDI/MDI não existe no macOS. Esta funcionalidade diz respeito apenas a aplicações Windows e as opções relacionadas são ignoradas no macOS.

### SDI mode availabilty

The SDI mode is available in the following execution environment only:

- Windows
- Aplicação 4D fundida, autônoma ou cliente

## Activação do modo SDI

Enabling and using the SDI mode in your application require the following steps:

1. Check the **Use SDI mode on Windows** option in the "Interface" page of the Database Settings dialog box.
2. Build a merged application (standalone and/or client application).

Then, when executed it in a supported context (see above), the merged application will work automatically in SDI mode.

## Gerir aplicações no modo SDI

Executing a 4D application in SDI mode does not require any specific implementation: existing menu bars are automatically moved in SDI windows themselves. However, you need to pay attention to specific principles that are listed below.

### Menus em janelas

In SDI mode, the process menu bar is automatically displayed in every document type window opened during the process life (this excludes, for example, floating palettes). When the process menu bar is not visible, menu item shortcuts remain active however.

Menus are added above windows without modifiying their contents size:

![](../assets/en/Menus/sdi1.png)

Windows can therefore be used in MDI or SDI modes without having to recalculate the position of objects.

#### About the splash screen

- If the **Splash screen** interface option was selected in the Database Settings, the splash window will contain any menus that would have been displayed in the MDI window. Note also that closing the splash screen window will result in exiting the application, just like in MDI mode.
- If the Splash screen option was not selected, menus will be displayed in opened windows only, depending on the programmer's choices.

### Saída automática

When executed in MDI mode, a 4D application simply quits when the user closes the application window (MDI window). However, when executed in SDI mode, 4D applications do not have an application window and, on the other hand, closing the last opened window does not necessarily mean that the user wants the application to quit (faceless processes can be running, for example) -- although it could be what they want.

To handle this case, 4D applications executed in SDI mode include a mechanism to automatically quit (by calling the `QUIT 4D` command) when the following conditions are met:

- the user cannot interact anymore with the application
- não existem processos usuário ativos
- 4D processes or worker processes are waiting for an event
- o servidor Web não é iniciado.

> When a menu with an associated *quit* standard action is called, the application quits and all windows are closed, wherever the menu was called from.

## Línguagem

Although it is transparently handled by 4D, the SDI mode introduces small variations in the application interface management. Specificities in the 4D language are listed below.

| Comando/funcionalidad             | Especificidade no modo SDI no Windows                                                                                                                                                                                                                                                                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Open form window`                | Options to support floating windows in SDI (`Controller form window`) and to remove the menu bar (`Form has no menu bar`)                                                                                                                                                                                       |
| `Menu bar height`                 | Returns the height in pixels of a single menu bar line even if the menu bar has been wrapped on two or more lines. Returns 0 when the command is called from a process without a form window                                                                                                                    |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Applied to the current form window only (from where the code is executed)                                                                                                                                                                                                                                       |
| `MAXIMIZE WINDOW`                 | A janela é maximizada para o tamanho do ecrã                                                                                                                                                                                                                                                                    |
| `CONVERT COORDINATES`             | `XY Screen` is the global coordinate system where the main screen is positioned at (0,0). Screens on its left side or on top of it can have negative coordinates and any screens on its right side or underneath it can have coordinates greater than the values returned by `Screen height` or `Screen width`. |
| `GET MOUSE`                       | As coordenadas globais são relativas ao ecrã                                                                                                                                                                                                                                                                    |
| `GET WINDOW RECT`                 | When -1 is passed in window parameter, the command returns 0;0;0;0                                                                                                                                                                                                                                              |
| `On Drop database method`         | Não suportado                                                                                                                                                                                                                                                                                                   |
