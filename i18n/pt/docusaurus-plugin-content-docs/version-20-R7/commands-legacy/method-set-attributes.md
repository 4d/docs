---
id: method-set-attributes
title: METHOD SET ATTRIBUTES
slug: /commands/method-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTES.Syntax-->**METHOD SET ATTRIBUTES** ( *caminho* ; *atributos* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| caminho | Text, Text array | &#8594;  | Caminho dos métodos |
| atributos | Object, Object array | &#8594;  | Atributos a estabelecer para os métodos selecionados |
| * | Operador | &#8594;  | Se passado = comando aplica ao banco de dados host quando executado a partir de um componente (parâmetro ignorado fora desse contexto) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.METHOD SET ATTRIBUTES.Summary-->O novo comando **METHOD SET ATTRIBUTES** permite que você defina os valores dos *atributos* para os métodos especificados no parâmetro *caminho*.<!-- END REF-->

Em *caminho*, você pode passar por exemplo um texto que contém um caminho de método, ou um array de texto que contém uma variedade de caminhos. Você deve passar o mesmo tipo de parâmetro (string ou array) em *atributos* a fim de estabelecer os atributos apropriados. Este comando só funciona com métodos de projeto. Se você passar um *caminho* inválido, é gerado um erro.  
  
Em *atributos*, se passa um objeto ou um array de objetos (dependendo do tipo de parâmetro passado em *caminho*) que contém todos os atributos que você deseja definir para os métodos.  
  
Os atributos de métodos devem ser definidos com os comandos [OB SET](ob-set.md) ou [OB SET ARRAY](ob-set-array.md), com valores True ou False para atributos booleano, ou valores específicos para atributos estendidos. Somente os atributos que estão presentes no parâmetro *atributos* são atualizados nos atributos dos métodos.  
  
Se o comando for executado a partir de um componente, o padrão é aplicado aos métodos do componente. Se você passar o parâmetro *\**, ele acessa aos métodos do banco de dados local.  
  
  
##### 

Os atributos com suporte são:

\[#codeRAW\]{  
 "invisible" : false, // true se for visível  
 "preemptive" : "capable" // o "incapable" o "indifferent"  
 "publishedWeb" : false, // true se estiver disponível através das tags e URLs 4D  
 "publishedSoap": false, // true se for oferecido como serviço web  
 "publishedWsdl": false, // true se tiver sido publicado em WSDL  
 "shared" : false, // true se for compartida pelos componentes e o banco local  
 "publishedSql" : false, // true se estiver disponível através de SQL  
 "executedOnServer" : false, // true se for executado no servidor  
 }  
}\[#codeRAW\]

**Nota:** os atributos "published4DMobile" são obsoletos para 4D v18.

#### Exemplo 

Se você desejar modificar apenas um atributo:

```4d
 var $attributes : Object
 OB SET($attributes;"executedOnServer";True)
 METHOD SET ATTRIBUTES("aMethod";$attributes) //apenas o atributo "executedOnServer" é modificado
```

#### Ver também 

[METHOD GET ATTRIBUTES](method-get-attributes.md)  
[METHOD SET ATTRIBUTE](method-set-attribute.md)  