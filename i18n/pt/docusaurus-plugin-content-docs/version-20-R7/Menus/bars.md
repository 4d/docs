---
id: bars
title: Barras de menus
---

As barras de menu constituem a principal interface das aplicações personalizadas. For each custom application, you must create at least one menu bar with at least one menu. By default, Menu Bar #1 is the menu bar displayed in the Application environment. Puede cambiar la barra de menús que se muestra utilizando el comando `SET MENU BAR`.

4D lets you associate a custom splash screen picture with each menu bar and to preview this menu bar at any time.

## Tela inicial

You can enhance the appearance of each menu bar by associating a custom splash screen with it. The window containing the splash screen is displayed below the menu bar when it appears. Pode conter um logótipo ou qualquer tipo de imagem. Por padrão, 4D mostra o logo 4D na tela inicial:

![](../assets/en/Menus/splash1.png)

Uma imagem personalizada de tela de inicialização pode vir de qualquer aplicativo gráfico. 4D lets you paste a clipboard picture or use any picture present on your hard disk. Qualquer formato de imagem padrão suportado por 4D pode ser usado.

The splash screen picture can be set only in the Menu editor: select the menu bar with which you want to associate the custom splash screen. Note a área "Imagem de fundo" na parte direita da janela.
Para abrir directamente una imagen almacenada en su disco, haga clic en el botón **Abrir** o en el área "Imagen de fondo". É apresentado um menu de contexto:

- Para pegar una imagen desde el portapapeles, seleccione **Pegar**.
- Para abrir una imagen almacenada en un archivo de disco, seleccione **Abrir**.
  If you choose Open, a standard Open file dialog box will appear so that you can select the picture file to be used. Uma vez definida, a imagem é apresentada em miniatura na área. É então associado à barra de menus.

![](../assets/en/Menus/splash2.png)

You can view the final result by testing the menu bar (see the following section). In Application mode, the picture is displayed in the splash screen with the "Truncated (Centered)" type format.

> Puede elegir si desea mostrar u ocultar esta ventana mediante la opción **Mostrar la barra de herramientas** en las Propiedades.

Para eliminar la imagen personalizada y mostrar la predeterminada en su lugar, haga clic en el botón **Borrar** o seleccione **Borrar** en el menú emergente del área.

## Pré-visualização de barras de menu

The Menu Bar editor lets you view the custom menus and splash screen at any time, without closing the toolbox window.

Para ello, basta con seleccionar la barra de menús y elegir **Probar la barra de menús "Barra de menús #X"** en el menú contextual o en el menú de opciones del editor.

![](../assets/en/Menus/splash3.png)

4D mostra uma pré-visualização da barra de menu assim como o ecrã inicial. Você pode rolar os menus e submenus para visualizar seu conteúdo. No entanto, estes menus não estão activos. Para probar el funcionamiento de los menús y la barra de herramientas, debe utilizar el comando **Probar la aplicación** en el menú **Ejecutar**.

:::info

Se a opção **Usar modo SDI no Windows** estiver selecionada na página ["Interface" da caixa de diálogo Configurações](../settings/interface.md#display-windows), o menu **Testar aplicação** permitirá que você teste a aplicação no [modo SDI ou MDI] (sdi/md) no Windows:

![](../assets/en/settings/sdi-mdi.png)

:::
