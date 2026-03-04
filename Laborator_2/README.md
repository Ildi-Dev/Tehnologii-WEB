# Laborator 2: Campus Info Hub

### Răspunsuri la întrebările teoretice

**1. Ce este o resursă (resource) în aplicația ta?**
În această aplicație, din perspectiva utilizatorului, o resursă reprezintă o facilitate/serviciu oferit studenților în cadrul campusului. Dar, din punct de vedere tehnic, resursa este un obiect scris în fișierul `resources.json`, care conține informații specifice: numele, tipul serviciului, locația, orarul de funcționare și etichetele . Un exemplu de resursă din aplicația mea ar fi `Biblioteca Centrală`, care are o locație (Corpul E, Etaj 1), un program (08:00 - 20:00), un tip (studiu) și mai multe etichete descriptive (#liniște, #cărți, #wifi).

**2. Dă exemplu de un URI și explică componentele acestuia.**
Un exemplu de URI (Uniform Resource Identifier) folosit în acest proiect este: `http://127.0.0.1:5500/Laborator_2/pages/library.html#program`.
Componentele acestui URI sunt:
**Schema (Protocolul):** `http://` - este protocolul web standard HTTP, folosit pentru a accesa resursa.
**Autoritatea (Host/Domeniu + Port):** `127.0.0.1:5500` - adresa serverului local (Live Server) și portul de pe care rulează aplicația.
**Calea (Path):** `/Laborator_2/pages/library.html` - locația exactă a fișierului pe server (arată că fișierul library.html se află în folderul pages, iar acesta se află în folderul Laborator_2).
**Fragmentul:** `#program` - ancorează utilizatorul la o secțiune specifică din interiorul paginii (în acest caz, secțiunea care conține tabelul cu orarul de funcționare a bibliotecii).

**3. Care părți sunt statice și care sunt dinamice?**
**Părțile statice:** Structura din paginile HTML (`library.html`, `cafeteria.html`, `event.html`), stilizarea din `stylesheet.css`, pe scurt, tot ce e afișat pe site și nu se schimbă decât dacă codul este modificat manual.
**Părțile dinamice:** Secțiunea de resurse de pe pagina principală (`index.html`) generată dinamic de către `script.js` și care extrage, cu ajutorul fetch, datele din fișierul extern `resources.json` și le afișează pe ecran. Funcționalitatea de filtrare a resurselor ("Studiu", "Mâncare", "Sport") este tot o componentă dinamică. Pe scurt, partea dinamică este tot ce modifică conținutul afișat în timp real fără a reîncărca pagina.

**4. Este aplicatia ta document-centric sau interactive (sau ambele)? De ce?**
Aplicația este o combinație de ambele, un **hibrid**.
Este **document-centric** în cea mai mare parte, deoarece avem pagini separate (`library.html`, `cafeteria.html`) între care navigam clasic, prin link-uri, ca să citim informații si conținutul static.
Totuși, conține elemente **interactive** pe pagina principală, unde datele sunt încărcate prin fetch API din JSON și manipulate pe partea de client. Avem butoane cu care putem interacționa pentru a schimba imediat starea și conținutul paginii, comportament specific aplicațiilor web moderne (SPA - Single Page Application).
