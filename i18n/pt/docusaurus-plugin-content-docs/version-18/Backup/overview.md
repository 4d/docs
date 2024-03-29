---
id: overview
title: Visão Geral
---

4D inclui um módulo completo de backup e restauração de banco de dados.

This module allows backing up a database currently in use without having to exit it. Cada cópia de segurança ou backup inclui a pasta de projeto, o arquivo de dados e qualquer arquivo ou pastas adicionais. Estes parâmetros são definidos primeiro nas definições da base de dados.

Cópias de segurança ou backups podem ser começadas de forma manual ou de forma automatica em intervalores regulares sem qualquer intervenção do usuário. Comandos específicos da linguagem, assim como métodos de bancos de dados específicos, permitem integrar funções de backup em uma interface personalizada.

A restauração de um banco de dados após um incidente pode ser feita automaticamente quando um banco de dados danificado é aberto.

Além disso, o módulo de cópia de segurança integrada pode aproveitar o arquivo .journal ([de histórico](log.md)). Esse arquivo mantém um registro de todas as operações realizadas nos dados e também assegura a segurança total entre dois backups. In case of problems with a database in use, any operations missing in the data file are automatically reintegrated the next time the database is opened. Pode ver os conteúdos do arquivo journal a qualquer momento.

> You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of databases for backup purposes. These solutions can be based on the following mechanisms and technologies:  
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  
> - Synchronization using SQL - Synchronization using HTTP (/rest/url)


> Para uma visão geral das funções de segurança de 4D, consulte o [Guia de segurança de 4D](https://blog.4d.com/4d-security-guide/).
