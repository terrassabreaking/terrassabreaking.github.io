# CLAUDE.md — Web de Terrassa Breaking

Context per a Claude (Claude Code a VS Code). Llegeix-lo abans de fer canvis. Aquest repositori és **públic**: no hi afegeixis dades privades.

## Qui som

- **Terrassa Breaking**: associació sense ànim de lucre de breaking i cultura hip hop de Terrassa (Barcelona). 10-15 membres actius.
- **Persones**: Néstor (president, periodista; gestiona comunicació i Instagram), bboy Jan i bboy Toolz (professors de les classes; Toolz és programador), Manu (enginyer de telecomunicacions; possible cara del TikTok).
- **Activitats**:
  1. **Classes** cada divendres de 17:30 a 18:30 al Casal Cívic de Sant Pere (Passeig 22 de Juliol, 337, 08221 Terrassa, al costat de Terrassa Nord, Renfe R4 / FGC S1). 20 €/mes + 10 €/any de quota de l'Associació Veïnal de Sant Pere. Primera classe gratis. Grup mixt (de 9 a més de 70 anys).
  2. **This is for Terrassa**: competició anual de breaking crew vs crew, amb batalles de rap (gallos) i graffiti. Vol. 6: dissabte 24/10/2026. Crews de mínim 5 membres; batalles per temps (8/10/12/15 min); quadre de 16 crews; inscripció 5 €/persona fins al 16/10; 1r premi viatge de 500 € a una competició internacional, 2n premi val Snipes 250 €. Jutges: bboy **Jorge** (Special K, València, @jorgesalasspecialk), bboy Cibils (Barcelona, @cibilskills), bboy LilDani (Màlaga, @danielgonzalezmlgz). DJs Kasuo (@kasuo_one1) i Kenji (@wrappyken). Speaker Gumi (@gumilegacy). Cartell de Javi Trad (@javitrad). Entrada gratuïta per al públic.
  3. **Shows i tallers**: show de 10-15 min, show + taller de 45-75 min, tallers per a escoles. Preu segons pressupost (no es publica cap preu a la web). Han actuat a les festes majors de Sant Pere i amb la Fundació SomRiures.
- **Suport**: Ajuntament de Terrassa i Associació Veïnal de Sant Pere.
- **Canals**: Instagram @terrassabreaking (canal principal), YouTube @terrassabreaking5868, Facebook /terrassabreaking. Web antiga (a substituir): terrassabreaking.wordpress.com.

## Objectius de la web

1. Aconseguir alumnes per a les classes (decideixen les famílies; públic de Terrassa i rodalies: Matadepera, Viladecavalls, Les Fonts…). La pàgina de Classes és la més important per al SEO local.
2. Aconseguir contractacions de shows (comissions de festes, ajuntaments, escoles).
3. Omplir la competició (crews de Catalunya, Espanya i França; després rapers, grafiters i públic).

## Idiomes i to

- **Català** és l'idioma principal (arrel `/`). **Castellà** a `/es/`, **anglès** a `/en/`.
- Famílies i administracions: català. Crews locals: castellà. Crews de fora: anglès.
- To proper, directe i clar. Frases curtes, veu activa, sense frases de màrqueting buides. Els botons diuen exactament el que fan ("Inscriu el teu crew", "Reserva la classe de prova").
- Vocabulari de l'escena: crew, bboy/bgirl, batalla, cypher, toprock, footwork, freezes. En català, "el crew" / "els crews".

## Arquitectura (regles)

