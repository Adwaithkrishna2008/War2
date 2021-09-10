class Game{

constructor(){}


getState(){
var gameStateref=database.ref('gameState')
gameStateref.on("value",function(data)
{
    gameState=data.val()
})
}

update(state){
database.ref('/').update({
    gameState:state
})
}


async start(){
    
    
if(gameState===0){
    player= new Player()
    var playerCountref=await database.ref('playerCount').once("value")
    if(playerCountref.exists()){
        playerCount=playerCountref.val();
        player.getCount();
    }
  form= new Form()
    form.display()}

        tank1=createSprite(900,250,50,50)
        tank1.addImage(tank1_img);
        tank1.scale=0.3;
        tank2=createSprite(100,250,50,50);
        tank2.addImage(tank2_img);
        tank2.scale=1.2;
         tanks=[tank1,tank2];
         
    }

play(){
    form.hide()
    Player.getPlayerInfo()
    image(bg,0,0,width,height);
    if(allPlayers!=undefined){
        var index=0;
        var x=0;
        var y
        for(var plr in allPlayers){
            index+=1;
            x=x+500;
            y=displayHeight-allPlayers[plr].distance
            tanks[index-1].x=x;
            tanks[index-1].y=y;
            if(index=player.index){
                tanks[index-1].shapeColor="black";
                camera.position.x=displayHeight/2
                camera.position.y=tanks[index-1].y
                

            }
        }}

        if(keyDown(UP_ARROW)&&player.index!=null){
player.distance+=10;
player.update()
        }
        if(keyDown(DOWN_ARROW)&&player.index!=null){
            player.distance+=10;
            player.update();

        }
        drawSprites();
}



end(){
    console.log("End");
}













}