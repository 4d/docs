---
id: sql-execute-script
title: SQL EXECUTE SCRIPT
slug: /commands/sql-execute-script
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE SCRIPT.Syntax-->**SQL EXECUTE SCRIPT** ( *rotaScript* ; *açãoErro* {; *nomeAtrib* ; *valorAtrib*} {; *nomeAtrib2* ; *valorAtrib2* ; ... ; *nomeAtribN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE SCRIPT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaScript | Text | &#8594;  | Nome completo da rota do arquivo que contém o script SQL a ser executado |
| açãoErro | Integer | &#8594;  | Ação a executar em caso de erro durante a execução do script |
| nomeAtrib | Text | &#8594;  | Nome do atributo a usar |
| valorAtrib | Text | &#8594;  | Valor do atributo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SQL EXECUTE SCRIPT.Summary-->O comando SQL EXECUTE SCRIPT permite executar uma série de instruções SQL localizadas no arquivo de script designado por *rotaScript*.<!-- END REF-->  
Este comando apenas pode ser executado em uma máquina local (4D local ou procedimento armazenado em 4D Server). Funciona com o banco de dados atual (banco interno ou externo)

**Nota**: este comando não pode ser utilizado com uma conexão externa que seja aberta diretamente ou através de ODBC.  
  
Passe no parâmetro *rotaScript* a rota de acesso completa do arquivo texto que contém as instruções SQL a executar. A rota de acesso deve ser expressa utilizando a sintaxe do Sistema atual. Se passa uma string vazia ("") em *rotaScript*, uma caixa de diálogo é mostrada de abertura padrão de maneira que o usuário possa selecionar o arquivo de script a executar.  
  
**Nota:** os comandos [SQL EXPORT DATABASE](sql-export-database.md) e [SQL EXPORT SELECTION](sql-export-selection.md) geram automaticamente este arquivo de script.  
  
O parâmetro *açãoErro* é utilizado para configurar o funcionamento do comando quando ocurre um erro durante a execução do script. Pode passar uma das seguintes três constantes, localizadas no tema*SQL*:  

| Constante             | Tipo          | Valor | Comentário                                                                                                                              |
| --------------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SQL On error abort    | Inteiro longo | 1     | Em caso de erro, 4D detém imediatamente a execução de script.                                                                           |
| SQL On error confirm  | Inteiro longo | 2     | No caso de erro, 4D mostra uma caixa de diálogo que descreve o erro e permite ao usuário interromper ou continuar a execução do script. |
| SQL On error continue | Inteiro longo | 3     | Em caso de erro, 4D o ignora e continua a execução de script.                                                                           |
  
  
Os parâmetros *nomAtrib* e *valAtrib* devem ser passados em pares. Estes parâmetros permitem definir os atributos específicos para a execução do script. Na versão atual de 4D, um único atributo pode ser passado em *nomAtrib*, disponível através da constante abaixo, localizada no tema *SQL* :  

| Constante             | Tipo   | Valor                    | Comentário                                                                                                                                                                                                                                                                                                                                                        |
| --------------------- | ------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL use access rights | Cadeia | SQL\_Use\_Access\_Rights | Permite restringir os direitos de acesso a aplicar durante a execução dos comandos SQL do script. Quando utilizar este atributo, deve passar 0 ou 1 em *attribValue*: *attribValue* \= 1: 4D utiliza os direitos de acesso de usuário 4D atual. *attribValue* \= 0 (ou atributo não definido): 4D não restringe o acesso, são utilizados os direitos do Designer. |
  
  
Se o arquivo de registro de pedidos de 4D estiver ativo (através dos seletores 28 ou 45 do comando [SET DATABASE PARAMETER](set-database-parameter.md)), cada comando SQL executado gerará uma entrada com a seguinte informação:  
  
Tipo de comando SQL  
* Número de registros afetados pelo comando
* Duração de execução do comando
* Para cada erro encontrado:
* * ou o código de erro  
   * ou o texto do erro se estiver disponível
Se o script for executado corretamente (nenhum erro ocorre), a variável Sistema OK assume o valor 1\. No evento de um erro, a variável Sistema OK assume ou não o valor 0 em função do parâmetro *açãoErro*:  
  
 \* Se *açãoErro* é SQL On erro abort (valor 1), OK assume o valor 0.  
 \* Se *açãoErro* é SQL On erro confirm (valor 2), OK assume o valor 0 se o usuário escolher parar a operação e 1 se escolher continuar.  
 \* Se *açãoErro* é SQL On erro continue (valor 3), a variável OK sempre assume o valor 1\.   
  
**Nota**: Se utilizar este comando para executar ações consumidoras de memória tales como importação massiva de dados, pode considerar chamar ao comando SQL *ALTER DATABASE* para desativar temporáriamente as opções SQL.


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1089 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


