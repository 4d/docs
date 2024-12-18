---
id: soap-declaration
title: SOAP DECLARATION
slug: /commands/soap-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SOAP DECLARATION.Syntax-->**SOAP DECLARATION** ( *variavel* ; *tipo* ; entrada_saida {; *apelido*} )<!-- END REF-->
<!--REF #_command_.SOAP DECLARATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| variavel | Variable | &#8594;  | Variável que referencia um argumento de entrada ou saída SOAP |
| tipo | Integer | &#8594;  | Tipo 4D para o qual o argumento aponta |
| entrada_saida | Integer | &#8594;  | 1 = entrada SOAP; 2 = saída SOAP |
| apelido | Text | &#8594;  | Nome publicado por esse argumento usando trocas SOAP |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SOAP DECLARATION.Summary-->O comando SOAP DECLARATION permite declarar explicitamente o tipo dos parâmetros utilizados em um método 4D publicado como serviço web.<!-- END REF-->

Quando for publicado um método como serviço web, os parâmetros padrão *$0, $1... $n* são utilizados para descrever os parâmetros do serviço web ao mundo exterior (mais particularmente no arquivo WSDL). O protocolo SOAP necessita que os parâmetros sejam nomeados explicitamente; 4D utiliza como padrão os nomes “FourD\_arg0, FourD\_arg1 ... FourD\_argn”.  
  
Este funcionamento como padrão pode ser problemático pelas seguintes razões:

* Não é possível declarar *$0* ou *$1, $2*, etc. como um array. Portanto, é necessário utilizar ponteiros; entretanto, neste caso, é necessário conhecer o tipo dos valores para a geração do arquivo WSDL.
* Depois, pode ser útil ou necessário personalizar os nomes dos parâmetros (entrada e saída).
* Pode utilizar parâmetros como as estruturas XML e referências DOM.
* Também pode ser necessário devolver os valores de um tamanho superior a 32 KB (limite dos argumentos de tipo Texto em banco de dados que estão em modo não-Unicode).
* Finalmente, este funcionamento torna impossível devolver mais de um valor por chamada RPC (em *$0*).

O comando SOAP DECLARATION lhe permite liberar estes limites. Pode executar este comando para cada parâmetro de entrada e saída e atribuir-lhe um nome e um tipo.

**Nota**: Mesmo quando esse comando for usado, é necessário declarar as variáveis 4D e arrays no método Compiler\_Web utilizando os comandos do tema “*Compilador*”.   
  
Em *variavel*, passe a variável 4D a referenciar quando chame ao serviço web.  
  
**Aviso**: Pode referenciar apenas as variáveis processo ou os argumentos dos métodos 4D (*$0* a *$n*). As variáveis locais e interprocesso não podem ser utilizados.  
  
Como padrão, como apenas podem ser utilizados os argumento de tipo texto, as respostas do servidor SOAP estão limitadas a 32 KB. Entretanto, é possível devolver argumentos SOAP com um tamanho maior a 32 KB, utilizando BLOBs. Para exceder este limite, simplesmente necessita declarar os argumentos como BLOBs antes de chamar ao comando SOAP DECLARATION (ver exemplo 4).  
  
**Nota**:

* Do lado do cliente, se assina este tipo de serviço web com 4D, o assistente de serviços web gerará naturalmente uma variável de tipo Texto no método proxy. Para poder utilizá-la, apenas necessita digitar novamente esta variável como um BLOB no método proxy.
* Esse comando não é compatível com objetos blob (tipo 4D Blob). Veja em *Passing blobs and blob objects to 4D commands* developer.4d.com

Em *tipo*, passe o tipo 4D correspondente. Podem ser utilizados a maioria dos tipos de variáveis e arrays 4D. Pode utilizar as seguintes constantes predefinidas, que ficam no tema “*Tipos de campos e variáveis*”, além de, para tipos XML, duas constantes do tema *Serviços Web (Servidor)* :

| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| Boolean array | Inteiro longo | 22    |
| Date array    | Inteiro longo | 17    |
| Integer array | Inteiro longo | 15    |
| Is BLOB       | Inteiro longo | 30    |
| Is Boolean    | Inteiro longo | 6     |
| Is date       | Inteiro longo | 4     |
| Is integer    | Inteiro longo | 8     |
| Is longint    | Inteiro longo | 9     |
| Is real       | Inteiro longo | 1     |
| Is string var | Inteiro longo | 24    |
| Is text       | Inteiro longo | 2     |
| Is time       | Inteiro longo | 11    |
| LongInt array | Inteiro longo | 16    |
| Real array    | Inteiro longo | 14    |
| String array  | Inteiro longo | 21    |
| Text array    | Inteiro longo | 18    |

| Constante        | Tipo          | Valor |
| ---------------- | ------------- | ----- |
| Is DOM reference | Inteiro longo | 37    |
| Is XML           | Inteiro longo | 36    |

Em *entrada\_saída*, passe um valor indicando se o parâmetro processado for “entrada” (ou seja corresponde a um valor recebido pelo método) ou “saída” (por exemplo corresponde a um valor retornado pelo método). Pode utilizar as seguintes constantes predefinidas, que ficam no tema “*Serviços Web (Servidor)*”:

| Constante   | Tipo          | Valor |
| ----------- | ------------- | ----- |
| SOAP input  | Inteiro longo | 1     |
| SOAP output | Inteiro longo | 2     |

##### Uso de tipos XML 

Pode declarar as variáveis de tipo "estrutura XML" e "DOM reference", de entrada e saída, através das constantes Is XML e Is DOM reference. Quando os parâmetros deste tipo são definidos, não se aplica nenhum processo nem codificação e os dados são transmitidos "tal qual" (ver exemplo 5).

* Parâmetros de saída
* * Is XML indica que o parâmetro contém uma estrutura XML,  
   * Is DOM reference indica que o parâmetro contém a referência DOM de uma estrutura XML. Neste caso, a inserção da estrutura XML na mensagem SOAP é equivalente a executar o comando [DOM EXPORT TO VAR](dom-export-to-var.md).

**Nota**: No caso das referências DOM utilizadas como parâmetros de saída, se recomenda utilizar as referências globais, criadas, por exemplo, ao início ou ao fechamento da aplicação. De fato, uma referência DOM criada dentro do mesmo serviço web não pode ser fechada com [DOM CLOSE XML](dom-close-xml.md), do contrário o serviço web não devolve nada. As chamadas múltiplas ao serviço web implicam portanto a criação de múltiplas referências DOM não fechadas, as quais podem provocar uma saturação da memória.

* Parâmetros de entrada
* * Is XML indica que o parâmetro deve receber um argumento XML enviado pelo cliente SOAP.  
   * Is DOM reference indica que o parâmetro deve receber a referência DOM de uma estrutura XML correspondente ao argumento XML enviado pelo cliente SOAP.
* Modificação do WSDL As estruturas XML serão declaradas por 4D como "anyType" (tipo indeterminado) no WSDL. Se desejar dar um tipo preciso a estrutura XML, deve guardar o arquivo WSDL e adicionar manualmente o esquema de dados que deseja na seção <types> do WSDL.

##### método COMPILER\_WEB 

Os argumentos SOAP entrantes referenciados com a ajuda de variáveis 4D (e não pelos argumentos de métodos 4D) devem ser declarados primeiro no método de projeto COMPILER\_WEB. De fato, o uso de variáveis de processo nos métodos Web Services necessitam ser declaradas antes da chamada ao método. Se chama o método de projeto COMPILER\_WEB, se existir, para cada petição SOAP aceitada. Como padrão, o método COMPILER\_WEB não existe. Você deve criá-lo especificamente.  

Note que o método COMPILER\_WEB também é chamado pelo servidor web de 4D durante a recepção de petições web “convencionais” de tipo POST (ver a seção *Ações URL e Formulário*).  
  
