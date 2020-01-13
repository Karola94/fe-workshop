export class GitHubUser {
     constructor ( { avatar_url: img = '', bio = 'Cannot get a biography' } = {} ) {
          [this.img, this.bio] = [img, bio];
     };

     toString() {
          return this.bio;
     }
}