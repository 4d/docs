---
id: developing
title: Desarrollar un proyecto
---

## Herramientas de desarrollo

Las bases proyectos 4D se crean localmente, utilizando la aplicación **4D Developer**. Para abrir un proyecto desde 4D Developer, seleccione el archivo principal del proyecto, llamado *databaseName.4DProject* (ver [Arquitectura de un proyecto 4D](architecture.md)). Tenga en cuenta que también puede trabajar con cualquier editor de texto, ya que la mayoría de los archivos del proyecto 4D son archivos texto. El acceso simultáneo a los archivos se gestiona a través de un gestor de acceso a archivos (ver más adelante).

4D Server puede abrir los archivos *nombre de la base de datos.4DProject* para realizar pruebas: las máquinas 4D remotas pueden conectarse y utilizar la base de datos, pero todos los archivos de la estructura de la base de datos son de sólo lectura.

El desarrollo multiusuario se gestiona a través de herramientas estándar de control de versión estándar, que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificaciones.

## Acceso al archivo de proyecto

Cuando trabaja en un proyecto en 4D Developer, puede utilizar los editores integrados de 4D para crear, modificar o guardar elementos de la estructura, los métodos, los formularios, etc. Dado que los editores utilizan archivos en el disco, podrían producirse conflictos si se modifica el mismo archivo o incluso se borra desde diferentes ubicaciones. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations.

4D Developer incluye un gestor de acceso a los archivos para controlar los accesos simultáneos:

- if an open file which is read-only at the OS level, a locked icon is displayed in the editor: ![](../assets/en/Project/lockicon.png)
- if an open file is edited concurrently from different locations, 4D displays an alert dialog box when trying to save the changes:![](../assets/en/Project/projectReload.png)
  - **Sí**: ignorar los cambios del editor y volver a cargar
  - **No**: guardar los cambios y sobrescribir la otra versión
  - **Cancelar**: no guardar

Esta funcionalidad está habilitada para todos los editores integrados:

- Editor de estructura
- Editor de formularios
- Editor de método
- Editor de parámetros
- Editor de la caja de herramientas
