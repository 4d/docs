---
id: ob-is-defined
title: OB Is defined
slug: /commands/ob-is-defined
displayed_sidebar: docs
---

<!--REF #_command_.OB Is defined.Syntax-->**OB Is defined** ( *objet* {; *propriété*} ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is defined.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object, Object | &#8594;  | Objet structuré |
| propriété | Text | &#8594;  | Si passé = propriété à vérifier, si omis = vérifier l’objet |
| Résultat | Boolean | &#8592; | Si propriété omis : Vrai si objet est défini, sinon Faux.<br/>Si propriété passé : Vrai si propriété est définie, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Is defined.Summary-->La commande **OB Is defined** retourne **Vrai** si *objet* ou *propriété* est défini, et **Faux** sinon.<!-- END REF-->doit avoir été créé via la commande [C\_OBJECT](c-object.md) ou désigner un champ objet 4D.

Par défaut, si vous omettez le paramètre *propriété*, la commande vérifie que *objet* est défini. Un objet est défini si son contenu a été initialisé. 

**Note :** Un objet peut être défini mais vide. Pour savoir si un objet est indéfini ou vide, utilisez la commande [OB Is empty](ob-is-empty.md). 

Si vous passez le paramètre *propriété*, la commande vérifie si cette propriété existe dans *objet*. Attention, le paramètre *propriété* tient compte des majuscules/minuscules. 

#### Exemple 1 

Syntaxe testant l’initialisation d’un objet :

```4d
 var $objet : Object
 $def:=OB Is defined($objet) //$def=faux car $objet n’est pas initialisé
 
 OB SET($objet;"nom";"Martin")
 OB REMOVE($objet;"nom")
 $def2:=OB Is defined($objet) //$def2=vrai car $objet est vide {} mais a été initialisé
```

#### Exemple 2 

Test de l’existence d’une propriété :

```4d
 var $ref : Object
 OB SET($ref;"nom";"smith";"age";42)
     //...
 If(OB Is defined($ref;"age"))
           //...
 End if
```

Ce test équivaut à :

```4d
 If(OB Get type($Objet;"nom")#Is undefined)
```

#### Voir aussi 

[OB Is empty](ob-is-empty.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1231 |
| Thread safe | &check; |


