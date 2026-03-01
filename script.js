// Comprehensive Toki Pona Dictionary
const tokiPonaDictionary = {
    // Core words (nimi pu - official 120 words from Toki Pona: The Language of Good)
    'a': { en: 'ah, ha, uh, oh, ooh, aw, well (emotion/emphasis)', pl: 'ah, och (emocja/nacisk)', es: 'ah, oh', de: 'ah, oh', fr: 'ah, oh' },
    'akesi': { en: 'reptile, amphibian', pl: 'gad, płaz', es: 'reptil, anfibio', de: 'Reptil, Amphibie', fr: 'reptile, amphibien' },
    'ala': { en: 'no, not, zero, nothing', pl: 'nie, zero, nic', es: 'no, nada, cero', de: 'nein, nicht, null', fr: 'non, pas, zéro' },
    'alasa': { en: 'hunt, forage, search', pl: 'polować, szukać', es: 'cazar, buscar', de: 'jagen, suchen', fr: 'chasser, chercher' },
    'ale': { en: 'all, every, universe', pl: 'wszystko, wszyscy, wszechświat', es: 'todo, universo', de: 'alle, alles, Universum', fr: 'tout, univers' },
    'ali': { en: 'all, every, universe', pl: 'wszystko, wszyscy, wszechświat', es: 'todo, universo', de: 'alle, alles, Universum', fr: 'tout, univers' },
    'anpa': { en: 'bottom, lower, humble', pl: 'dół, niski, pokorny', es: 'abajo, bajo, humilde', de: 'unten, niedrig, bescheiden', fr: 'bas, inférieur, humble' },
    'ante': { en: 'different, other, change', pl: 'inny, zmiana', es: 'diferente, otro, cambiar', de: 'anders, verschieden, ändern', fr: 'différent, autre, changer' },
    'anu': { en: 'or', pl: 'lub, czy', es: 'o', de: 'oder', fr: 'ou' },
    'awen': { en: 'stay, keep, remain, continue', pl: 'zostać, zachować, kontynuować', es: 'quedarse, mantener', de: 'bleiben, behalten', fr: 'rester, garder' },
    'e': { en: '(direct object marker)', pl: '(znacznik dopełnienia)', es: '(marca de objeto directo)', de: '(Objektmarkierer)', fr: '(marqueur d\'objet)' },
    'en': { en: 'and', pl: 'i', es: 'y', de: 'und', fr: 'et' },
    'esun': { en: 'market, shop, trade, buy, sell', pl: 'sklep, handel, kupować, sprzedawać', es: 'mercado, tienda, comercio', de: 'Markt, Geschäft, Handel', fr: 'marché, magasin, commerce' },
    'ijo': { en: 'thing, object, matter', pl: 'rzecz, obiekt, sprawa', es: 'cosa, objeto', de: 'Ding, Objekt, Sache', fr: 'chose, objet' },
    'ike': { en: 'bad, evil, wrong, negative', pl: 'zły, źle, negatywny', es: 'malo, malvado, negativo', de: 'schlecht, böse, falsch', fr: 'mauvais, mal, négatif' },
    'ilo': { en: 'tool, device, machine', pl: 'narzędzie, urządzenie, maszyna', es: 'herramienta, dispositivo', de: 'Werkzeug, Gerät, Maschine', fr: 'outil, appareil, machine' },
    'insa': { en: 'inside, inner, center', pl: 'wewnątrz, centrum', es: 'dentro, interior, centro', de: 'innen, Inneres, Zentrum', fr: 'intérieur, centre' },
    'jaki': { en: 'dirty, gross, toxic', pl: 'brudny, obrzydliwy, toksyczny', es: 'sucio, asqueroso, tóxico', de: 'schmutzig, eklig, giftig', fr: 'sale, dégoûtant, toxique' },
    'jan': { en: 'person, people, human', pl: 'osoba, ludzie, człowiek', es: 'persona, gente, humano', de: 'Person, Mensch, Leute', fr: 'personne, gens, humain' },
    'jelo': { en: 'yellow, light green', pl: 'żółty, jasnozielony', es: 'amarillo, verde claro', de: 'gelb, hellgrün', fr: 'jaune, vert clair' },
    'jo': { en: 'have, contain, hold', pl: 'mieć, zawierać, trzymać', es: 'tener, contener', de: 'haben, enthalten, halten', fr: 'avoir, contenir, tenir' },
    'kala': { en: 'fish, sea creature', pl: 'ryba, stworzenie morskie', es: 'pez, criatura marina', de: 'Fisch, Meerestier', fr: 'poisson, créature marine' },
    'kalama': { en: 'sound, noise, make sound', pl: 'dźwięk, hałas, wydawać dźwięk', es: 'sonido, ruido, hacer sonido', de: 'Geräusch, Lärm, Ton machen', fr: 'son, bruit, faire du bruit' },
    'kama': { en: 'come, arrive, become, happen', pl: 'przyjść, stać się, wydarzyć się', es: 'venir, llegar, convertirse', de: 'kommen, ankommen, werden', fr: 'venir, arriver, devenir' },
    'kasi': { en: 'plant, vegetation, herb', pl: 'roślina, roślinność, zioło', es: 'planta, vegetación, hierba', de: 'Pflanze, Vegetation, Kraut', fr: 'plante, végétation, herbe' },
    'ken': { en: 'can, able, possible, may', pl: 'móc, możliwy, może', es: 'poder, posible', de: 'können, möglich', fr: 'pouvoir, possible' },
    'kepeken': { en: 'use, with, by means of', pl: 'używać, z, za pomocą', es: 'usar, con, por medio de', de: 'benutzen, mit, mittels', fr: 'utiliser, avec, au moyen de' },
    'kili': { en: 'fruit, vegetable, mushroom', pl: 'owoc, warzywo, grzyb', es: 'fruta, verdura, hongo', de: 'Frucht, Gemüse, Pilz', fr: 'fruit, légume, champignon' },
    'kiwen': { en: 'hard, solid, stone, metal', pl: 'twardy, stały, kamień, metal', es: 'duro, sólido, piedra, metal', de: 'hart, fest, Stein, Metall', fr: 'dur, solide, pierre, métal' },
    'ko': { en: 'semi-solid, paste, powder', pl: 'półstały, pasta, proszek', es: 'semi-sólido, pasta, polvo', de: 'halbfest, Paste, Pulver', fr: 'semi-solide, pâte, poudre' },
    'kon': { en: 'air, spirit, essence, soul', pl: 'powietrze, duch, esencja, dusza', es: 'aire, espíritu, esencia, alma', de: 'Luft, Geist, Essenz, Seele', fr: 'air, esprit, essence, âme' },
    'kule': { en: 'color, colorful, paint', pl: 'kolor, kolorowy, malować', es: 'color, colorido, pintar', de: 'Farbe, bunt, malen', fr: 'couleur, coloré, peindre' },
    'kulupu': { en: 'group, community, society', pl: 'grupa, społeczność, społeczeństwo', es: 'grupo, comunidad, sociedad', de: 'Gruppe, Gemeinschaft, Gesellschaft', fr: 'groupe, communauté, société' },
    'kute': { en: 'hear, listen, ear', pl: 'słyszeć, słuchać, ucho', es: 'oír, escuchar, oreja', de: 'hören, zuhören, Ohr', fr: 'entendre, écouter, oreille' },
    'la': { en: '(context marker: if, when)', pl: '(znacznik kontekstu: jeśli, gdy)', es: '(marcador de contexto: si, cuando)', de: '(Kontextmarkierer: wenn, falls)', fr: '(marqueur de contexte: si, quand)' },
    'lape': { en: 'sleep, rest', pl: 'spać, odpoczywać', es: 'dormir, descansar', de: 'schlafen, ruhen', fr: 'dormir, se reposer' },
    'laso': { en: 'blue, green', pl: 'niebieski, zielony', es: 'azul, verde', de: 'blau, grün', fr: 'bleu, vert' },
    'lawa': { en: 'head, control, lead, rule', pl: 'głowa, kontrolować, prowadzić, rządzić', es: 'cabeza, controlar, dirigir', de: 'Kopf, kontrollieren, führen', fr: 'tête, contrôler, diriger' },
    'len': { en: 'cloth, clothing, fabric, cover', pl: 'tkanina, ubranie, okrycie', es: 'tela, ropa, cubrir', de: 'Stoff, Kleidung, bedecken', fr: 'tissu, vêtement, couvrir' },
    'lete': { en: 'cold, cool, freeze', pl: 'zimny, chłodny, zamrażać', es: 'frío, enfriar, congelar', de: 'kalt, kühl, frieren', fr: 'froid, frais, geler' },
    'li': { en: '(predicate marker)', pl: '(znacznik orzeczenia)', es: '(marcador de predicado)', de: '(Prädikatmarkierer)', fr: '(marqueur de prédicat)' },
    'lili': { en: 'small, little, few, young', pl: 'mały, niewielki, kilka, młody', es: 'pequeño, poco, joven', de: 'klein, wenig, jung', fr: 'petit, peu, jeune' },
    'linja': { en: 'line, thread, connection', pl: 'linia, nić, połączenie', es: 'línea, hilo, conexión', de: 'Linie, Faden, Verbindung', fr: 'ligne, fil, connexion' },
    'lipu': { en: 'paper, document, book, website', pl: 'papier, dokument, książka, strona', es: 'papel, documento, libro, sitio web', de: 'Papier, Dokument, Buch, Website', fr: 'papier, document, livre, site web' },
    'loje': { en: 'red, reddish', pl: 'czerwony, czerwonawy', es: 'rojo, rojizo', de: 'rot, rötlich', fr: 'rouge, rougeâtre' },
    'lon': { en: 'exist, be at, in, on, true', pl: 'istnieć, być w, na, prawdziwy', es: 'existir, estar en, verdadero', de: 'existieren, sein in/auf, wahr', fr: 'exister, être à/dans, vrai' },
    'luka': { en: 'hand, arm, five', pl: 'ręka, ramię, pięć', es: 'mano, brazo, cinco', de: 'Hand, Arm, fünf', fr: 'main, bras, cinq' },
    'lukin': { en: 'see, look, watch, read', pl: 'widzieć, patrzeć, oglądać, czytać', es: 'ver, mirar, leer', de: 'sehen, schauen, lesen', fr: 'voir, regarder, lire' },
    'lupa': { en: 'hole, door, window, opening', pl: 'dziura, drzwi, okno, otwór', es: 'agujero, puerta, ventana', de: 'Loch, Tür, Fenster, Öffnung', fr: 'trou, porte, fenêtre, ouverture' },
    'ma': { en: 'land, earth, country, soil', pl: 'ziemia, kraj, gleba', es: 'tierra, país, suelo', de: 'Land, Erde, Boden', fr: 'terre, pays, sol' },
    'mama': { en: 'parent, mother, father, creator', pl: 'rodzic, matka, ojciec, twórca', es: 'padre, madre, creador', de: 'Elternteil, Mutter, Vater, Schöpfer', fr: 'parent, mère, père, créateur' },
    'mani': { en: 'money, wealth, currency', pl: 'pieniądze, bogactwo, waluta', es: 'dinero, riqueza, moneda', de: 'Geld, Reichtum, Währung', fr: 'argent, richesse, monnaie' },
    'meli': { en: 'woman, female, wife', pl: 'kobieta, żona', es: 'mujer, esposa', de: 'Frau, weiblich, Ehefrau', fr: 'femme, épouse' },
    'mi': { en: 'I, me, we, us', pl: 'ja, my', es: 'yo, nosotros', de: 'ich, wir', fr: 'je, nous' },
    'mije': { en: 'man, male, husband', pl: 'mężczyzna, mąż', es: 'hombre, esposo', de: 'Mann, männlich, Ehemann', fr: 'homme, mari' },
    'moku': { en: 'eat, drink, food, consume', pl: 'jeść, pić, jedzenie, spożywać', es: 'comer, beber, comida', de: 'essen, trinken, Essen', fr: 'manger, boire, nourriture' },
    'moli': { en: 'death, die, kill, dead', pl: 'śmierć, umierać, zabijać, martwy', es: 'muerte, morir, matar', de: 'Tod, sterben, töten', fr: 'mort, mourir, tuer' },
    'monsi': { en: 'back, rear, behind', pl: 'tył, z tyłu', es: 'espalda, atrás, detrás', de: 'Rücken, hinten', fr: 'dos, arrière, derrière' },
    'mu': { en: 'animal sound', pl: 'dźwięk zwierzęcia', es: 'sonido animal', de: 'Tiergeräusch', fr: 'son d\'animal' },
    'mun': { en: 'moon, star, celestial object', pl: 'księżyc, gwiazda, obiekt niebieski', es: 'luna, estrella, objeto celeste', de: 'Mond, Stern, Himmelskörper', fr: 'lune, étoile, objet céleste' },
    'musi': { en: 'fun, play, game, entertaining', pl: 'zabawa, grać, gra, zabawny', es: 'diversión, jugar, juego', de: 'Spaß, Spiel, unterhaltsam', fr: 'amusement, jouer, jeu' },
    'mute': { en: 'many, multiple, more, very', pl: 'wiele, wielokrotny, więcej, bardzo', es: 'muchos, múltiple, más, muy', de: 'viele, mehrere, mehr, sehr', fr: 'beaucoup, multiple, plus, très' },
    'nanpa': { en: 'number, count', pl: 'liczba, liczyć', es: 'número, contar', de: 'Zahl, zählen', fr: 'nombre, compter' },
    'nasa': { en: 'strange, weird, unusual, drunk', pl: 'dziwny, nietypowy, pijany', es: 'extraño, raro, borracho', de: 'seltsam, verrückt, betrunken', fr: 'étrange, bizarre, ivre' },
    'nasin': { en: 'way, path, method, custom', pl: 'droga, ścieżka, metoda, zwyczaj', es: 'camino, método, costumbre', de: 'Weg, Pfad, Methode, Brauch', fr: 'chemin, voie, méthode, coutume' },
    'nena': { en: 'mountain, hill, nose, bump', pl: 'góra, wzgórze, nos, guz', es: 'montaña, colina, nariz', de: 'Berg, Hügel, Nase, Beule', fr: 'montagne, colline, nez, bosse' },
    'ni': { en: 'this, that', pl: 'to, tamto', es: 'esto, eso', de: 'dies, das', fr: 'ceci, cela' },
    'nimi': { en: 'name, word', pl: 'imię, słowo', es: 'nombre, palabra', de: 'Name, Wort', fr: 'nom, mot' },
    'noka': { en: 'leg, foot, lower part', pl: 'noga, stopa, dolna część', es: 'pierna, pie, parte inferior', de: 'Bein, Fuß, unterer Teil', fr: 'jambe, pied, partie inférieure' },
    'o': { en: '(vocative/imperative)', pl: '(wołacz/tryb rozkazujący)', es: '(vocativo/imperativo)', de: '(Vokativ/Imperativ)', fr: '(vocatif/impératif)' },
    'olin': { en: 'love, compassion, affection', pl: 'miłość, współczucie, uczucie', es: 'amor, compasión, afecto', de: 'Liebe, Mitgefühl, Zuneigung', fr: 'amour, compassion, affection' },
    'ona': { en: 'he, she, it, they', pl: 'on, ona, ono, oni', es: 'él, ella, ello, ellos', de: 'er, sie, es', fr: 'il, elle, ils' },
    'open': { en: 'open, start, turn on', pl: 'otwarty, zacząć, włączyć', es: 'abrir, empezar, encender', de: 'öffnen, starten, einschalten', fr: 'ouvrir, commencer, allumer' },
    'pakala': { en: 'break, mistake, accident, damn!', pl: 'zepsuć, błąd, wypadek, cholera!', es: 'romper, error, accidente', de: 'brechen, Fehler, Unfall, verdammt!', fr: 'casser, erreur, accident, zut!' },
    'pali': { en: 'do, make, work, activity', pl: 'robić, tworzyć, praca, działanie', es: 'hacer, trabajar, actividad', de: 'machen, arbeiten, Tätigkeit', fr: 'faire, travailler, activité' },
    'palisa': { en: 'stick, rod, long solid object', pl: 'kij, pręt, długi stały obiekt', es: 'palo, vara, objeto largo', de: 'Stock, Stab, langer Gegenstand', fr: 'bâton, tige, objet long' },
    'pan': { en: 'bread, grain, cereal', pl: 'chleb, zboże, płatki', es: 'pan, grano, cereal', de: 'Brot, Getreide, Müsli', fr: 'pain, grain, céréale' },
    'pana': { en: 'give, send, emit, release', pl: 'dać, wysłać, emitować, uwolnić', es: 'dar, enviar, emitir', de: 'geben, senden, aussenden', fr: 'donner, envoyer, émettre' },
    'pi': { en: '(regroup modifier)', pl: '(znacznik modyfikacji)', es: '(reagrupar modificador)', de: '(Modifikatorgruppe)', fr: '(regrouper modificateur)' },
    'pilin': { en: 'feel, touch, emotion, sense', pl: 'czuć, dotykać, emocja, zmysł', es: 'sentir, tocar, emoción', de: 'fühlen, berühren, Gefühl', fr: 'sentir, toucher, émotion' },
    'pimeja': { en: 'dark, black, night', pl: 'ciemny, czarny, noc', es: 'oscuro, negro, noche', de: 'dunkel, schwarz, Nacht', fr: 'sombre, noir, nuit' },
    'pini': { en: 'end, finish, complete, past', pl: 'koniec, zakończyć, kompletny, przeszłość', es: 'fin, terminar, completo, pasado', de: 'Ende, beenden, vollständig, Vergangenheit', fr: 'fin, finir, complet, passé' },
    'pipi': { en: 'bug, insect, spider', pl: 'robak, owad, pająk', es: 'bicho, insecto, araña', de: 'Käfer, Insekt, Spinne', fr: 'insecte, araignée' },
    'poka': { en: 'side, hip, nearby', pl: 'strona, biodro, w pobliżu', es: 'lado, cadera, cerca', de: 'Seite, Hüfte, nah', fr: 'côté, hanche, proche' },
    'poki': { en: 'container, box, bowl, cup', pl: 'pojemnik, pudełko, miska, kubek', es: 'contenedor, caja, tazón', de: 'Behälter, Kiste, Schale', fr: 'contenant, boîte, bol' },
    'pona': { en: 'good, simple, positive, nice', pl: 'dobry, prosty, pozytywny, miły', es: 'bueno, simple, positivo', de: 'gut, einfach, positiv', fr: 'bon, simple, positif' },
    'pu': { en: 'interact with Toki Pona book', pl: 'wchodzić w interakcję z książką Toki Pona', es: 'interactuar con el libro de Toki Pona', de: 'mit dem Toki Pona Buch interagieren', fr: 'interagir avec le livre Toki Pona' },
    'sama': { en: 'same, similar, like, sibling', pl: 'taki sam, podobny, jak, rodzeństwo', es: 'mismo, similar, como, hermano', de: 'gleich, ähnlich, wie, Geschwister', fr: 'même, similaire, comme, frère/sœur' },
    'seli': { en: 'fire, heat, warm, cook', pl: 'ogień, ciepło, ciepły, gotować', es: 'fuego, calor, cálido, cocinar', de: 'Feuer, Hitze, warm, kochen', fr: 'feu, chaleur, chaud, cuire' },
    'selo': { en: 'skin, surface, boundary, peel', pl: 'skóra, powierzchnia, granica, łupina', es: 'piel, superficie, límite', de: 'Haut, Oberfläche, Grenze', fr: 'peau, surface, limite' },
    'seme': { en: 'what? which?', pl: 'co? który?', es: '¿qué? ¿cuál?', de: 'was? welche?', fr: 'quoi? quel?' },
    'sewi': { en: 'high, up, sky, divine, sacred', pl: 'wysoki, góra, niebo, boski, święty', es: 'alto, arriba, cielo, divino', de: 'hoch, oben, Himmel, göttlich', fr: 'haut, en haut, ciel, divin' },
    'sijelo': { en: 'body, physical, torso', pl: 'ciało, fizyczny, tułów', es: 'cuerpo, físico, torso', de: 'Körper, physisch, Rumpf', fr: 'corps, physique, torse' },
    'sike': { en: 'circle, round, ball, cycle', pl: 'koło, okrągły, piłka, cykl', es: 'círculo, redondo, pelota, ciclo', de: 'Kreis, rund, Ball, Zyklus', fr: 'cercle, rond, balle, cycle' },
    'sin': { en: 'new, fresh, additional', pl: 'nowy, świeży, dodatkowy', es: 'nuevo, fresco, adicional', de: 'neu, frisch, zusätzlich', fr: 'nouveau, frais, additionnel' },
    'sina': { en: 'you', pl: 'ty, wy', es: 'tú, usted, ustedes', de: 'du, Sie', fr: 'tu, vous' },
    'sinpin': { en: 'face, front, wall', pl: 'twarz, przód, ściana', es: 'cara, frente, pared', de: 'Gesicht, Vorderseite, Wand', fr: 'visage, devant, mur' },
    'sitelen': { en: 'picture, image, write, draw', pl: 'obraz, zdjęcie, pisać, rysować', es: 'imagen, escribir, dibujar', de: 'Bild, schreiben, zeichnen', fr: 'image, écrire, dessiner' },
    'sona': { en: 'know, knowledge, wisdom', pl: 'wiedzieć, wiedza, mądrość', es: 'saber, conocimiento, sabiduría', de: 'wissen, Wissen, Weisheit', fr: 'savoir, connaissance, sagesse' },
    'soweli': { en: 'animal, mammal, beast', pl: 'zwierzę, ssak, bestia', es: 'animal, mamífero, bestia', de: 'Tier, Säugetier, Bestie', fr: 'animal, mammifère, bête' },
    'suli': { en: 'big, large, important, long', pl: 'duży, wielki, ważny, długi', es: 'grande, importante, largo', de: 'groß, wichtig, lang', fr: 'grand, important, long' },
    'suno': { en: 'sun, light, bright, shine', pl: 'słońce, światło, jasny, świecić', es: 'sol, luz, brillante', de: 'Sonne, Licht, hell, leuchten', fr: 'soleil, lumière, brillant' },
    'supa': { en: 'horizontal surface, table, chair', pl: 'powierzchnia pozioma, stół, krzesło', es: 'superficie horizontal, mesa, silla', de: 'horizontale Fläche, Tisch, Stuhl', fr: 'surface horizontale, table, chaise' },
    'suwi': { en: 'sweet, cute, adorable', pl: 'słodki, uroczy, śliczny', es: 'dulce, lindo, adorable', de: 'süß, niedlich, bezaubernd', fr: 'doux, mignon, adorable' },
    'tan': { en: 'from, because of, origin', pl: 'z, ponieważ, pochodzenie', es: 'de, porque, origen', de: 'von, wegen, Ursprung', fr: 'de, parce que, origine' },
    'taso': { en: 'but, only, however', pl: 'ale, tylko, jednak', es: 'pero, sólo, sin embargo', de: 'aber, nur, jedoch', fr: 'mais, seulement, cependant' },
    'tawa': { en: 'to, for, move, go', pl: 'do, dla, ruszać się, iść', es: 'a, para, mover, ir', de: 'zu, für, bewegen, gehen', fr: 'à, pour, bouger, aller' },
    'telo': { en: 'water, liquid, fluid, wet', pl: 'woda, płyn, ciecz, mokry', es: 'agua, líquido, fluido, mojado', de: 'Wasser, Flüssigkeit, nass', fr: 'eau, liquide, fluide, mouillé' },
    'tenpo': { en: 'time, moment, period, occasion', pl: 'czas, moment, okres, okazja', es: 'tiempo, momento, período', de: 'Zeit, Moment, Zeitraum', fr: 'temps, moment, période' },
    'toki': { en: 'talk, speak, say, language, hello', pl: 'mówić, powiedzieć, język, cześć', es: 'hablar, decir, idioma, hola', de: 'sprechen, sagen, Sprache, hallo', fr: 'parler, dire, langue, bonjour' },
    'tomo': { en: 'house, home, building, room', pl: 'dom, budynek, pokój', es: 'casa, hogar, edificio, habitación', de: 'Haus, Heim, Gebäude, Raum', fr: 'maison, foyer, bâtiment, pièce' },
    'tu': { en: 'two', pl: 'dwa', es: 'dos', de: 'zwei', fr: 'deux' },
    'unpa': { en: 'sex, sexual', pl: 'seks, seksualny', es: 'sexo, sexual', de: 'Sex, sexuell', fr: 'sexe, sexuel' },
    'uta': { en: 'mouth, lips, oral', pl: 'usta, wargi, ustny', es: 'boca, labios, oral', de: 'Mund, Lippen, mündlich', fr: 'bouche, lèvres, oral' },
    'utala': { en: 'fight, battle, compete, struggle', pl: 'walczyć, bitwa, rywalizować, zmagać się', es: 'pelear, batalla, competir', de: 'kämpfen, Schlacht, wetteifern', fr: 'combattre, bataille, concourir' },
    'walo': { en: 'white, pale, light colored', pl: 'biały, blady, jasny', es: 'blanco, pálido, claro', de: 'weiß, blass, hell', fr: 'blanc, pâle, clair' },
    'wan': { en: 'one, unite, unique', pl: 'jeden, jednoczyć, unikalny', es: 'uno, unir, único', de: 'eins, vereinen, einzigartig', fr: 'un, unir, unique' },
    'waso': { en: 'bird, flying creature', pl: 'ptak, latające stworzenie', es: 'pájaro, criatura voladora', de: 'Vogel, fliegendes Tier', fr: 'oiseau, créature volante' },
    'wawa': { en: 'strong, power, energy, intense', pl: 'silny, moc, energia, intensywny', es: 'fuerte, poder, energía, intenso', de: 'stark, Kraft, Energie, intensiv', fr: 'fort, pouvoir, énergie, intense' },
    'weka': { en: 'away, remove, absent, get rid of', pl: 'precz, usunąć, nieobecny, pozbyć się', es: 'lejos, quitar, ausente', de: 'weg, entfernen, abwesend', fr: 'loin, enlever, absent' },
    'wile': { en: 'want, need, wish, desire, will', pl: 'chcieć, potrzebować, życzyć, pragnienie', es: 'querer, necesitar, desear', de: 'wollen, brauchen, wünschen', fr: 'vouloir, besoin, désir' }
};

