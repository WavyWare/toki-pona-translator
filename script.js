// Comprehensive Toki Pona Dictionary with multiple language translations
const tokiPonaDictionary = {
    // Pronouns and Basic Words
    'mi': { en: 'I, me, we, us', pl: 'ja, my', es: 'yo, nosotros', de: 'ich, wir', fr: 'je, nous', it: 'io, noi', type: 'pronoun' },
    'sina': { en: 'you', pl: 'ty, wy', es: 'tú, usted', de: 'du, Sie', fr: 'tu, vous', it: 'tu, voi', type: 'pronoun' },
    'ona': { en: 'he, she, it, they', pl: 'on, ona, ono, oni', es: 'él, ella, ellos', de: 'er, sie, es', fr: 'il, elle, ils', it: 'lui, lei, loro', type: 'pronoun' },
    
    // Particles
    'li': { en: '(subject-verb separator)', pl: '(separator podmiotu i orzeczenia)', es: '(separador sujeto-verbo)', de: '(Subjekt-Verb-Trenner)', fr: '(séparateur sujet-verbe)', it: '(separatore soggetto-verbo)', type: 'particle' },
    'e': { en: '(direct object marker)', pl: '(znacznik dopełnienia)', es: '(marcador de objeto directo)', de: '(Objekt-Marker)', fr: '(marqueur d\'objet direct)', it: '(marcatore di oggetto diretto)', type: 'particle' },
    'pi': { en: 'of, belonging to (regrouping)', pl: 'z, należący do (grupowanie)', es: 'de (reagrupación)', de: 'von (Umgruppierung)', fr: 'de (regroupement)', it: 'di (raggruppamento)', type: 'particle' },
    'la': { en: '(context marker)', pl: '(znacznik kontekstu)', es: '(marcador de contexto)', de: '(Kontext-Marker)', fr: '(marqueur de contexte)', it: '(marcatore di contesto)', type: 'particle' },
    'en': { en: 'and', pl: 'i', es: 'y', de: 'und', fr: 'et', it: 'e', type: 'particle' },
    'anu': { en: 'or', pl: 'lub', es: 'o', de: 'oder', fr: 'ou', it: 'o', type: 'particle' },
    
    // Verbs/Actions
    'tawa': { en: 'go, move, travel', pl: 'iść, poruszać się, podróżować', es: 'ir, moverse, viajar', de: 'gehen, bewegen, reisen', fr: 'aller, bouger, voyager', it: 'andare, muoversi, viaggiare', type: 'verb' },
    'moku': { en: 'eat, food, consume', pl: 'jeść, jedzenie, konsumować', es: 'comer, comida, consumir', de: 'essen, Essen, konsumieren', fr: 'manger, nourriture, consommer', it: 'mangiare, cibo, consumare', type: 'verb' },
    'pali': { en: 'work, make, do', pl: 'pracować, robić, tworzyć', es: 'trabajar, hacer', de: 'arbeiten, machen', fr: 'travailler, faire', it: 'lavorare, fare', type: 'verb' },
    'kama': { en: 'come, become, arrive', pl: 'przyjść, stać się, przybyć', es: 'venir, convertirse, llegar', de: 'kommen, werden, ankommen', fr: 'venir, devenir, arriver', it: 'venire, diventare, arrivare', type: 'verb' },
    'pana': { en: 'give, send, emit', pl: 'dawać, wysyłać, emitować', es: 'dar, enviar, emitir', de: 'geben, senden, aussenden', fr: 'donner, envoyer, émettre', it: 'dare, inviare, emettere', type: 'verb' },
    'lukin': { en: 'see, look, watch', pl: 'widzieć, patrzeć, oglądać', es: 'ver, mirar, observar', de: 'sehen, schauen, beobachten', fr: 'voir, regarder, observer', it: 'vedere, guardare, osservare', type: 'verb' },
    'kute': { en: 'hear, listen', pl: 'słyszeć, słuchać', es: 'oír, escuchar', de: 'hören, zuhören', fr: 'entendre, écouter', it: 'sentire, ascoltare', type: 'verb' },
    'toki': { en: 'speak, talk, language', pl: 'mówić, rozmawiać, język', es: 'hablar, idioma', de: 'sprechen, Sprache', fr: 'parler, langue', it: 'parlare, lingua', type: 'verb' },
    'lape': { en: 'sleep, rest', pl: 'spać, odpoczywać', es: 'dormir, descansar', de: 'schlafen, ruhen', fr: 'dormir, se reposer', it: 'dormire, riposare', type: 'verb' },
    'wile': { en: 'want, need, wish', pl: 'chcieć, potrzebować, życzyć', es: 'querer, necesitar, desear', de: 'wollen, brauchen, wünschen', fr: 'vouloir, avoir besoin, souhaiter', it: 'volere, aver bisogno, desiderare', type: 'verb' },
    'sona': { en: 'know, knowledge', pl: 'wiedzieć, wiedza', es: 'saber, conocimiento', de: 'wissen, Wissen', fr: 'savoir, connaissance', it: 'sapere, conoscenza', type: 'verb' },
    'open': { en: 'open, begin, start', pl: 'otwierać, zaczynać', es: 'abrir, comenzar', de: 'öffnen, beginnen', fr: 'ouvrir, commencer', it: 'aprire, iniziare', type: 'verb' },
    'pini': { en: 'end, finish, close', pl: 'kończyć, zamykać', es: 'terminar, cerrar', de: 'beenden, schließen', fr: 'finir, fermer', it: 'finire, chiudere', type: 'verb' },
    'jo': { en: 'have, possess, contain', pl: 'mieć, posiadać, zawierać', es: 'tener, poseer, contener', de: 'haben, besitzen, enthalten', fr: 'avoir, posséder, contenir', it: 'avere, possedere, contenere', type: 'verb' },
    'kepeken': { en: 'use, with', pl: 'używać, z pomocą', es: 'usar, con', de: 'benutzen, mit', fr: 'utiliser, avec', it: 'usare, con', type: 'verb' },
    'lon': { en: 'be at, exist, in', pl: 'być w, istnieć, w', es: 'estar en, existir, en', de: 'sein bei, existieren, in', fr: 'être à, exister, dans', it: 'essere a, esistere, in', type: 'verb' },
    
    // Nouns
    'tomo': { en: 'house, building, room', pl: 'dom, budynek, pokój', es: 'casa, edificio, habitación', de: 'Haus, Gebäude, Zimmer', fr: 'maison, bâtiment, pièce', it: 'casa, edificio, stanza', type: 'noun' },
    'jan': { en: 'person, people, human', pl: 'osoba, ludzie, człowiek', es: 'persona, gente, humano', de: 'Person, Menschen, Mensch', fr: 'personne, gens, humain', it: 'persona, gente, umano', type: 'noun' },
    'kili': { en: 'fruit, vegetable, mushroom', pl: 'owoc, warzywo, grzyb', es: 'fruta, verdura, hongo', de: 'Frucht, Gemüse, Pilz', fr: 'fruit, légume, champignon', it: 'frutto, verdura, fungo', type: 'noun' },
    'telo': { en: 'water, liquid, fluid', pl: 'woda, ciecz, płyn', es: 'agua, líquido', de: 'Wasser, Flüssigkeit', fr: 'eau, liquide', it: 'acqua, liquido', type: 'noun' },
    'suno': { en: 'sun, light, brightness', pl: 'słońce, światło, jasność', es: 'sol, luz, brillo', de: 'Sonne, Licht, Helligkeit', fr: 'soleil, lumière, clarté', it: 'sole, luce, luminosità', type: 'noun' },
    'mun': { en: 'moon, star, night sky', pl: 'księżyc, gwiazda, nocne niebo', es: 'luna, estrella, cielo nocturno', de: 'Mond, Stern, Nachthimmel', fr: 'lune, étoile, ciel nocturne', it: 'luna, stella, cielo notturno', type: 'noun' },
    'ma': { en: 'earth, land, country', pl: 'ziemia, ląd, kraj', es: 'tierra, país', de: 'Erde, Land', fr: 'terre, pays', it: 'terra, paese', type: 'noun' },
    'nasin': { en: 'way, path, method', pl: 'droga, ścieżka, metoda', es: 'camino, método', de: 'Weg, Pfad, Methode', fr: 'chemin, méthode', it: 'via, percorso, metodo', type: 'noun' },
    'ilo': { en: 'tool, device, machine', pl: 'narzędzie, urządzenie, maszyna', es: 'herramienta, dispositivo, máquina', de: 'Werkzeug, Gerät, Maschine', fr: 'outil, appareil, machine', it: 'strumento, dispositivo, macchina', type: 'noun' },
    'lipu': { en: 'paper, document, page', pl: 'papier, dokument, strona', es: 'papel, documento, página', de: 'Papier, Dokument, Seite', fr: 'papier, document, page', it: 'carta, documento, pagina', type: 'noun' },
    'soweli': { en: 'animal, beast', pl: 'zwierzę, bestia', es: 'animal, bestia', de: 'Tier, Bestie', fr: 'animal, bête', it: 'animale, bestia', type: 'noun' },
    'waso': { en: 'bird, flying creature', pl: 'ptak, latające stworzenie', es: 'pájaro, criatura voladora', de: 'Vogel, fliegendes Wesen', fr: 'oiseau, créature volante', it: 'uccello, creatura volante', type: 'noun' },
    'kasi': { en: 'plant, vegetation, herb', pl: 'roślina, wegetacja, zioło', es: 'planta, vegetación, hierba', de: 'Pflanze, Vegetation, Kraut', fr: 'plante, végétation, herbe', it: 'pianta, vegetazione, erba', type: 'noun' },
    'kala': { en: 'fish, sea creature', pl: 'ryba, stworzenie morskie', es: 'pez, criatura marina', de: 'Fisch, Meereskreatur', fr: 'poisson, créature marine', it: 'pesce, creatura marina', type: 'noun' },
    'pipi': { en: 'bug, insect, spider', pl: 'robak, owad, pająk', es: 'bicho, insecto, araña', de: 'Käfer, Insekt, Spinne', fr: 'insecte, araignée', it: 'insetto, ragno', type: 'noun' },
    'nimi': { en: 'name, word', pl: 'imię, słowo', es: 'nombre, palabra', de: 'Name, Wort', fr: 'nom, mot', it: 'nome, parola', type: 'noun' },
    'uta': { en: 'mouth, lips', pl: 'usta, wargi', es: 'boca, labios', de: 'Mund, Lippen', fr: 'bouche, lèvres', it: 'bocca, labbra', type: 'noun' },
    'luka': { en: 'hand, arm', pl: 'ręka, ramię', es: 'mano, brazo', de: 'Hand, Arm', fr: 'main, bras', it: 'mano, braccio', type: 'noun' },
    'noka': { en: 'foot, leg', pl: 'stopa, noga', es: 'pie, pierna', de: 'Fuß, Bein', fr: 'pied, jambe', it: 'piede, gamba', type: 'noun' },
    'linja': { en: 'line, rope, connection', pl: 'linia, lina, połączenie', es: 'línea, cuerda, conexión', de: 'Linie, Seil, Verbindung', fr: 'ligne, corde, connexion', it: 'linea, corda, connessione', type: 'noun' },
    'supa': { en: 'surface, table, platform', pl: 'powierzchnia, stół, platforma', es: 'superficie, mesa, plataforma', de: 'Oberfläche, Tisch, Plattform', fr: 'surface, table, plateforme', it: 'superficie, tavolo, piattaforma', type: 'noun' },
    
    // Adjectives/Modifiers
    'pona': { en: 'good, simple, positive', pl: 'dobry, prosty, pozytywny', es: 'bueno, simple, positivo', de: 'gut, einfach, positiv', fr: 'bon, simple, positif', it: 'buono, semplice, positivo', type: 'adjective' },
    'ike': { en: 'bad, negative, evil', pl: 'zły, negatywny, zły', es: 'malo, negativo, malvado', de: 'schlecht, negativ, böse', fr: 'mauvais, négatif, mal', it: 'cattivo, negativo, malvagio', type: 'adjective' },
    'suli': { en: 'big, large, important', pl: 'duży, wielki, ważny', es: 'grande, importante', de: 'groß, wichtig', fr: 'grand, important', it: 'grande, importante', type: 'adjective' },
    'lili': { en: 'small, little, young', pl: 'mały, młody', es: 'pequeño, joven', de: 'klein, jung', fr: 'petit, jeune', it: 'piccolo, giovane', type: 'adjective' },
    'mute': { en: 'many, much, several', pl: 'wiele, dużo, kilka', es: 'muchos, varios', de: 'viele, mehrere', fr: 'beaucoup, plusieurs', it: 'molti, parecchi', type: 'adjective' },
    'loje': { en: 'red, reddish', pl: 'czerwony, czerwonawy', es: 'rojo, rojizo', de: 'rot, rötlich', fr: 'rouge, rougeâtre', it: 'rosso, rossastro', type: 'adjective' },
    'jelo': { en: 'yellow, yellowish', pl: 'żółty, żółtawy', es: 'amarillo', de: 'gelb, gelblich', fr: 'jaune, jaunâtre', it: 'giallo, giallastro', type: 'adjective' },
    'laso': { en: 'blue, green, cyan', pl: 'niebieski, zielony, cyjan', es: 'azul, verde, cian', de: 'blau, grün, cyan', fr: 'bleu, vert, cyan', it: 'blu, verde, ciano', type: 'adjective' },
    'walo': { en: 'white, light, pale', pl: 'biały, jasny, blady', es: 'blanco, claro, pálido', de: 'weiß, hell, blass', fr: 'blanc, clair, pâle', it: 'bianco, chiaro, pallido', type: 'adjective' },
    'pimeja': { en: 'black, dark', pl: 'czarny, ciemny', es: 'negro, oscuro', de: 'schwarz, dunkel', fr: 'noir, sombre', it: 'nero, scuro', type: 'adjective' },
    'sin': { en: 'new, fresh, extra', pl: 'nowy, świeży, dodatkowy', es: 'nuevo, fresco, extra', de: 'neu, frisch, extra', fr: 'nouveau, frais, supplémentaire', it: 'nuovo, fresco, extra', type: 'adjective' },
    'wawa': { en: 'strong, powerful, energetic', pl: 'silny, potężny, energiczny', es: 'fuerte, poderoso, enérgico', de: 'stark, mächtig, energisch', fr: 'fort, puissant, énergique', it: 'forte, potente, energico', type: 'adjective' },
    'nasa': { en: 'crazy, strange, drunk', pl: 'szalony, dziwny, pijany', es: 'loco, extraño, borracho', de: 'verrückt, seltsam, betrunken', fr: 'fou, étrange, ivre', it: 'pazzo, strano, ubriaco', type: 'adjective' },
    'olin': { en: 'love, compassion', pl: 'miłość, współczucie', es: 'amor, compasión', de: 'Liebe, Mitgefühl', fr: 'amour, compassion', it: 'amore, compassione', type: 'adjective' },
    'suwi': { en: 'sweet, cute, adorable', pl: 'słodki, uroczy, śliczny', es: 'dulce, lindo, adorable', de: 'süß, niedlich, bezaubernd', fr: 'doux, mignon, adorable', it: 'dolce, carino, adorabile', type: 'adjective' },
    'moli': { en: 'dead, death, dying', pl: 'martwy, śmierć, umierający', es: 'muerto, muerte, moribundo', de: 'tot, Tod, sterbend', fr: 'mort, décès, mourant', it: 'morto, morte, morente', type: 'adjective' },
    'utala': { en: 'fight, battle, challenge', pl: 'walczyć, bitwa, wyzwanie', es: 'pelear, batalla, desafío', de: 'kämpfen, Schlacht, Herausforderung', fr: 'combattre, bataille, défi', it: 'combattere, battaglia, sfida', type: 'adjective' },
    'pakala': { en: 'broken, damaged, mistake', pl: 'zepsuty, uszkodzony, błąd', es: 'roto, dañado, error', de: 'kaputt, beschädigt, Fehler', fr: 'cassé, endommagé, erreur', it: 'rotto, danneggiato, errore', type: 'adjective' },
    'lete': { en: 'cold, cool, frozen', pl: 'zimny, chłodny, zamrożony', es: 'frío, congelado', de: 'kalt, kühl, gefroren', fr: 'froid, frais, gelé', it: 'freddo, fresco, congelato', type: 'adjective' },
    'seli': { en: 'hot, warm, heat', pl: 'gorący, ciepły, ciepło', es: 'caliente, cálido, calor', de: 'heiß, warm, Hitze', fr: 'chaud, chaleur', it: 'caldo, calore', type: 'adjective' },
    
    // Numbers
    'ala': { en: 'nothing, zero, no', pl: 'nic, zero, nie', es: 'nada, cero, no', de: 'nichts, null, nein', fr: 'rien, zéro, non', it: 'niente, zero, no', type: 'number' },
    'wan': { en: 'one, single, united', pl: 'jeden, pojedynczy, zjednoczony', es: 'uno, único, unido', de: 'eins, einzeln, vereint', fr: 'un, unique, uni', it: 'uno, singolo, unito', type: 'number' },
    'tu': { en: 'two, pair, double', pl: 'dwa, para, podwójny', es: 'dos, par, doble', de: 'zwei, Paar, doppelt', fr: 'deux, paire, double', it: 'due, coppia, doppio', type: 'number' },
    'mani': { en: 'money, wealth, animal', pl: 'pieniądze, bogactwo, zwierzę', es: 'dinero, riqueza, animal', de: 'Geld, Reichtum, Tier', fr: 'argent, richesse, animal', it: 'denaro, ricchezza, animale', type: 'noun' },
    'ale': { en: 'all, everything, universe', pl: 'wszystko, wszechświat', es: 'todo, universo', de: 'alles, Universum', fr: 'tout, univers', it: 'tutto, universo', type: 'noun' },
    'ali': { en: 'all, everything (alternate)', pl: 'wszystko (alternatywne)', es: 'todo (alternativo)', de: 'alles (alternativ)', fr: 'tout (alternatif)', it: 'tutto (alternativo)', type: 'noun' },
    
    // Other Important Words
    'ni': { en: 'this, that', pl: 'to, tamto', es: 'esto, eso', de: 'dies, das', fr: 'ceci, cela', it: 'questo, quello', type: 'determiner' },
    'tan': { en: 'from, because of, origin', pl: 'z, ponieważ, pochodzenie', es: 'de, porque, origen', de: 'von, wegen, Ursprung', fr: 'de, à cause de, origine', it: 'da, a causa di, origine', type: 'preposition' },
    'sama': { en: 'same, similar, equal', pl: 'taki sam, podobny, równy', es: 'mismo, similar, igual', de: 'gleich, ähnlich', fr: 'même, similaire, égal', it: 'stesso, simile, uguale', type: 'adjective' },
    'ante': { en: 'different, changed, other', pl: 'inny, zmieniony, odmienny', es: 'diferente, cambiado, otro', de: 'anders, verändert', fr: 'différent, changé, autre', it: 'diverso, cambiato, altro', type: 'adjective' },
    'awen': { en: 'stay, remain, keep', pl: 'zostać, pozostać, zachować', es: 'quedarse, permanecer, mantener', de: 'bleiben, bewahren', fr: 'rester, demeurer, garder', it: 'rimanere, restare, mantenere', type: 'verb' },
    'tenpo': { en: 'time, moment, period', pl: 'czas, moment, okres', es: 'tiempo, momento, período', de: 'Zeit, Moment, Periode', fr: 'temps, moment, période', it: 'tempo, momento, periodo', type: 'noun' },
    'poka': { en: 'side, hip, nearby', pl: 'strona, biodro, w pobliżu', es: 'lado, cadera, cerca', de: 'Seite, Hüfte, nahe', fr: 'côté, hanche, à proximité', it: 'lato, fianco, vicino', type: 'noun' },
    'insa': { en: 'inside, center, stomach', pl: 'wewnątrz, środek, żołądek', es: 'dentro, centro, estómago', de: 'innen, Zentrum, Magen', fr: 'intérieur, centre, estomac', it: 'dentro, centro, stomaco', type: 'noun' },
    'sewi': { en: 'high, above, sky, divine', pl: 'wysoki, powyżej, niebo, boski', es: 'alto, arriba, cielo, divino', de: 'hoch, oben, Himmel, göttlich', fr: 'haut, au-dessus, ciel, divin', it: 'alto, sopra, cielo, divino', type: 'noun' },
    'anpa': { en: 'low, down, bottom, humble', pl: 'niski, dół, spód, pokorny', es: 'bajo, abajo, fondo, humilde', de: 'niedrig, unten, Boden, bescheiden', fr: 'bas, en bas, fond, humble', it: 'basso, giù, fondo, umile', type: 'noun' },
    'monsi': { en: 'back, behind, rear', pl: 'tył, z tyłu, tylny', es: 'atrás, detrás, trasero', de: 'hinten, zurück, Rückseite', fr: 'arrière, derrière', it: 'dietro, posteriore', type: 'noun' },
    'sinpin': { en: 'front, face, wall', pl: 'przód, twarz, ściana', es: 'frente, cara, pared', de: 'vorne, Gesicht, Wand', fr: 'devant, visage, mur', it: 'davanti, faccia, muro', type: 'noun' },
};

