function reg() {
    const polz = document.getElementById('name').value;

    if (!polz) {
        alert('Все поля должны быть заполнены!');
        return;
    }

    statusHistory.push(polz);

    const data = {name: polz};
    localStorage.setItem('userData', JSON.stringify(data));

    location.href = 'chats.html';
}