// Common phrases and patterns
const commonPhrases = {
    'toki!': { en: 'Hello! Hi!', pl: 'Cześć! Hej!', es: '¡Hola!', de: 'Hallo!', fr: 'Bonjour!' },
    'toki pona': { en: 'good language, simple language', pl: 'dobry język, prosty język', es: 'buen idioma, idioma simple', de: 'gute Sprache, einfache Sprache', fr: 'bon langage, langage simple' },
    'mi pona': { en: "I'm good, I'm fine", pl: 'Mam się dobrze', es: 'Estoy bien', de: 'Mir geht es gut', fr: 'Je vais bien' },
    'sina seme?': { en: 'What are you? How are you?', pl: 'Co u ciebie? Jak się masz?', es: '¿Cómo estás?', de: 'Wie geht es dir?', fr: 'Comment vas-tu?' },
    'mi moku': { en: "I'm eating, I eat", pl: 'Jem, Ja jem', es: 'Yo como', de: 'Ich esse', fr: 'Je mange' },
    'pona!': { en: 'Good! Great! Thanks!', pl: 'Dobrze! Świetnie! Dzięki!', es: '¡Bien! ¡Gracias!', de: 'Gut! Danke!', fr: 'Bon! Merci!' },
    'ike!': { en: 'Bad! Oh no!', pl: 'Źle! O nie!', es: '¡Malo! ¡Oh no!', de: 'Schlecht! Oh nein!', fr: 'Mal! Oh non!' },
    'toki pona li pona': { en: 'Toki Pona is good', pl: 'Toki Pona jest dobre', es: 'Toki Pona es bueno', de: 'Toki Pona ist gut', fr: 'Toki Pona est bon' },
    'mi wile moku': { en: 'I want to eat', pl: 'Chcę jeść', es: 'Quiero comer', de: 'Ich will essen', fr: 'Je veux manger' },
    'sina pona lukin': { en: 'You look good', pl: 'Wyglądasz dobrze', es: 'Te ves bien', de: 'Du siehst gut aus', fr: 'Tu as l\'air bien' }
};

