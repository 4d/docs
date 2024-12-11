---
id: http-authenticate
title: HTTP AUTHENTICATE
slug: /commands/http-authenticate
displayed_sidebar: docs
---

<!--REF #_command_.HTTP AUTHENTICATE.Syntax-->**HTTP AUTHENTICATE** ( *nome* ; *senha* {; *metodoAut*} {; *} )<!-- END REF-->
<!--REF #_command_.HTTP AUTHENTICATE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nome | Text | &#8594;  | Nome de usuário |
| senha | Text | &#8594;  | Senha de usuário |
| metodoAut | Integer | &#8594;  | Método de autenticação: 0 ou se omite = não definido, 1 = BASIC, 2 = DIGEST |
| * | Operador | &#8594;  | Se passado: autenticação por proxy |

<!-- END REF-->


:::info Compatibilidade

Esse comando é mantido apenas por motivos de compatibilidade. Agora é recomendável usar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### Descrição 

<!--REF #_command_.HTTP AUTHENTICATE.Summary-->O comando **HTTP AUTHENTICATE** permite fazer petições HTTP aos servidores que necessitam a autenticação da aplicação cliente.<!-- END REF--> Os métodos BASIC e DIGEST são compatíveis, assim como também a presença de um proxy.  
  
Nos parâmetros *nome* e *senha*, passe a informação de identificação requerida(nome de usuário e senha). Esta informação é codificada e agregada à seguinte petição HTTP enviada utilizando o comando [HTTP Request](http-request.md) ou [HTTP Get](http-get.md), portanto é necessário chamar ao comando **HTTP AUTHENTICATE** antes de cada petição HTTP.  
  
O parâmetro opcional *metodoAut* permite indicar o método de autenticação a utilizar. Pode passar uma das seguintes constantes, do tema *HTTP Client*:

| Constante   | Tipo          | Valor | Comentário                               |
| ----------- | ------------- | ----- | ---------------------------------------- |
| HTTP basic  | Inteiro longo | 1     | Utilizar o método de autenticação BASIC  |
| HTTP digest | Inteiro longo | 2     | Utilizar o método de autenticação DIGEST |
  
  
Se omite o parâmetro *metodoAut* (ou passa 0), deixa que o programa escolha o método apropriado a utilizar. Neste caso, 4D envia uma petição adicional com o fim de negociar o método de autenticação.  
  
Se passado o parâmetro *\**, indica que a informação de autenticação é dirigida a um proxy HTTP. Esta configuração deve ser implantada quando existe um proxy que requer autenticação entre o cliente e o servidor HTTP. Caso o mesmo servidor seja autenticado, é necessário uma dupla autenticação.  
  
Como padrão, informação de autenticação é armazaneada e reutilizada para cada requisição no processo atual. Entretanto, é possível resetar esta informação depois de cada requisição usando uma opção do comando [HTTP SET OPTION](http-set-option.md). Neste caso, terá que executar o comando **HTTP AUTHENTICATE** antes de cada chamada [HTTP Request](http-request.md) ou [HTTP Get](http-get.md).

#### Exemplo 

Exemplos de petições com autenticação:

```4d
  // Autenticação em um servidor HTTP em modo DIGEST
 HTTP AUTHENTICATE("httpUser";"123";2)
  // Autenticação em um proxy em modo por defeito
 HTTP AUTHENTICATE("ProxyUser";"456";*)
 $httpStatus:=HTTP Get(...)
```

#### Ver também 

[HTTP SET OPTION](http-set-option.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1161 |
| Thread-seguro | &check; |
| Proibido no servidor ||


