const socketio = require("socket.io");

class Socket {

    io;

    static initialize(app) {
        if (!this.io) {
            this.io = socketio(app, {
                cors: {
                    origin: '*',
                    methods: ['GET', 'POST']
                }
            });
        }


        this.io.on("connection", (socket) => {
            if(socket.handshake.auth.chatId){
                console.log("socket.handshake.auth.chatId", socket.handshake.auth.chatId)
                socket.join(socket.handshake.auth.chatId)
            }
            console.log('Socket connection successful')
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });

            socket.on("private message", ({ content, to }) => {
                socket.to(to).emit("private message", {
                  content,
                  from: socket.id,
                });
            });
        });
    }

    static sendMessage(data, event) {
        // console.log("event", event)
        this.io.emit(event, data)
    }
}

module.exports = Socket