Em *apelido*, passe o nome do argumento que deve aparecer em WSDL e nos intercâmbios SOAP.  
  
**Aviso**: este nome deve ser único na chamada RPC (parâmetros de entrada e saída), do contrário, apenas a última declaração será levada em consideração por 4D.  
  
**Nota**: os nomes dos argumentos não devem começar por um número nem conter espaços. Além disso, para evitar riscos de incompatibilidade, é recomendado não utilizar caracteres estendidos (como caracteres acentuados).  
Se for omitido o parâmetro *apelido*, 4D utilizará, como padrão, o nome da variável ou FourD\_argN para os argumentos dos métodos 4D (*$0* a *$n*).  
  
**Nota**: o comando SOAP DECLARATION deve estar incluído no método publicado como serviço web. Não é possível chamá-lo desde outro método.

#### Exemplo 1 

Este exemplo especifica um nome de parâmetro: 

```4d
  // No método COMPILER_WEB
 var $1 : Integer
 
  // No método do serviço Web
  // Durante a geração do arquivo WSDL e as chamadas SOAP, a palavra
  // zipcode se utilizará ao invés de fourD_arg1
 SOAP DECLARATION($1;Is longint;SOAP input;"zipcode")
```

#### Exemplo 2 

Este exemplo é utilizado para recuperar um array de códigos postais na forma de inteiros longos: 

```4d
  //No método COMPILER_WEB
 ARRAY LONGINT(codes;0)
 
  //No método do serviço Web
 SOAP DECLARATION(codes;LongInt array;SOAP input;"in_codes")
```

#### Exemplo 3 

Este exemplo se utiliza para referenciar dois valores devolvidos sem especificar um nome de argumento: 

```4d
 SOAP DECLARATION(ret1;Is longint;SOAP output)
 SOAP DECLARATION(ret2;Is longint;SOAP output)
```

#### Exemplo 4 

Este exemplo permite ao servidor 4D SOAP devolver um argumento de um tamanho maior a 32 KB: 

```4d
 var $0 : Blob
 SOAP DECLARATION($0;Is text;SOAP output)
```

  
Note o tipo Is Text (e não Is BLOB). Isso permite que o argumento seja processado corretamente.

#### Exemplo 5 

Este exemplo illustra os resultados dos diferentes tipos de declarações: 

```4d
 ALL RECORDS([Contatos])
 
  //Construção de uma estrutura XML da seleção de contatos e armazenar o XML em um BLOB
 var ws_vx_xmlBlob : Blob
 obterContatosXML(->ws_vx_xmlBlob)
  //Recuperar a estrutura XML em uma váriavel de tipo texto
 var ws_vt_xml : Text
 ws_vt_xml:=BLOB to text(ws_vx_xmlBlob;UTF8 text without length)
  //Recuperar uma referência DOM a estrutura XML
 var ws_vt_xmlRef : Text
 ws_vt_xmlRef:=DOM Parse XML variable(ws_vt_xml)
 
  //Testa as diferentes declarações
 SOAP DECLARATION(ws_vx_xmlBlob;Is BLOB;SOAP output;"contactListsX")
  //O XML se converte em Base64 por 4D
 
 SOAP DECLARATION(ws_vt_xml;Is text;SOAP output;"contactListsText")
  //O XML se converte em texto por 4D (< > become entities)
 
 SOAP DECLARATION(ws_vt_xml;Is XML;SOAP output;"xmlContacts")
  //O XML se passa a texto XML
 
 SOAP DECLARATION(ws_vx_xmlBlob;Is XML;SOAP output;"blobContacts")
  //O XML se passa a um blob XML
 
 SOAP DECLARATION(ws_vt_xmlRef;Is DOM reference;SOAP output;"contactByRef")
  //O XML se passa como una referência
```

#### Ver também 

[Is data file locked](is-data-file-locked.md)  
[SOAP get info](soap-get-info.md)  
[SOAP SEND FAULT](soap-send-fault.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 782 |
| Thread-seguro | &check; |


