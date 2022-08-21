/**
 * Copyright (c) 2022 ZEP Co., LTD
 */
import { Script } from "vm";
import "zep-script";
const TileXYArray: { x: number; y: number; blackhallWhitehall: number }[] = [
  { x: 51, y: 40, blackhallWhitehall: 0 }, //0
  { x: 49, y: 39, blackhallWhitehall: 0 }, //1
  { x: 47, y: 38, blackhallWhitehall: 0 }, //2
  { x: 44, y: 36, blackhallWhitehall: 0 }, //3
  { x: 42, y: 35, blackhallWhitehall: 0 }, //4
  { x: 39, y: 34, blackhallWhitehall: 0 }, //5
  { x: 36, y: 33, blackhallWhitehall: 0 }, //6
  { x: 34, y: 31, blackhallWhitehall: 0 }, //7
  { x: 32, y: 30, blackhallWhitehall: 44 }, //8
  { x: 29, y: 29, blackhallWhitehall: 0 }, //9

  { x: 32, y: 28, blackhallWhitehall: 0 }, //10

  { x: 34, y: 29, blackhallWhitehall: 0 }, //11
  { x: 37, y: 30, blackhallWhitehall: 0 }, //12
  { x: 39, y: 31, blackhallWhitehall: 0 }, //13
  { x: 42, y: 33, blackhallWhitehall: 0 }, //14
  { x: 44, y: 34, blackhallWhitehall: 0 }, //15
  { x: 47, y: 35, blackhallWhitehall: 0 }, //16
  { x: 49, y: 37, blackhallWhitehall: 17 }, //17
  { x: 52, y: 38, blackhallWhitehall: 0 }, //18
  { x: 54, y: 39, blackhallWhitehall: 0 }, //19

  { x: 57, y: 38, blackhallWhitehall: 0 }, //20
  { x: 54, y: 36, blackhallWhitehall: 0 }, //21

  { x: 52, y: 35, blackhallWhitehall: 0 }, //22
  { x: 49, y: 34, blackhallWhitehall: 57 }, //23
  { x: 47, y: 33, blackhallWhitehall: 0 }, //24
  { x: 44, y: 32, blackhallWhitehall: 0 }, //25
  { x: 42, y: 30, blackhallWhitehall: 0 }, //26
  { x: 39, y: 29, blackhallWhitehall: 0 }, //27
  { x: 37, y: 28, blackhallWhitehall: 0 }, //27
  { x: 34, y: 26, blackhallWhitehall: 0 }, //29

  { x: 37, y: 25, blackhallWhitehall: 0 }, //30
  { x: 39, y: 26, blackhallWhitehall: 0 }, //31
  { x: 42, y: 28, blackhallWhitehall: 0 }, //32
  { x: 44, y: 29, blackhallWhitehall: -9 }, //33
  { x: 47, y: 30, blackhallWhitehall: 0 }, //34
  { x: 49, y: 31, blackhallWhitehall: 0 }, //35
  { x: 51, y: 33, blackhallWhitehall: 22 }, //36
  { x: 54, y: 34, blackhallWhitehall: 0 }, //37
  { x: 56, y: 35, blackhallWhitehall: 0 }, //38
  { x: 59, y: 36, blackhallWhitehall: 0 }, //39

  { x: 62, y: 35, blackhallWhitehall: 0 }, // 40
  { x: 59, y: 34, blackhallWhitehall: 0 }, //41
  { x: 57, y: 33, blackhallWhitehall: 0 }, //42
  { x: 54, y: 32, blackhallWhitehall: 0 }, //43
  { x: 51, y: 30, blackhallWhitehall: 0 }, //44
  { x: 49, y: 29, blackhallWhitehall: 0 }, //45
  { x: 47, y: 28, blackhallWhitehall: 35 }, //46
  { x: 44, y: 26, blackhallWhitehall: 0 }, //47
  { x: 42, y: 25, blackhallWhitehall: 0 }, //48
  { x: 39, y: 24, blackhallWhitehall: 22 }, //49

  { x: 42, y: 23, blackhallWhitehall: 0 }, //50
  { x: 44, y: 24, blackhallWhitehall: -24 }, //1
  { x: 46, y: 25, blackhallWhitehall: 0 }, //2
  { x: 49, y: 27, blackhallWhitehall: 0 }, //3
  { x: 52, y: 28, blackhallWhitehall: 0 }, //4
  { x: 54, y: 29, blackhallWhitehall: 0 }, //5
  { x: 57, y: 30, blackhallWhitehall: 0 }, //6
  { x: 59, y: 32, blackhallWhitehall: 0 }, //7
  { x: 62, y: 33, blackhallWhitehall: -22 }, //8
  { x: 64, y: 34, blackhallWhitehall: 0 }, //9

  //60
  { x: 67, y: 33, blackhallWhitehall: -40 },
  { x: 64, y: 31, blackhallWhitehall: 0 },
  { x: 61, y: 30, blackhallWhitehall: 0 },
  { x: 59, y: 29, blackhallWhitehall: 0 },
  { x: 57, y: 28, blackhallWhitehall: -60 },
  { x: 54, y: 27, blackhallWhitehall: 0 },
  { x: 51, y: 25, blackhallWhitehall: 0 },
  { x: 49, y: 24, blackhallWhitehall: 0 },
  { x: 46, y: 23, blackhallWhitehall: 0 },
  { x: 44, y: 21, blackhallWhitehall: 0 },
  //70
  { x: 46, y: 20, blackhallWhitehall: 0 },
  { x: 49, y: 21, blackhallWhitehall: 0 },
  { x: 52, y: 23, blackhallWhitehall: 0 },
  { x: 54, y: 24, blackhallWhitehall: 17 },
  { x: 57, y: 25, blackhallWhitehall: 0 },
  { x: 59, y: 26, blackhallWhitehall: 0 },
  { x: 62, y: 28, blackhallWhitehall: 0 },
  { x: 64, y: 29, blackhallWhitehall: 0 },
  { x: 66, y: 30, blackhallWhitehall: -22 },
  { x: 69, y: 32, blackhallWhitehall: 0 },
  //80
  { x: 72, y: 30, blackhallWhitehall: 0 },
  { x: 68, y: 29, blackhallWhitehall: 0 },
  { x: 66, y: 28, blackhallWhitehall: 0 },
  { x: 64, y: 26, blackhallWhitehall: 0 },
  { x: 61, y: 25, blackhallWhitehall: 0 },
  { x: 59, y: 24, blackhallWhitehall: 0 },
  { x: 57, y: 23, blackhallWhitehall: 0 },
  { x: 54, y: 22, blackhallWhitehall: 0 },
  { x: 52, y: 20, blackhallWhitehall: 0 },
  { x: 49, y: 19, blackhallWhitehall: 0 },
  //90
  { x: 52, y: 18, blackhallWhitehall: 0 },
  { x: 54, y: 19, blackhallWhitehall: 0 },
  { x: 56, y: 20, blackhallWhitehall: 0 },
  { x: 59, y: 21, blackhallWhitehall: 0 },
  { x: 62, y: 23, blackhallWhitehall: 0 },
  { x: 64, y: 24, blackhallWhitehall: 0 },
  { x: 67, y: 25, blackhallWhitehall: 0 },
  { x: 69, y: 26, blackhallWhitehall: 0 },
  { x: 72, y: 28, blackhallWhitehall: 0 },
  { x: 75, y: 29, blackhallWhitehall: 0 },
];

