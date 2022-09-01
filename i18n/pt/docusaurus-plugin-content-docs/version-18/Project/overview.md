---
id: overview
title: Visão Geral
---

Um projeto 4D contém todo o código fonte de uma aplicação de banco de dados 4D, desde a estrutura do banco de dados até a interface de usuário, passando pelos formulários, os menus, a configuração de usuário ou qualquer recurso necessário. A 4D project is primarily made of text-based files.

Os projetos 4D são criados e gerenciados usando a aplicação 4D Developer. Os arquivos de projeto se utilizam para criar arquivos de lançamento da aplicação final, que podem ser abertos com 4D Server ou com uma licencia 4D Volume (aplicações fusionadas).


## Project files

Os arquivos de projeto 4D se abrem e editam com as aplicações padrão da plataforma 4D. Editores completos para gerenciar os arquivos, como um editor de estruturas, um editor de métodos, um editor de formulários, um editor de menu...

Além disso, dado que os projetos são encontrados em arquivos legíveis, em  texto plano (JSON, XML, etc.), podem ser lidos ou editados manualmente pelos desenvolvedores, utilizando qualquer editor de código.


## Controle da fonte

Os arquivos de projeto 4D facilitam a programação genérica, a criação de modelos de aplicações e o  compartir código.

A flexibilidade de desenvolvimento de um projeto 4D são demostradas especialmente quando vários desenvolvedores precisam trabalhar na mesma parte de uma aplicação ao mesmo tempo. Os arquivos de projeto 4D são particularmente adequados para ser gerenciados por um  sistema de **controle de versão** (Perforce, Git, SVN, etc.), permitindo às equipes de desenvolvimento aproveitar funcionalidades como:

- Versioning
- Comparações de revisão
- Rollbacks


## Trabalhar com projetos

Pode criar um projeto de banco de dados 4D:

- criar um novo projeto em branco -- ver [Criar um projeto 4D](creating.md).
- exportar um desenvolvimento "binário" 4D existente a um projeto -- ver "Exportar desde um banco de dados 4D" em [doc.4d.com](https://doc.4d.com).

O desenvolvimento de projeto é realizado localmente usando a aplicação 4D Developer -- consulte [Desenvolver um projeto](developing.md). As interações de desenvolvimento em equipe são manejadas pela ferramenta de controle de fontes.

Projetos 4D podem ser compilados e lançados facilmente como aplicações monousuário ou cliente servidor que contém versões compactadas de seu projeto -- ver [Construir um pacote de projeto](building.md).
