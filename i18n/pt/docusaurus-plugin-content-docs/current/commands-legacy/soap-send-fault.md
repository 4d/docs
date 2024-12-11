---
id: soap-send-fault
title: SOAP SEND FAULT
slug: /commands/soap-send-fault
displayed_sidebar: docs
---

<!--REF #_command_.SOAP SEND FAULT.Syntax-->**SOAP SEND FAULT** ( *tipoErro* ; *descriçao* )<!-- END REF-->
<!--REF #_command_.SOAP SEND FAULT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoErro | Integer | &#8594;  | 1 = Erro cliente; 2= erro Servidor |
| descriçao | Text | &#8594;  | Descrição do erro a enviar ao cliente SOAP |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SOAP SEND FAULT.Summary-->O comando SOAP SEND FAULT permite devolver um erro a um cliente SOAP indicando a origem do erro: cliente ou servidor.<!-- END REF--> Este comando permite indicar um erro a um cliente sem ter que devolver um resultado.  

Por exemplo, um erro do lado do cliente pode ser detectado quando publica um serviço web “Raiz\_quadrada” e um cliente envia uma petição com um número negativo; pode utilizar este comando com o objetivo de indicar ao cliente que se necessita um valor positivo.  
  
Um erro possível do lado do servidor poderia ser por exemplo, falta de memória durante a execução do método.  
  
Passe o origem do erro em *tipoErro*. Pode utilizar as seguintes constantes predefinidas, que ficam no tema *Serviços Web (Servidor)*.  
  
| Constante         | Tipo          | Valor |
| ----------------- | ------------- | ----- |
| SOAP client fault | Inteiro longo | 1     |
| SOAP server fault | Inteiro longo | 2     |
  
  
Passe em *descriçao* a descrição do erro. Se a implementação do cliente for correta, o erro pode ser processado.

#### Exemplo 

Regresando ao exemplo do serviço Web “Raiz\_quadrada” da descrição do comando, a instrução abaixo pode ser utilizada para processar petições con números negativos: 

```4d
 SEND SOAP FAULT(SOAP client fault;"Valores positivos exigidos")
```

#### Ver também 

[SOAP DECLARATION](soap-declaration.md)  
[SOAP get info](soap-get-info.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 781 |
| Thread-seguro | &check; |
| Proibido no servidor ||


