---
id: plug-ins
title: Plug-ins
---

Ao desenvolver uma aplicação 4D, irá descobrir muitas capacidades que não notou quando começou. Pode mesmo aumentar a versão padrão de 4D adicionando **plug-ins** ao seu ambiente de desenvolvimento 4D.

## Por que a necessidade de um plug-in?

A plug-in is a piece of code that 4D launches at start up. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade. Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

## Como criar um plug-in?

Vários plug-ins já foram escritos pela comunidade 4D. O [**4D Plugin Wizard**](https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard) é uma ferramenta essencial que simplifica a tarefa de desenvolvimento de plug-ins 4D. Escreve o código 4D precisa de carregar corretamente e interagir com um plug-in, permitindo-lhe concentrar-se no seu próprio código. Além disso, pode [desenvolver os seus próprios plug-ins](Extensions/develop-plug-ins.md).


## Instalação de plug-ins

A sua arquitetura interna específica permite ao Servidor 4D carregar a versão apropriada de acordo com a plataforma onde a máquina cliente será executada. To install a plug-in in your environment, you just need to put the “PluginName.bundle” folder or package concerned into the desired **Plugins** folder.

Os plug-ins são carregados por 4D quando a aplicação for lançada, pelo que terá de abandonar a sua aplicação 4D antes de os instalar. Se qualquer plug-in necessitar de uma licença específica para utilização, será carregado mas não estará disponível para utilização.


## Como instalar um plug-in?

Os comandos de plug-ins podem ser utilizados como comandos 4D normais no seu desenvolvimento 4D. Os comandos de plug-in aparecem na página **Plug-ins** do Explorer. 


