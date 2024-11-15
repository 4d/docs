---
id: dom-create-xml-ref
title: DOM Create XML Ref
slug: /commands/dom-create-xml-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML Ref.Syntax-->**DOM Create XML Ref** ( *raiz* {; *nomeEspaço*} {; *nSNome* ; *nSValor*} {; *nSNome2* ; *nSValor2* ; ... ; *nSNomeN* ; *nSValorN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML Ref.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| raiz | Text | &#8594;  | Nome do elemento raiz |
| nomeEspaço | Text | &#8594;  | Valor do espaço de nome (namespace) |
| nSNome | Text | &#8594;  | Nome do Namespace |
| nSValor | Text | &#8594;  | Valor do Namespace |
| Resultado | Text | &#8592; | Raiz XML do elemento referência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DOM Create XML Ref.Summary-->O comando DOM Create XML Ref cria uma árvore XML vazia na memória e retorna sua referência.<!-- END REF-->  

Passe no parâmetro *raiz* o nome do elemento raiz da árvore XML.  
  
Passe no parâmetro opcional *nomeEspaço* a declaração do valor do espaço de nome (namespace) do árvore (por exemplo “http://www.4dhispano.com”).  
  
Note que é possível pôr um prefixo ao parâmetro raiz com o nome do espaço seguido de dois pontos: (por exemplo “MeuNomeEspaço:MinhaRaiz”). Neste caso, o parâmetro *nomeEspaço* especificando o valor do espaço de nome é obrigatório.  
  
**Nota**: O espaço de nome é uma cadeia que permite garantir a unicidade dos nomes das variáveis XML. Em geral, são utilizadas uma URL como http://www.meuwebsite.com/minhaurl. A URL não necessariamente tem que ser válida, mas tem que ser única.  
  
Pode declarar um ou vários espaços de nome adicionais na árvore XML gerada, com a ajuda de pares *nSNome/nSValor*. Pode passar tantos pares nome/valor de espaço de nome quantos queira.  
  
**Importante**: Lembre de chamar ao comando [DOM CLOSE XML](dom-close-xml.md) com o objetivo de liberar memória quando termine de utilizar a árvore XML.

#### Exemplo 1 

Criação de uma árvore XML simples: 

```4d
 var vRefElem : Text
 vRefElem:=DOM Create XML Ref("MiRaiz")
```

Este código produz o seguinte resultado:

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?> 
<MiRaiz/>
```

#### Exemplo 2 

Criação de uma árvore XML com um espaço de nome: 

```4d
 var vRefElem : Text
 $Raiz:="MeuNomeEspaco:MinhaRaiz"
 $Nomeespaco:="http://www.4DHispano.com/tech/nomeespaco"
 vRefElem:=DOM Create XML Ref($Raiz;$Nomeespaco)
```

Este código da o seguinte resultado:

```XML
<Meunomeespaco:Minharaiz xmlns:Meunomeespaco="http://www.4DHispano.com/tech/nomeespaco"/>
```

#### Exemplo 3 

Criação de uma árvore XML com vários espaços de nome: 

```4d
 var vRefElem : Text
 var 80;$aNSNom1;$aNSNom2;$aNSValor1;$aNSValor2 : Text
 $Raiz:="MeuNomeEspaco:MinhaRaiz"
 $Nomeespaco:="http://www.4DHispano.com/tech/nomeespaco"
 $aNSNom1:="NSNom1"
 $aNSNom2:="NSNom2"
 $aNSValor1:="http://www.4DHispano.com/Prod/nomeespaco"
 $aNSValor2:="http://www.4DHispano.com/Mkt/nomeespaco"
 vRefElem:=DOM Create XML Ref($Raiz;$Nomeespaco;$aNSNom1;$aNSValor1;$aNSNom2;$aNSValor2)
```

Este código produz o seguinte resultado:

```XML
<MeuNomeEspaco:MinhaRaiz xmlns:MeuNomeEspaco="http://www.4DHispano.com/tech/nomeEspaco"
NSNom1="http://www.4DHispano.com/Prod/nomeespaco"
NSNom2="http://www.4DHispano.com/Mkt/nomeespaco"/>
```

#### Variáveis e conjuntos do sistema 

Se o comando foi executado corretamente, a variável sistema Ok assume o valor 1\. Do contrário, assume o valor 0 e um erro é gerado.

#### Ver também 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM SET XML DECLARATION](dom-set-xml-declaration.md)  