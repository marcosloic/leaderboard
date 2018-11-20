class LeaderboardService {
    constructor() {
        this.apiUrl = ' http://private-4f123-daznleaderboard.apiary-mock.com/';
        this.leaderboardEndpoint = 'leadership';
    }

    get leaderboardUrl() {
        return `${this.apiUrl}${this.leaderboardEndpoint}`;
    }

    get ranking() {
        return fetch(this.leaderboardUrl)
            .then(res => res.json())
    }

    get generalRanking() {
        return fetch(this.leaderboardUrl)
            .then(res => res.json())
            .then(data => data.ranking);
    }

    get personalRanking() {
        return fetch(this.leaderboardUrl)
            .then(res => res.json())
            .then(data => data.user_ranking);
    }
}

export default LeaderboardService;
