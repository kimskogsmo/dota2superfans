import React, { ChildContextProvider, createContext, useState } from 'react'

const STANDINGS_URL = "https://k73smvm3a5dqvoeqeuxrm2hvou0wdlyc.lambda-url.eu-west-1.on.aws/";

const initialData = {
    loading: true,
    divisions: [],
    flags: {
        showStreamsPage: false,
        showResultsPage: false,
    },
    streams: {
        links: [],
        order: [],
        twitch: [],
        youtube: [],
    },
    matches: [],
    placements: [],
    teams: []
}

const StandingsContext = createContext<StandingsData & { loading: boolean , divisions: Array<string>}>(initialData);

export const StandingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState<StandingsData>(initialData);

    React.useEffect(() => {
        fetch(STANDINGS_URL, {
            headers: {
                environment: 'prod'
            }
        })
            .then(res => res.json())
            .then(d => {
                console.log({ d });

                setData(d);
                setTimeout(() => {
                    setLoading(false);
                }, 500)
            });
    }, []);
    
    // const divisions = data.teams.reduce((acc, team) => {
    //     if (!acc.find(d => d === team.division)) {
    //         return [...acc, team.division]
    //     }

    //     return acc; 
    // }, [])

    return (
        <StandingsContext.Provider value={{
            loading,
            divisions: ['1', '2'],
            ...data
        }}>
            {children}
        </StandingsContext.Provider>
    );
};

export const useStandings = () => React.useContext(StandingsContext);
export default StandingsContext; 