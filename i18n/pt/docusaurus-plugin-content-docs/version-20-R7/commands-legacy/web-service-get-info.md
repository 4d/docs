---
id: web-service-get-info
title: WEB SERVICE Get info
slug: /commands/web-service-get-info
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE Get info.Syntax-->**WEB SERVICE Get info** ( *tipoInfo* ) : Text<!-- END REF-->
<!--REF #_command_.WEB SERVICE Get info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoInfo | Integer | &#8594;  | Informação a ser recuperada |
| Resultado | Text | &#8592; | Informação sobre o último erro SOAP |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SERVICE Get info.Summary-->O comando **WEB SERVICE Get info** retorna informação de todo erro achado durante a execução da última petição SOAP enviada até um serviço web remoto.<!-- END REF-->. Geralmente, este comando deve ser chamado em um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md).  
  
O parâmetro *tipoinfo* permite indicar o tipo de informação que quiser obter. Deverá passar uma das constantes listadas a seguir, localizada no tema *Serviços Web (Cliente)*:  

| Constante                    | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web Service detailed message | Inteiro longo | 1     | Mensagem detalhada que descreve o erro. O tipo de mensagem difere segundo o tipo de erro principal.\- Se o erro principal = 9910 (Error Soap): é retornada a causa do erro SOAP (ex.: "o método remoto não existe").\- Se o erro principal = 9911 (Erro do analisador xml): é retornada a localização do erro no documento XML.\- Se o erro principal = 9912 (Erro HTTP): \- Se o erro HTTP está localizado no intervalo \[300-400\] (problemas relacionados com a localização do documento solicitado), é retornada a nova localização da URL solicitada. \- Para qualquer outro código de erro HTTP, é retornado o <body>.\- Se o erro principal = 9913 (Erro de rede): é retornada a causa do erro de rede (ex.: “ServerAddress: error DNS”)\- Se o erro principal = 9914 (Erro interno): é retornada a causa do erro interno. |
| Web Service error code       | Inteiro longo | 0     | Código do erro principal (definido por 4D). Este código é também retornado na variável sistema Erro.Lista de códigos que podem ser retornados:9910: Erro Soap (veja também Web Service Fault Actor)9911: Erro de analisador xml9912: Erro HTTP (veja também Web Service HTTP Error code)9913: Erro rede9914: Erro interno.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Web Service fault actor      | Inteiro longo | 3     | Causa do erro (retornado pelo protocolo SOAP, a ser usado no caso de erro principal 9910)\- Version Mismatch (a versão não corresponde)\- Must Understand (um parâmetro definido como obrigatório não pode ser interpretado pelo servidor)\- Client Fault (erro cliente)\- Server Fault (erro servidor)\- Encoding Unknown (codificação desconhecida)                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Web Service HTTP status code | Inteiro longo | 2     | Código de erro HTTP (para ser usado no caso do erro principal 9912).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

Uma string vazia é retornada quando não há informação disponível, particularmente se a última petição SOAP não gerou erros.


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 780 |
| Thread-seguro | &check; |
| Proibido no servidor ||


