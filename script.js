const loginForm = document.getElementById('loginForm');
document.querySelector('.' + show).classList.remove('hide');
}


toRegister.onclick = () => switchForm('register-container');
toLoginFromReg.onclick = () => switchForm('sign-in-container');
toChangePass.onclick = () => switchForm('change-pass-container');
toLoginFromChg.onclick = () => switchForm('sign-in-container');


loginForm.onsubmit = (e) => {
e.preventDefault();
const user = loginUser.value.trim();
const pass = loginPass.value.trim();


const users = JSON.parse(localStorage.getItem('users'));
const found = users.find(u => u.username === user && u.password === pass);


if (!found) return alert('Akun tidak ditemukan!');


localStorage.setItem('logged', JSON.stringify(found));
popup.style.display = 'flex';
popupText.textContent = `${found.name}, gimana suasana hatimu hari ini?`;
};


registerForm.onsubmit = (e) => {
e.preventDefault();
const user = regUser.value.trim();
const name = regName.value.trim();
const pass = regPass.value.trim();


let users = JSON.parse(localStorage.getItem('users'));
if (users.find(u => u.username === user)) return alert('Username sudah dipakai!');


users.push({ username: user, name: name, password: pass });
localStorage.setItem('users', JSON.stringify(users));
alert('Akun berhasil dibuat!');
switchForm('sign-in-container');
};


changePassForm.onsubmit = (e) => {
e.preventDefault();
const user = chgUser.value.trim();
const oldp = oldPass.value.trim();
const newp = newPass.value.trim();


let users = JSON.parse(localStorage.getItem('users'));
let found = users.find(u => u.username === user && u.password === oldp);


if (!found) return alert('Data salah!');


found.password = newp;
localStorage.setItem('users', JSON.stringify(users));
alert('Password berhasil diubah!');
switchForm('sign-in-container');
};


moodSubmit.onclick = () => {
const mood = moodInput.value.toLowerCase();
let list = [];


if (mood.includes('santai')) list = [
{ name: 'Chill Vibes', url: 'https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj' },
{ name: 'LoFi Beats', url: 'https://open.spotify.com/playlist/37i9dQZF1DXdPDmH1VAZi0' }
];
else if (mood.includes('galau') || mood.includes('sedih')) list = [
{ name: 'Galau Nation', url: 'https://open.spotify.com/playlist/37i9dQZF1DWXbttAJcbphz' }
];
else if (mood.includes('seru') || mood.includes('semangat')) list = [
{ name: 'Energy Booster', url: 'https://open.spotify.com/playlist/37i9dQZF1DX8FwnYE6PRvL' }
];
else list = [
{ name: 'Mix Mood Playlist', url: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M' }
];


playlistDiv.innerHTML = '<h2>Rekomendasi Playlist:</h2>' + list.map(p => `<a href="${p.url}" target="_blank">${p.name}</a>`).join('');


popup.style.display = 'none';
};
