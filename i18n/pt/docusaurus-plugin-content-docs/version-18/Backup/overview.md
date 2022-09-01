---
id: overview
title: Visão Geral
---

4D inclui um backup completo e restauração do banco de dados.

Esse módulo permite a cópia de segurança do banco de dados atualmente em uso sem ter que sair dele. Cada cópia de segurança ou backup inclui a pasta de projeto, o arquivo de dados e qualquer arquivo ou pastas adicionais. Esses parâmetros são primeiro estabelecidos nas configurações de banco de dados.

Cópias de segurança ou backups podem ser começadas de forma manual ou de forma automatica em intervalores regulares sem qualquer intervenção do usuário. Comandos específicos da linguagem, assim como métodos de bancos de dados específicos, permitem integrar funções de backup em uma interface personalizada.

Bancos de dados podem ser restaurados automaticamente quando um banco de dados danificado for aberto.

Além disso, o módulo de cópia de segurança integrada pode aproveitar o arquivo .journal ([de histórico](log.md)). Esse arquivo mantém um registro de todas as operações realizadas nos dados e também assegura a segurança total entre dois backups. No caso de problemas com um banco de dados em uso, qualquer operação faltando no arquivo de dados são reintegrados automaticamente na próxima vez que o banco de dados for aberto. Pode ver os conteúdos do arquivo journal a qualquer momento.

> Pode implementar também soluções alternativas para replicar e sincronizar dados para manter versões idênticas de bancos de dados por razões de backup. These solutions can be based on the following mechanisms and technologies:  
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  
> - Synchronization using SQL - Synchronization using HTTP (/rest/url)


> Para uma visão geral das funções de segurança de 4D, consulte o [Guia de segurança de 4D](https://blog.4d.com/4d-security-guide/).
