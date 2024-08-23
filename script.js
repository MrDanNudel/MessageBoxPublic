document.getElementById("postButton").addEventListener("click", function () {
  const messageInput = document.getElementById("messageInput");
  const messageText = messageInput.value.trim();
  const noMessagesText = document.getElementById("noMessages");
  const messagesContainer = document.getElementById("messagesContainer");

  if (messageText) {
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
      if (messageElement.classList.contains("ranked")) {
        messageElement.classList.remove("ranked");
        rankButton.textContent = "Rank";
      } else {
        messageElement.classList.add("ranked");
        rankButton.textContent = "Unrank";
      }
    });

    // Add edit functionality
    editButton.addEventListener("click", function () {
      const newMessage = prompt("Edit your message:", messageText);
      if (newMessage !== null && newMessage.trim() !== "") {
        const now = new Date();
        const editedTime = now.toLocaleTimeString();
        const editedTimeText = `Edited at ${editedTime}`;

        // Update message content
        messageElement.querySelector(".message-content p").textContent =
          newMessage;

        // Update "Posted at" text
        const messageTimeElement =
          messageElement.querySelector(".message-time");
        messageTimeElement.innerHTML = `<div>Posted at ${messageTime}</div><div class="edited-time">${editedTimeText}</div>`;
      }
    });

    // Add delete functionality with smooth fade-out effect
    deleteButton.addEventListener("click", function () {
      messageElement.classList.add("fade-out");
      setTimeout(() => {
        messageElement.remove();
        // Check if there are no messages and show "No messages" text
        if (!messagesContainer.hasChildNodes()) {
          noMessagesText.style.display = "block";
        }
      }, 600); // Match this duration with the fade-out transition time
    });

    messagesContainer.prepend(messageElement);
    messageInput.value = "";

    // Hide "No messages" text if a new message is added
    noMessagesText.style.display = "none";
  } else {
    alert("Please enter a message.");
  }
});
