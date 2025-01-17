---
id: bars
title: Barras de menus
---

As barras de menu constituem a principal interface das aplicações personalizadas. For each custom application, you must create at least one menu bar with at least one menu. By default, Menu Bar #1 is the menu bar displayed in the Application environment. You can change which menu bar is displayed using the `SET MENU BAR` command.

4D lets you associate a custom splash screen picture with each menu bar and to preview this menu bar at any time.


## Tela inicial


You can enhance the appearance of each menu bar by associating a custom splash screen with it. The window containing the splash screen is displayed below the menu bar when it appears. Pode conter um logótipo ou qualquer tipo de imagem. Por padrão, 4D mostra o logo 4D na tela inicial:

![](../assets/en/Menus/splash1.png)

Uma imagem personalizada de tela de inicialização pode vir de qualquer aplicativo gráfico. 4D lets you paste a clipboard picture or use any picture present on your hard disk. Qualquer formato de imagem padrão suportado por 4D pode ser usado.

The splash screen picture can be set only in the Menu editor: select the menu bar with which you want to associate the custom splash screen. Note a área "Imagem de fundo" na parte direita da janela. To open a picture stored on your disk directly, click on the **Open** button or click in the "Background Image" area. É apresentado um menu de contexto:
- To paste a picture from the clipboard, choose **Paste**.
- To open a picture stored in a disk file, choose **Open**. If you choose Open, a standard Open file dialog box will appear so that you can select the picture file to be used. Uma vez definida, a imagem é apresentada em miniatura na área. É então associado à barra de menus.

![](../assets/en/Menus/splash2.png)

You can view the final result by testing the menu bar (see the following section). In Application mode, the picture is displayed in the splash screen with the "Truncated (Centered)" type format.

> Pode escolher se quer exibir ou esconder a janela usando a opção **Mostrar a barra de ferramentas** nas Propriedades do Banco de Dados.

To remove the custom picture and display the default one instead, click on the **Clear** button or select **Clear** in the area pop-up menu.


## Pré-visualização de barras de menu

The Menu Bar editor lets you view the custom menus and splash screen at any time, without closing the toolbox window.

To do so, simply select the menu bar and choose **Test the menu bar "Menu Bar #X"** in the context menu or the options menu of the editor.

![](../assets/en/Menus/splash3.png)

4D mostra uma pré-visualização da barra de menu assim como o ecrã inicial. Você pode rolar os menus e submenus para visualizar seu conteúdo. No entanto, estes menus não estão activos. To test the functioning of menus and the toolbar, you must use the **Test Application** command from the **Run** menu.

:::info

If the **Use SDI mode on Windows** option is selected in the ["Interface" page of the Settings dialog box](../settings/interface.md#display-windows), the **Test Application** menu allows you to test your application in [SDI or MDI mode](sdi.md) on Windows:

![](../assets/en/settings/sdi-mdi.png)

:::
