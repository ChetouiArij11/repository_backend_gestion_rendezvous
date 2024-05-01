const express = require('express');
const router = express.Router();
const rendezvousController = require('../controllers/rendezvousController');

// Route pour obtenir tous les rendez-vous
router.get('/', rendezvousController.getAllRendezvous);

// Route pour obtenir un rendez-vous par son ID
router.get('/:id', rendezvousController.getRendezvousById);

// Route pour créer un nouveau rendez-vous
router.post('/', rendezvousController.createRendezvous);

// Route pour mettre à jour un rendez-vous existant
router.put('/:id', rendezvousController.updateRendezvous);

// Route pour supprimer un rendez-vous
router.delete('/:id', rendezvousController.deleteRendezvous);

// Route pour obtenir les rendez-vous d'un patient par son ID
router.get('/patient/:patientId', rendezvousController.getRendezvousByPatientId);

// Route pour obtenir les rendez-vous d'un médecin par son ID
router.get('/medecin/:medecinId', rendezvousController.getRendezvousByMedecinId);

module.exports = router;
