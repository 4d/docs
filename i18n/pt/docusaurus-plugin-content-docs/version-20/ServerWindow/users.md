---
id: users
title: Página Usuários
---


A página **Usuários** lista os usuários 4D conectados ao servidor.


![](../assets/en/Admin/server-users.png)

O botão "Usuários" indica, entre parênteses, o número total de usuários conectados ao servidor (este número não considera los filtros de exibição aplicados à janela). A página também contém uma área de pesquisa dinâmica e botões de controlo. Você pode modificar a ordem das colunas arrastando e soltando as áreas de cabeçalho deles.

Também pode ordenar a lista de valores da coluna clicando no respetivo cabeçalho. Clique várias vezes para especificar sucessivamente uma ordem ascendente/descendente.

![](../assets/en/Admin/server-users-sort.png)

## Lista de usuários

Para cada usuário conectado ao servidor, a lista fornece as seguintes informações:

- Sistema da máquina cliente (macOS ou Windows) como um ícone.
- **Usuário 4D**: nome do usuário 4D, ou alias, se definido com [`SET USER ALIAS`](https://doc.4d.com/4dv19/help/command/en/page1666.html) na máquina de usuário. Se as senhas não são ativadas e nenhum alias foi definido, todos os usuários são chamados "Designer".
- **Nome de máquina**: nome da máquina remota.
- **Nome da sessão**: Nome da sessão aberta na máquina remota.
- **Endereço IP**: endereço IP da máquina remota.
- **data de login**: Data e hora da conexão remota com a máquina.
- **Tempo de CPU**: tempo de CPU consumido por este usuário desde a conexão.
- **Atividade**: Proporção do tempo que o servidor 4D dedica a este usuário (exibição dinâmica). "Dormindo" se a máquina remota entrou em modo de suspensão (veja abaixo).

### Gerir usuários adormecidos

4D Server lida especificamente com casos em que uma máquina executando uma aplicação remota 4D muda para modo de suspensão enquanto sua conexão com a máquina do servidor ainda está ativa. Neste caso, o aplicativo remoto 4D conectado notifica automaticamente o Servidor 4D da sua desconexão iminente. No servidor, o usuário conectado muda o status de atividade **Dormindo**:

![](../assets/en/Admin/server-sleeping.png)

Este estado liberta recursos no servidor. Além disso, a aplicação remota 4D reconecta ao servidor 4D automaticamente após acordar do modo de suspensão.

O seguinte cenário é suportado: um usuário remoto parou de funcionar durante algum tempo, por exemplo, durante uma pausa no almoço, mas mantém a conexão com o servidor aberta. A máquina passa para o modo de suspensão. Quando o usuário retorna, acordaram a máquina e a aplicação remota 4D recupera automaticamente a sua conexão com o servidor, bem como o contexto da sessão.

> Uma sessão remota de sono é automaticamente desligada pelo servidor após 48 horas de inatividade. Você pode modificar esse tempo limite padrão usando o comando [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv19/help/command/en/page642.html) com o seletor `Remote connection sleep timeout`.


## Área de pesquisa/filtragem

Este recurso pode ser usado para reduzir o número de linhas exibidas na lista com aquelas que correspondem ao texto inserido na área de busca. A área indica as colunas onde a pesquisa/filtragem será realizada. Na página de usuários, será o usuário 4D, nome de máquina e colunas de nome de sessão.

A lista é atualizada em tempo real à medida que o texto é introduzido na área. É possível digitar mais de um valor a ser pesquisado: separe os valores com ponto e vírgula. O operador do tipo `OR` é utilizado neste caso. Por exemplo, se você digitar "John;Mary;Peter", apenas linhas com John OR Mary OR Peter nas colunas alvo serão mantidas.


## Botões de administração

Esta página inclui três botões de controlo. Esses botões estarão ativos se pelo menos uma linha estiver selecionada. Você pode selecionar várias linhas segurando a tecla **Shift** para uma seleção adjacente ou **Ctrl** (Windows) / **Comando** (macOS) para uma seleção não adjacente.

### Enviar mensagem

Este botão pode ser usado para enviar uma mensagem para os usuários 4D selecionados na janela. Se nenhum usuário estiver selecionado, o botão não está ativo. Quando você clica neste botão, aparece uma caixa de diálogo que permite inserir a mensagem. A caixa de diálogo indica o número de usuários que irão receber esta mensagem:

![](../assets/en/Admin/server-message.png)

A mensagem será apresentada como um alerta nas máquinas remotas.

> Pode realizar a mesma ação para usuários recommotos com o comando [`SEND MESSAGE TO REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1632.html) .


### Visualizar processos

Este botão pode ser usado diretamente para mostrar os processos do(s) usuário(s) selecionado(s) na página [**Processos**](processes.md) da janela. Quando você clicar neste botão, o 4D Server alterna para a página Processos e entra nos nomes de usuário selecionados na área de pesquisa/filtragem.

### Drop user

Este botão pode ser utilizado para forçar a desconexão do(s) usuário(s) selecionado(s). Quando você clicar neste botão, uma caixa de diálogo de aviso aparece para que você possa confirmar ou cancelar esta operação (mantenha pressionada a tecla **Alt** enquanto clica no botão **Remover usuário** para desconectar o(s) usuário(s) diretamente sem exibir a caixa de diálogo de confirmação).

> É possível executar a mesma ação para usuários remotos com o comando [`DROP REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1633.html).

