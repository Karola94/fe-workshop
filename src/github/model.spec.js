import { GitHubUser } from './model';
import { describe } from "mocha";
import { it } from 'mocha';

const assert = require('assert'); //assert from Node

describe('GitHubUser', () => {
    it('should create an input to an object with img and bio properties', () => {
        //given
        const [givenUrl, givenBio] = ['url', 'bio'];
        const input = {
            avatar_url: givenUrl,
            bio: givenBio
        };
        //when
        const result = new GitHubUser(input);

        //then
        assert.equal(result.img, givenUrl);
        assert.equal(result.bio, givenBio);
    });

    it('should return bio from toString implementation', () => {
        //given
        const [givenUrl, givenBio] = ['url', 'bio'];
        const input = {
            avatar_url: givenUrl,
            bio: givenBio
        };
        //when
        const result = new GitHubUser(input);

        //then
        assert.equal(`${result}`, givenBio);
    });
});