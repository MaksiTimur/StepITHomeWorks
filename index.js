/* Сделать это задание с помощью наследования классов (Team ни от чего не наследуется, там остаётся композиция) */

console.clear();

function Human(name, age) {
    const _name = name;
    const _age = age;

    Object.defineProperty(this, 'name', {
        get() {
            return _name;
        }
    });

    Object.defineProperty(this, 'age', {
        get() {
            return _age;
        }
    });
}

function Player(name, age, sportName, inMainTeam) {
    Human.call(name, age);

    const _sportName = sportName;
    const _inMainTeam = inMainTeam;

    Object.defineProperty(this, 'name', {
        get() {
            return name;
        }
    });

    Object.defineProperty(this, 'age', {
        get() {
            return age;
        }
    });

    Object.defineProperty(this, 'sportName', {
        get() {
            return _sportName;
        }
    });

    Object.defineProperty(this, 'inMainTeam', {
        get() {
            return _inMainTeam;
        }
    });
}

Object.setPrototypeOf(Player.prototype, Human.prototype);

function FootbalPlayer(name, age, inMainTeam) {
    Player.call(name, age, 'footbal', inMainTeam);

    Object.defineProperty(this, 'name', {
        get() {
            return name;
        }
    });

    Object.defineProperty(this, 'age', {
        get() {
            return age;
        }
    });

    Object.defineProperty(this, 'sportName', {
        get() {
            return sportName;
        }
    });

    Object.defineProperty(this, 'inMainTeam', {
        get() {
            return inMainTeam;
        }
    });
}

Object.setPrototypeOf(FootbalPlayer.prototype, Player.prototype);

function Team() {
    const _footbalPlayers = [];

    Object.defineProperty(this, 'players', {
        get() {
            return [..._footbalPlayers];
        }
    })
    
    this.addPlayers = function (...footbaPlayers) {
        _footbalPlayers.push(...footbaPlayers);
    }

    this.deletePlayer = function (footbaPlayer) {
        const indexOfFootbalPlayer = _footbalPlayers.indexOf(footbaPlayer);

        if (indexOfFootbalPlayer !== -1) {
            _footbalPlayers.splice(indexOfFootbalPlayer, 1);
        }
    }

    this.getPlayersSortedByName = function () {
        return [..._footbalPlayers].sort(function (a, b) {
            const name1 = a.name;
            const name2 = b.name;

            const name1InLowerCase = name1.toLowerCase();
            const name2InLowerCase = name2.toLowerCase();

            if (name1InLowerCase > name2InLowerCase) return 1;
            if (name1InLowerCase < name2InLowerCase) return -1;

            if (name1 > name2) return 1;
            if (name1 < name2) return -1;

            return 0;
        })
    }

    this.getFilteredPlayers = function(inMainTeam) {
        return _footbalPlayers.filter(function(footballPlayer) {
            return footballPlayer.inMainTeam === inMainTeam;
        })
    }
}