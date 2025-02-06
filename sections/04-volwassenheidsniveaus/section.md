## Volwassenheidsniveaus

Logging kan op verschillende <dfn>volwassenheidsniveaus</dfn>: hoe hoger het volwassenheidsniveaus, hoe meer data er wordt gelogd.

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
De {{Verwerking}} betrof het BSN, Kenteken en APK gekeurd.
Omdat de overige categorien niet werden gebruikt, zijn die ook niet gelogd.
De {{Logregel}} bevat dus "Bezit van auto opgevraagd uit RDW-register: BSN, Kenteken, APK gekeurd, verwerkingsactiviteit ID &lt;&lt;UUID&gt;&gt;"

#### Niveau 3: concrete data

Op het hoogste niveau wordt alle data in de {{Logregel}} gezet.
Dit betekent dat alle relevante categorien uit het {{Register}} met bijbehorende concrete data worden gelogd.
Op dit niveau kan de gehele {{Verwerking}} worden gereconstrueerd.

Voorbeeld referentie: er is informatie over het bezit van een auto opgevraagd.
Dit register bevat informatie zoals BSN, Adres, Kenteken, Lease-contract, APK gekeurd.
De {{Verwerking}} bevat de BSN, Kenteken en APK gekeurd met specifieke data.
De {{Logregel}} bevat dus "Bezit van auto opgevraagd uit RDW-register: BSN 1234, Kenteken 1-ABC-23, APK gekeurd: ja"

### Implicaties van niveaus

TODO
