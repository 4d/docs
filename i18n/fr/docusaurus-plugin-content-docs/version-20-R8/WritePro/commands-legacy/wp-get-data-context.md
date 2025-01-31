---
id: wp-get-data-context
title: WP Get data context
slug: /WritePro/commands/wp-get-data-context
displayed_sidebar: docs
---

<!--REF #_command_.WP Get data context.Syntax-->**WP Get data context** ( *wpDoc* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get data context.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Document 4D Write Pro |
| Résultat | Object | &#8592; | Objet contexte de données |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP Get data context.Summary-->La commande **WP Get data context** returne le contexte de données du document wpDoc\[#/descv\].<!-- END REF--> Les contextes de données sont définis à l'aide de la commande [WP SET DATA CONTEXT](wp-set-data-context.md).

Dans wpDoc, passez le document 4D Write Pro dont vous souhaitez obtenir le contexte de données.

#### Exemple 

Vous pouvez obtenir un contexte de données à partir d'un document et le réutiliser dans une autre méthode du même process.

La méthode suivante définit un contexte de données :

```4d
  // méthode1
 var $person: Object
 var $wpArea : Object
 
 $wpArea:=WP New()
 
  // Créer un objet "person"
 $person:=New object()
 $person.firstName:="John"
 $person.lastName:="Doe"
  
  // Définir un contexte à l'aide de l'objet "person"
 WP SET DATA CONTEXT($wpArea;$person)
 
 méthodé2($wpArea) //appeler l'autre méthode
```

méthode2 pourrait avoir le contenu suivant :

```4d
  //méthode2
 #DECLARE($document Object)
 var $context : Object
 
 $context:=WP Get data context($document)
 ALERT(JSON Stringify($context)) // Affiche {"firstName":"John","lastName":"Doe"}
```

#### Voir aussi 

  
[WP SET DATA CONTEXT](wp-set-data-context.md)  