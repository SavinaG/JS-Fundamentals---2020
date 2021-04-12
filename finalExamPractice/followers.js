function followers(input) {
    let followers = {};
    for (let i = 0; i < input.length; i++) {
        let [command, username, count] = input[i].split(': ');
        switch (command) {
            case 'New follower':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                break;
            case 'Like':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                followers[username].likes += +count;
                break;
            case 'Comment':
                if (!followers.hasOwnProperty(username)) {
                    followers[username] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                followers[username].comments++;
                break;
            case 'Blocked':
                if (followers.hasOwnProperty(username)) {
                    delete followers[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
            case 'Log out':
                break;
        }
    }
    let sorted = Object.entries(followers).sort((a, b) => b[1].likes - a[1].likes || a[0].localeCompare(b[0]));
    console.log(`${sorted.length} followers`);
    for (let kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].likes + kvp[1].comments}`);
    }
}
followers([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
    ])
 