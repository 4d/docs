---
id: is-license-available
title: Is license available
slug: /commands/is-license-available
displayed_sidebar: docs
---

<!--REF #_command_.Is license available.Syntax-->**Is license available** {( *licença* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is license available.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| licença | Integer | &#8594;  | Testar se o plug-in desejado está disponível |
| Resultado | Boolean | &#8592; | Verdadeiro se o plug-in estiver disponível, senão False |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Is license available.Summary-->O comando Is license available permite conhecer a disponibilidade de um plug-in.<!-- END REF--> É útil, por exemplo, para mostrar ou ocultar funções que necessitam da presença de um plug-in.  
  
O comando Is license available pode ser utilizado de três maneiras diferentes:

* O parâmetro *licença* se omite: neste caso, o comando retorna [False](false.md "False") se a aplicação 4D estiver em modo demonstração.
* Passe no parâmetro *licença* uma da constantes do tema “*Licença disponível*”:  

| Constante              | Tipo          | Valor     |  
| ---------------------- | ------------- | --------- |  
| 4D Client SOAP license | Inteiro longo | 808465465 |  
| 4D Client Web license  | Inteiro longo | 808465209 |  
| 4D for OCI license     | Inteiro longo | 808465208 |  
| 4D ODBC Pro license    | Inteiro longo | 808464946 |  
| 4D REST Test license   | Inteiro longo | 808465719 |  
| 4D SOAP license        | Inteiro longo | 808465464 |  
| 4D View license        | Inteiro longo | 808465207 |  
| 4D Web license         | Inteiro longo | 808464945 |  
| 4D Write license       | Inteiro longo | 808464697 |

 Neste caso, o comando retorna [True](true.md "True") se o plug-in correspondente tiver uma licença disponível. O comando leva em consideração as licenças realizadas em modo Desenho ou através do comando [SET PLUGIN ACCESS](set-plugin-access.md).  
  
 Is license available retorna [False](false.md "False") se o plug-in estiver funcionando em modo demonstração.

* Passe no parâmetro licença o número de identificação do recurso “4BNX” do plug-in. Neste caso, o comando se comporta como foi indicado anteriormente.

#### Ver também 

[CHANGE LICENSES](change-licenses.md)  
[License info](license-info.md)  
[Get plugin access](get-plugin-access.md)  
[PLUGIN LIST](plugin-list.md)  
[SET PLUGIN ACCESS](set-plugin-access.md)  