---
id: print-form
title: Print form
slug: /commands/print-form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*laTable* ;} *formulaire* {; *formData*} {; *zone1*{; *zone2*}} ) : Integer<!-- END REF-->
<!--REF #_command_.Print form.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à imprimer, ou Table par défaut si ce paramètre est omis |
| formulaire | Text, Object | &#8594;  | Nom (chaîne) du formulaire table ou projet à imprimer, ou<br/>Chemin POSIX (chaîne) d'un fichier .json décrivant le formulaire, ou<br/>Objet décrivant le formulaire |
| formData | Object | &#8594;  | Data to associate to the form |
| zone1 | Integer | &#8594;  | Marqueur d’impression, ou Zone de départ (si zone2 est spécifié) |
| zone2 | Integer | &#8594;  | Zone de fin (si zone1 est spécifié) |
| Résultat | Integer | &#8592; | Hauteur de la section imprimée |

<!-- END REF-->

#### Description 

<!--REF #_command_.Print form.Summary-->La commande **Print form** imprime simplement *formulaire* avec les valeurs courantes des champs et des variables de *laTable*.<!-- END REF--> Cette commande est généralement utilisée pour imprimer des états particulièrement complexes nécessitant un contrôle total du processus d'impression. **Print form** ne gère pas les traitements d'enregistrements, ni les ruptures, sauts de pages, en-têtes ou pieds de pages. Vous devez vous-même prendre en charge ces opérations. **Print form** imprime uniquement des champs et des variables avec une taille fixe, la commande ne gère pas les objets de taille variable.

Comme la commande **Print form** ne génère pas de saut de page après avoir imprimé un formulaire, elle vous permet de combiner facilement différents formulaires sur la même page. Ainsi, **Print form** est idéale pour effectuer des impressions complexes impliquant plusieurs tables et plusieurs formulaires. Pour "forcer" 4D à effectuer un saut de page entre deux formulaires, utilisez la commande [PAGE BREAK](page-break.md). Pour reporter sur la page suivante l'impression d'un formulaire dont la hauteur est supérieure à la place disponible, appelez la commande [CANCEL](cancel.md) avant la commande [PAGE BREAK](page-break.md). 

Trois syntaxes peuvent être utilisées :

* **Impression du corps d'un formulaire**
Syntaxe : 

```4d
 hauteur:=Print form(maTable;monFormulaire)
```

Dans ce cas, **Print form** imprime uniquement la zone de Corps du formulaire (zone située entre les marqueurs En-tête et Corps).

* **Impression de zone de formulaire**
Syntaxe : 

```4d
 hauteur:=Print form(maTable;monFormulaire;marqueur)
```

Dans ce cas, la commande imprimera la section désignée par *marqueur*. Passez dans le paramètre *marqueur* une des constantes du thème “*Zone de formulaire*” :

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Form break0   | Entier long | 300    |
| Form break1   | Entier long | 301    |
| Form break2   | Entier long | 302    |
| Form break3   | Entier long | 303    |
| Form break4   | Entier long | 304    |
| Form break5   | Entier long | 305    |
| Form break6   | Entier long | 306    |
| Form break7   | Entier long | 307    |
| Form break8   | Entier long | 308    |
| Form break9   | Entier long | 309    |
| Form detail   | Entier long | 0      |
| Form footer   | Entier long | 100    |
| Form header   | Entier long | 200    |
| Form header1  | Entier long | 201    |
| Form header10 | Entier long | 210    |
| Form header2  | Entier long | 202    |
| Form header3  | Entier long | 203    |
| Form header4  | Entier long | 204    |
| Form header5  | Entier long | 205    |
| Form header6  | Entier long | 206    |
| Form header7  | Entier long | 207    |
| Form header8  | Entier long | 208    |
| Form header9  | Entier long | 209    |

* **Impression de section**
 Syntaxe : 

```4d
 hauteur:=Print form(maTable;monFormulaire;zoneDébut;zoneFin)
```

Dans ce cas, la commande imprimera la section comprise entre les paramètres *zoneDébut* et *zoneFin*. Les valeurs saisies doivent être exprimées en pixels. 

La valeur retournée par **Print form** indique la hauteur de la zone d’impression. Cette valeur sera automatiquement prise en compte par la commande [Get printed height](get-printed-height.md).  
  
Les boîtes de dialogue standard d'impression n'apparaissent pas lorsque vous utilisez la commande **Print form**. L'état généré ne tient pas compte des paramètres d'impression définis en mode Développement pour le formulaire. Il y a deux manières de définir les paramètres d'impression avant d'effectuer une série d'appels à **Print form** :

