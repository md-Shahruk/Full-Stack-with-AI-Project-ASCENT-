
function createCounter(val = 0){
    let count = val;
    return{
        increment:function(){
            count = count + 1;
            return count;
        },

        decrement:function(){
            count = count - 1;
            return count;
        },
        reset:function(){
            count = val;
            return count;
        },
        getValue:function(){
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());

