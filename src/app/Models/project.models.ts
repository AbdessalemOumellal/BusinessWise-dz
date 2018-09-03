import {Jalon} from './jalon.models';
import {Tache} from './Tache.models';
import {Outcome} from './outcome.models';

export class Project {

  id: String;
  Nom: String;
  DateDebut: Date;
  DateFin: Date;
  Impact: String;
  Desc: String;
  Jalon: Jalon[];
  Taches: Tache[];
  Outcomes: Outcome[];


  constructor(id: String, Nom: String, DateFin: Date, Impact: String, Desc: String) {
    this.id = this.getID();
    this.Nom = Nom;
    this.DateFin = DateFin;
    this.Impact = Impact;
    this.Desc = Desc;
  }

  getID () {
    return new Date().getTime().toString() + Math.floor(Math.random() * 1000000);  }
}
