---
id: sax-get-xml-entity
title: SAX GET XML ENTITY
slug: /commands/sax-get-xml-entity
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ENTITY.Syntax-->**SAX GET XML ENTITY** ( *documento* ; *nome* ; *valor* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ENTITY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| nome | Text | &#8592; | Nome da entidade |
| valor | Text | &#8592; | Entity value |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX GET XML ENTITY.Summary-->O comando SAX GET XML ENTITY permite recuperar o nome e valor de uma entidade XML presente no documento XML referenciado por *documento*.<!-- END REF--> Este comando deve ser chamado com o evento XML Entity SAX. Para maior informação sobre os eventos SAX, consulte a descrição do comando [SAX Get XML node](sax-get-xml-node.md).

#### Exemplo 

No código XML abaixo: 

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
   <!ELEMENT body (element*)>
   <!ELEMENT element (#PCDATA)>
   <!ENTITY nome "Substituto">
]>
<body>
   <element>Entidade atualizada por &nome;</element>
</body>
```

A instrução devolverá “nome” em *vNom* e “Substituto” em *vValor*. 

```4d
 SAX GET XML ENTITY(DocRef;vNom;vValor)
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Do contrário assume o valor 0 e se gera um erro.  

#### Ver também 

[SAX Get XML node](sax-get-xml-node.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 879 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


