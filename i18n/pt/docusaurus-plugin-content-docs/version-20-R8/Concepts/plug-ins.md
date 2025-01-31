---
id: plug-ins
title: Plug-ins
---

Ao desenvolver uma aplicação 4D, irá descobrir muitas capacidades que não notou quando começou. Incluso puede extender la versión estándar de 4D añadiendo **plug-ins** a su entorno de desarrollo 4D.

## Por que a necessidade de um plug-in?

A plug-in is a piece of code that 4D launches at start up. Acrescenta funcionalidade ao 4D e aumenta assim a sua capacidade. Um plug-in contém normalmente um conjunto de rotinas dadas ao Desenvolvedor 4D. Pode manejar uma Área Externa e gerir um processo externo.

## Como criar um plug-in?

Vários plug-ins já foram escritos pela comunidade 4D. Los plug-ins publicados [están disponibles en GitHub](https://github.com/search?q=4d-plugin\&type=Repositories). Adicionalmente, puede [desarrollar sus propios plug-ins](Extensions/develop-plug-ins.md).

## Instalação de plug-ins

Los plug-ins se instalan en el entorno 4D copiando sus archivos en la carpeta **Plugins**, en el [mismo nivel que la carpeta Project](../Project/architecture.md#plugins).

Os plug-ins são carregados por 4D quando a aplicação for lançada, pelo que terá de abandonar a sua aplicação 4D antes de os instalar. Se qualquer plug-in necessitar de uma licença específica para utilização, será carregado mas não estará disponível para utilização.

## Como instalar um plug-in?

Os comandos de plug-ins podem ser utilizados como comandos 4D normais no seu desenvolvimento 4D. Los comandos de plugins aparecen en la página **Plug-ins** del Explorador.
