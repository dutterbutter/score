import React from 'react';
import Datepicker from '../Components/Datepicker';
import GameTable from '../Components/Games/GameTable';
import ScoreCard from '../Components/Games/ScoreCard';


const gameData = (props) => {

    const glanceGames = props.gameData.map(game => {
        return <GameTable
            key={game.id}
            home_team_name={game.home_name_abbrev}
            away_team_name={game.away_name_abbrev}
            home_score={game.linescore.r.home}
            away_score={game.linescore.r.away}
            status={game.status.status}
        />
    })

    const scoreCard = props.gameData.map(game => {
        return <ScoreCard key={game.id}
            id={game.id}
            home_team_city={game.home_team_city}
            home_team={game.home_team_name}
            away_team_city={game.away_team_city}
            away_team={game.away_team_name}
            status={game.status.status}
            home_score={game.linescore.r.home}
            away_score={game.linescore.r.away}
            innings={game.linescore.inning}
            run={game.linescore.r}
            homer={game.linescore.h}
            error={game.linescore.e}
            home_win={game.home_win}
            home_loss={game.home_loss}
            away_win={game.away_win}
            away_loss={game.away_loss}
            losing_pitcher = {game.losing_pitcher}
            winning_pitcher = {game.winning_pitcher}
            links = {game.links}
            media = {game.media}
            venue={game.venue}
            game_data_directory={game.game_data_directory}
            detailHandler={props.detailHandler}
        />
    })

    return (
        <div>
            <div className="container">
                <div className="left-align">
                    <Datepicker
                        dateParserHandler={props.dateParserHandler} />
                </div>
                <div>
                    <div className="row">
                        <div className="left-align">Games At a Glance </div>
                        {glanceGames}
                    </div>
                </div>
                {scoreCard}
            </div>
        </div>
    );
}


export default gameData;
