exports.host = 'sim.smogon.com';
exports.port = 8000;

// Host and port to use for the http server part of Kid A.
exports.serverhost = 'http://orderofphoenix.herokuapp.com-80.psim.us/';
exports.serverport = 80;

// Enter a value (or load a file) for these if you want to use https and SSL.
exports.sslCert = '';
exports.sslKey = '';
exports.sslCa = '';

// Username and password to use on PS.
exports.username = 'rohan99';
exports.password = 'faps9810';

// Rooms to join and avatar to choose. The maximum amount of rooms Kid A can join upon connecting is 11.
// The reason for these restrictions is the way PS protocol works. I might try to get around it at a later date, but this is it for now.
exports.rooms = ['dev'];
exports.avatar = 246;

// Symbol to use for commands.
exports.commandSymbol = '.';

// Names of  the administrators of the bot.
exports.admins = new Set();

// Blacklisted plugins. Accepts filenames.
exports.blacklistedPlugins = new Set();

// Rooms that shouldn't show up in on public pages.
exports.privateRooms = new Set();

// Whether the bot can (and should) check IPs instead of usernames for room moderation.
exports.checkIps = 'true';

// Last.fm API key, used for the lastfm feature.
exports.lastfmKey = '';

// Youtube API key, used for the lastfm feature.
exports.youtubeKey = '';

// Mashape API key, used for the hs feature.
exports.mashapeKey = '';
