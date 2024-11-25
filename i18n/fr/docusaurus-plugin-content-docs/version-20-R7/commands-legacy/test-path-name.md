---
id: test-path-name
title: Test path name
slug: /commands/test-path-name
displayed_sidebar: docs
---

<!--REF #_command_.Test path name.Syntax-->**Test path name** ( *cheminAccès* ) : Integer<!-- END REF-->
<!--REF #_command_.Test path name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminAccès | Text | &#8594;  | Chemin d'accès à un dossier ou un document |
| Résultat | Integer | &#8592; | 1= cheminAccès est un document existant 0 = cheminAccès est un dossier existant <0 = chemin d'accès invalide, code d'erreur du gestionnaire de fichiers du système |

<!-- END REF-->

#### Description 

<!--REF #_command_.Test path name.Summary-->La fonction **Test path name** vérifie si le document ou le dossier dont vous avez passé le chemin d'accès et le nom dans *cheminAccès* est présent sur le disque.<!-- END REF--> Vous pouvez passer un chemin d'accès relatif ou absolu, exprimé dans la syntaxe du système courant. 

Si un document est trouvé, **Test path name** retourne 1\. Si un dossier est trouvé, **Test path name** retourne 0.

4D propose les constantes prédéfinies suivantes :

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Is a document | Entier long | 1      |
| Is a folder   | Entier long | 0      |

Si aucun document ou dossier n'est trouvé, **Test path name** retourne une valeur négative (par exemple -43 pour "Fichier non trouvé").

#### Exemple 

L'exemple suivant teste la présence du document “Journal” dans le dossier de la base et le crée s'il n'existe pas :

```4d
 If(Test path name("Journal") # Is a document)
    $vhDocRef:=Create document("Journal")
    If(OK=1)
       CLOSE DOCUMENT($vhDocRef)
    End if
 End if
```

#### Voir aussi 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Create document](create-document.md)  
[CREATE FOLDER](create-folder.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  