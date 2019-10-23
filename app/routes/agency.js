var mongoose = require('mongoose');
var router=require('express').Router();
const exam = {
  'agencies': [
    {
       'name': 'Nighteye',
       'heroes': [
           {'HeroName':'Deku','Name':'Midoriya Izuku','moves':['Full cowl','Shoot, style','Detroit Smash']},
           {'HeroName':'Lemilion', 'Name':'Mirio Togata', 'moves':['Blinder Touch Eyeball Crush','Phantom Menace']}
       ]
    },
    {
       'name': 'Genius',
       'heroes': [
           {'HeroName':'Kachan', 'Name':'Katsuki Bakugo','moves':['Stun granade','Howitzer Impact','AP Shot']},
           {'HeroName':'Beast Jeanist', 'Name':'Tsunagu Hakamata', 'moves':['Fast fiber']}
       ]
    },
    {
       'name': 'Gunhead',
       'heroes': [
           {'HeroName':'Gunhead', 'Name':'Undisclosed', 'moves':['Gatling','Suppresive Fire']},
           {'HeroName':'Uravity', 'Name':'Ochaco Uraraka', 'moves':['Home run comet','Meteor shower']}
       ]
    },
    {
       'name': 'Fubuki',
       'heroes': [
           {'HeroName':'Cape Baldy', 'Name':'Saitama','moves':['Serious series: side hops','Serious series: serious punch','regular punch']},
           {'HeroName':'Demon Cyborg', 'Name':'Genos','moves':['Super Spiral Incineration Cannon','Machine Gun Blow','High Voltage Fist']},
           {'HeroName':'Blizzard of Hell', 'Name':'Fubuki', 'moves':['Hell Storm','Psychic Whirlwind','Psychic Strike']}
       ]
    }
  ]
}

router.get('/', (req, res, next) => {
    return res.json(exam.agencies)
});


router.get('/:name/hero/:hero', (req, res, next) => {
  let name = req.params.name;
  let hero = req.params.hero;
  exam.agencies.forEach(agency => {
      if(agency.name === name){
        agency.heroes.forEach(myHero => {
          if(myHero.HeroName === hero) {
            return res.json(myHero);
          }
        });
      }
    }
  );
});

router.get('/:name', (req, res, next) => {
  let name = req.params.name
  exam.agencies.forEach(agency => {
      if(agency.name === name){
        return res.json(agency);
      }
    }
  );
});

module.exports=router;
