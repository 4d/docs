---
id: branching
title: Structures conditionnelles
---

## Si...Sinon...Fin de si

La syntaxe de la structure conditionnelle `Si...Sinon...Fin de si` est la suivante :

```code4d
 Si(Expression_booléenne)
    instruction(s)
 Sinon
    instruction(s)
 Fin de si
```

A noter que l'élément `Sinon` est optionnel, vous pouvez écrire :

```code4d
 Si(Expression_booléenne)
    instruction(s)
 Fin de si
```

La structure `Si...Sinon...Fin de si` permet à votre méthode de choisir dans une alternative, en fonction du résultat, VRAI ou FAUX, d’un test (une expression booléenne). Si l’expression booléenne est VRAIE, les instructions qui suivent immédiatement le test sont exécutées. Si l’expression booléenne est FAUSSE, les instructions suivant la ligne Sinon sont exécutées. Le `Sinon` est optionnel ; lorsqu’il est omis, c’est la première ligne d’instructions suivant le `Fin de si` (s’il y en a une) qui est exécutée.

A noter que l'expression booléenne est toujours évaluée en totalité. Examinons en particulier le test suivant :

```code4d
 Si(MéthodeA & MéthodeB)
    ...
 Fin de si
```

L'expression n'est VRAIE que si les deux méthodes sont VRAIES. Or, même si *MéthodeA* retourne FAUX, 4D évaluera quand même *MéthodeB*, ce qui représente une perte de temps inutile. Dans ce cas, il est préférable d'utiliser une structure du type :

```code4d
 Si(MéthodeA)
    Si(MéthodeB)
       ...
    Fin de si
 Fin de si
```

Le résultat est équivalent et *MéthodeB* n'est évaluée que si nécessaire.

### Exemple

```code4d
  // Demander à l'utilisateur de saisir un nom
 $Rech:=Demander(Saisissez un nom)
 Si(OK=1)
    CHERCHER([Personnes];[Personnes]Nom=$Rech)
 Sinon
    ALERTE("Vous n'avez pas saisi de nom.")
 Fin de si 
```

**Astuce :** Il n'est pas obligatoire que des instructions soient exécutées dans chaque branche de l'alternative. Lorsque vous développez un algorithme, ou lorsque vous poursuivez un but précis, rien ne vous empêche d'écrire :

```code4d
 Si(Expression_booléenne)
 Sinon
    instruction(s)
 Fin de si
```

ou :

```code4d
 Si(Expression_booléenne)
    instruction(s)
 Sinon
 Fin de si
```

## Au cas ou...Sinon...Fin de cas

La syntaxe de la structure conditionnelle `Au cas ou...Sinon...Fin de cas` est la suivante :

```code4d
 Au cas ou
    :(Expression_booléenne)
       instruction(s)
    :(Expression_booléenne)
       instruction(s)
       .
       .
       .
 
    :(Expression_booléenne)
       instruction(s)
    Sinon
       instruction(s)
 Fin de cas.
       .
       .

    :(Expression_booléenne)
       instruction(s)
    Sinon
       instruction(s)
 Fin de cas
```

A noter que l'élément `Sinon` est optionnel, vous pouvez écrire :

```code4d
 Au cas ou
    :(Expression_booléenne)
       instruction(s)
    :(Expression_booléenne)
       instruction(s)
       .
       .
       .
 
    :(Expression_booléenne)
       instruction(s)
    Sinon
       instruction(s)
 Fin de cas.
       .
       .

    :(Expression_booléenne)
       instruction(s)
 Fin de cas
```

Tout comme la structure `Si...Sinon...Fin de si`, la structure `Au cas ou...Sinon...Fin de cas` permet également à votre méthode de choisir parmi plusieurs séquences d’instructions. A la différence de la structure `Si...Sinon...Fin de si`, la structure `Au cas ou...Sinon...Fin de cas` peut tester un nombre illimité d’expressions booléennes et exécuter la séquence d’instructions correspondant à la valeur VRAI.

Chaque expression booléenne débute par le caractère deux points (`:`). La combinaison de deux points et d’une expression booléenne est appelée un cas. Par exemple, la ligne suivante est un cas :

```code4d
:(bValider=1)
```

