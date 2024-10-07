---
id: metodo-base-on-drop
title: Metodo base On Drop
slug: /commands/metodo-base-on-drop
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Drop.Syntax-->**Método base On Drop**<!-- END REF-->
<!--REF #_command_.Metodo base On Drop.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.Metodo base On Drop.Summary-->El Método base On Drop está disponible en aplicaciones 4D locales o remotas.<!-- END REF-->

Este método de base se ejecuta automáticamente en el caso de soltar objetos en la aplicación 4D fuera de un contexto formulario o dialogo. Dependiendo de la plataforma y del tipo de aplicación, se soportan diferentes tipos de soltar:

| **Acción**                                         | **Plataforma(s)**   | **Comentario**                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Soltar en un área vacía de la ventana MDI          | Windows             | No disponible cuando la base se ejecuta en modo SDI ya que no hay ninguna ventana MDI en este contexto (consulte la sección *Modo SDI en Windows*).                                                                                                                                                             |
| Soltar en el icono 4D en el Dock                   | macOS               |                                                                                                                                                                                                                                                                                                                 |
| Soltar en el icono 4D en el escritorio del sistema | Windows(\*) y macOS | **Método base On Drop** se llama únicamente, si la aplicación ya ha sido lanzada, excepto en el caso de las aplicaciones fusionadas con 4D Desktop. En este caso, el método base se llama incluso cuando la base no ha sido lanzada. Esto significa que es posible definir firmas de documentos personalizadas. |

(\*) No compatible con 4D Developer 64 bits en Windows porque esta acción inicia una nueva instancia de aplicación (funcionalidad del sistema).

Bajo Mac OS, debe presionar las teclas **Opción**+**Comando** al soltar para que se llame el método de base. 

#### Ejemplo 

Este ejemplo puede ser utilizado para abrir un documento 4D Write que fue soltado fuera de un formulario:   
  
```4d
  //Método base On Drop
 archivoSoltado:=Get file from pasteboard(1)
 If(Position(".4W7";droppedFile)=Length(archivoSoltado)-3)
    areaExterna:=Open external window(100;100;500;500;0;archivoSoltado;"_4D Write")
    WR OPEN DOCUMENT(areaExterna;archivoSoltado)
 End if
```

#### Ver también 

*Arrastrar y soltar*  