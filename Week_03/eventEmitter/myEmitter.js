
class myEmitter{
    constructor(){
        this.events = {}; // here store all events
    }

    on(eventName, listener){
        if(!this.events[eventName]){
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }
    off(eventName, listeneroff){
        if(!this.events[eventName]) return;
        this.events[eventName] =  this.events[eventName].filter(l => l !== listeneroff);
    }

    once(eventName, listener){
        const wrapper = (...args) => {
            listener(...args);
            this.off(eventName, wrapper);
        }
        this.on(eventName, wrapper);
    }

    emit(eventName, ...args){
        if(this.events[eventName]){
            this.events[eventName].forEach(l => l(...args));
        }
    }
}

const emitter = new myEmitter();

function A(data) {
    console.log('A login:', data);
}

function B(data) {
    console.log('B login:', data);
}

function C(data) {
    console.log('C logout:', data);
}

function D(data) {
    console.log('D logout:', data);
}
emitter.on("login", A);
emitter.on("login", B);
emitter.on("logout", C);
emitter.on("logout", D);

emitter.emit('login', 'done');
emitter.off('login', A);
emitter.emit('login','work');

emitter.once('user',(user)=>{
  console.log(`Welcome ${user}`);
  
});

emitter.emit('user', 'Shatil');
emitter.emit('user', 'Shahruk');