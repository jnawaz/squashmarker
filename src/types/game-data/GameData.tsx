import {BestOfGames} from '../games/BestOfGames';
import {PointsPerGame} from '../points-per-game/PointsPerGame';
import {ScoringMethod} from '../scoring/ScoringMethod';
import {ServiceBox} from '../service-box/ServiceBox';

export type GameData = {
  homePlayerName: string | undefined;
  awayPlayerName: string | undefined;
  homePlayerGamesWon: number | undefined;
  awayPlayerGamesWon: number | undefined;
  currentGame: number | undefined;
  homePlayerPoints: number | undefined;
  awayPlayerPoints: number | undefined;
  bestOfGames: BestOfGames | undefined;
  pointsPerGame: PointsPerGame | undefined;
  scoringSystem: ScoringMethod | undefined;
  servingFrom: ServiceBox | undefined;
  playerServing: string | undefined;
  isServerDetermined: boolean;
  resetMatch: () => void;
};
