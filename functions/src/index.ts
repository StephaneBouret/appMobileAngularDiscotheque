import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
const firebase = admin.initializeApp();


exports.deleteImgStorage = functions.firestore
  .document("disques/{disqueId}")
  .onDelete((snap, context) => {
    const deletedDisque: any = snap.data();
    const picture = deletedDisque.picture;
    if (picture.includes("https://firebasestorage")) {
      const { disqueId } = context.params;
      const bucket = firebase.storage().bucket();
      const file = bucket.file(disqueId);
      return file.delete();
    } else {
      return null;
    }
  });
