class Ground{

    constructor(){

        var options={
            isStatic:true,
            friction:0.4
        }
      this.body = Bodies.rectangle(500,600,1200,20,options);
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      fill("silver");
      rect(500,610,1200,20);
    
    }

}