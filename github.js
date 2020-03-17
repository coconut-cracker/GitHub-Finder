class GitHub {
  constructor() {
    this.config = {
      headers: { Authorization: "e53f369c62fbacd3fbeed8cde0572e11e23b7bf9" }
    };


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
