const functions = require("firebase-functions");
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
var serviceAccount = require('./permissions.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

exports.tester = functions.https.onRequest((req, res) => {
  res.status(200).send('heyoo');
})

// app.get('/ping', (req, res) => {
//   return res.status(200).send('pong!');
// });

// app.get('/api/read/:item_id', (req, res) => {
//   (async () => {
//     try {
//       const document = db.collection('items').doc(req.params.item_id);
//       let item = await document.get();
//       let response = item.data();
//       return res.status(200).send(response);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send(error);
//     }
//   })();
// });

// app.get('/api/read', (req, res) => {
//   (async () => {
//     try {
//       let query = db.collection('items');
//       let response = [];
//       await query.get().then(querySnapshot => {
//         let docs = querySnapshot.docs;
//         for (let doc of docs) {
//           const selectedItem = {
//             id: doc.id,
//             item: doc.data().item
//           };
//           response.push(selectedItem);
//         }
//       });
//       return res.status(200).send(response);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send(error);
//     }
//   })();
// });

// app.put('/api/update/:item_id', (req, res) => {
//   (async () => {
//     try {
//       const document = db.collection('items').doc(req.params.item_id);
//       await document.update({
//         item: req.body.item
//       });
//       return res.status(200).send();
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send(error);
//     }
//   })();
// });

// app.delete('/api/delete/:item_id', (req, res) => {
//   (async () => {
//     try {
//       const document = db.collection('items').doc(req.params.item_id);
//       await document.delete();
//       return res.status(200).send();
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send(error);
//     }
//   })();
// });

// app.post('/api/create', (req, res) => {
//   (async () => {
//     try {
//       await db.collection('items').doc('/' + req.body.id + '/').create({item: req.body.item});
//       console.log('here:', db.collection('items').doc());
//       return res.status(200).send();
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send(error);
//     }
//   })();
// });

// exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
