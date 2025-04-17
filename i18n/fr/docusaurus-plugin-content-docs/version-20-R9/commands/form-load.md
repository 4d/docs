---
id: form-load
title: FORM LOAD
displayed_sidebar: docs
---

<!--REF #_command_.FORM LOAD.Syntax-->**FORM LOAD** ( {*aTable* ;} *form* {; *formData*}{; *} )<!-- END REF-->

<!--REF #_command_.FORM LOAD.Params-->

| Paramètres | Type         |                             | Description                                                                                                                                                                                                                              |
| ---------- | ------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable     | Table        | &#8594; | Formulaire table à charger (si omis, charger un formulaire projet)                                                                                                                                                    |
| form       | Text, Object | &#8594; | Nom (chaîne) du formulaire (projet ou table), ou chemin POSIX (chaîne) vers un fichier .json décrivant le formulaire, ou objet décrivant le formulaire à ouvrir |
| formData   | Object       | &#8594; | Données à associer au formulaire                                                                                                                                                                                                         |
| \*         | Opérateur    | &#8594; | Si passé = la commande s'applique à la base de données hôte lorsqu'elle est exécutée à partir d'un composant (paramètre ignoré en dehors de ce contexte)                                                              |

<!-- END REF-->

## Description

<!--REF #_command_.FORM LOAD.Summary-->La commande **FORM LOAD** est utilisée pour charger le formulaire *form* en mémoire dans le process courant avec *formData* (facultatif) afin d'imprimer ses données ou d'analyser son contenu.<!-- END REF--> Il ne peut y avoir qu'un seul formulaire courant par process.

Dans le paramètre *form*, vous pouvez passer soit :

- le nom d'un formulaire,
- le chemin (en syntaxe POSIX) d'un fichier .json valide contenant la description du formulaire à utiliser,
- un objet contenant la description du formulaire à utiliser.

Lorsque la commande est exécutée à partir d'un composant, elle charge les formulaires du composant par défaut. Si vous passez le paramètre *\**, la méthode charge les formulaires de la base hôte.

### formData

Optionnellement, vous pouvez passer des paramètres au formulaire *form* en utilisant soit l'objet *formData*, soit l'objet de classe de formulaire automatiquement instancié par 4D si vous avez [associé une classe utilisateur au formulaire](../FormEditor/properties_FormProperties.md#form-class). Toutes les propriétés de l'objet de données du formulaire seront alors disponibles dans le contexte du formulaire par le biais de la commande [Form](form.md).
L'objet de données formulaire est disponible dans l'événement formumaire [`On Load`](../Events/onLoad.md).

Pour des informations détaillées sur l'objet de données formulaire, veuillez vous référer à la commande [`DIALOG`](dialog.md).

### Impression des données

Pour pouvoir exécuter cette commande, une tâche d'impression doit être ouverte au préalable à l'aide de la commande [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md). La commande [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md) fait un appel implicite à la commande [FORM UNLOAD](../commands-legacy/form-unload.md), donc dans ce contexte il est nécessaire d'exécuter **FORM LOAD**. Une fois chargé, *form* devient le formulaire d'impression courant. Toutes les commandes de gestion des objets, et en particulier la commande [Print object](../commands-legacy/print-object.md), fonctionnent avec ce formulaire.

Si un formulaire d'impression avait déjà été chargé au préalable (via un appel précédent à la commande **FORM LOAD**), il est fermé et remplacé par *form*. Vous pouvez ouvrir et fermer plusieurs formulaires projet dans la même session d'impression. Le changement de formulaire d'impression via la commande **FORM LOAD** ne génère pas de sauts de page. Il appartient au développeur de gérer les sauts de page.

Seul l'événement formulaire [`On Load`](../Events/onLoad.md) est exécuté lors de l'ouverture du formulaire projet, ainsi que toutes les méthodes objet du formulaire. Les autres événements formulaire sont ignorés. L'événement formulaire [`On Unload`](../Events/onUnload.md) est exécuté à la fin de l'impression.

Pour préserver la cohérence graphique des formulaires, il est recommandé d'appliquer la propriété d'apparence "Printing" quelle que soit la plate-forme.

Le formulaire d'impression courant est automatiquement fermé lorsque la commande [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md) est appelée.

### Analyse du contenu du formulaire

Cela consiste à charger un formulaire hors écran à des fins d'analyse. Pour cela, il vous suffit d'appeler **FORM LOAD** en dehors du contexte d'une tâche d'impression. Dans ce cas, les événements formulaire ne sont pas exécutés.

**FORM LOAD** peut être utilisé avec les commandes [FORM GET OBJECTS](../commands-legacy/form-get-objects.md) et [OBJECT Get type](../commands-legacy/object-get-type.md) afin d'effectuer tout type de traitement sur le contenu du formulaire. Vous devez ensuite appeler la commande [FORM UNLOAD](../commands-legacy/form-unload.md) pour libérer le formulaire de la mémoire.

Notez que dans tous les cas, le formulaire à l'écran reste chargé (il n'est pas affecté par la commande **FORM LOAD**) et qu'il n'est donc pas nécessaire de le recharger après avoir appelé [FORM UNLOAD](../commands-legacy/form-unload.md).

