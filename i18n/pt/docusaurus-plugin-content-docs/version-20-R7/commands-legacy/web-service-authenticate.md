---
id: web-service-authenticate
title: WEB SERVICE AUTHENTICATE
slug: /commands/web-service-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Syntax-->**WEB SERVICE AUTHENTICATE** ( *nome* ; *senha* {; *metAutenticaçao*} {; *} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE AUTHENTICATE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nome | Text | &#8594;  | nome de usuário |
| senha | Text | &#8594;  | senha de usuário |
| metAutenticaçao | Integer | &#8594;  | Método autenticação 0 ou omitido = não especificado; 1= BASIC; 2=DIGEST |
| * | Operador | &#8594;  | Se passado: autenticação por proxy |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SERVICE AUTHENTICATE.Summary-->O comando **WEB SERVICE AUTHENTICATE** permite utilizar os serviços web que necessitem da autenticação da aplicação cliente (autenticação simples).<!-- END REF--> Os métodos BASIC e DIGEST são compatíveis, assim como a presença de um proxy.  

**Nota**: para mais informação sobre os métodos de autenticação BASIC e DIGEST, revise a seção *Conexões de Segurança*.  
  
Nos parâmetros *nome* e *senha*, passe a informação de identificação requerida (nome de usuário e senha). Esta informação será codificada e adicionada à petição HTTP enviada ao serviço web utilizando o comando [WEB SERVICE CALL](web-service-call.md). É então necessário chamar ao comando **WEB SERVICE AUTHENTICATE** antes de chamar ao comando **[WEB SERVICE CALL](web-service-call.md)**.

O parâmetro opcional *metAutenticaçao* permite indicar o método de autenticação a utilizar para a próxima chamada do comando **[WEB SERVICE CALL](web-service-call.md)**. Pode passar um dos seguintes valores:  
* 2 = utilizar o método de autenticação DIGEST
* 1 = utilizar o método de autenticação BASIC
* 0 (ou omitir o parâmetro) = utilizar o método apropriado. Neste caso, 4D envia uma petição adicional para negociar o método de autenticação.

Se passar o parâmetro \*, você indica que a informação de autenticação é para ser enviada a um proxy HTTP. Essa configuração deve ser implementada quando houver um proxy que exige autenticação entre o cliente Web Service client e o próprio Web Service. Se o Web Service for autenticado, uma autenticação dupla for exigida (ver o exemplo).

Como padrão, a informação de autenticação se reinicia depois de cada petição. Portanto, deve utilizar o comando **WEB SERVICE AUTHENTICATE** antes de cada comando [WEB SERVICE CALL](web-service-call.md). Entretanto é possível conservar temporariamente esta informação utilizando uma opção do comando [WEB SERVICE SET OPTION](web-service-set-option.md). Neste caso, não é necessário executar o comando **WEB SERVICE AUTHENTICATE** antes de cada [WEB SERVICE CALL](web-service-call.md).  
  
Se a autenticação fracassar, o servidor SOAP devolve um erro que pode identificar utilizando o comando [WEB SERVICE Get info](web-service-get-info.md).

#### Exemplo 

Autenticação com um serviço web localizado atrás de um proxy:

```4d
  //Autenticação ao serviço web em modo DIGEST
 AUTHENTICATE WEB SERVICE("SoapUser";"123";2)
  //Autenticação ao proxy em modo default
 AUTHENTICATE WEB SERVICE("ProxyUser";"456";*)
 CALL WEB SERVICE(...)
```

#### Ver também 

[WEB SERVICE CALL](web-service-call.md)  
[WEB SERVICE Get info](web-service-get-info.md)  