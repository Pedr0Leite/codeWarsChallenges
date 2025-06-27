class Dinglemouse {

    constructor() {
        this.name = this.age = this.sex = 0
        this.order = []
        this.finalStr = `Hello.`;
    }

    setAge(age) {
        this.age = age
        this.order.push("age");
        return this
    }

    setSex(sex) {
        this.sex = sex
        this.order.push("sex");
        return this
    }

    setName(name) {
        this.name = name
        this.order.push("name");
        return this
    }

    hello() {
        var orderSet = new Set(this.order);
        orderSet.forEach((val) =>{
            if(val == "age"){
                this.finalStr+= ` I am ${this.age}.`;
            }
            else if(val == "sex"){
                this.finalStr+= ` I am ${this.sex == 'M' ? "male" : "female"}.`;
                
            }
            else if(val == "name"){
                this.finalStr+= ` My name is ${this.name}.`;
                
            }
        })
        return this.finalStr;
    }
}

// let dm = new Dinglemouse().setName("Bob").setAge(27).setSex('M');
// let expected = "Hello. My name is Bob. I am 27. I am male."

// let dm = new Dinglemouse().setAge(27).setSex('M').setName("Bob");
// let expected = "Hello. I am 27. I am male. My name is Bob."

// let dm = new Dinglemouse().setName("Alice").setSex('F');
// let expected = "Hello. My name is Alice. I am female."

// let dm = new Dinglemouse().setName("Batman");
// let expected = "Hello. My name is Batman."

let dm = new Dinglemouse().setAge(25).setAge(39).setName("Sally");
// let expected = "Hello. I am 39. My name is Sally."

console.log(dm)
console.log(dm.hello());