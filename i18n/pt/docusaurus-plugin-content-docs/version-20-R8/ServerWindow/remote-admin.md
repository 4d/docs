---
id: remote-admin
title: Administração a partir de máquinas remotas
---

Pode administrar a aplicação 4D Server a partir de um 4D remoto (máquina cliente) abrindo a janela de administração do 4D Server na máquina cliente.

## Abrir a janela de administração numa máquina 4D remota

Para abrir uma janela de administração do servidor a partir de uma máquina cliente, é necessário estar ligado à banco de dados remoto como Desenhador ou Administrador. Caso contrário, quando tentar abrir a janela de administração, é gerado um erro de privilégio (-9991).

Esta janela pode ser acedida de duas maneiras:

- Seleccione el comando **Ventana de administración** del menú **Ayuda** o haga clic en el botón correspondiente de la barra de herramientas de 4D.
- Ejecute el comando `OPEN ADMINISTRATION WINDOW`.

A continuación, aparecerá una [ventana de administración del servidor](monitor.md) en el equipo cliente.

## Especificidades da administração via uma máquina 4D remota

Uma máquina cliente exibindo a janela de administração do servidor possui acesso a todas as informações disponíveis e pode agir após os processos e o início/parada dos servidores. Quando a janela de administração do servidor é exibida em uma máquina remota, existem, no entanto, certas restrições e características específicas relativas à sua operação:

- En la página [Proceso](processes.md), no es posible depurar un proceso de usuario (ya que la ventana de depuración aparece en la máquina del servidor).
- En la página de mantenimiento [](maintenance.md), es posible ejecutar acciones que provocan la desconexión de todos los clientes y el reinicio del servidor (operaciones de compactación y reinicio). Neste caso, a máquina cliente solicitando a operação é automaticamente reconectada ao reiniciar.
- En la [página Mantenimiento](maintenance.md), los botones **Ver informe** pasan a llamarse **Descargar informe** tras la ejecución de una operación de mantenimiento. Esses arquivos são baixados para a pasta do banco de dados local na máquina cliente antes de serem exibidos.