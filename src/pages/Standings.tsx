import React, { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useStandings } from '../contexts/StandingsContext';
import TeamRow from '../components/TeamRow';

const divisionBtnClassName = "division rounded-full flex align-center justify-center w-6 h-6 leading-6 text-xs cursor-pointer";



export default function Standings() {
    const [animationParent] = useAutoAnimate();
    const [division, setDivision] = useState<'1' | '2'>('1');
    const { teams, placements, loading } = useStandings();

    const getTeamData = (teamId: string): Team | undefined => {
        return teams.find(team => team.id === teamId);
    }

    const sortedTeams = placements
        .filter(pl => pl.division === division)
        .map(pl => {
            const team = getTeamData(pl.teamId);

            return {
                ...team,
                ...pl
            }
        })
        .sort((a, b) => Number(a.place) - Number(b.place))
    
    console.log({ sortedTeams });

    return (
        <main ref={animationParent} className="standings-page">
            <div className="standings-banner flex flex-col gap-3 mb-14">
                <h1 className="text-2xl font-bold">Standings</h1>
                <div className="division-select flex justify-center items-center gap-2 text-sm text-white">
                    <span className="">By division: </span> 
                    <span className={`${divisionBtnClassName} ${division == '1' ? 'bg-slate-200 hover:bg-slate-300 text-black' : 'bg-slate-700 hover:bg-slate-600 text-white'}`} onClick={() => setDivision('1')}>1</span>
                    <span className={`${divisionBtnClassName} ${division == '2' ? 'bg-slate-200 hover:bg-slate-300 text-black' : 'bg-slate-700 hover:bg-slate-600 text-white'}`} onClick={() => setDivision('2')}>2</span>
                </div>
            </div>
            
            {loading && <div className="flex flex-col mx-auto w-44 justify-center align-center gap-4">
                <svg className="animate-spin mx-auto" width={23} height={23} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#ffffff" fillRule="evenodd" clipRule="evenodd"> <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"></path> <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path> </g> </g></svg>
                <span className="text-white text-sm">Loading match data</span>
            </div>}

            {!loading && (<div className="standings flex flex-col gap-2 w-full">
                <div className="list-of-teams flex flex-col gap-2">
                    {sortedTeams.map((team => <TeamRow
                        key={team.id}
                        {...team}
                    />))}
                </div>
            </div>)}
        </main>
    );
}