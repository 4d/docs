---
id: developing
title: Developing a project
---

## Herramientas de desarrollo


Las bases proyectos 4D se crean localmente, utilizando la aplicación **4D Developer**. Para abrir un proyecto desde 4D Developer, seleccione el archivo principal del proyecto, llamado *databaseName.4DProject* (ver [Arquitectura de un proyecto 4D](architecture.md)). Tenga en cuenta que también puede trabajar con cualquier editor de texto, ya que la mayoría de los archivos del proyecto 4D son archivos texto. Concurrent file access is handled via a file access manager (see below).

4D Server puede abrir los archivos *nombre de la base de datos.4DProject* para realizar pruebas: las máquinas 4D remotas pueden conectarse y utilizar la base de datos, pero todos los archivos de la estructura de la base de datos son de sólo lectura.

El desarrollo multiusuario se gestiona a través de herramientas estándar de control de versión estándar, que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificaciones.



## Acceso al archivo de proyecto

Cuando trabaja en un proyecto en 4D Developer, puede utilizar los editores integrados de 4D para crear, modificar o guardar elementos de la estructura, los métodos, los formularios, etc. Since the editors use files on the disk, potential conflicts could happen if the same file is modified or even deleted from different locations. For example, if the same method is edited in a method editor window *and* in a text editor, saving both modifications will result in a conflict.

4D Developer incluye un gestor de acceso a los archivos para controlar los accesos simultáneos:

- si un archivo abierto que es de sólo lectura a nivel del sistema operativo, se muestra un icono de bloqueo en el editor:   
  ![](assets/en/Project/lockicon.png)
- si un archivo abierto se edita simultáneamente desde diferentes ubicaciones, 4D muestra una caja de diálogo de alerta al intentar guardar los cambios: ![](assets/en/Project/projectReload.png)
    - **Sí**: ignorar los cambios del editor y volver a cargar
    - **No**: save changes and overwrite the other version
    - **Cancel**: do not save

Esta funcionalidad está habilitada para todos los editores integrados:

- Editor de estructura
- Editor de formularios
- Method editor
- Editor de parámetros
- Toolbox editor
