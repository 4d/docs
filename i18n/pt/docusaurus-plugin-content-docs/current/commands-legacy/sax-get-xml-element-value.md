---
id: sax-get-xml-element-value
title: SAX GET XML ELEMENT VALUE
slug: /commands/sax-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Syntax-->**SAX GET XML ELEMENT VALUE** ( *documento* ; *valor* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| valor | Text, Blob | &#8592; | Valor do elemento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Summary-->O comando SAX GET XML ELEMENT VALUE permite recuperar o valor de um elemento XML existente no documento XML referenciado por *documento*.<!-- END REF--> Este comando deve ser chamado no contexto de um evento XML DATA SAX. Para maior informação sobre os eventos SAX, consulte a descrição do comando [SAX Get XML node](sax-get-xml-node.md) .  

Passe no parâmetro valor uma variável de tipo Texto ou BLOB. Se passa um BLOB, o comando automaticamente tentará decodificá-lo em base64.

#### Exemplo 

O código XML abaixo: 

```XML
<ElementoRaiz>
   <Filho Att1="111" Att2="222" Att3="333">MyText</Filho>
</ElementoRaiz>
```

A instrução abaixo “MeuText” em *vValor*:

```4d
 SAX GET XML ELEMENT VALUE(DocRef;vValor)
```

#### Variáveis e conjuntos do sistema 

Se o comando se executa corretamente, a variável sistema OK toma o valor 1\. Caso contrário toma o valor 0 e se gera um erro. 

#### Ver também 

[SAX ADD XML ELEMENT VALUE](sax-add-xml-element-value.md)  
[SAX Get XML node](sax-get-xml-node.md)  