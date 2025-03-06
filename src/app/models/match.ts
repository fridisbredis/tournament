export class match {
  id: number = 0;
  player1Id?: number;
  player2Id?: number;
  winnerId?: number;
  decided: boolean = false;
  round?: number;
  locked: boolean = false;
  nextMatch?: match
}
