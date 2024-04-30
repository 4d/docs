---
id: overview
title: Cópia de segurança e restauração
---

4D inclui um módulo completo backup e restauração da aplicação.

Esse módulo permite a cópia de segurança da aplicação atualmente em uso sem ter que sair dela. Cada cópia de segurança ou backup inclui a pasta de projeto, o arquivo de dados e qualquer arquivo ou pastas adicionais. Esses parâmetros são primeiro estabelecidos nas configurações.

Cópias de segurança ou backups podem ser começadas de forma manual ou de forma automatica em intervalores regulares sem qualquer intervenção do usuário. Comandos específicos da linguagem, assim como métodos de bancos de dados específicos, permitem integrar funções de backup em uma interface personalizada.

Aplicações podem ser restauradas automaticamente quando uma aplicação danificada for aberta.

Also, the integrated backup module can take advantage of the .journal file ([database log file](log.md)). Esse arquivo mantém um registro de todas as operações realizadas nos dados e também assegura a segurança total entre dois backups. No caso de problemas com uma aplicação em uso, qualquer operação faltando no arquivo de dados são reintegrados automaticamente na próxima vez que a aplicação for aberta. Pode ver os conteúdos do arquivo journal a qualquer momento.

> Pode implementar também soluções alternativas para replicar e sincronizar dados para manter versões idênticas de aplicações por razões de backup. These solutions can be based on the following mechanisms and technologies:
>
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)
> - Synchronization using SQL
> - Synchronization using HTTP (/rest/url)

> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).
