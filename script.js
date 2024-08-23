document.getElementById("postButton").addEventListener("click", function () {
  const messageInput = document.getElementById("messageInput");
  const messageText = messageInput.value.trim();

  if (messageText) {
    const messagesContainer = document.getElementById("messagesContainer");
    const messageElement = document.createElement("div");
    const messageTime = new Date().toLocaleTimeString();

    messageElement.classList.add("message");
    messageElement.innerHTML = `
        <div class="message-content">
          <p>${messageText}</p>
          <div class="message-time">Posted at ${messageTime}</div>
        </div>
        <div class="action-buttons">
          <button class="rank-button">Rank</button>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </div>
      `;

    const rankButton = messageElement.querySelector(".rank-button");
    const editButton = messageElement.querySelector(".edit-button");
    const deleteButton = messageElement.querySelector(".delete-button");

    // Add rank functionality
    rankButton.addEventListener("click", function () {
      messageElement.classList.toggle("ranked");
    });

    // Add edit functionality
    editButton.addEventListener("click", function () {
      const newMessage = prompt("Edit your message:", messageText);
      if (newMessage !== null && newMessage.trim() !== "") {
        messageElement.querySelector(".message-content p").textContent =
          newMessage;
      }
    });

    // Add delete functionality
    deleteButton.addEventListener("click", function () {
      messageElement.remove();
    });

    messagesContainer.prepend(messageElement);
    messageInput.value = "";
  }
});
