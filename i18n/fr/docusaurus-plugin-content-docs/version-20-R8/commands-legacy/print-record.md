---
id: print-record
title: PRINT RECORD
slug: /commands/print-record
displayed_sidebar: docs
---

<!--REF #_command_.PRINT RECORD.Syntax-->**PRINT RECORD** ( {*laTable*}{;}{* | >} )<!-- END REF-->
<!--REF #_command_.PRINT RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle imprimer l'enregistrement courant ou Table par défaut si ce paramètre est omis |
| * &#124; > | Opérateur | &#8594;  | * pour supprimer les boîtes de dialogue d'impression ou > pour ne pas réinitialiser les paramètres d'impression |

<!-- END REF-->

#### Description 

<!--REF #_command_.PRINT RECORD.Summary-->Cette commande provoque l'impression de l'enregistrement courant de *laTable*, sans modifier la sélection courante.<!-- END REF--> Le formulaire sortie courant est utilisé pour l'impression. S’il n’y a pas d’enregistrement courant dans *laTable*, **PRINT RECORD** ne fait rien.

**PRINT RECORD** permet d'imprimer des sous-formulaires, ce qui n'est pas possible avec la commande [Print form](../commands/print-form.md).

**Note :** Si l'enregistrement a subi des modifications qui n'ont pas encore été sauvegardées sur disque, la commande imprime les valeurs les plus récentes, et non celles stockées sur le disque.

Par défaut, **PRINT RECORD** affiche la boîte de dialogue d'impression. Si l'utilisateur annule la boîte de dialogue, l'exécution de la commande est stoppée.  
Vous pouvez supprimer son affichage en utilisant soit le paramètre optionnel astérisque (\*), soit le paramètre optionnel “supérieur à” (>).

* Le paramètre *\** provoque une impression avec les paramètres d’impression courants (paramètres par défaut ou définis par les commandes *\_o\_PAGE SETUP* et/ou [SET PRINT OPTION](set-print-option.md)).
* Le paramètre *\>* provoque en outre l’impression sans réinitialisation des paramètres d’impression. Ce paramètre est utile lorsque vous souhaitez exécuter successivement plusieurs appels à **PRINT RECORD** (par exemple à l'intérieur d’une boucle) tout en conservant des paramètres d’impression personnalisés préalablement définis.

**4D Server :** Cette commande peut être exécutée sur 4D Server dans le cadre d'une procédure stockée. Dans ce contexte :

* Veillez à ce qu’aucune boîte de dialogue n’apparaisse sur le poste serveur (sauf besoin spécifique). Pour cela, il est nécessaire d’appeler la commande avec le paramètre *\** ou *\>*.
* En cas de problème sur l’imprimante (plus de papier, imprimante déconnectée, etc.), aucun message d'erreur n'est généré.

**Attention :** N'utilisez pas la commande [PAGE BREAK](page-break.md) avec **PRINT RECORD**. [PAGE BREAK](page-break.md) est exclusivement réservée à une utilisation combinée avec la commande [Print form](../commands/print-form.md).

#### Exemple 1 

L'exemple suivant imprime l'enregistrement courant de la table *\[Factures\]*. Cette méthode est celle d'un bouton **Imprimer** placé dans le formulaire entrée. Lorsque l'utilisateur clique sur ce bouton, l'enregistrement est imprimé dans un formulaire spécialement créé dans ce but. 

```4d
 FORM SET OUTPUT([Factures];"ImpressionEnregistrement") //Sélection du formulaire pour l'impression
 PRINT RECORD([Factures];*) //Imprimer les factures (sans dialogues d'impression)
 FORM SET OUTPUT([Factures];"FormListe") //Restauration du formulaire sortie courant
```

#### Exemple 2 

L'exemple suivant imprime le même enregistrement courant dans deux formulaires différents. Cette méthode est celle d'un bouton **Imprimer** placé dans un formulaire entrée. Vous souhaitez définir des paramètres d’impression personnalisés et les utiliser pour les deux formulaires. 

```4d
 PRINT SETTINGS //L'utilisateur définit ses paramètres d'impression
 If(OK=1)
    FORM SET OUTPUT([Employés];"Détaillé") //Use un premier formulaire d'impression
    PRINT RECORD([Employés];>)
  //Imprimer en utilisant les paramètres définis par l'utilisateur
    FORM SET OUTPUT([Employés];"Simplifié") //Use un second formulaire d'impression
    PRINT RECORD([Employés];>)
  //Imprimer en utilisant les paramètres définis par l'utilisateur
    FORM SET OUTPUT([Employés];"Sortie") //Rétablir le formulaire sortie par défaut
 End if
```

#### Voir aussi 

[Print form](../commands/print-form.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 71 |
| Thread safe | &cross; |


