class GitHub {
  constructor() {
    this.config = {
      headers: { Authorization: "e53f369c62fbacd3fbeed8cde0572e11e23b7bf9" }
    };

    // this.client_id = "0ab7dc7135fcc7cfc5e3";
    // this.client_secret = "ef56619b47749510642443159bc125ad0321b1af";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos`,
      this.config
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile: profile, //or just profile,
      repos
    };
  }
}
