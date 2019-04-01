import http from './BaseServices';

const getActivePerformance = () => (
  http.get('/shows')
    .then(response => response.data)
)

const createArtist = (show) => { http.post('/shows', show)} //<-- ¿Será Show lo que le pase?

const deleteArtist= (id) => { http.delete('/shows', id)} //<-- ¿Será id lo que le pase?

const updateArtist= (id) => { http.delete('/shows', id)} //<-- ¿Será id lo que le pase?

const createPerformance = (show) => { http.post('/shows', show)} //<-- ¿Será Show lo que le pase?

const deletePerformance= (id) => { http.delete('/shows', id)} //<-- ¿Será id lo que le pase?

const updatePerformance= (id) => { http.delete('/shows', id)} //<-- ¿Será id lo que le pase?

const updateShow = (id) => { http.put('/shows', id)} //<-- ¿Será id lo que le pase?

const createShow = (show) => { http.post('/shows', show)} //<-- ¿Será Show lo que le pase?

const deleteShow = (id) => { http.delete('/shows', id)} //<-- ¿Será id lo que le pase?

const getArtistsList = (id) => { http.get('/shows', id)} //<-- ¿Será id lo que le pase?

const getShowsList = (id) => { http.get('/shows', id)} //<-- ¿Será id lo que le pase?


export default {
  getActivePerformance,
  createShow,
  deleteShow,
  updateShow,
  getArtistsList,
  getShowsList,
  createArtist,
  deleteArtist,
  updateArtist,
  createPerformance,
  deletePerformance,
  updatePerformance
}