- **HTML estàtic sense compilació.** Cada pàgina és un `index.html` dins la seva carpeta. Els fitxers es van generar un cop amb un script i ara **s'editen directament**. No introdueixis frameworks, bundlers ni Jekyll (hi ha `.nojekyll`).
- **Rutes absolutes des de l'arrel** (`/assets/...`, `/classes/`). Per previsualitzar: `python3 -m http.server 8000`.
- **Capçalera i peu repetits a cada HTML** (23 fitxers). Qualsevol canvi al menú, al peu o a l'`<head>` comú s'ha d'aplicar a tots.
- **Cada pàgina existeix en tres idiomes.** Quan canviïs contingut, canvia les tres versions. Quan afegeixis una pàgina: tres versions, menú de totes les pàgines, enllaços `hreflang` (inclòs `x-default` → català) a les tres versions, selector d'idioma i `sitemap.xml`.
- **SEO a cada pàgina**: `<title>` i `<meta name="description">` únics per idioma, `canonical`, `hreflang`, Open Graph. Dades estructurades JSON-LD: `NGO` a les portades i `Event` a les pàgines de This is for Terrassa.
- **Estils**: un sol fitxer `assets/css/style.css`. Tipografies allotjades a `assets/fonts/` (no enllacis Google Fonts). Vigila l'especificitat: `.hero` i `.section` fan servir `padding-block` perquè no trepitgin el `padding` horitzontal de `.container`.
- **Privacitat**: cap petició a tercers sense consentiment. Google Analytics 4 només es carrega si l'usuari accepta el bàner (`assets/js/main.js`, constant `GA_ID`). Vídeos amb `youtube-nocookie.com`. Mapes com a enllaç a Google Maps, no incrustats.
- **Enllaços externs** amb `target="_blank" rel="noopener"`.
- **Accessibilitat**: `alt` descriptius, focus visible, contrast, `lang` correcte, jerarquia de títols (un sol `h1` per pàgina).

## Sistema de disseny

Basat en el cartell de This is for Terrassa Vol. 6.

| Token | Valor | Ús |
|---|---|---|
| `--peach` | #FCC6A8 | Fons |
| `--cream` | #FFF3E8 | Blocs |
| `--brown` | #2A1712 | Text, vores i ombres dures |
| `--rust` | #8E3A1B | Detalls secundaris |
| `--orange` | #D9541F | Botons i accents |
| `--coral` | #F05A4A | Títol gran tipus cartell |

- Tipografies: **Archivo Black** (títols), **Barlow** (text), **Barlow Condensed** (etiquetes, horaris, dades).
- Llenguatge visual: vores de 3 px marró fosc, **ombres dures desplaçades** (sense difuminat), cantonades rectes, etiqueta "Vol." girada. L'element memorable és el títol tipus cartell (`.poster-title`); la resta ha de ser sobri.
- Components existents: `.btn` / `.btn.alt`, `.block`, `.facts`, `.prizes`, `.rounds`/`.bar`, `.people`, `.timeline`, `.linkrow`, `.press`, `.faq`, `.tag`, `.poster`.

## Tasques pendents

- [ ] Substituir tots els `TODO_…` (vegeu README) i l'ID `G-XXXXXXXXXX`.
- [ ] Substituir el text "Terrassa Breaking" de la capçalera pel **logo blanc** (`assets/img/logo-blanc.svg`) i fer servir el **logo en color** on calgui (portada, pàgina de premsa, Open Graph). Afegir `logo` a l'objecte JSON-LD `NGO`.
- [ ] Afegir **fotos** optimitzades (WebP, ≤1600 px, <300 KB) amb `alt` en els tres idiomes. Llocs suggerits: portada (foto d'ambient de competició), Classes (foto de classe, només amb autorització d'imatge), Shows (foto d'actuació en una festa major), This is for Terrassa (fotos d'edicions anteriors), Premsa (kit descarregable).
- [ ] Incrustar **vídeos de YouTube** (`youtube-nocookie.com`, amb `loading="lazy"`): recap a la portada o a This is for Terrassa; un show breu a Shows i tallers.
- [ ] Crear `docs/dossier-shows.pdf` i enllaçar-lo a Shows i tallers (tres idiomes).
- [ ] Migrar els documents de transparència (actes, comptes, estatuts, socis) a `docs/` en PDF i canviar els enllaços de l'apartat Transparència (ara apunten a la web antiga de WordPress).
- [ ] Posar títols reals i dates als articles de la pàgina de Premsa.
- [ ] Després del 24/10/2026: resultats del Vol. 6 i, quan hi hagi data, preparar la pàgina del Vol. 7 (vegeu README, apartat 9).

## Abans de donar una tasca per acabada

1. Els canvis són a les tres versions d'idioma.
2. La pàgina es veu bé a 390 px (mòbil) i a escriptori.
3. No queden `TODO` nous sense explicar.
4. Si has canviat URLs o pàgines: `hreflang`, menú, selector d'idioma i `sitemap.xml` actualitzats.
5. Recorda a l'usuari que la web només es publica quan fa **commit i push** a `main`.
