---
id: dom-create-xml-element
title: DOM Create XML element
slug: /commands/dom-create-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element.Syntax-->**DOM Create XML element** ( *refElemento* ; *xRota* {; *nomeAtrib* ; *valorAtrib*} {; *nomeAtrib2* ; *valorAtrib2* ; ... ; *nomeAtribN* ; *valorAtribN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| refElemento | Text | &#8594;  | Referência do elemento Root XMLK |
| xRota | Text | &#8594;  | Caminho xRota do elemento XML a ser criado |
| nomeAtrib | Text | &#8594;  | Atributo a estabelecer |
| valorAtrib | Text, Boolean, Integer, Real, Time, Date | &#8594;  | Novo valor de atributo |
| Resultado | Text | &#8592; | Referência do elemento XML criado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Create XML element.Summary-->O comando DOM Create XML element permite criar um novo elemento no elemento XML *refElemento* na localização definida pelo parâmetro xRota e lhe adicionar atributos se é necessário.<!-- END REF-->

Passe em *refElemento* a referência do elemento raiz (criado, por exemplo com a ajuda do comando [DOM Create XML Ref](dom-create-xml-ref.md)).  
  
Em *xRota*, passe a rota de acesso do elemento a criar em notação XPath (para saber mais veja a seção \[#title id="733" anchor="4967352"/\] ). São admitidas as expressões de rota abaixo:  
  
| Expressão      | Ação                                                  |
| -------------- | ----------------------------------------------------- |
| /              | Determina o nodo raiz (rota absoluta)                 |
| para\[1\]      | Determina o primerro filho "para" do nodo de contexto |
| para\[last()\] | Determina o último filho "para" do nodo de contexto   |
  
  
**Nota de compatibilidad**e: a partir da v18 R3, a implementação de XPath em 4D é mais compatível. Por razões de compatibilidade, a implementação não padrão anterior se mantém de forma pré-determinada nos bancos de dados convertidos. Se quiser se beneficiar das funcionalidades extendidas em seus bancos de dados convertidos, deve selecionar a opção de compatibilidade Utilizar XPath normal de *Página Compatibilidade*. 

É possível passar diretamente em *xRota* um nome de elemento simples com o objetivo de criar um subelemento a partir do elemento atual (ver o exemplo 3).

Se os elementos da rota de acesso não existirem, são criados. Se já existirem os elementos de rota, um novo nodo é agregado.

**Nota**: Se você definiu um ou mais espaços de nome (namespaces) para a árvore designada por *refElemento* (ver o comando [DOM Create XML Ref](dom-create-xml-ref.md) ), deve prefixar o parâmetro xRota do nome de espaço a utilizar (por exemplo, “MeuNomeEspaço:MeuElemento”).  
  
Pode passar nos parâmetros opcionais *nomAtrib e valorAtrib* um par atributo/valor (em forma de variáveis, campos ou valores literais). Pode passar tantos pares quantos queira.  
  
O parâmetro *valorAtrib* pode ser de tipo texto ou de outro tipo (Booleano, inteiro, real, hora ou data). Se passar um valor de um tipo diferente ao tipo texto, 4D cuida da conversão para texto, de acordo aos seguintes princípios:

| **Tipo** | **Exemplo do valor convertido**            |
| -------- | ------------------------------------------ |
| Boolean  | "true" ou "false"                          |
| Inteiro  | "123456"                                   |
| Real     | "12.34" (o separador decimal é sempre ".") |
| Data     | "2006-12-04T00:00:00Z" (norma RFC 3339)    |
| Hora     | "5233" (número de segundos)                |

O comando retorna como resultado a referência XML do elemento criado.

#### Exemplo 1 

se quisermos criar o elemento abaixo: 

```RAW
                                      
```

Para fazer isso, simplesmente escrevemos:

```4d
 var vRootRef;vElemRef : Text
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vElemRef:=DOM Create XML element(vRootRef;vxPath)
```

#### Exemplo 2 

Se quisermos criar o elemento abaixo (contém os atributos): \[#codeXML\]<?xml version="1.0" encoding="UTF-8" standalone="no" ?>  
<RootElement>  
<Elem1>  
<Elem2>  
<Elem3 Font=Verdana Size=10> </Elem3>  
<Elem3 Font=Verdana Size=8> </Elem3>  
</Elem2>  
</Elem1>  
</RootElement>\[#/codeRAW\]

Para fazer isso, simplesmente ecrevemos:

```4d
 var vRootRef;vElemRef : Text
 var $aAttrName1;$aAttrName2;$aAttrVal1;$aAttrVal2;$aAttrVal3 : Text

$aAttrName1:="Font"
 $aAttrName2:="Size"
 $aAttrVal1:="Verdana"
 $aAttrVal2:="10"
 $aAttrVal3:="8"
 
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal2)
 vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal3)


```

Se quiser inserir um elemento depois, pode escrever:

```4d
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vElemRef:=DOM Create XML element(vRootRef;vxPath;"Font";"Arial")
```

Temos então:

```RAW
                                                
```

#### Exemplo 3 

Queremos criar e exportar a seguinte estrutura: 

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<Root>
   <Elem1>Olá</Elem1>
</Root>
```

Queremos utilizar a sintaxe baseada em um nome de elemento simples. Para fazer isso, simplesmente escrevemos:

```4d
 var $root : Text
 var $ref1 : Text
 
 $root:=DOM Create XML Ref("Raiz")
 $ref1:=DOM Create XML element($root;"Elem1")
 DOM SET XML ELEMENT VALUE($ref1;"Olá")
 DOM EXPORT TO FILE($root;"meudoc.xml")
 DOM CLOSE XML($root)
```

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK assume o valor 1\. Do contrário, assume o valor 0 e um erro é gerado.

#### Gestão de erros 

Um erro é gerado quando:

* A referência do elemento raiz não for válida.
* O nome do elemento a ser criado for inválido (por exemplo, se começar por um número).

#### Ver também 

[DOM Create XML element arrays](dom-create-xml-element-arrays.md)  
[DOM Get XML element](dom-get-xml-element.md)  
[DOM REMOVE XML ELEMENT](dom-remove-xml-element.md)  