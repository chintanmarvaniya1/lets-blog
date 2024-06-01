import { Client,Account,ID } from "appwrite";
import configuration from "../configuration/envImport";

export class AuthServices{
    client = new Client;
    account;

    constructor(){
        this.client.setEndpoint(configuration.appWriteURL)
                    .setProject(configuration.projectID);

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                return this.userLogin({email,password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    async userLogin({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
           throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }
    }

    async userLogout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthServices();
export default authService