class LeaderboardService {
    constructor() {
        this.apiUrl = '//private-anon-f2fe540f9b-daznleaderboard.apiary-mock.com/dev/';
        this.leaderboardEndpoint = 'leaderboard';
        this.leaderboardUrl = `${this.apiUrl}${this.leaderboardEndpoint}`
    }

    getRanking(sportId) {
        return fetch(this.leaderboardUrl + '/' + sportId).then(res => res.json());
    }

    getGeneralRanking(sportId) {
        return this.getRanking(sportId).then(data => data.ranking);
    }

    getPersonalRanking(sportId) {
        return this.getRanking(sportId).then(data => data.user_ranking);
    }
}

export default LeaderboardService;
