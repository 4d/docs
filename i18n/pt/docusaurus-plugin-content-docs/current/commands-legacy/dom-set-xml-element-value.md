---
id: dom-set-xml-element-value
title: DOM SET XML ELEMENT VALUE
slug: /commands/dom-set-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Syntax-->**DOM SET XML ELEMENT VALUE** ( *refElemento* {; *xRota*}; *valorElemento* {; *} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT VALUE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| xRota | Text | &#8594;  | Rota do xRota do elemento XML |
| valorElemento | Text, Variable | &#8594;  | Novo valor do elemento |
| * | Operador | &#8594;  | Se passado: estabelece o valor em CDATA |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Summary-->O comando DOM SET XML ELEMENT VALUE lhe permite modificar o valor do elemento definido por *refElement*.<!-- END REF-->  
  
Se passar o parâmetro opcional *xRota*, você escolhe utilizar a notação XPath para indicar o elemento a ser modificado (veja a seção \[#title id="733" anchor="39692/\]). As expressôes de rota abaixo são compatíveis:

| **Expressão**  | **Ação**                                            |
| -------------- | --------------------------------------------------- |
| /              | Determina o nodo root the root node (rota absoluta) |
| para\[1\]      | Determina o primeiro "filho" do nodo contexto       |
| para\[last()\] | Determina o último "filho" do nodo contexto         |

Neste caso, deve passar a referência de elemento root XML em *elementoRef* e a rota XPath do elemento a ser modificado em *xPath*.

**Nota de Compatibilidade:* A partir de v18 R3, a implementação XPath em 4D tem maior conformidade. Por razões de compatibilidade, a implementação anterior não-padrão é mantida como normal em bancos de dados convertidos. Se quiser se beneficiar das propriedades estendidas de seus bancos de dados convertidos, precisa selecionar a opção de compatibilidade *Use standard XPath* de Página Compatibilidade.* 

  
Em *valorElemento*, passe uma cadeia ou uma variável (ou um campo) que contenha o novo valor do elemento especificado:

* Se passar uma cadeia, o valor se utilizará tal como na estrutura XML.
* Se passar uma variável ou um campo, 4D processará o valor, dependendo do tipo de *valorElemento*. Todos os tipos de dados podem ser utilizados, com exceção dos arrays, imagens e ponteiros. Se valorElemento for avaliado para *undefined*, 4D usa uma string vazia.

Quando for passado o parâmetro opcional asterisco (\*), indica que o valor do elemento deve ser definido na forma de CDATA. A forma especial CDATA permite escrever texto sem formato (ver exemplo 2).  
  
**Nota**: Se o elemento designado por *refElemento* for de tipo BLOB, é codificado automaticamente em base64\. Entretanto, o comando [DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md) realiza automaticamente a operação inversa.

##### Note about processing end-of-line characters 

Par conformité avec les règles de traitement XML, toutes les séquences de caractères de fin de ligne CR et CRLF sont converties en caractères LF.

Para conformidade com as regras XML, todas as sequências de caracteres de final de linha CR e CRLF são convertidas para caracteres LF.

#### Exemplo 1 

Na fonte XML abaixo: 

```XML
<Book>
   <Title>O melhor vendedor</Title>
</Book>
```

Se for executado o código abaixo, com *vRefElem* conterá a referência do elemento “Título”:

```4d
 DOM SET XML ELEMENT VALUE(vRefElem;"O Perdedor")
```

Obtemos:

```XML
<Book>
   <Title>O Perdedor</Title>
</Book>
```

#### Exemplo 2 

Na fonte XML abaixo: 

```XML
<Maths>
   <Postulate>1+2=3</Postulate>
</Maths>
```

Queremos escrever o texto “12<18” no elemento *<Postulate>*. Esta cadeia não pode ser escrita em XML porque o caractere “<” não é aceito. Este caractere deve ser transformado então em “<” ou deve ser utilizado a forma CDATA. Se *vElemRef* indica o nodo XML *<Postulate>*:

```4d
  // Forma normal
 DOM SET XML ELEMENT VALUE(vElemRef;"12<18")
```

Obtemos:

```XML
<Maths>
   <Postulate>12 < 18</Postulate>
</Maths>
```
  
  
```4d
  // CDATA form
 DOM SET XML ELEMENT VALUE(vElemRef;"12<18";*)
```

Obtemos:

```XML
<Maths>
   <Postulate><![CDATA[12 < 18]]></Postulate>
</Maths>
```

#### Variáveis e conjuntos do sistema 

Se o comando tiver sido executado corretamente, a variável sistema Ok assume o valor 1\. Se ocorrer um erro, assume o valor 0 e um erro é gerado (por exemplo, se a referência do elemento for inválida)

#### Ver também 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  