// Translation class
class TokiPonaTranslator {
    constructor() {
        this.dictionary = tokiPonaDictionary;
    }

    // Translate a single word
    translateWord(word, targetLang) {
        const lowercaseWord = word.toLowerCase().trim();
        if (this.dictionary[lowercaseWord]) {
            return this.dictionary[lowercaseWord][targetLang] || this.dictionary[lowercaseWord]['en'];
        }
        return `[${word}?]`;
    }

    // Get word type
    getWordType(word) {
        const lowercaseWord = word.toLowerCase().trim();
        if (this.dictionary[lowercaseWord]) {
            return this.dictionary[lowercaseWord].type || 'unknown';
        }
        return 'unknown';
    }

    // Basic grammar rules for sentence structure
    applyGrammarRules(sentence, targetLang) {
        // Basic sentence patterns recognition
        const patterns = [
            // Pattern: mi/sina + verb (no li needed)
            { regex: /^(mi|sina)\s+(\w+)/, format: (match) => `${this.translateWord(match[1], targetLang)} ${this.translateWord(match[2], targetLang)}` },
            
            // Pattern: subject + li + verb
            { regex: /(\w+)\s+li\s+(\w+)/, format: (match) => `${this.translateWord(match[1], targetLang)} ${this.translateWord(match[2], targetLang)}` },
            
            // Pattern: verb + e + object
            { regex: /(\w+)\s+e\s+(\w+)/, format: (match) => `${this.translateWord(match[1], targetLang)} ${this.translateWord(match[2], targetLang)}` },
        ];

        // Try to match patterns, but if none match, just translate word by word
        for (let pattern of patterns) {
            const match = sentence.match(pattern.regex);
            if (match) {
                return pattern.format(match);
            }
        }

        return null; // No pattern matched
    }

