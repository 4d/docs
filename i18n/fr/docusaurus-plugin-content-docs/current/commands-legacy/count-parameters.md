---
id: count-parameters
title: Count parameters
slug: /commands/count-parameters
displayed_sidebar: docs
---

<!--REF #_command_.Count parameters.Syntax-->**Count parameters**  : Integer<!-- END REF-->
<!--REF #_command_.Count parameters.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Nombre de paramètres effectivement passés |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count parameters.Summary-->**Count parameters** retourne le nombre de paramètres passés à une méthode projet.<!-- END REF-->**Count parameters** n'a d'intérêt que dans une méthode projet appelée par une autre méthode (projet ou non). Si la méthode projet qui appelle **Count parameters** est associée à une commande de menu, la fonction retourne 0.

#### Exemple 1 

Les méthodes projet de 4D acceptent que des paramètres soient optionnels, à partir de la droite. Par exemple, la méthode *maMéthode(a;b;c;d)* peut accepter les syntaxes suivantes : 

```4d
 maMéthode(a;b;c;d) // Tous les paramètres sont passés
 maMéthode(a;b;c) // Le dernier paramètre n'est pas passé
 maMéthode(a;b) // Les deux derniers paramètres ne sont pas passés
 maMéthode(a) // Seul le premier paramètre est passé
 maMéthode // Aucun paramètre n'est passé
```

Si vous utilisez Nombre de parametres dans maMéthode, vous pouvez détecter le nombre de paramètres passés et effectuer des opérations différentes selon ce nombre. L'exemple suivant affiche un texte et peut soit l'insérer dans une zone de 4D Write, soit l'écrire dans un document sur disque :

```4d
  // Méthode AJOUTER TEXTE
  // AJOUTER TEXTE ( Texte { ; Entier long { ; Heure } } )
  // AJOUTER TEXTE ( Texte { ; zone 4D Write { ; RéfDoc } } )
 
 var $1 : Text
 var $2 : Time
 var $3 : Integer
 
 MESSAGE($1)
 If(Count parameters>=3)
    SEND PACKET($3;$1)
 Else
    If(Count parameters>=2)
       wr_INSERER TEXTE($2;$1)
    End if
 End if
```

Vous pouvez ensuite appeler cette méthode de ces trois façons différentes : 

```4d
 AJOUTER TEXTE(vtTexte) // Afficher seulement le message texte
 AJOUTER TEXTE(vtTexte;$wrZone) // Afficher le message texte et ajouter le texte à $wrZone
 AJOUTER TEXTE(vtTexte;0;$vhRéfDoc) // Afficher le message texte et l'écrire dans $vhRéfDoc
```

#### Exemple 2 

Les méthodes projet de 4D acceptent un nombre variable de paramètres du même type à partir de la droite. Pour déclarer ces paramètres, vous devez utiliser des directives de compilation auxquelles vous passez *${N}* en tant que variable, où N spécifie le premier des paramètres. A l'aide de **Count parameters**, vous pouvez référencer ces paramètres dans une boucle avec la syntaxe d'indirection de paramètre. L'exemple suivant est une fonction qui retourne la valeur maximale reçue en tant que paramètre :

```4d
  // Méthode projet Max de
  // Max de ( Réel { ; Réel2... ; RéelN } ) -> Réel
  // Max de ( Valeur { ; Valeur2... ; ValeurN } ) -> Valeur maximale
 
 var $0;${1} : Real // Tous les paramètres sont de type REEL ainsi que le résultat de la fonction
 $0:=${1}
 For($vlParam;2;Count parameters)
    If(${$vlParam}>$0)
       $0:=${$vlParam}
    End if
 End for
```

Vous pouvez alors appeler cette méthode d'une des deux manières suivantes :

```4d
 vrRésultat:=Max de(Records in set("Opération A");Records in set("Opération B"))
```

ou :

```4d
 vrRésultat:=Max de(r1;r2;r3;r4;r5;r6)
```

#### Voir aussi 

*Commandes du thème Compilateur*  
[Copy parameters](copy-parameters.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 259 |
| Thread safe | &check; |
| Interdite sur le serveur ||


