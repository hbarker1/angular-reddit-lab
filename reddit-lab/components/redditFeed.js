function RedditFeed(RedditService, $q) {
    const ctrl = this;
    
    // List of reddit posts to display
    ctrl.feed = [];

    /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */
    ctrl.fetchAwwSubreddit = () => {
        // Call service, then set our data
        return $q(function (resolve, reject) {
            RedditService.fetchAwwServiceSubreddit()
            //calling to service then gets API from that function wrapped in this promise
        .then((response) => {
            // do something with this data
            //get children from data
            console.log(response);
            let unicorn = response.data.data.children;
            unicorn.forEach(function(child, index) {
                // forEach calls the function you supply then loops it through -
                // same as <ng-repeat ="child in unicorn">
                let childObj = {
                    title: child.data.title,
                    img: child.data.thumbnail,
                    permalink: child.data.url
                }
                ctrl.feed.push(childObj);

                if (index === (unicorn.length -1)) {
                    resolve ()
                    //resolve is a function when promise has succeeded then it calls .then
                }
                //add to feed array
            //orginaze in to objects for each one

            // add feed array
            //resolve the promise

            // service


        });
            
        }); 
    });
}
ctrl.fetchAwwSubreddit();
}

  
  angular.module('RedditApp')
  .component('redditFeed', {
    template: `
        <div ng-repeat="post in $ctrl.feed">
            <h2>{{post.title}}</h2>
            <a href="{{post.permalink}}"><img src="{{post.img}}"/></a>

        </div>
    `, // or use templateUrl
    controller: RedditFeed,
});