    // Main translation function
    translate(text, targetLang = 'en') {
        if (!text || text.trim() === '') {
            return { translation: '', breakdown: [] };
        }

        // Split into sentences (by period or exclamation)
        const sentences = text.toLowerCase().split(/[.!?]+/).filter(s => s.trim());
        const translations = [];
        const breakdown = [];

        sentences.forEach(sentence => {
            const words = sentence.trim().split(/\s+/);
            const translatedWords = [];
            const wordBreakdown = [];

            words.forEach(word => {
                const cleanWord = word.trim();
                if (cleanWord) {
                    const translation = this.translateWord(cleanWord, targetLang);
                    const type = this.getWordType(cleanWord);
                    translatedWords.push(translation);
                    wordBreakdown.push({
                        toki: cleanWord,
                        translation: translation,
                        type: type
                    });
                }
            });

            // Apply basic grammar rules to improve sentence structure
            const grammarApplied = this.applyGrammarRules(sentence.trim(), targetLang);
            const finalTranslation = grammarApplied || translatedWords.join(' ');
            
            translations.push(finalTranslation);
            breakdown.push(...wordBreakdown);
        });

        return {
            translation: translations.join('. ') + (translations.length > 0 ? '.' : ''),
            breakdown: breakdown
        };
    }
}

