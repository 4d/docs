---
id: plug-ins
title: Plug-ins
---

Ao desenvolver uma aplicação 4D, irá descobrir muitas capacidades que não notou quando começou. You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## Por que a necessidade de um plug-in?

A plug-in is a piece of code that 4D launches at start up. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade. Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

## Como criar um plug-in?

Vários plug-ins já foram escritos pela comunidade 4D. Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin\&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).

## Instalação de plug-ins

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](../Project/architecture.md#plugins).

Os plug-ins são carregados por 4D quando a aplicação for lançada, pelo que terá de abandonar a sua aplicação 4D antes de os instalar. Se qualquer plug-in necessitar de uma licença específica para utilização, será carregado mas não estará disponível para utilização.

## Como instalar um plug-in?

Os comandos de plug-ins podem ser utilizados como comandos 4D normais no seu desenvolvimento 4D. Plug-in commands appear in the **Plug-ins** page of the Explorer.
