---
id: overview
title: Overview
---

4D inclui um backup completo e restauração do banco de dados.

Esse módulo permite a cópia de segurança do banco de dados atualmente em uso sem ter que sair dele. Each backup can include the project folder, the data file and any additional files or folders. Esses parâmetros são primeiro estabelecidos nas configurações de banco de dados.

Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface.

Bancos de dados podem ser restaurados automaticamente quando um banco de dados danificado for aberto.

Also, the integrated backup module can take advantage of the .journal file ([database log file](log.md)). This file keeps a record of all operations performed on the data and also ensures total security between two backups. No caso de problemas com um banco de dados em uso, qualquer operação faltando no arquivo de dados são reintegrados automaticamente na próxima vez que o banco de dados for aberto. You can view the journal file contents at any time.

> Pode implementar também soluções alternativas para replicar e sincronizar dados para manter versões idênticas de bancos de dados por razões de backup. These solutions can be based on the following mechanisms and technologies:  
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  
> - Synchronization using SQL - Synchronization using HTTP (/rest/url)


> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).
