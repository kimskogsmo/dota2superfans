import React from 'react';
import { Link } from 'react-router-dom';

const statsClassNames = "flex flex-col gap-1 justify-center items-center";

const TeamRow = ({ id, name, iconSrc, place, won, lost, score }: TeamRow): JSX.Element => {
    return (
        <Link to={`/team/${id}`} state={{ id }} className="flex flex-row justify-between items-center gap-4 rounded-md bg-slate-900 hover:bg-slate-700 w-full py-4 px-5 overflow-hidden">
            <div className="team-row-left flex flex-row items-center gap-3">
                {place && <div>{place}</div>}
                <img src={iconSrc ?? "https://i.postimg.cc/sXkVMQ9B/dota2-logo.png"} alt={name} className="w-8 h-8 rounded-full" />
                <span className="inline text-white h-max">{name}</span>
            </div>

            <div className="team-row-right flex gap-3 text-xs uppercase">
                <div className={statsClassNames}>
                    W{won}/L{lost} ({(Number(won) / (Number(won) + Number(lost)) * 100).toFixed(2)}%)
                </div>
            </div>
        </Link>
    );
};

export default TeamRow;