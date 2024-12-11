---
id: dom-find-xml-element-by-id
title: DOM Find XML element by ID
slug: /commands/dom-find-xml-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element by ID.Syntax-->**DOM Find XML element by ID** ( *refElemento* ; *id* ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element by ID.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| id | Text | &#8594;  | Valor do atributo ID do elemento a procurar |
| Resultado | Text | &#8592; | Referência do elemento encontrado (se aplicável) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Find XML element by ID.Summary-->O comando DOM Find XML element by ID busca, no interior de um documento XML, o elemento cujo atributo id seja igual ao valor passado no parâmetro *id*.<!-- END REF-->  

Passe em *refElemento* a referência de um elemento do documento XML no qual queira realizar a pesquisa. Pode passar a referência do elemento raiz ou de outro elemento, a pesquisa não considera a posição de *refElemento* e se realiza sempre na totalidade do documento.  
  
O comando retorna como resultado a referência XML do elemento encontrado.  
  
**Aviso**: Em XML, o atributo id associa um identificador único a cada elemento do documento. O valor do atributo id deve ser um nome XML válido e deve ser único no documento XML (restrição de validez). Para que o comando DOM Find XML element by ID funcione corretamente, esta restrição deve ser respeitada; do contrário o resultado será aleatório (o comando retorna a referência ao primeiro elemento encontrado no documento).

#### Ver também 

[DOM Find XML element](dom-find-xml-element.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1010 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


