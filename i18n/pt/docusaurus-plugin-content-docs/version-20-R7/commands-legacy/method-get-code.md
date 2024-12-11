---
id: method-get-code
title: METHOD GET CODE
slug: /commands/method-get-code
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET CODE.Syntax-->**METHOD GET CODE** ( *rota* ; *codigo* {; *option*} {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET CODE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text, Text array | &#8594;  | Texto ou array de texto que contém uma ou vários caminhos de acesso |
| codigo | Text, Text array | &#8592; | Código dos métodos designados |
| option | Integer | &#8594;  | 0 ou omis = exportar simples (sem token), 1 = exportar com tokens |
| * | Operador | &#8594;  | Se passado = o comando é aplicado à base de dados de host quando se executa desde um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD GET CODE.Summary-->O comando **METHOD GET CODE** devolve no parâmetro *codigo*, o conteúdo dos métodos designados pelo parâmetro *rota*.<!-- END REF--> Este comando pode devolver o código de todos os tipos de métodos: métodos base, triggers, métodos projeto, métodos formulário e métodos objeto.  
  
Pode utilizar dois tipos de sintaxes, baseadas em arrays texto ou variáveis texto:  

```4d
 var tVpath : Text // variáveis texto
 var tVcode : Text
 METHOD GET CODE(tVpath;tVcode) // código de somente um método
```
  
  
```4d
 ARRAY TEXT(arrPaths;0) // arrays texto
 ARRAY TEXT(arrCodes;0)
 METHOD GET CODE(arrPaths;arrCodes) // códigos de vários métodos
```
  
  
Não podem ser combinados as duas sintaxes.  
  
Se passado um caminho de acesso não válida, o parâmetro *codigo* é deixado vazio e é gerado um erro.   
  
No texto do *codigo* gerado por este comando: 
* os nomes dos comandos são escritos em inglês, a não ser que se use uma versão francesa de 4D e tenha sido selecionada a preferência "Usar a linguagem francesa e parâmetros regionais de sistema" (ver [Is a list](is-a-list.md)). Quando utilizar o parâmetro *opção*, o código pode conter tokens da linguagem com o objetivo de que seja independente da linguagem de programação 4D e da versão  (ver mais adiante).
* Para aumentar a legibilidade do código, o texto é indentado com os caracteres de tabulação em função das estruturas de programação, da mesma forma que no editor de métodos.
* Uma linha é adicionada no cabeçalho do código gerado que contém os metadatos utilizados para a importação do código, por exemplo:  
```4d  
  // %attributes = {"lang":"fr","invisible":true,"folder":"Web3"}  
```  
    
    
Durante uma importação, esta linha não se importa, se utiliza para definir os atributos a aplicar (os atributos não especificados se reinicializam a seu valor como padrão). O atributo "lang" define a linguagem de exportação e impede uma importação em uma aplicação na linguagem diferente (neste caso, se gera um erro). O atributo "folder" contém o nome da pasta pai do método; não é mostrada quando o método não tem uma pasta pai.  
Podem ser definidos atributos adicionais. Para saber mais, consulte o comando [METHOD SET ATTRIBUTES](method-set-attributes.md).

O parâmetro *opção* lhe permite seleccionar o modo de exportação do código com respeito aos elementos da linguagem tokenizados dos métodos: 

* Se passar 0 ou omitir o parâmetro *opção*, o código do método se exporta sem tokens, ou seja, da mesma forma que se mostra no editor de métodos.
* Se passar 1 ou a constante Code with tokens, o código do método se exporta com tokens, ou seja, os elementos tokenizados são seguidos por sua referência interna no conteúdo do *código* exportado. Por exemplo, a expressão"[String](string.md)(a)" se exporta "[String](string.md):C10(a)", donde "C10" é a referência interna do comando [String](string.md).

Os elementos tokenizados da linguagem incluem:

* os comandos e constantes 4D,
* os nomes de tabelas e campos,
* os comandos de plug-ins 4D.

O código exportado com seus tokens faz com que seja independente da linguagem de programação 4D, e também de qualquer mudança de nome poesterior dos elmentos da linguagem. Graças aos tokens, o código proporcionado em forma de texto sempre será interpretado corretamente por 4D, por exemplo usando o comando [METHOD SET CODE](method-set-code.md) ou por copiar/colar. Para saber mais sobre a sintaxe tokens tokens 4D, consulte *Usar tokens em fórmulas*.

Se o comando for executado desde um componente, se aplica como padrão para os métodos do componente. Se passar o parâmetro *\**, acessa aos métodos do banco de dados local.

#### Exemplo 1 

Consulte o exemplo do comando [METHOD SET CODE](method-set-code.md).

#### Exemplo 2 

Este exemplo ilustra o efeito de parâmetro *opção*.  
  
Se quiser exportar o método abaixo "simple\_init" :

```4d
 Case of

:(FORM Event=On Load)
       ALL RECORDS([Customer])
 End case


```
  
  
Se executar o código abaixo: 

```4d
 var $path : Text
 var $contents : Text
 $code:=METHOD Get path(Path project method;"simple_init")
 METHOD GET CODE($path;$contents;0) //sem tokens
 TEXT TO DOCUMENT("simple_init.txt";$contents)
```

O documento resultante conterá:

```RAW
  //%attributes = {"lang":"en"} comentario adicionado e reservado por 4DCase of    : (Form event=On Load)        ALL RECORDS([Customer])End case
```

Se executar o código abaixo:

```4d
 var $path : Text
 var $contents : Text
 $code:=METHOD Get path(Path project method;"simple_init")
 METHOD GET CODE($path;$contents;Code with tokens) //sem tokens
 TEXT TO DOCUMENT("simple_init.txt";$contents)
```

O documento resultante conterá:

```RAW
  //%attributes = {"lang":"en"} comentario adicionado e reservado por 4DCase of    : (Form event:C388=On Load:K2:1)        ALL RECORDS:C47([Customer:1])End case
```

#### Ver também 

[METHOD SET CODE](method-set-code.md)  
*Usar tokens em fórmulas*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1190 |
| Thread-seguro | &check; |
| Proibido no servidor ||


