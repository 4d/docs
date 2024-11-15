---
id: storage
title: Storage
slug: /commands/storage
displayed_sidebar: docs
---

<!--REF #_command_.Storage.Syntax-->**Storage**  : Object<!-- END REF-->
<!--REF #_command_.Storage.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Object | &#8592; | Catalogue des objets et collections partagé(e)s enregistré(e)s dans Storage |

<!-- END REF-->

#### Description 

<!--REF #_command_.Storage.Summary-->La commande **Storage** retourne le catalogue des objets partagés et des collections partagées qui ont été enregistré(e)s dans l'objet *Storage* sur la machine ou le composant courant(e).<!-- END REF--> 

Le catalogue retourné par **Storage** est créé automatiquement par 4D et est disponible pour tous les process de la base, y compris les process préemptifs. Il existe un seul catalogue **Storage** par machine et par composant : dans une application client/serveur, il y a un seul objet partagé **Storage** sur le serveur, et un objet partagé **Storage** sur chaque application 4D distante ; si la base utilise des composants, il y a également un objet **Storage** par composant.

Utilisez le catalogue **Storage** pour référencer les objets ou collections partagé(e)s que vous souhaitez utiliser depuis tout process préemptif ou standard. Pour enregistrer un objet partagé ou une collection partagée dans **Storage**, il suffit d'ajouter sa référence à l'objet partagé retourné par **Storage**.

Comme le catalogue retourné par **Storage** est un *objet partagé*, il suit les règles décrites dans la section *Objets partagés et collections partagées*, avec toutefois les spécificités suivantes :

* Cet objet peut uniquement contenir des objets partagés ou des collections partagées. Si vous tentez d'ajouter d'autres types de valeurs (objets ou collections non partagé(e)s, null, valeurs scalaires), une erreur est générée.
* L'ajout d'une propriété dans cet objet doit être encadré par une structure *Utiliser...Fin utiliser*, sinon une erreur est générée. La lecture d'une propriété en-dehors d'une structure *Utiliser...Fin utiliser* est cependant possible.
* Lorsqu'ils sont encadrés par une structure *Utiliser...Fin utiliser*, les attributs de premier niveau de **Storage** sont verrouillés pour les autres process.
* A la différence des objets partagés standard, l'objet retourné par **Storage** ne partage PAS son *locking identifier* avec les objets partagés ou les collections partagées qui lui sont ajoutés en tant qu'attributs (pour plus d'informations, reportez-vous à la section *A propos du locking identifier (comment fonctionnent les groupes partagés)*).

#### Exemple 1 

Il est pratique d'initialiser le contenu de l'objet **Storage** dans la : 

```4d
 Use(Storage)
    Storage.counters:=New shared object("customers";0;"invoices";0)
 End use
```

#### Exemple 2 

Cet exemple montre la manière standard de définir les valeurs de **Storage** : 

```4d
 Use(Storage)
    Storage.mydata:=New shared object
    Use(Storage.mydata)
       Storage.mydata.prop1:="Smith"
       Storage.mydata.prop2:=100
    End use
 End use
```

#### Exemple 3 

**Storage** permet d'implémenter un singleton en *lazy initialization*, comme proposé dans l'exemple ci-dessous.

**Note :** Pour plus d'informations sur les singletons, vous pouvez consulter cette [page Wikipedia](https://fr.wikipedia.org/wiki/Singleton%5F%28patron%5Fde%5Fconception%29).

```4d
 var $0 : Integer
 var $counterValue : Integer
 var counter : Object //créer une référence de counter pour le process
 
 If(counter=Null) //si la référence est null, on la récupère depuis Storage
    Use(Storage) //L'utilisation de Storage n'est nécessaire qu'une seule fois !
       If(Storage.counter=Null)
          Storage.counter:=New shared object("operation";0)
       End if
       counter:=Storage.counter //Obtenir la référence de l'objet partagé counter
    End use
 End if
 Use(counter) //on utilise directement l'objet partagé counter (pas besoin de Storage)
    counter.operation:=counter.operation+1
    $counterValue:=counter.operation
 End use
 
 $0:=$counterValue
```

#### Voir aussi 

*Objets partagés et collections partagées*  