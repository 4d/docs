---
id: current-method-name
title: Current method name
slug: /commands/current-method-name
displayed_sidebar: docs
---

<!--REF #_command_.Current method name.Syntax-->**Current method name**  : Text<!-- END REF-->
<!--REF #_command_.Current method name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nombre del método de llamada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Current method name.Summary-->El comando Current method name devuelve el nombre del método en el cual se llama.<!-- END REF--> Este comando es útil para depuración de métodos genéricos.

En función del tipo de método llamado, la cadena devuelta puede ser:

| **Método de llamada**                           | **Cadena devuelta**                                    |
| ----------------------------------------------- | ------------------------------------------------------ |
| Método base                                     | NomMetodo                                              |
| Trigger                                         | Trigger en \[NomTabla\]                                |
| Método proyecto                                 | NomMetodo                                              |
| Método formulario tabla                         | \[NomTabla\].NomFormulario                             |
| Método formulario proyecto                      | NomFormulario                                          |
| Método objeto formulario tabla                  | \[NomTabla\]NomFormulario.NomObjeto                    |
| Método objeto formulario proyecto               | NomFormulario.NomObjeto                                |
| Clase constructor                               | Constructor:NomClase                                   |
| Clase función                                   | NomClase.NomFuncion                                    |
| Método proyecto de componente                   | NomMetodo                                              |
| Método formulario proyecto de componente        | NomFormulario (NomComponente)                          |
| Método objeto formulario proyecto de componente | NomFormulario (NomComponente).NomObjeto(NomComponente) |

Este comando no puede llamarse desde una fórmula 4D.

**Nota:** para que este comando funcione en modo compilado, la opción **Control de ejecución** no debe ser desactivada.
