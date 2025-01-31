---
id: sax-add-xml-element-value
title: SAX ADD XML ELEMENT VALUE
slug: /commands/sax-add-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Syntax-->**SAX ADD XML ELEMENT VALUE** ( *documento* ; *dados* {; *} )<!-- END REF-->
<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| dados | Text, Variable | &#8594;  | Texto ou variáveis a inserir no documento |
| * | Operador | &#8594;  | Se passado: criptografa os caracteres especiais; se omitido: não codifica. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX ADD XML ELEMENT VALUE.Summary-->O comando SAX ADD XML ELEMENT VALUE adiciona diretamente no documento XML referenciado por *document*o os dados sem convertê-los.<!-- END REF--> Este comando é equivalente, por exemplo, a inserir um arquivo anexado em um e-mail.

Em *dados*, pode passar diretamente uma cadeia de caracteres, ou uma variável 4D. O conteúdo da variável se converterá em texto antes de ser incluído no documento XML. Se *dado*s for avaliado como *undefined*, 4D usa uma string vazia. Se quiser codificar os conteúdos de dados, pode usar o comando [BASE64 ENCODE](base64-encode.md). Neste caso, precisa pasar um BLOB em *dados*.

Se desejar codificar o conteúdo de dados, deve utilizar o comando [BASE64 ENCODE](base64-encode.md). Neste caso deve passar um BLOB em *dados*.  
  
Por padrão, o comando codifica os caracteres especiais (< > ” ’...) conteúdos nos parâmetros *dados* a menos que você tenha desativado este mecanismo para o processo atual utilizando o comando [XML SET OPTIONS](xml-set-options.md) passando o valor XML Raw data à opção XML String encoding. Por exemplo:  

```4d
 XML SET OPTIONS($docRef;XML string encoding;XML raw data)
```

  
Neste contexto, para forçar a codificação de parâmetros especiais durante a chamada de **SAX ADD XML ELEMENT VALUE**, deve passar o parâmetro opcional *\**.   
  
Para que este comando funcione corretamente, deve estar aberto um elemento. Do contrário, se gerará um erro.

#### Exemplo 

Este exemplo insere o arquivo *whitepaper.pdf* no elemento XML aberto: 

```4d
 var vBMeuBLOB : Blob
 DOCUMENT TO BLOB("c:\\livrobranco.pdf";vBMeuBLOB)
 SAX ADD XML ELEMENT VALUE($DocRef;vBMeuBLOB)
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[SAX GET XML ELEMENT VALUE](sax-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 855 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


