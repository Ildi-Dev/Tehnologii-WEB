let resurseGlobale = [];

fetch('data/resources.json') 
    .then(res => res.json())
    .then(data => {
        resurseGlobale = data; 
        afiseazaResurse(resurseGlobale); 
    })
    .catch(err => console.error("Eroare la incarcarea JSON:", err));

function afiseazaResurse(lista) {
    const container = document.getElementById('lista-resurse');
    if(!container) return;
    container.innerHTML = ''; 

    lista.forEach(item => {
        const card = `
            <div class="resursa-card">
                <h3>${item.name}</h3>
                <p><strong>📍 Locație:</strong> ${item.location}</p>
                <p><strong>🕒 Program:</strong> ${item.program}</p>
                <p><strong>📂 Tip:</strong> ${item.type}</p>
                <div class="tag-container">
                    ${item.tags.map(t => `<span class="tag-badge">#${t}</span>`).join('')}
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function filterData(categorie) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(`'${categorie}'`)) {
            btn.classList.add('active');
        }
    });

    if (categorie === 'toate') {
        afiseazaResurse(resurseGlobale);
    } else {
        const filtrate = resurseGlobale.filter(r => r.type === categorie);
        afiseazaResurse(filtrate);
    }
}