// Grammar rules and patterns
const grammarRules = {
    // Subject marker 'li' is omitted when subject is 'mi' or 'sina' alone
    checkLi: (words) => {
        if ((words[0] === 'mi' || words[0] === 'sina') && words.length > 1 && words[1] === 'li') {
            return 'Note: "li" is usually omitted after "mi" or "sina" alone.';
        }
        return null;
    },
    
    // Basic sentence structure: SUBJECT [li] PREDICATE [e OBJECT]
    parseStructure: (words) => {
        let structure = [];
        let currentRole = 'subject';
        
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            
            if (word === 'li') {
                currentRole = 'predicate';
                continue;
            } else if (word === 'e') {
                currentRole = 'object';
                continue;
            } else if (word === 'pi') {
                currentRole = 'modifier-group';
                continue;
            }
            
            structure.push({ word, role: currentRole });
        }
        
        return structure;
    }
};

// Main translation function
function translateText() {
    const inputText = document.getElementById('inputText').value.trim();
    const targetLang = document.getElementById('targetLang').value;
    const outputBox = document.getElementById('outputText');
    const wordAnalysisDiv = document.getElementById('wordAnalysis');
    const wordBreakdownDiv = document.getElementById('wordBreakdown');
    
    if (!inputText) {
        outputBox.innerHTML = '<p class="text-muted text-center mb-0"><i class="bi bi-exclamation-circle"></i><br>Please enter some toki pona text to translate</p>';
        outputBox.classList.remove('has-content');
        wordAnalysisDiv.style.display = 'none';
        return;
    }
    
    // Clean and normalize input
    const normalizedInput = inputText.toLowerCase()
        .replace(/[.!?,;:]/g, ' $& ') // Add spaces around punctuation
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
    
    // Check for common phrases first
    const phraseKey = normalizedInput.replace(/[.!?,;:]/g, '').trim();
    if (commonPhrases[phraseKey]) {
        const translation = commonPhrases[phraseKey][targetLang] || commonPhrases[phraseKey].en;
        outputBox.innerHTML = `<p class="mb-0">${translation}</p>`;
        outputBox.classList.add('has-content');
        wordAnalysisDiv.style.display = 'none';
        return;
    }
    
    // Split into sentences
    const sentences = normalizedInput.split(/(?<=[.!?])\s+/);
    let translatedSentences = [];
    let allWords = [];
    
    sentences.forEach(sentence => {
        // Split into words
        const words = sentence.split(/\s+/).filter(w => w.length > 0);
        const translatedWords = [];
        const wordDetails = [];
        
        words.forEach(word => {
            // Remove punctuation for lookup
            const cleanWord = word.replace(/[.!?,;:]/g, '');
            const punctuation = word.match(/[.!?,;:]/g);
            
            if (tokiPonaDictionary[cleanWord]) {
                const translation = tokiPonaDictionary[cleanWord][targetLang] || tokiPonaDictionary[cleanWord].en;
                translatedWords.push(translation + (punctuation ? punctuation.join('') : ''));
                
                wordDetails.push({
                    original: cleanWord,
                    translation: translation
                });
            } else if (cleanWord === '') {
                // Skip empty strings
            } else {
                // Unknown word
                translatedWords.push(`[${cleanWord}]`);
                wordDetails.push({
                    original: cleanWord,
                    translation: '(unknown word)'
                });
            }
        });
        
        translatedSentences.push(translatedWords.join(' '));
        allWords = allWords.concat(wordDetails);
    });
    
    // Display translation
    const finalTranslation = translatedSentences.join('. ');
    outputBox.innerHTML = `<p class="mb-0">${finalTranslation}</p>`;
    outputBox.classList.add('has-content');
    
    // Display word analysis
    if (allWords.length > 0) {
        wordBreakdownDiv.innerHTML = '';
        allWords.forEach(wordInfo => {
            const wordItem = document.createElement('div');
            wordItem.className = 'word-item';
            wordItem.innerHTML = `
                <span class="toki-word">${wordInfo.original}</span>
                <span class="translation">${wordInfo.translation}</span>
            `;
            wordBreakdownDiv.appendChild(wordItem);
        });
        wordAnalysisDiv.style.display = 'block';
    } else {
        wordAnalysisDiv.style.display = 'none';
    }
}

// Allow translation on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    
    inputText.addEventListener('keydown', function(event) {
        // Check if Ctrl+Enter or Cmd+Enter is pressed
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();
            translateText();
        }
    });
    
    // Auto-translate on language change
    document.getElementById('targetLang').addEventListener('change', function() {
        const inputValue = document.getElementById('inputText').value.trim();
        if (inputValue) {
            translateText();
        }
    });
});

// Example phrases for testing
const examplePhrases = [
    'toki!',
    'mi pona',
    'sina seme?',
    'mi moku e kili',
    'toki pona li pona',
    'mi wile moku',
    'ona li jan pona',
    'suno li suli',
    'telo li lete'
];

// Add example phrase functionality
function loadExample(phrase) {
    document.getElementById('inputText').value = phrase;
    translateText();
}