---
id: log-file
title: Log File
slug: /commands/log-file
displayed_sidebar: docs
---

<!--REF #_command_.Log File.Syntax-->**Log File**  : Text<!-- END REF-->
<!--REF #_command_.Log File.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome completo do arquivo de log do banco de dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Log File.Summary-->O comando Log File retorna o nome longo (ou seja, a rota de acesso completa do arquivo, incluindo seu nome) do arquivo de histórico atual do banco de dados aberto.<!-- END REF--> 

Se o banco de dados funciona sem um arquivo de histórico, o comando retorna uma cadeia vazia e a variável de sistema OK toma o valor 0\. 

Se o banco de dados funciona com um arquivo de histórico, a variável de sistema OK toma o valor 1\. A rota de acesso retornada pelo comando é expressa com a sintaxe da plataforma atual.

**Advertência:** se você executa este comando a partir de um equipamento 4D Client, só se retorna o nome do arquivo de histórico, não o nome longo. 

#### Variáveis e conjuntos do sistema 

* Se o banco funciona sem um arquivo de histórico, a variável sistema OK recebe o valor 0; caso contrário, recebe o valor 1.
* Se por alguma razão o arquivo de histórico se torna inacessível durante a sessão de trabalho, é gerado o erro 1274 e 4D Server não permitirá aos usuários modificar ou escrever dados. Quando o arquivo de histórico se torna acessível de novo, é necessário fazer um backup.

#### Ver também 

[SELECT LOG FILE](select-log-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 928 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


