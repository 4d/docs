---
id: new-log-file
title: New log file
slug: /commands/new-log-file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file**  : Text<!-- END REF-->
<!--REF #_command_.New log file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Endereço de acesso completo do arquivo de histórico fechado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.New log file.Summary-->**Nota preliminar:** este comando só funciona com 4D Server.<!-- END REF--> Só é possível ser executado através do comando [Execute on server](execute-on-server.md) ou em um procedimento armazenado. 

O comando New log file data ou arquivo de histórico atual, lhe dá outro nome e cria um novo com o mesmo nome na mesma localização do anterior. Este comando é para definir um sistema de backup por espelho lógico. (ver a seção “*Configurar um espelho lógico*” no Manual de 4D Server). 

O comando retorna a rota de acesso completa (rota de acesso + nome) do arquivo de histórico fechado (chamado “segmento”). Este arquivo é salvo na mesma localização do arquivo de histórico atual (especificada na página Configuração no tema Cópia de segurança das Preferências). O comando não realiza nenhum processo (compressão, segmentação) no arquivo salvo. Não aparece nenhuma caixa de diálogo.

O arquivo é renomeado com os números de backups atuais do banco de dados e o arquivo de histórico, como se mostra no exemplo a seguir: *NomeBanco\[BackupNum-LogBackupNum\].4DL*. Por exemplo: 

* Se o banco de dados MeuBanco.4DD foi salvo 4 vezes, o último arquivo de backup se chamará *MeuBanco\[0004\].4BK*. O nome do primeiro “segmento” do arquivo de histórico será, portanto *MeuBanco\[0004-0001\].journal*.
* Se o banco de dados MeuBanco.4DD foi salvo 3 vezes e o arquivo de histórico foi salvo 5 vezes, o nome do sexto backup do arquivo de histórico será *MeuBanco\[0003-0006\].journal*.

#### Gestão de erros 

Caso se apresente um erro, o comando gera um código que pode ser interceptado utilizando o comando [ON ERR CALL](on-err-call.md "ON ERR CALL").



#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 926 |
| Thread-seguro | &check; |
| Modificar variáveis | error |


