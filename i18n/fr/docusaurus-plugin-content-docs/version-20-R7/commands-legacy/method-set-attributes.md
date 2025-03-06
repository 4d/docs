---
id: method-set-attributes
title: METHOD SET ATTRIBUTES
slug: /commands/method-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ATTRIBUTES.Syntax-->**METHOD SET ATTRIBUTES** ( *chemin* ; *attributs* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD SET ATTRIBUTES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text, Text array | &#8594;  | Chemin(s) de méthode(s) |
| attributs | Object, Object array | &#8594;  | Attribut(s) de méthode(s) à définir |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD SET ATTRIBUTES.Summary-->La commande **METHOD SET ATTRIBUTES** vous permet de définir les valeurs des *attributs* pour la ou les méthode(s) spécifiée(s) dans le paramètre *chemin*.<!-- END REF-->

Dans le paramètre *chemin*, vous pouvez passer soit un texte contenant un chemin de méthode, soit un tableau texte contenant un tableau de chemins. Vous devrez passer le même type de paramètre (variable simple ou tableau) dans le paramètre *attributs* afin de définir les valeurs adéquates. Cette commande ne fonctionne qu’avec les méthodes projet. Si vous passez un *chemin* invalide, une erreur est générée.

Dans le paramètre *attributs*, vous pouvez passer un objet ou un tableau d'objets, selon le type de paramètre passé dans *chemin*, contenant tous les attributs à fixer pour la ou les méthode(s).

Les attributs de méthodes doivent être définis à l'aide des commandes [OB SET](ob-set.md) ou [OB SET ARRAY](ob-set-array.md), avec les valeurs Vrai or Faux pour les attributs booléens, ou des valeurs spécifiques pour les attributs étendus. Seuls les attributs présents dans le paramètre *attributs* seront mis à jour dans les attributs des méthodes.

Si la commande est exécutée depuis un composant, elle s’applique par défaut aux méthodes du composant. Si vous passez le paramètre *\**, elle accède aux méthodes de la base hôte.

**Note :** La commande existante [METHOD SET ATTRIBUTE](method-set-attribute.md) reste prise en charge, toutefois comme elle ne peut retourner que des valeurs booléennes, elle ne peut pas être utilisée pour les attributs étendus tels que les propriétés 4D Mobile.

##### 

```json
{
    "invisible" : false, // true si visible
    "preemptive" : "capable" // ou bien "incapable" ou "indifferent"
    "publishedWeb" : false,  // true si disponible via les balised et URLs 4D
    "publishedSoap": false,  // true si offerte comme Web Service
    "publishedWsdl": false,  // true si publiée dans WSDL
    "shared" : false,  // true si partagée entre composants et base hôte
    "publishedSql" : false,  // true si disponible via SQL
    "executedOnServer" : false, // true si exécutée sur le serveur
    "published4DMobile" : {
        "scope": "table",  // "none" ou "table" ou "currentRecord" ou "currentSelection" 
        "table": "nomTable"  // présent si scope est différent de "none" 
    }
}
```

#### Exemple 

Vous souhaiter modifier un seul attribut :

```4d
 var $attributes : Object
 OB SET($attributes;"executedOnServer";True)
 METHOD SET ATTRIBUTES("aMethod";$attributes) //seul l'attribut "executedOnServer" est modifié
```

#### Voir aussi 

[METHOD GET ATTRIBUTES](method-get-attributes.md)  
[METHOD SET ATTRIBUTE](method-set-attribute.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1335 |
| Thread safe | &cross; |


