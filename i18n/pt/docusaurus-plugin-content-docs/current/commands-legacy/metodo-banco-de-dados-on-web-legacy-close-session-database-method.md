---
id: metodo-banco-de-dados-on-web-legacy-close-session-database-method
title: Metodo banco de dados On Web Legacy Close Session database method
slug: /commands/metodo-banco-de-dados-on-web-legacy-close-session-database-method
displayed_sidebar: docs
---

<!--REF #_command_.Metodo banco de dados On Web Legacy Close Session database method.Syntax-->**Método banco de dados On Web Legacy Close Session database method**<!-- END REF-->
<!--REF #_command_.Metodo banco de dados On Web Legacy Close Session database method.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Nota de compatibilidade 

<!--REF #_command_.Metodo banco de dados On Web Legacy Close Session database method.Summary-->Este método de banco de dados só pode ser usado com **sessões legado web** disponíveis em bancos de dados convertidos de versões anteriores a 4D v18 R6\.<!-- END REF--> Nunca é chamada quando o modo **scalable web sessions** estuver ativado (recomendado em 4D v18 R6 e superior). Para saber mais, veja a seção *Web Sessions Management (Legacy)*.

#### 

O comando **Método banco de dados On Web Legacy Close Session database method** é chamado pelo servidor web de 4D cada vez que uma sessão web vai ser fechada. Uma sessão pode ser fechada nos seguintes casos:

* quando se alcança o número máximo de sessões simultâneas (100 por defeito, modificá utilizando o comando [WEB SET OPTION](web-set-option.md)), e 4D necessita criar novas (4D automaticamente destruí o processo da sessão inativa mais antiga),
* quando se alcança o período máximo de inatividade do processo da sessão (480 minutos por defeito, modificá via o comando [WEB SET OPTION](web-set-option.md)),
* quando é chamado o comando [WEB LEGACY CLOSE SESSION](web-legacy-close-session.md).

Quando é chamado este método base, o contexto da sessão (variáveis e seleções geradas pelo usuário) ainda é valido. Isto significa que pode guardar os dados relativos à sessão para poder usar-los posteriormente, mais especificamente utilizando [QR SET DESTINATION](qr-set-destination.md).

**Nota:** No contexto de uma sessão 4D Mobile (que pode gerar vários processos), **Método banco de dados On Web Legacy Close Session database method** é chamado para cada processo Web que é fechado, permitindo que salve todos os tipos de dados (variáveis, seleção, etc) gerados pelo processo de sessão 4D Mobile. 

Um exemplo de uso do **Método banco de dados On Web Legacy Close Session database method** é apresentado na sessão *Web Sessions Management (Legacy)* 

#### Ver também 

[WEB LEGACY CLOSE SESSION](web-legacy-close-session.md)  
*Web Sessions Management (Legacy)*  