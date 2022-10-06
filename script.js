const handleSearch = async (event) => {
	const results = document.getElementById('results');
	results.innerHTML = '';

	const query = document.getElementById('query').value;

	const data = await fetch('./data.json')
		.then((res) => res.json())
		.catch((err) => console.log(err));

	const filteredData = data.filter(
		(item) =>
			item.nama_lengkap.toLowerCase().includes(query.toLowerCase()) ||
			item.nama_panggilan.toLowerCase().includes(query.toLowerCase()) ||
			item.nim.toLowerCase().includes(query.toLowerCase()) ||
			item.nomor_telepon.toLowerCase().includes(query.toLowerCase()) ||
			item.id_line.toLowerCase().includes(query.toLowerCase()) ||
			item.email.toLowerCase().includes(query.toLowerCase())
	);

	filteredData.forEach((item) => {
		const namaLengkap = document.createElement('h1');
		namaLengkap.innerText = item.nama_lengkap;
		results.appendChild(namaLengkap);

		const namaPanggilan = document.createElement('p');
		namaPanggilan.innerText = `Nama lengkap : ${item.nama_panggilan}`;
		results.appendChild(namaPanggilan);

		const nim = document.createElement('p');
		nim.innerText = `NIM : ${item.nim}`;
		results.appendChild(nim);

		const nomorTelepon = document.createElement('p');
		nomorTelepon.innerText = `Nomor Telepon : ${item.nomor_telepon}`;
		results.appendChild(nomorTelepon);

		const idLine = document.createElement('p');
		idLine.innerText = `ID Line : ${item.id_line}`;
		results.appendChild(idLine);

		const email = document.createElement('p');
		email.innerText = `Email : ${item.email}`;
		results.appendChild(email);

		const hobi = document.createElement('p');
		hobi.innerText = `Hobi : ${item.hobi}`;
		results.appendChild(hobi);

		const tanggalLahir = document.createElement('p');
		tanggalLahir.innerText = `Tanggal Lahir : ${item.tanggal_lahir}`;
		results.appendChild(tanggalLahir);
	});
};

const btnInput = document.getElementById('btn-search');

btnInput.addEventListener('click', handleSearch);
