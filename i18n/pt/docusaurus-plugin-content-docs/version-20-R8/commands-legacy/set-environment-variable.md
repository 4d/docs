---
id: set-environment-variable
title: SET ENVIRONMENT VARIABLE
slug: /commands/set-environment-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Syntax-->**SET ENVIRONMENT VARIABLE** ( *nomeVar* ; *valorVar* )<!-- END REF-->
<!--REF #_command_.SET ENVIRONMENT VARIABLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeVar | Text | &#8594;  | nome da variável a estabelecer. |
| valorVar | Text | &#8594;  | Valor da variável ou "" para resetar para o valor padrão |

<!-- END REF-->


:::info Compatibilidade

Recomenda-se usar a classe [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::

#### Descrição 

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Summary-->O comando **SET ENVIRONMENT VARIABLE** permite fixar o valor de uma variável de ambiente em Mac OS X e Windows.<!-- END REF--> Está projetado para ser utilizado com o comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md).. Também funciona com o comando [PHP Execute](php-execute.md).  
  
Passe o nome da variável a definir em *nomVar* e seu valor em *valorVar*.

* Para obter a lista geral das variáveis de ambiente e seus possíveis valores, por favor consulte a documentação técnica de seu sistema operativo.
* Três variáveis ambiente específicas estão disponíveis para uso no contexto do comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md): :

*\_4D\_OPTION\_CURRENT\_DIRECTORY*:   
*\_4D\_OPTION\_HIDE\_CONSOLE* (só em Windows)  
*\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*  
  
Para informação sobre estas variáveis, consulte a documentação do comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md).

#### Exemplo 

Consulte os exemplos do comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md "LAUNCH EXTERNAL PROCESS").

#### Ver também 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 812 |
| Thread-seguro | &check; |


