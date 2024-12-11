---
id: asserted
title: Asserted
slug: /commands/asserted
displayed_sidebar: docs
---

<!--REF #_command_.Asserted.Syntax-->**Asserted** ( *expressionBool* {; *texteMessage*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Asserted.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| expressionBool | Boolean | &#8594;  | Expression booléenne |
| texteMessage | Text | &#8594;  | Texte du message d’erreur |
| Résultat | Boolean | &#8592; | Résultat de l’évaluation d’expressionBool |

<!-- END REF-->

#### Description 

<!--REF #_command_.Asserted.Summary-->La commande **Asserted** a un fonctionnement semblable à celui de la commande [ASSERT](assert.md), à la différence près qu’elle retourne une valeur issue de l’évaluation du paramètre *expressionBool*.<!-- END REF--> Elle permet donc d’utiliser une assertion lors de l’évaluation d’une condition (cf. exemple). Pour plus d’informations sur le fonctionnement des assertions et sur les paramètres de cette commande, reportez-vous à la description de la commande [ASSERT](assert.md).

**Asserted** accepte une expression booléenne en paramètre et retourne le résultat de l’évaluation de cette expression. Si l’expression est fausse et si les assertions sont activées (cf. commande [SET ASSERT ENABLED](set-assert-enabled.md)), l’erreur -10518 est générée, exactement comme pour la commande [ASSERT](assert.md). Si les assertions sont inactivées, **Asserted** retourne simplement le résultat de l’expression qui lui est passée sans déclencher d’erreur.

**Note :** Comme la commande [ASSERT](assert.md), **Asserted** fonctionne en mode interprété et en mode compilé. 

#### Exemple 

Insertion d’une assertion dans l’évaluation d’une expression :

```4d
 READ WRITE([Table 1])
 LOAD RECORD([Table 1])
 If(Asserted(Not(Locked([Table 1])))) 
        // Ce code déclenche l'erreur  -10518  si l'enregistrement est verrouillé
       ...
 End if
```

#### Voir aussi 

[ASSERT](assert.md)  
[Get assert enabled](get-assert-enabled.md)  
[SET ASSERT ENABLED](set-assert-enabled.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1132 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


