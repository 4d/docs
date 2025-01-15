---
id: date
title: Fecha
---

Las variables, campos o expresiones de tipo fecha pueden estar comprendidas entre 1/1/100 y 31/12/32.767.

Aunque el modo de representación de fechas por C_DATE permite trabajar con fechas hasta el año 32 767, ciertas operaciones que pasan por el sistema imponen un límite inferior.

**Nota:** en el manual de Referencia del Lenguaje 4D, los parámetros de tipo Fecha en las descripciones de los comandos se denominan Fecha, salvo que se indique lo contrario.

## Constantes literales de tipo fecha

Una constante literal de tipo fecha está rodeada de signos de exclamación (!...!). Una fecha debe estar estructurada utilizando el formato ISO (!AAAA-MM-DD!). Estos son algunos ejemplos de constantes de fechas:

```4d
!1976-01-01!
!2004-09-29!
!2015-12-31!
```

Una fecha null es especificada por _!00-00-00!_.

**Consejo:** el Editor de código incluye un acceso directo para introducir una fecha null. Para escribir una fecha null, introduzca el signo de exclamación (!) y presione Intro.

**Notas:**

- Por razones de compatibilidad, 4D acepta entradas de fecha utilizando el formato del sistema con años de dos dígitos, como !12/04/98!. Se asume que un año de dos dígitos se encuentra en el siglo XX o en el XXI según sea mayor o menor de 30, a menos que esta configuración por defecto se haya cambiado utilizando el comando `SET DEFAULT CENTURY`.
- Si ha marcado la opción "Utilizar la configuración regional del sistema" ( ver Página Métodos), debe utilizar el formato de fecha definido en su sistema. Generalmente, en un entorno estadounidense, las fechas se introducen en la forma mes/día/año, con una barra "/" que separa los valores.

## Operadores de fechas

| Operación         | Sintaxis                              | Devuelve | Expression                                                           | Valor        |
| ----------------- | ------------------------------------- | -------- | -------------------------------------------------------------------- | ------------ |
| Diferencia        | Fecha – Fecha                         | Number   | !2017-01-20! - !2017-01-01!                                          | 19           |
| Adición           | Fecha + Número                        | Fecha    | !2017-01-20! + 9                                                     | !2017-01-29! |
| Resta             | Fecha - Número                        | Fecha    | !2017-01-20! - 9                                                     | !2017-01-11! |
| Igual             | Fecha = Fecha                         | Boolean  | !2017-01-20! - !2017-01-01! =!2017-01-01!                            | True         |
|                   |                                       |          | !2017-01-20! !2017-01-01! =!2017-01-01!                              | False        |
| Desigualdad       | Fecha # Fecha                         | Boolean  | !2017-01-20! !2017-01-20! # !2017-01-01!                             | True         |
|                   |                                       |          | !2017-01-20! !2017-01-20! # !2017-01-20!                             | False        |
| Mayor que         | Date > Date                           | Boolean  | !2017-01-20! > !2017-01-01!                                          | True         |
|                   |                                       |          | !2017-01-20! > !2017-01-20!                                          | False        |
| Menor que         | Date < Date  | Boolean  | !2017-01-20! - !2017-01-01! < !2017-01-20!  | True         |
|                   |                                       |          | !2017-01-20! < !2017-01-20!                 | False        |
| Mayor o igual que | Date >= Date                          | Boolean  | !2017-01-20! >=!2017-01-01!                                          | True         |
|                   |                                       |          | !2017-01-01!>=!2017-01-20!                                           | False        |
| Menor o igual que | Date <= Date | Boolean  | !2017-01-20! - !2017-01-01! <= !2017-01-20! | True         |
|                   |                                       |          | !2017-01-20! <= !2017-01-01!                | False        |
