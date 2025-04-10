const fs = require('fs');
const path = require('path');

// Chemin vers le dossier aikit/classes
const classesDir = path.join(__dirname, 'docs', 'aikit', 'Classes');

// Fonction pour générer la liste des IDs
function generateAikitClasses() {
  try {
    const files = fs.readdirSync(classesDir);
    const classIds = files
      .filter(file => file.endsWith('.md')) // Filtrer uniquement les fichiers Markdown
      .map(file => `aikit/Classes/${path.basename(file, '.md').toLowerCase()}`); // Générer les IDs en minuscules

    console.log('Liste des IDs générée :');
    console.log(JSON.stringify(classIds, null, 2));
  } catch (error) {
    console.error('Erreur lors de la génération des IDs :', error);
  }
}

generateAikitClasses();