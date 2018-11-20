class LeaderboardService {
    constructor() {
        this.apiUrl = '//private-4f123-daznleaderboard.apiary-mock.com/';
        this.leaderboardEndpoint = 'leaderboard';
    }

    get leaderboardUrl() {
        return `${this.apiUrl}${this.leaderboardEndpoint}`;
    }

    get ranking() {
        return fetch(this.leaderboardUrl).then(res => res.json());
        // return Promise.resolve({
        //     ranking: [
        //         {'nick_name': 'test'},
        //         {'nick_name': 'test2'},
        //         {'nick_name': 'test3'},
        //         {'nick_name': 'test4'},
        //         {'nick_name': 'test5'},
        //         {'nick_name': 'test6'},
        //     ],
        //     user_ranking: {
        //         'nick_name': 'personal user'
        //     }
        // })
    }

    get generalRanking() {
        return this.ranking.then(data => data.ranking);
    }

    get personalRanking() {
        return this.ranking.then(data => data.user_ranking);
    }
}

export default LeaderboardService;
