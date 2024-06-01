import { Client, Databases, Storage, ID, Query } from "appwrite";
import configuration from "../configuration/envImport";

export class ArticleService {
    client = new Client();
    database;
    storage;

    constructor() {
        this.client
            .setEndpoint(configuration.appWriteURL)
            .setProject(configuration.projectID);

        this.database = new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async createArticle({ title, slug, content, image, status, userId }) {
        try {
            return await this.database.createDocument(
                configuration.databaseID,
                configuration.collectionID,
                slug,
                {
                    title,
                    image,
                    content,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw ("Error",error)
        }

    }

    async updateArticle(slug,{title, content, image, status}){
        try {
            return await this.database.updateDocument(
                configuration.databaseID,
                configuration.collectionID,
                slug,
                {
                    title,
                    image,
                    content,
                    status,
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deleteArticle(slug){
        try {
            await this.database.deleteDocument(
                configuration.databaseID,
                configuration.collectionID,
                slug
            )
            return true
        } catch (error) {
            throw error
            return false
        }
        return false
    }

    async getArticle(slug){
        try {
            return await this.database.getDocument(
                configuration.databaseID,
                configuration.collectionID,
                slug
            )
        } catch (error) {
            throw error
            return false
        }
        return false
    }

    async gatAllActiveArticle(queries=[Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(
                configuration.databaseID,
                configuration.collectionID,
                queries,
            )
        } catch (error) {
            throw error
            return false
        }
        return false
    }


    async uploadImage(image){
        try {
            return await this.storage.createFile(
                configuration.bucketID,
                ID.unique(),
                image
            )
        } catch (error) {
            throw error
            return false
        }
    }

    async deleteImage(imageID){
        try {
            await this.storage.deleteFile(
                configuration.bucketID,
                imageID
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    getImagePreview(fileId){
        
        return this.storage.getFilePreview(
            configuration.bucketID,
            fileId,
           
        )
        
    }
}

const articleService = new ArticleService();
export default articleService;