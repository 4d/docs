---
id: restart-4d
title: RESTART 4D
slug: /commands/restart-4d
displayed_sidebar: docs
---

<!--REF #_command_.RESTART 4D.Syntax-->**RESTART 4D** ({ *demora* : Integer {; *mensagem* : Text} })<!-- END REF-->
<!--REF #_command_.RESTART 4D.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| demora | Integer | &#8594; | Tempo de atraso (segundos) antes que 4D reinicie |
| mensagem | Text | &#8594; | Texto a mostrar nas máquinas clientes |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|14|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.RESTART 4D.Summary-->O comando **RESTART 4D** reinicia a aplicação fundida 4D atual.<!-- END REF-->  
  
Este comando é para uso no contexto de uma aplicação fundida (cliente/servidor ou autônoma) e deve ser utilizado juntamente com o comando [SET UPDATE FOLDER](../commands/set-update-folder). Neste caso , o processo de atualização automática é lançado: A nova versão da aplicação designada por [SET UPDATE FOLDER](../commands/set-update-folder) substitui automaticamente a versão atual no momento do reinicio resultantes de **RESTART 4D**. A rota de acesso ao arquivo de dados é salva e se utiliza de forma automática.  
  
Se não foi definida informação de atualização utilizando o comando [SET UPDATE FOLDER](../commands/set-update-folder) na sessão atual, o comando simplesmente reinicia a aplicação fundida com o mesmo arquivo de dados.  
  
Pode utilizar o parâmetro *demora* para adiar o reinicio da aplicação com o fim de dar as máquinas cliente tempo para se desconectar. Deve passar um valor em segundos em *demora*. Se omite este parâmetro, a aplicação servidor espera um máximo de 10 minutos, para que todas as aplicações cliente se desconectem. Depois deste tempo, todas as aplicações cliente se desconectam automaticamente.  
  
**Nota**: O parâmetro *demora* e *mensagem* só são levados em conta com as aplicações servidor (se ignora se o comando for executado em aplicação monouusuário ou remota).

O parâmetro opcional *mensagem* mostra uma mensagem personalizado para as aplicações cliente conectadas.  
  
Se o comando se executa corretamente, a variável sistema OK toma o valor 1, caso contrário, toma o valor 0 e se reinicia a aplicação. Pode interceptar os erros gerados pelo comando utilizando um método instalado utilizando o comando [ON ERR CALL](../commands/on-err-call).

## Ver também 

[Get last update log path](../commands/last-update-log-path)  
[SET UPDATE FOLDER](../commands/set-update-folder)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1292 |
| Thread-seguro | yes |
| Modificar variáveis | OK, error |


