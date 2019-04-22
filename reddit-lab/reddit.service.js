function RedditService($http) {
    const service = this;

    /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */
    service.fetchAwwServiceSubreddit = () => {
        // $http stuff goes here
        return $http({
            method: "GET",
            url: "https://www.reddit.com/r/aww/.json"
            });
}
}

angular
.module('RedditApp')
.service('RedditService', ['$http', RedditService]) 
// passing $http service as dependency for our service
//one time API call in service
