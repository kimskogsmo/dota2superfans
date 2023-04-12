type Link = {
    lang: string,
    name: string,
    url: string
}

type TwitchStream = {
    autoplay: boolean,
    autoplayOnline: boolean,
    channel: string,
    id: string,
    lang: string,
    muted: boolean
}

type YoutubeChannel = {
    lang: string,
    channelId: string
}

type Flags = {
    showStreamsPage: boolean,
    showResultsPage: boolean
}

type Match = {
    status: 'finished' | 'in-progress' | 'not-started' | unknown,
    division: string,
    team1: string,
    team2: string,
    score1: number,
    score2: number
}

type Placement = { 
    color: string,
    division: string,
    lost: string,
    place: string,
    score: string,
    teamId: string,
    won: string
}

type Player = {
    nick: string,
    name: string
}

type Team = {
    id: string,
    name: string,
    iconSrc: string,
    division: string,
    players: Array<Player>
}

type Streams = {
    links: Array<Link>;
    order: Array<string>;
    twitch: Array<TwitchStream>;
    youtube: Array<YoutubeChannel>;
}

interface PlacedTeam extends Placement, Team { }

type TeamRow = Partial<PlacedTeam>

interface StandingsData {
    flags: Flags;
    streams: Streams;
    matches: Array<Match>;
    placements: Array<Placement>;
    teams: Array<Team>;
}