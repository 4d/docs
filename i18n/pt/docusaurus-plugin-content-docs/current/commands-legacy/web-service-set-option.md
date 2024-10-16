---
id: web-service-set-option
title: WEB SERVICE SET OPTION
slug: /commands/web-service-set-option
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE SET OPTION.Syntax-->**WEB SERVICE SET OPTION** ( *opçao* ; *valor* )<!-- END REF-->
<!--REF #_command_.WEB SERVICE SET OPTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opçao | Integer | &#8594;  | Código da opção a estabelecer |
| valor | Integer, Text | &#8594;  | Valor da opção |

<!-- END REF-->

#### Nota preliminar 

<!--REF #_command_.WEB SERVICE SET OPTION.Summary-->Este comando está criado para os usuários de serviços web.<!-- END REF--> Seu uso é opcional. 

#### Descrição 

O comando WEB SERVICE SET OPTION permite definir diferentes opções que se utilizarão durante a próxima petição SOAP provocada pelo comando [WEB SERVICE CALL](web-service-call.md).  

Pode chamar este comando tantas vezes quantas opções houver a definir.  
  
No parâmetro *opçao*, passe o número da opção a definir e no parâmetro *valor*, passe o novo valor da opção. Para estes parâmetros, pode utilizar uma das seguintes constantes predefinidas do tema *Serviços Web (Cliente)*:  

| Constante                       | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------- | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service display auth dialog | Inteiro longo | 4     | *valor* \= 0 (não mostrar a caixa de diálogo) ou 1 (mostrar a caixa de diálogo)Esta opção administra a visualização da caixa de diálogo de atualização enquanto o comando [WEB SERVICE CALL](web-service-call.md) é executado. Por padrão, este comando nunca mostra a caixa de diálogo, geralmente, para fazê-lo tem que usar o comando [WEB SERVICE AUTHENTICATE](web-service-authenticate.md). Contudo, se quiser que a caixa de diálogo de autenticação apareça, a fim de que o usuário possa introduzir seus identificadores, deverá usar a seguinte opção: passe 1 em valor a fim de mostrar a caixa de diálogo, do contrário passe 0\. A caixa de diálogo somente é mostrada se o serviço web precisa de autenticação.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Web Service HTTP compression    | Inteiro longo | 6     | *valor* \= Web Service Compression <br/> Esta opção permite ativar um mecanismo interno de compressão das petições SOAP com o fim de acelerar as mudanças entre aplicações 4D. Quando executa a instrução [WEB SERVICE SET OPTION](web-service-set-option.md)(Web Service HTTP Compression; Web Service Compression) no cliente 4D do serviço web, os dados da próxima petição SOAP enviados pelo cliente serão comprimidos utilizando um mecanismo padrão HTTP ("gzip" ou "deflate" em função do conteúdo da petição) antes de seu envio ao servidor SOAP 4D. O servidor descomprimirá e analisará a petição, depois responderá automaticamente utilizando o mesmo mecanismo. Só afeta a petição que segue a chamada ao comando [WEB SERVICE SET OPTION](web-service-set-option.md). Portanto deve chamar este comando cada vez que queira utilizar a compressão. Por padrão, 4D não comprime as petições HTTP dos serviços web.<br/>**Nota:** Este mecanismo não pode ser utilizado para as petições enviadas a um servidor SOAP 4D de uma versão anterior a 11.3\. Para que possa otimizar mais este funcionamento, as opções adicionais configuram o limite e a taixa de compressão das petições. Estas opções são acessíveis via o comando [SET DATABASE PARAMETER](set-database-parameter.md). |
| Web Service HTTP timeout        | Inteiro longo | 1     | valor = "timeout" da parte cliente expressado em segundos.O timeout da parte clientes é o período de espera do cliente serviço web caso não haja resposta do servidor. Após este período, o cliente fecha a sessão e a petição é perdida.Por padrão, o timeout é de 180 segundos. Pode ser modificado por razões específicas (status da rede, especificações do serviço web, etc.).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Web Service reset auth settings | Inteiro longo | 5     | *valor* \= 0 (não apagar a informação) ou 1 (apaga a informação)Esta opção permite indicar ao 4D para memorizar a informação de autenticação do usuário (nome de usuário, senha, método, etc.), para que possa ser utilizada mais tarde. Por Padrão, esta informação é apagada após cada execução do comando [WEB SERVICE CALL](web-service-call.md). Passe 0 em valor para salvar a informação e 1 para excluí-la. Note que quando passar 0, a informação é conservada durante a sessão mas não é armazenada.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Web Service SOAP header         | Inteiro longo | 2     | *valor* \= referência do elemento XML raiz a ser inserido como cabeçalho da petição SOAP.Esta opção permite inserir um cabeçalho na petição SOAP gerada fazendo uso do comando [WEB SERVICE CALL](web-service-call.md). Por padrão, as petições SOAP não contém um cabeçalho específico. Contudo, alguns serviços web requerem um cabeçalho, por exemplo para a gestão dos parâmetros de identificação.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Web Service SOAP version        | Inteiro longo | 3     | *valor* \= Web Service SOAP\_1\_1 ou Web Service SOAP\_1\_2Esta opção permite especificar a versão do protocolo SOAP usado na petição. Passe a constante Web Service SOAP\_1\_1 para valor a fim de indicar a versão 1.1 e a constante Web Service SOAP\_1\_2 para indicar a versão 1.2.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

A ordem na qual as opções são chamadas não é importante. Se a mesma *opçao* for estabelecida várias vezes, somente o valor da última chamada é levado em conta.

#### Exemplo 1 

Insere um cabeçalho personalizado na petição SOAP: 

```4d
  // Criação de uma referência XML
 var vRootRef;vElemRef : Text
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElemRef:=DOM Create XML element(vRootRef;vxPath)
  //Modificação do cabeçalho SOAP com a referência
 WEB SERVICE SET OPTION(Web Service SOAP header;vElemRef)
```

#### Exemplo 2 

Utilização da versão 1.2 do protocolo SOAP: 

```4d
 WEB SERVICE SET OPTION(Web Service SOAP version;Web Service SOAP_1_2)
```

#### Ver também 

[WEB SERVICE CALL](web-service-call.md)  