const STATE_INIT = 3000;
const STATE_READY = 3001;
const STATE_PLAYING = 3002;
const STATE_JUDGE = 3004;
const STATE_END = 3005;
const POSITIONLIMITS = 99;
let ONCE = false;
let PLAYER_COUNTER = 0;
let PRESENT_TURN = 0;
let DONT_TURN = false;
let _state = STATE_INIT;
let _stateTimer = 0;
let _start = false;
let _WhosTurn = -1;
let _players = ScriptApp.players; // App.players : get total players

const startState = (state: number) => {
  _stateTimer = 0;
  _state = state;

  switch (_state) {
    case STATE_INIT:
      _start = true;
      PRESENT_TURN = 0;
      break;
    case STATE_READY:
      for (let i in _players) {
        let p = _players[i];
        p.moveSpeed = 0;
        const { x, y } = TileXYArray[p.tag.position];
        p.spawnAt(x, y, 0);
        p.sendUpdated();
      }
      break;
    case STATE_PLAYING:
      ScriptApp.showCenterLabel("시작됨");
      ScriptApp.sayToAll("시작됨");
      for (let i in _players) {
        let p = _players[i];
        if (p.tag.turn === 0) {
          ScriptApp.showCenterLabel(
            `${p.name}부터 시작합니다. q를 눌러 주사위를 굴려 주새요!`
          );
          ScriptApp.sayToAll(
            `${p.name}부터 시작합니다. q를 눌러 주사위를 굴려 주새요!`
          );
        }
      }
      PRESENT_TURN = 0;

      break;
    case STATE_JUDGE:
      break;
  }
};
ScriptApp.onJoinPlayer.Add(function (p) {
  p.tag = {
    finish: false,
    turn: PLAYER_COUNTER,
    position: 0,
  };
  PLAYER_COUNTER++;
  _players = ScriptApp.players;
});

