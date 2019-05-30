const listaPacjentow = document.querySelector('#lista-pacjentow');

function renderowanie(doc) {
	let li = document.createElement('li');
	let Imie = document.createElement('span');
	let Nazwisko = document.createElement('span');
	let Numer = document.createElement('span');
	
	li.setAttribute('data-id',doc.id);
	Imie.textContent = doc.data().Imie + "";
	Nazwisko.textContent = doc.data().Nazwisko;
	Numer.textContent = doc.data().Numer;
	
	li.appendChild(Imie);
	li.appendChild(Nazwisko);
	li.appendChild(Numer);
	
	listaPacjentow.appendChild(li);
}
db.collection('Dziennik pacjenta').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
	renderowanie(doc)
})
})