const btnInput = document.getElementById('btn-search');
const queryInput = document.getElementById('query');

const handleSearch = async (event) => {
	const results = document.getElementById('results');
	results.innerHTML = '';

	const data = await fetch('./data.json')
		.then((res) => res.json())
		.catch((err) => console.log(err));

	const query = queryInput.value.toLowerCase();

	const filteredData = data.filter(
		(item) =>
			item.nama_lengkap.toLowerCase().includes(query) ||
			item.nama_panggilan.toLowerCase().includes(query) ||
			item.nim.toString().toLowerCase().includes(query)
	);

	if (!query) {
		const enterQuery = document.createElement('p');
		enterQuery.innerText = 'Masukan kata kunci pencarian';
		results.appendChild(enterQuery);
	} else if (filteredData.length > 0) {
		filteredData.forEach((item) => {
			const card = document.createElement('div');
			card.classList.add('card');

			const namaLengkap = document.createElement('h1');
			namaLengkap.innerText = item.nama_lengkap;
			card.appendChild(namaLengkap);

			const namaPanggilan = document.createElement('p');
			namaPanggilan.innerText = `Nama lengkap : ${item.nama_panggilan}`;
			card.appendChild(namaPanggilan);

			const nim = document.createElement('p');
			nim.innerText = `NIM : ${item.nim}`;
			card.appendChild(nim);

			const nomorTelepon = document.createElement('p');
			nomorTelepon.innerText = `Nomor Telepon : ${item.nomor_telepon}`;
			card.appendChild(nomorTelepon);

			const idLine = document.createElement('p');
			idLine.innerText = `ID Line : ${item.id_line}`;
			card.appendChild(idLine);

			const email = document.createElement('p');
			email.innerText = `Email : ${item.email}`;
			card.appendChild(email);

			const hobi = document.createElement('p');
			hobi.innerText = `Hobi : ${item.hobi}`;
			card.appendChild(hobi);

			const tanggalLahir = document.createElement('p');
			tanggalLahir.innerText = `Tanggal Lahir : ${item.tanggal_lahir}`;
			card.appendChild(tanggalLahir);

			results.appendChild(card);
		});
	} else {
		const notFound = document.createElement('p');
		notFound.innerText = 'Data tidak ditemukan';
		results.appendChild(notFound);
	}
};

const handleEnter = (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
		btnInput.click();
	}
};

btnInput.addEventListener('click', handleSearch);
queryInput.addEventListener('keypress', handleEnter);
