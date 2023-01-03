import banImg from "./assets/ban_placeholder.svg";
import topSplashR from "./assets/img/Fl/Top.png";
import jungSplashR from "./assets/img/Fl/Jg.png";
import midSplashR from "./assets/img/Fl/Mid.png";
import botSplashR from "./assets/img/Fl/Ad.png";
import supSplashR from "./assets/img/Fl/Sp.png";
import topSplash from "./assets/img/Top.png";
import jungSplash from "./assets/img/Jg.png";
import midSplash from "./assets/img/Mid.png";
import botSplash from "./assets/img/Ad.png";
import supSplash from "./assets/img/Sp.png";

const pickSplashes = [topSplash, jungSplash, midSplash, botSplash, supSplash];
const pickSplashesR = [
  topSplashR,
  jungSplashR,
  midSplashR,
  botSplashR,
  supSplashR,
];

const makeUrlAbsolute = (url, backendUrl) => {
  if (!url || !url.startsWith("/cache")) {
    return url;
  }

  const httpBackendUrl = backendUrl
    .replace("ws://", "http://")
    .replace("wss://", "https://");
  const components = httpBackendUrl.split("/");

  return components[0] + "//" + components[2] + url;
};

const putPlaceholders = (team, backendUrl) => {
  for (let i = 0; i < 5; i++) {
    // Picks
    // Check if exists
    if (i >= team.picks.length) {
      // Does not exists, push
      team.picks.push({
        champion: {
          loadingImg: pickSplashes[i],
        },
      });
    } else {
      // Exists, check!
      const pick = team.picks[i];
      if (!pick.champion || !pick.champion.loadingImg) {
        pick.champion = {
          loadingImg: pickSplashes[i],
        };
        // pick.spell1 = null;
        // pick.spell2 = null;
      }

      if (pick.spell1) {
        pick.spell1.icon = makeUrlAbsolute(pick.spell1.icon, backendUrl);
      }
      if (pick.spell2) {
        pick.spell2.icon = makeUrlAbsolute(pick.spell2.icon, backendUrl);
      }
      pick.champion.loadingImg = makeUrlAbsolute(
        pick.champion.loadingImg,
        backendUrl
      );
      pick.champion.splashImg = makeUrlAbsolute(
        pick.champion.splashImg,
        backendUrl
      );
      pick.champion.squareImg = makeUrlAbsolute(
        pick.champion.squareImg,
        backendUrl
      );
    }

    // Bans
    if (i >= team.bans.length) {
      // Does not exist
      team.bans.push({
        champion: {
          squareImg: banImg,
        },
      });
    } else {
      const ban = team.bans[i];
      if (!ban.champion || !ban.champion.squareImg) {
        ban.champion = {
          squareImg: banImg,
        };
      }

      ban.champion.squareImg = makeUrlAbsolute(
        ban.champion.squareImg,
        backendUrl
      );
    }
  }
};
const putPlaceholdersR = (team, backendUrl) => {
  for (let i = 0; i < 5; i++) {
    // Picks
    // Check if exists
    if (i >= team.picks.length) {
      // Does not exists, push
      team.picks.push({
        champion: {
          loadingImg: pickSplashesR[i],
        },
      });
    } else {
      // Exists, check!
      const pick = team.picks[i];
      if (!pick.champion || !pick.champion.loadingImg) {
        pick.champion = {
          loadingImg: pickSplashesR[i],
        };
        // pick.spell1 = null;
        // pick.spell2 = null;
      }

      if (pick.spell1) {
        pick.spell1.icon = makeUrlAbsolute(pick.spell1.icon, backendUrl);
      }
      if (pick.spell2) {
        pick.spell2.icon = makeUrlAbsolute(pick.spell2.icon, backendUrl);
      }
      pick.champion.loadingImg = makeUrlAbsolute(
        pick.champion.loadingImg,
        backendUrl
      );
      pick.champion.splashImg = makeUrlAbsolute(
        pick.champion.splashImg,
        backendUrl
      );
      pick.champion.squareImg = makeUrlAbsolute(
        pick.champion.squareImg,
        backendUrl
      );
    }

    // Bans
    if (i >= team.bans.length) {
      // Does not exist
      team.bans.push({
        champion: {
          squareImg: banImg,
        },
      });
    } else {
      const ban = team.bans[i];
      if (!ban.champion || !ban.champion.squareImg) {
        ban.champion = {
          squareImg: banImg,
        };
      }

      ban.champion.squareImg = makeUrlAbsolute(
        ban.champion.squareImg,
        backendUrl
      );
    }
  }
};

const convertState = (state, backendUrl) => {
  if (Object.keys(state).length !== 0) {
    putPlaceholders(state.blueTeam, backendUrl);
    putPlaceholdersR(state.redTeam, backendUrl);
  }
  return state;
};

export default convertState;
