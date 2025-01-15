---
id: sdi
title: Modo SDI em Windows
---


No Windows, os desenvolvedores 4D podem testar e configurar suas aplicações 4D fundidas para trabalhar como aplicações SDI (Single-Document Interface). Nas aplicações SDI, cada janela é independente das outras e pode ter a sua própria barra de menus. As aplicações SDI são opostas às aplicações MDI (Multiple Documents Interface), em que todas as janelas estão contidas na janela principal e dependem dela.

:::info

The concept of sdi.mdI does not exist on macOS. Esta funcionalidade diz respeito apenas a aplicações Windows e as opções relacionadas são ignoradas no macOS.

:::

## Disponibilidade do modo SDI

O modo SDI está disponível apenas nos seguintes ambientes de execução:

- Windows
- Aplicação 4D fundida [autônoma](../Desktop/building.md#build-stand-alone-application) ou [cliente](../Desktop/building.md#build-client-application)
- Funcionalidade [**Aplicação de teste** ](bars.md#previewing-menu-bars) disponível no menu **Executar**.

## Activação do modo SDI

Para ativar o modo SDI na sua aplicação, basta selecionar a opção **Utilizar o modo SDI no Windows** na página ["Interface" da caixa de diálogo Parâmetros](../settings/interface.md#display-windows).

Uma vez ativada, para executar efetivamente a sua aplicação no modo SDI, pode:

- criar uma aplicação combinada (autônoma e/ou aplicação cliente) e executá-la no Windows, ou
- selecione **Test Application in SDI Mode** a partir do menu **Run** no Windows para testar o desenvolvimento.

:::info

Como o ambiente de desenvolvimento é executado em MDI, mudar do modo de desenvolvimento para o modo de tempo de execução usando o item de menu **Test Application in SDI Mode** é equivalente a reiniciar sua aplicação.

:::


## Gerir aplicações no modo SDI

A execução de uma aplicação 4D em modo SDI não requer qualquer implementação específica: as barras de menu existentes são automaticamente movidas nas próprias janelas SDI. No entanto, é necessário prestar atenção a princípios específicos que são enumerados a seguir.

### Menus no Windows

No modo SDI, a barra de menu de processo é exibida automaticamente em todas as janelas de tipo de documento abertas pela duração do processo (isso exclui, por exemplo, paletas flutuantes). Entretanto, quando a barra de menu do processo não estiver visível, os atalhos dos itens de menu permanecem ativos.

Os menus são adicionados por cima das janelas sem alterar o tamanho do seu conteúdo:

![](../assets/en/Menus/sdi1.png)

Assim, as janelas podem ser utilizadas nos modos MDI ou SDI sem que seja necessário recalcular a posição dos objectos.

#### Tela inicial

- Se selecionar a opção de interface **Splash screen** nas [ Definições](../settings/interface.md#display-windows), a janela inicial conterá todos os menus que teriam sido apresentados na janela MDI. Note também que fechar a janela splash screen resultará na saída da aplicação, tal como no modo MDI.
- Se a opção Splash screen não tiver sido selecionada, os menus serão apresentados apenas nas janelas abertas, dependendo das escolhas do programador.

### Depurador

Quando apresentada no modo SDI, a janela do  [depurador](../Debugging/debugger.md) não contém [botões de edição ](../Debugging/debugger.md#tool-bar-buttons), porque a mudança para o ambiente de desenvolvimento exige que se aborte a execução e se reinicie a aplicação no modo MDI.

### Saída automática

Quando executada em modo MDI, uma aplicação 4D simplesmente sai quando o utilizador fecha a janela da aplicação (janela MDI). No entanto, quando executadas em modo SDI, as aplicações 4D não têm uma janela de aplicação e, por outro lado, fechar a última janela aberta não significa necessariamente que o utilizador quer que a aplicação saia (podem estar a correr processos sem rosto, por exemplo) - embora possa ser o que ele quiser.

Para lidar com este caso, as aplicações 4D executadas no modo SDI incluem um mecanismo para sair automaticamente (chamando o comando `QUIT 4D` ) quando as seguintes condições são cumpridas:

- o utilizador já não pode interagir com a aplicação
- não existem processos usuário ativos
- Os processos 4D ou processos de trabalho estão à espera de um evento
- o servidor Web não é iniciado
- o servidor [WebAdmin](../Admin/webAdmin.md) não foi iniciado.

:::note

Quando um menu com uma ação padrão associada *quit* for chamado, a aplicação é encerrada e todas as janelas são fechadas, independentemente do local a partir do qual o menu foi chamado.

:::

## Línguagem

Embora seja tratado de forma transparente por 4D, o modo SDI introduz pequenas variações na gestão da interface da aplicação. As especificidades da língua 4D são enumeradas a seguir.

| Comando/funcionalidade            | Especificidade no modo SDI no Windows                                                                                                                                                                                                                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Open form window`                | Opções de compatibilidade com janelas flutuantes em SDI (`Janela do formulário do controlador`) e para remover a barra de menus (`O formulário não tem barra de menus`)                                                                                                                                                 |
| `Menu bar height`                 | Devolve a altura em píxeis de uma única linha da barra de menus, mesmo que a barra de menus tenha sido envolvida em duas ou mais linhas. Devolve 0 quando o comando é chamado a partir de um processo sem uma janela de formulário                                                                                      |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Aplicado apenas à janela do formulário atual (a partir de onde o código é executado)                                                                                                                                                                                                                                    |
| `MAXIMIZE WINDOW`                 | A janela é maximizada para o tamanho do ecrã                                                                                                                                                                                                                                                                            |
| `CONVERT COORDINATES`             | ` XY Screen` é o sistema de coordenadas global onde a tela principal está posicionada em (0,0). Telas situadas à sua esquerda ou por cima podem ter coordenadas negativas e as telas situadas à sua direita ou por baixo podem ter coordenadas superiores aos valores devolvidos por `Screen height` ou `Screen width`. |
| `GET MOUSE`                       | As coordenadas globais são relativas ao ecrã                                                                                                                                                                                                                                                                            |
| `GET WINDOW RECT`                 | Quando -1 é passado no parâmetro da janela, o comando retorna 0;0;0;0;0                                                                                                                                                                                                                                                 |
| `On Drop database method`         | Não compatível                                                                                                                                                                                                                                                                                                          |

:::info

Pode utilizar o comando [**Get application info**](https://doc.4d.com/4dv19R/help/command/en/page1599.html) para conhecer o modo de execução atual no Windows.

:::