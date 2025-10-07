const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  userInput.value = "";

  setTimeout(() => {
    const reply = generateReply(message.toLowerCase());
    appendMessage("bot", reply);
  }, 500);
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateReply(msg) {
  const now = new Date();
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();

  if (msg.includes("hello") || msg.includes("hi"))
    return "Hey there! How can I help you today? 😊";
  if (msg.includes("your name"))
    return "I'm ChatBot, your friendly assistant 🤖";
  if (msg.includes("time"))
    return The current time is ${time} ⏰;
  if (msg.includes("date"))
    return Today's date is ${date} 📅;
  if (msg.includes("day"))
    return It's ${dayNames[now.getDay()]} today 🌞;
  if (msg.includes("joke"))
    return getRandomJoke();
  if (msg.includes("weather"))
    return "It looks sunny and bright today ☀ (just guessing 😄)";
  if (msg.includes("bye"))
    return "Goodbye! Have a great day! 👋";
  if (msg.includes("how are you"))
    return "I'm doing great! Thanks for asking. How about you? 😊";
  if (msg.includes("help"))
    return "I can tell you the time, date, day, jokes, weather, and more!";
  if (msg.includes("motiv"))
    return getMotivation();
  if (msg.includes("thank"))
    return "You're welcome! 💖";
  
  return "Hmm... I didn’t understand that. Try asking about time, date, or tell me to make a joke! 🤔";
}

function getRandomJoke() {
  const jokes = [
    "Why did the computer show up at work late? It had a hard drive 😅",
    "Why don't programmers like nature? Too many bugs 🌳",
    "I told my computer I needed a break — it said 'No problem, I'll go to sleep!' 😴",
    "Why do Java developers wear glasses? Because they don’t C#! 🤓"
  ];
  return jokes[Math.floor(Math.random() * jokes.length)];
}

function getMotivation() {
  const quotes = [
    "Believe you can and you’re halfway there 💪",
    "Dream big, work hard, stay humble 🌟",
    "Don’t stop until you’re proud 🏆",
    "The best way to get started is to quit talking and begin doing 🚀"
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}