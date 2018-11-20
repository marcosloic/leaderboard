class LeaderboardService {
    constructor() {
        this.apiUrl = '//private-anon-f2fe540f9b-daznleaderboard.apiary-mock.com/dev/';
        this.leaderboardEndpoint = 'leaderboard/1';
    }

    get leaderboardUrl() {
        return `${this.apiUrl}${this.leaderboardEndpoint}`;
    }

    get ranking() {
        return fetch(this.leaderboardUrl).then(res => res.json());
    }

    get generalRanking() {
        return this.ranking.then(data => data.ranking);
    }

    get personalRanking() {
        return this.ranking.then(data => data.user_ranking);
    }
}

export default LeaderboardService;
