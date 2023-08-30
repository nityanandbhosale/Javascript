 // objecct
 //1> property and methods

 // types of objects in javascript
 //1> object literal
 //2> function constructor
 //3> Es6 class
 //4> object.creat()

 // ------------ Now -----------
 // ---------------  Polymorpism ------------


 class company {
     constructor(comName,type){
         this.comName=comName
         this.type=type
     }
     industry(){
         console.log(`${this.comName} this is the big industry`)
     }
     owner(){
         console.log(`${this.comName} owner is  MR,Rtan TATA`)
     }
 }

 class TCS extends company {
     constructor(comName,type,position,profit){
       super(comName,type,position,profit)
           this.position=position
           this.profit=profit
    }
    industry(){
        console.log(`${this.comName} this is the big industry`)
    }

    owner(){
        console.log(`${this.comName} owner is  MR.Rtan TATA`)
    }
 }
    
 

 class Telicom extends TCS {
     constructor(comName,type,position,profit){
         super(comName,type,position,profit)
     }

     industry(){
        console.log(`${this.comName} this is the big industry`)
    }

     owner(){
        console.log(`${this.comName} owner is  MR,Rtan TATA`)
    }

 }

 let industry =new Telicom('TATA','telocomunication',3,'2billion')
 console.log(industry)

// console.log(industry.profit)

 let newindus = new TCS('TATA','IT',1,'10billion')
 console.log(newindus)
 
 console.log(newindus.profit)
 console.log(industry.profit)

 industry.industry()
 industry.owner()

 newindus.industry()
 newindus.owner()

 console.log(industry.comName)
 console.log(industry.type)
 console.log(industry.position)
 console.log(industry.profit)

 console.log("-----------------------------------------")

 console.log(newindus.comName)
 console.log(newindus.type)
 console.log(newindus.position)
 console.log(newindus.profit) 

 //--------------------- Polymorphism ---------------------

 //Overloading

 //same class,  same method,    different signature(like parameters)


 //--------------- Example --------------------

 class calculator {
     
    subtraction(a,b){
        console.log(a - b)
    }

    subtraction(a,b,c){
        console.log(a - b- c)
    }

    subtraction(a,b, c,d){
        console.log(a - b -c - d)
    }
    
 }
let sub = new calculator
sub. subtraction(10,6,3,4)
sub.subtraction( 18,20,26)   // overloading here
sub.subtraction(20,10)       // overloading here


// solution on there 

function subtraction(a,b,c,d){
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

if( a !== undefined && b !== undefined && c !== undefined && d !== undefined ){
    console.log(a - b - c - d)
}
else if(a !== undefined && b !== undefined && c !== undefined ){
    console.log(a - b - c )
}

else if(a !== undefined && b !== undefined){
    console.log(a - b)
}
}
subtraction( 20,10,5)
subtraction(20,22)
subtraction(30,12,5,2)

console.log("****************************************************")

class calculator2 {

    addition(x,y,z,a){

        if(x !== undefined && y !== undefined && z !== undefined && a !== undefined){
            console.log(x + y + z + a)
        }

        else if(x !== undefined && y !== undefined && z !== undefined ){
            console.log(x + y + z)
        }

        else if(x !== undefined && y !== undefined){
            console.log(x + y)
        }

    }
}

let cal = new calculator2

cal.addition(10,20,30)
// cal.addition(15,20,30)
cal.addition(20,30)
cal.addition(10,10)
cal.addition(10,5,20,26)

//Overloading ---> same class,  same method name,  different signature


//--------------- polymorphism --------------
//------------- Overiding ----------------

// Overiding------> diff class , same method ,  same signature

class parliment {
    constructor(country,chief){
        this.country=country
        this.chief=chief
    }

    baseof(body){
        console.log('this the indian' + body + 'body')
        
    
    }
}

class loksabha extends parliment {
    constructor(country,chief,level){
        super(country,chief)
        this.level=level
    }
    
    baseof(body){
        console.log('this the indian' + body +'body' )
    }
}

class rajyasabha extends loksabha {
    constructor(country,chief,level,members){
        super(country,chief,level)
        this.members=members
    }

    baseof(body){
        console.log('this the indian' + body + 'structure')
    }
}

let par = new rajyasabha('india','pm','union',547)
console.log(par)
par.baseof('statutary')

let par2  = new loksabha('india','pm','central')
console.log(par2)

par2.baseof('structure')

class parliment1 {

    national(body){
        console.log(`this is the indian ${body}`)
    }
}
 class loksabha1 extends parliment1 {

    national(body){
        console.log(`this is the indian ${body} structure`)
    }
 }

 let type = new loksabha1()
 console.log(type)

 type.national('parlimentary')

//this is the changes











 