Seules les instructions suivant le premier cas VRAI (et ce, jusqu’au cas suivant) seront exécutées. Si aucun des cas n’est VRAI, aucune instruction n’est exécutée (s'il n'y a pas d'élément `Sinon`).

Vous pouvez placer une instruction Sinon après le dernier cas. Si tous les cas sont FAUX, les instructions suivant le `Sinon` seront exécutées.

### Exemple

Cet exemple teste une variable numérique et affiche une boîte de dialogue d’alerte comportant un simple mot :

```code4d
 Au cas ou
    :(vRésult=1) // Teste si le numéro est 1
       ALERTE("Un.") // Si c’est 1, afficher une alerte
    :(vRésult=2) // Teste si le numéro est 2
       ALERTE("Deux.") // Si c’est 2, afficher une alerte
    :(vRésult=3) // Teste si le numéro est 3
       ALERTE("Trois.") // Si c’est 3, afficher une alerte
    Sinon // Si ce n’est ni 1 ni 2 ni 3, afficher une alerte
       ALERTE("Ce n’est ni un, ni deux, ni trois.")
 Fin de cas
```

A titre de comparaison, voici la version avec `Si...Sinon...Fin de si` de la même méthode :

```code4d
 Si(vRésult=1) // Teste si le numéro est 1
    ALERTE("Un.") // Si c’est 1, afficher une alerte
 Sinon
    Si(vRésult=2) // Test si le numéro est 2
       ALERTE("Deux.") // Si c’est 2, afficher une alerte
    Sinon
       Si(vRésult=3) // Teste si le numéro est 3
          ALERTE("Trois.") // Si c’est 3, afficher une alerte
       Sinon // Si ce n’est ni 1, 2 ni 3, afficher l’alerte
          ALERTE("Ce n’est ni un, ni deux, ni trois.")
       Fin de si
    Fin de si
 Fin de si
```

Rappelez-vous qu’avec une structure de type `Au cas ou...Sinon...Fin de cas`, seul le premier cas VRAI rencontré est exécuté. Même si d’autres cas sont VRAIS, seules les instructions suivant le premier cas VRAI seront prises en compte.

Par conséquent, lorsque vous testez dans la même méthode des cas simples et des cas complexes, vous devez placer les cas complexes avant les cas simples, sinon ils ne seront jamais exécutés. Par exemple, si vous souhaitez traiter le cas simple (vRésult=1) et le cas complexe (vRésult=1) & (vDemande#2) et que vous structurez la méthode de la manière suivante : 

```code4d
 Au cas ou
    :(vRésult=1)
       ... //instruction(s)
    :((vRésult=1) & (vDemande#2)) //Les instructions suivant ce cas ne seront jamais exécutées
       ... //instruction(s)
 Fin de cas
```

... les instructions associées au cas complexe ne seront jamais exécutées. En effet, pour que ce cas soit VRAI, ses deux conditions booléennes doivent l’être. Or, la première condition est celle du cas simple situé précédemment. Lorsqu'elle est VRAIE, le cas simple est exécuté et 4D sort de la structure conditionnelle, sans évaluer le cas complexe. Pour que ce type de méthode fonctionne, vous devez écrire :

```code4d
 Au cas ou
    :(vRésult=1) & (vDemande#2) `<-- Les cas complexes doivent toujours être placés en premier
       ... //Instruction(s)
    :(vRésult=1)
       ... //instruction(s)
 Fin de cas
```



**Astuce :** Il n'est pas obligatoire que des instructions soient exécutées dans toutes les alternatives. Lorsque vous développez un algorithme, ou lorsque vous poursuivez un but précis, rien ne vous empêche d'écrire :

```code4d
 Au cas ou
    :(Expression_booléenne)
    :(Expression_booléenne)
      ...

    :(Expression_booléenne)
       instruction(s)
    Sinon
       instruction(s)
 Fin de cas
```

ou :

```code4d
 Au cas ou
    :(Expression_booléenne)
    :(Expression_booléenne)
       instruction(s)
       ...

    :(Expression_booléenne)
       instruction(s)
    Sinon
 Fin de cas
```

ou :

```code4d
 Au cas ou
    Sinon
       instruction(s)
 Fin de cas
```