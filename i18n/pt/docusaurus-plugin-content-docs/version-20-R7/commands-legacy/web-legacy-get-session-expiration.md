---
id: web-legacy-get-session-expiration
title: WEB LEGACY GET SESSION EXPIRATION
slug: /commands/web-legacy-get-session-expiration
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Syntax-->**WEB LEGACY GET SESSION EXPIRATION** ( *idSessao* ; *dataVenc* ; *horaVenc* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| idSessao | Text | &#8594;  | UUID de sessão |
| dataVenc | Date | &#8592; | Data de vencimento da cookie |
| horaVenc | Time | &#8592; | Hora de vencimento da cookie |

<!-- END REF-->

#### Nota de compatibilidade 

<!--REF #_command_.WEB LEGACY GET SESSION EXPIRATION.Summary-->Este comando só pode ser utilizao com **sessões web herdadas**, disponíveis em bancos convertidos a partir de versões anteriores a 4D v18 R6\.<!-- END REF--> Devolve valores nulos de data e hora quando se habilitar o modo **sessões web escalonáveis** (recomendado em 4D v18 R6 e superiores). Para saber mais, consulte *Web Sessions Management (Legacy)*.

#### Descrição 

O comando **WEB LEGACY GET SESSION EXPIRATION** devolve a informação relativa ao vencimento da cookie da sessão cujo UUID passou em *idSessao*.

O parâmetro *dataVenc* recebe a data de vencimento e o parâmetro *horaVenc* recebe a hora de vencimento da cookie. 

**Nota:** cada vez que se envia uma petição web, a data e hora de vencimento da cookie se reiniciam em um valor correspondente a hora da petição+o valor de la opção Web Inactive session timeout. Por exemplo:   
*Primeira petição, segunda-feira a 1:00*   
 \-> envia uma cookie 4DSID xxxyyy vence I+24h = terça-feira 01:00  
*Segunda* *petição, segunda-feira a* *1:10*   
 \-> envia uma cookie 4DSID xxxyyy vence I+24h = terça-feira 01:10  
*Terceira petição, terça-feira as 4:00: cookie vencida*  
 \-> envia uma cookie 4DSID aaabbb vence I+24h = quarta-feira 01:00

#### Ver também 

[WEB Get Current Session ID](web-get-current-session-id.md)  
*Web Sessions Management (Legacy)*  
[WEB SET OPTION](web-set-option.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1207 |
| Thread-seguro | &check; |
| Proibido no servidor ||


