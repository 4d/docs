---
id: version-18 R2 BETA-analysis
title: Page Analyse d'activités
sidebar_label: Page Analyse d'activités
original_id: analysis
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
- **System User**: System name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the session name of the user is displayed.
- **4D User**: 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name. 
- **Values**: Values of fields for the record in the case of addition or modification. The values are separated by “;”. Only values represented in alphanumeric form are displayed.  
    ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Records**: Record number.

Cliquez sur le bouton **Analyser** pour mettre à jour le contenu du fichier d’historique courant de la base sélectionnée (nommé par défaut nomdonnées.journal). Le bouton **Parcourir...** vous permet de sélectionner et d’ouvrir un autre fichier d’historique de la base. Le bouton **Exporter...** vous permet d’exporter le contenu du fichier sous forme de texte.