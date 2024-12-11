---
id: restart-4d
title: RESTART 4D
slug: /commands/restart-4d
displayed_sidebar: docs
---

<!--REF #_command_.RESTART 4D.Syntax-->**RESTART 4D** {( *demora* {; *mensagem*} )}<!-- END REF-->
<!--REF #_command_.RESTART 4D.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| demora | Integer | &#8594;  | Tempo de atraso (segundos) antes que 4D reinicie |
| mensagem | Text | &#8594;  | Texto a mostrar nas máquinas clientes |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RESTART 4D.Summary-->O comando **RESTART 4D** reinicia a aplicação fundida 4D atual.<!-- END REF-->  
  
Este comando é para uso no contexto de uma aplicação fundida (cliente/servidor ou autônoma) e deve ser utilizado juntamente com o comando [SET UPDATE FOLDER](set-update-folder.md). Neste caso , o processo de atualização automática é lançado: A nova versão da aplicação designada por [SET UPDATE FOLDER](set-update-folder.md) substitui automaticamente a versão atual no momento do reinicio resultantes de **RESTART 4D**. A rota de acesso ao arquivo de dados é salva e se utiliza de forma automática.  
  
Se não foi definida informação de atualização utilizando o comando [SET UPDATE FOLDER](set-update-folder.md) na sessão atual, o comando simplesmente reinicia a aplicação fundida com o mesmo arquivo de dados.  
  
Pode utilizar o parâmetro *demora* para adiar o reinicio da aplicação com o fim de dar as máquinas cliente tempo para se desconectar. Deve passar um valor em segundos em *demora*. Se omite este parâmetro, a aplicação servidor espera um máximo de 10 minutos, para que todas as aplicações cliente se desconectem. Depois deste tempo, todas as aplicações cliente se desconectam automaticamente.  
  
**Nota**: O parâmetro *demora* e *mensagem* só são levados em conta com as aplicações servidor (se ignora se o comando for executado em aplicação monouusuário ou remota).

O parâmetro opcional *mensagem* mostra uma mensagem personalizado para as aplicações cliente conectadas.  
  
Se o comando se executa corretamente, a variável sistema OK toma o valor 1, caso contrário, toma o valor 0 e se reinicia a aplicação. Pode interceptar os erros gerados pelo comando utilizando um método instalado utilizando o comando [ON ERR CALL](on-err-call.md).

#### Ver também 

[Get last update log path](get-last-update-log-path.md)  
[SET UPDATE FOLDER](set-update-folder.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1292 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |


