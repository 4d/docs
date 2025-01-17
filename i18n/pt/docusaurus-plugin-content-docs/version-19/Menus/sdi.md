---
id: sdi
title: Modo SDI em Windows
---


On Windows, 4D developers can configure their 4D merged applications to work as SDI (Single-Document Interface) applications. Nas aplicações SDI, cada janela é independente das outras e pode ter a sua própria barra de menus. As aplicações SDI são opostas às aplicações MDI (Multiple Documents Interface), em que todas as janelas estão contidas na janela principal e dependem dela.

> The concept of sdi.mdI does not exist on macOS. Esta funcionalidade diz respeito apenas a aplicações Windows e as opções relacionadas são ignoradas no macOS.

## Disponibilidade do modo SDI

O modo SDI está disponível somente no seguinte ambiente de execução:

- Windows
- Aplicação 4D fundida, autônoma ou cliente

## Activação do modo SDI

Enabling and using the SDI mode in your application require the following steps:

1. Check the **Use SDI mode on Windows** option in the "Interface" page of the Settings dialog box.
2. Construa uma aplicação mesclada (monoposto /ou aplicação cliente).

Then, when executed it in a supported context (see above), the merged application will work automatically in SDI mode.

## Gerir aplicações no modo SDI

A execução de uma aplicação 4D em modo SDI não requer qualquer implementação específica: as barras de menu existentes são automaticamente movidas nas próprias janelas SDI. No entanto, é necessário prestar atenção a princípios específicos que são enumerados a seguir.

### Menus no Windows

No modo SDI, a barra de menu de processo é exibida automaticamente em todas as janelas de tipo de documento abertas pela duração do processo (isso exclui, por exemplo, paletas flutuantes). Entretanto, quando a barra de menu do processo não estiver visível, os atalhos dos itens de menu permanecem ativos.

Os menus são adicionados por cima das janelas sem alterar o tamanho do seu conteúdo:

![](../assets/en/Menus/sdi1.png)

Assim, as janelas podem ser utilizadas nos modos MDI ou SDI sem que seja necessário recalcular a posição dos objectos.

#### Acerca do ecrã inicial

- If the **Splash screen** interface option was selected in the Settings, the splash window will contain any menus that would have been displayed in the MDI window. Note também que fechar a janela splash screen resultará na saída da aplicação, tal como no modo MDI.
- Se a opção Splash screen não tiver sido selecionada, os menus serão apresentados apenas nas janelas abertas, dependendo das escolhas do programador.

### Saída automática

Quando executada em modo MDI, uma aplicação 4D simplesmente sai quando o utilizador fecha a janela da aplicação (janela MDI). No entanto, quando executadas em modo SDI, as aplicações 4D não têm uma janela de aplicação e, por outro lado, fechar a última janela aberta não significa necessariamente que o utilizador quer que a aplicação saia (podem estar a correr processos sem rosto, por exemplo) - embora possa ser o que ele quiser.

Para lidar com este caso, as aplicações 4D executadas no modo SDI incluem um mecanismo para sair automaticamente (chamando o comando `QUIT 4D` ) quando as seguintes condições são cumpridas:

- o utilizador já não pode interagir com a aplicação
- não existem processos usuário ativos
- Os processos 4D ou processos de trabalho estão à espera de um evento
- o servidor Web não é iniciado.

> Quando um menu com uma ação padrão associada *quit* for chamado, a aplicação é encerrada e todas as janelas são fechadas, independentemente do local a partir do qual o menu foi chamado.

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
