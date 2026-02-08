import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkAlerts, getParkVisitorCenters} from "./parkService.mjs";
import "../css/conditions.css";
import "../css/style.css";
import {activityListTemplate, alertTemplate, visitorCenterTemplate} from "./templates.mjs";


function setVisitorCenters(centers) {
  const centersContainer = document.querySelector(".visitor ul");
  const html = centers.map(visitorCenterTemplate);
  centersContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(".activities ul");
  const html = activityListTemplate(activities);
  activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

async function init() {
  const parkData = await getParkData();
  const alerts = await getParkAlerts(parkData.parkCode);
  const visitorCenters = await getParkVisitorCenters(parkData.parkCode);
  setHeaderFooter(parkData);
  setAlerts(alerts);
  setVisitorCenters(visitorCenters);
  setActivities(parkData.activities);
}

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

init();