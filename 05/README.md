> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s3e02-ts-typing-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` TypeScript: Podstawowe typowanie

Napisz funkcję, która pozwoli walidować dane przekazane przez parametry tj. w pierwszym parametrze są przekazywane regułu, w drugim wartości.

Reguły zawierają takie informacje jak:
- typ danych np. 'string', 'number', 'select' (pole jednokrotnego wyboru)
- czy jest wymagane
- treść błędu
- dodatkowe reguły dla poszczególnych typoów:
- - string: min, max - maksymalna i minimalna liczba znaków
- - number: min, max - maksymalna i minimalna liczba
- - select: options - dostępne opcje

Wartości to po prostu tablica obiektów, które zawierają jedynie nazwę pola oraz wartość do sprawdzenia.


Funkcja zwraca pustą tablicę w przypadku poprawnych danych lub treści komunikatów do wyświetlania, ale w formie, która pozwoli przyporządkować komunikat do przekazanej wartości.


&nbsp;
> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-ts-typing-basics)*

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
