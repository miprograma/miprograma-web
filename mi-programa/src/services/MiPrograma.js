import http from './BaseServices';

const getActivePerformance = () => { http.get('/active-performance') .then (response => response.data) }

const createShow = (show) => { http.post('/shows', show)} //<-- ¿Será Show lo que le pase?

const deleteShow = (id) => { http.delete('/shows', id)} //<-- ¿Será id lo que le pase?



export default {
  getActivePerformance,
  createShow,
  deleteShow
}