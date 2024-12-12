---
id: soap-get-info
title: SOAP get info
slug: /commands/soap-get-info
displayed_sidebar: docs
---

<!--REF #_command_.SOAP get info.Syntax-->**SOAP get info** ( *numInfo* ) : Text<!-- END REF-->
<!--REF #_command_.SOAP get info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numInfo | Integer | &#8594;  | Número do tipo de informação SOAP a conseguir |
| Resultado | Text | &#8592; | Informação SOAP |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SOAP get info.Summary-->O comando SOAP get info permite recuperar na forma de cadeia de caracteres diferentes tipos de informação relacionadas com uma petição SOAP.<!-- END REF-->  

Quando processa uma petição SOAP, pode ser útil obter informação adicional, que não seja a dos valores dos parâmetros RPC, sobre a petição. Por exemplo, por razões de segurança, pode utilizar este comando no *Método de banco On Web Aunthentication* para conhecer o nome do método Web service solicitado.  
  
Passe no parâmetro *numInfo* o número do tipo de informação SOAP que deseja conhecer. Pode utilizar as seguintes constantes predefinidas, que ficam no tema *Serviços Web (Servidor)*  
  
| Constante         | Tipo          | Valor |
| ----------------- | ------------- | ----- |
| SOAP method name  | Inteiro longo | 1     |
| SOAP service name | Inteiro longo | 2     |
  
  
**Nota**: Por razões de segurança, é possível obter o tamanho máximo das petições de serviços web enviadas a 4D. Esta configuração é realizada utilizando o comando [SET DATABASE PARAMETER](set-database-parameter.md). 

#### Ver também 

[SET DATABASE PARAMETER](set-database-parameter.md)  
[SOAP SEND FAULT](soap-send-fault.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 784 |
| Thread-seguro | &check; |


