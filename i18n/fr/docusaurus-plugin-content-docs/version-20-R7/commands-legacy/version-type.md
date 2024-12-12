---
id: version-type
title: Version type
slug: /commands/version-type
displayed_sidebar: docs
---

<!--REF #_command_.Version type.Syntax-->**Version type**  : Integer<!-- END REF-->
<!--REF #_command_.Version type.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Informations sur le type de version (champ de bits) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Version type.Summary-->La commande **Version type** retourne une valeur numérique qui représente le type de version de 4D ou de 4D Server que vous utilisez.<!-- END REF--> 4D vous fournit les constantes prédéfinies suivantes, placées dans le thème *Environnement 4D* :

| Constante          | Type        | Valeur | Comment                                                         |
| ------------------ | ----------- | ------ | --------------------------------------------------------------- |
| 64 bit version     | Entier long | 1      |                                                                 |
| Demo version       | Entier long | 0      |                                                                 |
| Merged application | Entier long | 2      | La version est une application fusionnée avec 4D Volume Desktop |

**Note :** Dans les versions actuelles de 4D, le mode démonstration n'est pas disponible.

**Version type** retourne une valeur sous forme de *champ de bits*, il est nécessaire d'utiliser les opérateurs sur les bits pour l'interpréter (cf. exemples).

#### Exemple 

Ce test permet d’exécuter du code différent selon que la version est une application fusionnée ou une base ouverte par 4D / 4D Server :

```4d
 If(Version type?? Application fusionnée)
        // Nous sommes dans une application fusionnée
 Else
        // Nous sommes dans une base de données exécutée par 4D
 End if
```

#### Voir aussi 

[Application type](application-type.md)  
[Application version](application-version.md)  