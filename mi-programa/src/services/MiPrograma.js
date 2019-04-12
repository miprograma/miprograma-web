import http from "./BaseServices";

const getActivePerformance = (date = new Date()) =>
  http.get('/shows', { params: { date: '2019-04-08' }}).then(response => response.data);

const getSpecificShow = (id) => http.get(`/shows/${id}`).then(response => response.data);

const getShow = date =>
  http.get('/shows', { params: { date: date }}).then(response => response.data);

const updateShow = (show) =>
  http.put(`/shows/${show.id}`, show).then(response => response.data);

const setActive = (show) => http.put(`/shows/${show.id}/setActive`).then(response => response.data);

const getActive = () => http.get(`/shows/active`).then(response => response.data);

const getArtistsList = () =>
  http.get("/artists").then(response => response.data);


const getPerformanceList = () =>
  http.get("/performances").then(response => response.data);

const createShow = show => http.post("/shows", show)

const updateActivePerformance = (showId, sessionId, blockList) =>
  http.put('/shows/'+showId+'/sessions/'+sessionId, blockList).then(response => response.data);

const getAllShows = (params) => http.get('/shows', { params }).then(response => response.data);

const createArtist = show => {
  http.post("/shows", show);
}; //<-- ¿Será Show lo que le pase?

const deleteArtist = id => {
  http.delete("/shows", id);
}; //<-- ¿Será id lo que le pase?

const updateArtist = id => {
  http.delete("/shows", id);
}; //<-- ¿Será id lo que le pase?

const createPerformance = show => {
  http.post("/shows", show);
}; //<-- ¿Será Show lo que le pase?

const deletePerformance = id => {
  http.delete("/shows", id);
}; //<-- ¿Será id lo que le pase?

const updatePerformance = id => {
  http.delete("/shows", id);
}; //<-- ¿Será id lo que le pase?

const deleteShow = id => {
  http.delete("/shows", id);
}; //<-- ¿Será id lo que le pase?

const getShowsList = id => {
  http.get("/shows", id);
}; //<-- ¿Será id lo que le pase?

export default {
  getActivePerformance,
  getPerformanceList,
  createShow,
  deleteShow,
  getArtistsList,
  getShowsList,
  createArtist,
  deleteArtist,
  updateArtist,
  createPerformance,
  deletePerformance,
  updatePerformance,
  getShow,
  updateShow,
  updateActivePerformance,
  getAllShows,
  getSpecificShow,
  setActive,
  getActive
};
