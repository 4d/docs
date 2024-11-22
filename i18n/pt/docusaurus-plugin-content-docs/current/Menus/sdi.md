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
- Fusionado aplicación 4D [autónomo](../Desktop/building.md#build-stand-alone-application) o [cliente](../Desktop/building.md#build-client-application)
- [Funcionalidade **Teste aplicação**](bars.md#previewing-menu-bars) disponível no menu **Executar**.

## Activação do modo SDI

Para ativar o modo SDI em sua aplicação, basta marcar a opção **Usar modo SDI no Windows** na página ["Interface" da caixa de diálogo Configurações](../settings/interface.md#display-windows).

Uma vez ativada, para executar efetivamente a sua aplicação no modo SDI, pode:

- criar uma aplicação combinada (autônoma e/ou aplicação cliente) e executá-la no Windows, ou
- seleccione **Aplicación de prueba en modo SDI** en el menú **Ejecutar** en Windows para probar el desarrollo.

:::info

Dado que el entorno de desarrollo se ejecuta en MDI, cambiar del modo de desarrollo al modo de ejecución utilizando el elemento de menú **Probar aplicación en modo SDI** equivale a reiniciar la aplicación.

:::

## Gerir aplicações no modo SDI

A execução de uma aplicação 4D em modo SDI não requer qualquer implementação específica: as barras de menu existentes são automaticamente movidas nas próprias janelas SDI. No entanto, é necessário prestar atenção a princípios específicos que são enumerados a seguir.

### Menus no Windows

No modo SDI, a barra de menu de processo é exibida automaticamente em todas as janelas de tipo de documento abertas pela duração do processo (isso exclui, por exemplo, paletas flutuantes). Entretanto, quando a barra de menu do processo não estiver visível, os atalhos dos itens de menu permanecem ativos.

Os menus são adicionados por cima das janelas sem alterar o tamanho do seu conteúdo:

![](../assets/en/Menus/sdi1.png)

Assim, as janelas podem ser utilizadas nos modos MDI ou SDI sem que seja necessário recalcular a posição dos objectos.

#### Tela inicial

- Se a opção de interface **Splash screen** tiver sido [selecionada nas Configurações](../settings/interface.md#display-windows), a janela inicial conterá todos os menus que teriam sido exibidos na janela MDI. Note também que fechar a janela splash screen resultará na saída da aplicação, tal como no modo MDI.
- Se a opção Splash screen não tiver sido selecionada, os menus serão apresentados apenas nas janelas abertas, dependendo das escolhas do programador.

### Depurador

When displayed in SDI mode, the [debugger window](../Debugging/debugger.md) does not contain [editing buttons](../Debugging/debugger.md#tool-bar-buttons), because switching to development environment requires to abort execution and restart the application in MDI mode.

### Saída automática

Quando executada em modo MDI, uma aplicação 4D simplesmente sai quando o utilizador fecha a janela da aplicação (janela MDI). No entanto, quando executadas em modo SDI, as aplicações 4D não têm uma janela de aplicação e, por outro lado, fechar a última janela aberta não significa necessariamente que o utilizador quer que a aplicação saia (podem estar a correr processos sem rosto, por exemplo) - embora possa ser o que ele quiser.

Para manejar este caso, las aplicaciones 4D ejecutadas en modo SDI incluyen un mecanismo para salir automáticamente (llamando al comando `QUIT 4D`) cuando se cumplen las siguientes condiciones:

- o utilizador já não pode interagir com a aplicação
- não existem processos usuário ativos
- Os processos 4D ou processos de trabalho estão à espera de um evento
- o servidor Web não é iniciado
- el [servidor WebAdmin](../Admin/webAdmin.md) no está iniciado.

:::note

Cuando se llama a un menú con una acción estándar asociada _salir_, la aplicación sale y se cierran todas las ventanas, sea cual sea el lugar desde el que se llamó al menú.

:::

## Línguagem

Embora seja tratado de forma transparente por 4D, o modo SDI introduz pequenas variações na gestão da interface da aplicação. As especificidades da língua 4D são enumeradas a seguir.

| Comando/funcionalidade            | Especificidade no modo SDI no Windows                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Open form window`                | Opciones para soportar las ventanas flotantes en SDI (`Controller form window`) y para eliminar la barra de menú (`Form has no menu bar`)                                                                                                                                                                                           |
| `Menu bar height`                 | Devolve a altura em píxeis de uma única linha da barra de menus, mesmo que a barra de menus tenha sido envolvida em duas ou mais linhas. Devolve 0 quando o comando é chamado a partir de um processo sem uma janela de formulário                                                                                                                        |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Aplicado apenas à janela do formulário atual (a partir de onde o código é executado)                                                                                                                                                                                                                                                                   |
| `MAXIMIZE WINDOW`                 | A janela é maximizada para o tamanho do ecrã                                                                                                                                                                                                                                                                                                                              |
| `CONVERT COORDINATES`             | `XY Screen` es el sistema de coordenadas global donde la pantalla principal se sitúa en (0,0). Las pantallas situadas a su izquierda o arriba pueden tener coordenadas negativas y las situadas a su derecha o debajo pueden tener coordenadas mayores que los valores devueltos por `Screen height` o `Screen width`. |
| `MOUSE POSITION`                  | As coordenadas globais são relativas ao ecrã                                                                                                                                                                                                                                                                                                                              |
| `GET WINDOW RECT`                 | Quando -1 é passado no parâmetro da janela, o comando retorna 0;0;0;0;0                                                                                                                                                                                                                                                                                                   |
| `On Drop database method`         | Não compatível                                                                                                                                                                                                                                                                                                                                                            |

:::info

You can use the [**Application info**](https://doc.4d.com/4dv19R/help/command/en/page1599.html) command to know the current running mode on Windows.

:::
