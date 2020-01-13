import {GitHubUser} from "./model";

export async function getUser(name) {
    try {
        const resp = await fetch(`https://api.github.com/users/${name}`);
        return new GitHubUser(await resp.json());
    } catch (e) {
        console.warn(e);
        return new GitHubUser();
    }
}