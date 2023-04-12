import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BackIcon from '../components/BackIcon';
import { useStandings } from '../contexts/StandingsContext';

export default function Team() {
    const [team, setTeam] = useState<Team>({
        id: '',
        name: '',
        iconSrc: '',
        division: '',
        players: []
    });
    const { teams, placements, loading } = useStandings();
    const { state } = useLocation();
    const { id } = state;

    useEffect(() => {
        console.log({id, teams})
        const team = teams.find(team => team.id === id);
        if (team) setTeam(team);
    }, [])

    return (
        <div className="team-banner flex justify-center items-center flex-col gap-0 mb-14">
            <Link to="/">
                <BackIcon width={21} height={21} />
            </Link>
            
            <img src={team.iconSrc || "https://i.postimg.cc/sXkVMQ9B/dota2-logo.png"} alt={team.name} className="w-24 h-24 rounded-full mb-5" />
            <h1 className="text-2xl font-bold">{team.name}</h1>

            <div className="w-full mt-8 flex flex-col rounded-md bg-slate-700">
                {(team.players.length > 0) && team.players.map(player => (
                    <div className="w-full flex flex-col gap-1 py-4 px-6" style={{borderBottom: '1px solid rgba(255,255,255,0.07)'}}>
                        <span className="text-md font-bold">
                            {player.name}
                        </span>
                        <span className="text-base font-normal">
                            ({player.nick})
                        </span>
                    </div>
                ))}
            </div>

            {/* wip */}
            {/* <h2 className="text-1xl font-bold">Matches</h2> */}
        </div>
    );
}