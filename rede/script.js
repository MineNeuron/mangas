document.addEventListener('DOMContentLoaded', () => {
    const contacts = document.querySelectorAll('.contact');
    const chatMessages = document.getElementById('chat-messages');
    const chatWith = document.getElementById('chat-with');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    let activeContact = null;

    contacts.forEach(contact => {
        contact.addEventListener('click', () => {
            activeContact = contact.dataset.contact;
            chatWith.textContent = `Chat with: ${activeContact}`;
            loadMessages(activeContact);
        });
    });

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function loadMessages(contact) {
        chatMessages.innerHTML = '';
        let currentDate = null;

        const messages = JSON.parse(localStorage.getItem(contact)) || [];
        messages.forEach(msg => {
            const messageDate = new Date(msg.time).toLocaleDateString();
            if (messageDate !== currentDate) {
                const dateDivider = document.createElement('div');
                dateDivider.classList.add('date-divider');
                dateDivider.textContent = messageDate;
                chatMessages.appendChild(dateDivider);
                currentDate = messageDate;
            }

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message');
            messageDiv.classList.add(msg.sender === 'You' ? 'you' : 'other');
            const hour = new Date(msg.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            messageDiv.innerHTML = `
                <img src="${msg.sender === 'You' ? 'you.jpg' : contact.toLowerCase() + '.jpg'}" alt="${msg.sender}" class="photo">
                <div class="text-container ${msg.sender === 'You' ? 'you' : 'other'}">
                    <span class="sender"></span>
                    <span class="text">${msg.text}</span>
                    <span class="timestamp">${hour}</span>
                </div>
            `;
            chatMessages.appendChild(messageDiv);
        });
    }

    function sendMessage() {
        if (!activeContact) return;
        const messageText = messageInput.value.trim();
        if (!messageText) return;

        const newMessage = {
            sender: 'You',
            text: messageText,
            time: new Date()
        };

        const messages = JSON.parse(localStorage.getItem(activeContact)) || [];
        messages.push(newMessage);
        localStorage.setItem(activeContact, JSON.stringify(messages));

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.classList.add('you');
        const hour = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        messageDiv.innerHTML = `
            <img src="you.jpg" alt="You" class="photo">
            <div class="text-container you">
                <span class="sender"></span>
                <span class="text">${newMessage.text}</span>
                <span class="timestamp">${hour}</span>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        messageInput.value = '';
    }

    // Load initial messages for the first contact (if needed)
    if (contacts.length > 0) {
        contacts[0].click();
    }

    // Responder funcionalidade (para simulação)
    function simulateResponse(texto) {
        if (!activeContact) return;

        const responseMessage = {
            sender: activeContact,
            text: texto,
            time: new Date()
        };

        const messages = JSON.parse(localStorage.getItem(activeContact)) || [];
        messages.push(responseMessage);
        localStorage.setItem(activeContact, JSON.stringify(messages));

        if (activeContact === chatWith.textContent.split(': ')[1]) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message');
            const hour = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            messageDiv.classList.add('other');
            messageDiv.innerHTML = `
                <img src="${activeContact.toLowerCase()}.jpg" alt="${activeContact}" class="photo">
                <div class="text-container other">
                    <span class="sender"></span>
                    <span class="text">${responseMessage.text}</span>
                    <span class="timestamp">${hour}</span>
                </div>
            `;
            chatMessages.appendChild(messageDiv);
        }
    }

    // Simular resposta após 5 segundos para demonstração
    //setInterval(() => simulateResponse('Esta é uma resposta automática.'), 5000);
});
window.addEventListener("contextmenu", function(e) { e.preventDefault(); })
