class Stone{
	constructor(x,y,r)
	{
		var options={
			restitution:1.5,
            friction:1.0,
            density:1.0
		}
		this.x=x;
		this.y=y;
		this.r=r
		//this.image = loadImage(".assets/stone.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
    show(){
        
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
       // image(this.image, 0, 0, this.width, this.height);
    }
} 