// ScriptApp.addOnKeyDown(81, function (player) {
//   ScriptApp.sayToAll(`현재 좌표ish: (${player.tileX}, ${player.tileY})`);
//   ScriptApp.sayToAll(`현재 속도: ${player.moveSpeed}`);
//   player.sendUpdated();
// });
const nextTurn = () => {
  let temp = PRESENT_TURN;
  temp += 1;
  temp = temp % PLAYER_COUNTER;
  PRESENT_TURN = temp;
  ScriptApp.sayToAll(
    `PRESENT_TURN ${PRESENT_TURN}, PLAYER_COUNTER ${PLAYER_COUNTER}`
  );
  DONT_TURN = false;
  for (let i in _players) {
    let p = _players[i];
    if (p.tag.turn === PRESENT_TURN) {
      ScriptApp.showCenterLabel(`${p.name}의 차례입니다.`);
      ScriptApp.sayToAll(`${p.name}의 차례입니다.`);
    }
  }
};

const CustomTileTouch = (move, player) => {
  if (TileXYArray[move].blackhallWhitehall == 0) {
    nextTurn();
  } else {
    const moveAfterTileTouch = move + TileXYArray[move].blackhallWhitehall;
    ScriptApp.showCenterLabel(
      `${
        TileXYArray[move].blackhallWhitehall < 0 ? "Blackhall" : "Whitehall"
      } 에 빠졋습니다. ${moveAfterTileTouch} 만큼 ${
        TileXYArray[move].blackhallWhitehall < 0 ? "뒤로" : "앞으로"
      }가겠습니다.`
    );
    ScriptApp.sayToAll(
      `${
        TileXYArray[move].blackhallWhitehall < 0 ? "Blackhall" : "Whitehall"
      } 에 빠졋습니다. ${moveAfterTileTouch} 만큼 ${
        TileXYArray[move].blackhallWhitehall < 0 ? "뒤로" : "앞으로"
      }가겠습니다.`
    );
    ScriptApp.runLater(() => {
      const { x, y } = TileXYArray[moveAfterTileTouch];
      player.tag.position = moveAfterTileTouch;
      player.spawnAt(x, y, 0);
      player.sendUpdated();
      nextTurn();
    }, 2);
  }
};

