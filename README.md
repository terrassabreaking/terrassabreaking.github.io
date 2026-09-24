# Web de Terrassa Breaking

Web estàtica (HTML, CSS i una mica de JavaScript, sense frameworks ni compilació) en català, castellà i anglès, publicada amb GitHub Pages.

> ⚠️ **El repositori és públic** (GitHub Pages gratuït ho exigeix). No hi poseu mai dades privades: telèfons personals, DNI, dades de menors, comptes bancaris, contrasenyes o documents interns.

## Estructura

```
/                        Català (idioma principal)
/classes/  /this-is-for-terrassa/  /shows-i-tallers/  /associacio/  /premsa/  /contacte/
/es/...                  Castellà
/en/...                  Anglès
/avis-legal/             Avís legal i privacitat (només en català)
/assets/css/style.css    Tots els estils
/assets/js/main.js       Menú del mòbil, bàner de galetes i Google Analytics
/assets/fonts/           Tipografies allotjades a la mateixa web (sense Google Fonts)
/assets/img/             Imatges
/docs/                   PDFs (dossier de shows, documents de transparència)
sitemap.xml, robots.txt  Per a Google
CLAUDE.md                Context del projecte per a Claude a VS Code
```

---

## 1. Abans de publicar: substituir els TODO

Cerca `TODO` a tot el projecte (a VS Code: `Ctrl+Shift+F`, o `Cmd+Shift+F` a Mac) i substitueix-los. També li pots demanar a Claude: *"Substitueix tots els TODO amb aquestes dades: …"*.

| Marcador | Què hi va |
|---|---|
| `TODO_CORREU` | Correu de contacte de l'associació |
| `TODO_TELEFON` | Telèfon tal com es mostra (ex.: 600 00 00 00) |
| `TODO_TELEFON_SENSE_ESPAIS` | El mateix amb prefix i sense espais (ex.: 34600000000), per a l'enllaç de WhatsApp |
| `TODO_FORM_CLASSE_PROVA` | Enllaç del Google Form de classe de prova |
| `TODO_FORM_SHOWS` | Enllaç del Google Form de sol·licitud de shows |
| `TODO_FORM_INSCRIPCIO_BREAKING` | Enllaç del Google Form d'inscripció de crews |
| `TODO_FORM_RAP` / `TODO_FORM_GRAFFITI` | Enllaços dels formularis de rap i graffiti |
| `TODO_NIF` / `TODO_NUM_REGISTRE` | Dades de l'associació per a l'avís legal |
| `G-XXXXXXXXXX` (a `assets/js/main.js`) | ID de Google Analytics (vegeu el pas 5) |

Mentre `G-XXXXXXXXXX` no es canviï, la web no carrega Google Analytics ni mostra el bàner de galetes.

---

## 2. Pujar la web a GitHub

