---
id: web-service-get-result
title: WEB SERVICE GET RESULT
slug: /commands/web-service-get-result
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE GET RESULT.Syntax-->**WEB SERVICE GET RESULT** ( *valorRetornado* {; *nomeRetornado* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE GET RESULT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| valorRetornado | Variable | &#8592; | Valor retornado pelo Web Service |
| nomeRetornado | Text | &#8594;  | Nome do parâmetro a ser retornado |
| * | Operator |  &#8594;  | Liberar memória |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SERVICE GET RESULT.Summary-->O comando **WEB SERVICE GET RESULT** permite recuperar um valor enviado pelo serviço web como resultado do processo realizado.<!-- END REF-->  

**Nota**: este comando deve ser utilizado apenas depois do comando [WEB SERVICE CALL](web-service-call.md).  
  
O parâmetro *valorRetornado* recebe o valor reenviado pelo serviço web. Passe neste parâmetro uma variável 4D. Esta variável é geralmente $0, que corresponde ao valor retornado pelo método proxy. Entretanto, é possível utilizar variáveis intermediárias (deve utilizar as variáveis de processo apenas).  
  
**Nota**: cada variável 4D ou array utilizado deve ser declarado previamente utilizando os comandos dos temas “*Compilador* e *Arrays*”   
  
O parâmetro opcional *nomeRetornado* é utilizado para especificar o nome do parâmetro a recuperar. Entretanto, como a maioria dos serviços web devolvem apenas um valor, geralmente este parâmetro não é necessário.  
  
O parâmetro opcional \*, indica ao programa que libere a memória dedicada ao processamento da petição. Deve passar este parâmetro depois de recuperar o último valor enviado pelo serviço web.

#### Exemplo 

Imagine um serviço web que devolve a hora atual em qualquer cidade do mundo. Os parâmetros recebidos pelo serviço web são o nome da cidade e o código do país. O serviço web devolve a hora correspondente. O método proxy de chamada pode ser da seguinte forma:  
  
```4d
 var $1 : Text
 var $2 : Text
 var $0 : Time
 
 SET WEB SERVICE PARAMETER("cidade";$1)
 SET WEB SERVICE PARAMETER("codigo_pais";$2)
 
 CALL WEB SERVICE("http://www.cidadesdomundo.com/WS";"WSHoras#Hora_cidade";"Hora_cidade";
 "http://www.cidadesdomundo.com/namespace/default")
 
 If(OK=1)
    GET WEB SERVICE RESULT($0;"devolve";*)
 End if
```

#### Ver também 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 779 |
| Thread-seguro | &check; |
| Proibido no servidor ||


