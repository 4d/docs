---
id: sdi
title: Modo SDI em Windows
---

No Windows, os desenvolvedores 4D podem testar e configurar suas aplicações 4D fundidas para trabalhar como aplicações SDI (Single-Document Interface). Nas aplicações SDI, cada janela é independente das outras e pode ter a sua própria barra de menus. As aplicações SDI são opostas às aplicações MDI (Multiple Documents Interface), em que todas as janelas estão contidas na janela principal e dependem dela.

:::info

O conceito SDI/MDI não existe no macOS. Esta funcionalidade diz respeito apenas a aplicações Windows e as opções relacionadas são ignoradas no macOS.

:::

## Disponibilidade do modo SDI

O modo SDI está disponível apenas nos seguintes ambientes de execução:

- Windows
- Merged [stand-alone](../Desktop/building.md#build-stand-alone-application) or [client](../Desktop/building.md#build-client-application) 4D application
- [**Test application** feature](bars.md#previewing-menu-bars) available from the **Run** menu.

## Activação do modo SDI

To enable the SDI mode in your application, just check the **Use SDI mode on Windows** option in the ["Interface" page of the Settings dialog box](../settings/interface.md#display-windows).

Uma vez ativada, para executar efetivamente a sua aplicação no modo SDI, pode:

- criar uma aplicação combinada (autônoma e/ou aplicação cliente) e executá-la no Windows, ou
- select **Test Application in SDI Mode** from the **Run** menu on Windows to test the development.

:::info

Because the development environment is executed in MDI, switching from development mode to runtime mode using the **Test Application in SDI Mode** menu item is equivalent to restarting your application.

:::

## Gerir aplicações no modo SDI

A execução de uma aplicação 4D em modo SDI não requer qualquer implementação específica: as barras de menu existentes são automaticamente movidas nas próprias janelas SDI. No entanto, é necessário prestar atenção a princípios específicos que são enumerados a seguir.

### Menus no Windows

No modo SDI, a barra de menu de processo é exibida automaticamente em todas as janelas de tipo de documento abertas pela duração do processo (isso exclui, por exemplo, paletas flutuantes). Entretanto, quando a barra de menu do processo não estiver visível, os atalhos dos itens de menu permanecem ativos.

Os menus são adicionados por cima das janelas sem alterar o tamanho do seu conteúdo:

![](../assets/en/Menus/sdi1.png)

Assim, as janelas podem ser utilizadas nos modos MDI ou SDI sem que seja necessário recalcular a posição dos objectos.

#### Tela inicial

- If the **Splash screen** interface option was [selected in the Settings](../settings/interface.md#display-windows), the splash window will contain any menus that would have been displayed in the MDI window. Note também que fechar a janela splash screen resultará na saída da aplicação, tal como no modo MDI.
- Se a opção Splash screen não tiver sido selecionada, os menus serão apresentados apenas nas janelas abertas, dependendo das escolhas do programador.

### Depurador

When displayed in SDI mode, the [debugger window](../Debugging/debugger.md) does not contain [editing buttons](../Debugging/debugger.md#tool-bar-buttons), because switching to development environment requires to abort execution and restart the application in MDI mode.

### Saída automática

Quando executada em modo MDI, uma aplicação 4D simplesmente sai quando o utilizador fecha a janela da aplicação (janela MDI). No entanto, quando executadas em modo SDI, as aplicações 4D não têm uma janela de aplicação e, por outro lado, fechar a última janela aberta não significa necessariamente que o utilizador quer que a aplicação saia (podem estar a correr processos sem rosto, por exemplo) - embora possa ser o que ele quiser.

To handle this case, 4D applications executed in SDI mode include a mechanism to automatically quit (by calling the `QUIT 4D` command) when the following conditions are met:

- o utilizador já não pode interagir com a aplicação
- não existem processos usuário ativos
- Os processos 4D ou processos de trabalho estão à espera de um evento
- o servidor Web não é iniciado
- the [WebAdmin server](../Admin/webAdmin.md) is not started.

:::note

When a menu with an associated _quit_ standard action is called, the application quits and all windows are closed, wherever the menu was called from.

:::

## Línguagem

Embora seja tratado de forma transparente por 4D, o modo SDI introduz pequenas variações na gestão da interface da aplicação. As especificidades da língua 4D são enumeradas a seguir.

| Comando/funcionalidade            | Especificidade no modo SDI no Windows                                                                                                                                                                                                                                                                                                                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Open form window`                | Options to support floating windows in SDI (`Controller form window`) and to remove the menu bar (`Form has no menu bar`)                                                                                                                                                                                                    |
| `Menu bar height`                 | Devolve a altura em píxeis de uma única linha da barra de menus, mesmo que a barra de menus tenha sido envolvida em duas ou mais linhas. Devolve 0 quando o comando é chamado a partir de um processo sem uma janela de formulário                                                                                                                 |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Aplicado apenas à janela do formulário atual (a partir de onde o código é executado)                                                                                                                                                                                                                                                            |
| `MAXIMIZE WINDOW`                 | A janela é maximizada para o tamanho do ecrã                                                                                                                                                                                                                                                                                                                       |
| `CONVERT COORDINATES`             | `XY Screen` is the global coordinate system where the main screen is positioned at (0,0). Screens on its left side or on top of it can have negative coordinates and any screens on its right side or underneath it can have coordinates greater than the values returned by `Screen height` or `Screen width`. |
| `GET MOUSE`                       | As coordenadas globais são relativas ao ecrã                                                                                                                                                                                                                                                                                                                       |
| `GET WINDOW RECT`                 | Quando -1 é passado no parâmetro da janela, o comando retorna 0;0;0;0;0                                                                                                                                                                                                                                                                                            |
| `On Drop database method`         | Não compatível                                                                                                                                                                                                                                                                                                                                                     |

:::info

You can use the [**Get application info**](https://doc.4d.com/4dv19R/help/command/en/page1599.html) command to know the current running mode on Windows.

:::