// Initialize translator
const translator = new TokiPonaTranslator();

// DOM Elements
const tokiPonaInput = document.getElementById('tokiPonaInput');
const targetLangSelect = document.getElementById('targetLang');
const translationOutput = document.getElementById('translationOutput');
const detailedModeCheckbox = document.getElementById('detailedMode');
const detailedBreakdown = document.getElementById('detailedBreakdown');
const breakdownContent = document.getElementById('breakdownContent');
const translateBtn = document.getElementById('translateBtn');
const clearBtn = document.getElementById('clearBtn');

// Translation function
function performTranslation() {
    const inputText = tokiPonaInput.value.trim();
    const targetLang = targetLangSelect.value;
    
    if (!inputText) {
        translationOutput.innerHTML = '<p class="text-muted text-center py-5"><i class="fas fa-arrow-left"></i><br>Enter Toki Pona text and click translate</p>';
        translationOutput.classList.remove('has-content');
        detailedBreakdown.style.display = 'none';
        return;
    }

    // Perform translation
    const result = translator.translate(inputText, targetLang);
    
    // Display translation
    translationOutput.innerHTML = `<p class="mb-0">${result.translation || 'No translation available'}</p>`;
    translationOutput.classList.add('has-content', 'fade-in');

    // Display breakdown if enabled
    if (detailedModeCheckbox.checked && result.breakdown.length > 0) {
        detailedBreakdown.style.display = 'block';
        breakdownContent.innerHTML = result.breakdown.map(item => 
            `<span class="word-item">
                <span class="word-toki">${item.toki}</span> → 
                <span class="word-translation">${item.translation}</span>
                <small style="opacity: 0.7;"> (${item.type})</small>
            </span>`
        ).join('');
    } else {
        detailedBreakdown.style.display = 'none';
    }
}

// Event Listeners
translateBtn.addEventListener('click', performTranslation);

clearBtn.addEventListener('click', () => {
    tokiPonaInput.value = '';
    translationOutput.innerHTML = '<p class="text-muted text-center py-5"><i class="fas fa-arrow-left"></i><br>Enter Toki Pona text and click translate</p>';
    translationOutput.classList.remove('has-content');
    detailedBreakdown.style.display = 'none';
    breakdownContent.innerHTML = '';
});

// Allow Enter key to translate (Shift+Enter for new line)
tokiPonaInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        performTranslation();
    }
});

// Auto-translate when changing language
targetLangSelect.addEventListener('change', () => {
    if (tokiPonaInput.value.trim()) {
        performTranslation();
    }
});

// Update breakdown when toggling detailed mode
detailedModeCheckbox.addEventListener('change', () => {
    if (tokiPonaInput.value.trim()) {
        performTranslation();
    }
});

// Load sample text on first visit
window.addEventListener('load', () => {
    console.log('Toki Pona Translator loaded successfully!');
    console.log(`Dictionary contains ${Object.keys(tokiPonaDictionary).length} words`);
});