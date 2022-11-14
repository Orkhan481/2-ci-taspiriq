class Message {
    constructor(authorName, messageText) {
        this.authorName = authorName;
        this.time = new Date();
        this.messageText = messageText;
    }

    toString() {
        return `${gettime()} ${this.authorName} : ${this.messageText}`;
    }
}

class Messenger {
    constructor() {
        this._messages = [];
    }

    show_history() {
        for (let i in this._messages) {
            console.log(this._messages[i].toString());
        }
    }
    send(author, text) {
        this._messages.push(new Message(author, text))

    }
}

let messenger = new Messenger()
messenger.send('Orkhan', 'First message')
messenger.send('Rasul', 'Second message')
messenger.show_history()

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

