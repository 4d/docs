---
id: blob
title: BLOB
---

- Un champ, une variable ou une expression de type BLOB (Binary Large OBjects) est une série contiguë d'octets qui peut être traitée comme un seul objet ou dont les octets peuvent être adressés individuellement. Un BLOB peut être vide (longueur nulle) ou contenir jusqu'à 2147483647 octets (2 Go).

> Par défaut, la taille maximale d'un blob dans 4D est de 2 Go, mais cette taille peut être inférieure en fonction de votre OS et l'espace mémoire disponible.

- Lorsque vous travaillez avec un BLOB, il est stocké entièrement en mémoire. Si vous travaillez avec une variable, le BLOB n'existe qu'en mémoire. Si vous travaillez avec un champ de type BLOB, il est chargé en mémoire à partir du disque, comme le reste de l'enregistrement auquel il appartient.
- A l'instar des autres types de champs pouvant contenir une grande quantité de données (comme les champs de type Image), les champs de type BLOB ne sont pas dupliqués en mémoire lorsque vous modifiez un enregistrement. Par conséquent, les résultats renvoyés par `Ancien` et `Modifie` ne sont pas significatifs lorsque ces fonctions sont appliquées à des champs de type BLOB.

## Passage des paramètres, pointeurs et résultats de fonctions

Les BLOBs dans 4D peuvent être passés comme paramètres aux commandes 4D ou aux routines des plug-ins qui attendent un paramètre de type BLOB. Les BLOBs peuvent également être passés aux méthodes que vous créez ou être retournés comme résultats de fonctions.

Pour passer un BLOB à une de vos méthodes, vous pouvez aussi définir un pointeur vers le BLOB et passer le pointeur comme paramètre.

**Exemple :**
```4d
  // Déclarer une variable de type BLOB
 C_BLOB(touteVarBLOB)
  // Le BLOB est passé comme paramètre à une commande 4D
 SET BLOB SIZE(touteVarBLOB;1024*1024)
  // Le BLOB est passé comme paramètre à une routine externe
 $CodeErr:=Faites_Quelque_chose_avec_ce_BLOB(touteVarBLOB)
  // Le BLOB est passé comme paramètre à une méthode qui retourne un BLOB
 C_BLOB(recupBlob)
 recupBlob:=Remplir_Blob(touteVarBLOB)
  // Un pointeur vers le BLOB est passé comme paramètre à une de vos méthodes
 COMPUTE BLOB(->touteVarBLOB)
```
**Note pour les développeurs de plug ins 4D :** Un paramètre de type BLOB se déclare “&O” (la lettre “O” et non le chiffre “0”).

## Opérateur d'assignation

Vous pouvez assigner la valeur d'un BLOB à d'autres BLOBs, comme dans l'exemple suivant.

**Voici un exemple :**
```4d
  // Déclarer deux variables de type BLOB
 C_BLOB(vBlobA;vBlobB)
  // Fixer la taille du premier BLOB à 10Ko
 SET BLOB SIZE(vBlobA;10*1024)
  // Assigner le premier BLOB au second
 vBlobB:=vBlobA
```

En revanche, il n'existe pas d'opérateur pouvant être utilisé avec des BLOB.

## Adresser le contenu d'un BLOB

Chaque octet d'un BLOB peut être adressé individuellement, à l'aide des accolades {...}. Dans un BLOB, les octets sont numérotés de 0 à N-1, N étant la taille du BLOB. Voici un exemple :
```4d
  // Déclarer une variable de type BLOB
 C_BLOB(vBlob)
  // Fixer la taille du BLOB à 256 octets
 SET BLOB SIZE(vBlob;256)
  // La boucle suivante initialise les 256 octets du BLOB à zéro
 Boucle(vOctet;0;Taille BLOB(vBlob)-1)
    vBlob{vOctet}:=0
 Fin de boucle
```
Comme vous pouvez adresser individuellement tous les octets d'un BLOB, vous pouvez littéralement stocker tout ce que vous voulez dans une variable ou un champ de type BLOB.
