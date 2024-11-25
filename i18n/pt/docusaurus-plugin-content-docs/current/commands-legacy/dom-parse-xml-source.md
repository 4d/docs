---
id: dom-parse-xml-source
title: DOM Parse XML source
slug: /commands/dom-parse-xml-source
displayed_sidebar: docs
---

<!--REF #_command_.DOM Parse XML source.Syntax-->**DOM Parse XML source** ( *documento* {; *validaçao* {; dtd|schmea}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Parse XML source.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Rota documentos |
| validaçao | Boolean | &#8594;  | True = Validação; False = sem validação |
| dtd&#124;schmea | Text | &#8594;  | Localização do schema DTD ou XML |
| Resultado | Text | &#8592; | Referência do elemento XML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Parse XML source.Summary-->O comando DOM Parse XML source analisa um documento que contém uma estrutura XML e retorna uma referência para este documento.<!-- END REF--> O comando pode validar ou não o documento através de uma DTD ou de um esquema XML (documento XSD, XML Schema Definitiom).  
  
O documento pode estar no disco ou em Internet/Intranet.  
  
**Nota:** A execução do comando **DOM Parse XML source** é síncrona.  
  
No parâmetro *documento* pode passar:  

* Uma rota de acesso completa padrão (do tipo C:\\\\Pasta\\\\Arquivo\\\\... em Windows e MacintoshHD:Pasta:Arquivo em Mac OS),
* Ou uma rota Unix em Mac OS (a qual deve começar por /).
* Ou uma rota red de tipo http://www.site.com/Arquivo ou ftp://publico.ftp.com...
O parâmetro booleano *validaçao* permite indicar se validar ou não a estrutura.  
* Se validação for igual a True, a estrutura se validará. Neste caso, o analisador tentará validar a estrutura XML do documento baseado na referência DTD ou o esquema XML incluída no documento, ou através da DTD ou o esquema XML designado pelo terceiro parâmetro, se for passada.
* Se validação for igual a False, a estrutura não se validará.
Se passar True em *validaçao* e omitir o terceiro parâmetro, o comando tentará validar a estrutura XML através de uma referência DTD ou XSD que se encontra na estrutura mesma. A validação pode ser indireta: se a estrutura contiver uma referência a um arquivo DTD que contenha uma referência a um arquivo XSD, o comando tentará realizar as duas validações.  

O terceiro parâmetro permite designar uma DTD específica ou um esquema XML para a análise do documento. Se utiliza este parâmetro, o comando não considera a DTD referenciada no documento XML.  
  
**Validação por DTD**  
  
Há duas formas de especificar uma DTD:

* Como uma referência. Para fazê-lo, passe a rota de acesso completa da nova DTD (extensão “dtd”) no parâmetro dtd. Se o documento indicado não contiver uma DTD válida, o parâmetro *dtd* é ignorado e um erro é gerado.
* Diretamente em um texto. Neste caso, se os conteúdos do parâmetro começam por “<?xml”, 4D considerará que essa é a DTD; do contrário, 4D o considerará como uma rota de acesso.
**Validação por esquema** 

Para validar o documento através de um esquema XML, apenas necessita passar no terceiro parâmetro um arquivo ou uma URL de extensão “xsd” ao invés de um “dtd”. A validação por esquema XML é considerada mais flexível e poderosa que a validação por DTD. A linguagem dos documentos XSD está baseada na linguagem XML. Em especial, os esquemas XML são compatíveis com tipos de dados. Para maior informação sobre os esquemas XML, por favor consulte a seguinte direção: *http://www.w3.org/XML/Schema*.  
  
Se a validação não puder ser realizada (não DTD ou XSD, URL incorreto, etc.), um erro é gerado. A variável sistema Erro indica o número do erro. Pode interceptar este erro utilizando um método instalado pelo comando [ON ERR CALL](on-err-call.md).  
  
O comando retorna uma cadeia de 16 caracteres (RefElement) constituindo a referência em memória da estrutura virtual do documento. Esta referência deve ser utilizada com os outros comandos de análise XML.  
  
**Importante**: Quando não precisar mais dele, lembre de chamar ao comando [DOM CLOSE XML](dom-close-xml.md) com esta referência com o objetivo de liberar memória.

#### Exemplo 1 

Abertura sem validação de um documento XML em disco: 

```4d
 $xml_Ref_Estruct:=DOM Parse XML source("C:\\importar.xml")
```

#### Exemplo 2 

Abertura sem validação de um documento XML localizado junto ao arquivo de estrutura do banco: 

```4d
 $xml_Ref_Estruct:=DOM Parse XML source("importar.xml")
```

#### Exemplo 3 

Abertura de um documento XML localizado no disco e validação utilizando um DTD que fica no disco: 

```4d
 $xml_Ref_Estruct:=DOM Parse XML source("C:\\importar.xml";True;"C:\\importar_dtd.xml")
```

#### Exemplo 4 

Abertura sem validação de um documento XML localizado em uma URL específica:  

```4d
 $xml_Ref_Estruct:=DOM Parse XML source("http://www.4DHispano.com/xml/importar.xml")
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM Parse XML variable](dom-parse-xml-variable.md)  