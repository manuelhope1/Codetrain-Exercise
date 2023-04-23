class Human{
	constructor(name,age)
	{
		this.name=name;
		this.age=age;
	}
	talk(){
		return this.name + "speaks" 
	}
}

class Man extends Human{

}

let newMan = new Man("Clifford",28)

console.log(newMan.talk())