class Point {
    x = 1;
    y = 5;
}

const pt = new Point();
console.log(`${pt.x}, ${pt.y}`);

class GoodGreeter extends Point {
    name: string;
    age: number;
    _address!: string;
    readonly _hello: string = "hello";
   
    constructor(age: number) {
        super();
        this.name = "awan";
        this.age = age;
        // this._hello = 'hi'; // bisa assign value
    }

    get address() {
        return this._address;
    }
    
    set address(address: string) {
        this._address = address;
    }

    get hello(){
        return this._hello;
    }

    // set hello(hello: string){
    //     this._hello = hello; // tidak bisa assign value
    // }
}

const gg = new GoodGreeter(15);
gg.address = 'Tasikmalaya';
console.log(`${gg.hello} ${gg.name}, umur kamu ${gg.age}, kamu tinggal di ${gg.address}, titik koordinat ${gg.x}, ${gg.y} `);



