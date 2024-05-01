const { EntitySchema } = require("typeorm");

const Rendezvous = new EntitySchema({
  name: "Rendezvous",
  tableName: "rendezvous",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    patient_id: {
      type: "int",
    },
    medecin_id: {
      type: "int",
    },
    nom_patient: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    num_telephone_patient: {
      type: "varchar",
      length: 15,
      nullable: true,
    },
    date_heure: {
      type: "datetime",
    },
    motif: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    statut: {
      type: "varchar",
      length: 20,
    },
  },
  relations: {
    patient: {
      type: "many-to-one",
      target: "Patient",
      joinColumn: { name: "patient_id" },
    },
    medecin: {
      type: "many-to-one",
      target: "Medecin",
      joinColumn: { name: "medecin_id" },
    },
  },
});

module.exports = Rendezvous;
