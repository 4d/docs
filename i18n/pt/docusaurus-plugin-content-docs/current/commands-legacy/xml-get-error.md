---
id: xml-get-error
title: XML GET ERROR
slug: /commands/xml-get-error
displayed_sidebar: docs
---

<!--REF #_command_.XML GET ERROR.Syntax-->**XML GET ERROR** ( *refElemento* ; *textoErro* {; *linha* {; *coluna*}} )<!-- END REF-->
<!--REF #_command_.XML GET ERROR.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| textoErro | Variable | &#8592; | Texto do erro |
| linha | Variable | &#8592; | Número de linha |
| coluna | Variable | &#8592; | Número de coluna |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.XML GET ERROR.Summary-->O comando XML GET ERROR retorna no parâmetro *textoErro* a descrição do erro encontrado durante o processo do elemento XML designado pelo parâmetro *refElement*.<!-- END REF--> A informação retornada é fornecida pela biblioteca Xerces.DLL.  

Os parâmetros opcionais *linha* e *coluna* indicam a localização do erro: eles recuperam respectivamente o número de linha e, nesta linha, a posição do primeiro caráctere da expressão na origem do erro.

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Ver também 

[DOM Get XML information](dom-get-xml-information.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 732 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


