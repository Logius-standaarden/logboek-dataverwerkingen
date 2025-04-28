# Componenten

## Applicatie

Een {{Applicatie}} is een softwarecomponent of groep van softwarecomponenten waarmee een Dataverwerking wordt uitgevoerd. Een Applicatie kan in allerlei vormen voorkomen. Voor de architectuur is niet relevant welke vorm de Applicatie heeft, het is slechts relevant dat dit de component is waar een Dataverwerking wordt uitgevoerd.

In een Applicatie is de context van de Dataverwerking bekend, zoals welke Verwerkingsactiviteit wordt uitgevoerd met de Dataverwerking. Het is dan ook de Applicatie die het loggen van de Dataverwerking initiëert.

## Logboek

Een {{Logboek}} is een Applicatie met een specifieke rol in de context van deze standaard. In het Logboek worden Dataverwerkingen gelogd.

Dataverwerkingen in het Logboek zelf worden *niet* gelogd in een Logboek Dataverwerkingen, dit zou een oneindige recursiviteit veroorzaken.

## Register

Een {{Register}} bevat statische informatie over Dataverwerkingen. Elk record in een Register heeft een unieke identificatiecode waarmee de Verwerkingsactiviteit kan worden aangeduid. Deze identificatiecode wordt gebruikt om vanuit een Logregel te linken naar aanvullende informatie in een Register.

Het Register kan een Applicatie zijn, in dat geval is het een Applicatie met een specifieke rol in de context van deze standaard. Eventueel kan het ook een Register in de vorm van een document zijn.

Dataverwerkingen in het Register worden gelogd in een Logboek Dataverwerkingen.

Voor alle Dataverwerkingen waarbij persoonsdata worden verwerkt is wettelijk geregeld dat de Verwerkingsactiviteiten moeten worden beschreven in het zogenaamde Register van Verwerkingsactiviteiten (AVG art. 30). Dit Register wordt verondersteld aanwezig te zijn in iedere organisatie die de standaard Logboek Dataverwerkingen toepast.

Verwerkingsactiviteiten waarin geen persoonsdata worden verwerkt staan niet verplicht in het Register van Verwerkingsactiviteiten. De standaard laat ruimte om dit op te lossen naar eigen voorkeur:

* In het bestaande Register ook Verwerkingsactiviteiten opnemen zonder persoonsdata, al is dit niet wettelijk verplicht
* Zelf een ander Register opzetten met gelijke interface maar specifiek voor Verwerkingsactiviteiten zonder persoonsdata

Het is daarnaast ook mogelijk om Registers te gebruiken met heel andere statische informatie die meer context geeft over een Logregel, bijv. informatie over de gebruikte beslisregels of van toepassing zijnde normen. Dit wordt niet verder uitgewerkt.
