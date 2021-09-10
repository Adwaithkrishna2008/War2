class Form{

constructor(){
    this.input=createInput("Name")
    this.button=createButton('fight')
    this.greeting=createElement('h3')
    this.title=createElement('h3')
    this.reset=createButton('RESET')
    }

hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
display(){
    this.title.html("WAR COMBATS")
    this.title.position(displayWidth/2-50,0)
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth-700,450);
    this.reset.position(displayWidth/2+350,700);
    
    this.button.mousePressed(()=>
    {
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        player.name=this.input.value();
        playerCount+=1;
player.update();
player.updateCount(playerCount);

        this.greeting.html("welcome to the combat of tanks"+player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4);
      });

this.reset.mousePressed(()=>{
    game.update(0)
    player.updateCount(0)
})



    }


}