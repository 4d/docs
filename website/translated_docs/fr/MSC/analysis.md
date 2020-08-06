---
id: analysis
title: Page Analyse d'activités
sidebar_label: Page Analyse d'activités
---

La page Analyse d'activités du CSM permet de visualiser le contenu du fichier d’historique courant. Cette fonction est utile pour analyser l’utilisation d’une base de données ou détecter la ou les opération(s) à l’origine d’erreurs ou de dysfonctionnements. Dans le cadre d’une base de données exploitée en client-serveur, elle permet de vérifier les opérations effectuées par chaque poste client.
> Il est également possible de revenir en arrière parmi les opérations effectuées sur les données de la base. Pour plus d’informations sur ce point, reportez-vous à la section [Page Retour](rollback.md) arrière.

![](assets/fr/MSC/MSC_analysis.png)

Chaque opération élémentaire enregistrée dans le fichier d’historique apparaît sous forme d’une ligne. Les colonnes fournissent diverses informations concernant l’opération. Vous pouvez réorganiser les colonnes comme vous le souhaitez en cliquant sur leur en-tête.

Les informations affichées permettent d’identifier la source et le contexte de chaque opération :

- **Opération** : numéro de séquence de l’opération dans le fichier d’historique.
- **Action** : type d’opération effectuée. Cette colonne peut contenir les opérations suivantes :
    - Ouverture du fichier de données : ouverture d’un fichier de données.
    - Fermeture du fichier de données : fermeture du fichier de données ouvert.
    - Création d’un contexte : création d’un process définissant un contexte d’exécution.
    - Fermeture d’un contexte : fermeture d’un process.
    - Ajout : création et stockage d’un enregistrement.
    - Ajout d’un BLOB : stockage d’un BLOB dans un champ BLOB.
    - Suppression : suppression d’un enregistrement.
    - Modification : modification d’un enregistrement.
    - Début de transaction : transaction démarrée.
    - Validation de transaction : transaction validée.
    - Annulation de transaction : transaction annulée.
    - Update context: Change in extra data (e.g. a call to `CHANGE CURRENT USER` or `SET USER ALIAS`).

- **Table** : table à laquelle appartient l’enregistrement ajouté/supprimé/modifié ou le BLOB.
- **Clé primaire/BLOB** : contenu de la clé primaire de l'enregistrement (lorsque la clé primaire est composée de plusieurs champs, les valeurs sont séparées par des points-virgules), ou numéro de séquence du BLOB impliqué dans l’opération.
- **Process** : numéro interne du process dans lequel l’opération a été effectuée. Ce numéro interne correspond au contexte de l’opération. Taille : taille en octets des données traitées par l’opération.
- **Taille** : taille (en octets) des données traitées par l’opération.
- **Date et Heure** : date et heure à laquelle l’opération a été effectuée.
- **System User**: System name of the user that performed the operation. En version client-serveur, il s’agit du nom de la machine du poste client. En version monoposte, le nom de session de l’utilisateur s'affiche.
- **4D User**: 4D user name of the user that performed the operation. Si un alias est défini pour l'utilisateur, l'alias s'affiche à la place du nom d'utilisateur 4D.
- **Valeurs** : valeurs des champs de l’enregistrement en cas d’ajout ou de modification. Les valeurs sont séparées par des “;”. Seules les valeurs représentables sous forme alphanumérique sont affichées.  
  ***Note** : Si la base est chiffrée et si aucune clé de données valide correspondant au fichier d'historique n'a été fournie, les valeurs chiffrées ne sont pas affichées dans cette colonne.*
- **Enregistrements** : Numéro de l’enregistrement.

Cliquez sur le bouton **Analyser** pour mettre à jour le contenu du fichier d’historique courant de la base sélectionnée (nommé par défaut nomdonnées.journal). Le bouton **Parcourir...** vous permet de sélectionner et d’ouvrir un autre fichier d’historique de la base. Le bouton **Exporter...** vous permet d’exporter le contenu du fichier sous forme de texte.


