---
id: check-log-file
title: CHECK LOG FILE
slug: /commands/check-log-file
displayed_sidebar: docs
---

<!--REF #_command_.CHECK LOG FILE.Syntax-->**CHECK LOG FILE**<!-- END REF-->
<!--REF #_command_.CHECK LOG FILE.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.CHECK LOG FILE.Summary-->O comando **CHECK LOG FILE** mostra a caixa de diálogo de visulização do arquivo de histórico atual da base de dados (acessível também através da janela do Centro de segurança e manutenção) :

![](../assets/en/commands/pict4835044.en.png)

Esta caixa de diálogo inclui o botão **Desfazer** que permite cancelar as operações efetuadas aos dados da base de dados.<!-- END REF--> Para maiores informações sobre esta caixa de diálogo, favor consultar o Manual de Desenho.

**Nota:** como a função Desfazer é relativamente poderosa, é recomendável restringir o acesso ao comando **CHECK LOG FILE** dos administradores da base de dados.

Este comando só pode ser utilizado no contexto de aplicativos monousuários. Mais particularmente, permite acessar a função Desfazer a partir dos aplicativos 4D Volume Desktop (aplicativos sem modo desenho). Se é chamado em um aplicativo cliente/servidor, o comando não tem efeito e retorna o erro 1421.

#### Gestão de erros 

* Se este comando é executado em uma base de dados que funciona sem arquivo de histórico, o comando não faz nada e retorna o erro 1403\.
* Se este comando é executado em uma base de dados cliente/servidor, o comando não faz nada e retorna o erro 1421\.  
É possível interceptar estes erros utilizando um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver também 

*Erros de Gestão de backup (1401 -> 1421)*  
[RESTORE](restore.md)  