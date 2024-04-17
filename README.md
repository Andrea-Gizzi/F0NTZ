SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 1: XS

# F0NTZ
Autore: Gizzi Andrea  
[MediaPipe demo-ES6](https://andrea-gizzi.github.io/F0NTZ/)


## Introduzione e tema
La consegna consisteva nella reallizzazionedi un sistema di interfaccia web interattiva che consentisse di esplorare 100 elementi legati da un tema comune, scelti e autoprodotti. Nel mio caso, ho deciso di affrontare un problema quotidiano per molti grafici: la selezione del font più adatto per un determinato progetto. Dopo una ricerca preliminare, ho sviluppato un archivio contenente i 100 font più diffusi a livello mondiale, arricchiti da dettagliati metadati caratteristici per ciascun font.Questo permette agli utenti di selezionare il font più coerente con il proprio lavoro o di approfondire informazioni sui metadati, come la provenienza e la categoria di ciascun font.

https://github.com/ixd-supsi/2024/raw/main/templates/template_README/doc/sdf_test.mp4

## Riferimenti progettuali
Nel progetto, non mi sono orientato su un modello specifico come riferimento per l'interfaccia; piuttosto, ho dedicato tempo a riflettere su come inserire i diversi contenuti in modo da migliorare l'usabilità e la comprensione.
Il mio obiettivo principale è stato selezionare un approccio visivo che valorizzasse ogni singolo contenuto in base alla ricerca in corso, rendendolo funzionale e facilmente leggibile.


## Design dell’interfraccia e modalià di interazione
L'intero archivio digitale è stato realizzato in modo tale da avere una buona ergonomia atraverso semplicità, leggibilità e coerenza. Ogni pagina del sito web presenta una struttura uniforme: un header nella parte superiore, composto dal logo e da bottoni intuitivi per la navigazione e la selezione dei filtri, un footer nella parte inferiore e i contenuti al centro della pagina.
Per mantenere la semplicità non è stato uso del colore, infatti lo sfondo è sempre color antracite contraposto dal bianco dei comandi e delle immagini e dettagli neri tra cui il font presente nell'immagine.  

L'intera interfaccia è composta da varie modalità di interazione tra cui: differenti bottoni che fungono da filtri o da navigazione tra le varie pagine. Inoltre, è possibile visualizzare i metadati di ciascun font tramite un semplice overlay sull'immagine, che mostra i vari dati su fondo nero sostituendo l'immagine.
L'unica pagina all'interno del sito che presenta una struttura differente è quella dedicata alla visione dei metadati. È stata progettata per coloro che preferiscono accedere alle informazioni in modo diretto, senza navigare attraverso le immagini.

[<img src="doc/cards.gif" width="500" alt="Magic trick">]()


## Tecnologia usata
L'intero sito è strutturato sulla rappresentazione dei metadati in varie categorie permettendo all'utente di decidere quale categoria vuole vedere tramite i bottoni che fungono da filtro. La struttura delle categorie nella home è stata scelta per facilitare il confronto tra i font permettendo all'utente maggiore comprensione delle minime differenze, permettendo cosi la funzione corretta dei filtri.  
```JavaScript
            //CATEGORIE
            let categorie = [];
            for (let i = 0; i < data.length; i++) {
                if (!categorie.includes(data[i][categoria])) {
                    categorie.push(data[i][categoria]);
                }
            }

            console.log(categorie);

            let cats = "";
            categorie.sort();
            for (let i = 0; i < categorie.length; i++) {
                cats += "<h1>" + categorie[i] + "</h1>";
                cats += "<div class='categoria' id='" + categorie[i] + "'></div>";
            }

            document.querySelector('main').innerHTML = cats;
```
Diverso invece la pagina d'informazione scritta dei metadati dove non è presente un array ma bensi un semplice struttura di informazioni orizontale suddivisa in colonne.  
```Css
            /*MAIN*/
			main {
				margin-top: 200px;
				margin-left: auto;
				margin-right: auto;
				max-width: 90%;
				display: grid;
				grid-template-columns: 1fr 0.4fr 0.4fr 1.4fr 0.2fr 0.4fr 1fr;
				column-gap: 1em;
				font-size: 1em;
				line-height: 1.8;
			}

			main div {
				padding-top: 6px;
				padding-bottom: 14px;
				border-top: 1px solid rgb(50, 50, 50);
			}
```

Come detto precedentemente nonostante la struttura diversa delle categoria sia diversa tra le due pagine i bottoni fungono da filtri in entrambe le pagine sailitando cosi la navigazione dell'utente e la sua ricerca di informazioni.  
```html
        <header>
			<div id="buttons">

				<button id="categoriaButton" onclick="changeFilter('categoria')">Categoria</button>
				<button id="luogoButton" onclick="changeFilter('luogo')">Luogo</button>
				<button id="utilizzoButton" onclick="changeFilter('utilizzo')">Utilizzo</button>
				<button onclick="window.location.href='./metadati/index.html'">METADATI</button>

			</div>
    	</header>
```  
```JavaScript
        let categoria = 'categoria';

        function changeFilter(newFilter) {
            categoria = newFilter;

            run();

            //classe disattiva
            document.querySelectorAll('#buttons button').forEach(button => {
                button.classList.remove('active');
            });

            //classe attiva
            document.getElementById(newFilter + 'Button').classList.add('active');
        }
```


## Target e contesto d’uso
L'artefatto digitale è concepito per un pubblico giovane e dinamico, principalmente attivo nel campo della grafica. Si rivolge a coloro che devono selezionare un carattere tipografico adatto a specifici contesti di utilizzo, o che sono interessati a informarsi ed esplorare il vasto archivio dei metadati di ogni font.
Il contesto d'utilizzo dell'archivio è diversificato e variegato. Può essere sfruttato a fini educativi e accademici, per uso personale o in ambito professionale, come ad esempio in studi di design grafico o per progetti indipendenti.

[<img src="doc/munari.jpg" width="300" alt="Supplemento al dizionario italiano">]()