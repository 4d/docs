---
id: sax-add-xml-cdata
title: SAX ADD XML CDATA
slug: /commands/sax-add-xml-cdata
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML CDATA.Syntax-->**SAX ADD XML CDATA** ( *documento* ; *dados* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML CDATA.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| dados | Blob, Text | &#8594;  | Texto ou BLOB a inserir no documento entre etiquetas CData |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX ADD XML CDATA.Summary-->O comando SAX ADD XML CDATA adiciona no documento XML referenciado por *documento*, os dados de tipo texto ou BLOB.<!-- END REF--> Estes dados serão emoldurados automaticamente com as etiquetas <!\[CDATA\[ e \]\]>  

O texto incluído em uma seção CData é ignorado pelo intérprete XML.  
  
Se desejar codificar os conteúdos de dados, deve utilizar o comando [BASE64 ENCODE](base64-encode.md). Neste caso, deve passar um BLOB em *dados*.  
  
Para que este comando funcione corretamente, um elemento deve estar aberto. Do contrário, um erro é gerado.

#### Exemplo 

Se quiser inserir as seguintes linhas em seu documento XML: 

```XML
function matchwo(a,b)
{
if (a < b && a < 0) then
      {
      return 1
      }
else
      {
      return 0
      }
}
```

Para fazer isso, necessita executar o seguinte código:

```4d
 var vtMitexto : Text
 ... // coloque aqui o texto na variável vtMeutexto
 SAX ADD XML CDATAL($DocRef;vtMeutexto)
```

O resultado será:

```XML
<![CDATA[
function matchwo(a,b)
{
if (a < b && a < 0) then
   {
   return 1
   }
else
   {
   return 0
   }
}
]]>
```

#### Variáveis e conjuntos do sistema 

Se ou comando tiver sido executado corretamente, a variável sistema Ok assume ou valor 1\. Se ocorrer um erro, assume ou valor 0.

#### Ver também 

[SAX GET XML CDATA](sax-get-xml-cdata.md)  