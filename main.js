// ###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, color) {
  this.name = name
  this.status = 'normal'
  this.hungry = true
  this.pet = function (name) {
    this.status = 'happy'
  }
}

const sadie = new Dog('sadie')
sadie.color = 'black'
sadie.hungry = false
sadie.owner = 'mason'
const moonshine = new Dog('moonshine')
const atticus = new Dog('atticus')

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name) {
  this.name = name
  this.cool = false
  this.pet = function (dogName) {
    dogName.status = 'happy'
  }
  this.feed = function (dogName) {
    dogName.hungry = false
  }
}

// Instances of Human
// Needed: mason, julia

const mason = new Human('mason')
const julia = new Human('julia')
julia.cool = true
