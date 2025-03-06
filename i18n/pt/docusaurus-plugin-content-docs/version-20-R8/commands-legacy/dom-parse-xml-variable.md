---
id: dom-parse-xml-variable
title: DOM Parse XML variable
slug: /commands/dom-parse-xml-variable
displayed_sidebar: docs
---

<!--REF #_command_.DOM Parse XML variable.Syntax-->**DOM Parse XML variable** ( *variável* {; *validaçao* {; dtd|schema}} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Parse XML variable.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| variável | Blob, Text | &#8594;  | Nome da variavel |
| validaçao | Boolean | &#8594;  | True = validação do DTD; False = sem validação |
| dtd&#124;schema | Text | &#8594;  | Localização do DTD ou do schema XML |
| Resultado | Text | &#8592; | Referência do elemento XML |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Parse XML variable.Summary-->O comando DOM Parse XML variable analisa uma variável de tipo BLOB ou Texto que contenha uma estrutura XML e retorna uma referência para esta variável.<!-- END REF--> O comando pode validar ou não a estrutura através de um DTD ou de um esquema XML (XML Schema Definition (XSD) document).  
  
Passe no parâmetro variável o nome da *variavel* BLOB ou o Texto que contenha o objeto XML.  
  
O parâmetro booleano *validaçao* permite indicar se validar ou não a estrutura utilizando a DTD.  

* Se *validaçao* for igual a True, a estrutura se validará. Neste caso, o analisador tentará validar a estrutura XML do documento baseado na referência DTD ou XSD incluída no documento, ou através a DTD ou o esquema XML designado pelo terceiro parâmetro quando for passado.
* Se *validaçao* for igual a False, a estrutura não se validará.
Se passar True em *validaçao* e omitir o terceiro parâmetro, o comando tentará validar a estrutura XML através de uma referência DTD ou XSD que se encontre na estrutura mesma. A validação pode ser indireta: se a estrutura contiver uma referência a um arquivo DTD que contenha a referência a um arquivo XSD, o comando tentará realizar ambas validações.   
  
O terceiro parâmetro dtd, permite indicar uma DTD específica ou um esquema XML para a análise do documento. Se utilizar este parâmetro, o comando não considerará a DTD referenciada no documento XML.  
  
**Validação por DTD**  
  
Há duas formas de especificar um DTD:  
* como uma referência. Para fazer isto, passe a rota de acesso completa da nova DTD (extensão "dtd) no parâmetro *dtd*. Se o documento indicado não contiver uma DTD válida, o parâmetro *dtd* é ignorado e um erro gerado.
* diretamente em um texto. Neste caso, se o conteúdo do parâmetro começar por “<?xml”, 4D o considerará como a DTD; do contrário, 4D o considerará como uma rota de acesso.
**Validação por esquema**  
  
Para validar o documento através de um esquema XML, apenas deve passar um arquivo ou URL com uma extensão "xsd" ao invés de uma "dtd" no terceiro parâmetro. A validação por esquema XML é considerada mais flexível e poderosa que a validação por DTD. A linguagem de documentos XSD está baseada em linguagem XML. Os esquemas XML são compatíveis particularmente tipos de dados. Para maior informação sobre os esquemas XML, consulte o seguinte endereço: http://www.w3.org/XML/Schema.  
  
Se não puder realizar a validação (não DTD ou XSD, URL incorreto, etc.), um erro é gerado. A variável sistema Erro indica o número do erro. Pode interceptar este erro com a ajuda de um método instalado pelo comando [ON ERR CALL](on-err-call.md)  
  
O comando retorna uma cadeia de caracteres (RefElement) que constitui a referência em memória da estrutura virtual da variável. Esta referência deve ser utilizada com outros comandos de análise XML.  

**Importante**: quando não tiver mais necessidade dele, lembre de chamar o comando [DOM CLOSE XML](dom-close-xml.md) com essa referência para liberar memória.

#### Exemplo 1 

Abertura sem validação de um objeto XML localizado em uma variável Texto 4D: 

```4d
 var myTextVar : Text
 var vDoc : Time
 var $xml_Estruct_Ref : Text
 
 vDoc:=Open document("Document.xml")
 If(OK=1)
    RECEIVE PACKET(vDoc;myTextVar;32000)
    CLOSE DOCUMENT(vDoc)
    $xml_Estruct_Ref:=DOM Parse XML variable(myTextVar)
 End if
```

#### Exemplo 2 

Abertura sem validação de um documento XML localizado em um BLOB 4D: 

```4d
 var myBlobVar : Blob
 var $xml_Estruct_Ref : Text
 
 DOCUMENT TO BLOB(“c:\\importar.xml”;myBlobVar)
 $xml_Estruct_Ref:=DOM Parse XML variable(myBlobVar)
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM Parse XML source](dom-parse-xml-source.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 720 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |


