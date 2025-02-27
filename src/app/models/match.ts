export class match {
  player1Id?: number;
  player2Id?: number;
  winnerId?: number;
  decided: boolean = false;
  round?: number;
  nextMatch?: match
}
