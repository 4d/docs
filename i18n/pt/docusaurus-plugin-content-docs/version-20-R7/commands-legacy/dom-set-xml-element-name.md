---
id: dom-set-xml-element-name
title: DOM SET XML ELEMENT NAME
slug: /commands/dom-set-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT NAME.Syntax-->**DOM SET XML ELEMENT NAME** ( *refElemento* ; *nomeElemento* )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT NAME.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| nomeElemento | Text | &#8594;  | Novo nome do elemento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM SET XML ELEMENT NAME.Summary-->O comando DOM SET XML ELEMENT NAME permite modificar o nome do elemento designado por *refElemento*.<!-- END REF-->  

Passe em *refElemento* a referência do elemento a renomear e em *nomeElemento* o novo nome do elemento. O comando também cuida de atualizar as etiquetas de abertura e fechamento do elemento.

#### Exemplo 

No recurso abaixo XML: 

```XML
<Book>
   <Title>O melhor vendedor </Title>
</Book>
```

Se o código abaixo for executado, suponndo que *vRefElem* contenha a referência do elemento ‘Book’:

```4d
 DOM SET XML ELEMENT NAME(vRefElem;"MelhorVendedor")
```

Obtemos:

```XML
<MelhorVendedor>
   <Title>O melhor vendedor</Title>
</MelhorVendedor>
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0.

#### Gestão de erros 

Um erro é gerado quando: 

* A referência do elemento não for válida
* O novo nome do elemento a ser criado não for válido (por exemplo, se começa com um número).

#### Ver também 

[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  