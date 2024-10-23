---
id: wp-get-data-context
title: WP Get data context
slug: /WritePro/commands/wp-get-data-context
displayed_sidebar: docs
---

<!--REF #_command_.WP Get data context.Syntax-->**WP Get data context** ( *wpDoc* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get data context.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | documento 4d write pro |
| Resultado | Object | &#8592; | objeto contexto data |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP Get data context.Summary-->O comando **WP Get data context** devolve o contexto de dados do documento wpDoc para o processo atual.<!-- END REF--> Os contextos de dados se definem com o comando [WP SET DATA CONTEXT](wp-set-data-context.md).

Em *wpDoc*, passe o documento 4D Write Pro cujo contexto de dados queira obter.

#### Exemplo 

Pode obter um contexto de dados de um documento e reusar em outro método sem o mesmo processo

O método abaixo estabelece um contexto de dados: 

```4d
  // method1
 var $person: Object
 var $wpArea : Object
 
 $wpArea:=WP New()
 
  // Criar objeto person
 $person:=New object()
 $person.firstName:="John"
 $person.lastName:="Doe"
 
  // Estabelece contexto usando o objeto person
 WP SET DATA CONTEXT($wpArea;$person)
 
 method2($wpArea) //chama o outro método
```

method2 poderia parecer com algo como:

```4d
  //method2
 #DECLARE($document Object)
 var $context : Object
 
 $context:=WP Get data context($document)
 ALERT(JSON Stringify($context)) // Displays {"firstName":"John","lastName":"Doe"}
```

#### Ver também 

  
[WP SET DATA CONTEXT](wp-set-data-context.md)  