**Rappel :** Dans le contexte hors écran, n'oubliez pas d'appeler [FORM UNLOAD](../commands-legacy/form-unload.md) pour éviter tout risque de saturation de la mémoire.

## Exemple 1

Appel d'un formulaire projet dans une tâche d'impression :

```4d
 OPEN PRINTING JOB
 FORM LOAD("print_form")
  // exécution des événements et des méthodes objets
```

## Exemple 2

Appel d'un formulaire table dans une tâche d'impression :

```4d
 OPEN PRINTING JOB
 FORM LOAD([People];"print_form")
  // exécution des événements et des méthodes objets
```

## Exemple 3

Analyse du contenu des formulaires pour effectuer des traitements dans les zones de saisie de texte :

```4d
FORM LOAD([People] ; "my_form")
 // sélection du formulaire sans exécution d'événements ou de méthodes
FORM GET OBJECTS(arrObjNames;arrObjPtrs;arrPages;*)
For($i;1 ;Size of array (arrObjNames))
  If(OBJECT Get type(*;arrObjNames{$i})=Object type text input)
  //… processing
  End if
End for
FORM UNLOAD //ne pas oublier de décharger le formulaire
```

## Exemple 4

L'exemple suivant retourne le nombre d'objets dans un formulaire JSON :

```4d
 ARRAY TEXT(objectsArray;0)  //tri des éléments du formulaire dans les tableaux
 ARRAY POINTER(variablesArray;0)
 ARRAY INTEGER(pagesArray;0)
 
 FORM LOAD("/RESOURCES/OutputForm.json") //load the form
 FORM GET OBJECTS(objectsArray;variablesArray;pagesArray;Form all pages+Form inherited)
 
 ALERT("The form contains "+String(size of array(objectsArray))+" objects") //nombre d'objets
```

le résultat affiché est :

![](../assets/en/commands/pict3688480.en.png)

## Exemple 5

Vous voulez imprimer un formulaire contenant une list box. Lors de l'événement *on load*, vous souhaitez que le contenu de la list box soit modifié.

1\. Dans la méthode d'impression, vous écrivez :

```4d
 var $formData : Object
 var $over : Boolean
 var $full : Boolean
 
 OPEN PRINTING JOB
 $formData:=New object
 $formData.LBcollection:=New collection()
 ... //remplir la collection avec des données
 
 FORM LOAD("GlobalForm";$formData) //stocker la collection in $formData
 $over:=False
 Repeat
    $full:=Print object(*;"LB") // la datasource de la listbox "LB" est Form.LBcollection
    LISTBOX GET PRINT INFORMATION(*;"LB";lk printing is over;$over)
    If(Not($over))
       PAGE BREAK
    End if
 Until($over)
 FORM UNLOAD
 CLOSE PRINTING JOB
```

2\. Dans la méthode formulaire, vous pouvez écrire :

```4d
 var $o : Object
 Case of
    :(Form event code=On Load)
       For each($o;Form.LBcollection) //LBcollection est disponible
          $o.reference:=Uppercase($o.reference)
       End for each
 End case
```

## Voir également

[Current form name](../commands-legacy/current-form-name.md)\
[FORM UNLOAD](../commands-legacy/form-unload.md)\
[LISTBOX GET OBJECTS](../commands-legacy/listbox-get-objects.md)\
[OBJECT Get type](../commands-legacy/object-get-type.md)\
[Print object](../commands-legacy/print-object.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1103                        |
| Thread safe        | &cross; |


