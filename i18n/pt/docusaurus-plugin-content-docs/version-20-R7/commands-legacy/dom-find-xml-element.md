---
id: dom-find-xml-element
title: DOM Find XML element
slug: /commands/dom-find-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element.Syntax-->**DOM Find XML element** ( *refElemento* ; *xPath* {; *arrRefElementos*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência de elemento XML |
| xPath | Text | &#8594;  | Rota XPath do elemento a procurar |
| arrRefElementos | Text array | &#8592; | Lista de referências de elementos encontradas (se aplicável) |
| Resultado | Text | &#8592; | Referência do elemento encontrado (se aplicável) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Find XML element.Summary-->O comando DOM Find XML element permite buscar os elementos XML específicos em uma estrutura XML.<!-- END REF--> A pesquisa começa pelo elemento determinado pelo parâmetro *refElemento*.

O nó XML a buscar está definido pelo parâmetro *xPath*, expresso em notação *XPath* (para saber mais ver a seção *Uso da notação XPathn (DOM)*).). Podem ser usadas as expressões de rota abaixo

| **Expressão**                   | **Ação**                                                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| *nodename*                      | Seleciona todos os nodos filhos de nodo de contexto com o nome "*nodename*"                                                     |
| /                               | Seleciona os nodos do nodo raíz (rota absoluta)                                                                                 |
| //                              | Seleciona os nodos no documento do nodo atual que coincidem com a seleção sem importar onde são encontrados                     |
| @                               | Seleciona atributos                                                                                                             |
| .                               | Seleciona o nodo atual                                                                                                          |
| ..                              | Seleciona o pai do nodo atual                                                                                                   |
| \*                              | Seleciona todos os elementos filhos do nodo de contexto                                                                         |
| @\*                             | Seleciona todos os atributos do nodo de contexto                                                                                |
| text()                          | Seleciona todos os atributos do nodo de contexto                                                                                |
| node()                          | Seleciona todos os filhos do nodo de contexto, sem importar o tipo de nodo                                                      |
| local-name()                    | Devolve uma string que representa o nome local do primeiro nodo de um conjunto de nodos dado                                    |
| para\[1\]                       | Seleciona o primeiro filho "para" do nodo de contexto                                                                           |
| para\[last()\]                  | Seleciona o último filho secundário do nodo de contexto                                                                         |
| chapter\[title="Introduction"\] | Seleciona os capítulos filhos de nodo de contexto que têm um ou mais filhos títulos com um valor de string igual a Introduction |
| chapter\[title\]                | Seleciona os capítulos filhos do nodo de contexto que tenham um ou mas filhos "títulos"                                         |
| para\[@type="warning"\]         | Seleciona todos os filhos "para" do nodo de contexto que tenham um atributo "type" com o valor "warning"                        |
| para\[@type="warning"\]\[5\]    | Seleciona o quinto filho secundario do nodo de contexto que tenha um atributo "type" com o valor "warning"                      |
| para\[5\]\[@type="warning"\]    | Seleciona o quinto filho secundario do nodo de contexto se esse filho tiver um atributo "type" com o valor "warning"            |
| //title \| //price              | Seleciona todos os elementos de título e preço no documento                                                                     |

**Nota de compatibilidade:** **a partir de v18 R3, a implementação XPath é mais compatível e permite a compatibilidade das expressões anteriores. Por razões de compatibilidade, a implementação não padrão anterior é mantidade de forma pré-determinada nos bancos de dados convertidos. Se quiser se beneficiar das funções estendidas em seus bancos de dados convertidos, deve selecionar a opção de compatibilidade *Utilizar XPath de Página Compatibilidade.* 

**Nota:** as pesquisas diferenciam entre maiúsculas e minúsculas.

O comando devolve a referência XML dos elementos encontrados. Quando passar o array de strings *arrRefElement*, o comando o preenche com a lista de referências XML encontradas. Neste caso, o comando devolve o primeiro elemento de array *arrRefElement* como resultado. Este parâmetro é útil quando existirem vários elementos com o mesmo nome no local especificado pelo parâmetro *xRuta*.

#### Exemplo 1 

Este exemplo permite buscar rapidamente um elemento XML e mostrar seu valor: 

```4d
 vEncontrado:=DOM Find XML element(vRefElem;"Items/Book[15]/Title")
 DOM GET XML ELEMENT VALUE(vEncontrado;valor)
 ALERT("O valor do elemento é: \""+valor+"\"")
```

A mesma pesquisa também pode ser realizada desta forma:

```4d
 vEncontrado:=DOM Find XML element(vElemRef;"Items/Book[15]")
 vEncontrado:=DOM Find XML element(vEncontrado;"Book/Title")
 DOM GET XML ELEMENT VALUE(vEncontrado;valor)
 ALERT("O valor do elemento é: \""+valor+"\"")
```

**Nota:** Como é mostrado no exemplo anterior, a rota XPath deve sempre começar pelo nome do elemento atual. Esta precisão é importante quando maneja rotas XPath relativas.

#### Exemplo 2 

Dada a seguinte estrutura XML: 

```RAW
         aaa      bbb      ccc   
```

O código abaixo permite recuperar a referência de cada elemento Elem2 no array arrEncontrados:

```4d
 vElemRef:=DOM Parse XML source("example.xml")
 ARRAY TEXT(arrAfound;0)
 vFound:=DOM Find XML element(vElemRef;"/Root/Elem1/Elem2";arrAfound)
```

#### Exemplo 3 

Se quiser selecionar todos os elementos "rect" com atributos "class" que contenham a string "bgcontainer":

```4d
 $node:=DOM Find XML element($root;" //rect[contains(@class,'bgcontainer')")
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor1\. Do contrário, assume o valor 0 e um erro é gerado.

#### Gestão de erros 

Um erro é gerado quando:

* O elemento de referência é inválido
* A rota xPath especificada é inválida.

#### Ver também 

[DOM Count XML elements](dom-count-xml-elements.md)  
[DOM Create XML element](dom-create-xml-element.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 864 |
| Thread-seguro | &check; |
| Modificar variáveis | OK, error |
| Proibido no servidor ||


