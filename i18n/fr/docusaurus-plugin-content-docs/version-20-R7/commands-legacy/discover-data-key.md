---
id: discover-data-key
title: Discover data key
slug: /commands/discover-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Discover data key.Syntax-->**Discover data key**  : Boolean<!-- END REF-->
<!--REF #_command_.Discover data key.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Vrai si une clé de chiffrement valide a été trouvée pour le fichier de données courant, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.Discover data key.Summary-->La commande **Discover data key** recherche, à la racine de tous les appareils connectés, une clé de chiffrement valide correspondant au fichier de données courant et retourne **Vrai** si l'opération est réussie.<!-- END REF--> 

Les appareils connectés à rechercher incluent les clés USB ou les disques externes. Une clé de chiffrement valide est nécessaire pour l'accès en lecture/écriture à la base chiffrée. Cette commande peut être appelée, par exemple, au démarrage de la base, une fois que l'utilisateur a été invité à se connecter à la clé USB.

Les fichiers de clés (fichiers d'extension ".4DKeyChain") doivent être stockés à la racine des appareils connectés (la recherche ne s'effectuera pas via l'arborescence du dossier). Les clés de chiffrement doivent être sauvegardées au format JSON (voir *Sauvegarder les clés de chiffrement des données dans des fichiers* dans le manuel *4D Mode Développement*).

**Valeur retournée**

* **Vrai** si une clé de chiffrement valide a été trouvée pour le fichier de données courant, auquel cas :  
   * la clé de chiffrement est appliquée si nécessaire, afin que les données chiffrées soient utilisables (opérations d'accès en lecture/écriture).  
   * la clé de chiffrement est ajoutée au trousseau 4D.
* **Faux** si une clé de chiffrement valide n'a pas été trouvée pour le fichier de données courant, auquel cas l'accès aux données est impossible.

#### Exemple 

```4d
 var $status : Object
 var $keyFound : Boolean
 
 $status:=ds.encryptionStatus()
 
 If(($status.isEncrypted)&(Not($status.keyProvided))) //aucune clé n'est disponible
  // l'accès aux données chiffrées n'est donc pas autorisé
    $keyFound:=Discover data key
    If($keyFound=True)
       ALERT("Une clé de chiffrement valide a été trouvée.")
    End if
 End if
```

#### Voir aussi 

  
[New data key](new-data-key.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1639 |
| Thread safe | &check; |
| Interdite sur le serveur ||


