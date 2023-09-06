const defaultLocale = 'en';
const translations = {
    en: {
        title: "Folder Upload",
        selectDir: "Select a Directory",
        helpTutorial: "Help/Tutorial",
        sponsor: ", development sponsored by UiT/DataverseNO",
        startUpload: "Start Uploads",
        uploadingTo: "Uploading to ",
        msgGettingDatasetInfo: "Getting Dataset Information...",
        msgFilesAlreadyExist: "All files already exist in dataset. There's nothing to upload.",
        msgUploadOnlyCheckedFiles: "Some files already exist in dataset. Only checked files will be uploaded.",
        msgReadyToStart: "Ready. Click Select a Directory. Review the selected files. Start Uploads. (Note - selection dialog will not show files, but they will be shown afterwards on the page.) ",
        msgStartUpload: "Checked files will be uploaded.",
        msgNoFile: "No files to upload. Check some files, or refresh to start over.",
        msgUploadCompleteRegistering: "Uploads to S3 complete. Now registering all files with the dataset. This may take some time for large numbers of files.",
        msgUploadComplete: "Upload complete, all files in dataset. Close this window and refresh your dataset page to see the uploaded files : <a href=\"{0}\">{0}</a>",
    },
    fr: {
        title: "Envoi d'un dossier",
        selectDir: "Sélectionner un répertoire",
        helpTutorial: "Aide/Tutoriel",
        sponsor: ", développement sponsorisé par UiT/DataverseNO",
        startUpload: "Démarrer les envois",
        uploadingTo: "Envoi vers ",
        msgGettingDatasetInfo: "Récupération des informations du jeu de données...",
        msgFilesAlreadyExist: "Tous les fichiers existent déjà dans le jeu de données. Il n'y a rien à envoyer.",
        msgUploadOnlyCheckedFiles: "Certains fichiers existent déjà dans le jeu de données. Seuls les fichiers cochés seront envoyés.",
        msgReadyToStart: "Prêt. Cliquez sur Sélectionner un répertoire. Passez en revue les fichiers sélectionnés. Démarrez les envois. (Remarque : la boîte de dialogue de sélection ne montrera pas les fichiers, mais ils seront affichés ensuite sur la page.) ",
        msgStartUpload: "Les fichiers cochés seront envoyés.",
        msgNoFile: "Aucun fichier à envoyer. Cochez certains fichiers ou rafraîchissez la page pour recommencer.",
        msgUploadCompleteRegistering: "Envois vers S3 terminés. Enregistrement de tous les fichiers en cours dans le jeu de données. Cela peut prendre du temps pour un grand nombre de fichiers.",
        msgUploadComplete: "Envoi terminé, tous les fichiers sont dans le jeu de données. Fermez cette fenêtre et rafraîchissez la page de votre jeu de données pour voir les fichiers envoyés : <a href=\"{0}\">{0}</a>",
    },
};

export default function getLocalizedString(locale, key, keyArgs) {
    if(!locale || !translations[locale]) {
        locale = defaultLocale;
        console.log('getLocalizedString - locale empty or unknown, using defaultLocale: '+defaultLocale)
    }
    if (translations[locale] && translations[locale][key]) {
        var tr = translations[locale][key];
        if(keyArgs && Array.isArray(keyArgs)) {
            for (var i = 0; i < keyArgs.length; i++) {
                tr = tr.replaceAll('{'+i+'}',keyArgs[i]);
            }
        }
        return tr;
    }
    console.log('getLocalizedString - transalation not found with locale: '+locale+' and key:'+key);
    return key;
}