class Hero{
  constructor(name){
    this.name = name
    this.health = 100
    this.weapons ={
      sprinkleSpray: 5,
      sugarShock: 10
    }
    this.catchPhrases = ['i\'m fresher than day old pizza',
 'you can\'t count my calories']

 talkSass(){
   console.log(this.catchPhrases[0])
 }
 announceHealth(){
   console.log(this.health)
 }
 fight(){
   console.log('i\'m ready to rumble')
 }
  }
}
