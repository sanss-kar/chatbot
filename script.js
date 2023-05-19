function talk() {
    var know = {
        "Who are you": "Hello, Codewith_random here",
        "How are you": "Good :)",
        "What can I do for you": "Please give us a follow & like.",
        "Your followers": "I have my family of 5000 members, I don't have followers, I have a supportive family",
        "ok": "Thank you so much",
        "Bye": "Okay! We'll meet soon.."
    };

    var user = document.getElementById('userBox').value;
    var chatLog = document.getElementById('chatLog');

    chatLog.innerHTML += "<br>You: " + user;

    if (user in know) {
        chatLog.innerHTML += "<br>Chatbot: " + know[user];
    } else {
        chatLog.innerHTML += "<br>Chatbot: Sorry, I didn't understand";
    }

    document.getElementById('userBox').value = "";
    chatLog = "" ;// Clear the input field
}