* Vous appelez [PRINT SETTINGS](print-settings.md). Dans ce cas, vous laissez l'utilisateur définir ses paramètres dans les boîtes de dialogue d'impression.
* Vous appelez *\_o\_PAGE SETUP*. Dans ce cas, les paramètres sont définis par programmation.

**Print form** construit chaque page à imprimer en mémoire. La page n'est imprimée que lorsqu'elle est entièrement remplie ou lorsque vous appelez [PAGE BREAK](page-break.md). Pour vous assurer que la dernière page d'une impression exécutée par l'intermédiaire **Print form** soit effectivement imprimée, vous devez conclure par un appel à la commande [PAGE BREAK](page-break.md) (hormis dans le contexte d'un [OPEN PRINTING JOB](open-printing-job.md), cf. note). Sinon, la dernière page, si elle n'est pas pleine, reste en mémoire et n'est pas imprimée.

**Attention:** Si la commande est appelée dans le contexte d'une tâche d'impression ouverte avec [OPEN PRINTING JOB](open-printing-job.md), vous ne devez PAS appeler [PAGE BREAK](page-break.md) pour la dernière page car celle-ci est automatiquement imprimée par la commande [CLOSE PRINTING JOB](close-printing-job.md). Si vous appelez [PAGE BREAK](page-break.md) dans ce cas, une page vide est imprimée. 

Cette commande imprime les zones et objets externes (par exemple des zones 4D Write ou 4D View). La zone est réinitialisée à chaque exécution de la commande. 

**Attention :** **Print form** n'imprime pas les sous-formulaires. Si vous voulez imprimer uniquement un formulaire comportant de tels objets, utilisez plutôt [PRINT RECORD](print-record.md).

**Print form** ne génère qu'un événement On Printing Detail pour la méthode formulaire.

**4D Server :** Cette commande peut être exécutée sur 4D Server dans le cadre d'une procédure stockée. Dans ce contexte :

* Veillez à ce qu’aucune boîte de dialogue n’apparaisse sur le poste serveur (sauf besoin spécifique).
* En cas de problème sur l’imprimante (plus de papier, imprimante déconnectée, etc.), aucun message d'erreur n'est généré.

#### Exemple 1 

L'exemple suivant effectue la même chose que ce que ferait la commande [PRINT SELECTION](print-selection.md). Cependant, l'état utilise deux formulaires différents suivant le type d'enregistrement (chèque émis ou dépôt) :

```4d
 QUERY([Opérations]) // Permettre à l'utilisateur de sélectionner les enregistrements
 If(OK=1)
    ORDER BY([Opérations]) // Permettre à l'utilisateur de trier les enregistrements
    If(OK=1)
       PRINT SETTINGS // Afficher les boîtes de dialogue d'impression
       If(OK=1)
          For($i;1;Records in selection([Opérations]))
             If([Opérations]Type="Chèque") // Si c'est un chèque…
                Print form([Opérations];"SortieChèque") // Use un formulaire de chèque
             Else // Else c'est un dépôt donc…
                Print form([Opérations];"SortieDépôt") // Use un formulaire de dépôt...
             End if
             NEXT RECORD([Opérations])
          End for
          PAGE BREAK //S'assurer que la dernière page est imprimée
       End if
    End if
 End if
```

#### Exemple 2 

Reportez-vous à l'exemple de la commande [SET PRINT MARKER](set-print-marker.md). 

#### Exemple 3 

Ce formulaire est utilisé comme dialogue, puis imprimé avec des modifications :

![](../assets/en/commands/pict6264975.en.png)

La méthode formulaire :

```4d
 If(Form event code=On Printing Detail)
    Form.lastname:=Uppercase(Form.lastname)
    Form.firstname:=Uppercase(SUBSTRING(Form.firstname;1;1))+Lowercase(SUBSTRING(Form.firstname;2))
    Form.request:=Lowercase(Form.request)
 End if
```

Le code qui appelle la boîte de dialogue ensuite imprime son corps :

```4d
 $formData:=New object
 $formData.lastname:="Smith"
 $formData.firstname:="john"
 $formData.request:="I need more COFFEE"
 $win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)
 DIALOG("Request_obj";$formData)
 $h:=Print form("Request_var";$formData;Form detail)
```

#### Voir aussi 

[CANCEL](cancel.md)  
[PAGE BREAK](page-break.md)  
[PRINT SETTINGS](print-settings.md)  
[SET PRINT OPTION](set-print-option.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 5 |
| Thread safe | &cross; |