function RollingDiceMove(player) {
  const nextMove =
    Math.floor(Math.random() * (7 - 1)) +
    1 +
    Math.floor(Math.random() * (7 - 1)) +
    1;
  ScriptApp.showCenterLabel(`주사위 숫자는 ${nextMove} 입니다.`);
  ScriptApp.sayToAll(`주사위 숫자는 ${nextMove} 입니다.`);
  const move = player.tag.position + nextMove;
  if (move < POSITIONLIMITS) {
    ScriptApp.runLater(() => {
      ScriptApp.showCenterLabel(`${move}타일로 갔습니다.`);
      const { x, y } = TileXYArray[move];
      player.tag.position = move;
      player.spawnAt(x, y, 0);
      player.sendUpdated();
      CustomTileTouch(move, player);
    }, 1);
  } else {
    ScriptApp.showCenterLabel(` ${player.name}이 완주하셨습니다.`);
    ScriptApp.sayToAll(` ${player.name}이 완주하셨습니다.`);
    player.tag.finish = true;
    const { x, y } = TileXYArray[POSITIONLIMITS];
    player.moveSpeed = 80;
    player.spawnAt(x, y, 0);
    for (let i in _players) {
      let p = _players[i];
      if (p.tag.turn > player.tag.turn) {
        p.tag.turn -= 1;
      }
      p.sendUpdated();
    }
    player.sendUpdated();
    PLAYER_COUNTER--;
    PRESENT_TURN %= PLAYER_COUNTER;
    ScriptApp.sayToAll(
      `PRESENT_TURN ${PRESENT_TURN}, PLAYER_COUNTER ${PLAYER_COUNTER}`
    );
    DONT_TURN = false;
    for (let i in _players) {
      let p = _players[i];
      if (p.tag.turn === PRESENT_TURN) {
        ScriptApp.showCenterLabel(`${p.name}의 차례입니다.`);
        ScriptApp.sayToAll(`${p.name}의 차례입니다.`);
      }
    }
  }
}

ScriptApp.addOnKeyDown(81, function (player) {
  if (_state === STATE_PLAYING && DONT_TURN === false) {
    if (player.tag.turn === PRESENT_TURN) {
      DONT_TURN = true;
      RollingDiceMove(player);
    }
  }
});
ScriptApp.onStart.Add(() => {
  startState(STATE_INIT);
  // for (let f = 0; f < 100; f++) {
  //   for (let i in _players) {
  //     let p = _players[i];
  //     const { x, y } = TileXYArray[f];
  //     ScriptApp.runLater(() => {
  //       p.spawnAt(x, y, 0);
  //       ScriptApp.sayToAll(`x:${x}, y:${y}, TileNum: ${f}`);
  //     }, f);
  //   }
  // }
});
ScriptApp.onUpdate.Add(function (dt) {
  if (!_start) return;
  _stateTimer += dt;
  switch (_state) {
    case STATE_INIT:
      ScriptApp.showCenterLabel(`게임시작 합니다.`);
      ScriptApp.sayToAll(`게임시작 합니다.`);
      if (_stateTimer >= 2) {
        startState(STATE_READY);
      }
      break;
    case STATE_READY:
      ScriptApp.showCenterLabel(`시작전 1초전입니다.`);
      ScriptApp.sayToAll(`시작전 1초전입니다.`);
      if (_stateTimer >= 4) {
        startState(STATE_PLAYING);
      }
      break;

    case STATE_PLAYING:
      for (let i in _players) {
        let p = _players[i];
        if (p.tag.turn === PRESENT_TURN) {
          p.spotlight = true;
        } else {
          p.spotlight = false;
        }
      }
      break;
    case STATE_END:
      for (let i in _players) {
        let p = _players[i];
        p.moveSpeed = 80;
        ScriptApp.showCenterLabel("끝!!");
      }
      break;
  }
});

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});
