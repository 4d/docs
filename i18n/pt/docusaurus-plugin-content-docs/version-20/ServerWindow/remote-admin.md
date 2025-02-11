---
id: remote-admin
title: Administração a partir de máquinas remotas
---

Pode administrar a aplicação 4D Server a partir de um 4D remoto (máquina cliente) abrindo a janela de administração do 4D Server na máquina cliente.

## Abrir a janela de administração numa máquina 4D remota

Para abrir uma janela de administração do servidor a partir de uma máquina cliente, é necessário estar ligado à banco de dados remoto como Desenhador ou Administrador. Caso contrário, quando tentar abrir a janela de administração, é gerado um erro de privilégio (-9991).

Esta janela pode ser acedida de duas maneiras:

- Escolha o comando **Janela de administração** a partir do menu **Ajudar** ou clique no botão correspondente na barra de ferramentas 4D.
- Executar o comando `OPEN ADMINISTRATION WINDOW`.

Uma [janela de administração do servidor](monitor.md) então aparece na máquina cliente.


## Especificidades da administração via uma máquina 4D remota

Uma máquina cliente exibindo a janela de administração do servidor possui acesso a todas as informações disponíveis e pode agir após os processos e o início/parada dos servidores. Quando a janela de administração do servidor é exibida em uma máquina remota, existem, no entanto, certas restrições e características específicas relativas à sua operação:

- Na [página Processo](processes.md), não é possível depurar um processo de usuário (já que a janela de depuração aparece na máquina do servidor).
- Na [página Manutenção](maintenance.md), é possível executar ações que fazem com que todos os clientes sejam desconectados e que o servidor seja reiniciado (operações de compactação e reinicialização). Neste caso, a máquina cliente solicitando a operação é automaticamente reconectada ao reiniciar.
- Na [página Manutenção](maintenance.md), os botões **Ver Relatório** são renomeados **Descarregar Relatório** após a execução de uma operação de manutenção. Esses arquivos são baixados para a pasta do banco de dados local na máquina cliente antes de serem exibidos.