## Volwassenheidsniveaus

Logging kan op verschillende <dfn>Volwassenheidsniveaus</dfn>: hoe hoger het volwassenheidsniveau, hoe meer data er wordt gelogd.

### Definities van niveaus

We maken drie verschillende niveaus op.
Ter verduidelijking van elk niveau gebruiken we een niet-normatief voorbeeld van het opvragen van informatie over een auto.

#### Niveau 1: registerverwijzing

Op het laagste niveau wordt er enkel naar het {{Register}} verwezen.
Dit betekent dat de {{Logregel}} enkel de referentie naar het register bevat.
Hieruit kan worden opgemaakt welke potentiele data is verwerkt, maar hiermee kan niet worden herleid welke data is verwerkt op basis van enkel de Logregel.
Dit kan wel op basis van de verwerkingsactiviteit ID

Voorbeeld referentie: er is informatie over het bezit van een auto opgevraagd.
Dit register bevat informatie zoals BSN, Adres, Kenteken, Lease-contract, APK gekeurd.
Er wordt hier niet verder gespecificeerd welke categorieen van informatie zijn opgevraagd.
De {{Logregel}} bevat dus "Bezit van auto opgevraagd uit RDW-register: verwerkingsactiviteit ID &lt;&lt;UUID&gt;&gt;"

#### Niveau 2: kolomverwijzing

Op dit niveau wordt er zowel naar het betreffende {{Register}} verwezen alsmede de specifieke categorien van data die zijn verwerkt.
Hieruit kan dus worden opgemaakt welke specifieke categorien van data zijn verwerkt, maar kan er niet worden herleid wat de waarde van de data is tijdens het loggen.

Voorbeeld referentie: er is informatie over het bezit van een auto opgevraagd.
Dit register bevat informatie zoals BSN, Adres, Kenteken, Lease-contract, APK gekeurd.
De {{Dataverwerking}} betrof het BSN, Kenteken en APK gekeurd.
Omdat de overige categorien niet werden gebruikt, zijn die ook niet gelogd.
De {{Logregel}} bevat dus "Bezit van auto opgevraagd uit RDW-register: BSN, Kenteken, APK gekeurd, verwerkingsactiviteit ID &lt;&lt;UUID&gt;&gt;"

#### Niveau 3: concrete data

Op het hoogste niveau wordt alle data in de {{Logregel}} gezet.
Dit betekent dat alle relevante categorien uit het {{Register}} met bijbehorende concrete data worden gelogd.
Op dit niveau kan de gehele {{Dataverwerking}} worden gereconstrueerd.

Voorbeeld referentie: er is informatie over het bezit van een auto opgevraagd.
Dit register bevat informatie zoals BSN, Adres, Kenteken, Lease-contract, APK gekeurd.
De {{Dataverwerking}} bevat de BSN, Kenteken en APK gekeurd met specifieke data.
De {{Logregel}} bevat dus "Bezit van auto opgevraagd uit RDW-register: BSN 1234, Kenteken 1-ABC-23, APK gekeurd: ja, verwerkingsactiviteit ID &lt;&lt;UUID&gt;&gt;"

### Implicaties van niveaus

Hoe hoger het niveau, hoe bruikbaarder de data is die uit het {{Logboek}} kan worden opgemaakt.
Echter, de consequenties van een hoger niveau brengen ook lastigere vraagstukken met zich mee omtrent schaalbaarheid en technische haalbaarheid.
Als voor elke {{Dataverwerking}} alle informatie wordt gelogd, dan kan dat problemen opleveren voor de hoeveelheid data en ook of het doenlijk is om de data te verwijderen als de {{Betrokkene}} daar om vraagt.

Tegelijkertijd is het laagste niveau van logging niet per definitie voldoende om de vereiste verantwoordelijkheid af te kunnen leggen.
Dit hangt af van de situatie en de wettelijke bepalingen die verbonden zijn aan een {{Dataverwerking}}.
Daarom is het van belang dat bij elke dataverwerking er wordt gekeken welk niveau van toepassing is, in plaats van een generiek niveau voor alle dataverwerkingen te bepalen.

<p class="note">Op dit moment is de standaard geschikt voor implementaties van volwassenheidsniveau 1.
De uitwerking van volwassenheidsniveau 2 wordt op dit moment uitgeprobeerd in een project van Geonovum waarbij een extensie voor object wordt beschreven.
Volwassenheidsniveau 3 is nog niet aan te raden, omdat dit verder wordt uitgewerkt op basis van de bevindingen voor niveau 2.
