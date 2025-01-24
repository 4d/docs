---
id: overview
title: Visão Geral
---

Um projeto 4D contém todo o código-fonte de uma aplicação 4D, qualquer que seja seu tipo de implementação (web, móvel, ou desktop), desde a estrutura do banco de dados até a interface do usuário, incluindo código, formulários, menus, configurações usuário, ou quaisquer recursos necessários. Um projeto 4D é principalmente composto por ficheiros texto.


## Ficheiros do projecto

Os ficheiros de projeto 4D são abertos e editados usando aplicações normais da plataforma 4D (4D ou 4D Server). Com 4D, editores completos estão disponíveis para gerir ficheiros, incluindo um editor de estrutura, um editor de métodos, um editor de formulários, um editor de menus...

Quando os projetos estão em ficheiros de texto simples legíveis (JSON, XML, etc.), podem ser lidos ou editados manualmente pelos programadores, utilizando qualquer editor de código.

Além disso, os ficheiros de projeto 4D facilitam a programação genérica, a criação de modelos de aplicação e a partilha de código. Os projetos são organizados internamente em [pastas e ficheiros](Project/architecture.md).


## Desenvolvimento

Os projetos 4D são desenvolvidos utilizando a aplicação **4D**. Fornece um ambiente de desenvolvimento Integrado (IDE) para projetos 4D, bem como um servidor Web, um gerador de projetos móveis e um tempo de execução de aplicações, permitindo desenvolver, testar e depurar qualquer tipo de projeto.

O desenvolvimento multi-usuário é gerido através de ferramentas de **source control** padrão (Perforce, Git, SVN, etc.), que permitem aos programadores trabalhar em ramos diferentes e comparar, fundir ou reverter modificações.


## Aplicação final

Os ficheiros de projeto podem ser [compilados](compiler.md) e facilmente implementados. 4D permite criar três tipos de aplicações a partir de seus projetos:

- aplicações [web](WebServer/webServer.md),
- aplicações [móveis](https://developer.4d.com/4d-for-ios/),
- aplicações [desktop](Desktop/building.md) (cliente/servidor ou usuário único).

As aplicações back-end podem ser implementadas usando 4D Server, 4D, ou fundido com a licença 4D Volume.