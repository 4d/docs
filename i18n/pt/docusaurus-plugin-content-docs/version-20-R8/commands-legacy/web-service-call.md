---
id: web-service-call
title: WEB SERVICE CALL
slug: /commands/web-service-call
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE CALL.Syntax-->**WEB SERVICE CALL** ( *urlAcesso* ; *soapAction* ; *nomeMetodo* ; *nomeEspaço* {; *tipoComplexo* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE CALL.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| urlAcesso | Text | &#8594;  | Acesso URL ao Webservice |
| soapAction | Text | &#8594;  | Conteúdos do campo SOAPAction |
| nomeMetodo | Text | &#8594;  | Nome do método |
| nomeEspaço | Text | &#8594;  | nomeespaço XML |
| tipoComplexo | Integer | &#8594;  | Configuração de tipos complexos (tipos simples se omitido) |
| * | Operador | &#8594;  | Não fechar a conexão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB SERVICE CALL.Summary-->O comando **WEB SERVICE CALL** se utiliza para chamar um serviço web enviando uma petição HTTP.<!-- END REF--> Esta petição contém a mensagem SOAP criada previamente utilizando o comando [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) .  

Toda chamada posterior ao comando [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) provocará a criação de uma nova petição. A execução de um comando WEB SERVICE CALL também apaga todo resultado do serviço web chamado anteriormente e o substitui com os novos resultados.  
  
Em *urlAcesso*, passe a URL completa que permite acessar ao serviço web (não confunda esta URL com a do arquivo WSDL, que descreve o serviço web).

**Acesso em modo seguro (SSL)**  
  
Se desejar utilizar um serviço web em modo seguro utilizando SSL, passe https:// na frente da URL ao invés de http://. Esta configuração ativa automaticamente a conexão em modo seguro.

Note que este comando pode utilizar um certificado servidor (ver o comando [HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md)). Se este certificado não é válido (vencido ou revogado), a variável sistema OK toma o valor e se devolve o erro 901 "Certificado servidor inválido". Pode interceptar este erro utilizando um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md).   
  
Em *soapAction*, passe o conteúdo do campo SOAPAction da petição. Este campo contém geralmente o valor “ServiceName#MethodName”.

Em *nomMetodo*, passe o nome do método remoto (que pertence ao serviço Web) que deseja executar. 

Em *nomEspaço*, passe o espaço do nome XML (namespace) utilizado para a petição SOAP. Para maior informação sobre os nomes de espaços XML, consulte o Manual de Desenho.

O parâmetro opcional *tipoComplexo* especifica a configuração dos parâmetros web Service enviados ou recebidos (definidos utilizando os comandos [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) e [WEB SERVICE GET RESULT](web-service-get-result.md)).

O valor do parâmetro *tipoComplexo* depende do modo de publicação do serviço web (DOC ou RPC, ver o Manual de Desenho) e seus próprios parâmetros.

Em *tipoComplexo*, deve passar uma das seguintes constantes, que ficam no tema *Serviços Web (Cliente)*:  

| Constante              | Tipo          | Valor |
| ---------------------- | ------------- | ----- |
| Web Service dynamic    | Inteiro longo | 0     |
| Web Service manual     | Inteiro longo | 3     |
| Web Service manual in  | Inteiro longo | 1     |
| Web Service manual out | Inteiro longo | 2     |

  
Cada constante corresponde a uma “configuração”. Una configuração representa uma combinação entre o modo de publicação (RPC/DOC) e os tipos de parâmetros (entrada/saída, simples ou complexos) implementado.  

**Nota**: lembre que a característica “entrada” ou “saída” dos parâmetros se avalia desde o ponto de vista do método proxy/serviço web:

* um parâmetro “entrada” é um valor passado ao método proxy e portanto ao serviço web,
* um parâmetro “saída” é retornado pelo serviço web e portanto pelo método proxy (geralmente através de $0).

A seguinte tabela mostra todas as configurações possíveis, assim como as constantes correspondentes:

| **Parâmetros entrada** |                        |                       |
| ---------------------- | ---------------------- | --------------------- |
| **Parâmetros saída**   | **Simples**            | **Complexo**          |
| **Simples**            | Web Service Dynamic    | Web Service Manual In |
| | (modo RPC)           | (modo RPC)             |                       |
| **Complex**o           | Web Service Manual Out | Web Service Manual    |
| (modo RPC)             | (modo RPC ou DOC)      |                       |

As cinco configurações descritas a continuação podem ser implementadas. Em todos os casos, 4D administrará o formato da petição SOAP a enviar ao serviço web além de seu envelope. Você que decide o formato dos conteúdos da petição de acordo com a configuração utilizada.  

**Nota**: apesar do fato de que os tipos XML são complexos, os arrays de dados são tratados por 4D como tipos simples.

##### modo RPC, entrada e saída simples 

Esta configuração é a mais fácil de utilizar. Neste caso, o parâmetro *tipoComplexo* contém a constante Web Service Dynamic ou é omitido.  
  
Os parâmetros enviados e as respostas recebidas podem ser manipulados diretamente, sem processamento prévio.  
  
Consulte o exemplo do comando [WEB SERVICE GET RESULT](web-service-get-result.md)

##### modo RPC, entrada complexa e saída simples 

Neste caso, o parâmetro *tipoComplexo* contém a constante Web Service Manual In. Com esta configuração, deve passar “manualmente” ao serviço Web cada elemento XML fonte na forma de um BLOB, com a ajuda do comando [WEB SERVICE SET PARAMETER](web-service-set-parameter.md).   
  
Depende de você formatar o BLOB inicial como um elemento XML válido. Este BLOB deve conter como primeiro elemento o primeiro elemento “filho” do elemento <Body> da petição final.

Exemplo

```4d
 var $1 : Blob
 var $0 : Boolean
 
 SET WEB SERVICE PARAMETER("MeuXMLBlob";$1)
 CALL WEB SERVICE("http://meu.dominio.com/meu_servico";"MinhaActionSoap";"meuMetodo";
 "http://meu.nomespaco.com/";Web Service manual in)
 GET WEB SERVICE RESULT($0;"MinhaVarSaida";*)
```

##### modo RPC, entrada simples e saída complexa 

Neste caso, o parâmetro t*ipoComplexo* contém a constante Web Service Manual Out. Cada parâmetro de saída será retornado pelo serviço Web na forma do elemento XML armazenado em um BLOB. Recupera este parâmetro utilizando o comando [WEB SERVICE GET RESULT](web-service-get-result.md).Depois pode analizar o conteúdo do BLOB recebido utilizando os comandos XML de 4D.  
  
**Exemplo** 
  
```4d
 var $0 : Blob
 var $1 : Boolean
 
 SET WEB SERVICE PARAMETER("MinhaVarEntrada";$1)
 CALL WEB SERVICE("http://meu.dominio.com/meu_serviço";"MinhaAcaoSoap";"meuMetodo";
 "http://meu.nomespaco.com/";Web Service manual out)
 GET WEB SERVICE RESULT($0;"MeuXMLSaida";*)
```

##### modo RPC, entrada e saída complexas 

Neste caso, o parâmetro *tipoComplexo* contém as constantes Web Service Manual. Cada parâmetro de entrada e de saída deve ser armazenado na forma dos elementos XML nos BLOBs, como foi descrito nas duas configurações anteriores.  

* **Exemplo**

```4d
 var $0 : Blob
 var $1 : Blob
 
 SET WEB SERVICE PARAMETER("MeuBlobXMLEntrada";$1)
 CALL WEB SERVICE("http://meu.dominio.com/meu_servico";"MinhaAccionSoap";"meuMetodo";
 "http://meu.nomespaco.com/";Web Service manual)
 GET WEB SERVICE RESULT($0;"MeuXMLSaida";*)
```

##### modo DOC 

Um método proxy de chamada de um serviço web DOC é similar a um método proxy de chamada de um serviço web RPC utilizando os parâmetros de entrada e de saída complexos  
  
A única diferença entre estas duas configurações é o nivel do conteúdo XML dos parâmetros BLOB passados e recebidos. Desde o ponto de vista de 4D, a construção e o envio da petição SOAP são idênticos.  

* Exemplo

```4d
 var $0 : Blob
 var $1 : Blob
 
 SET WEB SERVICE PARAMETER("MeuXMLEntrada";$1)
 CALL WEB SERVICE("http://meu.dominio.com/meu_servico";"MinhaActionSoap";"meuMetodo";
 "http://meu.nomespaco.com/";Web Service manual)
 GET WEB SERVICE RESULT($0;"MeuXMLSaida";*)
```

**Nota**: no caso dos serviços web DOC, o valor das strings (“MeuXMLEntrada” e “MeuXMLSaída”) passadas como parâmetros não importa, é possível inclusive passar strings vazias"". De fato, estes valores não são utilizados na petição SOAP contida no documento XML. É obrigatório passar estes parâmetros.  
  
Para utilizar um serviço web publicado em modo DOC (ou em modo RPC com tipos complexos), é recomendável proceder desta forma:

* Gerar o método proxy utilizando o Assistente Client Web Services.
O método proxy será chamado dessa forma: *$XMLresultadoBlob:=$DOCproxy\_Metodo($XMLparamBlob)* 

• É bom se acostumar com os conteúdos das petições SOAP a enviar ao servço web utilizando uma ferramenta de teste online (por exemplo, *http://soapclient.com/soaptest.html*). Este tipo de ferramenta é utiliza para gerar os formulários de teste HTML, a partir do WSDL do serviço web. 

* Copie o conteúdo XML gerado a partir do primeiro filho de <body>.
* Escreva o método permitindo localizar os valores reais dos parâmetros no código XML; este código deve estar localizado no BLOB *$XMLparamBlob*.
* Para analizar a resposta, pode igualmente utilizar uma ferramenta de teste online, ou utilizar o WSDL que especifica os elementos retornados.

O parâmetro \* pode ser utilizado para otimizar chamadas. Quando for passado, o comando não fecha a conexão utilizada pelo processo ao final de sua execução. Neste caso, a próxima chamada a WEB SERVICE CALL reutilizará a mesma conexão se for passa o parâmetro \*, etc. Para fechar a conexão, simplesmente execute o comando WEB SERVICE CALL sem o parâmetro \*. Este mecanismo pode ser utilizado para acelerar bastante os processos em caso de chamadas sucessivas a vários serviços web no mesmo servidor, especialmente em uma configuração WAN (via Internet, por exemplo). Note que este mecanismo depende do parâmetro “keep-alive” do servidor web. Este parâmetro geralmente define um número máximo de petições através da mesma conexão, e pode até mesmo negar petições. Se as petições WEB SERVICE CALL seguirem uma atrás da outra na mesma conexão alcançarem este número máximo, ou se as conexões keep-alive não forem permitidas, 4D criará uma nova conexão para cada petição. 

#### Variáveis e conjuntos do sistema 

Se a petição for corretamente encaminhada, e o Web Service a aceitar, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0 e um erro é devolvido.

#### Ver também 

[WEB SERVICE GET RESULT](web-service-get-result.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 778 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


