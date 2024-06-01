const configuration ={
    appWriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    projectID:String(import.meta.env.VITE_APPWRITE_PROJECTID),
    databaseID:String(import.meta.env.VITE_APPWRITE_DATABASEID),
    collectionID:String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
    bucketID:String(import.meta.env.VITE_APPWRITE_URL_BUCKETID)
}

export default configuration