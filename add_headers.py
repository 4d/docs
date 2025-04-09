import os

# Chemin du dossier contenant les fichiers Markdown
folder_path = r"c:\Github\docs\docs\aikit\classes"

def generate_header(file_name, title):
    # Génère le header avec id et title
    id_value = file_name.lower().replace(" ", "-").replace(".md", "")
    return f"---\nid: {id_value}\ntitle: {title}\n---\n\n"

def process_markdown_files(folder_path):
    for file_name in os.listdir(folder_path):
        if file_name.endswith(".md"):
            file_path = os.path.join(folder_path, file_name)
            
            with open(file_path, "r", encoding="utf-8") as file:
                lines = file.readlines()
            
            # Trouver le premier titre (#)
            title = None
            for line in lines:
                if line.startswith("# "):  # Rechercher un titre de niveau 1
                    title = line[2:].strip()
                    break
            
            if title:
                # Générer le header
                header = generate_header(file_name, title)
                
                # Vérifier si le header existe déjà
                if not lines[0].startswith("---"):
                    # Ajouter le header au début du fichier
                    with open(file_path, "w", encoding="utf-8") as file:
                        file.write(header + "".join(lines))
                    print(f"Header ajouté dans : {file_name}")
                else:
                    print(f"Header déjà présent dans : {file_name}")
            else:
                print(f"Aucun titre trouvé dans : {file_name}")

# Exécuter le script
process_markdown_files(folder_path)