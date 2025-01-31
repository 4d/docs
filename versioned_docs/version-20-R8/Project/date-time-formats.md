---
id: date-time-formats
title: Date and Time Formats
---



Throughout your 4D projects, you might need to format date and/or time values according to the specificities of the application, the platform, or the interface.

4D includes a comprehensive list of patterns that you can use to create and apply customized date and time formats in your applications, in addition to default formats. Customized format patterns are supported by the following features:

- the [`String`](https://doc.4d.com/4dv20R/help/command/en/page10.html) command,
- the [`OBJECT SET FORMAT`](https://doc.4d.com/4dv20R/help/command/en/page236.html) and [`OBJECT Get format`](https://doc.4d.com/4dv20R/help/command/en/page894.html) commands,
- the date and time format form object properties, available from the Property list or the [`dateFormat`](../FormObjects/properties_Display.md/#date-format) and [`timeFormat`](../FormObjects/properties_Display.md/#time-format) JSON properties.


## Pattern list

The following table lists all supported patterns for date and time formats.

|Symbol|Meaning|Pattern|Example Output|
|---|---|---|----|
|G|era designator|G, GG, or GGG|AD|
| | |GGGG|Anno Domini|
| | |GGGGG|A|
|y|year|yy|96|
| | |y or yyyy|1996|
|Y|year of "Week of Year"|Y|1997|
|u|extended year|u|4601|
|Q|quarter|Q|2|
| | |QQ|02|
| | |QQQ|Q2|
| | |QQQQ|2nd quarter|
| | |QQQQQ|2|
|q|stand-alone quarter|q|2|
| | |qq|02|
| | |qqq|Q2|
| | |qqqq|2nd quarter|
| | |qqqqq|2|
|M|month in year|M|9|
| | |MM|09|
| | |MMM|Sep|
| | |MMMM|September|
| | |MMMMM|S|
|L|stand-alone month in year|L|9|
| | |LL|09|
| | |LLL|Sep|
| | |LLLL|September|
| | |LLLLL|S|
|w|week of year|w|27|
| | |ww|27|
|d|day in month|d|2|
| | |dd|2|
|D|day of year|D|189|
|E|day of week|E, EE, or EEE|Tue|
| | |EEEE|Tuesday|
| | |EEEEE|T|
| | |EEEEEE|Tu|
|e|local day of week|e|2|
| | |ee|02|
| | |eee|Tue|
| | |eeee|Tuesday|
| | |eeeee|T|
| | |eeeeee|Tu|
|c|stand-alone local day of week|c or cc|2|
| | |ccc|Tue|
| | |cccc|Tuesday|
| | |ccccc|T|
| | |cccccc|Tu|
|a|AM or PM|a, aa, or aaa|PM [abbrev]|
| | |aaaa|PM [wide]|
| | |aaaaa|p|
|b|AM, PM, noon, midnight|b, bb, or bbb|mid.|
| | |bbbb|midnight|
| | |bbbbb|md|
|B|flexible day periods|B, BB, or BBB|at night [abbrev]|
| | |BBBB|at night [wide]|
| | |BBBBB|at night [narrow]|
|h|hour in am/pm (1~12)|h|7|
| | |hh|07|
|H|hour in day (0~23)|H|0|
| | |HH|00|
|K|hour in am/pm (0~11)|K|0|
| | |KK|00|
|k|hour in day (1~24)|k|24|
| | |kk|24|
|m|minute in hour|m|4|
| | |mm|04|
|s|second in minute|s|5|
| | |ss|05|
|X|Time Zone: ISO8601 basic hm?, with Z for 0|X|-08, +0530, Z|
| |Time Zone: ISO8601 basic hm, with Z|XX|-0800, Z|
| |Time Zone: ISO8601 extended hm, with Z|XXX|-08:00, Z|
| |Time Zone: ISO8601 basic hms?, with Z|XXXX|-0800, -075258, Z|
| |Time Zone: ISO8601 extended hms?, with Z|XXXXX|-08:00, -07:52:58, Z|
|x|Time Zone: ISO8601 basic hm?, without Z for 0|x|-08, +0530|
| |Time Zone: ISO8601 basic hm, without Z|xx|-800|
| |Time Zone: ISO8601 extended hm, without Z|xxx|-08:00|
| |Time Zone: ISO8601 basic hms?, without Z|xxxx|-0800, -075258|
| |Time Zone: ISO8601 extended hms?, without Z|xxxxx|-08:00, -07:52:58|
|O|Time Zone: short localized GMT|O|GMT-8|
| |Time Zone: long localized GMT (=ZZZZ)|OOOO|GMT-08:00|
|z|Time Zone: specific non-location|z, zz, or zzz|-0800|
| | |zzzz|GMT-08:00|
| | |zzzzz|-08:00, -07:52:58, Z|
|| | | |
|'|escape for text|'|'|
|' '|two single quotes produce one|' '|' '|



## Exploring patterns


### `y` vs `Y`

`y` is the calendar year, while `Y` is the year based on the week number. For example, if the first days of January 2010 are not week #1, then y = 2010 but Y = 2009 (until the date where the 1st week of 2010 begins).

### `L` (stand-alone) vs `M`

In some languages (Russian, Slovak), the month used alone is different from the month in a date. In "January 10, 2010", "January" is not spelled the same as in "*rendez-vous* in January".

### `e` vs `c`

Same remark as for `L` and `M`: `c` is for a day used alone "every tuesday") and `e` is for a day in a date ("Tuesday January 15, 1951").

### `E` vs `e`

`e` is based on system settings: if the week is defined in the system as starting on a Wednesday, then Wednesday will have the numerical value "1" (or zero) whereas "E" always returns the same value (from 1 to 7 or from 0 to 6).

### Leading zeros

In general, when the number of letters in the formatting string is higher than the expected number, leading zeros are added. Ex: "yyyyyy" would give "001996".

### Localized parts

Some parts of the outputs, such as "midnight" or "Tuesday" are localized, according to regional settings.

For example, for the time `13:25:34`, "B" will display *in the afternoon* on an US system, and *après-midi* on a French system.


### Extra letters

Formatting strings can contain characters not to be interpreted as formatting characters: if they are between "a" and "z" or "A" and "Z", they must be enclosed in single quotes.

For example:

"15:30:00" with pattern "HH 'hours and' mm 'minutes'" produces "15 hours and 30 minutes".

### Starting and ending spaces

Starting and ending spaces in patterns are automatically trimmed in outputs. If you want to add spaces before or after the resulting string, you must enclose them in single quotes.

For example:

" HH : mm : ss " ---> "09 : 10 : 25"
"' 'HH : mm : ss' '" ---> " 09 : 10 : 25 "


## Examples

|Date or time|Pattern|Result|Comments|
|---|---|----|---|
|15/06/2000|"QQQQ"|"2nd quarter"|localized|
|17/03/2001|"D"|"76"|76th day of the year|
|17/03/1954|"w"|"11"|11th week of the year|
|17/03/1954|"eeee"|"Wednesday"|localized|
|15:00:00|"a"|"PM"||
|18:00:00|"K a"|"6 PM"||
|13:30:15|"hh:mm aa O"|"01:30 PM GMT+1"



## See also

See [this blogpost](https://blog.4d.com/tailored-customization-for-dates-and-times) for more information on the custom date and time formats.
