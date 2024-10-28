---
id: method-get-attributes
title: METHOD GET ATTRIBUTES
slug: /commands/method-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET ATTRIBUTES.Syntax-->**METHOD GET ATTRIBUTES** ( *chemin* ; *attributs* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET ATTRIBUTES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text, Text array | &#8594;  | Chemin(s) de méthode(s) |
| attributs | Object, Object array | &#8592; | Attribut(s) de méthode(s) |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD GET ATTRIBUTES.Summary-->La commande **METHOD GET ATTRIBUTES** retourne, dans le paramètre *attributs*, la valeur courante de tous les attributs de la ou des méthode(s) spécifiée(s) dans le paramètre *chemin*.<!-- END REF-->

Cette commande ne fonctionne qu’avec les méthodes projet. Si vous passez un *chemin* invalide, une erreur est générée. 

Dans le paramètre *chemin*, vous pouvez passer soit un texte contenant un chemin de méthode, soit un tableau texte contenant un tableau de chemins. Vous devrez passer le même type de paramètre (variable simple ou tableau) dans le paramètre *attributs* afin de récupérer les valeurs adéquates.

Dans le paramètre *attributs*, vous pouvez passer un objet ou un tableau d'objets, selon le type de paramètre passé dans *chemin*. Tous les attributs de méthode(s) sont retournés sous forme de propriétés d'objet, avec des valeurs "True"/"False" pour les attributs Booléens, des valeurs texte ou des valeurs supplémentaires si nécessaire (par exemple, "scope":"table" pour la propriété 4D Mobile).

Si la commande est exécutée depuis un composant, elle s’applique par défaut aux méthodes du composant. Si vous passez le paramètre *\**, elle accède aux méthodes de la base hôte.

**Note de compatibilité :** La propriété *published4DMobile* est obsolète à partir de 4D v18.

#### Exemple 

Vous souhaitez connaître les attributs de la méthode projet *sendMail*. Vous pouvez écrire :

```4d
 var $att : Object
 METHOD GET ATTRIBUTES("sendMail";$att)
```

A l'issue de l'exécution, $att contient, par exemple :

```json
{
    "invisible":false,
    "preemptive":"capable",
    "publishedWeb":false,
    "publishedSoap":false,
    "publishedWsdl":false,
    "shared":false,
    "publishedSql":false,
    "executedOnServer":false,
    "published4DMobile":{
        "scope":"table",
        "table":"Table_1"
    }
}
```

#### Voir aussi 

[METHOD SET ATTRIBUTES](method-set-attributes.md)  