1. **Crea un compte de GitHub per a l'associació** a <https://github.com/signup>, amb el correu de l'associació (no un de personal). Us recomano el nom d'usuari `terrassabreaking`.
2. **Crea el repositori**: botó **New repository**.
   - Nom: `terrassabreaking.github.io` (exactament *nomdusuari*.github.io; així la web funciona des de l'arrel abans de tenir domini).
   - Visibilitat: **Public**.
   - No marquis cap opció d'afegir README ni .gitignore.
3. **Afegeix el Toolz i el Manu**: *Settings → Collaborators → Add people*.
4. **Puja els fitxers des de VS Code**:
   1. Instal·la Git si no el tens (<https://git-scm.com>).
   2. A VS Code: `Ctrl+Shift+P` → **Git: Clone** → enganxa `https://github.com/terrassabreaking/terrassabreaking.github.io.git` → tria una carpeta. Inicia sessió a GitHub quan t'ho demani.
   3. Copia **tot el contingut** de la carpeta del ZIP dins la carpeta clonada, **inclòs el fitxer ocult `.nojekyll`** (a Mac: `Cmd+Shift+.` per veure'l; a Windows: Explorador → Visualitza → Elements ocults).
   4. Panell **Source Control** (icona de branques, a l'esquerra) → escriu un missatge (ex.: *Primera versió de la web*) → **Commit** → **Sync Changes** / **Push**.

## 3. Publicar amb GitHub Pages

1. Al repositori: **Settings → Pages**.
2. *Build and deployment* → *Source*: **Deploy from a branch**.
3. *Branch*: **main** i carpeta **/ (root)** → **Save**.
4. Al cap d'1-2 minuts, la web és a `https://terrassabreaking.github.io`. L'estat de cada publicació es veu a la pestanya **Actions** del repositori.

## 4. Comprar i connectar el domini

1. **Compra el domini** (ex.: `terrassabreaking.cat`) en un registrador que vengui .cat. Compara el **preu de renovació**, no només el del primer any. El .cat demana que la web tingui vincle amb la llengua o la cultura catalanes, cosa que ja compliu. Molts registradors inclouen **redirecció de correu gratuïta**: pots crear `hola@terrassabreaking.cat` i que arribi al Gmail de l'associació.
2. **Verifica el domini a GitHub** (evita que algú altre el pugui fer servir): foto de perfil → **Settings → Pages → Add a domain** → GitHub et donarà un registre **TXT** per afegir al DNS del registrador.
3. **Configura el DNS al registrador** (esborra els registres d'"aparcament" que hi hagi per defecte):

   | Tipus | Nom | Valor |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA (opcional) | @ | 2606:50c0:8000::153 |
   | AAAA (opcional) | @ | 2606:50c0:8001::153 |
   | AAAA (opcional) | @ | 2606:50c0:8002::153 |
   | AAAA (opcional) | @ | 2606:50c0:8003::153 |
   | CNAME | www | terrassabreaking.github.io |

4. Al repositori: **Settings → Pages → Custom domain** → escriu `terrassabreaking.cat` → **Save**. GitHub crea un fitxer `CNAME` al repositori: després fes **Pull** a VS Code perquè el tinguis també en local.
5. Quan la comprovació de DNS surti en verd (de minuts a unes hores), marca **Enforce HTTPS**.
6. **Si el domini no és `terrassabreaking.cat`**: substitueix `https://terrassabreaking.cat` a tots els fitxers (`Ctrl+Shift+H` a VS Code), sobretot a `sitemap.xml` i `robots.txt`.

## 5. Google Analytics 4

1. Entra a <https://analytics.google.com> amb el compte de Google de l'associació → **Administració → Crea → Compte** ("Terrassa Breaking").
2. Crea una **propietat** ("Web Terrassa Breaking"), zona horària Espanya i moneda EUR.
3. **Flux de dades → Web**: URL `https://terrassabreaking.cat`, nom "Web". Deixa activada la **mesura millorada** (compta automàticament els clics als enllaços externs, com els formularis i Instagram).
4. Copia l'**ID de mesura** (`G-…`) i posa'l a `assets/js/main.js`, a la línia `const GA_ID = "G-XXXXXXXXXX";`. Fes commit i push.
5. Obre la web, accepta les galetes i comprova que apareixes a **Informes → Temps real**.
6. Recomanat: *Administració → Recollida de dades → Retenció* a 14 mesos.
7. Opcional: a *Administració → Esdeveniments*, crea un esdeveniment clau per als clics a `forms.gle` o `docs.google.com/forms` per comptar quantes persones obren els formularis des de la web.

## 6. Google Search Console

1. <https://search.google.com/search-console> → **Afegeix una propietat → Domini** → `terrassabreaking.cat` → verifica-la amb el registre **TXT** que et doni al DNS.
2. **Sitemaps** → envia `https://terrassabreaking.cat/sitemap.xml`.
3. A Google Analytics: *Administració → Enllaços de Search Console* per veure a GA les cerques que porten gent a la web.

---

## 7. Fer canvis des de VS Code (amb Claude)

1. Obre la carpeta del repositori a VS Code. Fes **Pull** abans de començar, per si algú altre ha fet canvis.
2. Demana el canvi a Claude (ell llegeix `CLAUDE.md` i sap com funciona la web) o fes-lo tu.
3. **Previsualitza en local**. Els enllaços comencen per `/`, així que obrir l'HTML amb doble clic no funciona bé: cal un petit servidor. Al terminal de VS Code, dins la carpeta:
   ```
   python3 -m http.server 8000
   ```
   i obre <http://localhost:8000>. (Alternativa: extensió *Live Server* de VS Code.)
4. **Publica**: *Source Control* → missatge → **Commit** → **Sync Changes / Push**.

**La publicació és automàtica després del push** (1-2 minuts). Desar un fitxer en local no publica res: només es publica quan fas push a la branca `main`. Si alguna cosa falla, la pestanya **Actions** de GitHub mostra l'error, i sempre pots tornar a una versió anterior des de l'historial de commits.

### Recordatoris
- **Cada text existeix en tres idiomes**: si canvies una cosa en català, canvia-la també a `/es/` i `/en/`.
- **El menú és a cada pàgina**: si afegeixes o canvies una secció del menú, cal fer-ho a tots els fitxers HTML (23, inclosos `avis-legal` i `404.html`) (Claude ho fa d'una sola vegada).
- **Pàgina nova** → afegir-la en els tres idiomes, al menú de totes les pàgines, als enllaços `hreflang` i a `sitemap.xml`.

## 8. Imatges, logos i vídeos

- **Imatges** a `assets/img/`, en **WebP o JPG**, com a màxim 1600 px d'amplada i idealment **menys de 300 KB**. Noms en minúscules i sense espais (`classe-divendres-01.webp`).
- **Logos** preferiblement en **SVG** (si no, PNG amb fons transparent): `logo-color.svg` i `logo-blanc.svg`.
- **Vídeos: no els pugeu al repositori** (GitHub no admet fitxers de més de 100 MB i la web aniria lenta). Pugeu-los a YouTube i incrusteu-los amb `youtube-nocookie.com` perquè no posin galetes sense permís.
- **Menors**: publiqueu fotos o vídeos d'alumnes només amb l'autorització d'imatge signada per les famílies.

## 9. Actualització anual de This is for Terrassa

Després de cada edició:
1. Afegir els guanyadors i l'enllaç a les batalles a "Edicions anteriors".
2. Quan hi hagi data de la nova edició: canviar data, volum, cartell (`assets/img/`), jutges, horari i formularis a les tres versions de la pàgina.
3. Actualitzar les dades estructurades de l'esdeveniment (el bloc `application/ld+json` de les tres pàgines: `name`, `startDate`, `endDate`, `image`).
